import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../../core/models';
import { CartItem } from './cart.model';

const CART_STORAGE_KEY = 'pacto_rh_cart';

/**
 * Estado do carrinho — a única peça da loja com lógica real hoje
 * (não depende de telas para ser útil/testável). O restante de
 * features/shop é apenas modelagem, aguardando as telas futuras.
 */
@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _items = signal<CartItem[]>(this.restore());
  readonly items = this._items.asReadonly();

  readonly itemCount = computed(() => this._items().reduce((sum, item) => sum + item.quantity, 0));
  readonly subtotal = computed(() => this._items().reduce((sum, item) => sum + item.product.price * item.quantity, 0));

  add(product: Product, quantity = 1): void {
    const items = this._items();
    const existing = items.find((item) => item.product.id === product.id);

    const next = existing
      ? items.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      : [...items, { product, quantity }];

    this.update(next);
  }

  updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) {
      this.remove(productId);
      return;
    }
    this.update(this._items().map((item) => (item.product.id === productId ? { ...item, quantity } : item)));
  }

  remove(productId: string): void {
    this.update(this._items().filter((item) => item.product.id !== productId));
  }

  clear(): void {
    this.update([]);
  }

  private update(items: CartItem[]): void {
    this._items.set(items);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }

  private restore(): CartItem[] {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  }
}
