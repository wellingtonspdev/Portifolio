# AGENTS.md

> Global rules and context for all AI agents operating in this repository.
> This file is the base constitution — specialist agents in `.opencode/agents/` extend it, never override it.

---

## Project Overview

<!-- Customize: fill in your project details below -->

- **Name:** [TO_FILL: project name]
- **Purpose:** [TO_FILL: one-sentence description of what this system does]
- **Type:** [TO_FILL: web app | API | CLI | library | monorepo | mobile app]
- **Target Users:** [TO_FILL: who uses this product]
- **Current Stage:** [TO_FILL: MVP | active development | production | maintenance]

---

## Core Stack

<!-- Customize: replace placeholders with your actual stack -->

| Layer | Technology |
|-------|-----------|
| Language | [TO_FILL: e.g. TypeScript, Go, Python] |
| Framework | [TO_FILL: e.g. Next.js, FastAPI, Gin] |
| Database | [TO_FILL: e.g. PostgreSQL, MongoDB] |
| ORM / Query Builder | [TO_FILL: e.g. Drizzle, Prisma, SQLAlchemy] |
| Test Framework | [TO_FILL: e.g. Vitest, pytest, go test] |
| Lint / Format | [TO_FILL: e.g. ESLint + Prettier, Ruff, golangci-lint] |
| Package Manager | [TO_FILL: e.g. pnpm, uv, go modules] |
| CI/CD | [TO_FILL: e.g. GitHub Actions, GitLab CI] |

---

## Architecture Rules

These rules apply to every task, regardless of scope.

1. **Separate concerns by layer.** Do not mix transport (HTTP handlers), business logic (services), and data access (repositories) in the same function or file.
2. **Dependencies flow inward.** Domain logic must never import from infrastructure or transport layers.
3. **No large-scale changes without a plan.** If a task requires modifying more than 5 files or changing a public interface, produce an implementation plan and request approval before writing code.
4. **No dead code.** Do not leave commented-out code, unused imports, or unreachable branches.
5. **Explicit over implicit.** Prefer named constants over magic numbers, explicit error returns over silent failures, and typed interfaces over `any`.

<!-- PROJECT_SPECIFIC: add architecture rules unique to this codebase -->
<!-- Examples: "All API responses use the standard envelope format", "State management uses Zustand only" -->

---

## Project Conventions

### Naming

- Files: [TO_FILL: e.g. kebab-case, snake_case]
- Functions/methods: [TO_FILL: e.g. camelCase, snake_case]
- Types/interfaces: [TO_FILL: e.g. PascalCase]
- Database tables: [TO_FILL: e.g. snake_case, plural]
- Environment variables: [TO_FILL: e.g. UPPER_SNAKE_CASE]

### File Organization

<!-- Customize: describe or paste your directory layout -->

```
[TO_FILL: paste your src/ directory tree here, 2-3 levels deep]
```

### Error Handling

- Return structured errors with a code, message, and optional details.
- Never swallow errors silently. Log or propagate.
- User-facing error messages must not leak internal paths, stack traces, or schema details.

### Validation

- Validate all external input at the boundary (API handlers, CLI args, file imports).
- Use schema validation libraries, not manual if-chains.

<!-- PROJECT_SPECIFIC: add local conventions not covered above -->

---

## Critical Constraints

These constraints are non-negotiable across all tasks.

1. **Never delete or rename database tables/columns without a migration plan and explicit approval.**
2. **Never commit secrets, tokens, or credentials to version control.** Use environment variables or secret managers.
3. **Never break a public API contract** (status codes, response shape, endpoint paths) without versioning and communicating the change.
4. **Never bypass authentication or authorization checks**, even for development convenience.
5. **Never merge code that fails existing tests.** Fix the tests or fix the code.

<!-- PROJECT_SPECIFIC: add critical constraints for your domain -->
<!-- Examples: "Never modify billing logic without finance team review", "All PII fields must be encrypted at rest" -->

---

## How the Agent Should Work

### Plan Before Acting

- If a task is ambiguous, ask clarifying questions before writing code.
- If a task touches more than one component, outline the approach first.
- If a task has multiple valid solutions, present trade-offs and recommend one.

### Communicate Risk

- If a change could break existing behavior, state what might break and why.
- If a change has security implications, flag them explicitly.
- If you are unsure about intent, say so. Do not guess silently.

### Make Proportional Changes

- Small tasks → direct implementation.
- Medium tasks (2-5 files) → brief summary of approach, then implement.
- Large tasks (>5 files or architectural change) → full plan, wait for approval.

### Request Validation When

- Changing shared interfaces (APIs, database schemas, message contracts).
- Deleting or renaming existing functionality.
- Adding new dependencies.
- Making performance-sensitive changes.

---

## Testing and Verification

1. **Run existing tests before declaring a task complete.** Command: `[TO_FILL: e.g. npm test, pytest, go test ./...]`
2. **Run linters/formatters.** Command: `[TO_FILL: e.g. npm run lint, ruff check .]`
3. **Run type checks if applicable.** Command: `[TO_FILL: e.g. npx tsc --noEmit, mypy .]`
4. **Add tests for new behavior.** Every new endpoint, function, or business rule should have at least one test for the happy path and one for an error case.
5. **Do not declare success without evidence.** Show command output, test results, or verification steps.

<!-- PROJECT_SPECIFIC: add project build commands, e2e test commands, or pre-commit hooks -->

---

## Specialist Agents

This file provides the **global baseline**. For domain-specific tasks, specialist agents in `.opencode/agents/` provide deeper expertise and tailored workflows.

**How they work together:**
- `AGENTS.md` → always loaded → sets universal rules and context.
- `.opencode/agents/*.md` → loaded on demand → provides specialized behavior.
- Specialist agents **inherit** all rules from this file. They add depth, never contradict.

### Available Specialists

| Agent | File | When to Use |
|-------|------|-------------|
| Orchestrator | `.opencode/agents/orchestrator.md` | Central coordination: decompose requests, route to specialists, enforce quality gates, drive pipeline |
| Architect | `.opencode/agents/architect.md` | System design, ADRs, trade-off analysis, implementation planning |
| Design Architect | `.opencode/agents/design-architect.md` | UI/UX design systems, component specs, design tokens, layout |
| Frontend UI | `.opencode/agents/frontend-ui.md` | Frontend implementation: React, CSS, components, interactions |
| Visual Auditor | `.opencode/agents/visual-auditor.md` | Visual QA, accessibility, responsive checks, layout validation |
| Backend | `.opencode/agents/backend.md` | API design, data models, services, server-side logic |
| Database | `.opencode/agents/database.md` | Schema design, migrations, query optimization, indexing |
| DevOps | `.opencode/agents/devops.md` | CI/CD, infrastructure, deployment, Docker, monitoring |
| Security | `.opencode/agents/security.md` | Threat modeling, vulnerability assessment, auth/crypto audits |
| Reviewer | `.opencode/agents/reviewer.md` | Code review: correctness, security, maintainability, performance |
| Verifier | `.opencode/agents/verifier.md` | Adversarial verification: run builds, tests, probes — never reads only |

---

## Project-Specific Notes

<!-- This section is intentionally empty. Use it to capture context that doesn't fit above. -->
<!-- Examples: known tech debt, active migrations, feature flags, external dependencies, team agreements -->
