import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `<div appScrollReveal [revealDelay]="150">conteúdo</div>`,
})
class HostComponent {}

class FakeIntersectionObserver {
  static instances: FakeIntersectionObserver[] = [];
  callback: IntersectionObserverCallback;
  observed: Element[] = [];
  unobserved: Element[] = [];

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    FakeIntersectionObserver.instances.push(this);
  }

  observe(el: Element): void {
    this.observed.push(el);
  }

  unobserve(el: Element): void {
    this.unobserved.push(el);
  }

  disconnect(): void {}

  trigger(isIntersecting: boolean): void {
    this.callback(
      [{ isIntersecting } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver
    );
  }
}

describe('ScrollRevealDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let originalIO: typeof IntersectionObserver | undefined;

  beforeEach(() => {
    originalIO = globalThis.IntersectionObserver;
    FakeIntersectionObserver.instances = [];
    (globalThis as any).IntersectionObserver = FakeIntersectionObserver;

    TestBed.configureTestingModule({ imports: [HostComponent] });
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    globalThis.IntersectionObserver = originalIO as typeof IntersectionObserver;
  });

  function hostEl(): HTMLElement {
    return fixture.nativeElement.querySelector('[appScrollReveal]') as HTMLElement;
  }

  it('adiciona a classe base "reveal" e aplica o delay de transição', () => {
    expect(hostEl().classList.contains('reveal')).toBe(true);
    expect(hostEl().style.transitionDelay).toBe('150ms');
  });

  it('não revela o elemento antes de interceptar o viewport', () => {
    expect(hostEl().classList.contains('is-visible')).toBe(false);
  });

  it('revela o elemento e para de observar assim que ele intercepta o viewport', () => {
    const observer = FakeIntersectionObserver.instances[0];

    observer.trigger(true);

    expect(hostEl().classList.contains('is-visible')).toBe(true);
    expect(observer.unobserved).toContain(hostEl());
  });

  it('ignora entradas que não estão interceptando o viewport', () => {
    const observer = FakeIntersectionObserver.instances[0];

    observer.trigger(false);

    expect(hostEl().classList.contains('is-visible')).toBe(false);
  });
});
