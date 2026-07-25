# Backend PactoRH — Passo a Passo

Guia prático para construir o backend que este frontend já está esperando (contrato de endpoints e tipos já definidos em `config/api.config.ts` e `core/models/index.ts`). Complementa a seção 4 do `GUIA-DE-DESENVOLVIMENTO.md`.

**Stack escolhida**: NestJS + Prisma + PostgreSQL + JWT. Justificativa: TypeScript de ponta a ponta (reaproveita os `interface` já escritos no frontend quase sem alteração), estrutura de módulos/guards com a mesma filosofia do Angular (facilita quem já entende o frontend), e Prisma elimina SQL manual para o CRUD básico.

O backend é um **projeto separado** — não entra dentro desta pasta do Angular. Crie uma pasta irmã, ex: `pactorh-api/`.

---

## Etapa 0 — Pré-requisitos

- Node.js 20+
- PostgreSQL rodando local (ou via Docker — recomendado, evita instalar Postgres na máquina)
- `npm i -g @nestjs/cli` (opcional, dá para usar `npx`)

Banco via Docker (mais simples):

```bash
docker run --name pactorh-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=pactorh -p 5432:5432 -d postgres:16
```

---

## Etapa 1 — Criar o projeto

```bash
npx @nestjs/cli new pactorh-api
cd pactorh-api
npm install prisma @prisma/client --save
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
npm install @nestjs/config class-validator class-transformer
npm install @nestjs/swagger
npm install -D @types/passport-jwt @types/bcrypt
npx prisma init
```

`npx prisma init` cria `prisma/schema.prisma` e `.env` com `DATABASE_URL`.

**Verificação**: `npm run start:dev` sobe em `http://localhost:3000` sem erro.

---

## Etapa 2 — Variáveis de ambiente

`.env`:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/pactorh?schema=public"
JWT_ACCESS_SECRET="troque-por-um-segredo-forte"
JWT_REFRESH_SECRET="troque-por-outro-segredo-forte"
JWT_ACCESS_EXPIRES_IN="15m"
JWT_REFRESH_EXPIRES_IN="7d"
CORS_ORIGIN="http://localhost:4200"
PORT=3000
```

Nunca commitar `.env` — o `.gitignore` do Nest já cobre isso por padrão.

---

## Etapa 3 — Modelar o schema (espelha `core/models/index.ts`)

`prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Role {
  admin
  editor
  customer
}

model User {
  id           String   @id @default(uuid())
  name         String
  email        String   @unique
  passwordHash String
  roles        Role[]   @default([customer])
  avatar       String?
  createdAt    DateTime @default(now())
  orders       Order[]
  posts        BlogPost[]
}

model BlogPost {
  id            String   @id @default(uuid())
  title         String
  slug          String   @unique
  excerpt       String?
  content       String?
  coverImage    String?
  authorId      String?
  author        User?    @relation(fields: [authorId], references: [id])
  publishedAt   DateTime?
  readingTime   Int?
  tags          String[]
  createdAt     DateTime @default(now())
}

model Product {
  id              String   @id @default(uuid())
  slug            String   @unique
  name            String
  description     String?
  longDescription String?
  coverImage      String?
  price           Int
  originalPrice   Int?
  type            String
  topics          String[]
  benefits        String[]
  featured        Boolean  @default(false)
  orderItems      OrderItem[]
}

enum OrderStatus {
  pending
  paid
  shipped
  delivered
  cancelled
}

model Order {
  id         String      @id @default(uuid())
  userId     String
  user       User        @relation(fields: [userId], references: [id])
  status     OrderStatus @default(pending)
  total      Int
  createdAt  DateTime    @default(now())
  items      OrderItem[]
}

model OrderItem {
  orderId    String
  order      Order   @relation(fields: [orderId], references: [id], onDelete: Cascade)
  productId  String
  product    Product @relation(fields: [productId], references: [id])
  quantity   Int
  unitPrice  Int

  @@id([orderId, productId])
}

model ContactMessage {
  id        String   @id @default(uuid())
  name      String
  email     String
  phone     String?
  subject   String
  message   String
  company   String?
  createdAt DateTime @default(now())
}
```

```bash
npx prisma migrate dev --name init
```

**Verificação**: `npx prisma studio` abre uma UI no navegador mostrando as tabelas vazias — confirma que a migration rodou.

---

## Etapa 4 — Módulo de Auth (o mais importante — todo o resto depende dele)

```bash
npx @nestjs/cli generate module auth
npx @nestjs/cli generate service auth
npx @nestjs/cli generate controller auth
npx @nestjs/cli generate module prisma
npx @nestjs/cli generate service prisma
```

Endpoints a implementar, **exatamente com estes caminhos** (é o que `config/api.config.ts` já espera no frontend):

| Método | Rota | Corpo | Resposta |
|---|---|---|---|
| POST | `/auth/register` | `{ name, email, password }` | `{ user, tokens }` |
| POST | `/auth/login` | `{ email, password }` | `{ user, tokens }` |
| POST | `/auth/refresh` | `{ refreshToken }` | `{ accessToken, refreshToken }` |
| POST | `/auth/logout` | — (token no header) | `204` |
| GET  | `/auth/me` | — (token no header) | `User` |
| POST | `/auth/forgot-password` | `{ email }` | `{ message }` |
| POST | `/auth/reset-password` | `{ token, newPassword }` | `{ message }` |
| POST | `/auth/verify-email` | `{ token }` | `{ message }` |

Pontos de atenção na implementação:
- **Hash de senha**: `bcrypt.hash(password, 10)` no registro; `bcrypt.compare` no login. Nunca salvar senha em texto puro.
- **JWT**: gerar `accessToken` (curto, `JWT_ACCESS_EXPIRES_IN`) e `refreshToken` (longo) no login/registro/refresh — o formato `AuthTokens` do frontend já espera exatamente `{ accessToken, refreshToken }`.
- **Guard JWT** (`JwtAuthGuard` com `passport-jwt`): protege `/auth/me` e qualquer rota futura que exija login — espelha o `authGuard` do Angular.
- **Decorator de Roles** (`@Roles('admin')` + `RolesGuard`): espelha o `roleGuard` do Angular.
- **forgot/reset/verify-email**: para funcionar de verdade precisam de um serviço de e-mail (ver Etapa 7). Enquanto isso, pode implementar gerando o token e só logando no console (`console.log`) para testar o fluxo manualmente.

**Verificação**: com o Postman/Insomnia (ou `curl`), registre um usuário, faça login, confirme que `/auth/me` com o token retorna os dados certos e que sem token retorna `401`.

---

## Etapa 5 — Módulos de conteúdo (Blog, Products, Contact, Orders)

Mesma receita para cada um: `module` + `service` (usa `PrismaService`) + `controller` (rotas GET/POST).

| Módulo | Rotas |
|---|---|
| Blog | `GET /blog`, `GET /blog/:id`, `GET /blog/slug/:slug` |
| Products | `GET /products`, `GET /products/:id`, `GET /products/slug/:slug` |
| Contact | `POST /contact` (salva no banco + idealmente dispara e-mail) |
| Orders | `POST /orders` (autenticado), `GET /orders` (do usuário logado), `GET /orders/:id` |

Orders e o `POST /contact` devem usar DTOs com `class-validator` (`@IsEmail()`, `@IsNotEmpty()` etc.) para validar o corpo da requisição antes de tocar no banco.

**Verificação**: cada endpoint testado manualmente (Postman) retornando o formato exato dos `interface` do frontend (`BlogPost`, `Product`, `Order`).

---

## Etapa 6 — CORS

`main.ts`:

```ts
app.enableCors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
});
```

Sem isso, o navegador bloqueia toda chamada do Angular (`localhost:4200`) para a API (`localhost:3000`) — é o erro clássico "blocked by CORS policy" no console.

---

## Etapa 7 — E-mail transacional (para forgot-password e confirmação de pedido)

Serviço recomendado para começar: **Resend** (API simples, tem free tier) ou **SendGrid**. Um `EmailModule` com um `EmailService.send(to, subject, html)` chamado pelos módulos de Auth e Orders.

---

## Etapa 8 — Documentação automática (Swagger)

```ts
// main.ts
const config = new DocumentBuilder().setTitle('PactoRH API').setVersion('1.0').build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document);
```

Depois disso, `http://localhost:3000/docs` mostra todos os endpoints testáveis no navegador — ótimo para conferir se bate com o que o frontend espera.

---

## Etapa 9 — Testes

O Nest já vem com Jest configurado. Priorize testes de:
- `AuthService` (hash de senha, geração de token, rejeição de credenciais inválidas).
- Guards (`JwtAuthGuard`, `RolesGuard`).
- Pelo menos um teste e2e por módulo (`GET /blog` retorna 200 e um array).

```bash
npm test
npm run test:e2e
```

---

## Etapa 10 — Dockerizar

`Dockerfile`:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npx prisma generate
RUN npm run build
CMD ["node", "dist/main"]
EXPOSE 3000
```

`docker-compose.yml` (API + Postgres juntos, bom para dev/homolog):

```yaml
services:
  api:
    build: .
    ports: ["3000:3000"]
    env_file: .env
    depends_on: [db]
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: pactorh
    ports: ["5432:5432"]
    volumes: ["pgdata:/var/lib/postgresql/data"]
volumes:
  pgdata:
```

---

## Etapa 11 — Deploy

Opções que já resolvem Postgres + deploy juntos, sem precisar administrar servidor:

| Serviço | Observação |
|---|---|
| **Railway** | Mais simples: conecta o repo, detecta o Dockerfile, provisiona Postgres com um clique. |
| **Render** | Parecido com Railway, tem free tier para banco pequeno. |
| **Fly.io** | Mais controle, exige `fly.toml`, também tem Postgres gerenciado. |

Depois do deploy, pegue a URL pública da API e volte ao **frontend**: atualize `src/environments/environments.prod.ts` (`apiUrl`) com essa URL — ver seção 3.3 do `GUIA-DE-DESENVOLVIMENTO.md`.

---

## Etapa 12 — Conectar o frontend de verdade

No repositório do Angular:

1. `AuthService` (`core/services/auth.service.ts`): trocar `mockLogin`/`mockRegister` por chamadas ao `AuthRepository` já existente (`core/repositories/auth.repository.ts`).
2. Telas de blog/produto (hoje placeholders "em breve"): injetar `BlogRepository`/`ProductRepository` e consumir os `Observable`.
3. Rodar `npm test` e testar manualmente o fluxo de login/registro contra a API real.

Nesse ponto o app deixa de ser uma demo com mock e vira um sistema de verdade.
