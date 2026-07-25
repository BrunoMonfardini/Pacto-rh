import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';

/**
 * Dropdown minimalista genérico — trigger + painel posicionado.
 * Abre em clique (todas as telas) e também em hover em telas com ponteiro fino
 * (desktop). Fecha em Esc, clique fora ou nova navegação (o consumidor chama
 * `close()` no (click) do link, como o resto do header já faz com closeMobile()).
 */
@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  template: `
    <button
      type="button"
      class="dropdown__trigger"
      (click)="toggle()"
      [attr.aria-expanded]="open()"
    >
      <ng-content select="[trigger]" />
      <i class="fas fa-chevron-down dropdown__caret" [class.dropdown__caret--open]="open()"></i>
    </button>

    @if (open()) {
      <div class="dropdown__panel" role="menu" (click)="close()">
        <ng-content select="[panel]" />
      </div>
    }
  `,
  styleUrl: './dropdown-menu.component.scss',
  host: { class: 'dropdown' },
})
export class DropdownMenuComponent {
  private readonly host = inject(ElementRef<HTMLElement>);
  private closeTimeout?: ReturnType<typeof setTimeout>;

  readonly open = signal(false);

  toggle(): void {
    // Em telas com hover, o mouseenter já abre o painel antes do clique
    // chegar — um toggle aqui fecharia o que o hover acabou de abrir.
    // O clique só precisa garantir que fique aberto; quem fecha é o
    // mouseleave/Esc/clique fora. Sem hover (touch/teclado), alterna normalmente.
    if (matchMedia('(hover: hover)').matches) {
      this.open.set(true);
    } else {
      this.open.update((v) => !v);
    }
  }

  close(): void {
    this.open.set(false);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (!matchMedia('(hover: hover)').matches) return;
    clearTimeout(this.closeTimeout);
    this.open.set(true);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!matchMedia('(hover: hover)').matches) return;
    this.closeTimeout = setTimeout(() => this.open.set(false), 150);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.open()) return;
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.close();
    }
  }
}
