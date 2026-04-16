import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../i18n'

export function SeoComponent() {
  const { t } = useLanguage()

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Wellington Siqueira Porto",
    "jobTitle": t.meta.jobTitle,
    "email": "wellingtonsp.dev@gmail.com",
    "url": "https://wellingtonspdev.github.io/Portifolio/",
    "sameAs": [
      "https://www.linkedin.com/in/wellingtonsp-dev",
      "https://github.com/wellingtonspdev"
    ],
    "knowsAbout": t.meta.knowsAbout,
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "recognizedBy": {
          "@type": "Organization",
          "name": "FATEC Itaquera"
        },
        "name": t.meta.credentialName
      }
    ],
    "occupationalCategory": "15-1252.00"
  }

  return (
    <Helmet>
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
      <meta name="keywords" content={t.meta.keywords} />
      <meta name="author" content="Wellington Siqueira Porto" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://wellingtonspdev.github.io/Portifolio/" />
      <meta property="og:title" content={t.meta.ogTitle} />
      <meta property="og:description" content={t.meta.ogDescription} />
      <meta property="og:image" content="https://raw.githubusercontent.com/wellingtonspdev/Portifolio/main/assets/og-image.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://wellingtonspdev.github.io/Portifolio/" />
      <meta property="twitter:title" content={t.meta.ogTitle} />
      <meta property="twitter:description" content={t.meta.ogDescription} />
      <meta property="twitter:image" content="https://raw.githubusercontent.com/wellingtonspdev/Portifolio/main/assets/og-image.png" />

      {/* Script JSON-LD Injetado Corretamente */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  )
}

