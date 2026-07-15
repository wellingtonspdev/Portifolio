export const projectSlugs = [
  'reserva-laboratorios-fatec',
  'wsp-finance',
  'define-pilates',
  'ibdn-plataforma',
  'cnpq-research',
] as const

export type ProjectSlug = typeof projectSlugs[number]

export function getBasePath(language: 'pt-br' | 'en') {
  return `${import.meta.env.BASE_URL}${language === 'en' ? 'en/' : ''}`
}

export function getProjectPath(projectId: string, language: 'pt-br' | 'en') {
  return `${getBasePath(language)}projetos/${projectId}/`
}

export function getCurrentProjectId() {
  if (typeof window === 'undefined') return undefined
  const path = window.location.pathname.replace(import.meta.env.BASE_URL, '').replace(/^en\//, '')
  const match = path.match(/^projetos\/([^/]+)/)
  return match?.[1]
}
