import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function Hero() {
  const [text, setText] = useState('')
  const phrases = [
    'Arquiteto de Soluções AI-Native',
    'Engenheiro Full Stack',
    'Tech Lead & Especialista FinOps',
    'Pesquisador em Dados e Algoritmos'
  ]
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const typeSpeed = isDeleting ? 30 : 50
    const delay = isDeleting && text === '' ? 500 : (!isDeleting && text === currentPhrase ? 2000 : typeSpeed)

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setIsDeleting(true)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      } else {
        setText(currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases])

  return (
    <section id="home" className="pt-40 pb-20 md:pt-56 md:pb-32 relative z-10 min-h-screen flex items-center">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-xs font-bold mb-6 px-4 py-1.5 rounded-full border border-green-500/20 uppercase tracking-wider backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Disponível para Projetos e Oportunidades
          </span>

          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-white mb-6">
            Wellington Siqueira Porto
          </h1>

          <h2 className="text-xl md:text-3xl font-bold text-accent-end mb-8 h-8 md:h-10 flex justify-center">
            <span>{text}</span>
            <span className="animate-pulse ml-1">|</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed italic">
            Transformando requisitos complexos em arquiteturas escaláveis e resilientes. Especialista em Engenharia Full Stack, Inteligência Artificial Aplicada e Cloud FinOps.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projetos" className="bg-gradient-to-r from-accent-start to-accent-end text-white font-bold py-3 px-8 rounded-xl shadow-neon hover:shadow-lg hover:opacity-90 transition-all duration-300">
              Ver Dossiê Arquitetural
            </a>
            <a href="https://github.com/wellingtonspdev" target="_blank" rel="noreferrer" className="glass-card text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-all duration-300">
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
