import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { randomBytes, createHash } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  roles: Role[];
  avatar?: string;
  createdAt: string;
}

export interface AuthTokensResponse {
  accessToken: string;
  refreshToken: string;
}

const RESET_TOKEN_TTL_MS = 60 * 60 * 1000;
const VERIFY_TOKEN_TTL_MS = 24 * 60 * 60 * 1000;

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  private toUserResponse(user: {
    id: string;
    name: string;
    email: string;
    roles: Role[];
    avatar: string | null;
    createdAt: Date;
  }): UserResponse {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles,
      avatar: user.avatar ?? undefined,
      createdAt: user.createdAt.toISOString(),
    };
  }

  private hashToken(token: string): string {
    return createHash('sha256').update(token).digest('hex');
  }

  private async issueTokens(user: { id: string; email: string; roles: Role[] }): Promise<AuthTokensResponse> {
    const payload = { sub: user.id, email: user.email, roles: user.roles };

    const accessToken = await this.jwt.signAsync(
      { ...payload, jti: randomBytes(8).toString('hex') },
      {
        secret: this.config.get<string>('JWT_ACCESS_SECRET'),
        expiresIn: this.config.get<string>('JWT_ACCESS_EXPIRES_IN') as unknown as number,
      },
    );

    const refreshExpiresIn = this.config.get<string>('JWT_REFRESH_EXPIRES_IN')!;
    const refreshToken = await this.jwt.signAsync(
      { ...payload, jti: randomBytes(8).toString('hex') },
      {
        secret: this.config.get<string>('JWT_REFRESH_SECRET'),
        expiresIn: refreshExpiresIn as unknown as number,
      },
    );

    await this.prisma.refreshToken.create({
      data: {
        tokenHash: this.hashToken(refreshToken),
        userId: user.id,
        expiresAt: new Date(Date.now() + this.parseExpiresInMs(refreshExpiresIn)),
      },
    });

    return { accessToken, refreshToken };
  }

  private parseExpiresInMs(expiresIn: string): number {
    const match = /^(\d+)([smhd])$/.exec(expiresIn);
    if (!match) return 7 * 24 * 60 * 60 * 1000;
    const value = Number(match[1]);
    const unit = match[2];
    const unitMs = { s: 1000, m: 60_000, h: 3_600_000, d: 86_400_000 }[unit]!;
    return value * unitMs;
  }

  async register(dto: RegisterDto): Promise<{ user: UserResponse; tokens: AuthTokensResponse }> {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existing) {
      throw new ConflictException('E-mail já cadastrado');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);
    const emailVerifyToken = randomBytes(32).toString('hex');

    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        passwordHash,
        roles: [Role.customer],
        emailVerifyToken,
        emailVerifyExpiresAt: new Date(Date.now() + VERIFY_TOKEN_TTL_MS),
      },
    });

    // eslint-disable-next-line no-console
    console.log(`[auth] verify-email token for ${user.email}: ${emailVerifyToken}`);

    const tokens = await this.issueTokens(user);
    return { user: this.toUserResponse(user), tokens };
  }

  async login(dto: LoginDto): Promise<{ user: UserResponse; tokens: AuthTokensResponse }> {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.passwordHash);
    if (!passwordMatches) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const tokens = await this.issueTokens(user);
    return { user: this.toUserResponse(user), tokens };
  }

  async refresh(refreshToken: string): Promise<AuthTokensResponse> {
    let payload: { sub: string; email: string; roles: Role[] };
    try {
      payload = await this.jwt.verifyAsync(refreshToken, {
        secret: this.config.get<string>('JWT_REFRESH_SECRET'),
      });
    } catch {
      throw new UnauthorizedException('Refresh token inválido');
    }

    const tokenHash = this.hashToken(refreshToken);
    const stored = await this.prisma.refreshToken.findUnique({ where: { tokenHash } });
    if (!stored || stored.revokedAt || stored.expiresAt < new Date()) {
      throw new UnauthorizedException('Refresh token inválido');
    }

    const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
    if (!user) {
      throw new UnauthorizedException('Refresh token inválido');
    }

    await this.prisma.refreshToken.update({
      where: { id: stored.id },
      data: { revokedAt: new Date() },
    });

    return this.issueTokens(user);
  }

  async logout(userId: string): Promise<void> {
    await this.prisma.refreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  async me(userId: string): Promise<UserResponse> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.toUserResponse(user);
  }

  async forgotPassword(email: string): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user) {
      const resetToken = randomBytes(32).toString('hex');
      await this.prisma.user.update({
        where: { id: user.id },
        data: { resetToken, resetTokenExpiresAt: new Date(Date.now() + RESET_TOKEN_TTL_MS) },
      });
      // eslint-disable-next-line no-console
      console.log(`[auth] reset-password token for ${email}: ${resetToken}`);
    }

    return { message: 'Se o e-mail existir, você receberá instruções para redefinir a senha.' };
  }

  async resetPassword(token: string, newPassword: string): Promise<{ message: string }> {
    const user = await this.prisma.user.findFirst({ where: { resetToken: token } });
    if (!user || !user.resetTokenExpiresAt || user.resetTokenExpiresAt < new Date()) {
      throw new UnauthorizedException('Token inválido ou expirado');
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);
    await this.prisma.user.update({
      where: { id: user.id },
      data: { passwordHash, resetToken: null, resetTokenExpiresAt: null },
    });

    return { message: 'Senha redefinida com sucesso.' };
  }

  async verifyEmail(token: string): Promise<{ message: string }> {
    const user = await this.prisma.user.findFirst({ where: { emailVerifyToken: token } });
    if (!user || !user.emailVerifyExpiresAt || user.emailVerifyExpiresAt < new Date()) {
      throw new UnauthorizedException('Token inválido ou expirado');
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: { emailVerifiedAt: new Date(), emailVerifyToken: null, emailVerifyExpiresAt: null },
    });

    return { message: 'E-mail verificado com sucesso.' };
  }
}
