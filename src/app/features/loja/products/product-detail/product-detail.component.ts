import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { SectionComponent } from '../../../../shared/components/section.component';
import { BannerComponent } from '../../../../shared/components/banner.component';
import { ROUTES } from '../../../../shared/constants/routes.constants';

/**
 * Visualização detalhada de um produto da Loja — rota /loja/:slug.
 * Totalmente orientada a dados: um novo produto não exige um componente
 * novo, só um item a mais em products.mock.ts.
 */
@Component({
  selector: 'app-store-product-detail',
  standalone: true,
  imports: [RouterLink, SectionComponent, BannerComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  private readonly productService = inject(ProductService);
  private readonly route = inject(ActivatedRoute);

  readonly ROUTES = ROUTES;
  readonly loading = signal(true);
  readonly product = signal<Product | undefined>(undefined);

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.productService.getBySlug(slug).subscribe((product) => {
      this.product.set(product);
      this.loading.set(false);
    });
  }
}
