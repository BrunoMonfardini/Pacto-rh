import { Component, input } from '@angular/core';

/**
 * Encapsula o padrão section-header + section-tag + section-title +
 * section-subtitle (styles.scss) — evita repetir esse bloco em cada página.
 */
@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <div class="section-header" [class.section-header--center]="center()">
      @if (tag()) { <span class="section-tag">{{ tag() }}</span> }
      <h2 class="section-title">{{ title() }}</h2>
      @if (subtitle()) { <p class="section-subtitle" [class.mx-auto]="center()">{{ subtitle() }}</p> }
    </div>
  `,
})
export class SectionTitleComponent {
  title = input.required<string>();
  subtitle = input<string | undefined>(undefined);
  tag = input<string | undefined>(undefined);
  center = input(true);
}
