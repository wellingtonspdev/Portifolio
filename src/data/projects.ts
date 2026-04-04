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
    description: "Arquitetura de missão crítica desenhada para operar com margem bruta de <span class=\"tabular-nums font-semibold text-accent-end\">88%</span>, eliminando a confusão patrimonial de microempreendedores através de um Contador Digital autônomo. O sistema não apenas processa dados, mas atua como um linter fiscal proativo que blinda o usuário contra multas e omissão de receita, utilizando uma infraestrutura Zero OpEx que escala sem gerar dívidas técnicas ou custos fixos de nuvem.",
    problem: "Analistas perdem tempo organizando dados malformados, correndo risco de fraude não intencional dos clientes. Necessidade de separar rigidamente dados PF e PJ com auditoria longa.",
    solution: "Isolamento Zero-Trust via Row-Level Security (RLS) garantindo que as tabelas do PostgreSQL sejam blindadas por tenant via workspaceId. Cofre digital estruturado no Cloudflare R2 com política Zero Egress Fee, e auditoria inteligente em background utilizando Transactional Outbox acoplado ao Google Vertex AI sem expor PII.",
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
    description: "Rompi a barreira de performance da automação convencional ao reduzir o consumo de memória RAM em <span class=\"tabular-nums font-semibold text-accent-end\">90%</span>, permitindo a escala massiva de agentes de IA em ambientes restritos. Desenvolvi um motor de automação que utiliza Remote Browser Isolation (RBI) e técnicas de engenharia reversa de protocolos para evadir sistemas de proteção WAF de elite, transformando processos manuais onerosos em fluxos autônomos.",
    problem: "Bloqueios de WAFs e memory leaks severos em automações nativas causam travamento de máquinas dos clientes, resultando em perda de dinheiro e processos interrompidos no meio da noite.",
    solution: "Orquestração Zero-Trust de credenciais via FastAPI onde fluxos são restritos nativamente a cada cliente via workspaceId. Abordagem Headless-less utilizando KSM e Docker para comprimir de <span class=\"tabular-nums font-semibold text-accent-end\">900MB</span> para menos de <span class=\"tabular-nums font-semibold text-accent-end\">60MB</span> por nó, com auto-healing conduzido ativamente por inferência de imagens via GPT-4o Vision.",
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
    description: "Projetei a próxima fronteira da Gerontologia Digital ao criar uma Tecnologia Invisível que monitora a saúde sênior sem invadir a privacidade. O sistema utiliza Edge AI para processar voz proativa localmente no smartphone, combatendo o isolamento social e fornecendo telemetria clínica preditiva para operadoras de saúde reduzirem o índice de sinistralidade.",
    problem: "As interações constantes esbarram no Teto de Inferência de APIs na nuvem e no medo inerente de vigilância contínua pelas famílias de idosos assistidos.",
    solution: "Edge-to-Cloud SaMD Arch: Processamento NLP e Vector Store movidos diretamente para aparelho. O backend recebe apenas sinais comportamentais criptografados. Motor gráfico Impeller atingindo consistentes <span class=\"tabular-nums font-semibold text-accent-end\">120 FPS</span> no Flutter para estancar tontura digital nos seniores.",
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
    description: "Desenvolvi uma metodologia alternativa para o agronegócio de precisão que troca a lentidão da análise química pela velocidade dos dados e da luz. Através de algoritmos de busca inteligente aplicados à Interferometria Speckle, criei uma Prova de Conceito capaz de identificar perfis de solo com <span class=\"tabular-nums font-semibold text-accent-end\">100%</span> de coerência qualitativa, acelerando a tomada de decisão no manejo.",
    problem: "Testes químicos convencionais são extremamente morosos, impedindo atualizações dinâmicas e causando desperdício hídrico fatal em safras na agricultura conectada.",
    solution: "Engenharia de precisão utilizando algoritmos Greedy Best-First Search para correlacionar padrões de espalhamento óptico em alta performance, construindo um banco digital que escala a acurácia sem dependência de laboratórios úmidos convencionais.",
    icon: "Microscope",
    badges: [
      { text: "Data Science / Optic", colorClass: "border-amber-800 text-amber-400" },
      { text: "Greedy BFS", colorClass: "border-green-800 text-green-400" }
    ],
    links: {},
    inDevelopment: true
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