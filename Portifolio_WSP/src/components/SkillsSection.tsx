import { motion } from 'framer-motion'

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Tech Stack & Competências</h2>
          <p className="text-lg text-gray-400 leading-relaxed italic">Construídas em conformidade com métricas de extração semântica (ATS-friendly).</p>
        </div>

        {/* Uso de DL, DT, DD para Semântica ATS */}
        <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <dt className="font-bold text-accent-end mb-4 uppercase tracking-wider text-xs">⚙️ Backend & APIs</dt>
            <dd className="text-sm text-gray-300 leading-relaxed">Python 3 (FastAPI, Django), Node.js (NestJS, Express), TypeScript, Java, microsserviços e monólitos modulares.</dd>
          </motion.div>

          <motion.div
            className="glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <dt className="font-bold text-accent-end mb-4 uppercase tracking-wider text-xs">🧠 IA & Dados</dt>
            <dd className="text-sm text-gray-300 leading-relaxed">RAG (Local e Nuvem), Modelos Google Vertex AI, GPT-4o Vision, Bancos Vetoriais (sqlite-vec), PostgreSQL (JSONB/RLS).</dd>
          </motion.div>

          <motion.div
            className="glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <dt className="font-bold text-accent-end mb-4 uppercase tracking-wider text-xs">💸 Cloud & FinOps</dt>
            <dd className="text-sm text-gray-300 leading-relaxed">Cloudflare R2 (Zero Egress Fee), Docker, Filas (Redis, BullMQ), Transactional Outbox, KSM Linux e CI/CD.</dd>
          </motion.div>

          <motion.div
            className="glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <dt className="font-bold text-accent-end mb-4 uppercase tracking-wider text-xs">💡 Frontend & Soft Skills</dt>
            <dd className="text-sm text-gray-300 leading-relaxed">React.js, Next.js, Tailwind CSS. Mentoria Técnica, Code Review Educativo, Debugging Humano e TDD.</dd>
          </motion.div>
        </dl>
      </div>
    </section>
  )
}
