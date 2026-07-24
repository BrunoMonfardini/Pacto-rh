import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

export interface ContactResponse {
  success: boolean;
  message: string;
}

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateContactDto): Promise<ContactResponse> {
    await this.prisma.contactMessage.create({ data: dto });
    return { success: true, message: 'Mensagem recebida com sucesso.' };
  }
}
