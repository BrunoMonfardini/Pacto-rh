import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from './../src/prisma/prisma.service';

describe('Products (e2e)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;
  let productId: string;
  const slug = `produto-e2e-${Date.now()}`;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    prisma = app.get(PrismaService);

    const product = await prisma.product.create({
      data: {
        slug,
        name: 'E-book de teste',
        description: 'Descrição curta',
        longDescription: 'Descrição longa',
        coverImage: 'https://example.com/cover.jpg',
        price: 4700,
        type: 'ebook',
        topics: ['tema1', 'tema2'],
        benefits: ['beneficio1'],
        featured: true,
      },
    });
    productId = product.id;
  });

  afterAll(async () => {
    await prisma.product.delete({ where: { id: productId } }).catch(() => undefined);
    await app.close();
  });

  it('GET /products returns an array containing the seeded product', async () => {
    const res = await request(app.getHttpServer()).get('/products').expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.some((p: { id: string }) => p.id === productId)).toBe(true);
  });

  it('GET /products/:id returns the product matching the Product shape', async () => {
    const res = await request(app.getHttpServer()).get(`/products/${productId}`).expect(200);
    expect(res.body).toMatchObject({
      id: productId,
      slug,
      name: 'E-book de teste',
      price: 4700,
      type: 'ebook',
      featured: true,
    });
  });

  it('GET /products/slug/:slug returns the same product', async () => {
    const res = await request(app.getHttpServer()).get(`/products/slug/${slug}`).expect(200);
    expect(res.body.id).toBe(productId);
  });

  it('GET /products/:id with an unknown id returns 404', () => {
    return request(app.getHttpServer()).get('/products/does-not-exist').expect(404);
  });
});
