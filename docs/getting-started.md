# Getting Started

## Installation

```bash
npm install mcpform-react
```

## Basic Usage

```tsx
import { MCPForm, type MCPSchema } from "mcpform-react";

const schema: MCPSchema = {
  name: { type: "string", required: true, description: "Customer full name" },
  email: { type: "string", required: true, description: "Contact email" },
  priority: { type: "number", description: "Priority score" },
  urgent: { type: "boolean", description: "Requires immediate action" }
};

export function ContactForm(): JSX.Element {
  return (
    <MCPForm
      tool={{ name: "submit_contact", description: "Submit contact details" }}
      schema={schema}
      onSubmit={async (data) => {
        // Send validated data to your app logic.
      }}
      webMCP={{ mode: "both" }}
    />
  );
}
```

## What MCPForm Does

1. Renders form fields from your flat schema.
2. Validates required fields and primitive types.
3. Calls `onSubmit` with validated data.
4. Lets you derive MCP tool JSON via `useMCPToolDefinition`.

## Next Steps

- Learn schema constraints in [Schema Model](./schema.md)
- Review all exported APIs in [API Reference](./api.md)
- See runtime tool exposure in [WebMCP](./webmcp.md)
