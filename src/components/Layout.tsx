import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { AnimatedBackground } from './AnimatedBackground'
import { WhatsAppButton } from './WhatsAppButton'
import { useLanguage } from '../i18n'
import { ResumeButton } from './ResumeButton'
import { getBasePath, getCurrentProjectId, getProjectPath } from '../routing'

function LanguageToggle() {
  const { lang, setLanguage, t } = useLanguage()

  const changeLanguage = (language: 'pt-br' | 'en') => {
    setLanguage(language)
    const projectId = getCurrentProjectId()
    window.history.pushState({}, '', projectId ? getProjectPath(projectId, language) : getBasePath(language))
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-0.5" role="radiogroup" aria-label={t.meta.lang === 'en' ? 'Language' : 'Idioma'}>
      {(['pt-br', 'en'] as const).map((l) => (
        <button
          key={l}
          role="radio"
          aria-checked={lang === l}
          onClick={() => changeLanguage(l)}
          className="relative min-h-10 min-w-10 rounded-full px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 z-10"
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

  const homePath = getBasePath(t.meta.lang === 'en' ? 'en' : 'pt-br')

  return (
    <div className="relative isolate min-h-screen">
      {/* Motor Gráfico Deep Space injetado no fundo da página */}
      <AnimatedBackground />

      <motion.header 
         initial={false}
         animate={{ opacity: 1, y: 0 }}
         className="fixed top-0 left-0 right-0 z-50 border-b border-glass-border bg-[#070a10]/90 backdrop-blur-sm">
         <nav className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
            <span className="font-bold text-lg tracking-tighter text-white transition-transform hover:scale-105 cursor-pointer sm:text-xl">
              wellingtonsp<span className="text-accent-end">.dev</span>
            </span>
            <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
              <div className="hidden md:flex gap-6">
                <a href={`${homePath}#sobre`} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">{t.nav.about}</a>
                <a href={`${homePath}#trajetoria`} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">{t.nav.trajectory}</a>
                <a href={`${homePath}#experiencia`} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">{t.nav.experience}</a>
                <a href={`${homePath}#projetos`} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">{t.nav.cases}</a>
                <a href={`${homePath}#skills`} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">{t.nav.skills}</a>
                <a href={`${homePath}#competencias`} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">{t.nav.keywords}</a>
                <a href={`${homePath}#certificacoes`} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">{t.nav.certs}</a>
              </div>
              <ResumeButton label={t.nav.resume} variant="secondary" className="hidden lg:inline-flex px-3 py-2 text-xs" />
              <LanguageToggle />
            </div>
         </nav>
      </motion.header>

      {/* Não aplicar pt-24 no main para que o Hero ocupe a tela inteira corretamente */}
      <main className="relative z-10">
        {children}
      </main>

      <WhatsAppButton />
    </div>
  )
}

