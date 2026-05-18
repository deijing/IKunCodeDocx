# Installing Node.js on macOS

**The runtime required by all three AI coding tools**

::: tip 💡 Important
Claude Code, CodeX, and Gemini CLI all require Node.js 18+ to run.
If you already have Node.js 18 or higher installed, you can skip this section.
Verify with: `node -v`
:::

## Option 1: Homebrew package manager (recommended)

```bash
# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node

# Verify the installation
node --version
npm --version
```

## Option 2: Official installer

1. Visit the Node.js website: [https://nodejs.org](https://nodejs.org)
2. Download the LTS `.pkg` installer
3. Run the installer and follow the prompts to complete the installation

## Verify the installation

Open Terminal and run:

```bash
node --version
npm --version
```

If a version number appears (e.g. v18.x.x or higher), the installation was successful.

## Troubleshooting

### Homebrew is slow
You can use a mainland China mirror:

```bash
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
```

### Permission issues
If you run into permission issues, don't use `sudo` — fix Homebrew permissions instead:

```bash
sudo chown -R $(whoami) /usr/local/bin /usr/local/lib
```

## Next steps

::: tip ✅ Environment ready!
You're now set to install Claude Code, CodeX, or Gemini CLI.
:::

- [Install Claude Code](/deploy/claude-code)
- [Install CodeX](/deploy/codex)
- [Install Gemini CLI](/deploy/gemini-cli)
