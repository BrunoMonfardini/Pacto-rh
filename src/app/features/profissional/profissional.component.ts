import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero.component';
import { SectionComponent } from '../../shared/components/section.component';
import { SectionTitleComponent } from '../../shared/components/section-title.component';
import { CardComponent } from '../../shared/components/card.component';
import { ButtonComponent } from '../../shared/components/button.component';
import { BannerComponent } from '../../shared/components/banner.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ROUTES } from '../../shared/constants/routes.constants';

interface ProfissionalSolution {
  icon: string;
  title: string;
  description: string;
}

/**
 * Página institucional para profissionais — tema vermelho (#8E0300, via .theme-red).
 * Mesma estrutura da página Empresas (hero + grid + banner), reaproveitando os
 * mesmos componentes compartilhados — só muda o conteúdo e o tema de cor.
 */
@Component({
  selector: 'app-profissional',
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
  templateUrl: './profissional.component.html',
  styleUrl: './profissional.component.scss',
})
export class ProfissionalComponent {
  readonly ROUTES = ROUTES;

  readonly solutions: ProfissionalSolution[] = [
    {
      icon: 'fa-brain',
      title: 'Teste DISC',
      description: 'Descubra seu perfil comportamental e direcione seu desenvolvimento.',
    },
    {
      icon: 'fa-user-graduate',
      title: 'Mentorias individuais',
      description: 'Acompanhamento personalizado para acelerar sua carreira.',
    },
    {
      icon: 'fa-book-open',
      title: 'Cursos e e-books',
      description: 'Conteúdos práticos e objetivos, disponíveis na Loja PactoRH.',
    },
    {
      icon: 'fa-route',
      title: 'Plano de desenvolvimento',
      description: 'Trilhas de aprendizagem alinhadas aos seus objetivos de carreira.',
    },
    {
      icon: 'fa-comments',
      title: 'Autoconhecimento',
      description: 'Ferramentas para entender pontos fortes e oportunidades de evolução.',
    },
    {
      icon: 'fa-briefcase',
      title: 'Preparação para o mercado',
      description: 'Orientação de carreira e posicionamento profissional.',
    },
  ];
}
