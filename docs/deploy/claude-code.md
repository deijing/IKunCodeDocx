# Claude Code 部署指南

::: tip 📋 前置要求
请先完成 [Node.js 环境安装](/node/windows)，确保 Node.js 18+ 已正确安装。
:::

## 🚀 使用 CC-Switch 快速配置（推荐）

::: warning ⚠️ 前置条件
使用 CC-Switch 配置 Claude Code 之前，请确保已通过 npm 全局安装 Claude Code 工具：

```bash
npm install -g @anthropic-ai/claude-code
```

验证安装：`claude --version`
:::

如果您已安装 [CC-Switch 快速配置工具](/tools/cc-switch)，可以通过图形界面轻松管理 Claude Code 的配置，无需手动编辑配置文件和环境变量。

### CC-Switch 优势

- 图形化界面，操作简单直观
- 一键切换不同提供商配置
- 自动管理环境变量和配置文件
- 支持配置备份与恢复
- 无需重启终端即可切换配置

### 配置步骤

**1. 启动 CC-Switch 并添加 Claude Code 配置**

1. 打开 CC-Switch 应用程序
2. 点击顶部的「Claude」标签页
3. 点击右上角橙色「+」按钮添加新配置

![CC-Switch 添加 Claude Code 配置界面](/images/tu8.png)

**2. 填写提供商配置信息**

1. **提供商名称**：自定义名称（如"ikuncode"）
2. **API Base URL**：输入 `https://api.ikuncode.cc`
3. **API Key**：粘贴您从 IkunCode 平台获取的 Claude 专用令牌
4. **模型选择**：根据需求选择可用的 Claude 模型
5. 点击「保存」按钮

![CC-Switch Claude Code 配置详细信息](/images/tu7.png)

::: tip 💡 提示
- 可以添加多个不同的提供商配置（如官方、ikuncode等）
- CC-Switch 会自动修改 `~/.claude/settings.json` 配置文件
- 切换配置后，关闭并重启 Claude Code 即可生效
:::

**3. 启用配置并使用**

1. 在配置列表中找到刚创建的「ikuncode」配置
2. 点击配置右侧的「当前使用」按钮（或直接点击配置卡片）
3. 配置会被标记为「当前使用」状态（绿色标签）
4. 重启 Claude Code，新配置即可生效

**4. 系统托盘快速切换**

CC-Switch 支持通过系统托盘快速切换配置：
- 右键点击系统托盘中的 CC-Switch 图标
- 在菜单中选择 Claude 分类
- 直接选择要切换到的配置
- 配置立即生效，无需打开主界面

::: warning ⚠️ 注意事项
- 确保从 IkunCode 平台创建的是 Claude Code 专用令牌
- 切换配置后需要重启 Claude Code 才能生效
- 可以在 CC-Switch 中测试 API 端点速度，选择最优配置
:::

## ⌨️ 手动命令行配置

如果您不使用 CC-Switch，也可以通过命令行手动配置 Claude Code。

### 🖥️ Windows 平台

#### 系统要求
Windows 10、11

#### 安装步骤

**方法一：Native Install（推荐）**

使用 PowerShell：
```powershell
irm https://claude.ai/install.ps1 | iex
```

使用 CMD：
```cmd
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

**方法二：NPM 安装**

1. 打开命令提示符(CMD) 或PowerShell，运行：
```powershell
npm install -g @anthropic-ai/claude-code
```

2. 验证安装
```powershell
claude --version
```

3. 配置环境变量

如果是PowerShell：
```powershell
[Environment]::SetEnvironmentVariable("ANTHROPIC_AUTH_TOKEN", "sk-xxx", "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://api.ikuncode.cc", "User")
```

如果是CMD：
```cmd
setx ANTHROPIC_AUTH_TOKEN "sk-xxx"
setx ANTHROPIC_BASE_URL "https://api.ikuncode.cc"
```

::: tip 💡 提示
请注意将 `sk-xxx` 替换为你自己的专属key！
设置好后，重启终端以让环境变量生效。
:::

4. 启动Claude

在终端，进入（cd 目录）到项目目录或在任意目录，输入命令 `claude` 即可启动使用。

### 🍏 macOS 平台

#### 系统要求
MacOS 10.15 (Catalina) 或更高版本

#### 安装步骤

**方法一：Homebrew（推荐）**
```bash
brew install --cask claude-code
```

**方法二：Curl Script**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**方法三：NPM 安装**
```bash
npm install -g @anthropic-ai/claude-code
```

#### 验证安装
```bash
claude -v
```

正常情况应该输出类似于：`1.0.108 (Claude Code)`

#### 配置环境变量

```bash
echo 'export ANTHROPIC_AUTH_TOKEN="sk-xxx"' >> ~/.bash_profile
echo 'export ANTHROPIC_BASE_URL="https://api.ikuncode.cc"' >> ~/.bash_profile
source ~/.bash_profile
```

::: tip 💡 提示
请注意将 `sk-xxx` 替换为你自己的专属key！
:::

#### 重启终端并启动Claude

重启终端后，进入（cd 目录）到项目目录或在任意目录，输入命令 `claude` 即可启动使用。

### 🐧 Linux 平台

#### 系统要求
Linux发行版 (Ubuntu 18.04+, CentOS 7+, Debian 9+等)

#### 安装步骤

**方法一：Curl Script（推荐）**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**方法二：NPM 安装**
```bash
npm install -g @anthropic-ai/claude-code
```

#### 验证安装
```bash
claude -v
```

#### 配置环境变量

**Ubuntu/Debian（Bash）**
```bash
echo 'export ANTHROPIC_AUTH_TOKEN="sk-xxx"' >> ~/.bash_profile
echo 'export ANTHROPIC_BASE_URL="https://api.ikuncode.cc"' >> ~/.bash_profile
source ~/.bash_profile
```

**Fedora/CentOS（Zsh）**
```bash
echo 'export ANTHROPIC_AUTH_TOKEN="sk-xxx"' >> ~/.zshrc
echo 'export ANTHROPIC_BASE_URL="https://api.ikuncode.cc"' >> ~/.zshrc
source ~/.zshrc
```

::: tip 💡 提示
请注意将 `sk-xxx` 替换为你自己的专属key！
:::

#### 重启终端并启动Claude

重启终端后，进入（cd 目录）到项目目录或在任意目录，输入命令 `claude` 即可启动使用。

## 常见问题

### 提示找不到命令？
- 确认 Claude Code 已正确安装
- 检查 PATH 环境变量
- 重启终端窗口

### 连接失败？
- 检查网络连接
- 确认 API Key 正确
- 检查余额是否充足

### 更多问题
请查看 [FAQ](/support/faq) 或联系[售后支持](/support/after-sales)。
