import { useEffect, useState } from 'react'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
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

function scrollToAnchor(hash: string) {
  if (!hash) return
  // Resolve deferred section heights before positioning the anchor.
  document.documentElement.classList.add('anchor-navigation')
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'instant' })
    requestAnimationFrame(() => document.documentElement.classList.remove('anchor-navigation'))
  }))
}

function App() {
  const [locationKey, setLocationKey] = useState(() => `${window.location.pathname}${window.location.search}`)
  const shouldReduceMotion = useReducedMotion()
  const projectId = getCurrentProjectId()

  useEffect(() => {
    const syncLocation = () => {
      setLocationKey(`${window.location.pathname}${window.location.search}`)
      if (!getCurrentProjectId()) scrollToAnchor(window.location.hash)
    }
    window.addEventListener('popstate', syncLocation)
    return () => window.removeEventListener('popstate', syncLocation)
  }, [])

  useEffect(() => {
    if (!projectId && window.location.hash) {
      scrollToAnchor(window.location.hash)
    }
  }, [locationKey, projectId])

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
      const returnsHome = Boolean(projectId) && relativePath === ''
      const homeAnchor = relativePath === '' && Boolean(destination.hash)
      if (!opensProject && !returnsHome && !homeAnchor) return

      event.preventDefault()
      const nextLocationKey = `${destination.pathname}${destination.search}`
      if (nextLocationKey === locationKey && !homeAnchor) return
      window.history.pushState({}, '', `${nextLocationKey}${destination.hash}`)
      window.dispatchEvent(new PopStateEvent('popstate'))
      if (!destination.hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
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
          <motion.div
            key={locationKey}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
        {projectId ? <ProjectDetailPage projectId={projectId} /> : <>
          <Hero />
          <div className="deferred-section"><AboutSection /></div>
          <div className="deferred-section"><CareerSection /></div>
          <div className="deferred-section"><ExperienceSection /></div>
          <div className="deferred-section"><SupplementaryExperienceSection /></div>
          <div className="deferred-section deferred-projects"><ProjectSection /></div>
          <div className="deferred-section"><SkillsSection /></div>
          <div className="deferred-section"><KeywordsSection /></div>
          <div className="deferred-section"><CertificationsSection /></div>
        </>}
          </motion.div>
      </Layout>
      <Footer />
      </>
    </MotionConfig>
  )
}

export default App
