# 🚀 Portfólio — Wellington Siqueira Porto

Portfólio pessoal imersivo com tema espacial 3D, construído com **React**, **TypeScript**, **Three.js** e **Framer Motion**. Apresenta minha trajetória como Engenheiro Full Stack, Tech Lead e Pesquisador, com foco em arquiteturas AI-Native, Cloud FinOps e soluções de alta performance.

> **[🔗 Ver Online](https://wellingtonspdev.github.io/Portifolio/)**

---

## 👨‍💻 Sobre Mim

Engenheiro de Software Full Stack cursando o 4º semestre de **Desenvolvimento de Software Multiplataforma na FATEC Itaquera**. Pesquisador do **CNPq** com foco em Inteligência Artificial Aplicada e Algoritmos Estruturais. Tech Lead com experiência em TDD, CI/CD e liderança de equipes.

---

## 🛠️ Tech Stack do Portfólio

| Camada | Tecnologias |
|---|---|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 5 |
| **3D / Visual** | Three.js, React Three Fiber, React Three Drei |
| **Animações** | Framer Motion, Lenis (Smooth Scroll) |
| **Estilização** | Tailwind CSS 3 |
| **SEO** | React Helmet Async |
| **Ícones** | Lucide React |
| **Deploy** | GitHub Pages (via GitHub Actions) |

---

## 📂 Estrutura do Projeto

```
Portifolio/
├── .github/workflows/    # CI/CD (GitHub Actions)
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx        # Seção "Sobre Mim"
│   │   ├── CertificationsSection.tsx # Certificações
│   │   ├── Footer.tsx              # Rodapé com contato
│   │   ├── Hero.tsx                # Hero com efeito typewriter
│   │   ├── Layout.tsx              # Layout + Navbar
│   │   ├── ProjectCard.tsx         # Card de projeto individual
│   │   ├── ProjectSection.tsx      # Seção de projetos
│   │   ├── SEO.tsx                 # Meta tags e Open Graph
│   │   ├── SkillsSection.tsx       # Tech Stack & Competências
│   │   └── SpaceBackground.tsx     # Background 3D espacial (Three.js)
│   ├── data/
│   │   └── projects.ts            # Dados dos projetos
│   ├── App.tsx                    # Orquestrador principal
│   ├── index.css                  # Estilos globais
│   └── main.tsx                   # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🎯 Projetos em Destaque

### ⚡ Samurai Pro — Automação RBI
Redução de consumo de RAM de 900MB para <60MB por sessão em automação web com KSM Linux e auto-healing via GPT-4o Vision.
- **Tech:** Python, Docker, GPT-4o Vision

### 💰 WSP Finance — Cloud FinOps SaaS
Redução de 28% no OPEX de nuvem com Cofre Digital via Cloudflare R2 (Zero Egress Fee) e análise fiscal com Google Vertex AI.
- **Tech:** Node.js, PostgreSQL (RLS), Cloudflare R2

### 🏥 VIVA Telemetria — HealthTech
Blindagem do Event Loop com Transactional Outbox + BullMQ/Redis e motor RAG Local on-premise com <30MB de RAM.
- **Tech:** NestJS, BullMQ, sqlite-vec

### 🧘‍♀️ Define Pilates — SaaS B2B
Liderança de equipe de 8 devs com 100% de cobertura em testes core e isolamento Multi-tenant via PostgreSQL JSONB.
- **Tech:** Django REST, React, TDD
- [Ver Demo](https://pi-3-semestre.github.io/Demo-Define-Pilates/) | [Código](https://github.com/PI-3-Semestre/projeto-estudio-pilates.git)

### 🌿 Plataforma Ambiental IBDN
Solução full stack com RBAC e JWT para modernizar a emissão de certificados ambientais.
- **Tech:** FastAPI, MySQL, React, Zustand

### 🔬 Análise Óptica & IA — Pesquisa CNPq
Algoritmos de Greedy Best-First Search para classificação de rugosidade de solo via Interferometria Speckle.
- **Tech:** Python, Computer Vision, IA Estrutural

---

## ⚙️ Competências Técnicas

| Área | Tecnologias |
|---|---|
| **Backend & APIs** | Python 3 (FastAPI, Django), Node.js (NestJS, Express), TypeScript, Java |
| **IA & Dados** | RAG, Google Vertex AI, GPT-4o Vision, Bancos Vetoriais (sqlite-vec), PostgreSQL (JSONB/RLS) |
| **Cloud & FinOps** | Cloudflare R2, Docker, Redis, BullMQ, Transactional Outbox, KSM Linux, CI/CD |
| **Frontend** | React.js, Next.js, Tailwind CSS, Three.js, Framer Motion |
| **Liderança** | Mentoria Técnica, Code Review Educativo, TDD, Debugging Humano |

---

## 🚀 Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/wellingtonspdev/Portifolio.git

# Instale as dependências
cd Portifolio
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

---

## 📫 Contato

- **Email:** wellingtonsp.dev@gmail.com
- **LinkedIn:** [wellingtonsp-dev](https://www.linkedin.com/in/wellingtonsp-dev)
- **GitHub:** [wellingtonspdev](https://github.com/wellingtonspdev)

---

© 2026 Wellington Siqueira Porto. Todos os direitos reservados.
