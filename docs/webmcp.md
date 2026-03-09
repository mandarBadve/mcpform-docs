# WebMCP

`<MCPForm />` can expose tools in declarative and/or imperative mode.

## `webMCP` Prop

```ts
webMCP?: {
  mode?: "declarative" | "imperative" | "both";
  autoSubmit?: boolean;
}
```

Default mode is `"both"`.

## Declarative Mode

Adds attributes to form/fields:

- `toolname`
- `tooldescription`
- `toolparamdescription`
- `toolautosubmit` (when `autoSubmit: true`)

## Imperative Mode

Uses `navigator.modelContext` if available.

- Registers tool metadata and input schema.
- Validates execution args before running `onSubmit`.
- Returns success or validation error text content.

If model context is unavailable, component behavior falls back to normal form usage.
