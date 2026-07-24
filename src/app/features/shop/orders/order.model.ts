import { CartItem } from '../cart/cart.model';
import { Address } from '../checkout/checkout.model';

export type OrderStatus = 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  billingAddress: Address;
  createdAt: string;
}
