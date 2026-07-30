import { motion } from 'framer-motion'
import { ShieldAlert, Network, TerminalSquare, Lock, Code2, ExternalLink } from 'lucide-react'
import { useLanguage } from '../i18n'

const certsMeta = [
  { id: 1, icon: Code2, url: 'https://www.credly.com/badges/92ade20c-f0c7-4c0e-a4d5-3ed5346dd46e' },
  { id: 2, icon: Code2, url: 'https://www.credly.com/badges/ce2d5ffe-3ea1-4de9-b0d3-1f2e88cf8c72' },
  { id: 3, icon: Code2, url: 'https://www.credly.com/badges/3334643f-dac3-4c3c-9cc0-d9b271d7000a' },
  { id: 4, icon: Code2, url: 'https://www.credly.com/badges/26574fea-21b8-4192-8b7d-d6a24113d894' },
  { id: 5, icon: Code2, url: 'https://www.credly.com/badges/6869fd53-7567-4145-a207-19805ef82710' },
  { id: 6, icon: Code2, url: 'https://www.credly.com/badges/ff9602fc-1ac1-402a-84b7-9ed389cddb93' },
  { id: 7, icon: Lock, url: 'https://www.credly.com/badges/2674074a-ec0c-4552-a106-9fd80fdec5ec' },
  { id: 8, icon: ShieldAlert, url: 'https://www.credly.com/badges/4587405b-23e9-4c02-9197-a43c5b1f332c' },
  { id: 9, icon: Network, url: 'https://www.credly.com/badges/fbcfd1ae-2721-486a-988d-d7445d797441' },
  { id: 10, icon: TerminalSquare },
  { id: 11, icon: ShieldAlert },
  { id: 12, icon: Code2 },
]

export function CertificationsSection() {
  const { t } = useLanguage()

  return (
    <section id="certificacoes" className="py-16 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">{t.certs.heading}</h3>
            <p
              className="text-sm text-gray-400 mb-12 max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: t.certs.subtitle }}
            />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {certsMeta.map((cert, index) => {
              const card = <motion.div
                key={cert.id}
                className="glass-card px-5 py-3 rounded-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <cert.icon className="w-5 h-5 text-accent-start" />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{t.certs.dates[cert.id]}</p>
                  <p className="text-sm font-bold text-white flex items-center gap-1">{t.certs.items[cert.id - 1]}{cert.url && <ExternalLink className="w-3 h-3 text-gray-400" aria-hidden="true" />}</p>
                </div>
              </motion.div>

              return cert.url ? <a key={cert.id} href={cert.url} target="_blank" rel="noreferrer" aria-label={`${t.certs.items[cert.id - 1]} — Credly`}>{card}</a> : card
            })}
          </div>
          <p className="mt-8 text-sm text-gray-400"><span className="font-bold text-gray-300">{t.certs.languagesHeading}</span> {t.certs.languages}</p>
        </div>
      </div>
    </section>
  )
}

