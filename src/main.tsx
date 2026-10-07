import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import { LanguageProvider } from './i18n'
import { IntroProvider } from './context/IntroContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <IntroProvider>
          <App />
        </IntroProvider>
      </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
