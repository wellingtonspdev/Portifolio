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
  icon: string;
  imageUrl?: string;
  images?: string[];
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

import ibdnLogin from '../assets/IBDN/screenshots/01-login-portal-ambiental-ibdn.png';
import ibdnDashboard from '../assets/IBDN/screenshots/02-dashboard-admin-ibdn.png';
import ibdnEmpresas from '../assets/IBDN/screenshots/03-empresas-ibdn.png';
import ibdnGerenciarSelos from '../assets/IBDN/screenshots/04-gerenciar-selos-ibdn.png';
import ibdnSolicitacoes from '../assets/IBDN/screenshots/05-validacao-solicitacoes-ibdn.png';
import ibdnRamos from '../assets/IBDN/screenshots/06-ramos-atividade-ibdn.png';
import ibdnSolicitarSelo from '../assets/IBDN/screenshots/07-solicitar-selo-empresa-ibdn.png';
import fatecLogin from '../assets/Reserva_Laboratorios_FATEC/01-login-reserva-laboratorios-fatec.png';
import fatecGrade from '../assets/Reserva_Laboratorios_FATEC/02-grade-reservas-laboratorios.png';
import fatecConfiguracoes from '../assets/Reserva_Laboratorios_FATEC/03-configuracoes-administrativas.png';
import fatecDetalhe from '../assets/Reserva_Laboratorios_FATEC/04-detalhe-reserva-periodos.png';

export const projectsData: Project[] = [
  {
    id: "reserva-laboratorios-fatec",
    title: "Reserva de Laboratórios FATEC",
    subtitle: "Modernização de sistema legado em PHP",
    description: "Adaptei e modernizei um sistema legado de reserva de laboratórios para o contexto da FATEC Itaquera, melhorando usabilidade, responsividade, identidade visual institucional e documentação de execução sem reescrever a aplicação do zero.",
    problem: "O sistema original funcionava, mas a interface era pouco intuitiva, presa ao desktop e difícil para consultas frequentes de professores, estudantes e administradores. A visualização de disponibilidade, salas, horários e configurações exigia mais esforço do que a rotina da instituição permitia.",
    solution: "A solução foi uma modernização incremental sobre ClassroomBookings em PHP/CodeIgniter, preservando regras de negócio e reorganizando telas de login, grade de reservas, cards de laboratórios, detalhes de períodos e configurações administrativas. O projeto também recebeu ajustes de idioma, Docker e documentação pública para execução segura.",
    icon: "LayoutDashboard",
    images: [fatecLogin, fatecGrade, fatecConfiguracoes, fatecDetalhe],
    badges: [
      { text: "PHP / CodeIgniter", colorClass: "border-indigo-800 text-indigo-400" },
      { text: "MySQL / Docker", colorClass: "border-blue-800 text-blue-400" },
      { text: "UX / Responsividade", colorClass: "border-cyan-800 text-cyan-400" }
    ],
    links: {
      github: "https://github.com/wellingtonspdev/reserva-laboratorios-fatec"
    }
  },
  {
    id: "define-pilates",
    title: "Define Pilates SaaS",
    subtitle: "Gestão estratégica multi-tenant e compliance",
    description: "Liderei a arquitetura de um ecossistema B2B para estúdios de saúde, com foco em reduzir falhas operacionais, organizar agenda, gestão financeira e controle de alunos em uma experiência integrada.",
    problem: "A fragmentação administrativa e a dependência de controles manuais geravam gargalos comerciais, risco de overbooking e dificuldade para acompanhar a operação do estúdio.",
    solution: "Como Tech Lead, conduzi uma solução API-first com Django e React, aplicando isolamento por permissões, organização de fluxos administrativos e práticas de TDD/CI para sustentar uma entrega acadêmica completa.",
    imageUrl: "https://storage.googleapis.com/portfolio-assets-prod-wsp/assets/Define_Pilates/dash_admin.png",
    images: [dpLogo, dpDash, dpAgenda, dpHome, dpMetricas, dpRelatorio2, dpRelatorios],
    icon: "LayoutDashboard",
    badges: [
      { text: "Tech Lead", colorClass: "border-blue-800 text-blue-400" },
      { text: "Django / React", colorClass: "border-indigo-800 text-indigo-400" }
    ],
    links: {
      demo: "https://pi-3-semestre.github.io/Demo-Define-Pilates/",
      github: "https://github.com/PI-3-Semestre/projeto-estudio-pilates.git"
    }
  },
  {
    id: "wsp-finance",
    title: "WSP Finance",
    subtitle: "Plataforma SaaS de gestão financeira com IA",
    description: "Projeto de backend para apoiar automação de rotinas, organização financeira e fluxos multiusuário, com regras de negócio, auditoria e isolamento de dados.",
    problem: "Rotinas financeiras e operacionais dependem de informações organizadas, regras consistentes e controle de acesso para que a tomada de decisão seja segura e rastreável.",
    solution: "Desenvolvi componentes de backend com Node.js, TypeScript, Express, Prisma e PostgreSQL, aplicando APIs REST, testes automatizados e práticas de segurança para apoiar uma plataforma financeira SaaS.",
    icon: "Database",
    badges: [
      { text: "Node.js / TypeScript", colorClass: "border-emerald-800 text-emerald-300" },
      { text: "Express / Prisma / PostgreSQL", colorClass: "border-blue-800 text-blue-300" },
      { text: "SaaS / Segurança", colorClass: "border-indigo-800 text-indigo-300" }
    ],
    links: {},
  },
  {
    id: "ibdn-plataforma",
    title: "Plataforma Ambiental IBDN",
    subtitle: "Gestão de governança ESG",
    description: "Projeto full stack para apoiar a digitalização de processos ambientais, reduzindo dependência de fluxos manuais e melhorando a organização de certificações e informações institucionais.",
    problem: "Processos manuais e em papel atrasavam a emissão de selos ecológicos e limitavam a transparência das certificações ambientais do Instituto.",
    solution: "A solução estruturou uma plataforma web com autenticação, controle de acesso e organização dos fluxos principais, aproximando a operação de um modelo mais rastreável e escalável.",
    icon: "Leaf",
    images: [
      ibdnLogin,
      ibdnDashboard,
      ibdnEmpresas,
      ibdnGerenciarSelos,
      ibdnSolicitacoes,
      ibdnRamos,
      ibdnSolicitarSelo
    ],
    badges: [
      { text: "Sustentabilidade", colorClass: "border-green-800 text-green-400" },
      { text: "Full Stack / Python", colorClass: "border-indigo-800 text-indigo-400" }
    ],
    links: {
      demo: "https://wellingtonspdev.github.io/IBDN-Demo/",
      github: "https://github.com/DSM2SEM2025/IBDN.git"
    }
  },
  {
    id: "cnpq-research",
    title: "Pesquisa CNPq / Iniciação Científica",
    subtitle: "IA e processamento óptico",
    description: "Participei de uma pesquisa aplicada à caracterização de amostras de solo com metodologia Speckle e busca inteligente, apresentada em simpósios científicos e voltada ao uso de algoritmos para apoiar análise de dados experimentais.",
    problem: "Métodos laboratoriais tradicionais podem tornar a análise de solo lenta e custosa. O desafio da pesquisa foi explorar uma abordagem computacional para organizar assinaturas ópticas e apoiar a distinção qualitativa de perfis de solo.",
    solution: "Minha contribuição envolveu modelagem de banco de dados relacional para os dados científicos e implementação de algoritmo Greedy Best-First Search para classificação, conectando fundamentos de dados, busca heurística e pesquisa aplicada.",
    icon: "Microscope",
    badges: [
      { text: "CNPq / FATEC", colorClass: "border-amber-800 text-amber-400" },
      { text: "Greedy BFS", colorClass: "border-green-800 text-green-400" }
    ],
    links: {},
  }
];
