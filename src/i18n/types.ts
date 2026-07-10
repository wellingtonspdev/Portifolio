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
    }
  }
  projectData: Record<string, {
    subtitle: string
    description: string
    problem: string
    solution: string
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
  keywords: {
    heading: string
    summary: string
    button: string
    description: string
  }
  certs: {
    heading: string
    subtitle: string
    dates: Record<number, string>
    items: string[]
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
