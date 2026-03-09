# FAQ

## Does MCPForm include a backend MCP server?

No. v1 is frontend-only.

## Does it support nested schema fields or arrays?

No. v1 supports flat schemas only.

## Can I use Zod or Formik directly with MCPForm?

Not built-in for v1. MCPForm keeps validation internal and minimal.

## Why is tool definition output deterministic?

Schema keys are sorted before generating `input_schema.properties`.
This makes output stable for testing and reproducibility.

## What React versions are supported?

`react >= 18` and `react-dom >= 18`.

## Can I use MCPForm without WebMCP runtime APIs?

Yes. It works as a regular React form component without `navigator.modelContext`.
