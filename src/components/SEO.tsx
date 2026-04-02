import { Helmet } from 'react-helmet-async'

export function SeoComponent() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Wellington Siqueira Porto",
    "jobTitle": "Engenheiro de Software Full Stack & Arquiteto de Soluções",
    "email": "wellingtonsp.dev@gmail.com",
    "url": "https://wellingtonspdev.github.io/Portifolio/",
    "sameAs": [
      "https://www.linkedin.com/in/wellingtonsp-dev",
      "https://github.com/wellingtonspdev"
    ],
    "knowsAbout": ["Python", "Node.js", "React.js", "Inteligência Artificial Aplicada", "Cloud FinOps", "C/C++", "Cibersegurança", "TDD", "PostgreSQL", "Linux", "RAG Local"],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "recognizedBy": {
          "@type": "Organization",
          "name": "FATEC Itaquera"
        },
        "name": "Tecnólogo em Desenvolvimento de Software Multiplataforma"
      }
    ],
    "occupationalCategory": "15-1252.00"
  }

  return (
    <Helmet>
      <title>Wellington Siqueira Porto | Desenvolvedor Full Stack & Arquiteto de Soluções</title>
      <meta name="description" content="Portfólio de Wellington Siqueira Porto. Engenheiro Full Stack AI-Native, Tech Lead e Pesquisador em IA. Especialista em Python, Node.js, Cloud FinOps, SaaS e Arquitetura Zero-Trust." />
      <meta name="keywords" content="Wellington Siqueira Porto, Full Stack Developer, Arquiteto de Soluções, Python, Node.js, Cloud FinOps, IA Aplicada, RAG, TDD, Cisco, Cibersegurança" />
      <meta name="author" content="Wellington Siqueira Porto" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://wellingtonspdev.github.io/Portifolio/" />
      <meta property="og:title" content="Wellington Siqueira Porto | Dev Full Stack & Arquiteto de Soluções" />
      <meta property="og:description" content="Transformando requisitos complexos em arquiteturas escaláveis. Especialista em Python, Node.js, Cloud FinOps e IA aplicada a negócios." />
      <meta property="og:image" content="https://raw.githubusercontent.com/wellingtonspdev/Portifolio/main/assets/og-image.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://wellingtonspdev.github.io/Portifolio/" />
      <meta property="twitter:title" content="Wellington Siqueira Porto | Dev Full Stack & Arquiteto de Soluções" />
      <meta property="twitter:description" content="Transformando requisitos complexos em arquiteturas escaláveis. Especialista em Python, Node.js, Cloud FinOps e IA aplicada a negócios." />
      <meta property="twitter:image" content="https://raw.githubusercontent.com/wellingtonspdev/Portifolio/main/assets/og-image.png" />

      {/* Script JSON-LD Injetado Corretamente */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  )
}
