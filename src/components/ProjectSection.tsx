import { motion } from 'framer-motion'
import { projectsData } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { useLanguage } from '../i18n'

export function ProjectSection() {
  const { t } = useLanguage()

  return (
    <section id="projetos" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">{t.projects.heading}</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

