import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  stats = [
    { value: '+500',  label: 'Empresas atendidas' },
    { value: '+10k',  label: 'Pessoas treinadas'  },
    { value: '20+',   label: 'Anos de experiência' },
    { value: '98%',   label: 'Satisfação dos clientes' },
  ];
}