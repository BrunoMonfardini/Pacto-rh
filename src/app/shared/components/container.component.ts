import { Component, computed, input } from '@angular/core';

export type ContainerSize = 'sm' | 'base' | 'lg';

/**
 * Wrapper declarativo sobre a classe .container (styles.scss) —
 * limita a largura do conteúdo e centraliza com padding lateral.
 */
@Component({
  selector: 'app-container',
  standalone: true,
  template: `<ng-content />`,
  host: { '[class]': 'classes()' },
})
export class ContainerComponent {
  size = input<ContainerSize>('base');

  protected readonly classes = computed(() =>
    this.size() === 'base' ? 'container' : `container container--${this.size()}`
  );
}
