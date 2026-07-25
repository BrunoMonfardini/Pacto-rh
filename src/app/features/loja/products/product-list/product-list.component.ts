import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PageHeroComponent } from '../../../../shared/components/page-hero.component';
import { SectionComponent } from '../../../../shared/components/section.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

/**
 * Catálogo da Loja PactoRH — rota /loja. Lista os produtos vindos do
 * ProductService (hoje mockado), renderizados via ProductCardComponent.
 */
@Component({
  selector: 'app-store-product-list',
  standalone: true,
  imports: [ProductCardComponent, PageHeroComponent, SectionComponent, ScrollRevealDirective],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  private readonly productService = inject(ProductService);

  readonly products = signal<Product[]>([]);

  constructor() {
    this.productService.getAll().subscribe((products) => this.products.set(products));
  }
}
