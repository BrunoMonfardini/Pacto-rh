import { ConflictException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: {
    user: Record<string, jest.Mock>;
    refreshToken: Record<string, jest.Mock>;
  };
  let jwt: JwtService;

  const baseUser = {
    id: 'user-1',
    name: 'Bruno',
    email: 'bruno@example.com',
    roles: [Role.customer],
    avatar: null,
    createdAt: new Date('2026-01-01T00:00:00.000Z'),
    passwordHash: '',
    emailVerifiedAt: null,
    emailVerifyToken: null,
    emailVerifyExpiresAt: null,
    resetToken: null,
    resetTokenExpiresAt: null,
  };

  beforeEach(async () => {
    prisma = {
      user: {
        findUnique: jest.fn(),
        findFirst: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
      },
      refreshToken: {
        create: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        updateMany: jest.fn(),
      },
    };

    const config = new ConfigService({
      JWT_ACCESS_SECRET: 'access-secret',
      JWT_REFRESH_SECRET: 'refresh-secret',
      JWT_ACCESS_EXPIRES_IN: '15m',
      JWT_REFRESH_EXPIRES_IN: '7d',
    });
    jwt = new JwtService();

    service = new AuthService(prisma as unknown as PrismaService, jwt, config);
  });

  describe('register', () => {
    it('hashes the password before persisting the user (never stores plaintext)', async () => {
      prisma.user.findUnique.mockResolvedValue(null);
      prisma.user.create.mockImplementation(({ data }) =>
        Promise.resolve({ ...baseUser, ...data }),
      );
      prisma.refreshToken.create.mockResolvedValue({});

      await service.register({ name: 'Bruno', email: 'bruno@example.com', password: 'plain-password' });

      const persistedHash = prisma.user.create.mock.calls[0][0].data.passwordHash;
      expect(persistedHash).not.toBe('plain-password');
      expect(await bcrypt.compare('plain-password', persistedHash)).toBe(true);
    });

    it('rejects registration when the e-mail is already taken', async () => {
      prisma.user.findUnique.mockResolvedValue(baseUser);

      await expect(
        service.register({ name: 'Bruno', email: 'bruno@example.com', password: 'plain-password' }),
      ).rejects.toBeInstanceOf(ConflictException);
    });
  });

  describe('login', () => {
    it('issues a signed access token and refresh token on valid credentials', async () => {
      const passwordHash = await bcrypt.hash('correct-password', 10);
      prisma.user.findUnique.mockResolvedValue({ ...baseUser, passwordHash });
      prisma.refreshToken.create.mockResolvedValue({});

      const result = await service.login({ email: 'bruno@example.com', password: 'correct-password' });

      expect(result.tokens.accessToken).toEqual(expect.any(String));
      expect(result.tokens.refreshToken).toEqual(expect.any(String));
      const decoded = jwt.decode(result.tokens.accessToken) as { sub: string; email: string };
      expect(decoded.sub).toBe(baseUser.id);
      expect(decoded.email).toBe(baseUser.email);
    });

    it('rejects login with wrong password', async () => {
      const passwordHash = await bcrypt.hash('correct-password', 10);
      prisma.user.findUnique.mockResolvedValue({ ...baseUser, passwordHash });

      await expect(
        service.login({ email: 'bruno@example.com', password: 'wrong-password' }),
      ).rejects.toBeInstanceOf(UnauthorizedException);
    });

    it('rejects login for an e-mail that does not exist', async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(
        service.login({ email: 'nobody@example.com', password: 'whatever' }),
      ).rejects.toBeInstanceOf(UnauthorizedException);
    });
  });
});
