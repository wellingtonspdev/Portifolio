import { motion } from 'framer-motion'
import { Users, HeartHandshake, Cpu } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-10 text-center">
            Sobre Mim
          </h2>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-medium bg-black/20 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
            <p>
              Sou um <strong>Engenheiro de Software Full Stack</strong> focado em construir soluções eficientes, cursando o 4º semestre de Desenvolvimento de Software Multiplataforma na FATEC Itaquera. Como <strong>Pesquisador do CNPq</strong>, aplico métodos de Inteligência Artificial e Algoritmos Estruturais (Greedy Best-First Search) no processamento de grandes volumes de dados.
            </p>
            <p>
              Minha trajetória foge do convencional: antes de arquitetar sistemas, passei mais de 5 anos na linha de frente do varejo. Essa experiência me ensinou o verdadeiro significado de <strong>"Debugging Humano"</strong> e <strong>Empatia Operacional</strong> — a capacidade de gerenciar stakeholders, manter o foco na experiência do cliente (CX) e resolver crises sob extrema pressão.
            </p>
            <p>
              Atuando como <strong>Tech Lead</strong>, orquestro times focados em TDD e CI/CD. Minha base sólida técnica é validada por certificações oficiais da Cisco Networking Academy em C/C++, Defesa de Rede e arquiteturas Zero-Trust, garantindo a entrega não apenas de interfaces rápidas com React.js, mas de backends resilientes e eficientes em Node.js e Python.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Users className="w-10 h-10 text-accent-start mb-4" />
              <h4 className="font-bold text-white mb-2">Debugging Humano</h4>
              <p className="text-sm text-gray-400">Análise de causa raiz para resolver conflitos sob alta pressão e garantir SLAs eficientes, com foco no CX.</p>
            </motion.div>

            <motion.div
              className="glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ delay: 0.1 }}
            >
              <HeartHandshake className="w-10 h-10 text-blue-400 mb-4" />
              <h4 className="font-bold text-white mb-2">Impacto Social</h4>
              <p className="text-sm text-gray-400">Uso de tecnologia e IA para democratizar o acesso e solucionar problemas reais da sociedade e mercado.</p>
            </motion.div>

            <motion.div
              className="glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ delay: 0.2 }}
            >
              <Cpu className="w-10 h-10 text-indigo-400 mb-4" />
              <h4 className="font-bold text-white mb-2">IA Determinística</h4>
              <p className="text-sm text-gray-400">Isolamento de modelos semânticos do motor de regras matemáticas de negócio para zerar alucinações.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
