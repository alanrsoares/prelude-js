# AGENTS

Repo-specific guidance for automated contributors.

## Non-obvious constraints

- Do not restore the legacy root-level published surface. `Func/`, `General/`, `List/`, `Num/`, `Obj/`, `Str/`, and a root `index.js` were intentionally removed; the package now exports from `src/`.
- Preserve explicit `.js` ESM specifiers in internal imports. This repo was normalized for native runtime resolution and should not drift back to extensionless imports.
- Treat `src/` as the only runtime source of truth. If you notice duplicated runtime code elsewhere, prefer deleting or ignoring it rather than updating two surfaces.
- `docs/README.md` is generated and must remain deterministic across Bun and Node runs. If a source change affects it, regenerate it in the same change.
- Release flow is controlled by `release-please`. Avoid ad hoc manual version/changelog commits unless the user explicitly asks for an override such as a `Release-As` commit.
- Conventional commit style matters here because automated release tooling parses commit history.
