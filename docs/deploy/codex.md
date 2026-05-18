# CodeX Deployment Guide

**Enterprise AI Coding Assistant – Complete Deployment Manual**

| Resource | URL |
|------|------|
| Official docs | [developers.openai.com/codex](https://developers.openai.com/codex/) |

::: tip 📋 Prerequisites
Complete the [Node.js installation](/node/windows) and [CC-Switch tool installation](/tools/cc-switch) first.
:::

## 🎯 Quick Navigation

CodeX is the next-generation intelligent coding assistant built on the GPT-5 architecture, delivering outstanding code generation and optimization for developers.

**Deployment path**: system environment setup ➜ CLI tool installation ➜ API integration ➜ ready to code

## 🚀 Quick Setup with CC-Switch (Recommended)

::: warning ⚠️ Prerequisite
Before configuring CodeX with CC-Switch, make sure the CodeX CLI is globally installed via npm:

```bash
npm install -g @openai/codex@latest
```

Verify the installation: `codex --version`
:::

We recommend using the [CC-Switch quick configuration tool](/tools/cc-switch) for a GUI-based setup that requires no command-line work.

### Configuration Steps

**1. Launch CC-Switch and switch to the Codex tab**

1. Open the CC-Switch app
2. Click the **Codex** tab at the top
3. Click the orange **+** button in the upper-right to add a new configuration

![CC-Switch Codex tab](/images/tu9.png)

**2. Fill in the CodeX provider configuration**

1. **Provider name**: any name you like (e.g. "IkunCoding")
2. **Base URL**: enter `https://api.ikuncode.cc/v1`
3. **API Key**: paste the CodeX-specific API Key (from the codex token group) you obtained from the IkunCode platform
4. **Model**: select `gpt-5.4` (5.4 is the latest model at the time of writing)
5. **Other options**: adjust reasoning effort, network access, and other parameters as needed
6. Click **Save**

![CC-Switch add CodeX configuration](/images/tu10.png)
![CC-Switch CodeX configuration details](/images/tu11.png)

::: tip 💡 Tips
- CC-Switch automatically creates `~/.codex/config.toml` and `auth.json`
- You can add multiple provider configurations and switch at any time
- After switching, close and reopen CodeX for the change to take effect
:::

**3. Activate the configuration**

1. Find the **IkunCoding** entry you just created in the configuration list
2. Click the **Use** button to the right of the entry
3. The configuration is marked as **Active** (green badge)
4. Restart CodeX and the new configuration takes effect

**4. Quick switching from the system tray**

CC-Switch supports quick switching of CodeX configurations from the system tray:
- Right-click the CC-Switch icon in the system tray
- Select the **Codex** category in the menu
- Pick the configuration you want
- The switch takes effect immediately, no need to open the main window

::: warning ⚠️ Notes
- Make sure to create the API Key in the "codex" token group on the IkunCode platform
- CodeX API Keys and Claude Code API Keys are not interchangeable
- After switching configurations, restart CodeX for the change to take effect
- You can test API endpoint speed inside CC-Switch
:::

## ⌨️ Manual Command-Line Setup

If you prefer not to use CC-Switch, follow the steps below to configure CodeX manually.

### 🖥️ Windows

#### Step 1: Install the CodeX CLI

Open Command Prompt or PowerShell as Administrator and run:

```powershell
npm install -g @openai/codex@latest
codex --version
```

#### Step 2: Integrate the IkunCoding API service

**Get your API credentials**:
1. Visit the IkunCoding developer console
2. Sign up or log in
3. Navigate to the **API Key management** section
4. When creating a new key, be sure to select the **codex** token group
5. Save the generated API Key securely

::: danger 🔐 Security reminder
CodeX requires a dedicated token group and is fully isolated from the Claude Code token system.
:::

**Create the configuration directory**:
```powershell
mkdir %USERPROFILE%\.codex
cd %USERPROFILE%\.codex
```

**Create the configuration file: config.toml**
```toml
model_provider = "IkunCoding"
model = "gpt-5.4"
model_reasoning_effort = "xhigh"
disable_response_storage = true
approval_policy = "on-request"
sandbox_mode = "danger-full-access"
model_supports_reasoning_summaries = true

[model_providers.IkunCoding]
name = "ikun"
base_url = "https://api.ikuncode.cc/v1"
wire_api = "responses"
requires_openai_auth = true
```

**Create the auth file: auth.json**
```json
{
  "OPENAI_API_KEY": "Paste your CodeX-specific API Key here"
}
```

#### Step 3: Initialize a workspace

```powershell
mkdir my-codex-project
cd my-codex-project
codex
```

### 🍏 macOS

#### Install the CodeX CLI

```bash
npm install -g @openai/codex@latest
codex --version
```

#### Integrate the API service

**Create the configuration directory**:
```bash
mkdir -p ~/.codex
cd ~/.codex
```

**Create config.toml**:
```bash
cat > config.toml << 'EOF'
model_provider = "IkunCoding"
model = "gpt-5.4"
model_reasoning_effort = "xhigh"
disable_response_storage = true
approval_policy = "on-request"
sandbox_mode = "danger-full-access"
model_supports_reasoning_summaries = true

[model_providers.IkunCoding]
name = "ikun"
base_url = "https://api.ikuncode.cc/v1"
wire_api = "responses"
requires_openai_auth = true
EOF
```

**Create auth.json**:
```bash
cat > auth.json << 'EOF'
{
  "OPENAI_API_KEY": "Paste your CodeX-specific API Key here"
}
EOF
```

#### Initialize a workspace

```bash
mkdir my-codex-project
cd my-codex-project
codex
```

### 🐧 Linux

#### Install the CodeX CLI

```bash
sudo npm install -g @openai/codex@latest
codex --version
```

#### Integrate the API service

**Create the configuration directory**:
```bash
mkdir -p ~/.codex
cd ~/.codex
```

**Create config.toml**:
```bash
cat > config.toml << 'EOF'
model_provider = "IkunCoding"
model = "gpt-5.4"
model_reasoning_effort = "xhigh"
disable_response_storage = true
approval_policy = "on-request"
sandbox_mode = "danger-full-access"
model_supports_reasoning_summaries = true

[model_providers.IkunCoding]
name = "ikun"
base_url = "https://api.ikuncode.cc/v1"
wire_api = "responses"
requires_openai_auth = true
EOF
```

**Create auth.json**:
```bash
cat > auth.json << 'EOF'
{
  "OPENAI_API_KEY": "Paste your CodeX-specific API Key here"
}
EOF
```

#### Initialize a workspace

```bash
mkdir my-codex-project
cd my-codex-project
codex
```

## FAQ

### Are CodeX and Claude Code API Keys interchangeable?

No, they use different token groups:
- Claude Code: uses the Claude Code token group
- CodeX: uses the "codex" token group

Create the matching dedicated API Key on the IkunCode platform.

### Where are the configuration files stored?

- Windows: `%USERPROFILE%\.codex\`
- macOS/Linux: `~/.codex/`

### More questions

See the [FAQ](/support/faq) or contact [after-sales support](/support/after-sales).
