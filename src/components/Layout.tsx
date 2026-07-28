import { lazy, ReactNode, Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { WhatsAppButton } from './WhatsAppButton'
import { useLanguage } from '../i18n'
import { ResumeButton } from './ResumeButton'
import { getBasePath, getCurrentProjectId, getProjectPath } from '../routing'

const SpaceBackground = lazy(() => import('./SpaceBackground').then((module) => ({ default: module.SpaceBackground })))

function LanguageToggle() {
  const { lang, setLanguage } = useLanguage()

  const changeLanguage = (language: 'pt-br' | 'en') => {
    setLanguage(language)
    const projectId = getCurrentProjectId()
    window.location.assign(projectId ? getProjectPath(projectId, language) : getBasePath(language))
  }

  return (
    <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 backdrop-blur-md" role="radiogroup" aria-label="Language">
      {(['pt-br', 'en'] as const).map((l) => (
        <button
          key={l}
          role="radio"
          aria-checked={lang === l}
          onClick={() => changeLanguage(l)}
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
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const schedule = window.requestIdleCallback ?? ((callback: IdleRequestCallback) => window.setTimeout(callback, 600))
    const cancel = window.cancelIdleCallback ?? window.clearTimeout
    const id = schedule(() => setShowBackground(true))
    return () => cancel(id)
  }, [])

  const homePath = getBasePath(t.meta.lang === 'en' ? 'en' : 'pt-br')

  return (
    <div className="relative min-h-screen">
      {/* Motor Gráfico Deep Space injetado no fundo da página */}
      {showBackground && <Suspense fallback={null}><SpaceBackground /></Suspense>}

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
      <main className="relative">
        {children}
      </main>

      <WhatsAppButton />
    </div>
  )
}

