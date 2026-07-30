import type { Locale } from '../types'

export const ptBR: Locale = {
  meta: {
    lang: 'pt-br',
    title: 'Wellington Siqueira Porto | Desenvolvedor de Software Júnior',
    description: 'Portfólio de Wellington Siqueira Porto, Desenvolvedor de Software Júnior com experiência em Full Stack, Backend, aplicações web, estágio Fatec e pesquisa aplicada.',
    keywords: 'desenvolvedor júnior, estágio desenvolvimento de software, desenvolvedor full stack, desenvolvedor backend, PHP, CodeIgniter, Node.js, React, TypeScript, Python, Express, Prisma, PostgreSQL, MySQL, Docker, APIs REST, sistemas legados, UX/UI, Fatec Itaquera',
    ogTitle: 'Wellington Siqueira Porto | Desenvolvedor de Software Júnior',
    ogDescription: 'Full Stack, Backend e aplicações web com projetos reais, experiência Fatec e pesquisa aplicada.',
    jobTitle: 'Desenvolvedor de Software Júnior',
    knowsAbout: ['Python', 'Node.js', 'Express.js', 'React.js', 'TypeScript', 'PHP', 'CodeIgniter 3', 'Docker', 'PostgreSQL', 'MySQL', 'MariaDB', 'Prisma', 'TDD', 'APIs REST', 'UX/UI'],
    credentialName: 'Tecnólogo em Desenvolvimento de Software Multiplataforma',
  },

  nav: {
    about: 'Sobre',
    trajectory: 'Trajetória',
    experience: 'Experiência',
    cases: 'Cases',
    skills: 'Skills',
    keywords: 'Competências',
    certs: 'Certificações',
    resume: 'Baixar currículo',
  },

  hero: {
    badge: 'Disponível para Projetos e Oportunidades',
    role: 'Desenvolvedor de Software Júnior · Full Stack · Backend',
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
      'Atuei como <strong>Tech Lead acadêmico no projeto interdisciplinar Define Pilates</strong>, organizando tarefas, integração frontend/backend, testes e entregas. Também participei da modernização de um sistema legado de reservas para a FATEC, trabalhando com PHP, CodeIgniter, Docker e melhorias de interface.',
      'Participo de um <strong>projeto de pesquisa patrocinado pelo CNPq</strong>, aplicando algoritmos de busca e modelagem de dados em um contexto de análise de amostras de solo. Minha trajetória combina desenvolvimento web, dados, pesquisa aplicada e vontade de aprender em ambientes reais de engenharia.',
    ],
    cards: [
      { title: 'Aprendizado Contínuo', description: 'Evolução técnica com projetos reais, pesquisa aplicada e estudo constante de boas práticas.' },
      { title: 'Impacto Social', description: 'Uso de tecnologia para apoiar instituições, educação, sustentabilidade e problemas reais.' },
      { title: 'Trabalho em Equipe', description: 'Experiência com liderança técnica, comunicação, code review e organização de entregas acadêmicas.' },
    ],
  },

  career: {
    heading: 'Formação e Pesquisa Aplicada',
    subtitle: 'Uma trajetória que conecta formação em software, pesquisa científica e entregas práticas para problemas reais.',
    education: {
      label: 'Formação acadêmica',
      title: 'Tecnologia em Desenvolvimento de Software Multiplataforma',
      institution: 'Fatec Itaquera Professor Miguel Reale',
      period: 'Agosto de 2024 — Junho de 2027',
      status: 'Cursando · 5º semestre',
      areas: ['Desenvolvimento web', 'APIs e backend', 'Bancos relacionais', 'Algoritmos', 'Testes', 'Arquitetura'],
    },
    research: {
      label: 'Iniciação científica · CNPq',
      title: 'Caracterização de amostras de solo com Speckle e busca inteligente',
      summary: 'Pesquisa aplicada que integra computação, física e dados experimentais para apoiar a classificação de textura de solo.',
      contributions: ['Modelagem de banco de dados relacional.', 'Organização de dados experimentais.', 'Implementação de Greedy Best-First Search.', 'Apresentação acadêmica dos resultados.'],
      eventsLabel: 'Eventos',
      events: ['27º SICT-FATEC-SP', 'VII SICT-CPS/CNPq', 'CONIC-SEMESP 2025'],
    },
    timeline: [
      { period: '2024 — 2027', title: 'DSM · Fatec Itaquera', description: 'Formação multidisciplinar em desenvolvimento de software.' },
      { period: '2025', title: 'Pesquisa CNPq', description: 'Dados científicos, modelagem relacional e busca heurística.' },
      { period: 'Abr — Jun 2026', title: 'Estágio voluntário FATEC · 60 horas', description: 'Modernização de sistema legado com usuários internos.' },
      { period: 'Em evolução', title: 'WSP Finance', description: 'Projeto autoral de gestão financeira e automação.' },
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
      backToPortfolio: 'Voltar ao portfólio',
      detailsLabel: 'Detalhes do projeto',
      viewCase: 'Ver case completo',
      role: 'Meu papel',
      process: 'Processo',
      outcome: 'Resultado e aprendizado',
      requestEvidence: 'Solicitar detalhes e evidências',
    },
  },

  projectData: {
    'portfolio-profissional': {
      subtitle: 'Projeto autoral de apresentação técnica e carreira',
      description: 'Aplicação pública criada para transformar projetos, experiência, formação e pesquisa em cases técnicos navegáveis, bilíngues e prontos para avaliação por recrutadores.',
      problem: 'Uma lista de tecnologias não demonstra, por si só, como decisões de produto, interface, acessibilidade, descoberta e entrega se conectam em uma aplicação real.',
      solution: 'Construí um portfólio em React e TypeScript com cases detalhados, interface responsiva, elementos 3D, internacionalização, SEO técnico, currículo para download e deploy automatizado no GitHub Pages.',
      caseStudy: {
        roleLabel: 'Meu papel',
        role: 'Idealizei, projetei e desenvolvi a aplicação, estruturando sua arquitetura de componentes, conteúdo profissional, identidade visual, experiência de navegação, descoberta e publicação.',
        processLabel: 'Processo aplicado',
        process: ['Modelei projetos e cases em dados reutilizáveis para manter o conteúdo consistente.', 'Criei componentes responsivos, animações e elementos 3D com carregamento adiado para equilibrar impacto visual e experiência.', 'Implementei suporte a português e inglês, metadados, JSON-LD, Open Graph, sitemap e páginas pré-renderizadas.', 'Automatizei a publicação no GitHub Pages por GitHub Actions e evoluí o produto por incrementos versionados.'],
        outcomeLabel: 'Resultado e aprendizado',
        outcome: 'O portfólio se tornou uma evidência pública do meu trabalho em frontend, apresentação de produto, documentação e entrega. A evolução reforçou a importância de alinhar visual, conteúdo, acessibilidade, SEO e manutenção contínua.',
      },
    },
    'reserva-laboratorios-fatec': {
      subtitle: 'Modernização de sistema legado em PHP',
      description: 'Adaptei e modernizei um sistema legado de reserva de laboratórios para o contexto da FATEC Itaquera, melhorando usabilidade, responsividade, identidade visual institucional e documentação de execução sem reescrever a aplicação do zero.',
      problem: 'O sistema original funcionava, mas a interface era pouco intuitiva, presa ao desktop e difícil para consultas frequentes de professores, estudantes e administradores. A visualização de disponibilidade, salas, horários e configurações exigia mais esforço do que a rotina da instituição permitia.',
      solution: 'A solução foi uma modernização incremental sobre ClassroomBookings em PHP/CodeIgniter, preservando regras de negócio e reorganizando telas de login, grade de reservas, cards de laboratórios, detalhes de períodos e configurações administrativas. O projeto também recebeu ajustes de idioma, Docker e documentação pública para execução segura.',
      caseStudy: {
        roleLabel: 'Meu papel',
        role: 'Atuei na análise técnica do legado, planejamento e implementação das melhorias, responsividade, documentação, organização de issues, testes e validação funcional.',
        processLabel: 'Processo aplicado',
        process: ['Mapeamento de telas, arquivos e fluxos de reserva.', 'Registro de problemas e requisitos em issues e Kanban.', 'Evolução incremental com branches, revisão e feedback semanal.', 'Testes funcionais e validação da entrega.'],
        outcomeLabel: 'Resultado e aprendizado',
        outcome: 'A entrega modernizou telas usadas por professores, alunos, auxiliares docentes e administradores, sem reescrever as regras existentes. O projeto consolidou meu aprendizado rápido de PHP, CodeIgniter 3 e manutenção de legado.',
      },
    },
    'define-pilates': {
      subtitle: 'Projeto acadêmico de gestão para estúdios de Pilates',
      description: 'Projeto interdisciplinar acadêmico para organizar agenda, alunos, informações financeiras, relatórios e fluxos administrativos de estúdios de Pilates.',
      problem: 'A fragmentação administrativa e a dependência de controles manuais geravam gargalos comerciais, risco de overbooking e dificuldade para acompanhar a operação do estúdio.',
      solution: 'Como Tech Lead acadêmico, organizei tarefas e prioridades, participei das decisões técnicas, integração frontend/backend, documentação de APIs, testes e revisão das entregas com Django e React.',
      caseStudy: {
        roleLabel: 'Meu papel',
        role: 'Tech Lead acadêmico responsável por organização técnica do squad, priorização, Kanban, acompanhamento de entregas e apoio à demonstração.',
        processLabel: 'Processo aplicado',
        process: ['Divisão e priorização de tarefas.', 'Integração entre frontend e backend.', 'Documentação de APIs, testes e revisão das entregas.', 'Planejamento por fases para lidar com requisitos em evolução.'],
        outcomeLabel: 'Resultado e aprendizado',
        outcome: 'Projeto entregue e apresentado, reunindo módulos interdependentes em prazo curto. A experiência fortaleceu minha atuação colaborativa em produto e integração técnica.',
      },
    },
    'wsp-finance': {
      subtitle: 'Projeto autoral de gestão financeira · em evolução',
      description: 'Projeto autoral em desenvolvimento para apoiar organização financeira, automação de rotinas e comunicação com a contabilidade de pequenos negócios.',
      problem: 'Rotinas financeiras e operacionais dependem de informações organizadas, regras consistentes e controle de acesso para que a tomada de decisão seja segura e rastreável.',
      solution: 'Desenvolvo backend e frontend com Node.js, TypeScript, Express, Prisma, PostgreSQL e React, aplicando APIs REST, testes e integração com Telegram de forma incremental.',
      caseStudy: {
        roleLabel: 'Meu papel',
        role: 'Idealização, definição de funcionalidades, modelagem, desenvolvimento backend e frontend, integração com Telegram, testes e depuração.',
        processLabel: 'Caso técnico',
        process: ['Uma transação era persistida corretamente, mas o dashboard não atualizava durante a sessão.', 'A investigação comparou logs, Swagger, banco de dados, resposta da API e estado do frontend.', 'A correção incluiu atualização após transações, ao retornar ao dashboard e por ação manual.'],
        outcomeLabel: 'Resultado e aprendizado',
        outcome: 'O fluxo passou a considerar a sincronização entre integração, API e interface. O caso reforçou o uso de checklists de impacto antes de considerar uma alteração concluída.',
      },
    },
    'ibdn-plataforma': {
      subtitle: 'Projeto acadêmico de digitalização ambiental',
      description: 'Projeto acadêmico em equipe para apoiar a digitalização de processos ambientais, com autenticação, controle de acesso e organização de fluxos institucionais.',
      problem: 'Processos manuais e em papel atrasavam a emissão de selos ecológicos e limitavam a transparência das certificações ambientais do Instituto.',
      solution: 'A equipe estruturou uma plataforma web com autenticação, controle de acesso e organização dos fluxos principais. Minha contribuição individual documentada inclui o desenvolvimento de um carrossel com cerca de 30 parceiros e patrocinadores.',
    },
    'cnpq-research': {
      subtitle: 'IA e processamento óptico',
      description: 'Participei de uma pesquisa aplicada à caracterização de amostras de solo com metodologia Speckle e busca inteligente, apresentada em simpósios científicos e voltada ao uso de algoritmos para apoiar análise de dados experimentais.',
      problem: 'Métodos laboratoriais tradicionais podem tornar a análise de solo lenta e custosa. O desafio da pesquisa foi explorar uma abordagem computacional para organizar assinaturas ópticas e apoiar a distinção qualitativa de perfis de solo.',
      solution: 'Minha contribuição envolveu modelagem de banco de dados relacional para os dados científicos e implementação de algoritmo Greedy Best-First Search para classificação, conectando fundamentos de dados, busca heurística e pesquisa aplicada.',
      caseStudy: {
        roleLabel: 'Meu papel',
        role: 'Pesquisador bolsista em iniciação científica financiada pelo CNPq.',
        processLabel: 'Contribuições',
        process: ['Modelagem relacional e organização de dados experimentais.', 'Implementação de Greedy Best-First Search.', 'Classificação de textura de solo e comunicação acadêmica dos resultados.'],
        outcomeLabel: 'Escopo técnico',
        outcome: 'A experiência representa pesquisa aplicada, algoritmos de busca e dados científicos; não é apresentada como experiência profissional em Machine Learning avançado.',
      },
    },
  },

  skills: {
    heading: 'Tech Stack & Competências',
    subtitle: 'Competências aplicadas em projetos acadêmicos, sistemas reais, pesquisa CNPq e modernização de legado.',
    items: [
      { title: 'Backend & APIs', description: 'Python, Django, PHP, CodeIgniter 3, Node.js, Express, TypeScript, APIs REST, autenticação e autorização.' },
      { title: 'Frontend & UI', description: 'React.js, Tailwind CSS, JavaScript, TypeScript, HTMX, Alpine.js, responsividade, usabilidade, Framer Motion e Three.js.' },
      { title: 'Banco de Dados & Dados', description: 'MySQL, MariaDB, PostgreSQL, Prisma, modelagem relacional, organização de dados científicos, consultas e estruturas para pesquisa aplicada.' },
      { title: 'DevOps & Entrega', description: 'Docker, Git, GitHub, GitHub Actions, CI/CD, documentação técnica e execução local de projetos.' },
      { title: 'Qualidade & Boas Práticas', description: 'TDD, code review, organização de arquitetura, manutenção de legado, documentação e melhoria incremental.' },
      { title: 'Competências Profissionais', description: 'Tech Lead acadêmico, comunicação com equipe, organização de entregas, aprendizado contínuo, pesquisa aplicada e foco em problemas reais.' },
    ],
  },

  experience: {
    heading: 'Experiência em Desenvolvimento',
    subtitle: 'Experiência prática em evolução de software para uma instituição de ensino, com foco técnico, usuários reais e entrega validada.',
    type: 'Estágio voluntário · 60 horas',
    role: 'Estagiário de Desenvolvimento de Software',
    organization: 'Projeto Reserva de Laboratórios FATEC · Fatec Itaquera Professor Miguel Reale',
    period: 'Abril de 2026 — Junho de 2026',
    location: 'São Paulo, Brasil',
    summary: 'Atuei na análise e evolução de uma aplicação web legada de reserva de laboratórios baseada no CLASSROOMBOOKING. Minha contribuição teve foco na implementação técnica, responsividade, UX/UI, requisitos de usuários e validação funcional.',
    highlightsLabel: 'Principais contribuições',
    highlights: [
      'Evolução de aplicação PHP/CodeIgniter 3 com MySQL/MariaDB e arquitetura MVC.',
      'Melhorias em login, dashboard, agenda de reservas e telas administrativas para celulares e tablets.',
      'Reorganização da agenda com cards, filtros e melhor hierarquia das informações.',
      'Colaboração no levantamento e na incorporação de requisitos e feedback de usuários internos da Fatec.',
      'Colaboração em documentação técnica, Docker Compose e validação final da entrega.',
    ],
    technologiesLabel: 'Tecnologias aplicadas',
    technologies: ['PHP', 'CodeIgniter 3', 'MySQL', 'MariaDB', 'Tailwind CSS', 'JavaScript', 'HTMX', 'Alpine.js', 'Docker', 'Docker Compose', 'Git', 'GitHub'],
  },

  supplementaryExperience: {
    heading: 'Experiência complementar',
    role: 'Abastecedor de Linha de Produção',
    organization: 'Dini Têxtil',
    period: 'Junho de 2024 — Agosto de 2024',
    summary: 'Experiência profissional em ambiente com processos definidos, que fortaleceu disciplina operacional, atenção à qualidade e responsabilidade na execução.',
    skills: ['Trabalho em equipe', 'Atenção à qualidade', 'Cumprimento de metas', 'Resolução de problemas'],
  },

  keywords: {
    heading: 'Competências indexadas',
    summary: '{count} competências técnicas, de produto e colaboração apoiadas por experiências e projetos.',
    button: 'Ver competências',
    description: 'Termos organizados para facilitar a leitura por recrutadores e a descoberta do perfil por mecanismos de busca, sempre vinculados a projetos, formação ou experiência prática apresentados neste portfólio.',
  },

  certs: {
    heading: 'Certificações de Infraestrutura & Cyber Defense',
    subtitle: 'Formação complementar pela <strong>Cisco Networking Academy</strong> e pelo Centro Paula Souza, com estudos em programação, redes, segurança e Linux.',
    dates: {
      1: 'Cisco Networking Academy',
      2: 'Cisco Networking Academy',
      3: 'Cisco Networking Academy',
      4: 'Cisco Networking Academy',
      5: 'Cisco Networking Academy',
      6: 'Cisco Networking Academy',
      7: 'Cisco Networking Academy',
      8: 'Cisco Networking Academy',
      9: 'Cisco Networking Academy',
      10: 'Cisco Networking Academy',
      11: 'Cisco Networking Academy',
      12: 'Centro Paula Souza',
    },
    items: ['C Essentials 1', 'C Essentials 2', 'C Advanced', 'C++ Essentials 1', 'C++ Essentials 2', 'C++ Advanced', 'Segurança de Endpoint', 'Defesa de Redes', 'Network Technician Career Path', 'Linux Unhatched', 'Cyber Threat Management', 'Desenvolvedor Front-End'],
    languagesHeading: 'Idiomas:',
    languages: 'Inglês — nível profissional de trabalho · Espanhol — básico.',
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
