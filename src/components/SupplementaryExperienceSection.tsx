import { Factory } from 'lucide-react'
import { useLanguage } from '../i18n'

export function SupplementaryExperienceSection() {
  const { t } = useLanguage()

  return (
    <section className="pb-24 relative z-10" aria-labelledby="supplementary-experience-heading">
      <div className="container mx-auto px-6">
        <article className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-black/20 p-7 md:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400"><Factory className="h-5 w-5" />{t.supplementaryExperience.heading}</p>
              <h2 id="supplementary-experience-heading" className="mt-3 text-xl font-bold text-white">{t.supplementaryExperience.role}</h2>
              <p className="mt-1 font-medium text-gray-300">{t.supplementaryExperience.organization}</p>
            </div>
            <p className="text-sm text-gray-400">{t.supplementaryExperience.period}</p>
          </div>
          <p className="mt-5 leading-relaxed text-gray-300">{t.supplementaryExperience.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">{t.supplementaryExperience.skills.map((skill) => <span key={skill} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-gray-300">{skill}</span>)}</div>
        </article>
      </div>
    </section>
  )
}
