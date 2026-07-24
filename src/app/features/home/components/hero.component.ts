import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  // Degradê azul → vermelho das barras de fundo do hero (9 tons, simétrico)
  readonly glowBars = [
    'var(--color-blue-800)',
    'var(--color-blue-600)',
    'var(--color-blue-400)',
    'var(--color-blue-200)',
    'var(--hero-glow-center)',
    'var(--color-red-200)',
    'var(--color-red-400)',
    'var(--color-red-600)',
    'var(--color-red-800)',
  ];
}