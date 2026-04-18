import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { SpaceBackground } from './SpaceBackground'
import { WhatsAppButton } from './WhatsAppButton'
import { useLanguage } from '../i18n'

function LanguageToggle() {
  const { lang, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 backdrop-blur-md" role="radiogroup" aria-label="Language">
      {(['pt-br', 'en'] as const).map((l) => (
        <button
          key={l}
          role="radio"
          aria-checked={lang === l}
          onClick={() => setLanguage(l)}
          className="relative px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors duration-200 rounded-full z-10"
          style={{ color: lang === l ? '#ffffff' : '#9ca3af' }}
        >
          {lang === l && (
            <motion.span
              layoutId="lang-indicator"
              className="absolute inset-0 bg-gradient-to-r from-accent-start to-accent-end rounded-full shadow-neon"
              style={{ zIndex: -1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          {l === 'pt-br' ? 'PT' : 'EN'}
        </button>
      ))}
    </div>
  )
}

export function Layout({ children }: { children: ReactNode }) {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-screen">
      {/* Motor Gráfico Deep Space injetado no fundo da página */}
      <SpaceBackground />

      <motion.header 
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, ease: "easeOut", delay: 4.5 }}
         className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-glass-border">
         <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <span className="font-bold text-xl tracking-tighter text-white hover:scale-105 transition-transform cursor-pointer">
              wellingtonsp<span className="text-accent-end">.dev</span>
            </span>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-6">
                <a href="#sobre" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">{t.nav.about}</a>
                <a href="#projetos" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">{t.nav.cases}</a>
                <a href="#skills" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">{t.nav.skills}</a>
                <a href="#certificacoes" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">{t.nav.certs}</a>
              </div>
              <LanguageToggle />
            </div>
         </nav>
      </motion.header>

      {/* Não aplicar pt-24 no main para que o Hero ocupe a tela inteira corretamente */}
      <main className="relative">
        {children}
      </main>

      <WhatsAppButton />
    </div>
  )
}

