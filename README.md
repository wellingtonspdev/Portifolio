# Portfólio Profissional — Wellington Siqueira Porto

> Aplicação autoral para transformar projetos, experiência, formação e pesquisa em evidências técnicas navegáveis para recrutadores.

[Ver portfólio online](https://wellingtonsp.uk/) · [LinkedIn](https://www.linkedin.com/in/wellingtonsp-dev) · [GitHub](https://github.com/wellingtonspdev) · [Baixar currículo](https://wellingtonsp.uk/docs/curriculo-wellington-siqueira-porto.pdf)

## Visão do produto

Este repositório não é apenas a página de apresentação profissional de Wellington Siqueira Porto: é um produto frontend público construído para apresentar contexto, decisões, tecnologias e evidências de cada case.

O objetivo é substituir uma apresentação baseada apenas em listas de skills por uma experiência que conecte trajetória acadêmica, estágio, pesquisa CNPq, projetos autorais e formas de contato. O público principal são recrutadores e equipes que avaliam candidaturas para estágio, trainee e desenvolvimento júnior em backend, full stack e aplicações web.

## O que a aplicação entrega

- Portfólio responsivo em português e inglês.
- Cases individuais com problema, solução, papel, processo e aprendizados.
- Trajetória acadêmica, iniciação científica CNPq e experiência prática na Fatec.
- Projetos autorais, acadêmicos e institucionais com links de código e demonstrações quando disponíveis.
- Currículo em PDF, LinkedIn, GitHub e contato direto por WhatsApp.
- Navegação com conteúdo imediato, fundo 3D opcional, carrosséis com carregamento sob demanda e lightbox.
- SEO técnico com metadados por idioma, Open Graph, Twitter Cards, JSON-LD, robots, sitemap e páginas pré-renderizadas.
- Publicação automatizada na Vercel e previews para validar alterações.

## Arquitetura

```text
src/
├── components/      # Seções da página, cards, cases, SEO e layout
├── data/            # Dados dos projetos e competências indexadas
├── i18n/            # Tipos, contexto de idioma e conteúdos PT-BR/EN
├── assets/          # Logos, screenshots e recursos visuais locais
├── routing.ts       # Rotas dos cases individuais
└── App.tsx          # Composição da experiência principal

scripts/
└── generate-static-pages.mjs  # Pré-renderização de home e cases
```

Os projetos são modelados em dados reutilizáveis. Isso permite que o card, a página individual, os links e os conteúdos em dois idiomas permaneçam consistentes sem duplicar estrutura de interface.

## Stack e decisões técnicas

| Camada | Tecnologias | Aplicação no produto |
|---|---|---|
| Interface | React 18, TypeScript, Vite | Componentização, tipagem e build rápido |
| Estilo | Tailwind CSS, clsx | Layout responsivo e variações visuais reutilizáveis |
| Experiência visual | Three.js, React Three Fiber, Drei, Framer Motion | Fundo Deep Space sob demanda e animações responsivas |
| Conteúdo | Dados TypeScript e i18n próprio | Cases e interface em PT-BR/EN |
| SEO | React Helmet Async | Metadados, canonical, Open Graph, Twitter Cards e JSON-LD |
| Interação | Embla Carousel, Lucide React | Carrosséis, lightbox e ícones acessíveis |
| Entrega | Vercel, GitHub Actions | Produção pela integração com o GitHub; CI para validar alterações |

## Experiência visual e performance

O visual usa uma identidade Deep Space para diferenciar o produto sem esconder o conteúdo profissional. O fundo 3D é opcional e fica desligado ao entrar; a navegação funciona sem inicializar WebGL.

Screenshots usam carregamento preguiçoso e efeitos decorativos em CSS. Assets versionados têm cache de longa duração; o HTML inicial mantém o portfólio visível enquanto o JavaScript carrega.

## Cases apresentados

| Case | Evidência principal |
|---|---|
| Portfólio Profissional | React, TypeScript, Three.js, i18n, SEO e CI/CD em um produto público |
| Reserva de Laboratórios FATEC | Atuação end-to-end em análise, planejamento, frontend, backend, Docker, documentação e validação |
| WSP Finance | Projeto 100% autoral — único desenvolvedor, com Node.js, TypeScript, Express, Prisma, PostgreSQL e React |
| Define Pilates | Tech Lead Acadêmico + Desenvolvedor Full Stack + QA em projeto interdisciplinar |
| Plataforma Ambiental IBDN | Contribuição transversal full stack em projeto acadêmico de digitalização ambiental |
| Pesquisa CNPq | Experimentos em laboratório, dados experimentais, Greedy Best-First Search e apresentação em 2 simpósios |

Cada case tem uma rota própria em `/projetos/<slug>/` e equivalente em inglês em `/en/projetos/<slug>/`.

## Internacionalização

O conteúdo público é mantido em português e inglês. A troca de idioma atualiza a rota para preservar a página ou case em que a pessoa está navegando. Metadados e conteúdo de projetos também são localizados, evitando que uma página em inglês apresente textos de descoberta em português.

## SEO e descoberta

- Meta title e description por idioma.
- Canonical e links `hreflang` para PT-BR e EN.
- Open Graph e Twitter Cards para compartilhamento.
- JSON-LD com `Person`, `WebSite` e `ProfilePage`.
- `robots.txt` e sitemap.
- Pré-renderização de home e páginas de cases durante o build, para que a primeira leitura e os rastreadores recebam conteúdo descritivo sem depender da execução do JavaScript.

## Evolução do produto

| Período | Evolução comprovada no histórico Git |
|---|---|
| Abril de 2026 | Base visual do portfólio e identidade Deep Space |
| Abril de 2026 | Carrosséis de projetos, internacionalização e melhorias de WebGL |
| Junho de 2026 | Revisão da vitrine de projetos e visualização de screenshots |
| Julho de 2026 | Experiência profissional, currículo, SEO, rotas estáticas e descoberta |
| Julho de 2026 | Formação, pesquisa aplicada, experiência complementar e cases mais precisos |
| Próxima evolução | Case do próprio portfólio e documentação técnica ampliada |

## Executar localmente

```bash
git clone https://github.com/wellingtonspdev/Portifolio.git
cd Portifolio
npm install
npm run dev
```

O Vite serve a aplicação na raiz `/`. Acesse `http://localhost:5173/`.

### Scripts

| Comando | Finalidade |
|---|---|
| `npm run dev` | Inicia o ambiente local Vite |
| `npm run build` | Executa TypeScript, build Vite e pré-renderização dos cases |
| `npm run prerender` | Gera apenas as páginas estáticas e o sitemap a partir do build existente |
| `npm run lint` | Executa ESLint no código TypeScript e TSX |

## Deploy

O projeto é preparado para publicar por meio da integração Git da Vercel, com build `npm run build` e saída `dist/`. O workflow [deploy-pages.yml](.github/workflows/deploy-pages.yml) permanece ativo até o domínio e a publicação da Vercel serem verificados.

## Contato

- E-mail: [wellingtonsp.dev@gmail.com](mailto:wellingtonsp.dev@gmail.com)
- LinkedIn: [wellingtonsp-dev](https://www.linkedin.com/in/wellingtonsp-dev)
- GitHub: [wellingtonspdev](https://github.com/wellingtonspdev)

© 2026 Wellington Siqueira Porto. Todos os direitos reservados.
