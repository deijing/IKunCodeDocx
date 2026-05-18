# macOS 平台安装 Node.js

**三大 AI 编程工具的必备运行环境**

::: tip 💡 重要说明
Claude Code、CodeX 和 Gemini CLI 都需要 Node.js 18+ 运行环境。
如果您已安装 Node.js 18 或更高版本，可跳过本章节。
验证命令：`node -v`
:::

## 方法一：Homebrew 包管理器（推荐）

```bash
# 安装 Homebrew（如果未安装）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Node.js
brew install node

# 验证安装
node --version
npm --version
```

## 方法二：官方安装包

1. 访问 Node.js 官网：[https://nodejs.org](https://nodejs.org)
2. 下载 LTS 版本的 .pkg 安装包
3. 运行安装程序并按照提示完成安装

## 验证安装

打开终端，执行：

```bash
node --version
npm --version
```

如果显示版本号（如 v18.x.x 或更高），说明安装成功。

## 常见问题

### Homebrew 安装慢
可以使用国内镜像：

```bash
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
```

### 权限问题
如果遇到权限问题，不要使用 `sudo`，而是修复 Homebrew 权限：

```bash
sudo chown -R $(whoami) /usr/local/bin /usr/local/lib
```

## 下一步

::: tip ✅ 环境准备完成！
现在您可以继续安装 Claude Code、CodeX 或 Gemini CLI 了。
:::

- [安装 Claude Code](/deploy/claude-code)
- [安装 CodeX](/deploy/codex)
- [安装 Gemini CLI](/deploy/gemini-cli)
