# OpenClaw 配置指南

**多平台 AI 编程代理，支持终端 TUI、Web Dashboard 和 Telegram Bot**

::: tip 📋 简介
OpenClaw 是一款功能丰富的 AI 编程代理工具，支持终端 TUI 交互、Web Dashboard 管理和 Telegram Bot 远程访问。适合需要在服务器环境中运行 AI 编程助手的开发者。
:::

::: warning ⚠️ 适用环境
此教程适合 **Linux 云服务器** 和 **macOS** 系统用户。
:::

::: danger 🚨 遇到 403 Your request was blocked？
使用 IKunCode 渠道时，**必须**在供应商配置中添加 `headers` 字段，否则请求会被拦截返回 403：

```json
"headers": {
  "User-Agent": "claude-cli/2.0.76 (external, cli)",
  "Authorization": "Bearer sk-xxxx"
}
```

- `Authorization` 的值必须与 `apiKey` 一致，格式为 `Bearer sk-你的密钥`
- `User-Agent` 必须保持示例中的格式，不可省略或随意修改
- 修改后执行 `openclaw gateway restart` 重启网关生效

详见下方 [完整配置实例](#📄-完整配置实例)。
:::

## 🔗 相关链接

| 资源 | 地址 |
|------|------|
| OpenClaw 官网 | [https://openclaw.ai](https://openclaw.ai) |

## ✨ 功能特点

- ✅ **终端 TUI**：命令行交互界面，适合 SSH 环境
- ✅ **Web Dashboard**：浏览器可视化管理面板
- ✅ **Telegram Bot**：支持通过 Telegram 远程对话
- ✅ **多模型支持**：Claude、GPT、Gemini 等多种模型
- ✅ **Gateway 网关**：内置网关服务，支持反向代理
- ✅ **Skill 扩展**：可通过 Dashboard 安装扩展技能

## 🛠️ 安装与初始化

### 第一步：运行安装脚本

登录服务器 SSH 或在 macOS 终端中运行以下命令：

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

耐心等待安装流程结束。

### 第二步：初始化配置

安装过程中会依次出现以下选项，按照说明操作：

| 步骤 | 选择 | 说明 |
|------|------|------|
| 启动方式 | **QuickStart** | 快速开始模式 |
| 供应商设置 | **Skip for now** | 先跳过，后续手动编辑配置文件 |
| 适配器选择 | **anthropic** | 选择 Anthropic 适配器 |
| 模型选择 | **opus-4.5** | 或选择你需要的模型 |
| 社交适配器 | 按需选择 | 如 Telegram（可选） |
| Skill 安装 | 跳过 | 后续可通过 Dashboard 安装 |
| Hook 选择 | 全选 | 使用空格键全选后回车确认 |
| 打开方式 | 跳过 | 先跳过 |
| Shell 补全 | **yes** | 安装命令行自动补全 |

## ⚙️ 渠道与模型配置

### 第一步：编辑配置文件

打开 OpenClaw 的配置文件进行编辑：

```bash
vim ~/.openclaw/openclaw.json
```

参照下方 [完整配置实例](#📄-完整配置实例) 填入你的供应商和模型信息。

### 第二步：填入 API Key

在 `models.providers` 中配置供应商信息，将 `apiKey` 和 `headers.Authorization` 替换为你在 [IkunCode 控制台](https://api.ikuncode.cc/console/token) 创建的 API Key。

::: tip 💡 支持的分组
OpenClaw 使用 **逆向分组** 的 API Key。

请在 [创建专属 Key](/guide/create-key) 时选择逆向分组。
:::

### 第三步：重启网关

```bash
openclaw gateway restart
```

### 第四步：验证配置

运行以下命令进入 TUI 界面测试模型是否正常：

```bash
openclaw tui
```

测试成功后输入 `/quit` 退出 TUI。

## 🌐 浏览器访问 Dashboard

### 获取 Dashboard URL

在控制台运行命令获取 Dashboard URL，在浏览器中访问即可进入管理面板。

::: warning ⚠️ 服务器用户注意
如果你在远程服务器运行 OpenClaw，需要：

**1. 配置反向代理**

使用 Nginx 或其他反向代理工具反代 OpenClaw 服务，并设置 SSL 证书。

**2. 修改配置文件**

编辑 `~/.openclaw/openclaw.json`，在 `gateway` 字段下添加：

```json
"controlUi": {
  "allowInsecureAuth": true
}
```

**3. 重启网关**

```bash
openclaw gateway restart
```
:::

访问带有 Token 的 Dashboard URL 即可进入后台界面。

## 🤖 配置 Telegram Bot（可选）

如果安装时选择了 Telegram 适配器，可以通过以下步骤配置 Bot 访问权限：

### 第一步：与 Bot 对话

在 Telegram 中找到你通过 **@BotFather** 创建的机器人，发起对话。

### 第二步：获取 Pairing Code

首次对话后会收到一个 **Pairing Code**。

### 第三步：授权配对

在控制台运行以下命令完成授权：

```bash
openclaw pairing approve telegram 你的Pairing_Code
```

配对成功后，即可通过 Telegram Bot 与 OpenClaw 进行远程对话。

## 📄 完整配置实例

以下是一份接入 IkunCode 渠道的 `openclaw.json` 完整配置参考（路径：`~/.openclaw/openclaw.json`）：

::: tip 💡 说明
配置中的 `sk-xxxx` 和 `xxxxx` 为占位符，请替换为你自己的 API Key 和 Bot Token。
:::

```json
{
  "messages": {
    "ackReactionScope": "group-mentions"
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "ikuncode-claude/claude-opus-4-5-20251101"
      },
      "maxConcurrent": 4,
      "subagents": {
        "maxConcurrent": 8
      },
      "compaction": {
        "mode": "safeguard"
      },
      "workspace": "C:\\Users\\Administrator\\.openclaw\\workspace"
    }
  },
  "models": {
    "providers": {
      "ikuncode-claude": {
        "baseUrl": "https://api.ikuncode.cc/v1",
        "apiKey": "sk-xxxx",
        "api": "openai-completions",
        "headers": {
          "User-Agent": "claude-cli/2.0.76 (external, cli)",
          "Authorization": "Bearer sk-xxxx"
        },
        "models": [
          {
            "id": "claude-opus-4-5-20251101",
            "name": "claude-opus-4-5-20251101",
            "contextWindow": 200000,
            "maxTokens": 32000,
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            }
          }
        ]
      },
      "ikuncode-codex": {
        "baseUrl": "https://api.ikuncode.cc/v1",
        "apiKey": "sk-xxxx",
        "api": "openai-completions",
        "headers": {
          "User-Agent": "codex_cli_rs/0.77.0 (Windows 10.0.26100; x86_64) WindowsTerminal",
          "Authorization": "Bearer sk-xxxx"
        },
        "models": [
          {
            "id": "gpt-5.2-codex",
            "name": "gpt-5.2-codex",
            "contextWindow": 200000,
            "maxTokens": 32000,
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            }
          }
        ]
      }
    }
  },
  "gateway": {
    "mode": "local",
    "auth": {
      "mode": "token",
      "token": "xxxx"
    },
    "port": 18789,
    "bind": "loopback",
    "tailscale": {
      "mode": "off",
      "resetOnExit": false
    }
  },
  "auth": {
    "profiles": {}
  },
  "plugins": {
    "entries": {
      "telegram": {
        "enabled": true
      }
    }
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "xxxxx"
    }
  },
  "logging": {
    "level": "trace",
    "consoleLevel": "debug",
    "consoleStyle": "pretty"
  },
  "commands": {
    "restart": true
  },
  "skills": {
    "install": {
      "nodeManager": "npm"
    }
  }
}
```

### 关键字段说明

| 字段 | 说明 |
|------|------|
| `agents.defaults.model.primary` | 默认使用的模型，格式为 `供应商名/模型ID` |
| `agents.defaults.maxConcurrent` | 主代理最大并发数 |
| `agents.defaults.subagents.maxConcurrent` | 子代理最大并发数 |
| `agents.defaults.compaction.mode` | 上下文压缩模式，`safeguard` 为安全模式 |
| `agents.defaults.workspace` | 工作区目录路径，按你的系统修改 |
| `models.providers` | 模型供应商配置，可配置多个供应商 |
| `models.providers.*.baseUrl` | API 基础地址，IkunCode 统一为 `https://api.ikuncode.cc/v1` |
| `models.providers.*.apiKey` | 对应分组的 API Key |
| `models.providers.*.api` | 接口协议，固定为 `openai-completions` |
| `models.providers.*.headers` | 请求头，需包含 `User-Agent` 和 `Authorization` |
| `gateway.port` | 网关监听端口，默认 `18789` |
| `gateway.bind` | 绑定模式，`loopback` 仅本机访问 |
| `channels.telegram.botToken` | Telegram Bot Token，通过 @BotFather 获取 |
| `logging.level` | 日志级别，排查问题时可设为 `trace` |

::: warning ⚠️ 注意事项
- **Headers 中的 Authorization** 必须与 `apiKey` 保持一致，格式为 `Bearer sk-xxxx`
- **User-Agent** 建议保持示例中的格式，确保请求正常识别
- **workspace 路径**：Windows 用户使用 `\\` 双反斜杠，Linux/macOS 用户使用 `/` 正斜杠（如 `/root/.openclaw/workspace`）
- **cost 全部设为 0**：通过 IkunCode 中转使用时无需在本地计费
:::

## 常见问题

### 安装脚本执行失败？

- 确认网络连接正常，能访问 `openclaw.ai`
- 确认系统已安装 `curl` 和 `bash`
- 如果在国内服务器，可能需要配置代理

### 遇到 403 `Your request was blocked` 怎么办？

如果请求返回 `403 Your request was blocked`，说明缺少正确的请求头。**必须**在供应商配置中添加 `headers` 字段：

```json
"headers": {
  "User-Agent": "claude-cli/2.0.76 (external, cli)",
  "Authorization": "Bearer sk-xxxx"
}
```

::: danger 🚨 重要
- `headers` 中的 `Authorization` 值必须与 `apiKey` 一致，格式为 `Bearer sk-你的密钥`
- `User-Agent` 必须保持示例格式，否则请求会被拦截
- 配置完成后执行 `openclaw gateway restart` 重启网关
:::

### Gateway 重启后模型仍不可用？

- 检查 API Key 是否正确填入
- 确认 Key 对应的分组支持你选择的模型
- 查看 OpenClaw 日志排查具体错误

### 更多问题

请查看 [FAQ](/support/faq) 或联系[售后支持](/support/after-sales)。
