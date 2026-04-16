import type { Locale } from '../types'

export const ptBR: Locale = {
  meta: {
    lang: 'pt-br',
    title: 'Wellington Siqueira Porto | Desenvolvedor Full Stack & Arquiteto de Soluções',
    description: 'Portfólio de Wellington Siqueira Porto. Engenheiro Full Stack AI-Native, Tech Lead e Pesquisador em IA. Especialista em Python, Node.js, Cloud FinOps, SaaS e Arquitetura Zero-Trust.',
    keywords: 'Wellington Siqueira Porto, Full Stack Developer, Arquiteto de Soluções, Python, Node.js, Cloud FinOps, IA Aplicada, RAG, TDD, Cisco, Cibersegurança',
    ogTitle: 'Wellington Siqueira Porto | Dev Full Stack & Arquiteto de Soluções',
    ogDescription: 'Transformando requisitos complexos em arquiteturas escaláveis. Especialista em Python, Node.js, Cloud FinOps e IA aplicada a negócios.',
    jobTitle: 'Engenheiro de Software Full Stack & Arquiteto de Soluções',
    knowsAbout: ['Python', 'Node.js', 'React.js', 'Inteligência Artificial Aplicada', 'Cloud FinOps', 'C/C++', 'Cibersegurança', 'TDD', 'PostgreSQL', 'Linux', 'RAG Local'],
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
      'Arquiteto de Soluções AI-Native',
      'Desenvolvedor Full Stack',
      'Estudante de Desenvolvimento Multiplataforma da FATEC',
      'Pesquisador em Dados e Algoritmos',
    ],
    tagline: 'Engenheiro Full Stack que arquiteta para escalar — e para não quebrar o caixa.<br />IA Aplicada · Cloud FinOps · Zero-Trust',
    cta: 'Explore as Decisões de Arquitetura',
  },

  about: {
    heading: 'Sobre Mim',
    paragraphs: [
      'Sou um <strong>Engenheiro de Software Full Stack e Arquiteto AI-Native</strong> especializado na construção de sistemas distribuídos resilientes e financeiramente otimizados. Projeto arquiteturas orientadas a negócio — de monólitos modulares com isolamento <strong>Zero-Trust via RLS</strong> até motores de <strong>Edge AI com RAG local</strong> — tomando decisões guiadas por <strong>Cloud FinOps</strong> e Unit Economics. Cada escolha de stack tem uma justificativa de custo-benefício: do armazenamento com <strong>Zero Egress Fee</strong> à desduplicação de memória em nível de SO, o objetivo é sempre escalar sem que a infraestrutura devore a margem.',
      'Cursando <strong>Desenvolvimento de Software Multiplataforma na FATEC Itaquera</strong>, atuei como <strong>Tech Lead no projeto interdisciplinar Define Pilates</strong>, liderando um squad multidisciplinar com foco em <strong>TDD e CI/CD</strong>. Minha base técnica é validada por certificações oficiais da <strong>Cisco Networking Academy</strong> em C/C++, Defesa de Rede e arquiteturas <strong>Zero-Trust</strong>, sustentando a entrega de backends resilientes em <strong>Node.js e Python</strong> e interfaces de alta performance em <strong>React.js</strong> e <strong>Flutter</strong>.',
      'Atuo como pesquisador em um <strong>projeto de pesquisa patrocinado pelo CNPq</strong>, aplicando algoritmos de busca determinísticos (<strong>Greedy Best-First Search</strong>) ao processamento eficiente de grandes volumes de dados — construindo a base matemática que torna sistemas de IA previsíveis e auditáveis antes de qualquer chamada a um LLM externo. Meu vetor aponta para a intersecção entre infraestrutura resiliente, inteligência artificial aplicada e produtos que resolvem problemas reais em mercados complexos — <strong>FinTech, HealthTech e AgriTech</strong>. Se o seu desafio é escalar uma arquitetura crítica sem explodir o OPEX ou construir um produto de IA confiável o suficiente para operar na vida real das pessoas, essa é exatamente a conversa que quero ter.',
    ],
    cards: [
      { title: 'Debugging Humano', description: 'Análise de causa raiz para resolver conflitos sob alta pressão e garantir SLAs eficientes, com foco no CX.' },
      { title: 'Impacto Social', description: 'Uso de tecnologia e IA para democratizar o acesso e solucionar problemas reais da sociedade e mercado.' },
      { title: 'IA Determinística', description: 'Isolamento de modelos semânticos do motor de regras matemáticas de negócio para zerar alucinações.' },
    ],
  },

  projects: {
    heading: 'Dossiê de Arquitetura',
    subtitle: 'Projetos que demonstram impacto humano, inteligência arquitetural e viabilidade tecnológica.',
    labels: {
      inDev: 'Em Desenvolvimento',
      hideDetails: 'Ocultar Detalhes',
      showDetails: 'Ver Decisão Arquitetural',
      problem: 'Ação/Problema:',
      solution: 'Solução:',
      viewDemo: 'Ver Demo',
      code: 'Código',
    },
  },

  projectData: {
    'wsp-finance': {
      subtitle: 'Ecossistema SaaS B2B2C de Alta Rentabilidade',
      description: 'Projetado para um mercado onde <span class="tabular-nums font-semibold text-accent-end">52%</span> do tempo útil das operações é desperdiçado com retrabalho e lixo digital, o WSP Finance nasce com uma premissa agressiva de Cloud FinOps. Erradiquei a exposição jurídica e resgatei o tempo produtivo, sustentando uma margem bruta projetada de <span class="tabular-nums font-semibold text-accent-end">88%</span> em escala — amparado por isolamento Zero-Trust via RLS, AuditLog imutável e motores de IA assíncronos em estrita conformidade com a LGPD.',
      problem: '<span class="tabular-nums font-semibold text-accent-end">52%</span> da capacidade produtiva das equipes financeiras era consumida por fricção de importação em ERPs legados e "sopa de dados", somada ao risco jurídico crítico de Responsabilidade Solidária pela mistura patrimonial. A postura assumida foi atuar na interceptação preditiva do erro — transformando o sistema passivo de registros em um motor ativo de saneamento de dados e compliance.',
      solution: 'Foi implementada uma arquitetura Modular Monolith assíncrona blindada com Row-Level Security (RLS) nativo (PostgreSQL), garantindo isolamento Zero-Trust entre inquilinos e contextos CPF/CNPJ. No tratamento de dados (tipagem Decimal(19,4)), um Linter Fiscal de IA Híbrida via Transactional Outbox processa em background com PII Masking. Chaves trancadas com criptografia de envelope (AWS KMS) e <span class="tabular-nums font-semibold text-accent-end">100%</span> dos binários pesados migrados para Cloudflare R2 (Zero Egress Fee).',
    },
    'samurai-pro': {
      subtitle: 'Engenharia de Automação e RBI de Alta Densidade',
      description: 'Uma arquitetura cloud-native elimina o principal gargalo do modelo de rateio de ferramentas SaaS premium: o custo de infraestrutura que inviabiliza a escala. Projetei uma automação SaaS capaz de escalar conexões simultâneas sem crescimento linear de custos, reduzindo o footprint de memória em <span class="tabular-nums font-semibold text-accent-end">93%</span> — de 900MB para menos de 60MB por sessão — substituindo instâncias Chromium por TLS Impersonation (curl_cffi) e Remote Browser Isolation com KSM.',
      problem: 'O modelo de rateio de ferramentas SaaS premium era a única saída viável para empreendedores, mas tecnicamente um campo minado: vazamentos de memória, WAFs bloqueando tudo e hardware local paralisado destruíam a operação e a confiança do usuário final. A postura assumida foi tratar o problema como um desafio de engenharia enterprise, não como um mero script de automação.',
      solution: 'Foi arquitetada a Samurai Pro API — um backend FastAPI com autenticação Zero-Trust, criptografia Fernet (AES-128-CBC) e automação headless-less via TLS Impersonation (curl_cffi) em KSM + Oracle Cloud Free Egress — eliminando o footprint de RAM em até <span class="tabular-nums font-semibold text-accent-end">93%</span> por sessão e permitindo escala de conexões M2M sem crescimento proporcional de custos.',
    },
    'define-pilates': {
      subtitle: 'Gestão Estratégica Multi-tenant e Compliance',
      description: 'Liderei a arquitetura de um ecossistema B2B focado em estancar a perda de receita por falhas operacionais, entregando uma solução completa para estúdios de saúde em conformidade estrita com LGPD e as normas do CREFITO. O projeto resolve a fragmentação administrativa através de automação por eventos, permitindo que a gestão financeira e o controle de overbooking ocorram de forma invisível.',
      problem: 'A fragmentação operacional corrói a margem de lucro. A dependência do WhatsApp gerava gargalos comerciais e abria margem para o overbooking, limitando a escala empresarial dos estúdios.',
      solution: 'Arquitetura API-First no Django. O núcleo garante estrito isolamento Zero-Trust entre estúdios por meio do identificador workspaceId associado a Object-Level Permissions granulares via django-guardian. Motor financeiro assíncrono para pagamentos acionado por Django Signals.',
    },
    'viva-healthtech': {
      subtitle: 'Edge AI e HealthTech para Longevidade Ativa',
      description: 'Uma arquitetura Edge-First elimina o principal obstáculo de escala das startups de IA para a Economia Prateada: o custo de inferência em nuvem. Entreguei um companheiro digital capaz de operar com menos de 1GB de RAM e 0,05% de CPU. O sistema provê respostas de voz abaixo de 300ms, rodando <span class="tabular-nums font-semibold text-accent-end">100%</span> offline no celular do idoso (Privacy by Design), sem que nenhum byte trafegue para servidores externos.',
      problem: 'O "Teto de Inferência" inviabilizava economicamente a escala de IAs sênior, enquanto o idadismo no design afastava usuários e a Fadiga de Alarmes destruía a adesão das famílias. A postura estabelecida foi tratar privacidade absoluta, eficiência computacional em nuvem e a inteligência do reporte preditivo (evitando falsos positivos) como restrições arquiteturais base, não como features opcionais.',
      solution: 'Arquitetado ecossistema híbrido Edge-to-Cloud (Flutter + NestJS / Clean Architecture). O processamento de voz (Picovoice + Qwen 0.8B) e o RAG semântico (sqlite-vec) rodam localmente. O backend assegura resiliência assíncrona (Transactional Outbox + BullMQ) e reduz alarmes irrelevantes em até <span class="tabular-nums font-semibold text-accent-end">74%</span> via Reporte por Exceção (SSE). Crescimento viral custeado a zero com Cloudflare R2 e WhatsApp Intents.',
    },
    'cnpq-research': {
      subtitle: 'IA e Processamento Óptico',
      description: 'Na agricultura de precisão, latência de dados significa perda de safra. Substituímos processos físico-químicos laboratoriais que levam dias por uma arquitetura computacional capaz de classificar a textura do solo em tempo quase real — alcançando <span class="tabular-nums font-semibold text-accent-end">29%</span> de taxa de sucesso e coerência qualitativa na distinção dos perfis de solo, resolvendo o gargalo que paralisava decisões de manejo na ponta do campo. O trabalho foi apresentado em três simpósios científicos: 27º SICT-FATEC-SP (outubro de 2025), VII SICT-CPS/CNPq e CONIC-SEMESP 2025, com o título \'Caracterização de Amostras de Solo com Metodologia Speckle e Busca Inteligente\'. Minha contribuição específica foi a modelagem e implementação do banco de dados relacional para estruturar os volumes de dados científicos, além da implementação do algoritmo Greedy Best-First Search para classificação de textura do solo.',
      problem: 'O alto custo e a lentidão dos métodos laboratoriais atrasavam o time-to-decision em irrigação e fertilização. Sem dados exatos, os agrônomos tomavam decisões no escuro, resultando em desperdício hídrico fatal e sobrecarga de insumos. Rompi com a validação química, substituindo-a por validação óptica computacional que escala sem dependência da nuvem.',
      solution: 'Implementei uma arquitetura de alta eficiência focada em RAG Local que converte leituras laser (Interferometria Speckle + THSP) em assinaturas digitais. Estas são processadas por IA heurística via Greedy Best-First Search com Busca Binária em MATLAB, operando sobre banco de dados relacional para calcular a menor distância matemática com ultra-baixa latência computacional.',
    },
    'ibdn-plataforma': {
      subtitle: 'Gestão de Governança ESG',
      description: 'A dependência de processos manuais e papéis gerava extrema lentidão na emissão e no monitoramento de certificações ecológicas e plantios, limitando a transparência e impedindo o ganho de escala do instituto.',
      problem: 'Processos manuais e em papel atrasavam a emissão de selos ecológicos e limitavam a transparência das certificações ambientais do Instituto.',
      solution: 'Arquitetou uma plataforma corporativa digital (API-First). Estruturou a gestão de identidade corporativa com Role-Based Access Control (RBAC). Digitalizou <span class="tabular-nums font-semibold text-accent-end">100%</span> do workflow de emissão de selos do Instituto.',
    },
  },

  skills: {
    heading: 'Tech Stack & Competências',
    subtitle: 'Stack validada por certificações Cisco e projetos reais em produção.',
    items: [
      { title: 'Backend & APIs', description: 'Python 3 (FastAPI, Django), Node.js (NestJS, Express), TypeScript, Java, microsserviços e monólitos modulares.' },
      { title: 'IA & Dados', description: 'RAG (Local e Nuvem), Google Vertex AI, GPT-4o Vision, Bancos Vetoriais (sqlite-vec), PostgreSQL (JSONB/RLS), Greedy Best-First Search.' },
      { title: 'Cloud & FinOps', description: 'Cloudflare R2 (Zero Egress Fee), Docker, Redis, BullMQ, Transactional Outbox, KSM Linux e CI/CD.' },
      { title: 'Automação & RPA', description: 'Python RPA com Playwright e Headless-less Automation. Auto-healing de robôs via inferência visual GPT-4o Vision (substituição de seletores DOM). Plataformas SaaS de Remote Browser Isolation (RBI) de alta performance.' },
      { title: 'Segurança & Evasão', description: 'Bypass de Web Application Firewalls (Cloudflare/Akamai) via reconstrução de assinaturas TLS com curl_cffi (CFFI). Arquiteturas Zero-Trust, RBAC, JWT e conformidade com LGPD.' },
      { title: 'Frontend & Soft Skills', description: 'React.js, Next.js, Tailwind CSS, Three.js, Framer Motion. Mentoria Técnica, Code Review Educativo, Debugging Humano e TDD.' },
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
    cta: 'Tem um problema complexo? Vamos arquitetar a solução.',
    copyright: '© 2026 Wellington Siqueira Porto. Todos os direitos reservados.',
  },

  whatsapp: {
    tooltip: 'Fale comigo',
    ariaLabel: 'Contato via WhatsApp',
  },
}
