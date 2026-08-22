import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShieldAlert,
  Network,
  TerminalSquare,
  Lock,
  Code2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Award,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { useLanguage } from '../i18n'
import type { CiscoCertItem, FatecBadgeItem } from '../i18n/types'

const ciscoIcons: Record<number, React.ComponentType<{ className?: string }>> = {
  1: Code2,
  2: Code2,
  3: Code2,
  4: Code2,
  5: Code2,
  6: Code2,
  7: Lock,
  8: ShieldAlert,
  9: Network,
  10: TerminalSquare,
  11: ShieldAlert,
}

export function CertificationsSection() {
  const { t } = useLanguage()
  const [expandedBadges, setExpandedBadges] = useState<Record<string, boolean>>({})

  const toggleBadge = (id: string) => {
    setExpandedBadges((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`

  return (
    <section id="certificacoes" className="py-24 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">{t.certs.heading}</h2>
            <p
              className="text-base text-gray-400 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.certs.subtitle }}
            />
          </motion.div>

          {/* Seção 1: Badges & Qualificações da Fatec / CPS */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{t.certs.fatecHeading}</h3>
                <p className="text-sm text-gray-400 mt-0.5">{t.certs.fatecSubtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.certs.fatecBadges.map((badge: FatecBadgeItem, index: number) => {
                const isExpanded = !!expandedBadges[badge.id]
                const imageSrc = badge.image ? `${baseUrl}${badge.image.replace(/^\//, '')}` : null

                return (
                  <motion.div
                    key={badge.id}
                    className="glass-card rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-500/40 hover:bg-white/[0.07] transition-all backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                  >
                    <div>
                      {/* Top Header do Card: Imagem/Ícone do Badge e Tipo */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        {imageSrc ? (
                          <div className="relative group">
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 blur group-hover:opacity-50 transition duration-300" />
                            <img
                              src={imageSrc}
                              alt={badge.title}
                              className="relative w-16 h-16 object-contain rounded-xl bg-black/40 p-1 border border-white/15 drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="relative">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-950/80 to-blue-950/80 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                              <ShieldCheck className="w-8 h-8 text-cyan-400" />
                            </div>
                          </div>
                        )}

                        <span className="inline-flex items-center text-right px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-950/80 text-cyan-300 border border-cyan-500/40">
                          {badge.type}
                        </span>
                      </div>

                      {/* Título & Emissor */}
                      <h4 className="text-lg font-bold text-white leading-snug">{badge.title}</h4>
                      <p className="text-xs font-semibold text-accent-end mt-1">{badge.issuer}</p>

                      {/* Descrição */}
                      <p className="text-xs text-gray-300 leading-relaxed mt-3">{badge.description}</p>

                      {/* Acordeão de Competências */}
                      {badge.competencies && badge.competencies.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <button
                            type="button"
                            onClick={() => toggleBadge(badge.id)}
                            className="w-full flex items-center justify-between text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors py-1 focus:outline-none cursor-pointer"
                            aria-expanded={isExpanded}
                          >
                            <span className="flex items-center gap-1.5">
                              {t.certs.competenciesLabel} ({badge.competencies.length})
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-cyan-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-cyan-400" />
                            )}
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className="space-y-2 mt-3 overflow-hidden"
                              >
                                {badge.competencies.map((comp: string, i: number) => (
                                  <li key={i} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                                    <span>{comp}</span>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-white/10">
                      {badge.badgeUrl && (
                        <a
                          href={badge.badgeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-cyan-300" />
                          <span>{t.certs.viewBadgeLabel}</span>
                        </a>
                      )}

                      {badge.authenticatorUrl && (
                        <a
                          href={badge.authenticatorUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md shadow-cyan-950/50 transition-all border border-cyan-400/30"
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{t.certs.authenticateLabel}</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Seção 2: Certificações Cisco Networking Academy & Cyber Defense */}
          <div className="pt-8 border-t border-white/5">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-2">{t.certs.ciscoHeading}</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {t.certs.ciscoCerts.map((cert: CiscoCertItem, index: number) => {
                const IconComponent = ciscoIcons[cert.id] || Code2
                const card = (
                  <motion.div
                    key={cert.id}
                    className="glass-card px-5 py-3 rounded-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-start/40 transition-colors backdrop-blur-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    whileHover={{ y: -2, scale: 1.03 }}
                  >
                    <IconComponent className="w-4 h-4 text-accent-start shrink-0" />
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{cert.issuer}</p>
                      <p className="text-xs md:text-sm font-bold text-white flex items-center gap-1.5">
                        {cert.name}
                        {cert.url && <ExternalLink className="w-3 h-3 text-gray-400" aria-hidden="true" />}
                      </p>
                    </div>
                  </motion.div>
                )

                return cert.url ? (
                  <a
                    key={cert.id}
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${cert.name} — Credly`}
                  >
                    {card}
                  </a>
                ) : (
                  card
                )
              })}
            </div>

            <p className="mt-12 text-center text-sm text-gray-400">
              <span className="font-bold text-gray-300">{t.certs.languagesHeading}</span> {t.certs.languages}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
