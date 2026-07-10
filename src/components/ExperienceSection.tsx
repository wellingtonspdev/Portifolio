import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n'

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experiencia" className="py-24 relative z-10" aria-labelledby="experience-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="experience-heading" className="text-3xl md:text-5xl font-extrabold text-white mb-4">{t.experience.heading}</h2>
            <p className="text-lg text-gray-400 leading-relaxed">{t.experience.subtitle}</p>
          </div>

          <motion.article
            className="glass-card rounded-2xl border border-white/10 bg-white/5 p-7 md:p-9"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-5 md:flex-row md:justify-between">
              <div>
                <div className="flex items-center gap-3 text-accent-end mb-3">
                  <BriefcaseBusiness className="h-6 w-6" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-widest">{t.experience.type}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{t.experience.role}</h3>
                <p className="mt-1 text-gray-300 font-medium">{t.experience.organization}</p>
              </div>
              <div className="space-y-2 text-sm text-gray-400 md:text-right">
                <p className="flex items-center gap-2 md:justify-end"><CalendarDays className="h-4 w-4" aria-hidden="true" />{t.experience.period}</p>
                <p className="flex items-center gap-2 md:justify-end"><MapPin className="h-4 w-4" aria-hidden="true" />{t.experience.location}</p>
              </div>
            </div>

            <p className="mt-6 text-gray-300 leading-relaxed">{t.experience.summary}</p>

            <ul className="mt-6 grid gap-3 md:grid-cols-2" aria-label={t.experience.highlightsLabel}>
              {t.experience.highlights.map((highlight) => (
                <li key={highlight} className="rounded-lg border border-white/5 bg-black/20 px-4 py-3 text-sm text-gray-300">
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2" aria-label={t.experience.technologiesLabel}>
              {t.experience.technologies.map((technology) => (
                <span key={technology} className="rounded-md border border-cyan-900/80 bg-cyan-950/20 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-cyan-300">
                  {technology}
                </span>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
