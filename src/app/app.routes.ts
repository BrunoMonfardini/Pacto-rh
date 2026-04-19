// ============================================================
//  PACTO RH — app.routes.ts
//  Descrição: Rotas da aplicação com lazy loading
//
//  O que é lazy loading?
//  Em vez de carregar TODAS as páginas ao abrir o site,
//  o Angular carrega cada página SÓ quando o usuário acessa.
//  Resultado: site muito mais rápido no carregamento inicial.
//
//  Como funciona o import() dinâmico:
//  loadComponent: () => import('./caminho').then(m => m.NomeClasse)
//  O Angular só executa esse import quando a rota for acessada.
// ============================================================
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // -------------------------------------------------------
  //  LAYOUT PÚBLICO
  //  Todas as páginas do site ficam "dentro" do PublicLayout,
  //  que renderiza o Header e o Footer automaticamente.
  // -------------------------------------------------------
  {
    path: '',
    loadComponent: () =>
      import('./layout/public-layout.component').then(
        (m) => m.PublicLayoutComponent
      ),
    children: [
      // Homepage
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component').then((m) => m.HomeComponent),
        title: 'Pacto RH – Treinamento e Desenvolvimento Pessoal',
      },

      // Soluções corporativas
      {
        path: 'solucoes',
        loadComponent: () =>
          import('./features/solutions/solutions.component').then(
            (m) => m.SolutionsComponent
          ),
        title: 'Soluções – Pacto RH',
      },

      // Soluções para profissionais individuais
      {
        path: 'solucoes/profissionais',
        loadComponent: () =>
          import(
            './features/solutions-professional/solutions-professional.component'
          ).then((m) => m.SolutionsProfessionalComponent),
        title: 'Soluções para Profissionais – Pacto RH',
      },

      // Treinamentos
      {
        path: 'treinamentos',
        loadComponent: () =>
          import('./features/trainings/trainings.component').then(
            (m) => m.TrainingsComponent
          ),
        title: 'Treinamentos – Pacto RH',
      },

      // Detalhe de produto / e-book
      // :id é um parâmetro dinâmico — ex: /produto/ebook-lideranca
      {
        path: 'produto/:id',
        loadComponent: () =>
          import('./features/product/product-detail.component').then(
            (m) => m.ProductDetailComponent
          ),
        title: 'Produto – Pacto RH',
      },

      // Blog — lista de posts
      {
        path: 'blog',
        loadComponent: () =>
          import('./features/blog/blog-list.component').then(
            (m) => m.BlogListComponent
          ),
        title: 'Blog – Pacto RH',
      },

      // Blog — detalhe de post
      // :slug é o identificador amigável do post (ex: /blog/como-liderar-equipes)
      {
        path: 'blog/:slug',
        loadComponent: () =>
          import('./features/blog/blog-detail.component').then(
            (m) => m.BlogDetailComponent
          ),
        title: 'Post – Pacto RH',
      },

      // Contato
      {
        path: 'contato',
        loadComponent: () =>
          import('./features/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
        title: 'Contato – Pacto RH',
      },

      // Sobre
      {
        path: 'sobre',
        loadComponent: () =>
          import('./features/about/about.component').then(
            (m) => m.AboutComponent
          ),
        title: 'Sobre – Pacto RH',
      },
    ],
  },

  // -------------------------------------------------------
  //  DASHBOARD (área protegida — requer login)
  //  O authGuard verifica se o usuário está autenticado.
  //  Se não estiver, redireciona para /login.
  // -------------------------------------------------------
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    children: [
      {
        path: '',
        redirectTo: 'analytics',
        pathMatch: 'full',
      },
      {
        path: 'analytics',
        loadComponent: () =>
          import('./dashboard/pages/analytics.component').then(
            (m) => m.AnalyticsComponent
          ),
        title: 'Analytics – Pacto RH',
      },
      {
        path: 'leads',
        loadComponent: () =>
          import('./dashboard/pages/leads.component').then(
            (m) => m.LeadsComponent
          ),
        title: 'Leads – Pacto RH',
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./dashboard/pages/users.component').then(
            (m) => m.UsersComponent
          ),
        title: 'Usuários – Pacto RH',
      },
    ],
  },

  // -------------------------------------------------------
  //  ROTA CURINGA — qualquer URL inválida redireciona para home
  // -------------------------------------------------------
  {
    path: '**',
    redirectTo: '',
  },
];