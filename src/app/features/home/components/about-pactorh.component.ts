import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface Pillar {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-about-pactorh',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './about-pactorh.component.html',
  styleUrl: './about-pactorh.component.scss',
})
export class AboutPactorhComponent {
  readonly pillars: Pillar[] = [
    {
      icon: 'fa-bullseye',
      title: 'Missão',
      text: 'Impulsionar o potencial humano dentro das organizações com treinamentos práticos e ferramentas de autoconhecimento.',
    },
    {
      icon: 'fa-eye',
      title: 'Visão',
      text: 'Ser referência nacional em desenvolvimento humano e performance corporativa.',
    },
    {
      icon: 'fa-heart',
      title: 'Valores',
      text: 'Ética, transparência e compromisso com resultados reais para empresas e profissionais.',
    },
    {
      icon: 'fa-star',
      title: 'Diferenciais',
      text: 'Metodologia própria, atendimento personalizado e acompanhamento contínuo de resultados.',
    },
  ];
}
