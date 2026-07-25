import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero.component';
import { SectionComponent } from '../../shared/components/section.component';
import { SectionTitleComponent } from '../../shared/components/section-title.component';
import { CardComponent } from '../../shared/components/card.component';
import { ButtonComponent } from '../../shared/components/button.component';
import { BannerComponent } from '../../shared/components/banner.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ROUTES } from '../../shared/constants/routes.constants';

interface DiscProfile {
  letter: string;
  name: string;
  description: string;
}

interface DiscStep {
  number: string;
  title: string;
  description: string;
}

/**
 * Página DISC — redesenhada com visual minimalista (preto/branco, tipografia
 * limpa, cards simples), inspirada apenas conceitualmente na página atual do
 * teste DISC do site institucional (não copiada).
 */
@Component({
  selector: 'app-disc',
  standalone: true,
  imports: [
    PageHeroComponent,
    SectionComponent,
    SectionTitleComponent,
    CardComponent,
    ButtonComponent,
    BannerComponent,
    ScrollRevealDirective,
  ],
  templateUrl: './disc.component.html',
  styleUrl: './disc.component.scss',
})
export class DiscComponent {
  readonly ROUTES = ROUTES;

  readonly profiles: DiscProfile[] = [
    {
      letter: 'D',
      name: 'Dominância',
      description: 'Direto, decidido e orientado a resultados. Busca desafios e gosta de assumir o controle.',
    },
    {
      letter: 'I',
      name: 'Influência',
      description: 'Comunicativo, entusiasta e persuasivo. Motiva pessoas e constrói relações com facilidade.',
    },
    {
      letter: 'S',
      name: 'Estabilidade',
      description: 'Paciente, leal e colaborativo. Valoriza rotina, cooperação e ambientes estáveis.',
    },
    {
      letter: 'C',
      name: 'Conformidade',
      description: 'Analítico, preciso e organizado. Preza por qualidade, dados e processos bem definidos.',
    },
  ];

  readonly steps: DiscStep[] = [
    {
      number: '01',
      title: 'Responda o questionário',
      description: 'Perguntas rápidas e objetivas — leva poucos minutos.',
    },
    {
      number: '02',
      title: 'Receba seu perfil',
      description: 'Resultado detalhado com seu perfil comportamental predominante.',
    },
    {
      number: '03',
      title: 'Aplique no dia a dia',
      description: 'Use os insights para se desenvolver e se comunicar melhor.',
    },
  ];
}
