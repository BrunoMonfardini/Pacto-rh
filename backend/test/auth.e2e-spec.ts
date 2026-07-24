import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('Auth (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /auth/me without a token is rejected with 401', () => {
    return request(app.getHttpServer()).get('/auth/me').expect(401);
  });

  it('registers, logs in and reaches /auth/me with the issued token', async () => {
    const email = `e2e-${Date.now()}@example.com`;

    const registerRes = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ name: 'E2E User', email, password: 'senha12345' })
      .expect(201);

    expect(registerRes.body.user.email).toBe(email);
    expect(registerRes.body.tokens.accessToken).toEqual(expect.any(String));

    const loginRes = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email, password: 'senha12345' })
      .expect(201);

    const { accessToken } = loginRes.body.tokens;

    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.email).toBe(email);
      });
  });

  it('rejects login with wrong password with 401', async () => {
    const email = `e2e-wrong-${Date.now()}@example.com`;
    await request(app.getHttpServer())
      .post('/auth/register')
      .send({ name: 'E2E User', email, password: 'senha12345' })
      .expect(201);

    await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email, password: 'not-the-password' })
      .expect(401);
  });
});
