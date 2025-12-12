# Global MCP Configuration

This project uses globally configured Model Context Protocol (MCP) servers that are available across all AI development tools (Cursor, Droid, BMAD, etc.).

## Configured MCPs

### 1. Exa MCP (Search & Code Context)
- **URL:** https://mcp.exa.ai/mcp
- **Purpose:** AI-powered web search and code context retrieval
- **Capabilities:**
  - `get_code_context_exa` - Search for code snippets, examples, and documentation
  - `web_search_exa` - Real-time web searches with optimized results
  - `deep_researcher_start/check` - Complex research tasks
  - `company_research` - Comprehensive company information
  - `crawling` - Extract content from specific URLs
  - `linkedin_search` - Search LinkedIn for companies and people

### 2. Ref MCP (Reference Documentation)
- **URL:** https://mcp.ref.tools/mcp
- **Purpose:** Reference documentation and API lookup tool
- **Capabilities:**
  - Quick access to programming language references
  - API documentation lookup
  - Framework and library documentation

## Configuration Location

The global MCP configuration is stored at:
```
~/.cursor/mcp.json
```

This location makes the MCPs available to:
- Cursor IDE
- Droid
- BMAD workflows
- Other AI development tools

## Configuration File

```json
{
  "mcpServers": {
    "exa": {
      "type": "http",
      "url": "https://mcp.exa.ai/mcp",
      "headers": {},
      "description": "Exa MCP - AI-powered web search and code context retrieval"
    },
    "ref": {
      "type": "http",
      "url": "https://mcp.ref.tools/mcp",
      "headers": {},
      "description": "Ref MCP - Reference documentation and API lookup tool"
    }
  }
}
```

## Usage Examples

### Using Exa MCP

**Code Search:**
- "Show me how to use React hooks with TypeScript"
- "Find examples of implementing authentication with NextJS"
- "Get documentation for the pandas library"

**Web Search:**
- "Research the latest Node.js best practices"
- "Find information about MongoDB indexing strategies"

**Deep Research:**
- "Start a deep research project on ETL pipeline patterns"
- "Research company exa.ai and their pricing"

### Using Ref MCP

**Documentation Lookup:**
- "Show me the JavaScript Array.prototype.map documentation"
- "What are the parameters for MongoDB's createIndex?"
- "Get the TypeScript interface reference"

## Enabling Specific Tools

To enable only specific Exa tools, modify the URL with the `tools` parameter:

```json
"url": "https://mcp.exa.ai/mcp?tools=get_code_context_exa,web_search_exa"
```

Available tools:
- `web_search_exa` - Web search (enabled by default)
- `get_code_context_exa` - Code context (enabled by default)
- `crawling_exa` - URL content extraction
- `company_research_exa` - Company research
- `linkedin_search_exa` - LinkedIn search
- `deep_researcher_start` - Start research
- `deep_researcher_check` - Check research status

## Adding API Keys (If Required)

If either MCP requires authentication:

1. **Via URL parameter:**
```json
"url": "https://mcp.exa.ai/mcp?exaApiKey=YOUR_KEY_HERE"
```

2. **Via headers:**
```json
"headers": {
  "Authorization": "Bearer YOUR_API_KEY"
}
```

## Verification

After setup, verify the MCPs are active by:

1. **In Cursor:**
   - Go to Settings → MCP
   - Confirm both "exa" and "ref" are listed and enabled

2. **In Droid/BMAD:**
   - Check tool availability in the MCP settings
   - Test with a simple query

## Troubleshooting

### MCPs Not Appearing

1. Ensure the `~/.cursor/mcp.json` file exists and is valid JSON
2. Restart your IDE/tool completely
3. Check that the URLs are accessible (no network blocks)

### Connection Errors

1. Verify your internet connection
2. Check if your firewall is blocking the MCP URLs
3. Ensure the MCP servers are online (check status pages)

### Tool-Specific Issues

Some tools may require additional configuration. Refer to each tool's documentation:
- Cursor: https://docs.cursor.com/
- BMAD: See `.cursor/rules/bmad/` directory
- Droid: Check Droid-specific settings

## Resources

- [Exa MCP Documentation](https://docs.exa.ai/reference/exa-mcp)
- [Ref MCP Documentation](https://ref.tools/mcp)
- [MCP Protocol Specification](https://modelcontextprotocol.io/)

## Updates

**Last Updated:** December 9, 2025
**Configuration Version:** 1.0

To update this configuration, edit `~/.cursor/mcp.json` and restart your tools.

