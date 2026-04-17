export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/public-layout.component')
        .then(m => m.PublicLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component')
            .then(m => m.HomeComponent)
      },
      {
        path: 'contato',
        loadComponent: () =>
          import('./features/contact/contact.component')
            .then(m => m.ContactComponent)
      },
      {
        path: 'produto/:id',
        loadComponent: () =>
          import('./features/product/product-detail.component')
            .then(m => m.ProductDetailComponent)
      }
    ]
  }
];