export type Badge = {
  text: string;
  colorClass: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  icon: string; // Usaremos nomes de ícones do Lucide
  imageUrl?: string;
  badges: Badge[];
  links: {
    demo?: string;
    github?: string;
    article?: string;
  };
  inDevelopment?: boolean;
};

export const projectsData: Project[] = [
  {
    id: "samurai-pro",
    title: "Samurai Pro",
    subtitle: "Samurai Pro (Automação RBI)",
    description: "Reduzi o consumo de RAM de 900MB para menos de 60MB por sessão em automação web utilizando Kernel Samepage Merging (KSM) no Linux e orquestrando fluxos em Python e n8n.",
    problem: "Bloqueios constantes de WAFs (Cloudflare/Akamai) e alto custo de RAM inviabilizando Remote Browser Isolation em escala.",
    solution: "Arquitetura de infraestrutura Python/Docker focada em KSM e substituição de seletores DOM frágeis por inferência visual auto-curável (Auto-healing) via GPT-4o Vision.",
    icon: "Cpu",
    badges: [
      { text: "Python / Linux KSM", colorClass: "border-indigo-800 text-indigo-400" },
      { text: "GPT-4o Vision", colorClass: "border-blue-800 text-blue-400" }
    ],
    links: {},
    inDevelopment: true
  },
  {
    id: "wsp-finance",
    title: "WSP Finance SaaS",
    subtitle: "WSP Finance (Cloud FinOps)",
    description: "Reduzi o OPEX de nuvem em 28% construindo um Cofre Digital de notas fiscais via Cloudflare R2 com arquitetura de taxa zero de egresso de dados (Zero Egress Fee).",
    problem: "Risco de 'alucinações' na auditoria fiscal por IAs comuns e alto custo de armazenamento para arquivos críticos.",
    solution: "Zerei alucinações isolando a análise semântica (Google Vertex AI) do motor determinístico (Node.js/Prisma). Isolamento via Row-Level Security (RLS) no PostgreSQL.",
    icon: "Database",
    badges: [
      { text: "Node.js / PostgreSQL", colorClass: "border-yellow-800 text-yellow-400" },
      { text: "Cloudflare R2 FinOps", colorClass: "border-blue-800 text-blue-400" }
    ],
    links: {},
    inDevelopment: true
  },
  {
    id: "viva-healthtech",
    title: "VIVA Telemetria",
    subtitle: "Ecossistema VIVA (HealthTech)",
    description: "Blindei o Event Loop da API contra falhas assíncronas em telemetria clínica, aplicando o padrão Transactional Outbox com filas BullMQ e Redis (NestJS).",
    problem: "Instabilidade e timeouts em processamentos de webhooks massivos de saúde e necessidade de conformidade extrema com LGPD e Privacidade (Zero-Trust).",
    solution: "Orquestração de um motor RAG Local 100% on-premise no dispositivo, rodando com <30MB de RAM usando o banco vetorial sqlite-vec.",
    icon: "Activity",
    badges: [
      { text: "NestJS / BullMQ", colorClass: "border-red-800 text-red-400" },
      { text: "Edge AI / sqlite-vec", colorClass: "border-teal-800 text-teal-400" }
    ],
    links: {},
    inDevelopment: true
  },
  {
    id: "define-pilates",
    title: "Define Pilates SaaS",
    subtitle: "Define Pilates SaaS",
    description: "Liderei equipe de 8 desenvolvedores na entrega de SaaS B2B, garantindo 100% de cobertura nos testes core e isolamento dinâmico de tenants usando PostgreSQL JSONB.",
    problem: "Liderança Hands-on na implementação da cultura TDD (Test-Driven Development), Swagger para a ponte Front/Back e Code Review focado em mentoria.",
    solution: "Backend escalável em Django REST com middleware Multi-tenant.",
    imageUrl: "https://storage.googleapis.com/portfolio-assets-prod-wsp/assets/Define_Pilates/dash_admin.png",
    icon: "LayoutDashboard",
    badges: [
      { text: "Tech Lead", colorClass: "border-blue-800 text-blue-400" },
      { text: "Django / TDD", colorClass: "border-indigo-800 text-indigo-400" }
    ],
    links: {
      demo: "https://pi-3-semestre.github.io/Demo-Define-Pilates/",
      github: "https://github.com/PI-3-Semestre/projeto-estudio-pilates.git"
    }
  },
  {
    id: "ibdn-plataforma",
    title: "Plataforma Ambiental IBDN",
    subtitle: "Plataforma IBDN",
    description: "Solução digital full stack protegida por RBAC e JWT para modernizar a emissão de certificados ambientais e acompanhamento de plantio do Instituto Brasileiro de Defesa da Natureza.",
    problem: "Digitalizar e proteger processos descentralizados e manuais.",
    solution: "API em FastAPI (Python), MySQL, React e Zustand para gerência de estado global, garantindo alta performance e segurança.",
    icon: "Leaf",
    badges: [
      { text: "FastAPI / React", colorClass: "border-green-800 text-green-400" }
    ],
    links: {}
  },
  {
    id: "cnpq-research",
    title: "Análise Óptica & IA",
    subtitle: "Pesquisa Científica CNPq",
    description: "Algoritmos estruturais em Python para classificar a rugosidade de amostras de solo, acelerando e substituindo testes químicos convencionais.",
    problem: "Implementação de algoritmos de busca gulosa (Greedy Best-First Search) tratando dados de Física Óptica (Interferometria Speckle).",
    solution: "Comprovação de embasamento matemático profundo essencial para engenharia de IA de alto nível.",
    icon: "Microscope",
    badges: [
      { text: "Pesquisa / IA Estrutural", colorClass: "border-amber-800 text-amber-400" },
      { text: "Python Avançado", colorClass: "border-red-800 text-red-400" }
    ],
    links: {}
  }
];
