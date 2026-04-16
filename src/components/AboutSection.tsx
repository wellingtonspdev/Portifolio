import { motion } from 'framer-motion'
import { Users, HeartHandshake, Cpu } from 'lucide-react'
import { useLanguage } from '../i18n'

const cardIcons = [Users, HeartHandshake, Cpu]
const cardColors = ['text-accent-start', 'text-blue-400', 'text-indigo-400']

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-10 text-center">
            {t.about.heading}
          </h2>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-medium bg-black/20 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
            {t.about.paragraphs.map((html, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.cards.map((card, i) => {
              const Icon = cardIcons[i]
              return (
                <motion.div
                  key={i}
                  className="glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Icon className={`w-10 h-10 ${cardColors[i]} mb-4`} />
                  <h4 className="font-bold text-white mb-2">{card.title}</h4>
                  <p className="text-sm text-gray-400">{card.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

