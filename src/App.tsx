import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { SeoComponent } from './components/SEO'
import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { CareerSection } from './components/CareerSection'
import { ExperienceSection } from './components/ExperienceSection'
import { SupplementaryExperienceSection } from './components/SupplementaryExperienceSection'
import { ProjectSection } from './components/ProjectSection'
import { SkillsSection } from './components/SkillsSection'
import { KeywordsSection } from './components/KeywordsSection'
import { CertificationsSection } from './components/CertificationsSection'
import { Footer } from './components/Footer'
import { ProjectDetailPage } from './components/ProjectDetailPage'
import { getCurrentProjectId } from './routing'

function getLocationKey() {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`
}

function App() {
  const [locationKey, setLocationKey] = useState(getLocationKey)
  const shouldReduceMotion = useReducedMotion()
  const projectId = getCurrentProjectId()

  useEffect(() => {
    const loader = document.getElementById('initial-loader')
    if (!loader) return

    loader.classList.add('is-ready')
    const id = window.setTimeout(() => loader.remove(), 220)
    return () => window.clearTimeout(id)
  }, [])

  useEffect(() => {
    const syncLocation = () => setLocationKey(getLocationKey())
    window.addEventListener('popstate', syncLocation)
    return () => window.removeEventListener('popstate', syncLocation)
  }, [])

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      if (!(event.target instanceof Element)) return
      const link = event.target.closest<HTMLAnchorElement>('a[href]')
      if (!link || link.target || link.hasAttribute('download')) return

      const destination = new URL(link.href, window.location.href)
      const basePath = new URL(import.meta.env.BASE_URL, window.location.origin).pathname
      if (destination.origin !== window.location.origin || !destination.pathname.startsWith(basePath)) return

      const nextLocationKey = `${destination.pathname}${destination.search}${destination.hash}`
      if (nextLocationKey === getLocationKey()) return
      if (destination.pathname === window.location.pathname && destination.search === window.location.search) return

      event.preventDefault()
      window.history.pushState({}, '', nextLocationKey)
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      setLocationKey(nextLocationKey)
    }

    document.addEventListener('click', onDocumentClick)
    return () => document.removeEventListener('click', onDocumentClick)
  }, [])

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return

    const id = window.setTimeout(() => {
      document.getElementById(decodeURIComponent(hash))?.scrollIntoView({
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    }, shouldReduceMotion ? 0 : 250)

    return () => window.clearTimeout(id)
  }, [locationKey, shouldReduceMotion])
  useEffect(() => {
    // Inicialização do Lenis para o Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <SeoComponent />
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={locationKey}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {projectId ? <ProjectDetailPage projectId={projectId} /> : <>
              <Hero />
              <AboutSection />
              <CareerSection />
              <ExperienceSection />
              <SupplementaryExperienceSection />
              <ProjectSection />
              <SkillsSection />
              <KeywordsSection />
              <CertificationsSection />
            </>}
          </motion.div>
        </AnimatePresence>
      </Layout>
      <Footer />
    </>
  )
}

export default App
