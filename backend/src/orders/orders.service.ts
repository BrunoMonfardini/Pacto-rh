import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Order, OrderItem, OrderStatus, Product } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsService, ProductResponse } from '../products/products.service';
import { CreateOrderDto } from './dto/create-order.dto';

export interface OrderAddressResponse {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface OrderResponse {
  id: string;
  items: { product: ProductResponse; quantity: number }[];
  total: number;
  status: OrderStatus;
  billingAddress: OrderAddressResponse;
  createdAt: string;
}

type OrderWithItems = Order & { items: (OrderItem & { product: Product })[] };

@Injectable()
export class OrdersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productsService: ProductsService,
  ) {}

  private toResponse(order: OrderWithItems): OrderResponse {
    return {
      id: order.id,
      items: order.items.map((item) => ({
        product: this.productsService.toResponse(item.product),
        quantity: item.quantity,
      })),
      total: order.total,
      status: order.status,
      billingAddress: {
        street: order.street,
        number: order.number,
        complement: order.complement ?? undefined,
        neighborhood: order.neighborhood,
        city: order.city,
        state: order.state,
        zipCode: order.zipCode,
      },
      createdAt: order.createdAt.toISOString(),
    };
  }

  async create(userId: string, dto: CreateOrderDto): Promise<OrderResponse> {
    const productIds = dto.items.map((item) => item.productId);
    const products = await this.prisma.product.findMany({ where: { id: { in: productIds } } });

    if (products.length !== new Set(productIds).size) {
      throw new BadRequestException('Um ou mais produtos do pedido não existem');
    }

    const priceByProductId = new Map(products.map((product) => [product.id, product.price]));
    const total = dto.items.reduce((sum, item) => sum + priceByProductId.get(item.productId)! * item.quantity, 0);

    const order = await this.prisma.order.create({
      data: {
        userId,
        total,
        paymentMethodId: dto.paymentMethodId,
        street: dto.billingAddress.street,
        number: dto.billingAddress.number,
        complement: dto.billingAddress.complement,
        neighborhood: dto.billingAddress.neighborhood,
        city: dto.billingAddress.city,
        state: dto.billingAddress.state,
        zipCode: dto.billingAddress.zipCode,
        items: {
          create: dto.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            unitPrice: priceByProductId.get(item.productId)!,
          })),
        },
      },
      include: { items: { include: { product: true } } },
    });

    return this.toResponse(order);
  }

  async findAllForUser(userId: string): Promise<OrderResponse[]> {
    const orders = await this.prisma.order.findMany({
      where: { userId },
      include: { items: { include: { product: true } } },
      orderBy: { createdAt: 'desc' },
    });
    return orders.map((order) => this.toResponse(order));
  }

  async findOneForUser(userId: string, id: string): Promise<OrderResponse> {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { items: { include: { product: true } } },
    });
    if (!order || order.userId !== userId) {
      throw new NotFoundException('Pedido não encontrado');
    }
    return this.toResponse(order);
  }
}
