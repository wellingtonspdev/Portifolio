import type { Locale } from '../types'

export const en: Locale = {
  meta: {
    lang: 'en',
    title: 'Wellington Siqueira Porto | Junior Software Developer',
    description: 'Portfolio of Wellington Siqueira Porto, a Junior Software Developer with hands-on experience in Full Stack, Backend, web applications, a FATEC internship, and applied research.',
    keywords: 'junior software developer, software development internship, full stack developer, backend developer, PHP, CodeIgniter, Node.js, React, TypeScript, Python, Express, Prisma, PostgreSQL, MySQL, Docker, REST APIs, legacy systems, UX/UI, FATEC Itaquera',
    ogTitle: 'Wellington Siqueira Porto | Junior Software Developer',
    ogDescription: 'Full Stack, Backend, and web applications backed by real projects, FATEC experience, and applied research.',
    jobTitle: 'Junior Software Developer',
    knowsAbout: ['Python', 'Node.js', 'Express.js', 'React.js', 'TypeScript', 'PHP', 'CodeIgniter 3', 'Docker', 'PostgreSQL', 'MySQL', 'MariaDB', 'Prisma', 'TDD', 'REST APIs', 'UX/UI'],
    credentialName: 'Associate Degree in Multiplatform Software Development',
  },

  nav: {
    about: 'About',
    trajectory: 'Journey',
    experience: 'Experience',
    cases: 'Cases',
    skills: 'Skills',
    keywords: 'Skills index',
    certs: 'Certifications',
    resume: 'Download résumé',
  },

  hero: {
    badge: 'Available for Projects & Opportunities',
    role: 'Junior Software Developer · Full Stack · Backend',
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
      'I served as <strong>Academic Tech Lead on the interdisciplinary Define Pilates project</strong>, organizing tasks, frontend/backend integration, testing, and delivery. I also participated in modernizing a legacy reservation system for FATEC, working with PHP, CodeIgniter, Docker, and interface improvements.',
      'I participate in a <strong>CNPq-sponsored research project</strong>, applying search algorithms and data modeling in a soil sample analysis context. My path combines web development, data, applied research, and the drive to learn in real engineering environments.',
    ],
    cards: [
      { title: 'Continuous Learning', description: 'Technical growth through real projects, applied research, and constant study of good practices.' },
      { title: 'Social Impact', description: 'Using technology to support institutions, education, sustainability, and real problems.' },
      { title: 'Teamwork', description: 'Experience with technical leadership, communication, code review, and academic delivery organization.' },
    ],
  },

  career: {
    heading: 'Education and Applied Research',
    subtitle: 'A journey connecting software education, scientific research, and practical delivery for real-world problems.',
    education: {
      label: 'Academic education',
      title: 'Associate Degree in Multiplatform Software Development',
      institution: 'Fatec Itaquera Professor Miguel Reale',
      period: 'August 2024 — June 2027',
      status: 'In progress · 5th semester',
      areas: ['Web development', 'APIs and backend', 'Relational databases', 'Algorithms', 'Testing', 'Architecture'],
    },
    research: {
      label: 'Scientific initiation · CNPq',
      title: 'Soil sample characterization with Speckle and intelligent search',
      summary: 'Applied research connecting computing, physics, and experimental data to support soil texture classification.',
      contributions: ['Relational database modeling.', 'Experimental data organization.', 'Greedy Best-First Search implementation.', 'Academic presentation of results.'],
      eventsLabel: 'Events',
      events: ['27th SICT-FATEC-SP', '7th SICT-CPS/CNPq', 'CONIC-SEMESP 2025'],
    },
    timeline: [
      { period: '2024 — 2027', title: 'DSM · Fatec Itaquera', description: 'Multidisciplinary education in software development.' },
      { period: '2025', title: 'CNPq research', description: 'Scientific data, relational modeling, and heuristic search.' },
      { period: 'Apr — Jun 2026', title: 'FATEC volunteer internship · 60 hours', description: 'Legacy system modernization with internal users.' },
      { period: 'In progress', title: 'WSP Finance', description: 'Authorial financial management and automation project.' },
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
      backToPortfolio: 'Back to portfolio',
      detailsLabel: 'Project details',
      viewCase: 'View full case',
      role: 'My role',
      process: 'Process',
      outcome: 'Outcome and learning',
      requestEvidence: 'Request details and evidence',
    },
  },

  projectData: {
    'portfolio-profissional': {
      subtitle: 'Authorial project for technical and career presentation',
      description: 'A public application created to turn projects, experience, education, and research into bilingual, navigable technical cases ready for recruiter evaluation.',
      problem: 'A technology list alone does not show how product, interface, accessibility, discovery, and delivery decisions connect in a real application.',
      solution: 'I built a React and TypeScript portfolio with detailed cases, a responsive interface, 3D elements, internationalization, technical SEO, downloadable résumé, and automated GitHub Pages deployment.',
      caseStudy: {
        roleLabel: 'My role',
        role: 'I conceived, designed, and developed the application, structuring its component architecture, professional content, visual identity, navigation experience, discoverability, and publication.',
        processLabel: 'Process applied',
        process: ['Modeled projects and cases as reusable data to keep content consistent.', 'Created responsive components, animations, and 3D elements with deferred loading to balance visual impact and experience.', 'Implemented Portuguese and English support, metadata, JSON-LD, Open Graph, sitemap, and pre-rendered pages.', 'Automated GitHub Pages publishing with GitHub Actions and evolved the product through versioned increments.'],
        outcomeLabel: 'Outcome and learning',
        outcome: 'The portfolio became public evidence of my work in frontend development, product presentation, documentation, and delivery. Its evolution reinforced the importance of aligning visuals, content, accessibility, SEO, and continuous maintenance.',
      },
    },
    'reserva-laboratorios-fatec': {
      subtitle: 'Legacy PHP system modernization',
      description: 'I adapted and modernized a legacy laboratory reservation system for FATEC Itaquera, improving usability, responsiveness, institutional visual identity, and execution documentation without rewriting the application from scratch.',
      problem: 'The original system worked, but the interface was not intuitive, was strongly desktop-oriented, and made frequent consultation harder for teachers, students, and administrators. Availability, rooms, schedules, and settings required more effort than the institution routine allowed.',
      solution: 'The solution was an incremental modernization over ClassroomBookings in PHP/CodeIgniter, preserving business rules while reorganizing login, reservation grid, laboratory cards, period details, and administrative settings. The project also received language adjustments, Docker, and public documentation for safer execution.',
      caseStudy: {
        roleLabel: 'My role',
        role: 'I handled legacy technical analysis, planning and implementation of improvements, responsiveness, documentation, issue organization, testing, and functional validation.',
        processLabel: 'Process applied',
        process: ['Mapped screens, files, and booking flows.', 'Recorded problems and requirements as issues and Kanban work.', 'Delivered incrementally with branches, review, and weekly feedback.', 'Performed functional testing and delivery validation.'],
        outcomeLabel: 'Outcome and learning',
        outcome: 'The delivery modernized screens used by teachers, students, teaching assistants, and administrators without rewriting existing rules. It consolidated my fast learning of PHP, CodeIgniter 3, and legacy maintenance.',
      },
    },
    'define-pilates': {
      subtitle: 'Academic management project for Pilates studios',
      description: 'Interdisciplinary academic project to organize schedules, students, financial information, reports, and administrative workflows for Pilates studios.',
      problem: 'Administrative fragmentation and dependency on manual controls created commercial bottlenecks, overbooking risk, and difficulty tracking studio operations.',
      solution: 'As Academic Tech Lead, I organized tasks and priorities and contributed to technical decisions, frontend/backend integration, API documentation, testing, and delivery review using Django and React.',
      caseStudy: {
        roleLabel: 'My role',
        role: 'Academic Tech Lead responsible for squad technical organization, prioritization, Kanban, delivery follow-up, and demo support.',
        processLabel: 'Process applied',
        process: ['Task breakdown and prioritization.', 'Frontend/backend integration.', 'API documentation, testing, and delivery review.', 'Phased planning for evolving requirements.'],
        outcomeLabel: 'Outcome and learning',
        outcome: 'Delivered and presented academic project combining interdependent modules under a short deadline. The work strengthened my collaborative product and technical integration skills.',
      },
    },
    'wsp-finance': {
      subtitle: 'Authorial financial management project · in progress',
      description: 'An authorial project in development to support financial organization, routine automation, and accountant communication for small businesses.',
      problem: 'Financial and operational routines need organized information, consistent rules, and access control so that decision-making remains secure and traceable.',
      solution: 'I am incrementally developing backend and frontend with Node.js, TypeScript, Express, Prisma, PostgreSQL, and React, applying REST APIs, testing, and Telegram integration.',
      caseStudy: {
        roleLabel: 'My role',
        role: 'Ideation, feature definition, modeling, backend and frontend development, Telegram integration, testing, and debugging.',
        processLabel: 'Technical case',
        process: ['A transaction persisted correctly but the dashboard did not update during the session.', 'The investigation compared logs, Swagger, database state, API response, and frontend state.', 'The fix added refreshes after transactions, on dashboard return, and by manual action.'],
        outcomeLabel: 'Outcome and learning',
        outcome: 'The flow now accounts for synchronization between integration, API, and interface. The case reinforced impact checklists before considering a change complete.',
      },
    },
    'ibdn-plataforma': {
      subtitle: 'Academic environmental digitization project',
      description: 'Team academic project supporting environmental process digitization, with authentication, access control, and institutional workflow organization.',
      problem: 'Manual and paper-based processes delayed ecological seal issuance and limited transparency in the Institute environmental certifications.',
      solution: 'The team structured a web platform with authentication, access control, and organization of core flows. My documented individual contribution includes developing a carousel with around 30 partners and sponsors.',
    },
    'cnpq-research': {
      subtitle: 'AI and optical processing',
      description: 'I participated in applied research on soil sample characterization using Speckle methodology and intelligent search, presented in scientific symposiums and focused on using algorithms to support experimental data analysis.',
      problem: 'Traditional laboratory methods can make soil analysis slow and costly. The research challenge was to explore a computational approach to organize optical signatures and support qualitative distinction of soil profiles.',
      solution: 'My contribution involved relational database modeling for scientific data and implementation of a Greedy Best-First Search algorithm for classification, connecting data fundamentals, heuristic search, and applied research.',
      caseStudy: {
        roleLabel: 'My role',
        role: 'CNPq-funded scientific initiation scholarship researcher.',
        processLabel: 'Contributions',
        process: ['Relational modeling and experimental data organization.', 'Greedy Best-First Search implementation.', 'Soil texture classification and academic communication of results.'],
        outcomeLabel: 'Technical scope',
        outcome: 'This experience represents applied research, search algorithms, and scientific data; it is not presented as professional experience in advanced Machine Learning.',
      },
    },
  },

  skills: {
    heading: 'Tech Stack & Skills',
    subtitle: 'Skills applied across academic projects, real systems, CNPq research, and legacy modernization.',
    items: [
      { title: 'Backend & APIs', description: 'Python, Django, PHP, CodeIgniter 3, Node.js, Express, TypeScript, REST APIs, authentication, and authorization.' },
      { title: 'Frontend & UI', description: 'React.js, Tailwind CSS, JavaScript, TypeScript, HTMX, Alpine.js, responsiveness, usability, Framer Motion, and Three.js.' },
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
      'Collaborated on gathering and incorporating requirements and feedback from internal FATEC users.',
      'Collaborated on technical documentation, Docker Compose, and final delivery validation.',
    ],
    technologiesLabel: 'Applied technologies',
    technologies: ['PHP', 'CodeIgniter 3', 'MySQL', 'MariaDB', 'Tailwind CSS', 'JavaScript', 'HTMX', 'Alpine.js', 'Docker', 'Docker Compose', 'Git', 'GitHub'],
  },

  supplementaryExperience: {
    heading: 'Complementary experience',
    role: 'Production Line Supply Operator',
    organization: 'Dini Têxtil',
    period: 'June 2024 — August 2024',
    summary: 'Professional experience in a process-driven environment that strengthened operational discipline, quality awareness, and accountability in execution.',
    skills: ['Teamwork', 'Quality awareness', 'Goal attainment', 'Problem solving'],
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
