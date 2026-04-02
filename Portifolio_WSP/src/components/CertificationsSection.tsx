import { motion } from 'framer-motion'
import { ShieldAlert, Network, TerminalSquare, Lock, Code2 } from 'lucide-react'

const certs = [
  { id: 1, title: 'Cyber Threat Management', date: 'Cisco (Set/2025)', icon: ShieldAlert },
  { id: 2, title: 'Network Defense', date: 'Cisco (Abr/2025)', icon: Network },
  { id: 3, title: 'Linux Unhatched', date: 'Cisco (Out/2024)', icon: TerminalSquare },
  { id: 4, title: 'Endpoint Security', date: 'Cisco (Set/2024)', icon: Lock },
  { id: 5, title: 'C/C++ Advanced', date: 'Cisco (Abr/2025)', icon: Code2 },
]

export function CertificationsSection() {
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
            <h3 className="text-2xl font-bold text-white mb-4">Certificações de Infraestrutura & Cyber Defense</h3>
            <p className="text-sm text-gray-400 mb-12 max-w-2xl mx-auto">
              Base fundamentada pela <strong>Cisco Networking Academy</strong>, atestando domínio em arquitetura de redes, C/C++ e sistemas operacionais de baixo nível.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {certs.map((cert, index) => (
              <motion.div
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
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{cert.date}</p>
                  <p className="text-sm font-bold text-white">{cert.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
