# PactoRH

Site institucional da PactoRH — treinamento e desenvolvimento pessoal e corporativo. Monorepo com **frontend** Angular 19 (raiz deste repositório) e **backend** NestJS (`backend/`).

## Stack

**Frontend** (raiz)

- **Angular 19** (standalone components, signals, control flow `@if`/`@for`)
- **TypeScript 5.7** (`strict` habilitado, sem `any` no projeto)
- **RxJS**
- **SCSS** com design tokens em CSS custom properties (`src/styles.scss`)
- **Vitest** para testes unitários

**Backend** (`backend/` — ver detalhes na seção [Backend](#backend))

- **NestJS** + **Prisma** + **PostgreSQL** + **JWT** (access/refresh) + **Swagger**

## Pré-requisitos

- Node.js 20+ e npm
- Angular CLI (`npm install -g @angular/cli`) — opcional, os comandos já estão em `npm run`
- **Docker Desktop** — só necessário se for rodar o backend localmente (Postgres + API via `docker compose`)

## Como rodar

### Só o frontend (com mocks visuais, sem dados reais)

```bash
npm install
npm run dev
```

O servidor sobe em `http://localhost:4200`. Sem o backend rodando, login/registro e as listagens de blog/produtos vão falhar (a API não responde) — para funcionar de verdade, suba o backend também (próxima seção).

### Stack completa (frontend + backend)

```bash
# 1. Backend — sobe Postgres + API em Docker
cd backend
docker compose up -d --build

# 2. Frontend — em outro terminal, na raiz do repo
npm install
npm run dev
```

Frontend em `http://localhost:4200`, API em `http://localhost:3000` (documentação interativa em `http://localhost:3000/docs`). O `environment.apiUrl` (dev) já aponta para `http://localhost:3000` por padrão — não precisa configurar nada a mais.

### Resetar ambiente do zero

Em caso de problemas de cache/dependências:

```bash
# 1. Para o servidor se estiver rodando
Ctrl + C

# 2. Apaga o cache do Angular e do Vite
rm -rf .angular node_modules/.vite

# 3. Apaga as dependências instaladas
rm -rf node_modules

# 4. Reinstala tudo do zero
npm install

# 5. Sobe o servidor
npm run dev
```

## Scripts disponíveis

| Comando                 | Descrição                                        |
| ------------------------| --------------------------------------------------|
| `npm run dev` / `start` | Sobe o servidor de desenvolvimento (`ng serve`)   |
| `npm run build`         | Build de produção                                 |
| `npm run watch`         | Build em modo watch (development)                 |
| `npm test`              | Roda a suíte de testes uma vez (Vitest)           |
| `npm run test:watch`    | Testes em modo watch                              |
| `npm run test:coverage` | Testes com relatório de cobertura                 |

## Estrutura do projeto

```
Pacto-rh/
├── backend/                   # API NestJS — ver seção "Backend" abaixo
│
└── src/
    ├── app/
    │   ├── config/                # Configuração centralizada — nada de valores soltos no código
    │   │   ├── api.config.ts        # baseUrl + endpoints da API
    │   │   └── storage.config.ts    # chaves usadas em localStorage
    │   │
    │   ├── core/                  # Lógica transversal da aplicação (singletons)
    │   │   ├── guards/               # auth.guard, guest.guard, role.guard
    │   │   ├── interceptors/         # auth.interceptor (Bearer token + logout em 401 de sessão)
    │   │   ├── models/               # todas as interfaces de domínio (index.ts)
    │   │   ├── repositories/         # camada HTTP tipada (ver "Repositórios" abaixo)
    │   │   ├── services/             # ApiService, AuthService, TokenService
    │   │   └── utils/                # extractErrorMessage, formatPriceBRL
    │   │
    │   ├── layout/                # Casca da aplicação
    │   │   ├── header.component.*    # inclui Entrar/Cadastre-se/Olá {nome}/Sair
    │   │   ├── footer.component.*
    │   │   └── public-layout.component.ts
    │   │
    │   ├── features/              # Uma pasta por feature/rota
    │   │   ├── home/                 # Home — hero, soluções, sobre (Maurício + institucional)
    │   │   ├── auth/                  # login/register/forgot-password/reset-password/verify-email
    │   │   ├── blog/                  # listagem + detalhe, consome BlogRepository
    │   │   ├── shop/                  # products (listagem + detalhe), cart, checkout/orders/payments (ver "Loja")
    │   │   ├── empresa/, profissional/, disc/, sobre/, contato/
    │   │
    │   ├── shared/                # Reutilizável por qualquer feature
    │   │   ├── components/           # Button, Card, Container, Section, Input, Modal
    │   │   ├── constants/            # rotas, navegação, dados institucionais
    │   │   ├── directives/           # appScrollReveal (fade/slide ao entrar na viewport)
    │   │   └── types/                # tipos compartilhados (NavLink, etc.)
    │   │
    │   ├── app.routes.ts
    │   ├── app.config.ts
    │   └── app.component.ts
    │
    ├── environments/              # environment.apiUrl, siteUrl
    └── styles.scss                # design tokens + utilitários globais (.btn, .card, .section...)
```

### Path aliases

Configurados em `tsconfig.json` — prefira-os a `../../../` em código novo:

```ts
import { AuthService } from '@core/services/auth.service';
import { ButtonComponent } from '@shared/components/button.component';
import { ROUTES } from '@shared/constants/routes.constants';
import { environment } from '@env/environments';
```

Disponíveis: `@app/*`, `@core/*`, `@shared/*`, `@features/*`, `@layout/*`, `@config/*`, `@env/*`.

## Sistema de design

Toda a identidade visual vem de CSS custom properties em `src/styles.scss` — **não hardcode cores/espaçamentos em componentes**.

- **Preto é a cor padrão do site inteiro** (`--color-primary`/`--color-red` resolvem para preto por padrão — botões, títulos, links, hover de menu). Azul (`#0600C3`) e vermelho (`#8E0300`) institucionais ficam **reservados só para as páginas `/profissional` (vermelho) e `/empresa` (azul)**, e para os dois cards que as representam na home (seção "Soluções"). Esse escopo é feito por duas classes utilitárias, `.theme-blue`/`.theme-red`, que sobrescrevem localmente `--color-primary`/`--color-red` — qualquer componente compartilhado (botão, `.section-title` etc.) usado dentro delas herda a cor automaticamente, sem precisar de CSS extra.
- **Erros de formulário são a única exceção**: usam o token semântico `--color-error` (sempre vermelho), independente da regra acima — é convenção de UX, não identidade de marca.
- **Neutros**: `--color-bg` (#EBEBEB, fundo), `--color-bg-white` (#FFFFFF, cards elevados), `--color-bg-dark` (#191919, footer/seções escuras).
- **Texto**: só preto (`--color-text`) ou branco (`--color-text-white`) puros — hierarquia é feita com opacidade (`--color-text-light`, `--color-text-muted`), nunca com um cinza à parte.
- **Componentes reutilizáveis** (`shared/components`): `<app-button>`, `<app-card>`, `<app-container>`, `<app-section>`, `<app-input>`, `<app-modal>` — todos wrappers finos sobre as classes utilitárias globais (`.btn`, `.card`, `.container`, `.section`, `.form-control`), então nenhum CSS é duplicado entre eles.
- **Animações de entrada**: diretiva `appScrollReveal` (fade + slide ao entrar na viewport, via `IntersectionObserver`).

## Backend

O backend mora em `backend/` — projeto NestJS separado, com Prisma + PostgreSQL, dentro do mesmo repositório (não é um submódulo). Implementa exatamente o contrato de endpoints que o frontend espera (`config/api.config.ts`).

**Stack**: NestJS · Prisma · PostgreSQL · JWT (access + refresh, via Passport) · bcrypt · class-validator · Swagger.

**Rodando**:

```bash
cd backend
docker compose up -d --build   # sobe Postgres + API
```

API em `http://localhost:3000`, documentação interativa (Swagger) em `http://localhost:3000/docs`. Alternativa sem Docker: `npm install && npm run start:dev` dentro de `backend/` (precisa de um Postgres local — ver `backend/.env.example`).

**Módulos**: `auth` (registro, login, refresh, logout, `/me`, forgot/reset/verify-email), `blog`, `products`, `contact`, `orders`, mais `prisma` (serviço compartilhado) e `common` (guards/decorators/estratégia JWT reaproveitados pelos módulos protegidos).

**Testes**: `cd backend && npm test` (6 unitários) e `npm run test:e2e` (18 e2e, contra um Postgres real).

**O que já está conectado ao frontend**: auth completo, blog, produtos. **O que ainda não tem tela nenhuma no frontend**: `contact` (endpoint pronto, formulário ainda não existe) e `orders` (endpoint pronto, sem carrinho visível/checkout no frontend ainda).

## Autenticação

Autenticação real, ponta a ponta, contra o backend acima:

- `core/repositories/auth.repository.ts` — chamadas HTTP (`login`, `register`, `refresh`, `logout`, `me`, `forgotPassword`, `resetPassword`, `verifyEmail`).
- `core/services/auth.service.ts` — usa o `AuthRepository` diretamente (nada de mock). Expõe `currentUser`/`isAuthenticated` como signals, e `logout({ revoke: false })` para o deslogamento automático (usado internamente pelo interceptor, para não tentar revogar um token que já expirou).
- `core/services/token.service.ts` — isola o acesso a `localStorage`.
- `core/interceptors/auth.interceptor.ts` — anexa `Authorization: Bearer <token>` em toda requisição autenticada; desloga automaticamente só quando havia um token anexado e ele foi rejeitado com 401 (sessão expirada) — um 401 de credenciais erradas no próprio login/registro não dispara logout, é tratado pelo formulário.
- `core/guards/` — `authGuard` (bloqueia rota sem sessão), `guestGuard` (bloqueia `/auth/login` e `/auth/register` para quem já está logado), `roleGuard(['admin', ...])` (controle por papel).
- Telas em `features/auth/*` (`/auth/login`, `/auth/register`, `/auth/forgot-password`, `/auth/reset-password`, `/auth/verify-email`), com Reactive Forms + validação (senha mínima de 8 caracteres, igual ao backend).
- O header (`layout/header.component.*`) reflete a sessão: "Entrar"/"Cadastre-se" quando deslogado, "Olá, {nome}"/"Sair" quando autenticado.

**Limitação conhecida**: não há renovação automática de token (silent refresh) — o access token expira em 15 minutos e o usuário é deslogado, precisando logar de novo. `AuthRepository.refresh()` existe e está pronto, só falta ser encadeado no interceptor.

## Repositórios (camada de dados)

Cada repositório em `core/repositories/` implementa `Repository<T>` (`getAll`/`getById`/`getBySlug`) sobre o `ApiService`, que centraliza a `baseUrl` (`config/api.config.ts`).

| Repositório | Status |
|---|---|
| `AuthRepository` | **Conectado** — usado por `AuthService` |
| `BlogRepository` | **Conectado** — usado por `BlogListComponent`/`BlogDetailComponent` |
| `ProductRepository` | **Conectado** — usado por `ProductListComponent`/`ProductDetailComponent` |
| `ContactRepository` | Pronto, **sem tela** (`ContactComponent` ainda é um placeholder) |
| `OrderRepository` | Pronto, **sem tela** (não há carrinho visível nem checkout ainda) |

## Loja (`features/shop/`)

| Pasta | Status |
|---|---|
| `products/` | **Funcional** — listagem (`/produtos`) e detalhe (`/produtos/:slug`), consome `ProductRepository`, botão "Adicionar ao carrinho" |
| `cart/` | **Funcional** — `CartService` (adicionar/remover/atualizar quantidade, persiste no navegador), sem tela própria pra visualizar o carrinho ainda |
| `checkout/` | Só tipos (`Address`, `CheckoutData`) |
| `orders/` | Modelo + `OrderRepository` (HTTP pronto, backend também pronto — falta a tela) |
| `payments/` | Só tipos — nenhuma integração de gateway ainda |

## Rotas

| Caminho | Componente | Descrição |
|---|---|---|
| `/` | `HomeComponent` | Página inicial (hero, soluções, sobre) |
| `/empresa` | `EmpresaComponent` | Página para empresas (tema azul) |
| `/profissional` | `ProfissionalComponent` | Página para profissionais (tema vermelho) |
| `/disc` | `DiscComponent` | Teste DISC |
| `/sobre` | `AboutComponent` | Sobre a PactoRH |
| `/contato` | `ContactComponent` | Contato — ainda placeholder |
| `/blog`, `/blog/:slug` | `BlogListComponent`, `BlogDetailComponent` | Blog — conectado à API |
| `/produtos`, `/produtos/:slug` | `ProductListComponent`, `ProductDetailComponent` | Loja — conectado à API |
| `/auth/login`, `/register`, `/forgot-password`, `/reset-password`, `/verify-email` | `features/auth/*` | Autenticação — conectada à API |

Todas carregam dentro de `PublicLayoutComponent` (header + footer), com lazy loading via `loadComponent`/`loadChildren`.

## Como adicionar

**...uma página nova**: crie `features/minha-pagina/minha-pagina.component.ts`, registre em `app.routes.ts` com `loadComponent`. Se fizer parte da navegação, adicione em `shared/constants/nav.constants.ts` (fonte única usada por header e footer). Se for uma página temática (como Empresa/Profissional), aplique `.theme-blue`/`.theme-red` num elemento wrapper para herdar a paleta de marca — o resto do site fica preto por padrão.

**...um componente reutilizável**: coloque em `shared/components/`. Se o CSS já existe como classe utilitária global (`.btn`, `.card`...), o componente deve só compor essas classes — não crie CSS novo para algo que já existe.

**...um novo recurso de API**: adicione o endpoint em `config/api.config.ts` (frontend) **e** no backend (`backend/src/<módulo>/`), crie o repositório em `core/repositories/` implementando `Repository<T>`, tipe o modelo em `core/models/index.ts` — mantenha o tipo idêntico ao DTO/response do backend.

## Testes

Testes ficam ao lado do arquivo testado (`arquivo.spec.ts`). Cobrem lógica de negócio real — services, guards, interceptor, repositórios, diretivas — não há testes triviais só para número de cobertura.

```bash
npm test              # frontend — roda uma vez (39 testes)
npm run test:watch    # modo watch
npm run test:coverage # com cobertura
```

Backend (`cd backend`): `npm test` (6 unitários) e `npm run test:e2e` (18 e2e, contra Postgres real).

## Contribuindo

1. Crie uma branch a partir de `main`
2. Siga o padrão de commits do histórico (`tipo(escopo): descrição`)
3. Rode `npm test` e `npm run build` antes de abrir PR (e o equivalente em `backend/` se mexer na API)

## Links úteis

Figma: https://www.figma.com/site/rZFAg5Qtu1HFRXc2Rfaxoo/Pacto-RH?node-id=0-1&p=f&t=8Zs5fSuOYuHioyUy-0

Documentação complementar: `GUIA-DE-DESENVOLVIMENTO.md` (arquitetura e roadmap), `BACKEND-PASSO-A-PASSO.md` (como o backend foi construído).
