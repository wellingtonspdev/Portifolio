import { Component, lazy, Suspense, useCallback, useEffect, useState, type ReactNode } from 'react'

const SpaceBackground = lazy(() => import('./SpaceBackground').then(module => ({ default: module.SpaceBackground })))

class BackgroundBoundary extends Component<{ children: ReactNode; onFailure: () => void }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch() { this.props.onFailure() }
  render() { return this.state.failed ? null : this.props.children }
}

export function AnimatedBackground() {
  const [mount, setMount] = useState(false)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const onReady = useCallback(() => setReady(true), [])
  const onFailure = useCallback(() => { setReady(false); setFailed(true) }, [])
  useEffect(() => {
    // Let the useful content paint first. The CSS background is already moving.
    const timeout = window.setTimeout(() => setMount(true), 350)
    return () => window.clearTimeout(timeout)
  }, [])
  return <div className="animated-background" aria-hidden="true">
    {(!ready || failed) && <div className="space-fallback" />}
    {mount && !failed && <BackgroundBoundary onFailure={onFailure}>
      <Suspense fallback={null}><SpaceBackground onReady={onReady} onFailure={onFailure} /></Suspense>
    </BackgroundBoundary>}
  </div>
}
