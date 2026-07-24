# PactoRH

Site institucional da PactoRH — treinamento e desenvolvimento pessoal e corporativo. Construído em Angular 19 (standalone components).

## Stack

- **Angular 19** (standalone components, sem NgModules)
- **TypeScript 5.7**
- **RxJS**
- **SCSS**
- **Karma / Jasmine** para testes unitários

## Pré-requisitos

- Node.js e npm
- Angular CLI (`npm install -g @angular/cli`) — opcional, o projeto já expõe os comandos via `npm run`

## Como rodar

```bash
npm install
npm run dev
```

O servidor sobe em `http://localhost:4200`.

### Resetar ambiente do zero

Em caso de problemas de cache/dependências:

```bash
# 1. Para o servidor se estiver rodando
Ctrl + C

# 2. Apaga o cache do Angular
rm -rf .angular

# 3. Apaga as dependências instaladas
rm -rf node_modules

# 4. Reinstala tudo do zero
npm install

# 5. Sobe o servidor
npm run dev
```

## Scripts disponíveis

| Comando                      | Descrição                                         |
| ----------------------------- | -------------------------------------------------- |
| `npm run dev` / `npm start`  | Sobe o servidor de desenvolvimento (`ng serve`)   |
| `npm run build`              | Build de produção                                 |
| `npm run watch`              | Build em modo watch (development)                 |
| `npm test`                   | Executa os testes unitários (Karma)               |

## Estrutura do projeto

```
src/app/
├── core/                     # Lógica global (guards, interceptors, models, services)
│   ├── guards/                 # auth.guard.ts
│   ├── interceptors/           # auth.interceptor.ts
│   ├── models/                 # index.ts
│   └── services/                # api, auth, blog, contact, product
│
├── layout/                   # Casca da aplicação (header, footer, layout público)
│   ├── header.component.*
│   ├── footer.component.*
│   └── public-layout.component.ts
│
├── features/                 # Páginas/telas, uma pasta por rota
│   ├── home/                   # Página inicial
│   │   └── components/           # hero, audience-split, about-mauricio, testimonials
│   ├── empresa/                 # Página "Para Empresas" (/empresa)
│   ├── profissional/            # Página "Para Profissionais" (/profissional)
│   ├── disc/                    # Teste DISC (/disc)
│   ├── blog/                    # Listagem e detalhe de posts (/blog, /blog/:slug)
│   ├── contact/                 # Contato (/contato)
│   ├── about/                   # Sobre (/sobre)
│   └── product/                  # Detalhe de produto (e-books)
│
├── dashboard/                # Área administrativa
│   └── pages/                   # analytics, leads, users
│
├── shared/                   # Componentes reutilizáveis (button, card, input, modal, section)
│
├── app.routes.ts             # Rotas da aplicação
├── app.config.ts             # Configuração/providers da aplicação
└── app.component.ts          # Componente raiz
```

## Rotas

| Caminho | Componente | Descrição |
|---|---|---|
| `/` | `HomeComponent` | Página inicial |
| `/empresa` | `EmpresaComponent` | Página para empresas |
| `/profissional` | `ProfissionalComponent` | Página para profissionais |
| `/disc` | `DiscComponent` | Teste DISC |
| `/sobre` | `AboutComponent` | Sobre a PactoRH |
| `/contato` | `ContactComponent` | Contato |
| `/blog` | `BlogListComponent` | Listagem de posts |
| `/blog/:slug` | `BlogDetailComponent` | Detalhe do post |

Todas as rotas públicas são carregadas dentro de `PublicLayoutComponent` (header + footer), com lazy loading via `loadComponent`.

## Contribuindo

1. Crie uma branch a partir de `main`
2. Siga o padrão de commits do histórico (`tipo(escopo): descrição`, ex.: `fix(showcase): ajuste estrutura do projeto`)
3. Rode `npm test` antes de abrir PR
