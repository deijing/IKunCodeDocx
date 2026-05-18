# ikuncode-aimcp - 统一 AI MCP 服务器

**一个二进制，三套 AI 引擎 — Gemini · Codex · Grok**

::: tip 📋 简介
ikuncode-aimcp 是一个用 Rust 编写的统一 MCP 服务器，将 Gemini CLI、Codex CLI 和 Grok Search 整合到单个进程中。配置一次，即可在 Cursor / Windsurf / Claude Desktop 等任意 MCP 客户端中使用全部工具。
:::

## 🔗 相关链接

| 资源 | 地址 |
|------|------|
| GitHub 仓库 | [xuxu777xu/ikuncode-aimcp](https://github.com/xuxu777xu/ikuncode-aimcp) |
| ikun API | [api.ikuncode.cc](https://api.ikuncode.cc) |

## ✨ 功能特点

- ✅ **一个二进制，全部工具**：只需配置一个 MCP 服务器，取代三个独立安装
- ✅ **运行时检测**：启动时自动检测可用工具，不可用的工具返回清晰错误信息
- ✅ **AdaptiveStdio 传输**：自动检测 JSONL 和 LSP 帧格式，最大化客户端兼容性
- ✅ **纯 Rust GrokSearch**：零 Python 依赖，通过 Grok API 实现 Web 搜索和内容抓取
- ✅ **Gemini 图像生成**：内置 `gemini_image` 工具，支持宽高比和分辨率控制

## 🧰 工具列表

| 工具 | 来源 | 描述 |
|------|------|------|
| `gemini` | Gemini CLI | AI 驱动的任务执行，支持会话连续性 |
| `gemini_image` | Gemini CLI | AI 图像生成，使用专用生图模型 |
| `codex` | Codex CLI | AI 辅助编码，支持沙箱策略 |
| `web_search` | Grok API | Web 搜索，返回结构化 JSON 结果 |
| `web_fetch` | Grok API | 抓取网页内容并转为 Markdown |
| `get_config_info` | Grok API | 显示配置信息并测试 API 连接 |

### 相关项目

| 项目 | 类型 | 适用场景 |
|------|------|----------|
| **ikuncode-aimcp**（本项目） | MCP Server | 所有 MCP 客户端通用，含 gemini_image 图像生成 |
| [ikunimage](/skills/ikunimage) | Claude Code Skill | Claude Code 专用 — 文生图 / 图生图 / 并发批量生成 |

## 🛠️ 安装

### 方式一：下载预编译二进制（推荐）

从 [GitHub Releases](https://github.com/xuxu777xu/ikuncode-aimcp/releases) 下载对应平台的二进制文件：

| 平台 | 文件名 |
|------|--------|
| Windows x64 | `ikuncode-aimcp-x86_64-pc-windows-msvc.exe` |
| macOS Apple Silicon | `ikuncode-aimcp-aarch64-apple-darwin` |
| macOS Intel | `ikuncode-aimcp-x86_64-apple-darwin` |
| Linux x64 | `ikuncode-aimcp-x86_64-unknown-linux-gnu` |

下载后放到 `PATH` 目录中即可使用。macOS / Linux 需要添加执行权限：

```bash
chmod +x ikuncode-aimcp-*
mv ikuncode-aimcp-* /usr/local/bin/ikuncode-aimcp
```

### 方式二：npm 安装

```bash
npm install -g ikuncode-aimcp
```

### 方式三：cargo 安装

```bash
cargo install --git https://github.com/xuxu777xu/ikuncode-aimcp.git
```

### 方式四：从源码编译

```bash
git clone https://github.com/xuxu777xu/ikuncode-aimcp.git
cd ikuncode-aimcp
cargo build --release
# 二进制文件在 target/release/ 目录下
```

## ⚙️ 配置 MCP 客户端

在你的 MCP 客户端（如 Claude Desktop、Cursor、Windsurf 等）中添加以下配置：

```json
{
  "mcpServers": {
    "ikuncode-aimcp": {
      "command": "ikuncode-aimcp",
      "env": {
        "GEMINI_API_KEY": "你的-gemini-api-key",
        "GROK_API_KEY": "你的-grok-api-key"
      }
    }
  }
}
```

::: warning ⚠️ 环境变量说明
- `GEMINI_API_KEY`：用于 Gemini 相关工具（`gemini`、`gemini_image`）
- `GROK_API_KEY`：用于 Grok 搜索工具（`web_search`、`web_fetch`）
- Codex 工具使用独立配置，请参考 [Codex 部署文档](/deploy/codex)
:::

## 📖 工具使用说明

### gemini — AI 任务执行

| 参数 | 必填 | 类型 | 默认值 | 描述 |
|------|------|------|--------|------|
| `PROMPT` | 是 | string | — | 发送给 Gemini 的任务指令 |
| `sandbox` | 否 | bool | false | 在沙箱模式下运行 |
| `SESSION_ID` | 否 | string | — | 恢复已有会话，用于多轮对话 |
| `model` | 否 | string | — | 模型覆盖 |
| `timeout_secs` | 否 | int | 600 | 超时时间（1–3600 秒） |

### gemini_image — 图像生成

| 参数 | 必填 | 类型 | 默认值 | 描述 |
|------|------|------|--------|------|
| `PROMPT` | 是 | string | — | 图像生成指令 |
| `model` | 否 | string | — | 模型覆盖 |
| `output_dir` | 否 | string | — | 图片保存目录 |
| `aspect_ratio` | 否 | string | — | 宽高比（1:1 / 16:9 / 9:16 等） |
| `image_size` | 否 | string | — | 分辨率（1K / 2K / 4K） |
| `timeout_secs` | 否 | int | 600 | 超时时间（1–3600 秒） |

### codex — AI 辅助编码

| 参数 | 必填 | 类型 | 默认值 | 描述 |
|------|------|------|--------|------|
| `PROMPT` | 是 | string | — | 发送给 Codex 的任务指令 |
| `cd` | 是 | string | — | 工作目录路径 |
| `sandbox` | 否 | string | `read-only` | 沙箱策略 |

### web_search — Web 搜索

| 参数 | 必填 | 类型 | 默认值 | 描述 |
|------|------|------|--------|------|
| `query` | 是 | string | — | 自然语言搜索查询 |
| `platform` | 否 | string | — | 聚焦特定平台 |
| `min_results` | 否 | int | 3 | 最少返回结果数 |
| `max_results` | 否 | int | 10 | 最多返回结果数 |

### web_fetch — 网页内容抓取

| 参数 | 必填 | 类型 | 默认值 | 描述 |
|------|------|------|--------|------|
| `url` | 是 | string | — | 有效的 HTTP/HTTPS 网址 |

### get_config_info — Grok 配置诊断

无参数。返回当前 Grok 配置信息并测试 API 连接。

## 常见问题

### 安装后命令找不到？

确认二进制文件已放到 `PATH` 目录中，且有执行权限。可运行 `which ikuncode-aimcp` 检查。

### Gemini 工具不可用？

检查 `GEMINI_API_KEY` 环境变量是否正确设置，以及本地是否安装了 Gemini CLI。

### Grok 搜索返回错误？

运行 `get_config_info` 工具检查 API 配置和连接状态。

### 更多问题

请查看 [FAQ](/support/faq) 或联系[售后支持](/support/after-sales)。
