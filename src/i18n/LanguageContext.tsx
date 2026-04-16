import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Locale } from './types'
import { ptBR } from './locales/pt-br'
import { en } from './locales/en'

export type Lang = 'pt-br' | 'en'

const locales: Record<Lang, Locale> = {
  'pt-br': ptBR,
  'en': en,
}

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'pt-br'
  const stored = localStorage.getItem('lang') as Lang | null
  if (stored && stored in locales) return stored
  return navigator.language.startsWith('en') ? 'en' : 'pt-br'
}

type LanguageContextType = {
  t: Locale
  lang: Lang
  setLanguage: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt-br' ? 'pt-BR' : 'en'
    localStorage.setItem('lang', lang)
  }, [lang])

  const value: LanguageContextType = {
    t: locales[lang],
    lang,
    setLanguage: setLang,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
