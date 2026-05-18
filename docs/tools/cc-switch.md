# CC-Switch Quick Configuration Tool

**All-in-One AI CLI manager — desktop application**

## 🔗 Related links

| Resource | URL |
|------|------|
| GitHub Releases | [cc-switch/releases](https://github.com/farion1231/cc-switch/releases) |
| CC-Switch docs site | [ccswitch.lovable.app](https://ccswitch.lovable.app/) |

## 🎯 About the tool

CC-Switch is a cross-platform desktop application that provides unified management for Claude Code, Codex, and Gemini CLI. Through an intuitive GUI, it handles configuration switching, MCP server management, system prompts, and Claude Skills management.

::: tip 💡 Key features
• One-click switching between provider configurations for different AI tools
• API endpoint speed tests with quality indicators
• Multi-preset system prompt management
• Unified architecture for managing MCP servers
• Claude Skills discovery and installation system
• Configuration backup/restore (last 10 automatically retained)
• Deep link protocol support (`ccswitch://`)
• Environment variable conflict detection
:::

![CC-Switch application interface](/images/tu6.png)

## 📦 Installation

### 🖥️ Windows

#### Option 1: MSI installer (recommended)

1. Open the project releases page: [https://github.com/farion1231/cc-switch/releases](https://github.com/farion1231/cc-switch/releases)
2. Download the latest `.msi` installer
3. Run the installer and follow the wizard
4. Launch CC-Switch from the Start menu after installation

#### Option 2: Portable version (no installation)

1. Download the `.zip` portable archive
2. Extract it to any directory
3. Run `cc-switch.exe` to start using it

### 🍏 macOS

#### Recommended: install via Homebrew

```bash
# Add the tap
brew tap farion1231/ccswitch

# Install cc-switch
brew install --cask cc-switch
```

#### Manual installation

1. Open the [Releases page](https://github.com/farion1231/cc-switch/releases)
2. Download the `.dmg` package
3. Open the DMG and drag CC-Switch into the Applications folder
4. Launch it from Launchpad or the Applications folder

### 🐧 Linux

#### Debian/Ubuntu family (recommended)

```bash
sudo dpkg -i cc-switch_*.deb
sudo apt-get install -f  # Fix dependencies
```

#### Universal AppImage

```bash
chmod +x cc-switch_*.AppImage
./cc-switch_*.AppImage
```

#### Arch Linux (AUR)

```bash
paru -S cc-switch-bin
# or with yay
yay -S cc-switch-bin
```

## 🚀 Quick start

### Step 1: Initial setup

Open CC-Switch, go to the Settings page, and under the General tab turn on every switch in the Window Behavior section. This ensures auto-start, Claude Code plugin integration, minimize-to-tray, and other features work properly.

![CC-Switch initial settings screen](/images/cc-switch-init-settings.png)

::: tip 💡 Recommended configuration
Enable every switch in Window Behavior for the best experience: launch at startup, silent start, apply to the Claude Code plugin, skip first-run install confirmation, and minimize to tray on close.
:::

### Step 2: Add provider configurations

1. Click the plus button in the top-right to add a provider (Claude/Gemini)

   ![Add new provider configuration screen](/images/cc-switch-add-provider.png)

   ::: tip 💡 Gemini users
   If you're using Gemini CLI, create the **matching** API Key on the platform — not one from the Claude group.
   :::

2. Click the plus button in the top-right to add a provider (Codex)

   ![Add new provider configuration screen](/images/cc-switch-add-provider2.png)

3. Click "Save" to finish

::: warning ⚠️ Important
Different AI tools (Claude Code, Codex, Gemini CLI) need API Keys from different groups.
Pick the right group in the [status site](https://status.ikuncode.cc/) when creating your API Key.
:::

### Step 3: Switch providers

1. Pick the configuration you want to use from the provider list
2. Click "Enable"
3. **Or** use the system tray icon for instant switching

**Quick switching from the system tray:**
- Right-click the CC-Switch icon in the system tray
- Choose the provider you want from the menu
- The change takes effect immediately (Claude Code supports hot reload; other tools may need a restart)

### Step 4: Apply the configuration

After switching, close and relaunch the corresponding AI tool — it will pick up the new configuration automatically.

## 📖 Full documentation

For more configuration details and advanced features, see the [full CC-Switch documentation](https://www.ccswitch.io/zh/docs?section=getting-started).

## 🔗 Project resources

- **GitHub repo**: [https://github.com/farion1231/cc-switch](https://github.com/farion1231/cc-switch)
- **Bug reports**: [GitHub Issues](https://github.com/farion1231/cc-switch/issues)
- **Latest releases**: [Releases page](https://github.com/farion1231/cc-switch/releases)

::: info 🎉 Get started!
You can now manage configurations across multiple AI coding tools with ease using CC-Switch.
Enjoy a more productive development workflow!
:::
