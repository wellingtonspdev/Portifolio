import { motion } from 'framer-motion'

const skills = [
  {
    icon: '⚙️',
    title: 'Backend & APIs',
    description: 'Python 3 (FastAPI, Django), Node.js (NestJS, Express), TypeScript, Java, microsserviços e monólitos modulares.',
    delay: 0,
  },
  {
    icon: '🧠',
    title: 'IA & Dados',
    description: 'RAG (Local e Nuvem), Google Vertex AI, GPT-4o Vision, Bancos Vetoriais (sqlite-vec), PostgreSQL (JSONB/RLS), Greedy Best-First Search.',
    delay: 0.1,
  },
  {
    icon: '💸',
    title: 'Cloud & FinOps',
    description: 'Cloudflare R2 (Zero Egress Fee), Docker, Redis, BullMQ, Transactional Outbox, KSM Linux e CI/CD.',
    delay: 0.2,
  },
  {
    icon: '🤖',
    title: 'Automação & RPA',
    description: 'Python RPA com Playwright e Headless-less Automation. Auto-healing de robôs via inferência visual GPT-4o Vision (substituição de seletores DOM). Plataformas SaaS de Remote Browser Isolation (RBI) de alta performance.',
    delay: 0.3,
  },
  {
    icon: '🔐',
    title: 'Segurança & Evasão',
    description: 'Bypass de Web Application Firewalls (Cloudflare/Akamai) via reconstrução de assinaturas TLS com curl_cffi (CFFI). Arquiteturas Zero-Trust, RBAC, JWT e conformidade com LGPD.',
    delay: 0.4,
  },
  {
    icon: '💡',
    title: 'Frontend & Soft Skills',
    description: 'React.js, Next.js, Tailwind CSS, Three.js, Framer Motion. Mentoria Técnica, Code Review Educativo, Debugging Humano e TDD.',
    delay: 0.5,
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Tech Stack & Competências</h2>
          <p className="text-lg text-gray-400 leading-relaxed italic">Stack validada por certificações Cisco e projetos reais em produção.</p>
        </div>

        {/* Uso de DL, DT, DD para Semântica ATS */}
        <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              className="glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: skill.delay }}
            >
              <dt className="font-bold text-accent-end mb-4 uppercase tracking-wider text-xs">
                {skill.icon} {skill.title}
              </dt>
              <dd className="text-sm text-gray-300 leading-relaxed">{skill.description}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
