import { ReactNode } from 'react'
import { SpaceBackground } from './SpaceBackground'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Motor Gráfico Deep Space injetado no fundo da página */}
      <SpaceBackground />

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-glass-border">
         <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <span className="font-bold text-xl tracking-tighter text-white hover:scale-105 transition-transform cursor-pointer">
              wellingtonsp<span className="text-accent-end">.dev</span>
            </span>
            <div className="hidden md:flex gap-6">
              <a href="#sobre" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">Sobre</a>
              <a href="#projetos" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">Cases</a>
              <a href="#skills" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#certificacoes" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">Certificações</a>
            </div>
         </nav>
      </header>

      {/* Não aplicar pt-24 no main para que o Hero ocupe a tela inteira corretamente */}
      <main className="relative">
        {children}
      </main>
    </div>
  )
}
