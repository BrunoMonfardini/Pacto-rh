import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  initials: string;
  color: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  activeIndex = signal(0);

  testimonials: Testimonial[] = [
    {
      name: 'Carlos Eduardo Silva',
      role: 'Diretor de RH',
      company: 'Grupo Ômega',
      text: 'O treinamento da Pacto RH transformou nossa cultura organizacional. Em 6 meses, nossa taxa de retenção aumentou 40% e o engajamento das equipes atingiu o maior índice da nossa história.',
      initials: 'CE',
      color: 'blue',
    },
    {
      name: 'Fernanda Rodrigues',
      role: 'CEO',
      company: 'TechStart Brasil',
      text: 'O processo de coaching com o Maurício foi divisor de águas na minha carreira. Aprendi a liderar com propósito e hoje consigo extrair o melhor de cada pessoa do meu time.',
      initials: 'FR',
      color: 'red',
    },
    {
      name: 'Ricardo Moraes',
      role: 'Gerente Comercial',
      company: 'Construtora Horizonte',
      text: 'A palestra motivacional superou todas as expectativas. A equipe saiu completamente diferente — mais unida, motivada e com metas claras. Recomendo para qualquer empresa.',
      initials: 'RM',
      color: 'blue',
    },
    {
      name: 'Ana Paula Costa',
      role: 'Coordenadora de T&D',
      company: 'Rede Saúde Prime',
      text: 'Aplicamos o Teste DISC em toda a liderança e os resultados foram surpreendentes. Conflitos diminuíram, a comunicação melhorou e os projetos passaram a ser entregues no prazo.',
      initials: 'AP',
      color: 'red',
    },
    {
      name: 'Marcos Oliveira',
      role: 'Sócio-Fundador',
      company: 'Advocacia Oliveira & Associados',
      text: 'Investir na Pacto RH foi a melhor decisão para o escritório. O programa de desenvolvimento de lideranças elevou o nível de toda a equipe gestora em poucos meses.',
      initials: 'MO',
      color: 'blue',
    },
  ];

  prev(): void {
    this.activeIndex.update((i) =>
      i === 0 ? this.testimonials.length - 1 : i - 1
    );
  }

  next(): void {
    this.activeIndex.update((i) =>
      i === this.testimonials.length - 1 ? 0 : i + 1
    );
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
  }
}