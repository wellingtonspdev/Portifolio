import { createContext, useContext, ReactNode } from 'react'

interface IntroContextValue {
  isIntroComplete: boolean
  completeIntro: () => void
  isInitialAnimation: boolean
}

const immediateIntro: IntroContextValue = {
  isIntroComplete: true,
  completeIntro: () => {},
  isInitialAnimation: false,
}

const IntroContext = createContext<IntroContextValue>(immediateIntro)

export function IntroProvider({ children }: { children: ReactNode }) {
  return (
    <IntroContext.Provider value={immediateIntro}>{children}</IntroContext.Provider>
  )
}

export function useIntro() {
  return useContext(IntroContext)
}
