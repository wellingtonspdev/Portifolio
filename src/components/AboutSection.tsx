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
              Sou um <strong>Engenheiro de Software Full Stack e Arquiteto AI-Native</strong> especializado na construção de sistemas distribuídos resilientes e financeiramente otimizados. Projeto arquiteturas orientadas a negócio — de monólitos modulares com isolamento <strong>Zero-Trust via RLS</strong> até motores de <strong>Edge AI com RAG local</strong> — tomando decisões guiadas por <strong>Cloud FinOps</strong> e Unit Economics. Cada escolha de stack tem uma justificativa de custo-benefício: do armazenamento com <strong>Zero Egress Fee</strong> à desduplicação de memória em nível de SO, o objetivo é sempre escalar sem que a infraestrutura devore a margem.
            </p>
            <p>
              Cursando <strong>Desenvolvimento de Software Multiplataforma na FATEC Itaquera</strong>, atuei como <strong>Tech Lead no projeto interdisciplinar Define Pilates</strong>, liderando um squad multidisciplinar com foco em <strong>TDD e CI/CD</strong>. Minha base técnica é validada por certificações oficiais da <strong>Cisco Networking Academy</strong> em C/C++, Defesa de Rede e arquiteturas <strong>Zero-Trust</strong>, sustentando a entrega de backends resilientes em <strong>Node.js e Python</strong> e interfaces de alta performance em <strong>React.js</strong> e <strong>Flutter</strong>.
            </p>
            <p>
              Atuo como pesquisador em um <strong>projeto de pesquisa patrocinado pelo CNPq</strong>, aplicando algoritmos de busca determinísticos (<strong>Greedy Best-First Search</strong>) ao processamento eficiente de grandes volumes de dados — construindo a base matemática que torna sistemas de IA previsíveis e auditáveis antes de qualquer chamada a um LLM externo. Meu vetor aponta para a intersecção entre infraestrutura resiliente, inteligência artificial aplicada e produtos que resolvem problemas reais em mercados complexos — <strong>FinTech, HealthTech e AgriTech</strong>. Se o seu desafio é escalar uma arquitetura crítica sem explodir o OPEX ou construir um produto de IA confiável o suficiente para operar na vida real das pessoas, essa é exatamente a conversa que quero ter.
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
