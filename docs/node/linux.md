# Installing Node.js on Linux

**The runtime required by all three AI coding tools**

::: tip 💡 Important
Claude Code, CodeX, and Gemini CLI all require Node.js 18+ to run.
If you already have Node.js 18 or higher installed, you can skip this section.
Verify with: `node -v`
:::

## Ubuntu/Debian

### Using the NodeSource repository (recommended)

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify the installation
node --version
npm --version
```

## CentOS/RHEL

```bash
curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
sudo yum install -y nodejs

# Verify the installation
node --version
npm --version
```

## Fedora

```bash
sudo dnf install -y nodejs npm

# Verify the installation
node --version
npm --version
```

## Arch Linux

```bash
sudo pacman -S nodejs npm

# Verify the installation
node --version
npm --version
```

## Using nvm (recommended for power users)

nvm lets you manage multiple Node.js versions:

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload the shell configuration
source ~/.bashrc

# Install the Node.js LTS release
nvm install --lts

# Set it as the default version
nvm use --lts
nvm alias default node
```

## Troubleshooting

### Permission issues
If you hit permission issues, configure npm to use a directory in your home folder:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Version too old
If your distro ships an outdated Node.js, install the latest LTS via the NodeSource repository or nvm.

## Next steps

::: tip ✅ Environment ready!
You're now set to install Claude Code, CodeX, or Gemini CLI.
:::

- [Install Claude Code](/deploy/claude-code)
- [Install CodeX](/deploy/codex)
- [Install Gemini CLI](/deploy/gemini-cli)
