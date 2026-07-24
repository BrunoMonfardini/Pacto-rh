import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/public-layout.component').then(m => m.PublicLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component').then(m => m.HomeComponent),
        title: 'PactoRH — Treinamento e Desenvolvimento Pessoal',
      },
      {
        path: 'empresa',
        loadComponent: () =>
          import('./features/empresa/empresa.component').then(m => m.EmpresaComponent),
        title: 'Para Empresas — PactoRH',
      },
      {
        path: 'profissional',
        loadComponent: () =>
          import('./features/profissional/profissional.component').then(m => m.ProfissionalComponent),
        title: 'Para Profissionais — PactoRH',
      },
      {
        path: 'disc',
        loadComponent: () =>
          import('./features/disc/disc.component').then(m => m.DiscComponent),
        title: 'Teste DISC — PactoRH',
      },
      {
        path: 'sobre',
        loadComponent: () =>
          import('./features/about/about.component').then(m => m.AboutComponent),
        title: 'Sobre — PactoRH',
      },
      {
        path: 'contato',
        loadComponent: () =>
          import('./features/contact/contact.component').then(m => m.ContactComponent),
        title: 'Contato — PactoRH',
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./features/blog/blog-list.component').then(m => m.BlogListComponent),
        title: 'Blog — PactoRH',
      },
      {
        path: 'blog/:slug',
        loadComponent: () =>
          import('./features/blog/blog-detail.component').then(m => m.BlogDetailComponent),
        title: 'Blog — PactoRH',
      },
      {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.authRoutes),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];