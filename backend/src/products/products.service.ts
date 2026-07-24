import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '@prisma/client';

export interface ProductResponse {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  coverImage: string;
  price: number;
  originalPrice?: number;
  type: 'ebook' | 'course' | 'mentoring';
  topics: string[];
  benefits: string[];
  featured: boolean;
}

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  toResponse(product: Product): ProductResponse {
    return {
      id: product.id,
      slug: product.slug,
      name: product.name,
      description: product.description ?? '',
      longDescription: product.longDescription ?? '',
      coverImage: product.coverImage ?? '',
      price: product.price,
      originalPrice: product.originalPrice ?? undefined,
      type: product.type as ProductResponse['type'],
      topics: product.topics,
      benefits: product.benefits,
      featured: product.featured,
    };
  }

  async findAll(): Promise<ProductResponse[]> {
    const products = await this.prisma.product.findMany();
    return products.map((product) => this.toResponse(product));
  }

  async findById(id: string): Promise<ProductResponse> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Produto não encontrado');
    return this.toResponse(product);
  }

  async findBySlug(slug: string): Promise<ProductResponse> {
    const product = await this.prisma.product.findUnique({ where: { slug } });
    if (!product) throw new NotFoundException('Produto não encontrado');
    return this.toResponse(product);
  }
}
