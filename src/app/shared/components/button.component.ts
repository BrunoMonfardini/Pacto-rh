import { Component, computed, EventEmitter, Output, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

export type ButtonVariant = 'primary' | 'red' | 'outline-blue' | 'outline-red' | 'outline-white' | 'white';
export type ButtonSize = 'sm' | 'base' | 'lg';

/**
 * Botão reutilizável — renderiza <a routerLink> quando `link` é informado,
 * ou <button> caso contrário. Reaproveita as classes .btn já existentes
 * em styles.scss (nenhum CSS novo é criado aqui).
 *
 * O conteúdo é capturado uma única vez em <ng-template #content> e
 * reinstanciado via ngTemplateOutlet em cada branch — <ng-content> não pode
 * aparecer duas vezes (uma por branch de @if/@else) e ser distribuído em
 * ambas: apenas uma ocorrência recebe a projeção, a outra fica vazia.
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  template: `
    <ng-template #content><ng-content /></ng-template>

    @if (link()) {
      <a [routerLink]="link()" [fragment]="fragment()" [class]="classes()">
        <ng-container [ngTemplateOutlet]="content" />
      </a>
    } @else {
      <button [type]="type()" [class]="classes()" [disabled]="disabled()" (click)="clicked.emit($event)">
        <ng-container [ngTemplateOutlet]="content" />
      </button>
    }
  `,
  host: { '[class.btn-host--full]': 'fullWidth()' },
})
export class ButtonComponent {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('base');
  pill = input(false);
  fullWidth = input(false, { alias: 'fullWidth' });
  type = input<'button' | 'submit'>('button');
  disabled = input(false);
  link = input<string | undefined>(undefined);
  fragment = input<string | undefined>(undefined);

  @Output() clicked = new EventEmitter<Event>();

  protected readonly classes = computed(() => {
    const c = ['btn', `btn--${this.variant()}`];
    if (this.size() !== 'base') c.push(`btn--${this.size()}`);
    if (this.pill()) c.push('btn--pill');
    if (this.fullWidth()) c.push('w-full');
    return c.join(' ');
  });
}
