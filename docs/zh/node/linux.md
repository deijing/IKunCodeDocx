# Linux 平台安装 Node.js

**三大 AI 编程工具的必备运行环境**

::: tip 💡 重要说明
Claude Code、CodeX 和 Gemini CLI 都需要 Node.js 18+ 运行环境。
如果您已安装 Node.js 18 或更高版本，可跳过本章节。
验证命令：`node -v`
:::

## Ubuntu/Debian 发行版

### 使用 NodeSource 仓库（推荐）

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# 验证安装
node --version
npm --version
```

## CentOS/RHEL 发行版

```bash
curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
sudo yum install -y nodejs

# 验证安装
node --version
npm --version
```

## Fedora 发行版

```bash
sudo dnf install -y nodejs npm

# 验证安装
node --version
npm --version
```

## Arch Linux

```bash
sudo pacman -S nodejs npm

# 验证安装
node --version
npm --version
```

## 使用 nvm（推荐进阶用户）

nvm 允许您管理多个 Node.js 版本：

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 重新加载 shell 配置
source ~/.bashrc

# 安装 Node.js LTS
nvm install --lts

# 设置默认版本
nvm use --lts
nvm alias default node
```

## 常见问题

### 权限问题
如果遇到权限问题，可以配置 npm 使用用户目录：

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### 版本过旧
如果系统自带的 Node.js 版本过旧，建议使用 NodeSource 仓库或 nvm 安装最新 LTS 版本。

## 下一步

::: tip ✅ 环境准备完成！
现在您可以继续安装 Claude Code、CodeX 或 Gemini CLI 了。
:::

- [安装 Claude Code](/deploy/claude-code)
- [安装 CodeX](/deploy/codex)
- [安装 Gemini CLI](/deploy/gemini-cli)
