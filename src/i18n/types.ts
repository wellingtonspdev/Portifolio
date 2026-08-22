export type FatecBadgeItem = {
  id: string
  title: string
  type: string
  issuer: string
  description: string
  badgeUrl?: string
  authenticatorUrl: string
  image?: string
  competencies: string[]
}

export type CiscoCertItem = {
  id: number
  name: string
  issuer: string
  url?: string
}

export type Locale = {
  meta: {
    lang: string
    title: string
    description: string
    keywords: string
    ogTitle: string
    ogDescription: string
    jobTitle: string
    knowsAbout: string[]
    credentialName: string
  }
  nav: {
    about: string
    trajectory: string
    experience: string
    cases: string
    skills: string
    keywords: string
    certs: string
    resume: string
  }
  hero: {
    badge: string
    role: string
    phrases: string[]
    tagline: string
    cta: string
  }
  about: {
    heading: string
    paragraphs: string[]
    cards: { title: string; description: string }[]
  }
  career: {
    heading: string
    subtitle: string
    education: {
      label: string
      title: string
      institution: string
      period: string
      status: string
      areas: string[]
    }
    research: {
      label: string
      title: string
      summary: string
      contributions: string[]
      eventsLabel: string
      events: string[]
    }
    timeline: { period: string; title: string; description: string }[]
  }
  projects: {
    heading: string
    subtitle: string
    labels: {
      inDev: string
      hideDetails: string
      showDetails: string
      problem: string
      solution: string
      viewDemo: string
      code: string
      backToPortfolio: string
      detailsLabel: string
      viewCase: string
      role: string
      process: string
      outcome: string
      requestEvidence: string
    }
  }
  projectData: Record<string, {
    subtitle: string
    description: string
    problem: string
    solution: string
    caseStudy?: {
      roleLabel: string
      role: string
      processLabel: string
      process: string[]
      outcomeLabel: string
      outcome: string
    }
  }>
  skills: {
    heading: string
    subtitle: string
    items: { title: string; description: string }[]
  }
  experience: {
    heading: string
    subtitle: string
    type: string
    role: string
    organization: string
    period: string
    location: string
    summary: string
    highlightsLabel: string
    highlights: string[]
    technologiesLabel: string
    technologies: string[]
  }
  supplementaryExperience: {
    heading: string
    role: string
    organization: string
    period: string
    summary: string
    skills: string[]
  }
  keywords: {
    heading: string
    summary: string
    button: string
    description: string
  }
  certs: {
    heading: string
    subtitle: string
    fatecHeading: string
    fatecSubtitle: string
    ciscoHeading: string
    viewBadgeLabel: string
    authenticateLabel: string
    competenciesLabel: string
    fatecBadges: FatecBadgeItem[]
    ciscoCerts: CiscoCertItem[]
    languagesHeading: string
    languages: string
  }
  footer: {
    cta: string
    copyright: string
  }
  whatsapp: {
    tooltip: string
    ariaLabel: string
  }
}
