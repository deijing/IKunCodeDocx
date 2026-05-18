# ikuncode-aimcp - Unified AI MCP Server

**One binary, three AI engines — Gemini · Codex · Grok**

::: tip 📋 Introduction
ikuncode-aimcp is a unified MCP server written in Rust that bundles Gemini CLI, Codex CLI, and Grok Search into a single process. Configure it once and use every tool from any MCP client — Cursor, Windsurf, Claude Desktop, and more.
:::

## 🔗 Related Links

| Resource | URL |
|------|------|
| GitHub repository | [xuxu777xu/ikuncode-aimcp](https://github.com/xuxu777xu/ikuncode-aimcp) |
| ikun API | [api.ikuncode.cc](https://api.ikuncode.cc) |

## ✨ Features

- ✅ **One binary, all the tools**: Configure a single MCP server instead of three separate installations
- ✅ **Runtime detection**: Detects available tools on startup and returns clear errors for anything unavailable
- ✅ **AdaptiveStdio transport**: Auto-detects JSONL and LSP frame formats for maximum client compatibility
- ✅ **Pure-Rust GrokSearch**: Zero Python dependencies — web search and content fetching via the Grok API
- ✅ **Gemini image generation**: Built-in `gemini_image` tool with aspect ratio and resolution control

## 🧰 Tool List

| Tool | Source | Description |
|------|------|------|
| `gemini` | Gemini CLI | AI-powered task execution with session continuity |
| `gemini_image` | Gemini CLI | AI image generation using a dedicated image model |
| `codex` | Codex CLI | AI-assisted coding with sandbox policies |
| `web_search` | Grok API | Web search returning structured JSON results |
| `web_fetch` | Grok API | Fetch web page content and convert to Markdown |
| `get_config_info` | Grok API | Display configuration info and test the API connection |

### Related Projects

| Project | Type | Use Case |
|------|------|----------|
| **ikuncode-aimcp** (this project) | MCP Server | Works with any MCP client, includes the gemini_image tool |
| [ikunimage](/skills/ikunimage) | Claude Code Skill | Claude Code only — text-to-image / image-to-image / concurrent batch generation |

## 🛠️ Installation

### Option 1: Download a prebuilt binary (recommended)

Grab the binary for your platform from [GitHub Releases](https://github.com/xuxu777xu/ikuncode-aimcp/releases):

| Platform | Filename |
|------|--------|
| Windows x64 | `ikuncode-aimcp-x86_64-pc-windows-msvc.exe` |
| macOS Apple Silicon | `ikuncode-aimcp-aarch64-apple-darwin` |
| macOS Intel | `ikuncode-aimcp-x86_64-apple-darwin` |
| Linux x64 | `ikuncode-aimcp-x86_64-unknown-linux-gnu` |

Drop the binary into a directory on your `PATH`. On macOS / Linux, mark it executable first:

```bash
chmod +x ikuncode-aimcp-*
mv ikuncode-aimcp-* /usr/local/bin/ikuncode-aimcp
```

### Option 2: Install via npm

```bash
npm install -g ikuncode-aimcp
```

### Option 3: Install via cargo

```bash
cargo install --git https://github.com/xuxu777xu/ikuncode-aimcp.git
```

### Option 4: Build from source

```bash
git clone https://github.com/xuxu777xu/ikuncode-aimcp.git
cd ikuncode-aimcp
cargo build --release
# Binary is in the target/release/ directory
```

## ⚙️ Configure Your MCP Client

Add the following block to your MCP client (Claude Desktop, Cursor, Windsurf, etc.):

```json
{
  "mcpServers": {
    "ikuncode-aimcp": {
      "command": "ikuncode-aimcp",
      "env": {
        "GEMINI_API_KEY": "your-gemini-api-key",
        "GROK_API_KEY": "your-grok-api-key"
      }
    }
  }
}
```

::: warning ⚠️ Environment Variables
- `GEMINI_API_KEY`: used by the Gemini tools (`gemini`, `gemini_image`)
- `GROK_API_KEY`: used by the Grok search tools (`web_search`, `web_fetch`)
- The Codex tool uses its own configuration — see the [Codex deployment docs](/deploy/codex)
:::

## 📖 Tool Reference

### gemini — AI task execution

| Parameter | Required | Type | Default | Description |
|------|------|------|--------|------|
| `PROMPT` | Yes | string | — | Task prompt sent to Gemini |
| `sandbox` | No | bool | false | Run in sandbox mode |
| `SESSION_ID` | No | string | — | Resume an existing session for multi-turn dialogue |
| `model` | No | string | — | Model override |
| `timeout_secs` | No | int | 600 | Timeout in seconds (1–3600) |

### gemini_image — image generation

| Parameter | Required | Type | Default | Description |
|------|------|------|--------|------|
| `PROMPT` | Yes | string | — | Image generation prompt |
| `model` | No | string | — | Model override |
| `output_dir` | No | string | — | Directory to save the image |
| `aspect_ratio` | No | string | — | Aspect ratio (1:1 / 16:9 / 9:16, etc.) |
| `image_size` | No | string | — | Resolution (1K / 2K / 4K) |
| `timeout_secs` | No | int | 600 | Timeout in seconds (1–3600) |

### codex — AI-assisted coding

| Parameter | Required | Type | Default | Description |
|------|------|------|--------|------|
| `PROMPT` | Yes | string | — | Task prompt sent to Codex |
| `cd` | Yes | string | — | Working directory path |
| `sandbox` | No | string | `read-only` | Sandbox policy |

### web_search — web search

| Parameter | Required | Type | Default | Description |
|------|------|------|--------|------|
| `query` | Yes | string | — | Natural-language search query |
| `platform` | No | string | — | Focus on a specific platform |
| `min_results` | No | int | 3 | Minimum number of results |
| `max_results` | No | int | 10 | Maximum number of results |

### web_fetch — web content fetcher

| Parameter | Required | Type | Default | Description |
|------|------|------|--------|------|
| `url` | Yes | string | — | A valid HTTP/HTTPS URL |

### get_config_info — Grok config diagnostics

No parameters. Returns the current Grok configuration and tests the API connection.

## FAQ

### Command not found after install?

Verify the binary is on your `PATH` and marked executable. Run `which ikuncode-aimcp` to check.

### Gemini tools unavailable?

Confirm that `GEMINI_API_KEY` is set correctly and that Gemini CLI is installed locally.

### Grok search returns an error?

Run the `get_config_info` tool to inspect your API configuration and connection status.

### More questions?

See the [FAQ](/support/faq) or contact [after-sales support](/support/after-sales).
