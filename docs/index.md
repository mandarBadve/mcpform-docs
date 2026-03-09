# MCPForm

Schema-driven React forms with deterministic MCP-compatible tool definitions.

## Why MCPForm

- Build form UI from one schema
- Validate required and primitive fields
- Generate MCP tool definition JSON from the same schema
- Optionally expose tools to WebMCP-capable runtimes

## Install

```bash
npm install mcpform-react
```

Peer dependencies:

- `react >= 18`
- `react-dom >= 18`

## Quick Example

```tsx
import { MCPForm, useMCPToolDefinition, type MCPSchema } from "mcpform-react";

const schema: MCPSchema = {
  fullName: { type: "string", required: true },
  age: { type: "number" },
  subscribed: { type: "boolean" }
};

const tool = {
  name: "submit_profile",
  description: "Submit a simple profile form"
};

export function ProfileForm(): JSX.Element {
  const toolDefinition = useMCPToolDefinition(tool, schema);

  return (
    <>
      <MCPForm tool={tool} schema={schema} onSubmit={() => undefined} webMCP={{ mode: "both" }} />
      <pre>{JSON.stringify(toolDefinition, null, 2)}</pre>
    </>
  );
}
```

## Core Concepts

- [Getting Started](./getting-started.md)
- [Schema Model](./schema.md)
- [API Reference](./api.md)
- [Tool Definition](./tool-definition.md)
- [Validation](./validation.md)
- [WebMCP](./webmcp.md)
- [Examples](./examples.md)
- [Release and Versioning](./release.md)
- [FAQ](./faq.md)

## v1 Scope

Included:

- `<MCPForm />`
- Required and primitive validation (`string`, `number`, `boolean`)
- `useMCPToolDefinition`
- Deterministic JSON tool definition generation

Out of scope:

- Nested schema objects
- Arrays
- File uploads
- Multi-step forms
- Backend MCP server
