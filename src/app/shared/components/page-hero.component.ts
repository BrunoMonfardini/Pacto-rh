import { Component, computed, input } from '@angular/core';

export type PageHeroTheme = 'blue' | 'red';

/**
 * Hero genérico para páginas internas (Empresas, Profissionais, DISC, Loja...).
 * Diferente do HeroComponent da home, que é específico dela.
 * Aceita CTAs via projeção de conteúdo (ex.: <app-button>).
 */
@Component({
  selector: 'app-page-hero',
  standalone: true,
  template: `
    <section [class]="classes()">
      <div class="container page-hero__inner">
        @if (tag()) { <span class="section-tag">{{ tag() }}</span> }
        <h1 class="page-hero__title">{{ title() }}</h1>
        @if (subtitle()) { <p class="page-hero__subtitle">{{ subtitle() }}</p> }
        <div class="page-hero__actions">
          <ng-content />
        </div>
      </div>
    </section>
  `,
  styleUrl: './page-hero.component.scss',
})
export class PageHeroComponent {
  title = input.required<string>();
  subtitle = input<string | undefined>(undefined);
  tag = input<string | undefined>(undefined);
  theme = input<PageHeroTheme | undefined>(undefined);

  protected readonly classes = computed(() => {
    const c = ['page-hero'];
    if (this.theme()) c.push(`theme-${this.theme()}`);
    return c.join(' ');
  });
}
