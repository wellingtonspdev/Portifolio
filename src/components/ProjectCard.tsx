import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Cpu, Database, Activity, LayoutDashboard, Leaf, Microscope, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { Project } from '../data/projects'
import { clsx } from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useLanguage } from '../i18n'

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-16 h-16 mb-4 text-indigo-400 group-hover:scale-110 transition-transform relative z-20" />,
  Database: <Database className="w-16 h-16 mb-4 text-blue-400 group-hover:scale-110 transition-transform relative z-20" />,
  Activity: <Activity className="w-16 h-16 mb-4 text-red-400 group-hover:scale-110 transition-transform relative z-20" />,
  LayoutDashboard: <LayoutDashboard className="w-16 h-16 mb-4 text-blue-400 group-hover:scale-110 transition-transform relative z-20" />,
  Leaf: <Leaf className="w-16 h-16 mb-4 text-green-400 group-hover:scale-110 transition-transform relative z-20" />,
  Microscope: <Microscope className="w-16 h-16 mb-4 text-amber-400 group-hover:scale-110 transition-transform relative z-20" />
}

// Helper para formatar o HTML da descrição
function formatDescription(text: string) {
  // Regex para encontrar métricas: números seguidos de MB, %, R$ valores, etc.
  // Pode ser aprimorada de acordo com a necessidade, mas esta aborda os casos de uso atuais
  let formatted = text.replace(/(\d+%|< \d+ MB|\d+ MB|R\$ \d+,\d{2}|< 60 MB|<30MB|88%|28%|70%|< 60MB|29%|52%|86%|74%|\$7\.20|\$2\.50|10 TB|0,05%|< 300 milissegundos|R\$ 0,90|26%|100%|3 segundos)/gi, '<span class="tabular-nums font-semibold text-accent-end">$1</span>');

  // Tratando Zero-Trust e workspaceId explicitamente conforme as diretrizes
  formatted = formatted.replace(/(Zero-Trust)/gi, '<strong class="text-white">$1</strong>');
  formatted = formatted.replace(/(workspaceId)/gi, '<code class="bg-black/30 px-1 py-0.5 rounded text-indigo-300 font-mono text-xs">$1</code>');

  return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
}

const SingleAssetView = ({ src, alt }: { src: string, alt: string }) => {
  const isIBDN = src.includes('IBDN');
  const isVIVA = src.includes('VIVA'); // Se for viva, o logo tem fundo

  if (isVIVA) {
    return (
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none block z-20"
      />
    );
  }

  return (
    <motion.div
      animate={{ 
        y: [0, -12, 0],
        scale: [1, 1.05, 1],
        filter: ["drop-shadow(0 0 0px #00f2ff)", "drop-shadow(0 0 15px #00f2ff)", "drop-shadow(0 0 0px #00f2ff)"]
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="flex items-center justify-center w-full h-full max-w-[65%] max-h-[65%] z-20 relative"
    >
      <img
        src={src}
        alt={alt}
        className={clsx(
          "object-contain pointer-events-none w-full h-full",
          isIBDN ? "brightness-0 invert" : ""
        )}
      />
    </motion.div>
  );
};

const MultiAssetCarousel = ({ assets, altTitle }: { assets: string[], altTitle: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3500, stopOnInteraction: false })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative w-full h-full group" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
      <div className="overflow-hidden h-full embla cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex h-full embla__container touch-pan-y" style={{ willChange: 'transform' }}>
          {assets.map((src, index) => {
            const isLogo = src.includes('Logo_Define_Pilates');
            
            return (
              <div className={clsx("relative flex-[0_0_100%] min-w-0 h-full embla__slide overflow-hidden flex items-center justify-center", !isLogo && "pb-8 pt-1")} key={index}>
                {isLogo && <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0ac2ac] to-[#0d9488] z-0" />}
                {!isLogo && <img src={src} aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20 blur-2xl scale-[1.3] pointer-events-none" />}
                
                <img 
                  src={src} 
                  alt={`${altTitle} - slide ${index + 1}`} 
                  loading={index === 0 ? "eager" : "lazy"} 
                  className={clsx(
                    "max-w-full relative z-10", 
                    isLogo ? "absolute inset-0 w-full h-full object-contain p-8 pointer-events-none block" : "w-auto h-full object-contain rounded-lg shadow-[0_10px_35px_rgba(0,0,0,0.8)] border border-white/5"
                  )} 
                />
                
                {!isLogo && <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/10 to-transparent pointer-events-none z-20" />}
              </div>
            );
          })}
        </div>
      </div>

      <button onClick={() => emblaApi?.scrollPrev()} className="absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_12px_rgba(0,242,255,0.4)] transition-all z-30">
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button onClick={() => emblaApi?.scrollNext()} className="absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_12px_rgba(0,242,255,0.4)] transition-all z-30">
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-30 items-center">
        {assets.map((_, index) => (
          <button 
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${index === selectedIndex ? 'w-5 bg-cyan-400 shadow-[0_0_8px_#00f2ff]' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useLanguage()
  const pd = t.projectData[project.id]

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
          <span className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2 py-1 rounded border border-yellow-500/50 uppercase flex items-center gap-1 z-40 backdrop-blur-md shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
            {t.projects.labels.inDev}
          </span>
        )}

        <AnimatePresence mode="wait">
          {project.images && project.images.length > 1 ? (
             <motion.div key="multi" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 w-full h-full z-10">
               <MultiAssetCarousel assets={project.images} altTitle={project.title} />
             </motion.div>
          ) : project.images && project.images.length === 1 ? (
             <motion.div key="single" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center z-20">
               <SingleAssetView src={project.images[0]} alt={project.title} />
             </motion.div>
          ) : project.imageUrl ? (
             <motion.div key="legacy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center z-20">
               <img src={project.imageUrl} alt={project.title} className="h-full object-contain rounded-[1.5rem] border-[4px] border-gray-900 shadow-2xl relative" />
             </motion.div>
          ) : (
             <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col items-center justify-center z-20">
               {iconMap[project.icon]}
               <h3 className="text-2xl font-bold text-gray-200">{pd?.subtitle ?? project.subtitle}</h3>
             </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-8 flex flex-col flex-grow bg-black/40 backdrop-blur-md">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-4 leading-relaxed font-medium">
          {formatDescription(pd?.description ?? project.description)}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-accent-end text-xs font-bold uppercase tracking-wider mb-4 hover:text-accent-start transition-colors flex items-center gap-1 focus:outline-none w-fit"
        >
          <span>{isExpanded ? t.projects.labels.hideDetails : t.projects.labels.showDetails}</span>
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
                <p><strong className="text-white">{t.projects.labels.problem}</strong> {pd?.problem ?? project.problem}</p>
                <p><strong className="text-white">{t.projects.labels.solution}</strong> {formatDescription(pd?.solution ?? project.solution)}</p>
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
                    <ExternalLink className="w-4 h-4" /> {t.projects.labels.viewDemo}
                  </a>

                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="flex-1 bg-white/5 border border-white/10 text-white text-xs font-bold py-2.5 rounded-lg text-center hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    <Github className="w-4 h-4" /> {t.projects.labels.code}
                  </a>
                )}
             </div>
          )}
        </div>

      </div>
    </motion.article>
  )
}
