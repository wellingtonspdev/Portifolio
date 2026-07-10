import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const siteUrl = 'https://wellingtonspdev.github.io/Portifolio/'
const dist = 'dist'
const projects = [
  ['reserva-laboratorios-fatec', 'Reserva de Laboratórios FATEC', 'PHP, CodeIgniter 3, MySQL/MariaDB e UX mobile para evoluir um sistema legado de reservas.', 'FATEC laboratory booking modernization with PHP, CodeIgniter 3, MySQL/MariaDB, and mobile UX.'],
  ['wsp-finance', 'WSP Finance', 'Backend SaaS com Node.js, TypeScript, Express, Prisma e PostgreSQL para gestão financeira.', 'SaaS backend with Node.js, TypeScript, Express, Prisma, and PostgreSQL for financial management.'],
  ['define-pilates', 'Define Pilates SaaS', 'Projeto Full Stack com Django, React, TDD e liderança técnica acadêmica.', 'Full Stack project with Django, React, TDD, and academic technical leadership.'],
  ['ibdn-plataforma', 'Plataforma Ambiental IBDN', 'Plataforma Full Stack para digitalização de processos ambientais e governança ESG.', 'Full Stack platform for environmental process digitization and ESG governance.'],
  ['cnpq-research', 'Pesquisa CNPq', 'Pesquisa aplicada em dados científicos, Speckle e algoritmo Greedy Best-First Search.', 'Applied research in scientific data, Speckle, and Greedy Best-First Search.'],
]

const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const script = (html) => html.match(/<script type="module"[^>]*><\/script>/)?.[0] ?? ''
const stylesheet = (html) => html.match(/<link rel="stylesheet"[^>]*>/)?.[0] ?? ''
const page = ({ lang, path, title, description, body }) => { const localizedPath = path.replace(/^en\//, ''); return `<!DOCTYPE html><html lang="${lang}" class="scroll-smooth"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${globalThis.stylesheet}<meta name="description" content="${escape(description)}"><link rel="canonical" href="${siteUrl}${path}"><link rel="alternate" hreflang="pt-BR" href="${siteUrl}${localizedPath}"><link rel="alternate" hreflang="en" href="${siteUrl}en/${localizedPath}"><meta property="og:type" content="website"><meta property="og:url" content="${siteUrl}${path}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:image" content="${siteUrl}og-image.png"><title>${escape(title)}</title></head><body class="bg-[#030014] text-gray-200 font-sans antialiased"><div id="root"><main class="relative z-10 mx-auto min-h-screen max-w-4xl px-6 py-32"><p class="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Wellington Siqueira Porto</p><h1 class="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">${escape(title)}</h1><p class="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">${escape(description)}</p>${body}</main></div>${globalThis.appScript}</body></html>` }

const source = await readFile(join(dist, 'index.html'), 'utf8')
globalThis.appScript = script(source)
globalThis.stylesheet = stylesheet(source)
const urls = []
const write = async (path, html) => { const output = join(dist, path, 'index.html'); await mkdir(dirname(output), { recursive: true }); await writeFile(output, html); urls.push(path) }

await write('', page({ lang: 'pt-BR', path: '', title: 'Wellington Siqueira Porto | Desenvolvedor de Software Júnior', description: 'Desenvolvedor de Software Júnior com experiência em Full Stack, Backend, aplicações web, estágio Fatec e pesquisa aplicada.', body: '<p>Projetos, experiência técnica e currículo profissional.</p>' }))
await write('en', page({ lang: 'en', path: 'en/', title: 'Wellington Siqueira Porto | Junior Software Developer', description: 'Junior Software Developer with hands-on experience in Full Stack, Backend, web applications, FATEC internship, and applied research.', body: '<p>Projects, hands-on experience, and professional résumé.</p>' }))
for (const [slug, name, pt, en] of projects) {
  await write(`projetos/${slug}`, page({ lang: 'pt-BR', path: `projetos/${slug}/`, title: `${name} | Wellington Siqueira Porto`, description: pt, body: `<h2>Case de projeto</h2><p>${escape(pt)}</p>` }))
  await write(`en/projetos/${slug}`, page({ lang: 'en', path: `en/projetos/${slug}/`, title: `${name} | Wellington Siqueira Porto`, description: en, body: `<h2>Project case</h2><p>${escape(en)}</p>` }))
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${siteUrl}${url ? `${url}/` : ''}</loc></url>`).join('\n')}\n</urlset>\n`
await writeFile(join(dist, 'sitemap.xml'), sitemap)
