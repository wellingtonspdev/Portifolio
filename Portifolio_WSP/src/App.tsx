import { useEffect } from 'react'
import Lenis from 'lenis'
import { HelmetProvider } from 'react-helmet-async'
import { SeoComponent } from './components/SEO'
import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { ProjectSection } from './components/ProjectSection'
import { SkillsSection } from './components/SkillsSection'
import { CertificationsSection } from './components/CertificationsSection'
import { Footer } from './components/Footer'

function App() {
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
    <HelmetProvider>
      <SeoComponent />
      <Layout>
        {/* Todas as seções agora orquestradas modularmente! */}
        <Hero />
        <AboutSection />
        <ProjectSection />
        <SkillsSection />
        <CertificationsSection />
      </Layout>
      <Footer />
    </HelmetProvider>
  )
}

export default App
