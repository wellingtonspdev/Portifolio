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
    cases: string
    skills: string
    certs: string
  }
  hero: {
    badge: string
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
  certs: {
    heading: string
    subtitle: string
    dates: Record<number, string>
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
