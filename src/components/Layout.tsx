import { lazy, ReactNode, Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { WhatsAppButton } from './WhatsAppButton'
import { useLanguage } from '../i18n'
import { ResumeButton } from './ResumeButton'
import { getBasePath, getCurrentProjectId, getProjectPath } from '../routing'

const SpaceBackground = lazy(() => import('./SpaceBackground').then((module) => ({ default: module.SpaceBackground })))

function LanguageToggle() {
  const { lang, setLanguage, t } = useLanguage()

  const changeLanguage = (language: 'pt-br' | 'en') => {
    setLanguage(language)
    const projectId = getCurrentProjectId()
    window.location.assign(projectId ? getProjectPath(projectId, language) : getBasePath(language))
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
  const [isBackgroundEnabled, setIsBackgroundEnabled] = useState(false)

  const homePath = getBasePath(t.meta.lang === 'en' ? 'en' : 'pt-br')

  return (
    <div className="relative min-h-screen">
      {/* Motor Gráfico Deep Space injetado no fundo da página */}
      {isBackgroundEnabled && (
        <Suspense fallback={null}>
          <SpaceBackground skipIntro />
        </Suspense>
      )}

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
              <button
                type="button"
                onClick={() => setIsBackgroundEnabled((enabled) => !enabled)}
                className="inline-flex min-h-9 min-w-9 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-gray-200 transition-colors hover:bg-white/10 sm:px-3"
                aria-label={isBackgroundEnabled ? t.nav.disableAnimatedBackground : t.nav.enableAnimatedBackground}
                aria-pressed={isBackgroundEnabled}
                title={isBackgroundEnabled ? t.nav.disableAnimatedBackground : t.nav.enableAnimatedBackground}
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">{isBackgroundEnabled ? t.nav.disableAnimatedBackground : t.nav.enableAnimatedBackground}</span>
              </button>
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

