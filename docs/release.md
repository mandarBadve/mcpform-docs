# Release and Versioning

## Versioning

Project uses Semantic Versioning and Changesets.

## Standard Release Flow

```bash
npm install
npx changeset add
npx changeset version
npm install
npm run lint
npm run typecheck
npm run test
npm run build
npm run release
```

## Verify Published Package

```bash
npm view mcpform-react versions --json
```

## CI Expectations

Release should proceed only when all checks pass:

- Lint
- Typecheck
- Tests
- Build
