# OpenClaw Configuration Guide

**A multi-platform AI coding agent supporting terminal TUI, Web Dashboard, and Telegram Bot**

::: tip 📋 Overview
OpenClaw is a feature-rich AI coding agent with terminal TUI, a Web Dashboard, and Telegram Bot remote access. It's a great fit for developers who want to run an AI coding assistant on a server.
:::

::: warning ⚠️ Supported Environments
This guide is for **Linux cloud servers** and **macOS**.
:::

::: danger 🚨 Getting "403 Your request was blocked"?
When using the IKunCode channel, you **must** add a `headers` field to the provider configuration or requests will be blocked with 403:

```json
"headers": {
  "User-Agent": "claude-cli/2.0.76 (external, cli)",
  "Authorization": "Bearer sk-xxxx"
}
```

- The `Authorization` value must match `apiKey`, formatted as `Bearer sk-your-key`
- `User-Agent` must match the example exactly — don't omit it or change the format
- After editing, run `openclaw gateway restart` to apply the changes

See [Full configuration example](#-full-configuration-example) below.
:::

## 🔗 Related Links

| Resource | URL |
|------|------|
| OpenClaw website | [https://openclaw.ai](https://openclaw.ai) |

## ✨ Features

- ✅ **Terminal TUI**: CLI interface, perfect for SSH environments
- ✅ **Web Dashboard**: Browser-based management
- ✅ **Telegram Bot**: Remote chat through Telegram
- ✅ **Multi-model support**: Claude, GPT, Gemini, and more
- ✅ **Gateway**: Built-in gateway service with reverse-proxy support
- ✅ **Skill extensions**: Install extension skills via the Dashboard

## 🛠️ Install & Initialize

### Step 1: Run the Install Script

SSH into your server (or open a macOS terminal) and run:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Wait patiently for the installer to finish.

### Step 2: Initial Setup

The installer will prompt for the following options — pick as suggested:

| Step | Choice | Description |
|------|------|------|
| Launch mode | **QuickStart** | Quick start mode |
| Provider setup | **Skip for now** | Skip — we'll edit the config file manually |
| Adapter | **anthropic** | Use the Anthropic adapter |
| Model | **opus-4.5** | Or any model you want |
| Social adapter | As needed | E.g. Telegram (optional) |
| Skill installation | Skip | Install later from the Dashboard |
| Hooks | Select all | Use space to select all, then Enter |
| Default open mode | Skip | Skip for now |
| Shell completion | **yes** | Install command-line completion |

## ⚙️ Channel & Model Configuration

### Step 1: Edit the Config File

Open the OpenClaw config file:

```bash
vim ~/.openclaw/openclaw.json
```

Use the [Full configuration example](#-full-configuration-example) below as a reference and fill in your provider and model details.

### Step 2: Add Your API Key

Under `models.providers`, configure the provider info. Replace `apiKey` and `headers.Authorization` with the API Key you created in the [IkunCode console](https://api.ikuncode.cc/console/token).

::: tip 💡 Supported Groups
OpenClaw uses an API Key from the **reverse-only group**.

![Reverse-only group](/images/逆向分组.png)

Select the reverse-only group when you [create a dedicated Key](/guide/create-key).
:::

### Step 3: Restart the Gateway

```bash
openclaw gateway restart
```

### Step 4: Verify the Configuration

Launch the TUI to test that the model works:

```bash
openclaw tui
```

Once verified, exit the TUI with `/quit`.

## 🌐 Access the Dashboard in Your Browser

### Get the Dashboard URL

Run the console command to retrieve the Dashboard URL, then open it in your browser to reach the management panel.

::: warning ⚠️ Server Users
If OpenClaw runs on a remote server, you need to:

**1. Configure a reverse proxy**

Use Nginx (or another reverse proxy) to proxy OpenClaw and configure an SSL certificate.

**2. Update the config file**

Edit `~/.openclaw/openclaw.json` and add the following under `gateway`:

```json
"controlUi": {
  "allowInsecureAuth": true
}
```

**3. Restart the gateway**

```bash
openclaw gateway restart
```
:::

Open the Dashboard URL with the Token to access the admin interface.

## 🤖 Configure a Telegram Bot (Optional)

If you enabled the Telegram adapter during install, you can grant the bot access like so:

### Step 1: Chat with the Bot

Find the bot you created via **@BotFather** in Telegram and start a conversation.

### Step 2: Get the Pairing Code

On first message you'll receive a **Pairing Code**.

### Step 3: Approve the Pairing

Run the following in the console to authorize:

```bash
openclaw pairing approve telegram your_pairing_code
```

Once paired, you can chat remotely with OpenClaw through the Telegram Bot.

## 📄 Full Configuration Example

Below is a complete `openclaw.json` example using the IkunCode channel (path: `~/.openclaw/openclaw.json`):

::: tip 💡 Note
`sk-xxxx` and `xxxxx` are placeholders — replace them with your own API Key and Bot Token.
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

### Key Fields

| Field | Description |
|------|------|
| `agents.defaults.model.primary` | Default model, formatted as `provider/model-id` |
| `agents.defaults.maxConcurrent` | Max concurrent main agents |
| `agents.defaults.subagents.maxConcurrent` | Max concurrent subagents |
| `agents.defaults.compaction.mode` | Context compaction mode — `safeguard` is the safe option |
| `agents.defaults.workspace` | Workspace directory path — adjust for your OS |
| `models.providers` | Model provider configuration — supports multiple providers |
| `models.providers.*.baseUrl` | API base URL — always `https://api.ikuncode.cc/v1` for IkunCode |
| `models.providers.*.apiKey` | API Key for the corresponding group |
| `models.providers.*.api` | API protocol — fixed to `openai-completions` |
| `models.providers.*.headers` | Request headers — must include `User-Agent` and `Authorization` |
| `gateway.port` | Gateway listen port — defaults to `18789` |
| `gateway.bind` | Bind mode — `loopback` for local-only access |
| `channels.telegram.botToken` | Telegram Bot Token from @BotFather |
| `logging.level` | Log level — set to `trace` while troubleshooting |

::: warning ⚠️ Notes
- **`Authorization` in headers** must match `apiKey`, formatted as `Bearer sk-xxxx`
- **`User-Agent`** should match the example for requests to be recognized correctly
- **Workspace path**: Windows users use `\\` (double backslashes); Linux/macOS users use forward slashes (e.g. `/root/.openclaw/workspace`)
- **All `cost` set to 0**: When using IkunCode as a relay, local billing isn't needed
:::

## FAQ

### Install script fails?

- Make sure you can reach `openclaw.ai`
- Confirm `curl` and `bash` are installed
- If you're on a server in mainland China, you may need a proxy

### How do I fix 403 `Your request was blocked`?

A `403 Your request was blocked` means the request is missing the right headers. You **must** add a `headers` field to the provider configuration:

```json
"headers": {
  "User-Agent": "claude-cli/2.0.76 (external, cli)",
  "Authorization": "Bearer sk-xxxx"
}
```

::: danger 🚨 Important
- The `Authorization` value in `headers` must match `apiKey`, formatted as `Bearer sk-your-key`
- `User-Agent` must keep the exact example format, or requests will be blocked
- Run `openclaw gateway restart` after updating the config
:::

### Model still unavailable after restarting the gateway?

- Confirm the API Key was entered correctly
- Verify the Key's group supports the model you chose
- Check the OpenClaw logs for the actual error

### More Questions

See the [FAQ](/support/faq) or contact [support](/support/after-sales).
