import { useEffect, useState } from 'react'
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'framer-motion'
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

function App() {
  const [locationKey, setLocationKey] = useState(() => `${window.location.pathname}${window.location.search}${window.location.hash}`)
  const shouldReduceMotion = useReducedMotion()
  const projectId = getCurrentProjectId()

  useEffect(() => {
    const syncLocation = () => setLocationKey(`${window.location.pathname}${window.location.search}${window.location.hash}`)
    window.addEventListener('popstate', syncLocation)
    return () => window.removeEventListener('popstate', syncLocation)
  }, [])

  useEffect(() => {
    const onProjectNavigation = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !(event.target instanceof Element)) return
      const link = event.target.closest<HTMLAnchorElement>('a[href]')
      if (!link || link.target || link.hasAttribute('download')) return

      const destination = new URL(link.href, window.location.href)
      const basePath = new URL(import.meta.env.BASE_URL, window.location.origin).pathname
      if (destination.origin !== window.location.origin || !destination.pathname.startsWith(basePath)) return

      const relativePath = destination.pathname.slice(basePath.length).replace(/^en\//, '')
      const opensProject = /^projetos\/[^/]+\/$/.test(relativePath)
      const returnsHome = Boolean(projectId) && relativePath === '' && destination.hash === ''
      if (!opensProject && !returnsHome) return

      event.preventDefault()
      const nextLocationKey = `${destination.pathname}${destination.search}${destination.hash}`
      if (nextLocationKey === locationKey) return
      window.history.pushState({}, '', nextLocationKey)
      window.dispatchEvent(new PopStateEvent('popstate'))
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      setLocationKey(nextLocationKey)
    }

    document.addEventListener('click', onProjectNavigation)
    return () => document.removeEventListener('click', onProjectNavigation)
  }, [locationKey, projectId])

  return (
    <MotionConfig reducedMotion="user">
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
    </MotionConfig>
  )
}

export default App
