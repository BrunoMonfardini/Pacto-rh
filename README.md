# PactoRH

Site institucional da PactoRH — treinamento e desenvolvimento pessoal e corporativo. Construído em Angular 19 (standalone components, sem NgModules).

## Stack

- **Angular 19** (standalone components, signals, control flow `@if`/`@for`)
- **TypeScript 5.7** (`strict` habilitado, sem `any` no projeto)
- **RxJS**
- **SCSS** com design tokens em CSS custom properties (`src/styles.scss`)
- **Vitest** + Angular Testing Library/TestBed para testes unitários

## Pré-requisitos

- Node.js 20+ e npm
- Angular CLI (`npm install -g @angular/cli`) — opcional, os comandos já estão em `npm run`

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
src/
├── app/
│   ├── config/                # Configuração centralizada — nada de valores soltos no código
│   │   ├── api.config.ts        # baseUrl + endpoints da API
│   │   └── storage.config.ts    # chaves usadas em localStorage
│   │
│   ├── core/                  # Lógica transversal da aplicação (singletons)
│   │   ├── guards/               # auth.guard, guest.guard, role.guard
│   │   ├── interceptors/         # auth.interceptor (Bearer token + logout em 401)
│   │   ├── models/               # todas as interfaces de domínio (index.ts)
│   │   ├── repositories/         # camada HTTP tipada (ver "Repositórios" abaixo)
│   │   └── services/             # ApiService, AuthService, TokenService
│   │
│   ├── layout/                # Casca da aplicação
│   │   ├── header.component.*
│   │   ├── footer.component.*
│   │   └── public-layout.component.ts
│   │
│   ├── features/              # Uma pasta por feature/rota
│   │   ├── home/                 # Home — hero, soluções, sobre (Maurício + institucional)
│   │   ├── auth/                  # login/register/forgot-password/reset-password/verify-email
│   │   ├── shop/                  # products/cart/checkout/orders/payments (ver abaixo)
│   │   ├── empresa/, profissional/, disc/, sobre/, contato/, blog/, product/
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

- **Paleta institucional**: azul `#0600C3` (`--color-blue-800`, empresas/corporativo) e vermelho `#8E0300` (`--color-red-800`, profissionais/pessoas), cada um com uma escala de 9 tons (100–900) derivada por tint/shade — use essas variáveis, não hex soltos.
- **Neutros**: `--color-bg` (#EBEBEB, fundo), `--color-bg-white` (#FFFFFF, cards elevados), `--color-bg-dark` (#191919, footer/seções escuras).
- **Texto**: só preto (`--color-text`) ou branco (`--color-text-white`) puros — hierarquia é feita com opacidade (`--color-text-light`, `--color-text-muted`), nunca com um cinza à parte.
- **Componentes reutilizáveis** (`shared/components`): `<app-button>`, `<app-card>`, `<app-container>`, `<app-section>`, `<app-input>`, `<app-modal>` — todos wrappers finos sobre as classes utilitárias globais (`.btn`, `.card`, `.container`, `.section`, `.form-control`), então nenhum CSS é duplicado entre eles.
- **Animações de entrada**: diretiva `appScrollReveal` (fade + slide ao entrar na viewport, via `IntersectionObserver`).

## Autenticação (estrutura pronta, sem backend ainda)

O projeto **não tem backend** — por isso `AuthService` roda com dados mockados em memória (login/registro sempre funcionam, exceto senha com menos de 6 caracteres). A estrutura, porém, já está pronta para um backend real:

- `core/repositories/auth.repository.ts` — chamadas HTTP reais (`login`, `register`, `refresh`, `logout`, `forgotPassword`, `resetPassword`, `verifyEmail`), hoje sem uso.
- `core/services/auth.service.ts` — troque os métodos privados `mockLogin`/`mockRegister` por chamadas ao `AuthRepository` quando a API existir.
- `core/services/token.service.ts` — isola o acesso a `localStorage`.
- `core/interceptors/auth.interceptor.ts` — anexa `Authorization: Bearer <token>` e desloga automaticamente em `401`.
- `core/guards/` — `authGuard` (bloqueia rota sem sessão), `guestGuard` (bloqueia `/auth/login` e `/auth/register` para quem já está logado), `roleGuard(['admin', ...])` (controle por papel).
- Telas em `features/auth/*` (`/auth/login`, `/auth/register`, `/auth/forgot-password`, `/auth/reset-password`, `/auth/verify-email`), com Reactive Forms + validação.

## Repositórios (camada de dados)

Como é um app 100% frontend (sem Prisma/PostgreSQL — não há onde rodar um ORM no browser), "banco de dados" aqui significa uma **camada de repositório HTTP tipada** em `core/repositories/`: cada repositório implementa `Repository<T>` (`getAll`/`getById`) sobre o `ApiService`, que por sua vez centraliza a `baseUrl` (`config/api.config.ts`). Hoje só `AuthService` está de fato conectado (com mock); `BlogRepository`, `ProductRepository`, `ContactRepository` e `OrderRepository` estão prontos para quando a API existir.

## Loja (`features/shop/`)

Preparada para crescer, sem telas ainda: `products/` (reaproveita `core/models`), `cart/` (único pedaço com lógica real — `CartService`, baseado em signals, persiste em `localStorage`), `checkout/`, `orders/` e `payments/` (só modelagem — integração de pagamento é decisão para quando a loja for implementada).

## Rotas

| Caminho | Componente | Descrição |
|---|---|---|
| `/` | `HomeComponent` | Página inicial (hero, soluções, sobre) |
| `/empresa` | `EmpresaComponent` | Página para empresas |
| `/profissional` | `ProfissionalComponent` | Página para profissionais |
| `/disc` | `DiscComponent` | Teste DISC |
| `/sobre` | `AboutComponent` | Sobre a PactoRH |
| `/contato` | `ContactComponent` | Contato |
| `/blog`, `/blog/:slug` | `BlogListComponent`, `BlogDetailComponent` | Blog |
| `/auth/login`, `/register`, `/forgot-password`, `/reset-password`, `/verify-email` | `features/auth/*` | Autenticação |

Todas carregam dentro de `PublicLayoutComponent` (header + footer), com lazy loading via `loadComponent`/`loadChildren`.

## Como adicionar

**...uma página nova**: crie `features/minha-pagina/minha-pagina.component.ts`, registre em `app.routes.ts` com `loadComponent`. Se fizer parte da navegação, adicione em `shared/constants/nav.constants.ts` (fonte única usada por header e footer).

**...um componente reutilizável**: coloque em `shared/components/`. Se o CSS já existe como classe utilitária global (`.btn`, `.card`...), o componente deve só compor essas classes — não crie CSS novo para algo que já existe.

**...um novo recurso de API**: adicione o endpoint em `config/api.config.ts`, crie o repositório em `core/repositories/` implementando `Repository<T>`, tipe o modelo em `core/models/index.ts`.

## Testes

Testes ficam ao lado do arquivo testado (`arquivo.spec.ts`). Cobrem lógica de negócio real — services, guards, interceptor, repositórios, diretivas — não há testes triviais só para número de cobertura.

```bash
npm test              # roda uma vez
npm run test:watch    # modo watch
npm run test:coverage # com cobertura
```

## Contribuindo

1. Crie uma branch a partir de `main`
2. Siga o padrão de commits do histórico (`tipo(escopo): descrição`)
3. Rode `npm test` e `npm run build` antes de abrir PR

## Links úteis

Figma: https://www.figma.com/site/rZFAg5Qtu1HFRXc2Rfaxoo/Pacto-RH?node-id=0-1&p=f&t=8Zs5fSuOYuHioyUy-0
