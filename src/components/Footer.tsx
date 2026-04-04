import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer id="contato" className="py-20 border-t border-white/10 text-center relative z-10 bg-black/60 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tem um problema complexo? Vamos arquitetar a solução.
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-10 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Mail className="w-4 h-4" />
          wellingtonsp.dev@gmail.com
        </motion.p>

        <motion.div
          className="flex justify-center space-x-8 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="https://github.com/wellingtonspdev" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/wellingtonsp-dev" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300">
            <Linkedin className="w-8 h-8" />
          </a>
        </motion.div>

        <p className="text-[10px] text-gray-600 tracking-widest uppercase">
          © 2026 Wellington Siqueira Porto. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
