import { Product } from '../../../core/models';

export interface CartItem {
  product: Product;
  quantity: number;
}
