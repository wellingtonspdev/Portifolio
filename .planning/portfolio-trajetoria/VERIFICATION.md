# Verificação — trajetória acadêmica e profissional

## Executado

- `npm run build` passou com TypeScript, Vite e pré-renderização.
- `git diff --check` passou antes do commit.
- Revisão textual confirmou a remoção de alegações de arquitetura corporativa, FastAPI, Java e Flutter como competências aplicadas.
- O currículo PDF público foi regenerado e o DOCX local foi alinhado; o DOCX permanece ignorado pelo Git por conter documento pessoal de trabalho.

## Nota

O build emite apenas o aviso de chunk 3D acima de 500 kB, já existente e fora do escopo desta atualização de conteúdo.

## Case do Portfólio Profissional

- Card sem mídia adicionado como primeiro projeto, usando o fallback de ícone existente.
- Conteúdo PT-BR/EN, slug tipado e páginas estáticas do novo case foram adicionados.
- O gerador estático foi alinhado ao posicionamento atual do WSP Finance.
- `npm run build` e `npm run lint` passaram em 28 de julho de 2026.

## Transições dos cases

- O Big Bang deixou de reiniciar ao abrir cases ou voltar para a página inicial: o estado da introdução é mantido por aba com `sessionStorage`.
- Cases receberam entrada de 240 ms por opacidade, deslocamento e escala sutis; a preferência de movimento reduzido elimina a transição e o fundo animado.
- `git diff --check`, `npm run build` e `npm run lint` passaram em 28 de julho de 2026.

## Navegação entre páginas

- Links internos agora atualizam o histórico com `pushState`; páginas externas, downloads e links em nova aba preservam o comportamento nativo.
- `AnimatePresence` do Framer Motion realiza a saída e a entrada do conteúdo com opacidade e deslocamento de 220 ms, sem tela de carregamento e com suporte a movimento reduzido.
