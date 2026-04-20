import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BlogPost {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  coverColor: string;
  icon: string;
}

@Component({
  selector: 'app-blog-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-preview.component.html',
  styleUrl: './blog-preview.component.scss',
})
export class BlogPreviewComponent {
  posts: BlogPost[] = [
    {
      slug: 'como-desenvolver-lideranca-eficaz',
      category: 'Liderança',
      categoryColor: 'blue',
      title: 'Como Desenvolver uma Liderança Eficaz no Ambiente Corporativo',
      excerpt: 'Descubra as 5 competências essenciais que todo líder moderno precisa desenvolver para engajar equipes e gerar resultados consistentes.',
      date: '15 Abr 2025',
      readingTime: 6,
      coverColor: 'blue',
      icon: 'fas fa-user-tie',
    },
    {
      slug: 'disc-guia-completo',
      category: 'Comportamento',
      categoryColor: 'red',
      title: 'DISC: O Guia Completo para Entender seu Perfil Comportamental',
      excerpt: 'Aprenda como a metodologia DISC pode transformar sua comunicação, melhorar relacionamentos e aumentar sua produtividade profissional.',
      date: '08 Abr 2025',
      readingTime: 8,
      coverColor: 'red',
      icon: 'fas fa-brain',
    },
    {
      slug: 'treinamento-corporativo-resultados',
      category: 'Treinamento',
      categoryColor: 'blue',
      title: 'Treinamento Corporativo: Como Medir o Retorno sobre Investimento',
      excerpt: 'Muitas empresas investem em treinamento mas não sabem como mensurar os resultados. Conheça os principais KPIs para avaliar o ROI de T&D.',
      date: '01 Abr 2025',
      readingTime: 5,
      coverColor: 'blue',
      icon: 'fas fa-chart-bar',
    },
  ];
}