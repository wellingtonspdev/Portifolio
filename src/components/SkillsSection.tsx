import { motion } from 'framer-motion'
import { useLanguage } from '../i18n'

const skillIcons = ['⚙️', '🧠', '💸', '🤖', '🔐', '💡']

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">{t.skills.heading}</h2>
          <p className="text-lg text-gray-400 leading-relaxed italic">{t.skills.subtitle}</p>
        </div>

        {/* Uso de DL, DT, DD para Semântica ATS */}
        <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.skills.items.map((skill, i) => (
            <motion.div
              key={skill.title}
              className="glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <dt className="font-bold text-accent-end mb-4 uppercase tracking-wider text-xs">
                {skillIcons[i]} {skill.title}
              </dt>
              <dd className="text-sm text-gray-300 leading-relaxed">{skill.description}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}

