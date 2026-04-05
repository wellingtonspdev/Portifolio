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
  imageUrl?: string; // Legado mantido por segurança
  images?: string[]; // Arrays para o carrossel ou logo única
  badges: Badge[];
  links: {
    demo?: string;
    github?: string;
    article?: string;
  };
  inDevelopment?: boolean;
};

import dpLogo from '../assets/Define_Pilates/Logo_Define_Pilates_SF.png';
import dpAgenda from '../assets/Define_Pilates/agenda_geral.png';
import dpDash from '../assets/Define_Pilates/dash_admin.png';
import dpHome from '../assets/Define_Pilates/home_aluno.png';
import dpMetricas from '../assets/Define_Pilates/metricas_detalhadas.png';
import dpRelatorio2 from '../assets/Define_Pilates/relatorio2.png';
import dpRelatorios from '../assets/Define_Pilates/relatorios.png';

import ibdnLogo from '../assets/IBDN/logo-ibdn.svg';
import samuraiLogo from '../assets/Samurai_Pro/logo_Samurai_Pro_sem_fundo.png';
import vivaLogo from '../assets/VIVA/Logo_VIVA.svg';
import wspLogo from '../assets/WSP_Finance/logo_WSP_Finance_sem_fundo.svg';

export const projectsData: Project[] = [
  {
    id: "wsp-finance",
    title: "WSP Finance",
    subtitle: "Ecossistema SaaS B2B2C de Alta Rentabilidade",
    description: "Projetado para um mercado onde <span class=\"tabular-nums font-semibold text-accent-end\">52%</span> do tempo útil das operações é desperdiçado com retrabalho e lixo digital, o WSP Finance nasce com uma premissa agressiva de Cloud FinOps. Erradiquei a exposição jurídica e resgatei o tempo produtivo, sustentando uma margem bruta projetada de <span class=\"tabular-nums font-semibold text-accent-end\">88%</span> em escala — amparado por isolamento Zero-Trust via RLS, AuditLog imutável e motores de IA assíncronos em estrita conformidade com a LGPD.",
    problem: "<span class=\"tabular-nums font-semibold text-accent-end\">52%</span> da capacidade produtiva das equipes financeiras era consumida por fricção de importação em ERPs legados e \"sopa de dados\", somada ao risco jurídico crítico de Responsabilidade Solidária pela mistura patrimonial. A postura assumida foi atuar na interceptação preditiva do erro — transformando o sistema passivo de registros em um motor ativo de saneamento de dados e compliance.",
    solution: "Foi implementada uma arquitetura Modular Monolith assíncrona blindada com Row-Level Security (RLS) nativo (PostgreSQL), garantindo isolamento Zero-Trust entre inquilinos e contextos CPF/CNPJ. No tratamento de dados (tipagem Decimal(19,4)), um Linter Fiscal de IA Híbrida via Transactional Outbox processa em background com PII Masking. Chaves trancadas com criptografia de envelope (AWS KMS) e <span class=\"tabular-nums font-semibold text-accent-end\">100%</span> dos binários pesados migrados para Cloudflare R2 (Zero Egress Fee).",
    icon: "Database",
    images: [wspLogo],
    badges: [
      { text: "Node.js / PostgreSQL", colorClass: "border-yellow-800 text-yellow-400" },
      { text: "FinOps Radical", colorClass: "border-blue-800 text-blue-400" }
    ],
    links: {},
    inDevelopment: true
  },
  {
    id: "samurai-pro",
    title: "Samurai Pro",
    subtitle: "Engenharia de Automação e RBI de Alta Densidade",
    description: "Uma arquitetura cloud-native elimina o principal gargalo do modelo de rateio de ferramentas SaaS premium: o custo de infraestrutura que inviabiliza a escala. Projetei uma automação SaaS capaz de escalar conexões simultâneas sem crescimento linear de custos, reduzindo o footprint de memória em <span class=\"tabular-nums font-semibold text-accent-end\">93%</span> — de 900MB para menos de 60MB por sessão — substituindo instâncias Chromium por TLS Impersonation (curl_cffi) e Remote Browser Isolation com KSM.",
    problem: "O modelo de rateio de ferramentas SaaS premium era a única saída viável para empreendedores, mas tecnicamente um campo minado: vazamentos de memória, WAFs bloqueando tudo e hardware local paralisado destruíam a operação e a confiança do usuário final. A postura assumida foi tratar o problema como um desafio de engenharia enterprise, não como um mero script de automação.",
    solution: "Foi arquitetada a Samurai Pro API — um backend FastAPI com autenticação Zero-Trust, criptografia Fernet (AES-128-CBC) e automação headless-less via TLS Impersonation (curl_cffi) em KSM + Oracle Cloud Free Egress — eliminando o footprint de RAM em até <span class=\"tabular-nums font-semibold text-accent-end\">93%</span> por sessão e permitindo escala de conexões M2M sem crescimento proporcional de custos.",
    icon: "Cpu",
    images: [samuraiLogo],
    badges: [
      { text: "Python / Linux KSM", colorClass: "border-indigo-800 text-indigo-400" },
      { text: "RBI B2B", colorClass: "border-blue-800 text-blue-400" }
    ],
    links: {},
    inDevelopment: true
  },
  {
    id: "define-pilates",
    title: "Define Pilates SaaS",
    subtitle: "Gestão Estratégica Multi-tenant e Compliance",
    description: "Liderei a arquitetura de um ecossistema B2B focado em estancar a perda de receita por falhas operacionais, entregando uma solução completa para estúdios de saúde em conformidade estrita com LGPD e as normas do CREFITO. O projeto resolve a fragmentação administrativa através de automação por eventos, permitindo que a gestão financeira e o controle de overbooking ocorram de forma invisível.",
    problem: "A fragmentação operacional corrói a margem de lucro. A dependência do WhatsApp gerava gargalos comerciais e abria margem para o overbooking, limitando a escala empresarial dos estúdios.",
    solution: "Arquitetura API-First no Django. O núcleo garante estrito isolamento Zero-Trust entre estúdios por meio do identificador workspaceId associado a Object-Level Permissions granulares via django-guardian. Motor financeiro assíncrono para pagamentos acionado por Django Signals.",
    imageUrl: "https://storage.googleapis.com/portfolio-assets-prod-wsp/assets/Define_Pilates/dash_admin.png",
    images: [dpLogo, dpDash, dpAgenda, dpHome, dpMetricas, dpRelatorio2, dpRelatorios],
    icon: "LayoutDashboard",
    badges: [
      { text: "Tech Lead", colorClass: "border-blue-800 text-blue-400" },
      { text: "Django / RLS Auth", colorClass: "border-indigo-800 text-indigo-400" }
    ],
    links: {
      demo: "https://pi-3-semestre.github.io/Demo-Define-Pilates/",
      github: "https://github.com/PI-3-Semestre/projeto-estudio-pilates.git"
    }
  },
  {
    id: "viva-healthtech",
    title: "Ecossistema VIVA",
    subtitle: "Edge AI e HealthTech para Longevidade Ativa",
    description: "Uma arquitetura Edge-First elimina o principal obstáculo de escala das startups de IA para a Economia Prateada: o custo de inferência em nuvem. Entreguei um companheiro digital capaz de operar com menos de 1GB de RAM e 0,05% de CPU. O sistema provê respostas de voz abaixo de 300ms, rodando <span class=\"tabular-nums font-semibold text-accent-end\">100%</span> offline no celular do idoso (Privacy by Design), sem que nenhum byte trafegue para servidores externos.",
    problem: "O \"Teto de Inferência\" inviabilizava economicamente a escala de IAs sênior, enquanto o idadismo no design afastava usuários e a Fadiga de Alarmes destruía a adesão das famílias. A postura estabelecida foi tratar privacidade absoluta, eficiência computacional em nuvem e a inteligência do reporte preditivo (evitando falsos positivos) como restrições arquiteturais base, não como features opcionais.",
    solution: "Arquitetado ecossistema híbrido Edge-to-Cloud (Flutter + NestJS / Clean Architecture). O processamento de voz (Picovoice + Qwen 0.8B) e o RAG semântico (sqlite-vec) rodam localmente. O backend assegura resiliência assíncrona (Transactional Outbox + BullMQ) e reduz alarmes irrelevantes em até <span class=\"tabular-nums font-semibold text-accent-end\">74%</span> via Reporte por Exceção (SSE). Crescimento viral custeado a zero com Cloudflare R2 e WhatsApp Intents.",
    icon: "Activity",
    images: [vivaLogo],
    badges: [
      { text: "HealthTech / Edge AI", colorClass: "border-red-800 text-red-400" },
      { text: "Tech for Good / LGPD", colorClass: "border-teal-800 text-teal-400" }
    ],
    links: {},
    inDevelopment: true
  },
  {
    id: "cnpq-research",
    title: "Pesquisa Agritech CNPq",
    subtitle: "IA e Processamento Óptico",
    description: "Na agricultura de precisão, latência de dados significa perda de safra. Substituímos processos físico-químicos laboratoriais que levam dias por uma arquitetura computacional capaz de classificar a textura do solo em tempo quase real — alcançando <span class=\"tabular-nums font-semibold text-accent-end\">29%</span> de taxa de sucesso e coerência qualitativa na distinção dos perfis de solo, resolvendo o gargalo que paralisava decisões de manejo na ponta do campo. O trabalho foi apresentado em três simpósios científicos: 27º SICT-FATEC-SP (outubro de 2025), VII SICT-CPS/CNPq e CONIC-SEMESP 2025, com o título 'Caracterização de Amostras de Solo com Metodologia Speckle e Busca Inteligente'. Minha contribuição específica foi a modelagem e implementação do banco de dados relacional para estruturar os volumes de dados científicos, além da implementação do algoritmo Greedy Best-First Search para classificação de textura do solo.",
    problem: "O alto custo e a lentidão dos métodos laboratoriais atrasavam o time-to-decision em irrigação e fertilização. Sem dados exatos, os agrônomos tomavam decisões no escuro, resultando em desperdício hídrico fatal e sobrecarga de insumos. Rompi com a validação química, substituindo-a por validação óptica computacional que escala sem dependência da nuvem.",
    solution: "Implementei uma arquitetura de alta eficiência focada em RAG Local que converte leituras laser (Interferometria Speckle + THSP) em assinaturas digitais. Estas são processadas por IA heurística via Greedy Best-First Search com Busca Binária em MATLAB, operando sobre banco de dados relacional para calcular a menor distância matemática com ultra-baixa latência computacional.",
    icon: "Microscope",
    badges: [
      { text: "Data Science / Optic", colorClass: "border-amber-800 text-amber-400" },
      { text: "Greedy BFS", colorClass: "border-green-800 text-green-400" }
    ],
    links: {},
  },
  {
    id: "ibdn-plataforma",
    title: "Plataforma Ambiental IBDN",
    subtitle: "Gestão de Governança ESG",
    description: "A dependência de processos manuais e papéis gerava extrema lentidão na emissão e no monitoramento de certificações ecológicas e plantios, limitando a transparência e impedindo o ganho de escala do instituto.",
    problem: "Processos manuais e em papel atrasavam a emissão de selos ecológicos e limitavam a transparência das certificações ambientais do Instituto.",
    solution: "Arquitetou uma plataforma corporativa digital (API-First). Estruturou a gestão de identidade corporativa com Role-Based Access Control (RBAC). Digitalizou <span class=\"tabular-nums font-semibold text-accent-end\">100%</span> do workflow de emissão de selos do Instituto.",
    icon: "Leaf",
    images: [ibdnLogo],
    badges: [
      { text: "Sustentabilidade", colorClass: "border-green-800 text-green-400" },
      { text: "Full Stack / Python", colorClass: "border-indigo-800 text-indigo-400" }
    ],
    links: {}
  }
];