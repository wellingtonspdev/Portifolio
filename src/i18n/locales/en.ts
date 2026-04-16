import type { Locale } from '../types'

export const en: Locale = {
  meta: {
    lang: 'en',
    title: 'Wellington Siqueira Porto | Full Stack Developer & Solutions Architect',
    description: 'Portfolio of Wellington Siqueira Porto. AI-Native Full Stack Engineer, Tech Lead, and AI Researcher. Specialist in Python, Node.js, Cloud FinOps, SaaS, and Zero-Trust Architecture.',
    keywords: 'Wellington Siqueira Porto, Full Stack Developer, Solutions Architect, Python, Node.js, Cloud FinOps, Applied AI, RAG, TDD, Cisco, Cybersecurity',
    ogTitle: 'Wellington Siqueira Porto | Full Stack Dev & Solutions Architect',
    ogDescription: 'Turning complex requirements into scalable architectures. Specialist in Python, Node.js, Cloud FinOps, and AI applied to business.',
    jobTitle: 'Full Stack Software Engineer & Solutions Architect',
    knowsAbout: ['Python', 'Node.js', 'React.js', 'Applied Artificial Intelligence', 'Cloud FinOps', 'C/C++', 'Cybersecurity', 'TDD', 'PostgreSQL', 'Linux', 'Local RAG'],
    credentialName: 'Associate Degree in Multiplatform Software Development',
  },

  nav: {
    about: 'About',
    cases: 'Cases',
    skills: 'Skills',
    certs: 'Certifications',
  },

  hero: {
    badge: 'Available for Projects & Opportunities',
    phrases: [
      'AI-Native Solutions Architect',
      'Full Stack Developer',
      'Multiplatform Development Student at FATEC',
      'Data & Algorithms Researcher',
    ],
    tagline: 'Full Stack Engineer who architects to scale — and to protect the bottom line.<br />Applied AI · Cloud FinOps · Zero-Trust',
    cta: 'Explore the Architecture Decisions',
  },

  about: {
    heading: 'About Me',
    paragraphs: [
      'I am a <strong>Full Stack Software Engineer and AI-Native Architect</strong> specializing in building resilient and financially optimized distributed systems. I design business-driven architectures — from modular monoliths with <strong>Zero-Trust isolation via RLS</strong> to <strong>Edge AI engines with local RAG</strong> — making decisions guided by <strong>Cloud FinOps</strong> and Unit Economics. Every stack choice has a cost-benefit rationale: from storage with <strong>Zero Egress Fees</strong> to OS-level memory deduplication, the goal is always to scale without letting infrastructure devour the margin.',
      'Currently pursuing a degree in <strong>Multiplatform Software Development at FATEC Itaquera</strong>, I served as <strong>Tech Lead on the interdisciplinary Define Pilates project</strong>, leading a multidisciplinary squad focused on <strong>TDD and CI/CD</strong>. My technical foundation is validated by official <strong>Cisco Networking Academy</strong> certifications in C/C++, Network Defense, and <strong>Zero-Trust</strong> architectures, supporting the delivery of resilient backends in <strong>Node.js and Python</strong> and high-performance interfaces in <strong>React.js</strong> and <strong>Flutter</strong>.',
      'I work as a researcher on a <strong>CNPq-sponsored research project</strong>, applying deterministic search algorithms (<strong>Greedy Best-First Search</strong>) to efficient large-scale data processing — building the mathematical foundation that makes AI systems predictable and auditable before any external LLM call. My trajectory points toward the intersection of resilient infrastructure, applied artificial intelligence, and products that solve real problems in complex markets — <strong>FinTech, HealthTech, and AgriTech</strong>. If your challenge is scaling a mission-critical architecture without blowing up OPEX, or building an AI product reliable enough to operate in people\'s real lives, that\'s exactly the conversation I want to have.',
    ],
    cards: [
      { title: 'Human Debugging', description: 'Root cause analysis to resolve conflicts under high pressure and ensure efficient SLAs, with a focus on CX.' },
      { title: 'Social Impact', description: 'Using technology and AI to democratize access and solve real problems in society and the market.' },
      { title: 'Deterministic AI', description: 'Isolating semantic models from the mathematical business rules engine to eliminate hallucinations.' },
    ],
  },

  projects: {
    heading: 'Architecture Dossier',
    subtitle: 'Projects that demonstrate human impact, architectural intelligence, and technological viability.',
    labels: {
      inDev: 'In Development',
      hideDetails: 'Hide Details',
      showDetails: 'View Architecture Decision',
      problem: 'Problem/Action:',
      solution: 'Solution:',
      viewDemo: 'View Demo',
      code: 'Code',
    },
  },

  projectData: {
    'wsp-finance': {
      subtitle: 'High-Profitability B2B2C SaaS Ecosystem',
      description: 'Designed for a market where <span class="tabular-nums font-semibold text-accent-end">52%</span> of productive operations time is wasted on rework and digital clutter, WSP Finance was born with an aggressive Cloud FinOps premise. I eradicated legal exposure and reclaimed productive time, sustaining a projected gross margin of <span class="tabular-nums font-semibold text-accent-end">88%</span> at scale — backed by Zero-Trust isolation via RLS, immutable AuditLog, and asynchronous AI engines in strict LGPD compliance.',
      problem: '<span class="tabular-nums font-semibold text-accent-end">52%</span> of financial teams\' productive capacity was consumed by import friction from legacy ERPs and "data soup", compounded by the critical legal risk of Joint Liability from asset commingling. The approach was to act on predictive error interception — transforming the passive record system into an active data sanitation and compliance engine.',
      solution: 'An asynchronous Modular Monolith architecture was implemented, hardened with native Row-Level Security (RLS) on PostgreSQL, ensuring Zero-Trust isolation between tenants and CPF/CNPJ contexts. For data processing (Decimal(19,4) typing), a Hybrid AI Fiscal Linter via Transactional Outbox processes in-background with PII Masking. Keys locked with envelope encryption (AWS KMS) and <span class="tabular-nums font-semibold text-accent-end">100%</span> of heavy binaries migrated to Cloudflare R2 (Zero Egress Fee).',
    },
    'samurai-pro': {
      subtitle: 'High-Density Automation & RBI Engineering',
      description: 'A cloud-native architecture eliminates the main bottleneck of the premium SaaS tooling cost-sharing model: infrastructure costs that prevent scaling. I designed a SaaS automation capable of scaling concurrent connections without linear cost growth, reducing the memory footprint by <span class="tabular-nums font-semibold text-accent-end">93%</span> — from 900MB to under 60MB per session — replacing Chromium instances with TLS Impersonation (curl_cffi) and Remote Browser Isolation with KSM.',
      problem: 'The premium SaaS tooling cost-sharing model was the only viable path for entrepreneurs, but technically a minefield: memory leaks, WAFs blocking everything, and paralyzed local hardware destroyed operations and end-user trust. The approach was to treat the problem as an enterprise engineering challenge, not as a mere automation script.',
      solution: 'The Samurai Pro API was architected — a FastAPI backend with Zero-Trust authentication, Fernet encryption (AES-128-CBC), and headless-less automation via TLS Impersonation (curl_cffi) on KSM + Oracle Cloud Free Egress — eliminating the RAM footprint by up to <span class="tabular-nums font-semibold text-accent-end">93%</span> per session and enabling M2M connection scaling without proportional cost growth.',
    },
    'define-pilates': {
      subtitle: 'Multi-tenant Strategic Management & Compliance',
      description: 'I led the architecture of a B2B ecosystem focused on stopping revenue loss from operational failures, delivering a complete solution for health studios in strict compliance with LGPD and CREFITO regulations. The project resolves administrative fragmentation through event-driven automation, enabling financial management and overbooking control to operate seamlessly.',
      problem: 'Operational fragmentation eroded profit margins. WhatsApp dependency created commercial bottlenecks and opened room for overbooking, limiting the business scalability of studios.',
      solution: 'API-First architecture on Django. The core ensures strict Zero-Trust isolation between studios through the workspaceId identifier associated with granular Object-Level Permissions via django-guardian. Asynchronous financial engine for payments triggered by Django Signals.',
    },
    'viva-healthtech': {
      subtitle: 'Edge AI & HealthTech for Active Longevity',
      description: 'An Edge-First architecture eliminates the main scaling obstacle for AI startups targeting the Silver Economy: cloud inference costs. I delivered a digital companion capable of operating with less than 1GB of RAM and 0.05% CPU. The system provides voice responses under 300ms, running <span class="tabular-nums font-semibold text-accent-end">100%</span> offline on the elderly user\'s phone (Privacy by Design), without a single byte traveling to external servers.',
      problem: 'The "Inference Ceiling" made scaling senior AIs economically unviable, while ageism in design drove users away and Alarm Fatigue destroyed family engagement. The established approach was to treat absolute privacy, cloud computational efficiency, and predictive reporting intelligence (avoiding false positives) as base architectural constraints, not as optional features.',
      solution: 'Architected a hybrid Edge-to-Cloud ecosystem (Flutter + NestJS / Clean Architecture). Voice processing (Picovoice + Qwen 0.8B) and semantic RAG (sqlite-vec) run locally. The backend ensures asynchronous resilience (Transactional Outbox + BullMQ) and reduces irrelevant alarms by up to <span class="tabular-nums font-semibold text-accent-end">74%</span> via Exception-Based Reporting (SSE). Zero-cost viral growth with Cloudflare R2 and WhatsApp Intents.',
    },
    'cnpq-research': {
      subtitle: 'AI & Optical Processing',
      description: 'In precision agriculture, data latency means crop loss. We replaced physico-chemical laboratory processes that take days with a computational architecture capable of classifying soil texture in near real-time — achieving a <span class="tabular-nums font-semibold text-accent-end">29%</span> success rate and qualitative coherence in distinguishing soil profiles, resolving the bottleneck that paralyzed field management decisions. The work was presented at three scientific symposiums: 27th SICT-FATEC-SP (October 2025), VII SICT-CPS/CNPq, and CONIC-SEMESP 2025, titled \'Soil Sample Characterization Using Speckle Methodology and Intelligent Search\'. My specific contribution was the modeling and implementation of the relational database to structure scientific data volumes, as well as the implementation of the Greedy Best-First Search algorithm for soil texture classification.',
      problem: 'The high cost and slowness of laboratory methods delayed the time-to-decision in irrigation and fertilization. Without precise data, agronomists made decisions in the dark, resulting in fatal water waste and input overload. I broke with chemical validation, replacing it with computational optical validation that scales without cloud dependency.',
      solution: 'I implemented a high-efficiency architecture focused on Local RAG that converts laser readings (Speckle Interferometry + THSP) into digital signatures. These are processed by heuristic AI via Greedy Best-First Search with Binary Search in MATLAB, operating over a relational database to calculate the shortest mathematical distance with ultra-low computational latency.',
    },
    'ibdn-plataforma': {
      subtitle: 'ESG Governance Management',
      description: 'The dependency on manual processes and paperwork caused extreme slowness in issuing and monitoring ecological certifications and plantings, limiting transparency and preventing the institute from scaling.',
      problem: 'Manual and paper-based processes delayed the issuance of ecological seals and limited the transparency of the Institute\'s environmental certifications.',
      solution: 'Architected a digital corporate platform (API-First). Structured corporate identity management with Role-Based Access Control (RBAC). Digitized <span class="tabular-nums font-semibold text-accent-end">100%</span> of the Institute\'s seal issuance workflow.',
    },
  },

  skills: {
    heading: 'Tech Stack & Skills',
    subtitle: 'Stack validated by Cisco certifications and real production projects.',
    items: [
      { title: 'Backend & APIs', description: 'Python 3 (FastAPI, Django), Node.js (NestJS, Express), TypeScript, Java, microservices and modular monoliths.' },
      { title: 'AI & Data', description: 'RAG (Local & Cloud), Google Vertex AI, GPT-4o Vision, Vector Databases (sqlite-vec), PostgreSQL (JSONB/RLS), Greedy Best-First Search.' },
      { title: 'Cloud & FinOps', description: 'Cloudflare R2 (Zero Egress Fee), Docker, Redis, BullMQ, Transactional Outbox, Linux KSM, and CI/CD.' },
      { title: 'Automation & RPA', description: 'Python RPA with Playwright and Headless-less Automation. Robot auto-healing via GPT-4o Vision inference (DOM selector replacement). High-performance Remote Browser Isolation (RBI) SaaS platforms.' },
      { title: 'Security & Evasion', description: 'Web Application Firewall (Cloudflare/Akamai) bypass via TLS signature reconstruction with curl_cffi (CFFI). Zero-Trust architectures, RBAC, JWT, and LGPD compliance.' },
      { title: 'Frontend & Soft Skills', description: 'React.js, Next.js, Tailwind CSS, Three.js, Framer Motion. Technical Mentoring, Educational Code Review, Human Debugging, and TDD.' },
    ],
  },

  certs: {
    heading: 'Infrastructure & Cyber Defense Certifications',
    subtitle: 'Foundation built on the <strong>Cisco Networking Academy</strong>, demonstrating mastery in network architecture, C/C++, and low-level operating systems.',
    dates: {
      1: 'Cisco (Sep/2025)',
      2: 'Cisco (Apr/2025)',
      3: 'Cisco (Oct/2024)',
      4: 'Cisco (Sep/2024)',
      5: 'Cisco (Apr/2025)',
    },
  },

  footer: {
    cta: 'Got a complex problem? Let\'s architect the solution.',
    copyright: '© 2026 Wellington Siqueira Porto. All rights reserved.',
  },

  whatsapp: {
    tooltip: 'Talk to me',
    ariaLabel: 'Contact via WhatsApp',
  },
}
