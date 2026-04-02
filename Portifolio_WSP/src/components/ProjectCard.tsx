import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Cpu, Database, Activity, LayoutDashboard, Leaf, Microscope, ExternalLink, Github } from 'lucide-react'
import { Project } from '../data/projects'
import { clsx } from 'clsx'

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-16 h-16 mb-4 text-indigo-400 group-hover:scale-110 transition-transform relative z-20" />,
  Database: <Database className="w-16 h-16 mb-4 text-blue-400 group-hover:scale-110 transition-transform relative z-20" />,
  Activity: <Activity className="w-16 h-16 mb-4 text-red-400 group-hover:scale-110 transition-transform relative z-20" />,
  LayoutDashboard: <LayoutDashboard className="w-16 h-16 mb-4 text-blue-400 group-hover:scale-110 transition-transform relative z-20" />,
  Leaf: <Leaf className="w-16 h-16 mb-4 text-green-400 group-hover:scale-110 transition-transform relative z-20" />,
  Microscope: <Microscope className="w-16 h-16 mb-4 text-amber-400 group-hover:scale-110 transition-transform relative z-20" />
}

export function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.article
      className="glass-card rounded-2xl overflow-hidden flex flex-col group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* Visual Header (Ícone ou Imagem) */}
      <div className="relative h-[240px] w-full overflow-hidden flex flex-col items-center justify-center p-6 text-center border-b border-white/5 bg-white/5 group-hover:bg-white/10 transition-colors">

        {/* Este é o Efeito "Gooey/Liquid" em CSS que distorce as cores por baixo quando o card passa por cima do fundo */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />

        {project.inDevelopment && (
          <span className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2 py-1 rounded border border-yellow-500/50 uppercase flex items-center gap-1 z-20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
            Em Desenvolvimento
          </span>
        )}

        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} className="h-full object-contain rounded-[1.5rem] border-[4px] border-gray-900 shadow-2xl z-20 relative" />
        ) : (
          <div className="z-20 relative flex flex-col items-center">
            {iconMap[project.icon]}
            <h3 className="text-2xl font-bold text-gray-200">{project.subtitle}</h3>
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow bg-black/40 backdrop-blur-md">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-4 leading-relaxed font-medium">
          {project.description}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-accent-end text-xs font-bold uppercase tracking-wider mb-4 hover:text-accent-start transition-colors flex items-center gap-1 focus:outline-none w-fit"
        >
          <span>{isExpanded ? 'Ocultar Detalhes' : 'Ver Decisão Arquitetural'}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>

        {/* Acordeão Animado com Framer Motion */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="text-sm text-gray-300 space-y-3 p-4 bg-white/5 rounded-xl border border-white/10 mb-6 backdrop-blur-lg">
                <p><strong className="text-white">Ação/Problema:</strong> {project.problem}</p>
                <p><strong className="text-white">Solução:</strong> {project.solution}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer do Card */}
        <div className="mt-auto flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {project.badges.map((badge, idx) => (
              <span key={idx} className={clsx("text-[10px] font-bold border px-2 py-0.5 rounded-md uppercase bg-black/20", badge.colorClass)}>
                {badge.text}
              </span>
            ))}
          </div>

          {(project.links?.demo || project.links?.github) && (
             <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex-1 bg-gradient-to-r from-accent-start to-accent-end text-white text-xs font-bold py-2.5 rounded-lg text-center shadow-neon hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" /> Ver Demo
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="flex-1 bg-white/5 border border-white/10 text-white text-xs font-bold py-2.5 rounded-lg text-center hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    <Github className="w-4 h-4" /> Código
                  </a>
                )}
             </div>
          )}
        </div>

      </div>
    </motion.article>
  )
}
