# Contributing

## Before you start

- Open an issue for significant API or behavior changes before doing implementation work.
- Keep pull requests focused. Small, isolated changes are easier to review and release.
- If a change affects published behavior, add or update tests.

## Local workflow

```bash
bun install
bun run format
bun run check
bun run docs
```

## Pull request expectations

- Use clear commit messages. Conventional commits are preferred because release automation parses them.
- Update docs when public API shape, usage, or project workflow changes.
- Avoid unrelated refactors in the same pull request.

## Generators

Use the project generator for new module functions:

```bash
bun run generate
```

## Release model

- Releases are managed by `release-please`.
- npm publishing is intended to run through GitHub Actions trusted publishing.
- JSR publishing is intended to run through GitHub Actions using OIDC.
- Do not commit manual version bumps unless the release workflow specifically requires it.
