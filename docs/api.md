# API Reference

## `MCPForm`

Schema-driven React form component.

```ts
interface MCPFormProps {
  tool: {
    name: string;
    description?: string;
  };
  schema: MCPSchema;
  onSubmit: (data: Record<string, unknown>) => Promise<void> | void;
  webMCP?: {
    mode?: "declarative" | "imperative" | "both";
    autoSubmit?: boolean;
  };
}
```

### Behavior

- Renders one field per schema entry.
- Validates values before submit.
- Calls `onSubmit` only with validated data.
- Emits field-level validation errors in the UI.

## `useMCPToolDefinition(tool, schema)`

Returns a memoized MCP-compatible tool definition.

```ts
function useMCPToolDefinition(
  tool: MCPToolMeta,
  schema: MCPSchema
): MCPToolDefinition;
```

## Utility Exports

- `generateInputSchema(schema)`
- `generateMCPToolDefinition(tool, schema)`
- `stringifyMCPToolDefinition(definition)`
- `validateMCPFormData(schema, values)`

## Type Exports

- `MCPField`, `MCPSchema`
- `MCPToolMeta`, `MCPToolInputSchema`, `MCPToolDefinition`, `MCPToolDefinitionGenerator`
- `MCPValidationErrors`, `MCPValidationResult`, `MCPFormDataValidator`
