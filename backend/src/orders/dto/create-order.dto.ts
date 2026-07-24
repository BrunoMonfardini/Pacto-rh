import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsInt, IsNotEmpty, IsOptional, IsString, Min, ValidateNested } from 'class-validator';

export class OrderAddressDto {
  @IsNotEmpty()
  street!: string;

  @IsNotEmpty()
  number!: string;

  @IsOptional()
  @IsString()
  complement?: string;

  @IsNotEmpty()
  neighborhood!: string;

  @IsNotEmpty()
  city!: string;

  @IsNotEmpty()
  state!: string;

  @IsNotEmpty()
  zipCode!: string;
}

export class OrderItemDto {
  @IsNotEmpty()
  productId!: string;

  @IsInt()
  @Min(1)
  quantity!: number;
}

export class CreateOrderDto {
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items!: OrderItemDto[];

  @ValidateNested()
  @Type(() => OrderAddressDto)
  billingAddress!: OrderAddressDto;

  @IsNotEmpty()
  paymentMethodId!: string;
}
