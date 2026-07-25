import { Product } from './product.model';

/**
 * Catálogo mockado da Loja PactoRH. Para adicionar um novo produto no
 * futuro, basta incluir um novo item aqui — nenhuma rota ou componente
 * precisa ser criado.
 */
export const PRODUCTS_MOCK: Product[] = [
  {
    id: '1',
    slug: 'lideranca-de-alta-performance',
    name: 'Liderança de Alta Performance',
    category: 'Curso',
    icon: 'fa-user-tie',
    shortDescription: 'Curso prático para desenvolver líderes que entregam resultado.',
    description:
      'Um curso objetivo sobre os fundamentos da liderança moderna: como delegar com clareza, dar ' +
      'feedback eficaz e manter times engajados mesmo sob pressão. Aulas curtas, aplicáveis desde a ' +
      'primeira semana.',
    benefits: [
      'Ferramentas práticas de gestão de equipe',
      'Modelos de feedback e reunião 1:1',
      'Certificado de conclusão',
    ],
    targetAudience: 'Gestores, coordenadores e líderes de equipe em início de carreira de gestão.',
    featured: true,
  },
  {
    id: '2',
    slug: 'feedback-que-transforma',
    name: 'Feedback que Transforma',
    category: 'E-book',
    icon: 'fa-book',
    shortDescription: 'Guia direto sobre como dar e receber feedback com maturidade.',
    description:
      'E-book curto e prático com roteiros prontos para conversas difíceis, exemplos reais e um passo a ' +
      'passo para transformar feedback em desenvolvimento de verdade — sem enrolação.',
    benefits: ['Roteiros prontos para conversas de feedback', 'Exemplos reais comentados', 'Leitura de ~40 minutos'],
    targetAudience: 'Líderes e profissionais de RH que querem dar feedback com mais segurança.',
  },
  {
    id: '3',
    slug: 'carreira-em-foco',
    name: 'Carreira em Foco',
    category: 'Mentoria',
    icon: 'fa-user-graduate',
    shortDescription: 'Mentoria individual para destravar o próximo passo da sua carreira.',
    description:
      'Sessões individuais com um mentor PactoRH para mapear seus objetivos, identificar gaps de ' +
      'desenvolvimento e montar um plano de ação realista para os próximos meses.',
    benefits: ['4 sessões individuais', 'Plano de desenvolvimento personalizado', 'Acompanhamento por e-mail'],
    targetAudience: 'Profissionais em transição de carreira ou buscando a próxima posição.',
    featured: true,
  },
  {
    id: '4',
    slug: 'gestao-de-conflitos',
    name: 'Gestão de Conflitos',
    category: 'Workshop',
    icon: 'fa-people-arrows',
    shortDescription: 'Workshop prático para lidar com conflitos de equipe sem desgaste.',
    description:
      'Workshop dinâmico com estudos de caso reais, focado em identificar a origem dos conflitos mais ' +
      'comuns em equipes e aplicar técnicas de mediação simples no dia a dia.',
    benefits: ['Dinâmicas em grupo', 'Técnicas de mediação aplicáveis', 'Material de apoio digital'],
    targetAudience: 'Times de RH, gestores e lideranças de qualquer área.',
  },
  {
    id: '5',
    slug: 'guia-pratico-do-disc',
    name: 'Guia Prático do DISC',
    category: 'E-book',
    icon: 'fa-brain',
    shortDescription: 'Entenda o DISC e como aplicá-lo na gestão de pessoas.',
    description:
      'Um guia completo sobre a metodologia DISC, com explicações claras de cada perfil comportamental ' +
      'e orientações práticas de como usá-la para montar equipes mais equilibradas.',
    benefits: ['Explicação de cada perfil DISC', 'Dicas de aplicação em equipes', 'Checklist de comunicação por perfil'],
    targetAudience: 'Profissionais de RH e gestores que aplicam o DISC nas suas equipes.',
  },
  {
    id: '6',
    slug: 'onboarding-estrategico',
    name: 'Onboarding Estratégico',
    category: 'Curso',
    icon: 'fa-door-open',
    shortDescription: 'Como estruturar um onboarding que retém e engaja desde o dia um.',
    description:
      'Curso voltado para times de RH que querem transformar o onboarding em uma experiência ' +
      'estruturada, reduzindo turnover nos primeiros meses e acelerando a produtividade de novos ' +
      'contratados.',
    benefits: ['Modelo de plano de onboarding 30/60/90', 'Checklist de primeiro dia', 'Templates prontos para adaptar'],
    targetAudience: 'Profissionais de RH e gestores responsáveis por integração de novos colaboradores.',
  },
  {
    id: '7',
    slug: 'primeiros-passos-na-gestao',
    name: 'Primeiros Passos na Gestão',
    category: 'Mentoria',
    icon: 'fa-compass',
    shortDescription: 'Mentoria para quem está assumindo sua primeira posição de liderança.',
    description:
      'Acompanhamento próximo para profissionais recém-promovidos a cargos de liderança, com foco em ' +
      'construir confiança, organizar prioridades e evitar os erros mais comuns dessa fase.',
    benefits: ['3 sessões individuais', 'Apoio na primeira reunião de equipe', 'Materiais de apoio exclusivos'],
    targetAudience: 'Profissionais em transição para o primeiro cargo de gestão.',
  },
  {
    id: '8',
    slug: 'comunicacao-assertiva',
    name: 'Comunicação Assertiva',
    category: 'Workshop',
    icon: 'fa-comments',
    shortDescription: 'Workshop para se comunicar com clareza em qualquer contexto profissional.',
    description:
      'Um workshop focado em técnicas simples de comunicação assertiva — como estruturar uma mensagem, ' +
      'dizer não sem desgastar relações e conduzir conversas difíceis com mais segurança.',
    benefits: ['Técnicas de comunicação não-violenta', 'Exercícios práticos em grupo', 'Certificado de participação'],
    targetAudience: 'Profissionais de qualquer área que lidam com comunicação interpessoal no trabalho.',
  },
  {
    id: '9',
    slug: 'cultura-organizacional-na-pratica',
    name: 'Cultura Organizacional na Prática',
    category: 'E-book',
    icon: 'fa-building',
    shortDescription: 'Como construir e sustentar uma cultura organizacional forte.',
    description:
      'E-book com exemplos reais de empresas que estruturaram sua cultura organizacional de forma ' +
      'intencional, e um roteiro prático para diagnosticar e evoluir a cultura do seu time.',
    benefits: ['Roteiro de diagnóstico de cultura', 'Estudos de caso reais', 'Modelo de plano de ação'],
    targetAudience: 'Lideranças e profissionais de RH responsáveis por cultura organizacional.',
  },
  {
    id: '10',
    slug: 'gestao-do-tempo-e-produtividade',
    name: 'Gestão do Tempo e Produtividade',
    category: 'Curso',
    icon: 'fa-hourglass-half',
    shortDescription: 'Curso prático para organizar rotina, prioridades e foco.',
    description:
      'Curso direto ao ponto sobre métodos de priorização, organização de agenda e redução de ' +
      'distrações — pensado para quem sente que o dia nunca é suficiente.',
    benefits: ['Métodos de priorização aplicáveis', 'Modelo de planejamento semanal', 'Aulas curtas de até 15 minutos'],
    targetAudience: 'Profissionais e gestores que querem melhorar sua produtividade pessoal.',
  },
  {
    id: '11',
    slug: 'transicao-de-carreira',
    name: 'Transição de Carreira',
    category: 'Mentoria',
    icon: 'fa-route',
    shortDescription: 'Mentoria para quem está mudando de área ou de mercado.',
    description:
      'Apoio individual para profissionais em processo de transição de carreira — do mapeamento de ' +
      'competências transferíveis até a construção de um posicionamento claro no novo mercado.',
    benefits: ['Mapeamento de competências transferíveis', 'Apoio no reposicionamento de currículo', '4 sessões individuais'],
    targetAudience: 'Profissionais buscando mudar de área, cargo ou mercado de atuação.',
  },
  {
    id: '12',
    slug: 'inteligencia-emocional-no-trabalho',
    name: 'Inteligência Emocional no Trabalho',
    category: 'Workshop',
    icon: 'fa-heart-pulse',
    shortDescription: 'Workshop sobre como lidar com emoções em ambientes de alta pressão.',
    description:
      'Workshop vivencial sobre autoconhecimento e regulação emocional aplicados ao ambiente de ' +
      'trabalho, com técnicas práticas para manter clareza em momentos de pressão e conflito.',
    benefits: ['Técnicas de autorregulação emocional', 'Dinâmicas vivenciais', 'Material de apoio digital'],
    targetAudience: 'Profissionais e lideranças que atuam sob pressão ou alta cobrança.',
  },
];
