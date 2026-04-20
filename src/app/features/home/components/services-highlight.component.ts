import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
  link: string;
}

@Component({
  selector: 'app-services-highlight',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-highlight.component.html',
  styleUrl: './services-highlight.component.scss',
})
export class ServicesHighlightComponent {
  services: Service[] = [
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Treinamentos Corporativos',
      description: 'Programas customizados para desenvolver competências técnicas e comportamentais da sua equipe.',
      color: 'blue',
      link: '/treinamentos',
    },
    {
      icon: 'fas fa-user-tie',
      title: 'Coaching Executivo',
      description: 'Processo estruturado para potencializar a liderança e performance de executivos e gestores.',
      color: 'red',
      link: '/solucoes',
    },
    {
      icon: 'fas fa-microphone-alt',
      title: 'Palestras Motivacionais',
      description: 'Palestras inspiradoras que engajam equipes e geram transformação cultural nas organizações.',
      color: 'blue',
      link: '/solucoes',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Consultoria em RH',
      description: 'Diagnóstico e implementação de soluções estratégicas de gestão de pessoas.',
      color: 'red',
      link: '/solucoes',
    },
    {
      icon: 'fas fa-th-large',
      title: 'Teste DISC',
      description: 'Avaliação comportamental DISC para autoconhecimento e melhoria de relacionamentos profissionais.',
      color: 'blue',
      link: '/solucoes/profissionais',
    },
    {
      icon: 'fas fa-book-open',
      title: 'E-books & Materiais',
      description: 'Conteúdo especializado em RH, liderança e desenvolvimento pessoal para você evoluir.',
      color: 'red',
      link: '/produto/ebooks',
    },
  ];
}