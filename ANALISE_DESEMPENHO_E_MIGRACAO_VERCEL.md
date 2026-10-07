# Análise de desempenho e plano de migração para a Vercel

Data: 06/10/2026 — America/Sao_Paulo. Escopo: diagnóstico e planejamento, sem alterações no produto ou na infraestrutura.

## Decisão proposta

Manter uma única publicação de produção na Vercel, usando `https://wellingtonsp.uk/` como endereço oficial. Manter a administração do DNS na Cloudflare e alterar somente os registros necessários ao site. Corrigir os gargalos do frontend antes da troca definitiva de hospedagem.

Os dois provedores entregam os mesmos bundles públicos: trocar o DNS não elimina os atrasos programados, o processamento contínuo de WebGL ou o custo dos carrosséis. A prioridade é tornar conteúdo e navegação disponíveis independentemente dos efeitos visuais.

## Evidências e limites da análise

| Verificação | Resultado | Evidência |
|---|---|---|
| Domínio oficial atual | PASS | `wellingtonsp.uk` responde HTTP 200 com `Server: GitHub.com`; API Pages informa `cname: wellingtonsp.uk`, `build_type: workflow`, HTTPS habilitado. |
| DNS atual | PASS | Apex: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; TTL observado: 300 s. `www` é CNAME para `wellingtonspdev.github.io`, também com TTL 300 s. |
| Administração DNS | PASS | NS públicos: `harmony.ns.cloudflare.com` e `salvador.ns.cloudflare.com`. Isso identifica o serviço DNS, não comprova acesso à conta ou ao registrador. |
| Vercel pública | PASS | URL fornecida pelo usuário: `https://portifolio-three-sage-36.vercel.app/`. Home, `/en/`, `/projetos/reserva-laboratorios-fatec/` e PDF retornaram 200. PDF: `application/pdf`, 85.453 bytes. |
| Proveniência dos deploys | PASS | GitHub registra Pages e Vercel Production no SHA `8dfef8f76fc66306e7014f5a621635863829432c`. Status de Production emitido por `vercel[bot]`. Bundles públicos dos dois hosts têm hashes iguais. |
| Navegação publicada | PASS, amostra | No navegador, home do Pages → case Reserva de Laboratórios funcionou e exibiu o conteúdo esperado. Home da Vercel também abriu. Sem erros/warnings de console capturados na amostra do Pages. |
| SEO no domínio final | FAIL | HTML e DOM públicos continuam usando `https://wellingtonspdev.github.io/Portifolio/` como canonical. Sitemap e robots também apontam para a origem antiga. |
| Código local | PARTIAL | Branch `fix/sync-intro-animation`, HEAD `8dfef8f`; há alterações locais preexistentes em sete arquivos rastreados, além de `.agents/`, `DESIGN.md` e `src/context/`. Não correspondem integralmente ao que está publicado. |
| TypeScript e lint locais | PASS | `tsc --noEmit` sem diagnósticos; `npm run lint` concluído com código 0. |
| Build Vite local | PASS | Build de produção gerado em pasta temporária, sem sobrescrever `dist` existente. 2.284 módulos; alerta de chunk acima de 500 kB. A primeira tentativa de esbuild foi bloqueada pelo sandbox; repetição autorizada concluiu. |
| Pipeline completo local | NOT TESTED | O build temporário mediu a etapa Vite; o comando completo `npm run build`, com geração de páginas, não foi executado nesta auditoria. |
| LCP, INP, CLS, FPS e uso de CPU/GPU | NOT TESTED | Não houve trace de Performance, Lighthouse, coleta de usuários reais ou teste em celular físico. Não há nota de performance nem percentual de melhora comprovados. |
| Painéis administrativos | NOT TESTED | Configurações internas de produção/domínios da Vercel e zona completa Cloudflare não foram inspecionadas. Destinos novos de DNS devem vir do painel do projeto. |

O endereço imutável de um deployment da Vercel encontrado no GitHub redirecionou para login. Isso não significa que a produção esteja indisponível: o alias público fornecido pelo usuário respondeu corretamente.

Medições HTTP pontuais: Vercel home ~96 ms de TTFB; Pages `/en/` ~208 ms e case ~230 ms; endereço GitHub com redirecionamento ~552 ms. São requisições únicas, com condições diferentes, e não um benchmark comparável. Resposta HTTP rápida não mede fluidez no navegador.

### Recursos públicos idênticos

Tamanhos abaixo são dos conteúdos obtidos por HTTP, não uma medição do tráfego comprimido de um navegador.

| Recurso | Bytes | SHA-256 do conteúdo UTF-8, igual nos dois hosts |
|---|---:|---|
| `/assets/index-BdsTxKaI.js` | 442.000 | `E74C9F90A3204CEAA952CA727A7C8AD0EC2D6B875F989D383AFBEF1E5E743CF7` |
| `/assets/SpaceBackground-BR9QfFqR.js` | 881.980 | `AD1ADF3A46E96FEDCD5BB3C1C36220F2B81164EBE53D9BFA482B7628180FAF50` |
| `/sitemap.xml` | 1.433 | `D615AEF3E5BA7B676DFD3C5F3A6B749C6AF6AA00376B75766A50E60DB32909AD` |
| `/robots.txt` | 90 | `E920AF3CC55E3AB25C62E585F1A20AAA715B1CAB102BD6D993A497DB32F7EE29` |

No build local atual: JS principal 442,40 kB / gzip estimado 138,41 kB; fundo 3D 882,34 kB / gzip estimado 235,93 kB. O fundo é um chunk separado, mas isso não reduz seu custo quando é carregado e executado logo na abertura.

## Achados por prioridade

### P1 — Abertura depende de espera visual

**Confirmado em produção:** o bundle público contém `delay:4.5` no header e `entranceDelay: ... 4.5` no Hero. No HEAD, `src/components/Hero.tsx` anima a entrada por 1,2 s após essa espera, e `Layout.tsx` também posterga o header. A sensação de demora tem uma causa deliberada no código, além de qualquer custo de download/renderização.

**Confirmado apenas no código local modificado:** `src/context/IntroContext.tsx:42` usa um timer de contingência de 4,5 s; a linha 58 bloqueia a rolagem com `overflow: hidden`. `App.tsx`, `Hero.tsx` e `Layout.tsx` ocultam conteúdo ou navegação enquanto a intro não termina. O timer não garante liberação em 4,5 s quando a thread principal está ocupada. Esse mecanismo de bloqueio local não foi encontrado no bundle público analisado.

Correção proposta: mostrar título, ações e navegação desde a primeira renderização; remover a dependência funcional da intro. Preservar a identidade espacial com fundo estático inicial e animação opcional, sem impedir scroll, foco, links ou leitura. Evitar que o React substitua o HTML estático inicial por conteúdo invisível.

### P1 — Custo gráfico contínuo durante a utilização

`SpaceBackground.tsx:152` define 25.000 partículas de galáxia no desktop ou 8.000 no mobile; a linha 305 adiciona 10.000 ou 4.000 estrelas: aproximadamente 35.000/12.000 pontos. O Canvas usa DPR 1,5 no desktop, renderização contínua padrão e `powerPreference: high-performance`; Bloom e Noise permanecem ativos. Isso também existe no HEAD compatível com os bundles publicados.

As constelações filtram candidatos e criam vetor/array a cada frame, com laços para conectar pares (`SpaceBackground.tsx:473`). Os buffers de linhas já são pré-alocados e limitados a 80 conexões: não há evidência de que cada partícula seja um draw call ou de que todas as 35.000 participem desse cálculo.

Correção proposta: fundo estático como padrão no mobile; perfil desktop leve com DPR limitado, menos partículas e pós-processamento opcional. Oferecer controle de efeitos; considerar redução de movimento e economia de dados quando disponíveis. Aplicar qualidade adaptativa com base em medições, e reagir a resize em vez de classificar mobile uma única vez na carga do módulo.

Suspender efeitos quando a aba estiver oculta, reduzir cálculos de constelações e reutilizar objetos. Tratar indisponibilidade/perda de contexto WebGL e erro de importação com fallback estático. Renderização sob demanda é adequada ao perfil estático; um shader animado por tempo exige invalidações controladas, portanto trocar apenas `frameloop` não basta. [Referência técnica: React Three Fiber](https://r3f.docs.pmnd.rs/advanced/scaling-performance).

**Limite:** o custo foi identificado estaticamente; sua contribuição exata para FPS e travamentos precisa de trace e comparação com efeitos desativados.

### P1 — Loop de rolagem não é cancelado

`src/App.tsx:81` agenda recursivamente `requestAnimationFrame`; o cleanup na linha 87 destrói Lenis, mas não cancela o frame. O mesmo padrão está no bundle publicado. Há risco de loop sobrevivente após desmontagem; em desenvolvimento, StrictMode pode expor loops extras. Isso não comprova duplicação permanente em produção nem vazamento de memória medido.

Correção proposta: testar scroll nativo como padrão. Se Lenis permanecer, guardar/cancelar o RAF, ter apenas uma instância, respeitar redução de movimento e validar âncoras, teclado, back/forward e lightbox. O scroll de um modal aberto deve continuar bloqueado pelo próprio modal, não pela intro.

### P2 — Imagens decorativas anulam parte do carregamento preguiçoso

`ProjectCard.tsx:102` repete cada screenshot em uma imagem decorativa com `blur-2xl`, sem `loading="lazy"`; a imagem principal do mesmo slide usa lazy nas linhas 108/121. Na home pública, as imagens decorativas dos slides estavam carregadas enquanto várias das principais ainda permaneciam lazy.

Isso não implica dois downloads obrigatórios do mesmo URL: o navegador pode compartilhar o recurso. Implica carregamento antecipado e composição visual adicional. Os screenshots usados no build têm aproximadamente 39–124 kB; arquivos maiores existentes em `src/assets` que não foram emitidos não devem ser tratados como custo de produção.

Correção proposta: trocar o fundo duplicado por gradiente/CSS ou miniatura leve, carregar a galeria quando o card se aproximar da viewport e reservar dimensões. Usar thumbnails responsivas em WebP/AVIF após comparar qualidade e tamanho; carregar resolução completa apenas no lightbox. Pausar autoplay fora da viewport, em aba oculta, em redução de movimento e quando houver interação/foco. O autoplay atual está configurado com `stopOnInteraction: false`.

### P2 — Cache e referências de publicação precisam de ajuste

Na amostra HTTP, a Vercel enviou `Cache-Control: public, must-revalidate, max-age=0` também para os bundles versionados; Pages enviou `max-age=600`. Planejar cache longo e `immutable` apenas para assets cujo nome contém hash, mantendo HTML revalidável. Confirmar cabeçalhos e transferência comprimida no navegador após o deploy. Não há evidência suficiente para afirmar que Brotli/gzip esteja desativado.

`SEO.tsx:8`, `scripts/generate-static-pages.mjs:4`, `index.html`, `public/robots.txt`, `public/sitemap.xml` e README mantêm a origem GitHub. Atualizar canonical, hreflang, OG, JSON-LD, sitemap, currículo e documentação para `https://wellingtonsp.uk/`, inclusive no HTML gerado.

O gerador atual produz páginas resumidas próprias e o cliente usa `createRoot`, não hidratação desse mesmo conteúdo. Validar visualmente a passagem HTML → React; melhorar essa continuidade antes de uma eventual mudança arquitetural. Não é necessário migrar para Next.js para realizar as correções propostas.

## Plano de execução

| Etapa | Trabalho concreto | Critério para avançar |
|---|---|---|
| 1. Baseline e preservação | Registrar alterações locais preexistentes; definir quais entram na entrega. Medir build servido em produção, não apenas servidor dev. Coletar traces de abertura, scroll, galerias e navegação nos dois perfis visuais. | Baseline reproduzível com dispositivo, viewport, rede/CPU, cache e versão registrados. |
| 2. Abertura e scroll — P1 | Remover espera e bloqueio da intro; fundo inicial estático; tratamento de erro WebGL; scroll nativo ou RAF corretamente encerrado. | Conteúdo/ações disponíveis sem aguardar o 3D, inclusive com recurso gráfico bloqueado e redução de movimento. |
| 3. Efeitos e galerias — P1/P2 | Implementar perfis gráficos e pausa; reduzir pós-processamento; corrigir imagens decorativas, autoplay e thumbnails. Separar carregamentos opcionais onde a medição justificar. | Traces demonstram redução de trabalho; galerias, teclado, lightbox e cases continuam funcionando. |
| 4. Preparação Vercel e SEO | Configurar Vite, build `npm run build`, saída `dist`, raiz correta e branch de produção verificada; consolidar URL oficial e cache. Preparar compatibilidade de caminhos antigos. | Deploy de homologação validado; 14 rotas estáticas PT/EN, arquivos e 404 corretos. |
| 5. Domínio e publicação | Adicionar apex e `www` ao projeto; atualizar DNS Cloudflare com os valores exatos exibidos pela Vercel; verificar propagação e HTTPS. | Ambos os hostnames chegam à Vercel, certificado válido e redirects preservam caminho/query. |
| 6. Encerramento Pages | Após aceite da migração, desabilitar workflow de publicação Pages e despublicar em Settings → Pages; retirar associação antiga/CNAME. Manter CI de verificação. | Push futuro gera uma única publicação de produção na Vercel; nenhuma republicação Pages. |

### Arquivos previstos para alteração

- Experiência: `src/App.tsx`, `src/main.tsx`, `src/context/IntroContext.tsx`, `src/components/Hero.tsx`, `Layout.tsx`, `SpaceBackground.tsx`, `ProjectCard.tsx`, `WhatsAppButton.tsx` e `src/index.css`, conforme o escopo das mudanças locais existentes.
- Publicação e SEO: `vite.config.ts`, novo `vercel.json` se necessário, `src/components/SEO.tsx`, `scripts/generate-static-pages.mjs`, `index.html`, `public/robots.txt`, `public/sitemap.xml`, `README.md` e textos do case do próprio portfólio em PT/EN.
- Encerramento: `.github/workflows/deploy-pages.yml` e `CNAME`, somente na etapa final da migração.

O workflow `.github/workflows/deploy-assets.yml` também publica em GCS e usa o gatilho `assets/**`, enquanto as imagens atuais estão em `src/assets`. Há um URL GCS em `projects.ts`, mas a galeria observada usa recursos locais. Confirmar consumidores antes de aposentar esse workflow; não excluir bucket nem interromper recursos de outros projetos. Preservar links GitHub de código e demos de outros projetos.

## Migração do domínio, em detalhe

Não é necessário transferir o registro do domínio nem trocar nameservers. A migração pretendida é do apontamento do site. A Vercel permite usar DNS externo e informa os registros específicos do projeto. [Documentação Vercel](https://vercel.com/docs/domains/working-with-domains/add-a-domain).

1. Confirmar acesso ao projeto Vercel e à zona `wellingtonsp.uk` na Cloudflare. Exportar a zona e registrar valores, TTL e estado do proxy para permitir reversão. Conferir A/AAAA/CNAME/CAA conflitantes.
2. Validar o artefato a publicar e guardar o deployment anterior. Manter a branch de produção existente enquanto as correções são homologadas; não conectar automaticamente a branch local de trabalho como produção.
3. Adicionar `wellingtonsp.uk` e `www.wellingtonsp.uk` no mesmo projeto Vercel. Definir apex como principal e `www` como redirecionamento permanente, preservando caminho e query. Realizar eventual verificação TXT indicada pelo painel.
4. Na Cloudflare, substituir os quatro A do apex pelo destino exato recomendado para esse projeto. Alterar o CNAME de `www` para o destino exato indicado pela Vercel. Não usar IP/CNAME genérico copiado de outro projeto. Durante a validação inicial, preferir registros DNS only; manter os NS atuais. Não mexer em MX/TXT ou subdomínios de outros sistemas.
5. Manter Pages disponível enquanto houver clientes/resolvers com DNS antigo. Verificar apex e `www` em DNS autoritativo e resolvedores públicos distintos, HTTPS, HTML/bundles e navegação. TTL 300 s observado ajuda, mas não garante conclusão da propagação em cinco minutos.
6. Revalidar `/`, `/en/`, seis cases em PT e seis em EN, currículo, imagens/badges, OG, robots, sitemap e página inexistente. Preservar arquivos estáticos; não configurar um rewrite global que transforme PDF/asset inexistente em HTML 200.
7. Se links antigos resultarem em `wellingtonsp.uk/Portifolio/...`, preparar redirecionamento desse prefixo para a rota equivalente na raiz. Testar também `/Portifolio`, trailing slash, query e fragmentos/âncoras no navegador.
8. Após estabilidade e aceite, impedir novos deploys pelo workflow Pages, despublicar o site e remover o domínio antigo da configuração Pages. Retirar `CNAME` do repositório e atualizar homepage/README quando a publicação final estiver confirmada. [Despublicação GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site).
9. Atualizar materiais externos e sitemap na Search Console, quando houver acesso. Uma URL `github.io` despublicada não pode receber um redirect pela Vercel, pois esse hostname não pertence ao projeto Vercel. Se conservar esse redirect for requisito, negociar explicitamente uma exceção temporária; não prometer isso junto da desativação total do Pages.

**Reversão:** antes de despublicar Pages, restaurar na Cloudflare os A/CNAME anteriores, se a migração falhar. Se apenas o novo código falhar, restaurar o deployment Vercel anterior. Após despublicar Pages, voltar ao provedor antigo também exige reativar sua publicação/associação; DNS sozinho não basta. Por isso o encerramento é a última etapa.

## Critérios de aceite

- Sem espera artificial de 4,5 s e sem bloqueio de interação por intro. Falha de download/WebGL mantém conteúdo, links, currículo e scroll utilizáveis.
- Build completo, TypeScript e lint aprovados na versão final; conferir HTML gerado e comportamento real em navegação direta, recarga e histórico.
- Antes/depois com mesmo dispositivo/rede e cache documentados; três execuções por perfil de laboratório e registro da mediana e variação. Coletar LCP/CLS/TBT no laboratório e medir interações reais para INP; Lighthouse de carregamento não comprova INP.
- Metas de experiência: LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1 no percentil 75, separando mobile/desktop quando houver amostra real suficiente. Sem amostra, registrar somente resultados de laboratório. [Critérios Google Web Vitals](https://web.dev/articles/vitals).
- Durante scroll, galerias e navegação, trace sem tarefas longas recorrentes >50 ms atribuíveis aos efeitos; metas práticas iniciais de ~60 FPS no desktop de referência e ≥30 FPS no celular de referência, com modo estático se necessário. São metas propostas, não resultados desta auditoria.
- Testar mobile físico Android e Safari/iOS quando disponíveis, além de desktop; teclado, redução de movimento, aba oculta, resize, WebGL indisponível, lightbox, âncoras, PT/EN e retorno de case. Registrar ambientes indisponíveis como NOT TESTED.
- DNS e certificado apontam para a Vercel; apex oficial e `www` redireciona sem loops; canonical/hreflang/OG/sitemap usam domínio final. Assets versionados têm cache adequado e HTML continua atualizável.
- Uma única publicação de produção via integração Git da Vercel. Previews temporários podem servir à homologação; CI no GitHub verifica o código sem republicar o site. Confirmar que não há segundo workflow/CLI realizando deploy Vercel em paralelo à integração.

## Acompanhamento da execução

Em 06/10/2026, o trabalho local passou a aplicar a etapa de desempenho: removed o bloqueio da animação e o RAF contínuo do Lenis, deixei a entrada 3D opt-in, limitei partículas e DPR, suspendi o Canvas em abas ocultas, reduzi processamento por frame, parei autoplay fora da tela e com movimento reduzido, e removi imagens decorativas pesadas dos carrosséis. Também atualizei SEO, sitemap e documentação para `wellingtonsp.uk` e adicionei configuração Vercel para assets imutáveis e URLs `/Portifolio` antigas.

Verificações desta implementação: `tsc --noEmit` e ESLint passaram. Vite e o pré-renderizador geraram 14 rotas, 14 URLs canônicas no sitemap e o currículo em uma pasta temporária. As rotas em português e inglês, currículo, sitemap e `robots.txt` responderam HTTP 200 no preview local. No navegador local, a home abriu com heading visível, sem Canvas e sem bloqueio de rolagem; o fundo ativou e desativou sob demanda. Cases atualizam canonical, hreflang e `og:url`; cada rota fica com um único canonical. Não surgiram erros nem avisos no console nas interações verificadas. LCP, INP, CLS e FPS ainda não foram medidos.

A verificação de deploy da Vercel para a branch de homologação passou e o PR 23 está aberto como rascunho. A URL protegida de preview requer login da Vercel, então ainda não foi possível conferir o preview remoto no navegador. Os painéis Vercel e Cloudflare pedem login e não há tokens no ambiente; portanto, domínio, DNS e produção permanecem como antes. GitHub Pages e seu workflow continuam ativos. A migração externa não está concluída.
