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

---

### Conclusão e Pipeline de Fluxo Macro
A arquitetura repousa sobre **Roteamento de Intentos** (Orchestrator divide as águas), seguido de **Especificações (Design/Architect)**, **Implementação Isolada (Implementers)**, passando rigorosamente por **Portões Protetores (Reviewer, Security, Visual Auditor)** antes do **Julgamento Final Executável (Verifier)**.
