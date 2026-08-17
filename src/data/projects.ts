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
    id: "portfolio-profissional",
    title: "Portfólio Profissional",
    subtitle: "Projeto autoral de apresentação técnica e carreira",
    description: "Aplicação pública criada para transformar projetos, experiência, formação e pesquisa em cases técnicos navegáveis, bilíngues e prontos para avaliação por recrutadores.",
    problem: "Uma lista de tecnologias não demonstra, por si só, como decisões de produto, interface, acessibilidade, descoberta e entrega se conectam em uma aplicação real.",
    solution: "Construí um portfólio em React e TypeScript com cases detalhados, interface responsiva, elementos 3D, internacionalização, SEO técnico, currículo para download e deploy automatizado no GitHub Pages.",
    icon: "Cpu",
    badges: [
      { text: "React / TypeScript", colorClass: "border-cyan-800 text-cyan-300" },
      { text: "Three.js / Framer Motion", colorClass: "border-indigo-800 text-indigo-300" },
      { text: "SEO / i18n / CI-CD", colorClass: "border-emerald-800 text-emerald-300" }
    ],
    links: {
      github: "https://github.com/wellingtonspdev/Portifolio"
    }
  },
  {
    id: "reserva-laboratorios-fatec",
    title: "Reserva de Laboratórios FATEC",
    subtitle: "Modernização de sistema legado em PHP",
    description: "Atuei de forma end-to-end na análise, planejamento e evolução de um sistema legado de reserva de laboratórios para a FATEC Itaquera, com melhorias em usabilidade, responsividade, identidade visual institucional, documentação de execução e validação da entrega.",
    problem: "O sistema original funcionava, mas a interface era pouco intuitiva, presa ao desktop e difícil para consultas frequentes de professores, estudantes e administradores. A visualização de disponibilidade, salas, horários e configurações exigia mais esforço do que a rotina da instituição permitia.",
    solution: "Minha contribuição abrangeu análise técnica de legado, mapeamento de telas e fluxos, planejamento de melhorias, decisões de tecnologia, desenvolvimento frontend, ajustes em PHP/CodeIgniter, banco MySQL, UX/UI, responsividade, Docker, documentação, organização de issues, testes, correções e validação final da entrega. A modernização incremental preservou regras de negócio existentes enquanto reorganizava login, grade de reservas, cards de laboratórios, detalhes de períodos e configurações administrativas.",
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
    subtitle: "Projeto acadêmico de gestão para estúdios de Pilates",
    description: "Projeto interdisciplinar acadêmico para organizar agenda, alunos, informações financeiras, relatórios e fluxos administrativos de estúdios de Pilates.",
    problem: "A fragmentação administrativa e a dependência de controles manuais geravam gargalos comerciais, risco de overbooking e dificuldade para acompanhar a operação do estúdio.",
    solution: "Atuei como Tech Lead Acadêmico, Desenvolvedor Full Stack e QA, liderando a equipe no planejamento, divisão de tarefas e decisões técnicas, enquanto desenvolvi ativamente frontend, backend, banco de dados, APIs e integrações. Responsável por testes, documentação, revisão e validação das entregas.",
    imageUrl: "https://storage.googleapis.com/portfolio-assets-prod-wsp/assets/Define_Pilates/dash_admin.png",
    images: [dpLogo, dpDash, dpAgenda, dpHome, dpMetricas, dpRelatorio2, dpRelatorios],
    icon: "LayoutDashboard",
    badges: [
      { text: "Tech Lead Acadêmico · Full Stack · QA", colorClass: "border-blue-800 text-blue-400" },
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
    subtitle: "Projeto autoral de gestão financeira",
    description: "Projeto 100% autoral em desenvolvimento, do qual sou o único desenvolvedor, para apoiar organização financeira, automação de rotinas e comunicação com a contabilidade de pequenos negócios.",
    problem: "Rotinas financeiras e operacionais dependem de informações organizadas, regras consistentes e controle de acesso para que a tomada de decisão seja segura e rastreável.",
    solution: "Desenvolvo backend e frontend com Node.js, TypeScript, Express, Prisma, PostgreSQL e React, aplicando APIs REST, testes e integração com Telegram de forma incremental. Todo o sistema — modelagem, APIs, dashboard e automações — é construído e mantido por mim.",
    icon: "Database",
    badges: [
      { text: "Node.js / TypeScript", colorClass: "border-emerald-800 text-emerald-300" },
      { text: "Express / Prisma / PostgreSQL", colorClass: "border-blue-800 text-blue-300" },
      { text: "Em evolução", colorClass: "border-indigo-800 text-indigo-300" }
    ],
    links: {},
    inDevelopment: true,
  },
  {
    id: "ibdn-plataforma",
    title: "Plataforma Ambiental IBDN",
    subtitle: "Projeto acadêmico de digitalização ambiental",
    description: "Projeto acadêmico em equipe para apoiar a digitalização de processos ambientais, com autenticação, controle de acesso e organização de fluxos institucionais. Minha atuação foi transversal e full stack ao longo de todo o projeto.",
    problem: "Processos manuais e em papel atrasavam a emissão de selos ecológicos e limitavam a transparência das certificações ambientais do Instituto.",
    solution: "Atuei de forma transversal na plataforma, contribuindo com frontend, backend, banco de dados, integrações, QA, documentação, finalização e preparação da demo — incluindo entregas específicas de interface, como o carrossel com aproximadamente 30 parceiros e patrocinadores. Participou da definição da arquitetura, modelagem de dados, rotas, endpoints, testes funcionais e apresentação institucional.",
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
    subtitle: "Pesquisa aplicada · dados experimentais · Speckle · algoritmos de busca",
    description: "Participei de uma pesquisa aplicada à caracterização de amostras de solo com metodologia Speckle e busca inteligente, abrangendo experimentos em laboratório, coleta de dados, modelagem computacional e algoritmos de classificação.",
    problem: "Métodos laboratoriais tradicionais podem tornar a análise de solo lenta e custosa. O desafio da pesquisa foi explorar uma abordagem computacional para organizar assinaturas ópticas e apoiar a distinção qualitativa de perfis de solo.",
    solution: "Minha contribuição envolveu participação em experimentos em laboratório, coleta e organização de dados experimentais, modelagem de banco de dados relacional para os dados científicos, implementação de Greedy Best-First Search para classificação, e apresentação dos resultados em 2 simpósios científicos.",
    icon: "Microscope",
    badges: [
      { text: "CNPq / FATEC", colorClass: "border-amber-800 text-amber-400" },
      { text: "Greedy BFS", colorClass: "border-green-800 text-green-400" }
    ],
    links: {},
  }
];
