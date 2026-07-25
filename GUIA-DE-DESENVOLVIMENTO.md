# Guia de Desenvolvimento — PactoRH

Este documento complementa o `README.md` (que cobre instalação/scripts/estrutura) explicando **como o projeto funciona por baixo dos panos** e **o caminho para evoluí-lo até um sistema completo em produção**. O backend, a autenticação real, o blog e a loja já saíram do papel — este guia reflete o estado atual e o que ainda falta.

---

## 1. Como o app funciona hoje

### 1.1 O que existe de verdade

O projeto é um **monorepo full-stack**: frontend Angular 19 (raiz) + backend NestJS (`backend/`), rodando lado a lado.

- **Auth, Blog e Produtos são reais** — o frontend fala HTTP de verdade com a API em `backend/` (NestJS + Prisma + PostgreSQL). `AuthService`, `BlogListComponent`/`BlogDetailComponent` e `ProductListComponent`/`ProductDetailComponent` usam seus repositórios (`core/repositories/`) para bater na API, sem mock nenhum.
- **`CartService`** (`src/app/features/shop/cart/cart.service.ts`) continua guardando o carrinho só no `localStorage` — funcional, mas ainda não existe tela de carrinho nem checkout que finalize a compra via `POST /orders` (o endpoint já existe no backend).
- **Contato** (`/contato`) ainda é um placeholder — `ContactRepository` existe e aponta para `POST /contact` (que já funciona no backend), mas nenhuma tela chama ele ainda.

Ou seja: a estrutura de repositórios foi desenhada desde o início pensando nisso, e a "troca do mock pela chamada real" (auth, blog, produtos) já foi feita — falta fazer o mesmo para contato e pedidos.

### 1.2 Fluxo de uma tela

```
Rota (app.routes.ts)
  → PublicLayoutComponent (header + <router-outlet> + footer)
    → Componente da página (ex: HomeComponent, LoginComponent)
      → usa services (core/services) e/ou repositórios (core/repositories)
      → repositórios batem na API real (backend/) via ApiService/HttpClient
      → services guardam estado em signals (Angular Signals) e/ou localStorage
```

Exemplo real — tela de login (`features/auth/login/login.component.ts`):

1. Usuário preenche o formulário (Reactive Forms, validado com `Validators` — senha mínima de 8 caracteres, igual ao backend).
2. `submit()` chama `authService.login({ email, password })`.
3. `AuthService.login()` chama `authRepository.login(...)`, que faz `POST http://localhost:3000/auth/login` de verdade.
4. Se a API responder `200` com `{ user, tokens }`, salva o token e o usuário no `localStorage` (via `TokenService`) e atualiza o signal `currentUser` — o header reage sozinho e passa a mostrar "Olá, {nome}"/"Sair".
5. Se a API responder `401` (credenciais erradas), o `catchError` do componente extrai a mensagem real do backend (`extractErrorMessage`, `core/utils/http-error.util.ts`) e mostra `.form-error` — sem navegar, sem deslogar (ver nota sobre o interceptor abaixo).
6. Em caso de sucesso, o componente navega para `/`.

### 1.3 Autenticação — o que é real

| Peça | Estado |
|---|---|
| `TokenService` (guarda/lê token do `localStorage`) | Real |
| `authGuard`, `guestGuard`, `roleGuard` (proteção de rotas) | Real |
| `authInterceptor` (anexa `Authorization: Bearer <token>`) | Real, conectado à API |
| `AuthService.login/register/logout/...` | **Real** — usa `AuthRepository`, sem mock |
| `AuthRepository` (`core/repositories/auth.repository.ts`) | **Em uso** |
| Renovação automática de token (silent refresh) | **Não implementado** — `AuthRepository.refresh()` existe, mas nada o chama ainda; o access token expira em 15min e o usuário é deslogado |
| `GET /auth/me` (validar sessão contra o servidor) | **Não usado** — a sessão é restaurada só do `localStorage` no boot, sem revalidar contra a API |

Um detalhe que só apareceu ao ligar a API de verdade: o `authInterceptor` originalmente deslogava em **qualquer** resposta `401`, inclusive a de senha errada no próprio `/auth/login` — o que navegava o usuário para fora da tela de login antes do formulário conseguir mostrar o erro. A regra hoje é: só desloga automaticamente quando **havia um token anexado** e ele foi rejeitado (sessão realmente expirada); um 401 de credenciais erradas (sem token) é tratado pelo próprio formulário.

### 1.4 Design system

Cores, espaçamentos, tipografia: tudo em `src/styles.scss` como CSS custom properties. Componentes nunca usam hex direto — sempre a variável.

**Regra de cor**: preto é o padrão em todo o site. O azul (`--color-blue-800`, `#0600C3`) e o vermelho (`--color-red-800`, `#8E0300`) institucionais existem na paleta, mas **só aparecem** dentro de `/empresa` (azul) e `/profissional` (vermelho), e nos dois cards que os representam na home (seção "Soluções"). Mecanismo: `--color-primary` e `--color-red` (os aliases que botões, títulos e links de fato consomem) apontam para preto por padrão; duas classes utilitárias — `.theme-blue` e `.theme-red` — sobrescrevem esses dois aliases localmente quando aplicadas a um elemento wrapper, e qualquer componente compartilhado usado dentro dele (botão, `.section-title`, `.section-tag`...) herda a cor automaticamente via cascata de CSS custom properties, sem precisar de CSS extra por componente. Erros de formulário (`.form-error`) são a exceção: usam `--color-error`, sempre vermelho, por convenção de UX — não fazem parte dessa regra de marca.

---

## 2. Como funcionam as "APIs" (GET/POST) do projeto

### 2.1 A cadeia completa

```
Componente
  → Repositório (core/repositories/*.repository.ts)
    → ApiService (core/services/api.service.ts)
      → HttpClient do Angular
        → authInterceptor (anexa o token, se houver)
          → Backend NestJS (backend/, localhost:3000) → Prisma → PostgreSQL
```

### 2.2 `ApiService` — o ponto único de saída HTTP

```ts
// src/app/core/services/api.service.ts
get<T>(path: string, params?: Record<string, string | number>): Observable<T> {
  return this.http.get<T>(`${this.baseUrl}${path}`, { params });
}
post<T>(path: string, body: unknown): Observable<T> { ... }
```

`baseUrl` vem de `config/api.config.ts`, que por sua vez lê de `src/environments/environments.ts` (`apiUrl: 'http://localhost:3000'` em dev — o backend não usa prefixo `/api`). **Nenhum outro arquivo do projeto deveria montar uma URL de API na mão** — sempre passa por aqui.

### 2.3 Endpoints já mapeados (`config/api.config.ts`)

```ts
export const API_CONFIG = {
  baseUrl: environment.apiUrl,
  endpoints: {
    blog: '/blog',
    products: '/products',
    contact: '/contact',
    orders: '/orders',
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      refresh: '/auth/refresh',
      logout: '/auth/logout',
      me: '/auth/me',
      forgotPassword: '/auth/forgot-password',
      resetPassword: '/auth/reset-password',
      verifyEmail: '/auth/verify-email',
    },
  },
};
```

Esse é o contrato de fato — o backend (`backend/src/*/*.controller.ts`) implementa exatamente esses caminhos, com os mesmos formatos de request/response que os tipos em `core/models/index.ts` descrevem.

### 2.4 Exemplo de GET e POST reais no código

`core/repositories/blog.repository.ts` (em uso por `BlogListComponent`/`BlogDetailComponent`):

```ts
getAll(): Observable<BlogPost[]> {
  return this.api.get<BlogPost[]>(this.endpoint);       // GET /blog
}
getBySlug(slug: string): Observable<BlogPost> {
  return this.api.get<BlogPost>(`${this.endpoint}/slug/${slug}`); // GET /blog/slug/:slug
}
```

`core/repositories/contact.repository.ts` (pronto, mas **sem consumidor** — `ContactComponent` ainda é um placeholder):

```ts
send(form: ContactForm): Observable<ContactResponse> {
  return this.api.post<ContactResponse>(this.endpoint, form);    // POST /contact
}
```

`core/repositories/auth.repository.ts` já tem os métodos `login`, `register`, `refresh`, `logout`, `me`, `forgotPassword`, `resetPassword`, `verifyEmail` — todos em uso por `AuthService`, exceto `refresh` e `me` (ver 1.3).

### 2.5 O que falta para virar de verdade

- **Auth, blog e produtos**: nada — já está tudo conectado (ver seção 1.1).
- **Contato**: falta construir a tela (`features/contact/contact.component.ts`) injetando `ContactRepository` e consumindo `send()`. O endpoint (`POST /contact`) já existe e funciona no backend.
- **Pedidos/checkout**: falta uma tela de carrinho visível (`CartService` já expõe tudo pronto via signals), um formulário de endereço/pagamento, e a chamada final a `OrderRepository`/`POST /orders`. O backend já implementa isso (calcula o total no servidor a partir dos produtos, nunca confia em preço vindo do cliente) — só falta a UI. Ver seção 5.

---

## 3. Como colocar em produção

### 3.1 Gerar o build do frontend

```bash
npm run build
```

Isso gera `dist/pacto-rh/browser/` — arquivos estáticos (HTML/CSS/JS) prontos para servir.

### 3.2 Onde hospedar o frontend

Qualquer uma destas resolve, do mais simples ao mais flexível:

| Opção | Quando usar |
|---|---|
| **Vercel** ou **Netlify** | Mais simples: conecta no GitHub, cada push builda e publica sozinho. Grátis para projetos pequenos. |
| **Firebase Hosting** | Bom se preferir manter tudo no ecossistema Firebase. |
| **GitHub Pages** | Só para sites sem necessidade de configuração de servidor (rotas do Angular precisam de um fallback para `index.html` — GitHub Pages exige um `404.html` = cópia do `index.html`). |
| **VPS próprio (nginx)** | Mais controle, mais trabalho manual. Precisa configurar `try_files $uri /index.html;` no nginx para as rotas do Angular funcionarem ao dar refresh. |

Passo a passo típico (Vercel, exemplo mais comum):
1. Suba o projeto no GitHub.
2. Na Vercel: "New Project" → importe o repositório.
3. Build command: `npm run build`. Output directory: `dist/pacto-rh/browser`.
4. Configure a variável de ambiente de produção apontando `environment.apiUrl` para a URL real do backend em produção (ver 3.3).
5. Deploy.

### 3.3 Onde hospedar o backend

O backend já tem `Dockerfile` + `docker-compose.yml` prontos (`backend/`) — qualquer host que rode containers Docker serve:

| Serviço | Observação |
|---|---|
| **Railway** | Mais simples: conecta o repo, detecta o `Dockerfile`, provisiona Postgres com um clique. |
| **Render** | Parecido com Railway, tem free tier para banco pequeno. |
| **Fly.io** | Mais controle, exige `fly.toml`, também tem Postgres gerenciado. |

Depois do deploy, pegue a URL pública da API para o passo seguinte.

### 3.4 Ajustar o `environment` de produção do frontend

Hoje só existe `src/environments/environments.ts` (dev, `apiUrl: 'http://localhost:3000'`). Antes de ir para produção, crie `src/environments/environments.prod.ts`:

```ts
export const environment = {
  production: true,
  apiUrl: 'https://api.seudominio.com.br',
  siteUrl: 'https://www.pactorh.com.br',
};
```

E configure `fileReplacements` no `angular.json` (ainda não configurado — é um ajuste pequeno quando for a hora) para o build de produção trocar o arquivo automaticamente.

### 3.5 Domínio e HTTPS

- Registre o domínio (registro.br, GoDaddy etc.).
- Aponte o DNS para o host escolhido (a própria Vercel/Netlify/Railway orienta o CNAME/A record).
- HTTPS é automático na Vercel/Netlify/Railway. Em VPS próprio, use Let's Encrypt (`certbot`).

### 3.6 CI (opcional, mas recomendado)

Um workflow simples de GitHub Actions rodando em cada PR (frontend e backend):

```yaml
# .github/workflows/ci.yml
name: CI
on: [pull_request]
jobs:
  frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm install
      - run: npm test
      - run: npm run build
  backend:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env: { POSTGRES_PASSWORD: postgres, POSTGRES_DB: pactorh }
        ports: ['5432:5432']
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm install
        working-directory: backend
      - run: npx prisma migrate deploy
        working-directory: backend
        env: { DATABASE_URL: 'postgresql://postgres:postgres@localhost:5432/pactorh' }
      - run: npm test && npm run test:e2e
        working-directory: backend
        env: { DATABASE_URL: 'postgresql://postgres:postgres@localhost:5432/pactorh', JWT_ACCESS_SECRET: ci, JWT_REFRESH_SECRET: ci, JWT_ACCESS_EXPIRES_IN: 15m, JWT_REFRESH_EXPIRES_IN: 7d }
```

Isso garante que nada quebrado chegue na `main`.

---

## 4. O backend: como foi construído

Esta seção documenta **o que já existe** em `backend/` — útil para quem for mexer nele pela primeira vez. O passo a passo original que gerou esse backend está em `BACKEND-PASSO-A-PASSO.md`/`PROMPT-BACKEND.md`, na raiz do repo, caso queira ver o histórico de decisões.

### 4.1 Por que backend separado

O navegador não deveria falar com o PostgreSQL diretamente — exporia credenciais do banco a qualquer visitante. O caminho é sempre:

```
Angular (frontend)  →  HTTP (REST/JSON)  →  NestJS (backend/)  →  Prisma  →  PostgreSQL
```

### 4.2 Stack e estrutura

**NestJS + Prisma + PostgreSQL + JWT** (access + refresh, via Passport) + **bcrypt** (hash de senha) + **class-validator** (DTOs) + **Swagger** (`/docs`).

```
backend/src/
├── auth/        # register, login, refresh, logout, /me, forgot/reset/verify-email
├── blog/        # GET /blog, /blog/:id, /blog/slug/:slug
├── products/     # GET /products, /products/:id, /products/slug/:slug
├── contact/      # POST /contact
├── orders/       # POST/GET /orders, GET /orders/:id (autenticado)
├── prisma/       # PrismaService compartilhado (módulo @Global)
└── common/       # JwtAuthGuard, RolesGuard, @Roles(), JwtStrategy — reaproveitados pelos módulos protegidos
```

O schema (`backend/prisma/schema.prisma`) modela `User`, `RefreshToken`, `BlogPost`, `Product`, `Order`, `OrderItem`, `ContactMessage` — espelha exatamente os tipos de `core/models/index.ts` do frontend (com os IDs como `string`/UUID, não `number`).

### 4.3 Rodando localmente

```bash
cd backend
docker compose up -d --build   # Postgres + API num comando só
```

Sem Docker: `npm install`, um Postgres local, `.env` configurado a partir de `.env.example`, `npx prisma migrate dev`, `npm run start:dev`.

### 4.4 Autenticação (JWT)

- Login/registro geram um **access token** (15min) e um **refresh token** (7 dias) — formato `AuthTokens`/`AuthSession` do frontend.
- Senhas com hash `bcrypt`, nunca texto puro (nem em log).
- Refresh tokens são armazenados **hasheados** (SHA-256) no banco (`RefreshToken`), permitindo revogação — `/auth/logout` marca o refresh token atual como revogado.
- `JwtAuthGuard` protege rotas que exigem login (`/auth/me`, `/auth/logout`, todo o módulo `orders`); `RolesGuard` + `@Roles()` dão controle por papel para quando for necessário (não usado ainda por nenhuma rota).

### 4.5 O que falta para o backend "fechar" o produto

O backend já implementa tudo que o frontend consome hoje. O que existe no backend mas **não tem consumidor no frontend ainda**:
- `POST /contact` — falta a tela.
- `POST /orders`, `GET /orders`, `GET /orders/:id` — falta carrinho visível + checkout (ver seção 5).

O que **nem o backend** ainda faz:
- E-mail transacional de verdade (forgot-password e verify-email hoje só logam o token no console do servidor, para testar o fluxo manualmente).
- Webhook de gateway de pagamento (não há integração de pagamento nenhuma ainda).

---

## 5. Como montar a loja (finalizar o checkout)

### 5.1 O que já existe (`src/app/features/shop/`)

| Pasta | Status |
|---|---|
| `products/` | **Funcional** — `/produtos` e `/produtos/:slug`, consome `ProductRepository`, "Adicionar ao carrinho" já funciona |
| `cart/` | **Funcional por baixo**, sem tela — `CartService` expõe `items()`, `itemCount()`, `subtotal()` como signals prontos, persiste no navegador |
| `checkout/` | Só tipos (`Address`, `CheckoutData`) |
| `orders/` | Modelo + `OrderRepository` (HTTP pronto) — backend também pronto (`POST /orders` calcula o total no servidor a partir dos produtos reais, nunca confia em preço vindo do cliente) |
| `payments/` | Só tipos — nenhuma integração de gateway ainda |

### 5.2 O que falta construir (nessa ordem)

1. **Tela/drawer de carrinho** — `CartService` já expõe tudo que a UI precisa; falta só o componente que lista `items()` e permite ajustar quantidade/remover.
2. **Tela de checkout** — formulário de endereço (`Address`) + escolha de forma de pagamento.
3. **Integração de pagamento** — escolha um gateway:
   - **Mercado Pago** ou **PagSeguro** (mais comuns no Brasil, suportam Pix/boleto/cartão).
   - **Stripe** (mais internacional, ótima documentação).
   Nos três casos, o fluxo típico é: o backend cria uma "sessão de pagamento"/"preferência" e devolve uma URL ou token; o frontend redireciona o usuário ou usa um componente/SDK do gateway; o backend recebe um webhook confirmando o pagamento e atualiza o `Order` no banco (`status: 'paid'`).
4. **Ligar ao `POST /orders` já existente** — enviar `{ items: [{productId, quantity}], billingAddress, paymentMethodId }`, exatamente como `OrderRepository`/o backend já esperam.
5. **E-mails transacionais** (confirmação de compra) — via Resend/SendGrid, disparado pelo backend.

### 5.3 Onde entram os componentes já prontos

As telas novas devem reaproveitar `shared/components` (`app-card`/classes `.card` para os itens do carrinho, `app-button` para "Finalizar compra", `app-input` para os formulários de endereço) — segue o mesmo padrão das telas de auth e das telas de produto já construídas.

---

## 6. Login e cadastro — checklist

- [x] Backend implementa `POST /auth/register`, `POST /auth/login`, `POST /auth/refresh`, `GET /auth/me`.
- [x] Senhas com hash (`bcrypt`), nunca texto puro.
- [x] Backend devolve `{ user, tokens }` no formato de `AuthSession` (`core/models/index.ts`).
- [x] `AuthService` usa `AuthRepository` (chamadas reais), sem mock.
- [x] Endpoint `verify-email` mapeado e funcional (token real gerado no registro, validado no backend).
- [ ] Refresh automático de token antes de expirar — o interceptor já desloga em `401` de sessão expirada; falta implementar o *silent refresh* usando `AuthRepository.refresh()` (já existe, só não está encadeado).
- [ ] `GET /auth/me` usado para validar a sessão restaurada do `localStorage` no boot do app (hoje é otimista — só é corrigido no primeiro 401).
- [ ] E-mail de verdade para forgot-password/verify-email (hoje o token só é logado no console do servidor).

---

## 7. Manutenção do dia a dia

### 7.1 Trocar redes sociais, telefone, e-mail, endereço

Tudo centralizado em **um único arquivo**:

```ts
// src/app/shared/constants/company.constants.ts
export const COMPANY_CONTACT: readonly ContactLine[] = [
  { icon: 'fas fa-envelope', label: 'contato@pactorh.com.br', href: 'mailto:contato@pactorh.com.br' },
  { icon: 'fas fa-phone', label: '(11) 0000-0000', href: 'tel:+551100000000' },
  { icon: 'fab fa-whatsapp', label: '(11) 90000-0000', href: 'https://wa.me/5511900000000' },
  { icon: 'fas fa-map-marker-alt', label: 'São Paulo, SP' },
];

export const COMPANY_SOCIAL_LINKS: readonly SocialLink[] = [
  { label: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://linkedin.com' },
  { label: 'Instagram', icon: 'fab fa-instagram', href: 'https://instagram.com' },
  { label: 'Facebook', icon: 'fab fa-facebook-f', href: 'https://facebook.com' },
  { label: 'YouTube', icon: 'fab fa-youtube', href: 'https://youtube.com' },
];
```

Edite os valores de `label`/`href` com os dados reais — o footer (e qualquer tela futura que precise desses dados) atualiza sozinho, sem mexer em HTML.

### 7.2 Trocar textos/links de navegação

`src/app/shared/constants/nav.constants.ts` — usado por header **e** footer ao mesmo tempo. Mudou aqui, mudou nos dois. Note que `/blog` e `/produtos` hoje não estão no menu principal (só acessíveis por link direto) — adicione ali se quiser deixá-los visíveis na navegação.

### 7.3 Trocar cores da marca

`src/styles.scss`, bloco `:root` no topo do arquivo — mude `--color-blue-800` e `--color-red-800` (as âncoras); as demais 8 variações de cada cor são derivadas dessas duas. Lembre que, por padrão, essas cores só aparecem dentro de `.theme-blue`/`.theme-red` (ver seção 1.4) — o resto do site usa preto independente do que estiver nessas variáveis.

### 7.4 Trocar logo/imagens

`src/assets/images/logo-pacto-rh/` — várias variações já existem (colorida, preta, branca, com/sem nome). Os componentes que usam logo (`header`, `hero`, `footer`) apontam para arquivos específicos dessa pasta — troque o arquivo mantendo o mesmo nome, ou atualize o `src` no respectivo `.component.html`.

### 7.5 Adicionar uma página nova

Ver `README.md`, seção "Como adicionar".

### 7.6 Rodar testes antes de qualquer mudança maior

```bash
npm test              # frontend — 39 testes (services, guards, interceptor, repositórios, diretivas)
cd backend && npm test && npm run test:e2e   # backend — 6 unitários + 18 e2e contra Postgres real
```

Se uma mudança quebrar algo aqui, é sinal de alerta antes de ir para produção.

---

## 8. Roadmap sugerido

Ordem recomendada, cada etapa deixando o produto utilizável no fim dela:

1. ~~**Backend + banco de dados**~~ — feito (`backend/`, NestJS + Prisma + PostgreSQL).
2. ~~**Autenticação real**~~ — feito, ponta a ponta.
3. ~~**Blog dinâmico**~~ — feito (`/blog`, `/blog/:slug` consumindo `BlogRepository`).
4. **Loja** (seção 5) — **parcialmente feito**: produtos (listagem/detalhe) e carrinho local prontos; falta tela de carrinho visível, checkout e integração de pagamento.
5. **Contato** (seção 2.5) — falta só a tela; endpoint já funciona.
6. **Deploy em produção** (seção 3) — domínio, HTTPS, CI. Backend já tem Dockerfile pronto para isso.
7. **Refinamentos**: renovação automática de token (seção 6), e-mail transacional real (seção 4.5), SEO (meta tags dinâmicas por página), analytics (GA4/Plausible), testes E2E automatizados (hoje a validação visual usa Playwright manualmente, não como suíte no CI), painel administrativo simples para gerenciar posts/produtos sem mexer em SQL direto.

Cada etapa é independente o suficiente para ser um projeto/sprint próprio — não é necessário fazer tudo de uma vez.
