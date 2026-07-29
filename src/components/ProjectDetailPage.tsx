import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '../i18n'
import { projectsData } from '../data/projects'
import { getBasePath } from '../routing'

export function ProjectDetailPage({ projectId }: { projectId: string }) {
  const { t, lang } = useLanguage()
  const project = projectsData.find((item) => item.id === projectId)
  const content = project ? t.projectData[project.id] : undefined
  const needsEvidenceRequest = projectId === 'wsp-finance' || projectId === 'cnpq-research'
  const whatsappMessage = lang === 'en'
    ? `Hello Wellington, I would like to request details and evidence about ${project?.title}.`
    : `Olá, Wellington! Gostaria de solicitar detalhes e evidências sobre ${project?.title}.`
  const evidenceHref = `https://wa.me/11977912705?text=${encodeURIComponent(whatsappMessage)}`

  if (!project || !content) {
    return <main className="relative z-10 mx-auto flex min-h-screen max-w-3xl items-center px-6 text-center"><p className="text-gray-300">Projeto não encontrado.</p></main>
  }

  return (
    <main className="relative z-10 py-32">
      <article className="container mx-auto max-w-4xl px-6">
        <a href={getBasePath(lang)} className="inline-flex items-center gap-2 text-sm font-bold text-accent-end hover:text-accent-start transition-colors">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> {t.projects.labels.backToPortfolio}
        </a>
        <header className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-8 md:p-12 backdrop-blur-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-end">{content.subtitle}</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">{content.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.badges.map((badge) => <span key={badge.text} className={`rounded-md border bg-black/20 px-2 py-1 text-xs font-bold ${badge.colorClass}`}>{badge.text}</span>)}
          </div>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-2" aria-label={t.projects.labels.detailsLabel}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7"><h2 className="text-xl font-bold text-white">{t.projects.labels.problem}</h2><p className="mt-3 leading-relaxed text-gray-300">{content.problem}</p></div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7"><h2 className="text-xl font-bold text-white">{t.projects.labels.solution}</h2><p className="mt-3 leading-relaxed text-gray-300">{content.solution}</p></div>
        </section>

        {content.caseStudy && <section className="mt-8 grid gap-6" aria-label={t.projects.labels.detailsLabel}>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-7"><h2 className="text-xl font-bold text-white">{content.caseStudy.roleLabel}</h2><p className="mt-3 leading-relaxed text-gray-300">{content.caseStudy.role}</p></article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-7"><h2 className="text-xl font-bold text-white">{content.caseStudy.processLabel}</h2><ul className="mt-3 space-y-2 leading-relaxed text-gray-300">{content.caseStudy.process.map((step) => <li key={step}>• {step}</li>)}</ul></article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-7"><h2 className="text-xl font-bold text-white">{content.caseStudy.outcomeLabel}</h2><p className="mt-3 leading-relaxed text-gray-300">{content.caseStudy.outcome}</p></article>
        </section>}

        {(project.links.demo || project.links.github) && <div className="mt-8 flex flex-wrap gap-3">
          {project.links.demo && <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-start to-accent-end px-5 py-3 text-sm font-bold text-white"><ExternalLink className="h-4 w-4" /> {t.projects.labels.viewDemo}</a>}
          {project.links.github && <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white"><Github className="h-4 w-4" /> {t.projects.labels.code}</a>}
        </div>}
        {needsEvidenceRequest && <a href={evidenceHref} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-sm font-bold text-emerald-200 hover:bg-emerald-500/20">{t.projects.labels.requestEvidence}</a>}
      </article>
    </main>
  )
}
