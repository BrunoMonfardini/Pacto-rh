import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { ButtonComponent } from '../../../shared/components/button.component';
import { ROUTES } from '../../../shared/constants/routes.constants';

interface Audience {
  color: 'red' | 'blue';
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  route: string;
}

@Component({
  selector: 'app-audience-split',
  standalone: true,
  imports: [ScrollRevealDirective, ButtonComponent],
  templateUrl: './audience-split.component.html',
  styleUrl: './audience-split.component.scss',
})
export class AudienceSplitComponent {
  readonly audiences: Audience[] = [
    {
      color: 'red',
      icon: 'fa-building',
      title: 'Empresas',
      description: 'Programas sob medida para elevar performance e engajamento das equipes.',
      benefits: [
        'Treinamentos corporativos personalizados',
        'Diagnóstico e consultoria em gestão de pessoas',
        'Acompanhamento de resultados',
      ],
      cta: 'Conhecer soluções',
      route: ROUTES.empresa,
    },
    {
      color: 'blue',
      icon: 'fa-user',
      title: 'Profissionais',
      description: 'Ferramentas e conteúdos para impulsionar sua carreira e autoconhecimento.',
      benefits: [
        'Teste DISC de perfil comportamental',
        'Mentorias individuais',
        'Conteúdos de desenvolvimento pessoal',
      ],
      cta: 'Conhecer conteúdos',
      route: ROUTES.profissional,
    },
  ];
}
