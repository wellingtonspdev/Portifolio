import { GraduationCap, Microscope, Milestone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n'

export function CareerSection() {
  const { t } = useLanguage()

  return (
    <section id="trajetoria" className="py-24 relative z-10 border-t border-white/5" aria-labelledby="career-heading">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 id="career-heading" className="text-3xl md:text-5xl font-extrabold text-white mb-4">{t.career.heading}</h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">{t.career.subtitle}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.article className="glass-card rounded-2xl border border-white/10 bg-white/5 p-7" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-end"><GraduationCap className="h-5 w-5" />{t.career.education.label}</p>
              <h3 className="mt-4 text-2xl font-bold text-white">{t.career.education.title}</h3>
              <p className="mt-2 font-medium text-gray-300">{t.career.education.institution}</p>
              <p className="mt-1 text-sm text-gray-400">{t.career.education.period} · {t.career.education.status}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.career.education.areas.map((area) => <span key={area} className="rounded-md border border-cyan-900/80 bg-cyan-950/20 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-cyan-300">{area}</span>)}
              </div>
            </motion.article>

            <motion.article className="glass-card rounded-2xl border border-white/10 bg-white/5 p-7" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300"><Microscope className="h-5 w-5" />{t.career.research.label}</p>
              <h3 className="mt-4 text-2xl font-bold text-white">{t.career.research.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-300">{t.career.research.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                {t.career.research.contributions.map((item) => <li key={item}>• {item}</li>)}
              </ul>
              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-gray-500">{t.career.research.eventsLabel}</p>
              <p className="mt-2 text-sm text-gray-300">{t.career.research.events.join(' · ')}</p>
            </motion.article>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-7">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-300"><Milestone className="h-5 w-5" />{t.career.heading}</p>
            <ol className="mt-6 grid gap-4 md:grid-cols-2">
              {t.career.timeline.map((item) => <li key={`${item.period}-${item.title}`} className="border-l-2 border-accent-end/70 pl-4"><p className="text-xs font-bold uppercase tracking-widest text-accent-end">{item.period}</p><h3 className="mt-1 font-bold text-white">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-gray-400">{item.description}</p></li>)}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
