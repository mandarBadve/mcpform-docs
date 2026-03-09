# Schema Model

MCPForm v1 supports a flat schema only.

## Types

```ts
type MCPField = {
  type: "string" | "number" | "boolean";
  required?: boolean;
  description?: string;
};

type MCPSchema = Record<string, MCPField>;
```

## Supported Field Types

- `string`
- `number`
- `boolean`

## Required Behavior

- `string`: required means non-empty after trim.
- `number`: required means value must be present and valid number.
- `boolean`: required means value must be `true`.

## v1 Constraints

- No nested objects
- No arrays
- No conditional field logic
- No multi-step forms

## Example Schema

```ts
const schema: MCPSchema = {
  fullName: { type: "string", required: true, description: "Customer full name" },
  age: { type: "number", description: "Age in years" },
  subscribed: { type: "boolean", description: "Newsletter opt-in" }
};
```
