import { Component, computed, input } from '@angular/core';

/**
 * Cartão reutilizável — wrapper declarativo sobre a classe .card (styles.scss).
 */
@Component({
  selector: 'app-card',
  standalone: true,
  template: `<ng-content />`,
  host: { '[class]': 'classes()' },
})
export class CardComponent {
  dark = input(false);
  hoverable = input(false);

  protected readonly classes = computed(() => {
    const c = ['card'];
    if (this.dark()) c.push('card--dark');
    if (this.hoverable()) c.push('card--hoverable');
    return c.join(' ');
  });
}
