import { Component, computed, input } from '@angular/core';
import { ButtonComponent } from './button.component';

export type BannerTheme = 'blue' | 'red';

/**
 * Faixa de CTA full-width — usada ao final das páginas institucionais e
 * na página de detalhe de produto da Loja.
 */
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <section [class]="classes()">
      <div class="container banner__inner">
        <div class="banner__text">
          <h2 class="banner__title">{{ title() }}</h2>
          @if (subtitle()) { <p class="banner__subtitle">{{ subtitle() }}</p> }
        </div>
        <app-button [link]="ctaLink()" variant="white" size="lg" [pill]="true">{{ ctaLabel() }}</app-button>
      </div>
    </section>
  `,
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  title = input.required<string>();
  subtitle = input<string | undefined>(undefined);
  ctaLabel = input.required<string>();
  ctaLink = input.required<string>();
  theme = input<BannerTheme | undefined>(undefined);

  protected readonly classes = computed(() => {
    const c = ['banner'];
    if (this.theme()) c.push(`theme-${this.theme()}`);
    return c.join(' ');
  });
}
