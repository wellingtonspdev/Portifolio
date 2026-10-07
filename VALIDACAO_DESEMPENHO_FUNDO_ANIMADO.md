# Validação do fundo permanente — 2026-10-07

Perfil solicitado: **9.000 partículas desktop / 3.000 mobile**, sem botão de ativação ou desativação.

## Alterações

- Remoção de Bloom/composer/MSAA, atributos de explosão e dependências sem uso (drei, postprocessing, lenis). Brilho radial e movimento permanecem nos shaders.
- Fundo CSS animado durante carregamento, preparação assíncrona dos shaders e falha/perda de contexto WebGL; erro do fundo isolado do conteúdo.
- Limites de scroll medidos por ResizeObserver/resize; eventos passivos atualizam refs. Câmera usa damping por tempo. Constelações atualizam no máximo 15 Hz quando necessário.
- DPR inicial 1, reduzido a 0,8/0,65 após duas janelas consecutivas de baixo desempenho. O orçamento de partículas permanece fixo. Sem alternância repetida de resolução na mesma sessão.
- Conteúdo inicial visível, seções fora da tela com layout adiado e âncoras resolvidas após atualização das alturas. Canvas preservado entre cases/home e troca de idioma; idioma sincronizado com a URL e histórico.
- Redução de blur/transições/filtros; typewriter e autoplay economizam trabalho fora da viewport/aba visível.
- 34 previews WebP (17 screenshots × 480/960), mantendo os originais para o lightbox. Originais: 1.043.998 bytes; ambas as variantes: 448.506 bytes. O logo permanece original.

## Evidência local

PASS: TypeScript sem emissão, lint sem avisos, build Vite e prerender das rotas PT/EN. Bibliotecas de pós-processamento incompatíveis removidas; Three 0.164.1 e Fiber 8.18.0 mantidos.

Chrome na GPU integrada Intel UHD da máquina, build de produção servido localmente. Os números abaixo medem **cadência de callbacks rAF**, não quadros efetivamente apresentados nem métricas de campo.

| Cenário | callbacks/s | p95 intervalo | tarefas JS >50 ms |
|---|---:|---:|---:|
| Full HD, CPU 1×, execução 1 | 58,8 | 16,9 ms | 0 |
| Full HD, CPU 1×, execução 2 | 60,0 | 16,9 ms | 0 |
| Full HD, CPU 1×, execução 3 | 59,8 | 16,9 ms | 0 |
| 1280×720, CPU 4× | 53,6 | 17,9 ms | 4 / 497 ms acumulados |
| Mobile 390×844 DPR 2, CPU 4× | 58,3 | 16,9 ms | 1 / 76 ms |

Na auditoria anterior, o cenário Full HD com 15 mil partículas + composer/MSAA8 ficou em mediana 29,7 callbacks/s. A mediana da versão atual foi 59,8. Condições e amostras locais; não é promessa para todos os dispositivos.

PASS: Instrumentação WebGL confirmou duas chamadas de desenho por quadro, 9.000 vértices de partículas desktop e 3.000 mobile, sem blit/triângulos de pós-processamento. Mobile usa canvas de 390×844 apesar do DPR físico 2, limitando custo de pixels.

Trace de abertura local com cache aquecido: LCP 304 ms e CLS 0,00. Comparação anterior de fundo ativo: LCP 984 ms. Amostras únicas de laboratório, não representam rede fria, percentis de produção ou INP de campo.

PASS: Perda de contexto induzida com WEBGL_lose_context removeu o Canvas e manteve fundo CSS com animação infinita e título utilizável. Troca de idioma e navegação de case para home preservaram a mesma instância de Canvas. Sem imagens quebradas na verificação.

NOT TESTED: celular físico; métricas de usuários reais; rede móvel real. Essas validações exigem o dispositivo ou coleta em produção.

## Publicação

Preparada para publicação a partir da main fc6f5ca009cd348612a1d898b6b039f82fe5bb88. O resultado de preview/produção será registrado após a entrega. O checkout local existente e seus arquivos não relacionados foram preservados.
