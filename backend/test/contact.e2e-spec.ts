import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from './../src/prisma/prisma.service';

describe('Contact (e2e)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    await app.init();
    prisma = app.get(PrismaService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /contact persists the message and returns { success, message }', async () => {
    const email = `contato-e2e-${Date.now()}@example.com`;

    const res = await request(app.getHttpServer())
      .post('/contact')
      .send({
        name: 'Visitante E2E',
        email,
        subject: 'Dúvida sobre serviços',
        message: 'Gostaria de mais informações.',
      })
      .expect(201);

    expect(res.body).toEqual({ success: true, message: expect.any(String) });

    const saved = await prisma.contactMessage.findFirst({ where: { email } });
    expect(saved).not.toBeNull();
    expect(saved?.subject).toBe('Dúvida sobre serviços');
  });

  it('POST /contact without required fields is rejected with 400', () => {
    return request(app.getHttpServer()).post('/contact').send({ email: 'invalid' }).expect(400);
  });
});
