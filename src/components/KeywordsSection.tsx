import { Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { keywordCategories, keywords } from '../data/keywords'
import { useLanguage } from '../i18n'

export function KeywordsSection() {
  const { t } = useLanguage()

  return (
    <section id="competencias" className="py-12 relative z-10" aria-labelledby="keywords-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <details className="group rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-left marker:content-none">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent-end"><Search className="h-4 w-4" aria-hidden="true" /></span>
                <div>
                  <h2 id="keywords-heading" className="text-sm font-bold text-white">{t.keywords.heading}</h2>
                  <p className="text-xs text-gray-400">{t.keywords.summary.replace('{count}', String(keywords.length))}</p>
                </div>
              </div>
              <span className="rounded-lg border border-white/10 px-3 py-2 text-xs font-bold text-gray-300 transition-colors group-hover:bg-white/5">{t.keywords.button}</span>
            </summary>
            <motion.div className="border-t border-white/10 px-6 py-6" initial={false}>
              <p className="mb-6 max-w-3xl text-sm leading-relaxed text-gray-400">{t.keywords.description}</p>
              <div className="grid gap-6 md:grid-cols-2">
                {keywordCategories.map((category) => (
                  <section key={category.title} aria-label={category.title}>
                    <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-accent-end">{category.title}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {category.items.map((keyword) => <li key={keyword} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-gray-300">{keyword}</li>)}
                    </ul>
                  </section>
                ))}
              </div>
            </motion.div>
          </details>
        </div>
      </div>
    </section>
  )
}
