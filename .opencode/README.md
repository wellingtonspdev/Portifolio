# Guia Técnico de Arquitetura de Agentes

Este documento detalha o ecossistema de agentes especialistas contidos no diretório `agents`, descrevendo as responsabilidades, o fluxo de comunicação, as dependências e sugestões técnicas de melhoria para cada persona.

O sistema baseia-se em uma arquitetura de delegação estrita gerenciada centralmente, onde agentes desempenham papéis focados, nunca sobrepondo responsabilidades e garantindo qualidade através de portões de verificação (quality gates).

---

## 1. Orchestrator (`orchestrator.md`)
**Função Primária:** Roteador e coordenador central (nunca executa ou escreve código).
**Responsabilidades:** Decupagem de tarefas, seleção de especialistas segundo o Capability Map, imposição de Quality Gates (revisões e portões de segurança), controle do fluxo (loops iterativos e escalonamento de bloqueios pro usuário).
**Interações & Dependências:** 
- Conecta-se a todos os especialistas.
- Depende das saídas de `reviewer`, `verifier`, `security`, e `visual-auditor` para decidir avanço de fase (gates).
**Sugestões de Melhoria:**
- Implementar metadados de rastreio de iterações (ex: prevenção de loops infinitos estabelecendo limite rígido de tentativas por gate).
- Adicionar obrigatoriedade de logs no formato JSON estruturado ao invés de apenas resumos textuais.

## 2. Architect (`architect.md`)
**Função Primária:** Design de sistemas e tomada de decisões de alto nível.
**Responsabilidades:** Divisão em contextos delimitados (bounded contexts), planejamento focado na regra de negócio (DDD), escolhas de infraestrutura baseadas em matrizes de trade-off (ADRs).
**Interações & Dependências:**
- Acionado pelo `Orchestrator` em features/escopos grandes.
- Seus ADRs e especificações servem como dependência bloqueante para `backend`, `database`, e `frontend-ui`.
**Sugestões de Melhoria:**
- Estabelecer a geração obrigatória de diagramas textuais (C4 model via PlantUML ou Mermaid) em cada ADR.

## 3. Design Architect (`design-architect.md`)
**Função Primária:** Concepção da direção visual e dos sistemas de design.
**Responsabilidades:** Estabelecimento da paleta de cores (HLS), escala tipográfica proporcional, sistemas de grids, espaçamentos coerentes e interações macro.
**Interações & Dependências:**
- Necessita compreensão da funcionalidade (do usuário ou Orchestrator).
- Fornece tokens, regras css/variáveis como dependência principal para o `frontend-ui`.
**Sugestões de Melhoria:**
- Incluir definições obrigatórias de tokens de design em formato `json` padronizado para consumo automatizado (ex: Style Dictionary compatibility).

## 4. Frontend UI (`frontend-ui.md`)
**Função Primária:** Codificação de interface em nível de produção (production-grade).
**Responsabilidades:** Implementar a lógica visual com componentes de alta qualidade estruturada. Recusa padrões genéricos ("AI-slop"), foca severamente em motion design coreografado, tipografia e consistência global.
**Interações & Dependências:**
- Depende fortemente da especificação emitida pelo `design-architect`.
- Interage com saídas validadas pelo `visual-auditor` (feedback de correções visuais e de acessibilidade).
**Sugestões de Melhoria:**
- Exigir exportação de snapshots/métricas estáticas (storybooks/variations) para testabilidade de regressão visual.

## 5. Visual Auditor (`visual-auditor.md`)
**Função Primária:** Avaliação estrita de Qualidade Visual e Acessibilidade (QA visual).
**Responsabilidades:** Rodar Heurísticas de Nielsen, Leis de Krug e testes de acessibilidade (WCAG 2.1 AA) de forma avaliativa e não destrutiva. Nunca escreve ou commita código.
**Interações & Dependências:**
- Atua como Gatekeeper após entregas do `frontend-ui`.
- Depende de acesso de leitura profundo sobre implementações frontend.
**Sugestões de Melhoria:**
- Padronizar chamadas a scripts automatizados (ex: rodar Lighthouse ou Axe core) no pipeline de verificação, não dependendo só do olhar "estático" do agente.

## 6. Backend (`backend.md`)
**Função Primária:** Implementação de APIs e arquiteturas server-side.
**Responsabilidades:** Design e manutenção de lógicas de negócio e rotas com limites rigorosos de validação por contrato, tratamento resiliente de erros, autenticação.
**Interações & Dependências:**
- Depende de modelagens do `database` e design do `architect`.
- Saídas viram alvos severos para os `security` e `verifier`.
**Sugestões de Melhoria:**
- Incrementar exigência de especificação de rotas estritamente via geração de OpenAPI 3.0 Specs automático, forçando single source of truth.

## 7. Database (`database.md`)
**Função Primária:** Otimização, modelagem e manipulação segura de dados.
**Responsabilidades:** Design de tabelas 3NF vs desnormalização de leitura, otimização de joins, índices elaborados (Btree, GiST), análise de planos de transação via consultas (EXPLAIN ANALYZE) e migrações fully-reversible.
**Interações & Dependências:**
- É a camada basilar que precede ou caminha ao lado do `backend`.
**Sugestões de Melhoria:**
- Proibir alterações de esquema sem o acoplamento simultâneo de scripts de rollback ou definições claras de blue/green schema deployments no DB.

## 8. Reviewer (`reviewer.md`)
**Função Primária:** Inspeção rigorosa de código assíncrono.
**Responsabilidades:** Analisar commits/arquivos procurando vulnerabilidades lógicas, anti-patterns e manutenibilidade além de estilo (que delega aos linters de CI).
**Interações & Dependências:**
- Age como gate fixo entre implementadores (`backend`, `frontend-ui`, etc.) e a entrega estática, precedendo o `verifier`.
**Sugestões de Melhoria:**
- Exigir inclusão de pontuações de complexidade ciclomática estrita (ex. falhar código se cc > x).

## 9. Verifier (`verifier.md`)
**Função Primária:** Adversário focado na verificação dinâmica (executar vs ler).
**Responsabilidades:** Compila, roda testes, executa test-suits de orfandade, stress tests adversariais e garante que as construções não são ilusões de leitura.
**Interações & Dependências:**
- Age na última barreira antes do sucesso da task (Gate Final de Execução).
- Consome os códigos gerados pelos implementadores aprovados pelo `reviewer`.
**Sugestões de Melhoria:**
- Criação e destruição de ambientes sandboxed explícitos via scripts Bash/Docker isolados definidos dinamicamente antes de gerar "VERDICT".

## 10. Security (`security.md`)
**Função Primária:** Detecção e mitigação rigorosa de Superfícies de Ataque.
**Responsabilidades:** Aplicação STRIDE, varreduras na OWASP Top 10 e CWE Top 25, verificação rigorosa contra chaves fixas em código e injeções, exigindo a versão corrigida (fix pronto).
**Interações & Dependências:**
- Intervém mandatoriamente sobre `backend` e infraestrutura `devops` como gate imperativo (Critical/High Blockers).
**Sugestões de Melhoria:**
- Forçar uma lista contínua de Threat Models persistente nos repopsitórios (ex: SBOM e Threat matrix artifacts).

## 11. DevOps (`devops.md`)
**Função Primária:** CI/CD e Infra-as-Code.
**Responsabilidades:** Estabelecimento de pipelines de Lint -> Test -> Build -> Scan -> Deploy limpos; Zero-downtime, containers e Observability / Alertas.
**Interações & Dependências:**
- Implementa a base do ciclo de vida que a maioria dos agentes irá assumir como existente ou interagir programaticamente.
**Sugestões de Melhoria:**
- Estabelecer checagem obrigatória de "Configuration Drift" recorrente antes de submeter atualizações de Terraform/Pulumi/Docker.

## 12. Project Analyst (`project-analyst.md`)
**Função Primária:** Diagnóstico técnico de projetos de software — analisa, não implementa; direciona, não decide.
**Type:** Core Agent (primeiro agente acionado pelo orchestrator ao receber qualquer projeto).
**Responsabilidades:**
- Diagnóstico estrutural, técnico, de risco e de consistência de repositórios completos
- Detecção de dívida técnica, inconsistências (código vs docs, configs vs runtime) e gaps de validação
- Priorização de achados por severidade (P0-P3) com verdict (`PRODUCTION_READY` / `NEEDS_WORK` / `CRITICAL_ISSUES` / `INCOMPLETE`)
- Mapeamento de cada achado para o agente especialista responsável via Handoff Map
- Geração de relatório padronizado com source tagging obrigatório (`EVIDENCED` / `DERIVED` / `ASSUMPTION`)

**Analysis Modes:** `full-analysis` · `scoped-analysis` · `re-analysis`

**Output:** Default (report enxuto e acionável) + Extended (sob demanda, com structure map, architecture analysis, debt detalhada e recommendations).

**Anti-Alucinação:**
- Source tagging obrigatório em todo achado
- Assumption budget rigoroso (zero assumptions em P0/P1; até 2 não-críticas em P2/P3)
- Phantom finding prevention: verificação real de existência de arquivo/trecho antes de reportar
- Proteção contra causa raiz inventada — sintoma sem causa evidenciável → `cause: unconfirmed`

**Interações & Dependências:**
- Acionado pelo `orchestrator` como primeiro passo de qualquer análise de projeto
- Produz Handoff Map consumido pelo `orchestrator` para delegação:
  - `architect` — problemas estruturais e decisões de design
  - `backend` / `frontend-ui` — diagnósticos de implementação
  - `security` — triagem de risco
  - `reviewer` — visão macro vs review granular
  - `verifier` — diagnóstico vs validação executável
  - `design-architect` / `visual-auditor` — desalinhamento funcional de interface
  - `devops` — gaps de infra/deploy
  - `database` — schema concerns
- NÃO delega diretamente — apenas mapeia; o orchestrator executa a delegação

**Integração:** `orchestrator → project-analyst → Report com Handoff Map → orchestrator delega para especialistas`

**Sugestões de Melhoria:**
- Implementar caching de relatórios anteriores para acelerar `re-analysis` em projetos grandes.
- Padronizar output em formato JSON estruturado para consumo programático além do markdown.

---

### Conclusão e Pipeline de Fluxo Macro
A arquitetura repousa sobre **Roteamento de Intentos** (Orchestrator divide as águas), seguido de **Diagnóstico Inicial (Project Analyst)**, **Especificações (Design/Architect)**, **Implementação Isolada (Implementers)**, passando rigorosamente por **Portões Protetores (Reviewer, Security, Visual Auditor)** antes do **Julgamento Final Executável (Verifier)**.

```
orchestrator → project-analyst → Handoff Map → orchestrator → specialist agents → quality gates → verifier
```

---

## Como Utilizar os Agentes no OpenCode / CloudCode

A estrutura de agentes especialistas foi desenhada de forma modular e focada, permitindo a integração harmônica via menções diretas.

### 1. Instruções para Carregamento

Para que o ambiente carregue a suíte de especialistas:
1. Certifique-se de que os arquivos desta pasta base estejam localizados sob um diretório próprio do seu projeto (geralmente documentado e referenciado como `.opencode/agents/`).
2. Garanta que o documento global `AGENTS.md` (regras matriz) esteja devidamente consolidado ou mapeado na raiz estrutural de sua interface, de forma que o sistema herde seu contexto matriz.
3. Uma vez inseridos no ambiente das IDEs (OpenCode / CloudCode), mencione as personas em caixa de texto (como tags) e seus `.md` funcionarão como diretrizes primárias (System Prompts).

### 2. Acionando o Orchestrator (O Ponto de Entrada)

A forma recomendada de delegar épicos ou conjuntos de tarefas extensas é acionando primeiro o roteador.

**Prompt Exemplo:**
> "@orchestrator Preciso adicionar a funcionalidade de carrinho de compras fullstack utilizando nossa paleta atual. O backend será Node.js."

O Orchestrator tem autonomia para designar fases, acionar subagentes de decisão antes da implementação, enviar pacotes para os coders e forçar validações.

### 3. Como Usar Cada Agente (Invocação Direta)

Se souber exatamente de quem precisa, "pule a catraca" e interaja diretamente com a persona listada:

- **@project-analyst** - Para diagnóstico técnico completo de um repositório antes de qualquer implementação. *Ex: "Faça uma análise completa deste projeto e produza o relatório com achados priorizados e handoff map."*
- **@orchestrator** - Para distribuir tarefas multifacetadas que requerem múltiplos agentes. *Ex: "Quebre essa feature nos passos técnicos corretos no console."*
- **@architect** - Para decisões sobre persistência de sistemas, matrizes e contextos delimitados (DDD/ADRs). *Ex: "Documente em ADR se vamos escolher Event-Driven vs monolito modular para a Feature X."*
- **@design-architect** - Para extrair padrões macro como tokens, cores tipográficas e ritmos visuais sem tocar no código funcional. *Ex: "Defina os Design Tokens para o status dashboard de forma acessível."*
- **@frontend-ui** - Para focar na execução e produção final visual do DOM, implementando telas puras com interações e motion. *Ex: "Converta essa seção usando shadcn e nossas variáveis configuradas no theme."*
- **@visual-auditor** - Ao querer revisar algo UI já existente e estático. Sem a intenção de reescrever imediatamente. *Ex: "Avalie com severidade se este formulário passa nas Heurísticas essenciais de Nielsen e WCAG AA."*
- **@backend** - Para manipulações lógicas do servidor. APIs, infra de serviço, modelagens atômicas em memória e tratamentos de erros de rede. *Ex: "Desenvolva o controler REST, tipagem ZOD e serviço central para /cart/add."*
- **@database** - Lidará fundamentalmente com a camada de persistência de dados crua: Migrations irreversíveis, índices no Postgres/SQL, ORMs pesados. *Ex: "Efetue EXPLAIN ANALYZE numa mock query destas tabelas N+1 recém-criadas."*
- **@devops** - Scripts de CI/CD, manifestos Kubernetes, scripts para provisionamento, e observabilidade em ambiente isolado. *Ex: "Faça meu arquivo Terraform pra AWS prevendo deploy em autoscale."*
- **@security** - Invoque antes das tarefas subirem pra homologação, focado em quebra de fluxo autenticado. *Ex: "Verifique brechas, injeções em dependências e desproteção na rota exposta na /upload."*
- **@reviewer** - Ao precisar do code review que sugere melhoria ou exige corretude baseado em design limpo e performance. *Ex: "Faça do arquivo util do front uma auditoria pesando anti-padrões e complexidade."*
- **@verifier** - Utilizado após todo o ecossistema estar supostamente pronto, ele opera de forma hostil enviando comandos literais a um sandbox isolado. *Ex: "Construa os testes e faça probes (explorações adversariais) contra a validação feita localmente."*

### 4. Resumo do Fluxo Guiado
Ao iniciar novos projetos, a integração do fluxo recomendada é:
1. Comece ativando o **@orchestrator**, que aciona o **@project-analyst** como primeiro passo.
2. Receba o diagnóstico do **@project-analyst** com achados priorizados e Handoff Map.
3. Aceite o output do **@architect** e do **@design-architect** para decisões de especificação.
4. Permita a codificação (handoff direto pro **@frontend-ui** e **@backend** / **@database**).
5. Peça os relatórios finais aos portões defensivos (**@reviewer**, **@security** e **@visual-auditor**). E, quando tudo estiver apto, encerre rodando testes destrutivos com o **@verifier**.
