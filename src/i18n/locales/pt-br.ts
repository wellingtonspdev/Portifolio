import type { Locale } from '../types'

export const ptBR: Locale = {
  meta: {
    lang: 'pt-br',
    title: 'Wellington Siqueira Porto | Desenvolvedor Full Stack & Arquiteto de Soluções',
    description: 'Portfólio de Wellington Siqueira Porto. Desenvolvedor Full Stack, estudante da FATEC e pesquisador em dados e algoritmos.',
    keywords: 'Wellington Siqueira Porto, Full Stack Developer, Python, Node.js, React, FATEC, CNPq, TDD, PostgreSQL, Docker',
    ogTitle: 'Wellington Siqueira Porto | Desenvolvedor Full Stack',
    ogDescription: 'Projetos reais, pesquisa aplicada e entregas acadêmicas em desenvolvimento web, dados e software.',
    jobTitle: 'Desenvolvedor Full Stack',
    knowsAbout: ['Python', 'Node.js', 'React.js', 'TypeScript', 'PHP', 'CodeIgniter', 'Docker', 'PostgreSQL', 'MySQL', 'TDD'],
    credentialName: 'Tecnólogo em Desenvolvimento de Software Multiplataforma',
  },

  nav: {
    about: 'Sobre',
    cases: 'Cases',
    skills: 'Skills',
    certs: 'Certificações',
  },

  hero: {
    badge: 'Disponível para Projetos e Oportunidades',
    phrases: [
      'Desenvolvedor Full Stack',
      'Estudante de Desenvolvimento Multiplataforma da FATEC',
      'Pesquisador em Dados e Algoritmos',
      'Tech Lead em Projeto Acadêmico',
    ],
    tagline: 'Desenvolvedor Full Stack focado em produtos web, dados e sistemas que resolvem problemas reais.<br />React · Python · Node.js · Docker',
    cta: 'Explore os Projetos',
  },

  about: {
    heading: 'Sobre Mim',
    paragraphs: [
      'Sou um <strong>desenvolvedor Full Stack</strong> em formação pela <strong>FATEC Itaquera</strong>, com experiência prática em projetos acadêmicos, sistemas web, APIs, bancos de dados e interfaces modernas. Tenho interesse em construir soluções claras, bem documentadas e próximas de problemas reais.',
      'Atuei como <strong>Tech Lead no projeto interdisciplinar Define Pilates</strong>, liderando um squad multidisciplinar com foco em organização técnica, TDD, CI/CD e entrega funcional. Também participei da modernização de um sistema legado de reservas para a FATEC, trabalhando com PHP, CodeIgniter, Docker e melhorias de interface.',
      'Participo de um <strong>projeto de pesquisa patrocinado pelo CNPq</strong>, aplicando algoritmos de busca e modelagem de dados em um contexto de análise de amostras de solo. Minha trajetória combina desenvolvimento web, dados, pesquisa aplicada e vontade de aprender em ambientes reais de engenharia.',
    ],
    cards: [
      { title: 'Aprendizado Contínuo', description: 'Evolução técnica com projetos reais, pesquisa aplicada e estudo constante de boas práticas.' },
      { title: 'Impacto Social', description: 'Uso de tecnologia para apoiar instituições, educação, sustentabilidade e problemas reais.' },
      { title: 'Trabalho em Equipe', description: 'Experiência com liderança técnica, comunicação, code review e organização de entregas acadêmicas.' },
    ],
  },

  projects: {
    heading: 'Projetos em Destaque',
    subtitle: 'Entregas reais, projetos acadêmicos e pesquisa aplicada com código, contexto e resultado demonstrável.',
    labels: {
      inDev: 'Em Desenvolvimento',
      hideDetails: 'Ocultar Detalhes',
      showDetails: 'Ver Detalhes',
      problem: 'Problema:',
      solution: 'Solução:',
      viewDemo: 'Ver Demo',
      code: 'Código',
    },
  },

  projectData: {
    'reserva-laboratorios-fatec': {
      subtitle: 'Modernização de sistema legado em PHP',
      description: 'Adaptei e modernizei um sistema legado de reserva de laboratórios para o contexto da FATEC Itaquera, melhorando usabilidade, responsividade, identidade visual institucional e documentação de execução sem reescrever a aplicação do zero.',
      problem: 'O sistema original funcionava, mas a interface era pouco intuitiva, presa ao desktop e difícil para consultas frequentes de professores, estudantes e administradores. A visualização de disponibilidade, salas, horários e configurações exigia mais esforço do que a rotina da instituição permitia.',
      solution: 'A solução foi uma modernização incremental sobre ClassroomBookings em PHP/CodeIgniter, preservando regras de negócio e reorganizando telas de login, grade de reservas, cards de laboratórios, detalhes de períodos e configurações administrativas. O projeto também recebeu ajustes de idioma, Docker e documentação pública para execução segura.',
    },
    'define-pilates': {
      subtitle: 'Gestão estratégica multi-tenant e compliance',
      description: 'Liderei a arquitetura de um ecossistema B2B para estúdios de saúde, com foco em reduzir falhas operacionais, organizar agenda, gestão financeira e controle de alunos em uma experiência integrada.',
      problem: 'A fragmentação administrativa e a dependência de controles manuais geravam gargalos comerciais, risco de overbooking e dificuldade para acompanhar a operação do estúdio.',
      solution: 'Como Tech Lead, conduzi uma solução API-first com Django e React, aplicando isolamento por permissões, organização de fluxos administrativos e práticas de TDD/CI para sustentar uma entrega acadêmica completa.',
    },
    'ibdn-plataforma': {
      subtitle: 'Gestão de governança ESG',
      description: 'Projeto full stack para apoiar a digitalização de processos ambientais, reduzindo dependência de fluxos manuais e melhorando a organização de certificações e informações institucionais.',
      problem: 'Processos manuais e em papel atrasavam a emissão de selos ecológicos e limitavam a transparência das certificações ambientais do Instituto.',
      solution: 'A solução estruturou uma plataforma web com autenticação, controle de acesso e organização dos fluxos principais, aproximando a operação de um modelo mais rastreável e escalável.',
    },
    'cnpq-research': {
      subtitle: 'IA e processamento óptico',
      description: 'Participei de uma pesquisa aplicada à caracterização de amostras de solo com metodologia Speckle e busca inteligente, apresentada em simpósios científicos e voltada ao uso de algoritmos para apoiar análise de dados experimentais.',
      problem: 'Métodos laboratoriais tradicionais podem tornar a análise de solo lenta e custosa. O desafio da pesquisa foi explorar uma abordagem computacional para organizar assinaturas ópticas e apoiar a distinção qualitativa de perfis de solo.',
      solution: 'Minha contribuição envolveu modelagem de banco de dados relacional para os dados científicos e implementação de algoritmo Greedy Best-First Search para classificação, conectando fundamentos de dados, busca heurística e pesquisa aplicada.',
    },
  },

  skills: {
    heading: 'Tech Stack & Competências',
    subtitle: 'Competências aplicadas em projetos acadêmicos, sistemas reais, pesquisa CNPq e modernização de legado.',
    items: [
      { title: 'Backend & APIs', description: 'Python, Django, FastAPI, PHP, CodeIgniter 3, Node.js, TypeScript, Java, APIs REST, autenticação e autorização.' },
      { title: 'Frontend & UI', description: 'React.js, Tailwind CSS, JavaScript, TypeScript, responsividade, usabilidade, Framer Motion e Three.js.' },
      { title: 'Banco de Dados & Dados', description: 'MySQL, PostgreSQL, modelagem relacional, organização de dados científicos, consultas e estruturas para pesquisa aplicada.' },
      { title: 'DevOps & Entrega', description: 'Docker, Git, GitHub, GitHub Actions, CI/CD, documentação técnica e execução local de projetos.' },
      { title: 'Qualidade & Boas Práticas', description: 'TDD, code review, organização de arquitetura, manutenção de legado, documentação e melhoria incremental.' },
      { title: 'Competências Profissionais', description: 'Tech Lead acadêmico, comunicação com equipe, organização de entregas, aprendizado contínuo, pesquisa aplicada e foco em problemas reais.' },
    ],
  },

  certs: {
    heading: 'Certificações de Infraestrutura & Cyber Defense',
    subtitle: 'Base fundamentada pela <strong>Cisco Networking Academy</strong>, atestando domínio em arquitetura de redes, C/C++ e sistemas operacionais de baixo nível.',
    dates: {
      1: 'Cisco (Set/2025)',
      2: 'Cisco (Abr/2025)',
      3: 'Cisco (Out/2024)',
      4: 'Cisco (Set/2024)',
      5: 'Cisco (Abr/2025)',
    },
  },

  footer: {
    cta: 'Tem um problema complexo? Vamos construir a solução.',
    copyright: '© 2026 Wellington Siqueira Porto. Todos os direitos reservados.',
  },

  whatsapp: {
    tooltip: 'Fale comigo',
    ariaLabel: 'Contato via WhatsApp',
  },
}
