# CodeX 部署指南

**企业级 AI 编码助手 - 完整部署手册**

| 资源 | 地址 |
|------|------|
| 官方文档 | [developers.openai.com/codex](https://developers.openai.com/codex/) |

::: tip 📋 前置要求
请先完成 [Node.js 环境安装](/node/windows) 和 [CC-Switch 工具安装](/tools/cc-switch)。
:::

## 🎯 快速导航

CodeX 是基于 GPT-5 架构的下一代智能编程助手，为开发者提供卓越的代码生成与优化能力。

**部署路径**：系统环境配置 ➜ CLI 工具安装 ➜ API 集成 ➜ 开发环境就绪

## 🚀 使用 CC-Switch 快速配置（推荐）

::: warning ⚠️ 前置条件
使用 CC-Switch 配置 CodeX 之前，请确保已通过 npm 全局安装 CodeX 工具：

```bash
npm install -g @openai/codex@latest
```

验证安装：`codex --version`
:::

推荐使用 [CC-Switch 快速配置工具](/tools/cc-switch) 进行图形化配置，简单快捷无需命令行操作。

### 配置步骤

**1. 启动 CC-Switch 并切换到 Codex 标签**

1. 打开 CC-Switch 应用程序
2. 点击顶部的「Codex」标签页
3. 点击右上角橙色「+」按钮添加新配置

![CC-Switch Codex 标签页](/images/tu9.png)

**2. 填写 CodeX 提供商配置**

1. **提供商名称**：自定义名称（如「IkunCoding」）
2. **Base URL**：输入 `https://api.ikuncode.cc/v1`
3. **API Key**：粘贴您从 IkunCode 平台获取的 CodeX 专用令牌（codex测试令牌组）
4. **Model**：选择 `gpt-5-codex`
5. **其他配置**：根据需求调整推理强度、网络访问等参数
6. 点击「保存」按钮

![CC-Switch 添加 CodeX 配置](/images/tu10.png)
![CC-Switch CodeX 配置详情](/images/tu11.png)

::: tip 💡 提示
- CC-Switch 会自动创建 `~/.codex/config.toml` 和 `auth.json` 文件
- 可以添加多个提供商配置，随时切换
- 切换配置后，关闭并重启 CodeX 即可生效
:::

**3. 启用配置并使用**

1. 在配置列表中找到刚创建的「IkunCoding」配置
2. 点击配置右侧的「当前使用」按钮
3. 配置会被标记为「当前使用」状态（绿色标签）
4. 重启 CodeX，新配置即可生效

**4. 系统托盘快速切换**

CC-Switch 支持通过系统托盘快速切换 CodeX 配置：
- 右键点击系统托盘中的 CC-Switch 图标
- 在菜单中选择 Codex 分类
- 直接选择要切换到的配置
- 配置立即生效，无需打开主界面

::: warning ⚠️ 注意事项
- 务必从 IkunCode 平台创建「codex测试」令牌组的专用密钥
- CodeX 令牌与 Claude Code 令牌不通用
- 切换配置后需要重启 CodeX 才能生效
- 可在 CC-Switch 中测试 API 端点速度
:::

## ⌨️ 手动命令行配置

如果您不使用 CC-Switch，可以按照以下步骤手动配置 CodeX。

### 🖥️ Windows 平台

#### 第一步：部署 CodeX 命令行工具

以管理员权限启动命令提示符或 PowerShell，执行：

```powershell
npm install -g @openai/codex@latest
codex --version
```

#### 第二步：集成 IkunCoding API 服务

**获取专属 API 凭证**：
1. 访问 IkunCoding 开发者控制台
2. 完成账户注册或执行登录操作
3. 导航至「API 密钥管理」模块
4. 创建新密钥时，务必选择「codex测试」令牌组
5. 安全保存生成的 API Key

::: danger 🔐 安全提醒
CodeX 要求使用独立的令牌组配置，与 Claude Code 令牌体系完全隔离。
:::

**构建配置目录结构**：
```powershell
mkdir %USERPROFILE%\.codex
cd %USERPROFILE%\.codex
```

**编写配置文件：config.toml**
```toml
model_provider = "IkunCoding"
model = "gpt-5.2-codex"
model_reasoning_effort = "xhigh"
network_access = "enabled"
disable_response_storage = true
approval_policy = "on-request"
web_search = "live"
sandbox_mode = "danger-full-access"
collaboration_mode = true
model_supports_reasoning_summaries = true

[model_providers.IkunCoding]
name = "ikun"
base_url = "https://api.ikuncode.cc/v1"
wire_api = "responses"
requires_openai_auth = true

[features]
shell_snapshot = true

collab = false
collaboration_modes = false
steer = false
unified_exec = false
```

**编写认证文件：auth.json**
```json
{
  "OPENAI_API_KEY": "此处粘贴您的 CodeX 专用令牌"
}
```

#### 第三步：初始化工作空间

```powershell
mkdir my-codex-project
cd my-codex-project
codex
```

### 🍏 macOS 平台

#### 部署 CodeX 工具

```bash
npm install -g @openai/codex@latest
codex --version
```

#### 集成 API 服务

**构建配置目录**：
```bash
mkdir -p ~/.codex
cd ~/.codex
```

**编写 config.toml 配置**：
```bash
cat > config.toml << 'EOF'
model_provider = "IkunCoding"
model = "gpt-5.2-codex"
model_reasoning_effort = "xhigh"
network_access = "enabled"
disable_response_storage = true
approval_policy = "on-request"
web_search = "live"
sandbox_mode = "danger-full-access"
collaboration_mode = true
model_supports_reasoning_summaries = true

[model_providers.IkunCoding]
name = "Ikun"
base_url = "https://api.ikuncode.cc/v1"
wire_api = "responses"
requires_openai_auth = true

[features]
shell_snapshot = true

collab = false
collaboration_modes = false
steer = false
unified_exec = false
EOF
```

**编写 auth.json 认证配置**：
```bash
cat > auth.json << 'EOF'
{
  "OPENAI_API_KEY": "此处粘贴您的 CodeX 专用令牌"
}
EOF
```

#### 初始化工作空间

```bash
mkdir my-codex-project
cd my-codex-project
codex
```

### 🐧 Linux 平台

#### 部署 CodeX 工具

```bash
sudo npm install -g @openai/codex@latest
codex --version
```

#### 集成 API 服务

**构建配置目录**：
```bash
mkdir -p ~/.codex
cd ~/.codex
```

**编写 config.toml 配置**：
```bash
cat > config.toml << 'EOF'
model_provider = "IkunCoding"
model = "gpt-5.2-codex"
model_reasoning_effort = "xhigh"
network_access = "enabled"
disable_response_storage = true
approval_policy = "on-request"
web_search = "live"
sandbox_mode = "danger-full-access"
collaboration_mode = true
model_supports_reasoning_summaries = true

[model_providers.IkunCoding]
name = "IkunCoding"
base_url = "https://api.ikuncode.cc/v1"
wire_api = "responses"
requires_openai_auth = true

[features]
shell_snapshot = true

collab = false
collaboration_modes = false
steer = false
unified_exec = false
EOF
```

**编写 auth.json 认证配置**：
```bash
cat > auth.json << 'EOF'
{
  "OPENAI_API_KEY": "此处粘贴您的 CodeX 专用令牌"
}
EOF
```

#### 初始化工作空间

```bash
mkdir my-codex-project
cd my-codex-project
codex
```

## 常见问题

### CodeX 和 Claude Code 的令牌不通用？

是的，两者使用不同的令牌组：
- Claude Code: 使用 Claude Code 令牌组
- CodeX: 使用 "codex测试" 令牌组

请在 IkunCode 平台创建对应的专用令牌。

### 配置文件放在哪里？

- Windows: `%USERPROFILE%\.codex\`
- macOS/Linux: `~/.codex/`

### 更多问题

请查看 [FAQ](/support/faq) 或联系[售后支持](/support/after-sales)。
