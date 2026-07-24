import { Directive, ElementRef, inject, input, OnDestroy, OnInit } from '@angular/core';

/**
 * Adiciona a classe `.is-visible` quando o elemento entra na viewport,
 * disparando as transições de fade/slide definidas em `.reveal` (styles.scss).
 * Uso: <div appScrollReveal [revealDelay]="100">...</div>
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
  host: { class: 'reveal' },
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  revealDelay = input(0, { alias: 'revealDelay' });

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.style.transitionDelay = `${this.revealDelay()}ms`;

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            this.observer?.unobserve(node);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
