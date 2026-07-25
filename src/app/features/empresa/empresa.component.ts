import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero.component';
import { SectionComponent } from '../../shared/components/section.component';
import { SectionTitleComponent } from '../../shared/components/section-title.component';
import { CardComponent } from '../../shared/components/card.component';
import { ButtonComponent } from '../../shared/components/button.component';
import { BannerComponent } from '../../shared/components/banner.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ROUTES } from '../../shared/constants/routes.constants';

interface EmpresaSolution {
  icon: string;
  title: string;
  description: string;
}

/**
 * Página institucional para empresas — tema azul (#0600C3, via .theme-blue).
 * Estrutura: hero + grid de soluções + banner de CTA, toda montada com
 * componentes reutilizáveis (PageHero, SectionTitle, Card, Banner).
 */
@Component({
  selector: 'app-empresa',
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
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.scss',
})
export class EmpresaComponent {
  readonly ROUTES = ROUTES;

  readonly solutions: EmpresaSolution[] = [
    {
      icon: 'fa-chalkboard-user',
      title: 'Treinamentos corporativos',
      description: 'Programas sob medida para elevar performance e engajamento das equipes.',
    },
    {
      icon: 'fa-users-gear',
      title: 'Consultoria em gestão de pessoas',
      description: 'Diagnóstico e planos de ação para estruturar processos de RH.',
    },
    {
      icon: 'fa-magnifying-glass-chart',
      title: 'Diagnóstico organizacional',
      description: 'Mapeamento de clima, cultura e maturidade de gestão.',
    },
    {
      icon: 'fa-user-tie',
      title: 'Programas de liderança',
      description: 'Desenvolvimento de líderes e planos de sucessão para cargos-chave.',
    },
    {
      icon: 'fa-people-arrows',
      title: 'DISC para equipes',
      description: 'Perfil comportamental aplicado à formação e composição de times.',
    },
    {
      icon: 'fa-chart-line',
      title: 'Acompanhamento de resultados',
      description: 'Indicadores e follow-up contínuo dos programas implementados.',
    },
  ];
}
