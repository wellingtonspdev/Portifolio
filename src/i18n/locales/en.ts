import type { Locale } from '../types'

export const en: Locale = {
  meta: {
    lang: 'en',
    title: 'Wellington Siqueira Porto | Full Stack Developer',
    description: 'Portfolio of Wellington Siqueira Porto. Full Stack Developer, FATEC student, and researcher in data and algorithms.',
    keywords: 'junior software developer, software development internship, full stack developer, backend developer, PHP, CodeIgniter, Node.js, React, TypeScript, Python, Express, Prisma, PostgreSQL, MySQL, Docker, REST APIs, legacy systems, UX/UI, FATEC Itaquera',
    ogTitle: 'Wellington Siqueira Porto | Full Stack Developer',
    ogDescription: 'Real projects, applied research, and academic deliveries in web development, data, and software.',
    jobTitle: 'Full Stack Developer',
    knowsAbout: ['Python', 'Node.js', 'Express.js', 'React.js', 'TypeScript', 'PHP', 'CodeIgniter 3', 'Docker', 'PostgreSQL', 'MySQL', 'MariaDB', 'Prisma', 'TDD', 'REST APIs', 'UX/UI'],
    credentialName: 'Associate Degree in Multiplatform Software Development',
  },

  nav: {
    about: 'About',
    experience: 'Experience',
    cases: 'Cases',
    skills: 'Skills',
    keywords: 'Skills index',
    certs: 'Certifications',
    resume: 'Download résumé',
  },

  hero: {
    badge: 'Available for Projects & Opportunities',
    phrases: [
      'Full Stack Developer',
      'Multiplatform Development Student at FATEC',
      'Data & Algorithms Researcher',
      'Tech Lead in Academic Project',
    ],
    tagline: 'Full Stack developer focused on web products, data, and systems that solve real problems.<br />React · Python · Node.js · Docker',
    cta: 'Explore the Projects',
  },

  about: {
    heading: 'About Me',
    paragraphs: [
      'I am a <strong>Full Stack developer</strong> studying at <strong>FATEC Itaquera</strong>, with hands-on experience in academic projects, web systems, APIs, databases, and modern interfaces. I am interested in building clear, well-documented solutions close to real problems.',
      'I served as <strong>Tech Lead on the interdisciplinary Define Pilates project</strong>, leading a multidisciplinary squad focused on technical organization, TDD, CI/CD, and functional delivery. I also participated in modernizing a legacy reservation system for FATEC, working with PHP, CodeIgniter, Docker, and interface improvements.',
      'I participate in a <strong>CNPq-sponsored research project</strong>, applying search algorithms and data modeling in a soil sample analysis context. My path combines web development, data, applied research, and the drive to learn in real engineering environments.',
    ],
    cards: [
      { title: 'Continuous Learning', description: 'Technical growth through real projects, applied research, and constant study of good practices.' },
      { title: 'Social Impact', description: 'Using technology to support institutions, education, sustainability, and real problems.' },
      { title: 'Teamwork', description: 'Experience with technical leadership, communication, code review, and academic delivery organization.' },
    ],
  },

  projects: {
    heading: 'Featured Projects',
    subtitle: 'Real deliveries, academic projects, and applied research with code, context, and demonstrable outcomes.',
    labels: {
      inDev: 'In Development',
      hideDetails: 'Hide Details',
      showDetails: 'View Details',
      problem: 'Problem:',
      solution: 'Solution:',
      viewDemo: 'View Demo',
      code: 'Code',
    },
  },

  projectData: {
    'reserva-laboratorios-fatec': {
      subtitle: 'Legacy PHP system modernization',
      description: 'I adapted and modernized a legacy laboratory reservation system for FATEC Itaquera, improving usability, responsiveness, institutional visual identity, and execution documentation without rewriting the application from scratch.',
      problem: 'The original system worked, but the interface was not intuitive, was strongly desktop-oriented, and made frequent consultation harder for teachers, students, and administrators. Availability, rooms, schedules, and settings required more effort than the institution routine allowed.',
      solution: 'The solution was an incremental modernization over ClassroomBookings in PHP/CodeIgniter, preserving business rules while reorganizing login, reservation grid, laboratory cards, period details, and administrative settings. The project also received language adjustments, Docker, and public documentation for safer execution.',
    },
    'define-pilates': {
      subtitle: 'Multi-tenant management and compliance',
      description: 'I led the architecture of a B2B ecosystem for health studios, focused on reducing operational failures and organizing schedule, financial management, and student control in an integrated experience.',
      problem: 'Administrative fragmentation and dependency on manual controls created commercial bottlenecks, overbooking risk, and difficulty tracking studio operations.',
      solution: 'As Tech Lead, I conducted an API-first solution with Django and React, applying permission isolation, administrative flow organization, and TDD/CI practices to sustain a complete academic delivery.',
    },
    'wsp-finance': {
      subtitle: 'AI-enabled financial management SaaS platform',
      description: 'Backend project supporting workflow automation, financial organization, and multi-user flows with business rules, auditing, and data isolation.',
      problem: 'Financial and operational routines need organized information, consistent rules, and access control so that decision-making remains secure and traceable.',
      solution: 'I developed backend components with Node.js, TypeScript, Express, Prisma, and PostgreSQL, applying REST APIs, automated tests, and security practices to support a financial SaaS platform.',
    },
    'ibdn-plataforma': {
      subtitle: 'ESG governance management',
      description: 'Full stack project to support environmental process digitization, reducing dependency on manual workflows and improving the organization of certifications and institutional information.',
      problem: 'Manual and paper-based processes delayed ecological seal issuance and limited transparency in the Institute environmental certifications.',
      solution: 'The solution structured a web platform with authentication, access control, and organization of core flows, bringing the operation closer to a more traceable and scalable model.',
    },
    'cnpq-research': {
      subtitle: 'AI and optical processing',
      description: 'I participated in applied research on soil sample characterization using Speckle methodology and intelligent search, presented in scientific symposiums and focused on using algorithms to support experimental data analysis.',
      problem: 'Traditional laboratory methods can make soil analysis slow and costly. The research challenge was to explore a computational approach to organize optical signatures and support qualitative distinction of soil profiles.',
      solution: 'My contribution involved relational database modeling for scientific data and implementation of a Greedy Best-First Search algorithm for classification, connecting data fundamentals, heuristic search, and applied research.',
    },
  },

  skills: {
    heading: 'Tech Stack & Skills',
    subtitle: 'Skills applied across academic projects, real systems, CNPq research, and legacy modernization.',
    items: [
      { title: 'Backend & APIs', description: 'Python, Django, FastAPI, PHP, CodeIgniter 3, Node.js, Express, TypeScript, Java, REST APIs, authentication, and authorization.' },
      { title: 'Frontend & UI', description: 'React.js, Tailwind CSS, JavaScript, TypeScript, HTMX, Alpine.js, Flutter, responsiveness, usability, Framer Motion, and Three.js.' },
      { title: 'Databases & Data', description: 'MySQL, MariaDB, PostgreSQL, Prisma, relational modeling, scientific data organization, queries, and structures for applied research.' },
      { title: 'DevOps & Delivery', description: 'Docker, Git, GitHub, GitHub Actions, CI/CD, technical documentation, and local project execution.' },
      { title: 'Quality & Good Practices', description: 'TDD, code review, architecture organization, legacy maintenance, documentation, and incremental improvement.' },
      { title: 'Professional Skills', description: 'Academic Tech Lead experience, team communication, delivery organization, continuous learning, applied research, and focus on real problems.' },
    ],
  },

  experience: {
    heading: 'Software Development Experience',
    subtitle: 'Hands-on experience evolving software for an educational institution, combining technical delivery, real users, and validated outcomes.',
    type: 'Volunteer internship · 60 hours',
    role: 'Software Development Intern',
    organization: 'FATEC Laboratory Booking Project · Fatec Itaquera Professor Miguel Reale',
    period: 'April 2026 — June 2026',
    location: 'São Paulo, Brazil',
    summary: 'I worked on the analysis and evolution of a legacy laboratory-booking web application based on CLASSROOMBOOKING. My contribution focused on technical implementation, responsiveness, UX/UI, user requirements, and functional validation.',
    highlightsLabel: 'Key contributions',
    highlights: [
      'Evolved a PHP/CodeIgniter 3 application using MySQL/MariaDB and MVC architecture.',
      'Improved login, dashboard, booking schedule, and administrative screens for phones and tablets.',
      'Helped reorganize the schedule with cards, filters, and a clearer information hierarchy.',
      'Gathered requirements with teaching assistants and internal FATEC users.',
      'Collaborated on technical documentation, Docker Compose, and final delivery validation.',
    ],
    technologiesLabel: 'Applied technologies',
    technologies: ['PHP', 'CodeIgniter 3', 'MySQL', 'MariaDB', 'Tailwind CSS', 'JavaScript', 'HTMX', 'Alpine.js', 'Docker', 'Docker Compose', 'Git', 'GitHub'],
  },

  keywords: {
    heading: 'Indexed skills',
    summary: '{count} technical, product, and collaboration skills backed by hands-on experience and projects.',
    button: 'View skills',
    description: 'Terms organized to help recruiters scan the profile and search engines discover relevant experience. Every term is tied to a project, education, or hands-on experience presented in this portfolio.',
  },

  certs: {
    heading: 'Infrastructure & Cyber Defense Certifications',
    subtitle: 'Supplementary education through the <strong>Cisco Networking Academy</strong> and Centro Paula Souza, covering programming, networking, security, and Linux.',
    dates: {
      1: 'Cisco Networking Academy',
      2: 'Cisco Networking Academy',
      3: 'Cisco Networking Academy',
      4: 'Cisco Networking Academy',
      5: 'Cisco Networking Academy',
      6: 'Cisco Networking Academy',
      7: 'Cisco Networking Academy',
      8: 'Centro Paula Souza',
    },
    items: ['C Essentials 2', 'C Advanced', 'C++ Essentials 1 and 2', 'Endpoint Security', 'Network Defense', 'Linux Unhatched', 'Cyber Threat Management', 'Front-End Developer'],
    languagesHeading: 'Languages:',
    languages: 'English — professional working proficiency · Spanish — basic.',
  },

  footer: {
    cta: 'Got a complex problem? Let us build the solution.',
    copyright: '© 2026 Wellington Siqueira Porto. All rights reserved.',
  },

  whatsapp: {
    tooltip: 'Talk to me',
    ariaLabel: 'Contact via WhatsApp',
  },
}
