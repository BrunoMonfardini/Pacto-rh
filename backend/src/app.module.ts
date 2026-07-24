import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BlogModule } from './blog/blog.module';
import { ProductsModule } from './products/products.module';
import { ContactModule } from './contact/contact.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, AuthModule, BlogModule, ProductsModule, ContactModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
