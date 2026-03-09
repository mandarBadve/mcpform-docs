# Validation

Validation is handled by `validateMCPFormData(schema, values)` and used by `<MCPForm />`.

## Rules

- `string` must be a string.
- Required `string` must not be empty after trim.
- `number` must be a number and not `NaN`.
- Required `number` must be present.
- `boolean` must be a boolean.
- Required `boolean` must be `true`.

## Result Shape

```ts
interface MCPValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  data: Record<string, unknown>;
}
```

- `errors` contains field-level messages.
- `data` includes only validated values.
