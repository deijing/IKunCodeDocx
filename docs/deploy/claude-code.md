# Claude Code Deployment Guide

| Resource | URL |
|------|------|
| Official docs | [docs.claude.com](https://docs.claude.com/zh-CN/docs/claude-code/overview) |

::: tip 📋 Prerequisites
Complete the [Node.js installation](/node/windows) first and make sure Node.js 18+ is properly installed.
:::

## ⚡ First-Time Install Must-Read: Skip the Initialization Error

When using an API relay, Claude Code throws the following error on its first launch:

![Claude Code first launch error](/images/err.png)

```
Welcome to Claude Code
Unable to connect to Anthropic services
Failed to connect to api.anthropic.com: ERR_BAD_REQUEST
```

This happens because Claude Code tries to reach the official API for an initialization check on first launch, and an API relay cannot complete that step. **After installation but before the first launch**, use one of the methods below to skip it:

**Method 1: Skip with CC-Switch (recommended)**

Open the [CC-Switch configuration tool](/tools/cc-switch), go to **Settings → General**, and enable the **"Skip Claude Code first-launch confirmation"** option.

![CC-Switch skip first-launch confirmation](/images/docs.png)

**Method 2: Edit the configuration file manually**

Find the `~/.claude.json` file in your home directory and append `"hasCompletedOnboarding": true` at the end:

::: warning ⚠️ Mind the JSON format
Before adding the new field, **add an English comma** to the end of the previous field, otherwise a JSON syntax error will prevent Claude Code from starting.
:::

```json
{
  "installMethod": "unknown",
  "autoUpdates": true,
  "firstStartTime": "2025-07-14T06:11:03.877Z",
  "userID": "xxxx",
  "projects": {
    "/home/your-user": {
      "allowedTools": [],
      "history": [],
      "mcpContextUris": [],
      "mcpServers": {},
      "enabledMcpjsonServers": [],
      "disabledMcpjsonServers": [],
      "hasTrustDialogAccepted": false,
      "projectOnboardingSeenCount": 0,
      "hasClaudeMdExternalIncludesApproved": false,
      "hasClaudeMdExternalIncludesWarningShown": false
    }
  },  // [!code warning] Add an English comma here
  "hasCompletedOnboarding": true  // [!code ++] Add this new field
}
```

Save the changes and run `claude` again to use it normally.

> Reference: [Skipping Claude Code initialization](https://www.cnblogs.com/gordonMlxg/articles/19103691)

## 🚀 Quick Setup with CC-Switch (Recommended)

If you have installed the [CC-Switch quick configuration tool](/tools/cc-switch), you can manage Claude Code through a GUI without manually editing configuration files or environment variables.

### Why CC-Switch

- Intuitive graphical interface
- One-click switching between provider configurations
- Automatic management of environment variables and config files
- Configuration backup and restore
- Switch configurations without restarting your terminal

### Configuration Steps

**1. Launch CC-Switch and add a Claude Code configuration**

1. Open the CC-Switch app
2. Click the **Claude** tab at the top
3. Click the orange **+** button in the upper-right to add a new configuration

![CC-Switch add Claude Code configuration](/images/tu8.png)

**2. Fill in the provider details**

1. **Provider name**: any name you like (e.g. "ikuncode")
2. **API Base URL**: enter `https://api.ikuncode.cc`
3. **API Key**: paste the Claude-specific API Key you obtained from the IkunCode platform
4. **Model**: pick an available Claude model that fits your needs
5. Click **Save**

![CC-Switch Claude Code configuration details](/images/tu7.png)

::: tip 💡 Tips
- You can add multiple provider configurations (e.g. official, ikuncode, etc.)
- CC-Switch automatically updates the `~/.claude/settings.json` configuration file
- After switching, close and reopen Claude Code for the change to take effect
:::

**3. Activate the configuration**

1. Find the **ikuncode** entry you just created in the configuration list
2. Click the **Use** button to the right of the entry (or click the card itself)
3. The configuration is marked as **Active** (green badge)
4. Restart Claude Code and the new configuration takes effect

**4. Quick switching from the system tray**

CC-Switch supports quick switching from the system tray:
- Right-click the CC-Switch icon in the system tray
- Select the **Claude** category in the menu
- Pick the configuration you want
- The switch takes effect immediately, no need to open the main window

::: warning ⚠️ Notes
- Make sure the API Key you created on the IkunCode platform is in the Claude Code token group
- After switching configurations, restart Claude Code for the change to take effect
- You can test API endpoint speed in CC-Switch and pick the fastest one
:::

## ⌨️ Manual Command-Line Setup

If you prefer not to use CC-Switch, you can configure Claude Code from the command line.

### 🖥️ Windows

#### System requirements
Windows 10, 11

#### Installation

**Method 1: Native Install (recommended)**

PowerShell:
```powershell
irm https://claude.ai/install.ps1 | iex
```

CMD:
```cmd
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

**Method 2: NPM install (not recommended)**

::: warning ⚠️ npm install is not recommended
The npm channel lags behind and ships older versions. Prefer the Native methods above.
:::

```powershell
npm install -g @anthropic-ai/claude-code
```

Verify the installation:
```powershell
claude --version
```

#### Configure environment variables

PowerShell:
```powershell
[Environment]::SetEnvironmentVariable("ANTHROPIC_AUTH_TOKEN", "sk-xxx", "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://api.ikuncode.cc", "User")
```

CMD:
```cmd
setx ANTHROPIC_AUTH_TOKEN "sk-xxx"
setx ANTHROPIC_BASE_URL "https://api.ikuncode.cc"
```

::: tip 💡 Tip
Replace `sk-xxx` with your own API Key!
Restart your terminal after setting the variables so the changes take effect.
:::

4. Launch Claude

In a terminal, `cd` into a project directory (or any directory) and run `claude` to start.

### 🍏 macOS

#### System requirements
macOS 10.15 (Catalina) or later

#### Installation

**Method 1: Homebrew (recommended)**
```bash
brew install --cask claude-code
```

**Method 2: Curl script**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Method 3: NPM install (not recommended)**

::: warning ⚠️ npm install is not recommended
The npm channel lags behind and ships older versions. Prefer the Native methods above.
:::

```bash
npm install -g @anthropic-ai/claude-code
```

#### Verify the installation
```bash
claude -v
```

You should see something like: `1.0.108 (Claude Code)`

#### Configure environment variables

```bash
echo 'export ANTHROPIC_AUTH_TOKEN="sk-xxx"' >> ~/.bash_profile
echo 'export ANTHROPIC_BASE_URL="https://api.ikuncode.cc"' >> ~/.bash_profile
source ~/.bash_profile
```

::: tip 💡 Tip
Replace `sk-xxx` with your own API Key!
:::

#### Restart your terminal and launch Claude

After restarting your terminal, `cd` into a project directory (or any directory) and run `claude` to start.

### 🐧 Linux

#### System requirements
Linux distribution (Ubuntu 18.04+, CentOS 7+, Debian 9+, etc.)

#### Installation

**Method 1: Curl script (recommended)**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Method 2: NPM install (not recommended)**

::: warning ⚠️ npm install is not recommended
The npm channel lags behind and ships older versions. Prefer the Native methods above.
:::

```bash
npm install -g @anthropic-ai/claude-code
```

#### Verify the installation
```bash
claude -v
```

#### Configure environment variables

**Ubuntu/Debian (Bash)**
```bash
echo 'export ANTHROPIC_AUTH_TOKEN="sk-xxx"' >> ~/.bash_profile
echo 'export ANTHROPIC_BASE_URL="https://api.ikuncode.cc"' >> ~/.bash_profile
source ~/.bash_profile
```

**Fedora/CentOS (Zsh)**
```bash
echo 'export ANTHROPIC_AUTH_TOKEN="sk-xxx"' >> ~/.zshrc
echo 'export ANTHROPIC_BASE_URL="https://api.ikuncode.cc"' >> ~/.zshrc
source ~/.zshrc
```

::: tip 💡 Tip
Replace `sk-xxx` with your own API Key!
:::

#### Restart your terminal and launch Claude

After restarting your terminal, `cd` into a project directory (or any directory) and run `claude` to start.

## FAQ

### Command not found?
- Confirm Claude Code is installed correctly
- Check your PATH environment variable
- Restart the terminal window

### Connection failures?
- Check your network connection
- Confirm the API Key is correct
- Check that your balance is sufficient

### More questions
See the [FAQ](/support/faq) or contact [after-sales support](/support/after-sales).
