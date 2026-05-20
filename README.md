src/
├── app/
│   ├── core/                             # Lógica global — NÃO MUDA
│   │   ├── guards/
│   │   │   └── auth.guard.ts             # ✅ já existe
│   │   ├── interceptors/
│   │   │   └── auth.interceptor.ts       # ✅ já existe
│   │   ├── models/
│   │   │   └── index.ts                  # ✅ já existe
│   │   └── services/
│   │       ├── api.service.ts            # ✅ já existe
│   │       ├── auth.service.ts           # ✅ já existe
│   │       ├── blog.service.ts           # ✅ já existe
│   │       ├── contact.service.ts        # ✅ já existe
│   │       └── product.service.ts        # ✅ já existe
│   │
│   ├── layout/                           # ATUALIZAR os 3 arquivos do header
│   │   ├── header.component.ts           # 🔄 SUBSTITUIR pelo novo (menu simplificado)
│   │   ├── header.component.html         # 🔄 SUBSTITUIR pelo novo (logo | nav central | hamburger)
│   │   ├── header.component.scss         # 🔄 SUBSTITUIR pelo novo (fundo cinza, sem transparência)
│   │   ├── footer.component.ts           # ✅ mantém
│   │   ├── footer.component.html         # ✅ mantém
│   │   ├── footer.component.scss         # ✅ mantém
│   │   └── public-layout.component.ts    # ✅ mantém
│   │
│   ├── features/
│   │   │
│   │   ├── home/                         # REFORMULAR a homepage
│   │   │   ├── components/
│   │   │   │   ├── hero.component.ts           # 🔄 SUBSTITUIR (novo visual fundo cinza + colunas)
│   │   │   │   ├── hero.component.html         # 🔄 SUBSTITUIR
│   │   │   │   ├── hero.component.scss         # 🔄 SUBSTITUIR
│   │   │   │   │
│   │   │   │   ├── audience-split.component.ts   # 🆕 CRIAR (cards Empresa | Profissional)
│   │   │   │   ├── audience-split.component.html # 🆕 CRIAR
│   │   │   │   ├── audience-split.component.scss # 🆕 CRIAR
│   │   │   │   │
│   │   │   │   ├── about-mauricio.component.ts   # 🆕 CRIAR (seção do Maurício)
│   │   │   │   ├── about-mauricio.component.html # 🆕 CRIAR
│   │   │   │   ├── about-mauricio.component.scss # 🆕 CRIAR
│   │   │   │   │
│   │   │   │   ├── testimonials.component.ts     # ✅ mantém (carrossel de depoimentos)
│   │   │   │   ├── testimonials.component.html   # ✅ mantém
│   │   │   │   ├── testimonials.component.scss   # ✅ mantém
│   │   │   │   │
│   │   │   │   ├── services-highlight.component.ts   # 🗑️ PODE DELETAR (virou página /empresa)
│   │   │   │   ├── ebook-banner.component.ts         # 🗑️ PODE DELETAR (vai para /profissional)
│   │   │   │   └── blog-preview.component.ts         # 🗑️ PODE DELETAR (simplificado por ora)
│   │   │   │
│   │   │   └── home.component.ts             # 🔄 SUBSTITUIR (nova sequência de seções)
│   │   │
│   │   ├── empresa/                      # 🆕 CRIAR PASTA E ARQUIVO
│   │   │   └── empresa.component.ts      # 🆕 CRIAR (stub por agora — página /empresa)
│   │   │
│   │   ├── profissional/                 # 🆕 CRIAR PASTA E ARQUIVO
│   │   │   └── profissional.component.ts # 🆕 CRIAR (stub por agora — página /profissional)
│   │   │
│   │   ├── disc/                         # 🆕 CRIAR PASTA E ARQUIVO
│   │   │   └── disc.component.ts         # 🆕 CRIAR (stub por agora — página /disc)
│   │   │
│   │   ├── blog/                         # ✅ mantém os dois arquivos existentes
│   │   │   ├── blog-list.component.ts
│   │   │   └── blog-detail.component.ts
│   │   │
│   │   ├── contact/                      # ✅ mantém
│   │   │   └── contact.component.ts
│   │   │
│   │   ├── about/                        # ✅ mantém
│   │   │   └── about.component.ts
│   │   │
│   │   ├── solutions/                    # 🗑️ PODE DELETAR (substituída por /empresa)
│   │   ├── solutions-professional/       # 🗑️ PODE DELETAR (substituída por /profissional)
│   │   ├── trainings/                    # 🗑️ PODE DELETAR (vai dentro de /empresa futuramente)
│   │   └── product/                      # ✅ mantém para e-books (vai dentro de /profissional)
│   │
│   ├── shared/                           # ✅ NÃO MUDA
│   │   └── components/
│   │       ├── button.component.ts
│   │       ├── card.component.ts
│   │       ├── input.component.ts
│   │       ├── modal.component.ts
│   │       └── section.component.ts
│   │
│   ├── dashboard/                        # ✅ NÃO MUDA
│   │   ├── pages/
│   │   │   ├── analytics.component.ts
│   │   │   ├── leads.component.ts
│   │   │   └── users.component.ts
│   │   └── dashboard.component.ts
│   │
│   ├── app.component.ts                  # ✅ não muda
│   ├── app.config.ts                     # ✅ não muda
│   └── app.routes.ts                     # 🔄 SUBSTITUIR (rotas simplificadas)
│
├── assets/
│   └── images/
│       ├── foto-mauricio.png             # ✅ já existe
│       ├── logo-completo-pactorh.png     # ✅ já existe
│       └── logo-teste-disc.png           # ✅ já existe
│
├── environments/
│   ├── environment.ts                    # ✅ não muda
│   └── environment.prod.ts               # ✅ não muda
│
├── index.html                            # ✅ não muda
├── main.ts                               # ✅ não muda
└── styles.scss                           # 🔄 SUBSTITUIR (nova paleta de cores)


# ══════════════════════════════════════════════════════════════
#  LEGENDA
# ══════════════════════════════════════════════════════════════
#
#  ✅  mantém — não precisa tocar
#  🔄  substituir — copiar o arquivo gerado por cima do que existe
#  🆕  criar — arquivo novo, não existe ainda
#  🗑️  pode deletar — não é mais usado (mas não quebra se deixar)
#
#
# ══════════════════════════════════════════════════════════════
#  ORDEM DE EXECUÇÃO (faça nessa sequência)
# ══════════════════════════════════════════════════════════════
#
#  PASSO 1 — Substituir arquivos existentes
#  ─────────────────────────────────────────
#  src/styles.scss
#  src/app/app.routes.ts
#  src/app/layout/header.component.ts
#  src/app/layout/header.component.html
#  src/app/layout/header.component.scss
#  src/app/features/home/home.component.ts
#  src/app/features/home/components/hero.component.ts
#  src/app/features/home/components/hero.component.html
#  src/app/features/home/components/hero.component.scss
#
#  PASSO 2 — Criar arquivos novos em home/components/
#  ────────────────────────────────────────────────────
#  src/app/features/home/components/audience-split.component.ts
#  src/app/features/home/components/audience-split.component.html
#  src/app/features/home/components/audience-split.component.scss
#  src/app/features/home/components/about-mauricio.component.ts
#  src/app/features/home/components/about-mauricio.component.html
#  src/app/features/home/components/about-mauricio.component.scss
#
#  PASSO 3 — Criar pastas e stubs (no terminal)
#  ─────────────────────────────────────────────
#  mkdir -p src/app/features/empresa
#  mkdir -p src/app/features/profissional
#  mkdir -p src/app/features/disc
#
#  Depois criar dentro de cada pasta:
#  src/app/features/empresa/empresa.component.ts
#  src/app/features/profissional/profissional.component.ts
#  src/app/features/disc/disc.component.ts
#
#  PASSO 4 — Testar
#  ─────────────────
#  ng serve
#  Abrir http://localhost:4200