import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from './../src/prisma/prisma.service';

describe('Orders (e2e)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;
  let accessToken: string;
  let productId: string;
  const productPrice = 9900;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    await app.init();
    prisma = app.get(PrismaService);

    const email = `orders-e2e-${Date.now()}@example.com`;
    const registerRes = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ name: 'Comprador E2E', email, password: 'senha12345' })
      .expect(201);
    accessToken = registerRes.body.tokens.accessToken;

    const product = await prisma.product.create({
      data: {
        slug: `produto-orders-e2e-${Date.now()}`,
        name: 'Curso de teste',
        price: productPrice,
        type: 'course',
        topics: [],
        benefits: [],
      },
    });
    productId = product.id;
  });

  afterAll(async () => {
    await prisma.order.deleteMany({ where: { items: { some: { productId } } } });
    await prisma.product.delete({ where: { id: productId } }).catch(() => undefined);
    await app.close();
  });

  it('POST /orders without a token is rejected with 401', () => {
    return request(app.getHttpServer())
      .post('/orders')
      .send({ items: [{ productId, quantity: 1 }], billingAddress: {}, paymentMethodId: 'pm_test' })
      .expect(401);
  });

  it('creates an order and returns the Order shape with the computed total', async () => {
    const res = await request(app.getHttpServer())
      .post('/orders')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        items: [{ productId, quantity: 2 }],
        billingAddress: {
          street: 'Rua Teste',
          number: '100',
          neighborhood: 'Centro',
          city: 'São Paulo',
          state: 'SP',
          zipCode: '01000-000',
        },
        paymentMethodId: 'pm_test',
      })
      .expect(201);

    expect(res.body.total).toBe(productPrice * 2);
    expect(res.body.status).toBe('pending');
    expect(res.body.items).toHaveLength(1);
    expect(res.body.items[0].quantity).toBe(2);
    expect(res.body.items[0].product.id).toBe(productId);
    expect(res.body.billingAddress.city).toBe('São Paulo');
  });

  it('GET /orders lists only the current user orders', async () => {
    const res = await request(app.getHttpServer())
      .get('/orders')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('GET /orders/:id returns the order for its owner', async () => {
    const list = await request(app.getHttpServer())
      .get('/orders')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    const orderId = list.body[0].id;

    const res = await request(app.getHttpServer())
      .get(`/orders/${orderId}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200);

    expect(res.body.id).toBe(orderId);
  });
});
