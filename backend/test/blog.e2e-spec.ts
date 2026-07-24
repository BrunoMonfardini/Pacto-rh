import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from './../src/prisma/prisma.service';

describe('Blog (e2e)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;
  let postId: string;
  const slug = `post-e2e-${Date.now()}`;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    prisma = app.get(PrismaService);

    const post = await prisma.blogPost.create({
      data: {
        title: 'Post de teste e2e',
        slug,
        excerpt: 'Resumo',
        content: '<p>Conteúdo</p>',
        coverImage: 'https://example.com/cover.jpg',
        publishedAt: new Date(),
        readingTime: 5,
        tags: ['rh', 'lideranca'],
      },
    });
    postId = post.id;
  });

  afterAll(async () => {
    await prisma.blogPost.delete({ where: { id: postId } }).catch(() => undefined);
    await app.close();
  });

  it('GET /blog returns an array containing the seeded post', async () => {
    const res = await request(app.getHttpServer()).get('/blog').expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.some((p: { id: string }) => p.id === postId)).toBe(true);
  });

  it('GET /blog/:id returns the post matching the BlogPost shape', async () => {
    const res = await request(app.getHttpServer()).get(`/blog/${postId}`).expect(200);
    expect(res.body).toMatchObject({
      id: postId,
      title: 'Post de teste e2e',
      slug,
      tags: ['rh', 'lideranca'],
    });
  });

  it('GET /blog/slug/:slug returns the same post', async () => {
    const res = await request(app.getHttpServer()).get(`/blog/slug/${slug}`).expect(200);
    expect(res.body.id).toBe(postId);
  });

  it('GET /blog/:id with an unknown id returns 404', () => {
    return request(app.getHttpServer()).get('/blog/does-not-exist').expect(404);
  });
});
