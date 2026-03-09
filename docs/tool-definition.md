# Tool Definition

`useMCPToolDefinition` and `generateMCPToolDefinition` build deterministic output.

## Example

Input:

```ts
const tool = {
  name: "submit_profile",
  description: "Submit customer profile information"
};

const schema: MCPSchema = {
  fullName: { type: "string", required: true },
  age: { type: "number" },
  subscribed: { type: "boolean" }
};
```

Output:

```json
{
  "name": "submit_profile",
  "description": "Submit customer profile information",
  "input_schema": {
    "type": "object",
    "properties": {
      "age": { "type": "number" },
      "fullName": { "type": "string" },
      "subscribed": { "type": "boolean" }
    },
    "required": ["fullName"]
  }
}
```

## Deterministic Ordering

Field keys in `input_schema.properties` are sorted alphabetically for stable output.
