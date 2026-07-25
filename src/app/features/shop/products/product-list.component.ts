import { Component, inject, signal } from '@angular/core';
import { ProductRepository } from '../../../core/repositories/product.repository';
import { Product } from '../../../core/models';
import { CartService } from '../cart/cart.service';
import { SectionComponent } from '../../../shared/components/section.component';
import { ButtonComponent } from '../../../shared/components/button.component';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { extractErrorMessage } from '../../../core/utils/http-error.util';
import { formatPriceBRL } from '../../../core/utils/currency.util';

const PRODUCT_TYPE_LABELS: Record<Product['type'], string> = {
  ebook: 'E-book',
  course: 'Curso',
  mentoring: 'Mentoria',
};

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SectionComponent, ButtonComponent, ScrollRevealDirective],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  private readonly productRepository = inject(ProductRepository);
  private readonly cartService = inject(CartService);

  readonly loading = signal(true);
  readonly errorMessage = signal<string | null>(null);
  readonly products = signal<Product[]>([]);
  readonly addedProductId = signal<string | null>(null);

  readonly formatPrice = formatPriceBRL;
  readonly typeLabel = (type: Product['type']) => PRODUCT_TYPE_LABELS[type];

  constructor() {
    this.productRepository.getAll().subscribe({
      next: (products) => {
        this.products.set(products);
        this.loading.set(false);
      },
      error: (err: unknown) => {
        this.errorMessage.set(extractErrorMessage(err, 'Não foi possível carregar os produtos.'));
        this.loading.set(false);
      },
    });
  }

  addToCart(product: Product): void {
    this.cartService.add(product);
    this.addedProductId.set(product.id);
    setTimeout(() => this.addedProductId.set(null), 1500);
  }
}
