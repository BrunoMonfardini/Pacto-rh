import { beforeEach, describe, expect, it } from 'vitest';
import { CartService } from './cart.service';
import { Product } from '../../../core/models';

function buildProduct(overrides: Partial<Product> = {}): Product {
  return {
    id: 1,
    slug: 'ebook-lideranca',
    name: 'E-book de Liderança',
    description: '',
    longDescription: '',
    coverImage: '',
    price: 4700,
    type: 'ebook',
    topics: [],
    benefits: [],
    featured: false,
    ...overrides,
  };
}

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    localStorage.clear();
    service = new CartService();
  });

  it('começa vazio', () => {
    expect(service.items()).toEqual([]);
    expect(service.itemCount()).toBe(0);
    expect(service.subtotal()).toBe(0);
  });

  it('adiciona um produto novo ao carrinho', () => {
    service.add(buildProduct());

    expect(service.items()).toHaveLength(1);
    expect(service.itemCount()).toBe(1);
    expect(service.subtotal()).toBe(4700);
  });

  it('incrementa a quantidade ao adicionar o mesmo produto de novo', () => {
    const product = buildProduct();
    service.add(product);
    service.add(product, 2);

    expect(service.items()).toHaveLength(1);
    expect(service.items()[0].quantity).toBe(3);
    expect(service.itemCount()).toBe(3);
    expect(service.subtotal()).toBe(4700 * 3);
  });

  it('atualiza a quantidade de um item existente', () => {
    const product = buildProduct();
    service.add(product);

    service.updateQuantity(product.id, 5);

    expect(service.items()[0].quantity).toBe(5);
  });

  it('remove o item quando a quantidade é zero ou menos', () => {
    const product = buildProduct();
    service.add(product);

    service.updateQuantity(product.id, 0);

    expect(service.items()).toEqual([]);
  });

  it('remove um produto explicitamente', () => {
    const product = buildProduct();
    service.add(product);

    service.remove(product.id);

    expect(service.items()).toEqual([]);
  });

  it('esvazia o carrinho', () => {
    service.add(buildProduct({ id: 1 }));
    service.add(buildProduct({ id: 2 }));

    service.clear();

    expect(service.items()).toEqual([]);
  });

  it('calcula o subtotal somando produtos distintos', () => {
    service.add(buildProduct({ id: 1, price: 4700 }));
    service.add(buildProduct({ id: 2, price: 9900 }), 2);

    expect(service.subtotal()).toBe(4700 + 9900 * 2);
  });

  it('persiste o carrinho no localStorage e restaura em uma nova instância', () => {
    service.add(buildProduct());

    const restored = new CartService();

    expect(restored.items()).toHaveLength(1);
    expect(restored.items()[0].product.id).toBe(1);
  });
});
