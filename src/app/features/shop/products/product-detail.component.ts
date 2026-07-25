import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductRepository } from '../../../core/repositories/product.repository';
import { Product } from '../../../core/models';
import { CartService } from '../cart/cart.service';
import { SectionComponent } from '../../../shared/components/section.component';
import { ButtonComponent } from '../../../shared/components/button.component';
import { extractErrorMessage } from '../../../core/utils/http-error.util';
import { formatPriceBRL } from '../../../core/utils/currency.util';

const PRODUCT_TYPE_LABELS: Record<Product['type'], string> = {
  ebook: 'E-book',
  course: 'Curso',
  mentoring: 'Mentoria',
};

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, SectionComponent, ButtonComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  private readonly productRepository = inject(ProductRepository);
  private readonly cartService = inject(CartService);
  private readonly route = inject(ActivatedRoute);

  readonly loading = signal(true);
  readonly errorMessage = signal<string | null>(null);
  readonly product = signal<Product | null>(null);
  readonly added = signal(false);

  readonly formatPrice = formatPriceBRL;
  readonly typeLabel = (type: Product['type']) => PRODUCT_TYPE_LABELS[type];

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.productRepository.getBySlug(slug).subscribe({
      next: (product) => {
        this.product.set(product);
        this.loading.set(false);
      },
      error: (err: unknown) => {
        this.errorMessage.set(extractErrorMessage(err, 'Produto não encontrado.'));
        this.loading.set(false);
      },
    });
  }

  addToCart(): void {
    const product = this.product();
    if (!product) return;
    this.cartService.add(product);
    this.added.set(true);
    setTimeout(() => this.added.set(false), 1500);
  }
}
