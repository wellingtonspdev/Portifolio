# Portfólio Profissional — Wellington Siqueira Porto

> Aplicação autoral para transformar projetos, experiência, formação e pesquisa em evidências técnicas navegáveis para recrutadores.

[Ver portfólio online](https://wellingtonspdev.github.io/Portifolio/) · [LinkedIn](https://www.linkedin.com/in/wellingtonsp-dev) · [GitHub](https://github.com/wellingtonspdev) · [Baixar currículo](https://wellingtonspdev.github.io/Portifolio/docs/curriculo-wellington-siqueira-porto.pdf)

## Visão do produto

Este repositório não é apenas a página de apresentação profissional de Wellington Siqueira Porto: é um produto frontend público construído para apresentar contexto, decisões, tecnologias e evidências de cada case.

O objetivo é substituir uma apresentação baseada apenas em listas de skills por uma experiência que conecte trajetória acadêmica, estágio, pesquisa CNPq, projetos autorais e formas de contato. O público principal são recrutadores e equipes que avaliam candidaturas para estágio, trainee e desenvolvimento júnior em backend, full stack e aplicações web.

## O que a aplicação entrega

- Portfólio responsivo em português e inglês.
- Cases individuais com problema, solução, papel, processo e aprendizados.
- Trajetória acadêmica, iniciação científica CNPq e experiência prática na Fatec.
- Projetos autorais, acadêmicos e institucionais com links de código e demonstrações quando disponíveis.
- Currículo em PDF, LinkedIn, GitHub e contato direto por WhatsApp.
- Navegação visual com animações, fundo 3D interativo, carrosséis de screenshots e lightbox.
- SEO técnico com metadados por idioma, Open Graph, Twitter Cards, JSON-LD, robots, sitemap e páginas pré-renderizadas.
- Publicação automatizada no GitHub Pages.

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
| Experiência visual | Three.js, React Three Fiber, Drei, Framer Motion, Lenis | Fundo Deep Space, animações, transições e rolagem suave |
| Conteúdo | Dados TypeScript e i18n próprio | Cases e interface em PT-BR/EN |
| SEO | React Helmet Async | Metadados, canonical, Open Graph, Twitter Cards e JSON-LD |
| Interação | Embla Carousel, Lucide React | Carrosséis, lightbox e ícones acessíveis |
| Entrega | GitHub Actions, GitHub Pages | Build e deploy automatizados em `main` |

## Experiência visual e performance

O visual usa uma identidade Deep Space para diferenciar o produto sem esconder o conteúdo profissional. Elementos visuais incluem fundo 3D, partículas, animações de entrada, cards translúcidos, carrosséis de screenshots e lightbox para inspeção de telas.

O fundo gráfico é carregado de forma adiada e não é ativado quando o navegador informa preferência por redução de movimento. Imagens de carrosséis usam carregamento preguiçoso após o primeiro slide, e os assets locais são processados pelo Vite com nomes versionados no build.

## Cases apresentados

| Case | Evidência principal |
|---|---|
| Portfólio Profissional | React, TypeScript, Three.js, i18n, SEO e CI/CD em um produto público |
| Reserva de Laboratórios FATEC | Modernização incremental de sistema legado PHP/CodeIgniter para usuários institucionais |
| WSP Finance | Projeto autoral em evolução com Node.js, TypeScript, Express, Prisma e PostgreSQL |
| Define Pilates | Projeto acadêmico full stack e organização técnica de squad |
| Plataforma Ambiental IBDN | Projeto acadêmico de digitalização de processos ambientais |
| Pesquisa CNPq | Modelagem relacional, dados científicos e Greedy Best-First Search |

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

O Vite serve a aplicação localmente. Como o projeto usa a base `/Portifolio/`, acesse a URL exibida pelo terminal, normalmente `http://localhost:5173/Portifolio/`.

### Scripts

| Comando | Finalidade |
|---|---|
| `npm run dev` | Inicia o ambiente local Vite |
| `npm run build` | Executa TypeScript, build Vite e pré-renderização dos cases |
| `npm run prerender` | Gera apenas as páginas estáticas e o sitemap a partir do build existente |
| `npm run lint` | Executa ESLint no código TypeScript e TSX |

## Deploy

O workflow [deploy-pages.yml](.github/workflows/deploy-pages.yml) é acionado por pushes na branch `main`. Ele instala dependências, executa `npm run build`, publica o diretório `dist/` e disponibiliza o site no GitHub Pages.

## Contato

- E-mail: [wellingtonsp.dev@gmail.com](mailto:wellingtonsp.dev@gmail.com)
- LinkedIn: [wellingtonsp-dev](https://www.linkedin.com/in/wellingtonsp-dev)
- GitHub: [wellingtonspdev](https://github.com/wellingtonspdev)

© 2026 Wellington Siqueira Porto. Todos os direitos reservados.
