# Gemini CLI 安装步骤

**Google AI 编程助手安装指南**

::: tip 📋 前置要求
请先完成 [Node.js 环境安装](/node/windows)，确保 Node.js 18+ 已正确安装。
:::

::: info 🚀 Gemini CLI 快速开始
Google AI 编程助手，Gemini 2.5 Pro 驱动

**1️⃣** 安装 CLI &nbsp;&nbsp;&nbsp;
**2️⃣** 配置密钥 &nbsp;&nbsp;&nbsp;
**3️⃣** 开始编码
:::

## 🚀 使用 CC-Switch 快速配置（推荐）

::: warning ⚠️ 前置条件
使用 CC-Switch 配置 Gemini CLI 之前，请确保已通过 npm 全局安装 Gemini CLI 工具：

```bash
npm install -g @google/gemini-cli
```

验证安装：`gemini --version`
:::

推荐使用 [CC-Switch 快速配置工具](/tools/cc-switch) 进行图形化配置，简单快捷无需手动创建配置文件。

### 配置步骤

**1. 启动 CC-Switch 并切换到 Gemini 标签**

1. 打开 CC-Switch 应用程序
2. 点击顶部的「Gemini」标签页
3. 点击右上角橙色「+」按钮添加新配置

![CC-Switch Gemini 标签页](/images/tu12.png)

**2. 填写 Gemini CLI 提供商配置**

1. **提供商名称**：自定义名称（如「ikuncode」）
2. **Base URL**：输入 `https://api.ikuncode.cc`
3. **API Key**：粘贴您从 IkunCode 平台获取的 Gemini 专用令牌
4. **Model**：选择 `gemini-3-pro-preview` 或其他可用模型
5. **安全设置**：根据需求调整（可选）
6. 点击「保存」按钮

![CC-Switch 添加 Gemini CLI 配置](/images/tu13.png)
![CC-Switch Gemini CLI 配置详情](/images/tu14.png)

::: tip 💡 提示
- CC-Switch 会自动创建 `~/.gemini/.env` 和 `settings.json` 文件
- 可以添加多个提供商配置，随时切换
- 切换配置后，关闭并重启 Gemini CLI 即可生效
:::

**3. 启用配置并使用**

1. 在配置列表中找到刚创建的「ikuncode」配置
2. 点击配置右侧的「当前使用」按钮
3. 配置会被标记为「当前使用」状态（绿色标签）
4. 重启 Gemini CLI，新配置即可生效

**4. 系统托盘快速切换**

CC-Switch 支持通过系统托盘快速切换 Gemini CLI 配置：
- 右键点击系统托盘中的 CC-Switch 图标
- 在菜单中选择 Gemini 分类
- 直接选择要切换到的配置
- 配置立即生效，无需打开主界面

::: warning ⚠️ 注意事项
- 确保从 IkunCode 平台创建 Gemini CLI 专用令牌
- Gemini 令牌与 Claude Code/CodeX 令牌不通用
- 切换配置后需要重启 Gemini CLI 才能生效
- 可在 CC-Switch 中测试 API 端点速度
:::

## ⌨️ 手动命令行配置

如果您不使用 CC-Switch，可以按照以下步骤手动安装和配置 Gemini CLI。

### 🖥️ Windows 安装流程教程

#### 1️⃣ 全局安装 Gemini CLI

```powershell
npm install -g @google/gemini-cli
```

#### 2️⃣ 配置 Gemini CLI

::: warning ⚠️ 重要提示
请替换下方的 `GEMINI_API_KEY` 为你从 [https://ikuncode.cc](https://ikuncode.cc) 获取的 Gemini CLI 专用 API 密钥！
:::

**3.1 创建 gemini 文件夹**

在用户目录下：`%USERPROFILE%\.gemini\`

**3.2 创建 .env 文件**

在 `gemini` 文件夹新建 `.env` 文件：

```env
GOOGLE_GENAI_BASE_URL=https://api.ikuncode.cc
GEMINI_API_KEY=你的专属密钥请到https://ikuncode.cc获取
GEMINI_MODEL=gemini-3-pro-preview
```

**3.3 创建 settings.json 文件**

在 `gemini` 文件夹新建 `settings.json` 文件：

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

#### 3️⃣ 启动 Gemini CLI

```powershell
gemini
```

::: info 🎉 开始使用 Gemini CLI
• 输入上下文描述 "M kikasuna"
• Agent Mode 自动编程模式
• Google Search 实时联网搜索
:::

### 🍏 macOS 安装流程教程

#### 1️⃣ 全局安装 Gemini CLI

```bash
npm install -g @google/gemini-cli
```

#### 2️⃣ 配置 Gemini CLI

**3.1 创建配置目录**：

```bash
mkdir -p ~/.gemini
cd ~/.gemini
```

**3.2 创建 .env 文件**：

```bash
cat > .env << 'EOF'
GOOGLE_GENAI_BASE_URL=https://api.ikuncode.cc
GEMINI_API_KEY=你的专属密钥请到https://ikuncode.cc获取
GEMINI_MODEL=gemini-3-pro-preview
EOF
```

**3.3 创建 settings.json 文件**：

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

#### 3️⃣ 启动 Gemini CLI

```bash
gemini
```

### 🐧 Linux 安装流程教程

#### 1️⃣ 全局安装 Gemini CLI

```bash
sudo npm install -g @google/gemini-cli
```

#### 2️⃣ 配置 Gemini CLI

**3.1 创建配置目录**：

```bash
mkdir -p ~/.gemini
cd ~/.gemini
```

**3.2 创建 .env 文件**：

```bash
cat > .env << 'EOF'
GOOGLE_GENAI_BASE_URL=https://api.ikuncode.cc
GEMINI_API_KEY=你的专属密钥请到https://ikuncode.cc获取
GEMINI_MODEL=gemini-3-pro-preview
EOF
```

**3.3 创建 settings.json 文件**：

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

#### 3️⃣ 启动 Gemini CLI

```bash
gemini
```

::: info 🎉 部署完成！
现在您可以使用 Gemini CLI 进行 AI 辅助编程了。
:::

## 常见问题

### API Key 在哪里获取？

登录 [IkunCode 平台](https://api.ikuncode.cc)，创建 Gemini CLI 专用令牌。

### 配置文件位置

- Windows: `%USERPROFILE%\.gemini\`
- macOS/Linux: `~/.gemini/`

### 更多问题

请查看 [FAQ](/support/faq) 或联系[售后支持](/support/after-sales)。
