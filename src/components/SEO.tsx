import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../i18n'
import { keywords } from '../data/keywords'

export function SeoComponent() {
  const { t } = useLanguage()
  const indexedSkills = Array.from(new Set([...t.meta.knowsAbout, ...keywords])).slice(0, 60)
  const siteUrl = 'https://wellingtonspdev.github.io/Portifolio/'
  const ogImageUrl = `${siteUrl}og-image.png`

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}#wellington-siqueira-porto`,
        "name": "Wellington Siqueira Porto",
        "jobTitle": t.meta.jobTitle,
        "description": t.meta.description,
        "email": "wellingtonsp.dev@gmail.com",
        "url": siteUrl,
        "sameAs": [
          "https://www.linkedin.com/in/wellingtonsp-dev",
          "https://github.com/wellingtonspdev"
        ],
        "knowsAbout": indexedSkills,
        "hasOccupation": {
          "@type": "Occupation",
          "name": t.meta.jobTitle,
          "occupationalCategory": "15-1252.00"
        },
        "affiliation": {
          "@type": "CollegeOrUniversity",
          "name": "FATEC Itaquera Professor Miguel Reale"
        },
        "subjectOf": {
          "@type": "DigitalDocument",
          "name": "Currículo de Wellington Siqueira Porto",
          "encodingFormat": "application/pdf",
          "contentUrl": `${siteUrl}docs/curriculo-wellington-siqueira-porto.pdf`
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        "url": siteUrl,
        "name": "Wellington Siqueira Porto — Portfólio",
        "inLanguage": t.meta.lang,
        "publisher": { "@id": `${siteUrl}#wellington-siqueira-porto` }
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}#profile`,
        "url": siteUrl,
        "name": t.meta.title,
        "inLanguage": t.meta.lang,
        "mainEntity": { "@id": `${siteUrl}#wellington-siqueira-porto` },
        "isPartOf": { "@id": `${siteUrl}#website` }
      }
    ]
  }

  return (
    <Helmet>
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
      <meta name="keywords" content={t.meta.keywords} />
      <meta name="author" content="Wellington Siqueira Porto" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Wellington Siqueira Porto — Portfólio" />
      <meta property="og:locale" content={t.meta.lang === 'pt-br' ? 'pt_BR' : 'en_US'} />
      <meta property="og:title" content={t.meta.ogTitle} />
      <meta property="og:description" content={t.meta.ogDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={t.meta.ogTitle} />
      <meta property="twitter:description" content={t.meta.ogDescription} />
      <meta property="twitter:image" content={ogImageUrl} />

      {/* Script JSON-LD Injetado Corretamente */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  )
}

