import { Component, EventEmitter, HostListener, Output, input } from '@angular/core';

/**
 * Modal genérico — fecha ao clicar no backdrop ou pressionar Esc.
 * Uso: <app-modal [open]="isOpen()" [title]="'Título'" (closed)="isOpen.set(false)">...</app-modal>
 */
@Component({
  selector: 'app-modal',
  standalone: true,
  template: `
    @if (open()) {
      <div class="modal-backdrop" (click)="close()">
        <div class="modal" (click)="$event.stopPropagation()">
          @if (title()) {
            <div class="modal__header">
              <h3 class="modal__title">{{ title() }}</h3>
              <button type="button" class="modal__close" aria-label="Fechar" (click)="close()">
                <i class="fas fa-times"></i>
              </button>
            </div>
          }
          <div class="modal__body">
            <ng-content />
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(25, 25, 25, 0.6);
      padding: var(--space-6);
    }
    .modal {
      width: 100%;
      max-width: 480px;
      max-height: 90vh;
      overflow-y: auto;
      background: var(--color-bg-white);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
    }
    .modal__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-6);
      border-bottom: 1px solid var(--color-border-light);
    }
    .modal__title {
      font-size: var(--fs-lg);
    }
    .modal__close {
      color: var(--color-text-muted);
      font-size: var(--fs-md);
      line-height: 1;
    }
    .modal__body {
      padding: var(--space-6);
    }
  `],
})
export class ModalComponent {
  open = input(false);
  title = input<string | undefined>(undefined);

  @Output() closed = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open()) this.close();
  }

  protected close(): void {
    this.closed.emit();
  }
}
