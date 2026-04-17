# 🚀 Angular 17 Boilerplate — Site Institucional + SaaS (Pacto RH Inspired)

## 📌 Visão Geral

Este projeto é um **boilerplate em Angular 17+ (standalone)** inspirado na arquitetura do site da Pacto RH.

Ele combina três pilares principais:

* 🌐 **Landing Page (Marketing)**
* 🧩 **Catálogo de Serviços**
* 🛒 **E-commerce leve (produtos digitais)**
* 🔐 **Base pronta para SaaS (dashboard futuro)**

---

## 🏗️ Arquitetura do Projeto

```bash
src/
 ├── app/
 │    ├── core/        # lógica global (services, interceptors)
 │    ├── shared/      # componentes reutilizáveis
 │    ├── layout/      # layout público (header/footer)
 │    ├── features/    # páginas do site
 │    └── dashboard/   # (futuro SaaS)
```

---

## 🧠 Conceito Arquitetural

O projeto segue o padrão:

* **Feature-based architecture**
* **Standalone components (Angular 17+)**
* **Lazy loading em todas as rotas**
* **Separação clara entre UI, lógica e dados**

---

## 🧭 Rotas da Aplicação

```ts
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/public-layout.component')
      .then(m => m.PublicLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./features/home/home.component') },

      { path: 'solucoes', loadComponent: () => import('./features/solutions/solutions.component') },

      { path: 'solucoes/profissionais', loadComponent: () => import('./features/solutions-professional/solutions-professional.component') },

      { path: 'treinamentos', loadComponent: () => import('./features/trainings/trainings.component') },

      { path: 'produto/:id', loadComponent: () => import('./features/product/product-detail.component') },

      { path: 'blog', loadComponent: () => import('./features/blog/blog-list.component') },

      { path: 'blog/:slug', loadComponent: () => import('./features/blog/blog-detail.component') },

      { path: 'contato', loadComponent: () => import('./features/contact/contact.component') },

      { path: 'sobre', loadComponent: () => import('./features/about/about.component') },
    ]
  }
];
```

---

## 🧱 Estrutura de Features

### 🏠 Home (Landing Page)

```bash
home/
 ├── home.component.ts
 ├── components/
 │    ├── hero.component.ts
 │    ├── services-highlight.component.ts
 │    ├── testimonials.component.ts
 │    ├── ebook-banner.component.ts
 │    └── blog-preview.component.ts
```

---

### 🧩 Solutions (Serviços)

```bash
solutions/
 ├── solutions.component.ts
 ├── components/
 │    ├── solution-card.component.ts
 │    ├── methodology.component.ts
```

---

### 👤 Solutions para Profissionais

```bash
solutions-professional/
 ├── solutions-professional.component.ts
 ├── components/
 │    ├── service-item.component.ts
```

---

### 🎓 Treinamentos

```bash
trainings/
 ├── trainings.component.ts
 ├── components/
 │    ├── training-card.component.ts
```

---

### 🛒 Produto (E-commerce leve)

```bash
product/
 ├── product-detail.component.ts
 ├── components/
 │    ├── product-info.component.ts
 │    ├── buy-button.component.ts
```

---

### 📝 Blog

```bash
blog/
 ├── blog-list.component.ts
 ├── blog-detail.component.ts
 ├── components/
 │    ├── post-card.component.ts
```

---

### 📞 Contato

```bash
contact/
 ├── contact.component.ts
 ├── components/
 │    ├── contact-form.component.ts
```

---

### 🏢 Sobre

```bash
about/
 ├── about.component.ts
```

---

## 🔁 Shared Components

```bash
shared/
 ├── components/
 │    ├── button.component.ts
 │    ├── card.component.ts
 │    ├── section.component.ts
```

---

## ⚙️ Core (Lógica Global)

```bash
core/
 ├── services/
 │    ├── api.service.ts
 │    ├── product.service.ts
 │    ├── blog.service.ts
 │    ├── contact.service.ts
 │
 ├── interceptors/
 │    ├── auth.interceptor.ts
```

---

## 🔐 Autenticação (Base)

* Interceptor JWT
* Estrutura pronta para:

  * login
  * sessão
  * integração com backend

---

## 🧪 Rodando o Projeto

```bash
ng new meu-projeto --standalone
cd meu-projeto
ng serve
```

Acesse:
👉 http://localhost:4200

---

## 🚀 Próximos Passos

### 🎨 UI / Design

* Tailwind CSS (recomendado)
* ou Angular Material

---

### 🔐 Autenticação completa

* Criar `auth.service`
* Adicionar guards de rota

---

### 🌐 Backend / API

* Integração com CRM (ex: HubSpot)
* API REST

---

### ⚡ SEO (IMPORTANTE)

```bash
ng add @angular/ssr
```

---

### 📊 Evolução para SaaS

```bash
dashboard/
 ├── dashboard.component.ts
 ├── leads/
 ├── crm/
 ├── users/
```

---

## 💡 Diferenciais deste Boilerplate

✔ Arquitetura escalável
✔ Separação por domínio (features)
✔ Pronto para SaaS
✔ Melhor performance que WordPress
✔ SEO com SSR possível
✔ Integração fácil com APIs

---

## 🎯 Objetivo

Servir como base para:

* Sites institucionais modernos
* Plataformas de serviços (RH, consultoria, etc.)
* Produtos digitais
* Sistemas SaaS com área logada

---

## 🤝 Contribuição

Sinta-se livre para adaptar:

* layout
* serviços
* integrações

---

## 📌 Observação Final

Este boilerplate foi projetado para ser:

👉 simples no início
👉 escalável no crescimento
👉 pronto para produção

---

Se quiser evoluir isso para:

* UI igual ao site original
* dashboard completo
* integração com CRM

é só continuar expandindo as features 🚀
