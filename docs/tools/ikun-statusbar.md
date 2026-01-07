# IKun 状态栏

**Claude Code 专用状态栏工具 - 实时余额显示与主题定制**

## 🎯 工具介绍

IKunCodeLine 是一款专为 IkunCode 平台用户设计的 Claude Code 状态栏工具，采用 Rust 语言编写，性能卓越。通过集成 IkunCode API，实时显示账户余额，并支持丰富的主题定制和交互式配置面板。

::: tip 💡 核心功能
• 实时显示 IkunCode 账户余额
• 多种内置主题，支持自定义
• 交互式 TUI 配置面板
• Git 状态、当前目录、会话信息等常用段
• 跨平台支持（macOS、Linux、Windows）
• 轻量级，资源占用低
:::

![IKun 状态栏效果展示](/images/状态栏.png)

## 📦 安装方法

### 🚀 方法一：npm 安装（推荐）

这是最简单的安装方式，自动处理依赖和路径配置：

```bash
npm install -g @ikuncode/ikuncodeline
```

安装完成后，工具将自动安装到：
```
~/.claude/ikuncodeline/ikuncodeline
```

### 📥 方法二：手动下载

1. 访问 [Releases 页面](https://github.com/Jiang-Night/IKunCodeLine/releases)
2. 根据您的操作系统下载对应版本：
   - **macOS**: `ikuncodeline-macos`
   - **Linux**: `ikuncodeline-linux`
   - **Windows**: `ikuncodeline-windows.exe`

3. 将下载的二进制文件放置到 `~/.claude/ikuncodeline/` 目录

4. 设置执行权限（macOS/Linux）：

```bash
chmod +x ~/.claude/ikuncodeline/ikuncodeline
```

::: warning ⚠️ 目录位置
确保二进制文件放在 `~/.claude/ikuncodeline/` 目录下，否则 Claude Code 无法找到该工具。
:::

## ⚙️ 配置步骤

### 第一步：配置 Claude Code Settings

编辑 `~/.claude/settings.json` 文件，添加状态栏配置：

```json
{
  "statusLine": {
    "type": "command",
    "command": "~/.claude/ikuncodeline/ikuncodeline",
    "padding": 0
  }
}
```

::: tip 💡 配置说明
- `type: "command"` - 指定状态栏为外部命令类型
- `command` - 状态栏工具的完整路径
- `padding: 0` - 状态栏边距设置（可根据需要调整）
:::

### 第二步：设置环境变量

在同一个 `settings.json` 文件中，添加 `env` 部分配置环境变量：

```json
{
  "statusLine": {
    "type": "command",
    "command": "~/.claude/ikuncodeline/ikuncodeline",
    "padding": 0
  },
  "env": {
    "BALANCE_API_KEY": "your-system-access-token",
    "BALANCE_API_USER": "your-user-id",
    "BALANCE_API_URL": "https://api.ikuncode.cc/api/user/self",
    "ANTHROPIC_AUTH_TOKEN": "your-claude-token",
    "ANTHROPIC_BASE_URL": "https://api.ikuncode.cc"
  }
}
```

### 环境变量说明

| 变量名 | 说明 | 获取方式 |
|--------|------|---------|
| `BALANCE_API_KEY` | 系统访问令牌 | 从 IkunCode 平台获取 |
| `BALANCE_API_USER` | 用户 ID | 在个人资料中查看 |
| `BALANCE_API_URL` | API 端点（可选） | 默认为 IkunCode API，通常无需修改 |
| `ANTHROPIC_AUTH_TOKEN` | Claude Code 认证令牌 | 从 IkunCode 平台获取 |
| `ANTHROPIC_BASE_URL` | API 基础地址 | IkunCode 的 API 端点 |

::: info 📝 获取令牌
1. 访问 [https://api.ikuncode.cc](https://api.ikuncode.cc)
2. 登录您的账户
3. 在个人设置中创建或查看 API 令牌
4. 复制令牌值到对应的环境变量中
:::

### 第三步：初始化配置

安装和配置完成后，运行初始化命令：

```bash
~/.claude/ikuncodeline/ikuncodeline --init
```

这将创建默认的配置文件和主题文件。

## 🛠️ 使用命令

### 基础命令

```bash
# 初始化配置和主题
ikuncodeline --init

# 验证配置是否正确
ikuncodeline --check

# 打开交互式配置面板
ikuncodeline --config

# 临时指定主题
ikuncodeline --theme <theme-name>
```

### 交互式配置面板

运行 `--config` 命令后，将打开一个美观的 TUI（文本用户界面）配置面板：

- 切换不同主题
- 调整状态栏段显示
- 配置颜色方案
- 实时预览效果

## 🎨 主题定制

### 内置主题

IKunCodeLine 提供多种内置主题，满足不同审美需求：

- **默认主题** - 简洁明了
- **彩虹主题** - 色彩丰富
- **极简主题** - 最小化信息
- **专业主题** - 商务风格

### 自定义主题

您可以创建自己的主题配置文件：

1. 进入配置目录：
```bash
cd ~/.claude/ikuncodeline/themes/
```

2. 复制现有主题作为模板：
```bash
cp default.toml mytheme.toml
```

3. 编辑新主题文件，调整颜色和布局

4. 应用自定义主题：
```bash
ikuncodeline --theme mytheme
```

## 💡 使用技巧

::: tip 技巧 1：实时余额监控
状态栏会自动刷新余额信息，无需手动更新。建议在长时间使用 AI 工具时留意余额变化，及时充值。
:::

::: tip 技巧 2：配置验证
使用 `--check` 命令定期验证配置，确保 API 连接正常，避免因配置错误导致状态栏无法显示。
:::

::: tip 技巧 3：主题快速切换
在交互式配置面板中可以实时预览不同主题效果，找到最适合您工作环境的主题。
:::

## 🔍 故障排查

### 状态栏不显示

检查以下几点：

1. **二进制文件路径是否正确**
   ```bash
   ls ~/.claude/ikuncodeline/ikuncodeline
   ```

2. **是否有执行权限**（macOS/Linux）
   ```bash
   chmod +x ~/.claude/ikuncodeline/ikuncodeline
   ```

3. **配置文件是否正确**
   ```bash
   cat ~/.claude/settings.json
   ```

### 余额显示为空或错误

1. **验证 API 令牌是否有效**
   - 登录 IkunCode 平台检查令牌状态

2. **检查环境变量配置**
   ```bash
   ikuncodeline --check
   ```

3. **确认网络连接**
   - 测试能否访问 `https://api.ikuncode.cc`

### 主题不生效

1. **确认主题名称正确**
   ```bash
   ls ~/.claude/ikuncodeline/themes/
   ```

2. **重新初始化配置**
   ```bash
   ikuncodeline --init
   ```

## 🔗 项目资源

- **GitHub 仓库**：[https://github.com/Jiang-Night/IKunCodeLine](https://github.com/Jiang-Night/IKunCodeLine)
- **问题反馈**：[GitHub Issues](https://github.com/Jiang-Night/IKunCodeLine/issues)
- **最新版本**：[Releases 页面](https://github.com/Jiang-Night/IKunCodeLine/releases)
- **npm 包**：[@ikuncode/ikuncodeline](https://www.npmjs.com/package/@ikuncode/ikuncodeline)

## 🙏 特别致谢

感谢 **IKunCode 项目 QQ 群友 3323806209** 在工具开发过程中提供的宝贵帮助和技术支持！

正是因为社区成员的积极贡献，IKunCodeLine 才能不断完善，为大家提供更好的使用体验。

::: info 🎉 开始使用！
配置完成后，重启 Claude Code，您就能在状态栏中看到实时的账户余额和其他信息了。
享受更直观的开发体验！
:::
