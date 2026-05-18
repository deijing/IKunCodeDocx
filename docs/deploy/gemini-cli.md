# Gemini CLI Installation Steps

**Google AI Coding Assistant Installation Guide**

| Resource | URL |
|------|------|
| Official docs | [geminicli.com/docs](https://geminicli.com/docs/) |

::: tip 📋 Prerequisites
Complete the [Node.js installation](/node/windows) first and make sure Node.js 18+ is properly installed.
:::

::: info 🚀 Gemini CLI Quick Start
Google's AI coding assistant, powered by Gemini 2.5 Pro

**1️⃣** Install the CLI &nbsp;&nbsp;&nbsp;
**2️⃣** Configure the API Key &nbsp;&nbsp;&nbsp;
**3️⃣** Start coding
:::

## 🚀 Quick Setup with CC-Switch (Recommended)

::: warning ⚠️ Prerequisite
Before configuring Gemini CLI with CC-Switch, make sure the Gemini CLI is globally installed via npm:

```bash
npm install -g @google/gemini-cli
```

Verify the installation: `gemini --version`
:::

We recommend using the [CC-Switch quick configuration tool](/tools/cc-switch) for a GUI-based setup so you don't have to create configuration files by hand.

### Configuration Steps

**1. Launch CC-Switch and switch to the Gemini tab**

1. Open the CC-Switch app
2. Click the **Gemini** tab at the top
3. Click the orange **+** button in the upper-right to add a new configuration

![CC-Switch Gemini tab](/images/tu12.png)

**2. Fill in the Gemini CLI provider configuration**

1. **Provider name**: any name you like (e.g. "ikuncode")
2. **Base URL**: enter `https://api.ikuncode.cc`
3. **API Key**: paste the Gemini-specific API Key you obtained from the IkunCode platform
4. **Model**: select `gemini-3-pro-preview` or another available model
5. **Safety settings**: adjust as needed (optional)
6. Click **Save**

![CC-Switch add Gemini CLI configuration](/images/tu13.png)
![CC-Switch Gemini CLI configuration details](/images/tu14.png)

::: tip 💡 Tips
- CC-Switch automatically creates `~/.gemini/.env` and `settings.json`
- You can add multiple provider configurations and switch at any time
- After switching, close and reopen Gemini CLI for the change to take effect
:::

**3. Activate the configuration**

1. Find the **ikuncode** entry you just created in the configuration list
2. Click the **Use** button to the right of the entry
3. The configuration is marked as **Active** (green badge)
4. Restart Gemini CLI and the new configuration takes effect

**4. Quick switching from the system tray**

CC-Switch supports quick switching of Gemini CLI configurations from the system tray:
- Right-click the CC-Switch icon in the system tray
- Select the **Gemini** category in the menu
- Pick the configuration you want
- The switch takes effect immediately, no need to open the main window

::: warning ⚠️ Notes
- Make sure to create a Gemini CLI-specific API Key on the IkunCode platform
- Gemini API Keys are not interchangeable with Claude Code/CodeX API Keys
- After switching configurations, restart Gemini CLI for the change to take effect
- You can test API endpoint speed inside CC-Switch
:::

## ⌨️ Manual Command-Line Setup

If you prefer not to use CC-Switch, follow the steps below to install and configure Gemini CLI manually.

### 🖥️ Windows Installation Tutorial

#### 1️⃣ Install Gemini CLI globally

```powershell
npm install -g @google/gemini-cli
```

#### 2️⃣ Configure Gemini CLI

::: warning ⚠️ Important
Replace the `GEMINI_API_KEY` below with the Gemini CLI-specific API Key you got from [https://ikuncode.cc](https://ikuncode.cc)!
:::

**3.1 Create the gemini folder**

In your user directory: `%USERPROFILE%\.gemini\`

**3.2 Create the .env file**

Create a new `.env` file inside the `gemini` folder:

```env
GOOGLE_GEMINI_BASE_URL=https://api.ikuncode.cc
GEMINI_API_KEY=Get your dedicated API Key at https://ikuncode.cc
GEMINI_MODEL=gemini-3-pro-preview
```

**3.3 Create the settings.json file**

Create a new `settings.json` file inside the `gemini` folder:

```json
{
  "ide": {
    "enabled": true
  },
  "security": {
    "auth": {
      "selectedType": "gemini-api-key"
    }
  }
}
```

#### 3️⃣ Launch Gemini CLI

```powershell
gemini
```

::: info 🎉 Getting started with Gemini CLI
• Enter a context description like "M kikasuna"
• Agent Mode for automated coding
• Google Search for real-time web search
:::

### 🍏 macOS Installation Tutorial

#### 1️⃣ Install Gemini CLI globally

```bash
npm install -g @google/gemini-cli
```

#### 2️⃣ Configure Gemini CLI

**3.1 Create the configuration directory**:

```bash
mkdir -p ~/.gemini
cd ~/.gemini
```

**3.2 Create the .env file**:

```bash
cat > .env << 'EOF'
GOOGLE_GEMINI_BASE_URL=https://api.ikuncode.cc
GEMINI_API_KEY=Get your dedicated API Key at https://ikuncode.cc
GEMINI_MODEL=gemini-3-pro-preview
EOF
```

**3.3 Create the settings.json file**:

```bash
cat > settings.json << 'EOF'
{
  "ide": {
    "enabled": true
  },
  "security": {
    "auth": {
      "selectedType": "gemini-api-key"
    }
  }
}
EOF
```

#### 3️⃣ Launch Gemini CLI

```bash
gemini
```

### 🐧 Linux Installation Tutorial

#### 1️⃣ Install Gemini CLI globally

```bash
sudo npm install -g @google/gemini-cli
```

#### 2️⃣ Configure Gemini CLI

**3.1 Create the configuration directory**:

```bash
mkdir -p ~/.gemini
cd ~/.gemini
```

**3.2 Create the .env file**:

```bash
cat > .env << 'EOF'
GOOGLE_GEMINI_BASE_URL=https://api.ikuncode.cc
GEMINI_API_KEY=Get your dedicated API Key at https://ikuncode.cc
GEMINI_MODEL=gemini-3-pro-preview
EOF
```

**3.3 Create the settings.json file**:

```bash
cat > settings.json << 'EOF'
{
  "ide": {
    "enabled": true
  },
  "security": {
    "auth": {
      "selectedType": "gemini-api-key"
    }
  }
}
EOF
```

#### 3️⃣ Launch Gemini CLI

```bash
gemini
```

::: info 🎉 Deployment complete!
You can now use Gemini CLI for AI-assisted coding.
:::

## FAQ

### Where do I get the API Key?

Sign in to the [IkunCode platform](https://api.ikuncode.cc) and create a Gemini CLI-specific API Key.

### Configuration file location

- Windows: `%USERPROFILE%\.gemini\`
- macOS/Linux: `~/.gemini/`

### More questions

See the [FAQ](/support/faq) or contact [after-sales support](/support/after-sales).
