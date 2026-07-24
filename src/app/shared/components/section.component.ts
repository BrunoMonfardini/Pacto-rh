import { Component, computed, input } from '@angular/core';
import { ContainerSize } from './container.component';

export type SectionVariant = 'default' | 'white' | 'dark';
export type SectionPadding = 'sm' | 'base' | 'lg';

/**
 * Wrapper declarativo sobre .section + .container (styles.scss) —
 * evita repetir <section class="X section" id="Y"><div class="container">
 * em cada componente de página.
 */
@Component({
  selector: 'app-section',
  standalone: true,
  template: `
    <section [attr.id]="id()" [class]="sectionClasses()">
      <div [class]="containerClasses()">
        <ng-content />
      </div>
    </section>
  `,
})
export class SectionComponent {
  id = input<string | undefined>(undefined);
  variant = input<SectionVariant>('default');
  padding = input<SectionPadding>('base');
  containerSize = input<ContainerSize>('base');

  protected readonly sectionClasses = computed(() => {
    const c = ['section'];
    if (this.variant() !== 'default') c.push(`section--${this.variant()}`);
    if (this.padding() !== 'base') c.push(`section--${this.padding()}`);
    return c.join(' ');
  });

  protected readonly containerClasses = computed(() =>
    this.containerSize() === 'base' ? 'container' : `container container--${this.containerSize()}`
  );
}
