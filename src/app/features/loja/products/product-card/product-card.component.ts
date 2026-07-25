import { Component, input } from '@angular/core';
import { Product } from '../product.model';
import { ButtonComponent } from '../../../../shared/components/button.component';

/**
 * Card reutilizável do catálogo da Loja — recebe o produto via input()
 * e não conhece de onde os dados vieram (mock hoje, API no futuro).
 */
@Component({
  selector: 'app-store-product-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product = input.required<Product>();
}
