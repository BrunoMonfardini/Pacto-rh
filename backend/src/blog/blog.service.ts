import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BlogPost } from '@prisma/client';

export interface BlogPostResponse {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
}

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  private toResponse(post: BlogPost): BlogPostResponse {
    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt ?? '',
      content: post.content ?? '',
      coverImage: post.coverImage ?? '',
      publishedAt: (post.publishedAt ?? post.createdAt).toISOString(),
      readingTime: post.readingTime ?? 0,
      tags: post.tags,
    };
  }

  async findAll(): Promise<BlogPostResponse[]> {
    const posts = await this.prisma.blogPost.findMany({ orderBy: { createdAt: 'desc' } });
    return posts.map((post) => this.toResponse(post));
  }

  async findById(id: string): Promise<BlogPostResponse> {
    const post = await this.prisma.blogPost.findUnique({ where: { id } });
    if (!post) throw new NotFoundException('Post não encontrado');
    return this.toResponse(post);
  }

  async findBySlug(slug: string): Promise<BlogPostResponse> {
    const post = await this.prisma.blogPost.findUnique({ where: { slug } });
    if (!post) throw new NotFoundException('Post não encontrado');
    return this.toResponse(post);
  }
}
