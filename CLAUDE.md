# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 VitePress 的文档站点，用于提供 IKunCode AI 编程工具（Claude Code、CodeX、Gemini CLI）的使用文档、部署指南和配置教程。

## 核心命令

### 开发和构建
```bash
# 启动开发服务器（默认端口 5173）
npm run docs:dev

# 构建生产版本（输出到 docs/.vitepress/dist）
npm run docs:build

# 预览构建结果
npm run docs:preview
```

### Docker 部署
```bash
# 使用 Docker Compose（推荐，端口 6688）
docker-compose up -d
docker-compose logs -f
docker-compose down

# 直接使用 Docker
docker build -t ikuncode-docs:latest .
docker run -d -p 6688:80 --name ikuncode-docs ikuncode-docs:latest
```

## 架构说明

### VitePress 配置架构

**核心配置文件**：`docs/.vitepress/config.mts`
- 定义了完整的导航结构（nav）和侧边栏（sidebar）
- 配置了本地搜索、多语言、主题等
- 所有文档路由和层级关系都在这里维护

**重要**：添加新文档页面时需要同步更新 `config.mts` 中的导航或侧边栏配置，否则页面将无法被发现。

### 自定义主题系统

**主题入口**：`docs/.vitepress/theme/index.ts`
- 扩展默认 VitePress 主题
- 注册全局自定义组件

**自定义组件**（`docs/.vitepress/theme/components/`）：
- `DsHero.vue` - 首页 Hero 区域，支持 3D 动画效果
- `DsCardLink.vue` - 卡片式链接组件
- `DsFeatureGrid.vue` - 功能网格展示
- `Ds3DLogo.vue` - 3D Logo 动画组件

这些组件可在任何 Markdown 文件中直接使用（已全局注册）。

### 文档内容组织

文档按功能模块组织（所有文件位于 `docs/` 目录下）：

```
intro/       快速开始（欢迎页、概览）
guide/       使用指南（注册、创建Key、充值等）
node/        Node.js 环境安装（Windows/macOS/Linux）
tools/       配置工具（CC-Switch 等）
deploy/      AI 工具部署（Claude Code、CodeX、Gemini CLI）
apps/        第三方应用（Hapi、Alma、CherryStudio）
support/     支持文档（进阶技巧、FAQ、售后）
public/      静态资源（图片、字体等，直接通过 /images/... 访问）
```

**导航逻辑**：
- 顶部导航（nav）用于主要功能入口
- 侧边栏（sidebar）用于详细文档层级
- 首页（index.md）使用 VitePress 的 `layout: home` 特性

### 部署配置

**多种部署方式**：

1. **Vercel**（自动化部署）
   - 配置文件：`vercel.json`
   - 构建命令：`npm run docs:build`
   - 输出目录：`docs/.vitepress/dist`

2. **Docker**（手动部署）
   - 使用多阶段构建（Node.js 构建 + Nginx 托管）
   - Nginx 配置：`nginx.conf`（启用 Gzip、缓存、SPA 路由）
   - 详细部署说明：`DEPLOY.md`

## 常见开发任务

### 添加新文档页面

1. 在对应目录下创建 `.md` 文件（如 `docs/guide/new-feature.md`）
2. 在文件头部添加 frontmatter（可选）
3. **必须**在 `docs/.vitepress/config.mts` 中更新导航或侧边栏配置
4. 使用 `npm run docs:dev` 预览效果

### 使用自定义组件

在 Markdown 文件中可以直接使用 Vue 组件：

```vue
<DsCardLink
  title="示例标题"
  description="示例描述"
  link="/path/to/page"
/>
```

### 修改样式

- 全局样式：`docs/.vitepress/theme/custom.css`
- 组件样式：在对应的 `.vue` 组件的 `<style scoped>` 中修改

### 代码块配置

默认启用了行号显示（`markdown.lineNumbers: true`），支持亮色/暗色主题切换。

## 技术栈要求

- **Node.js**：>= 18
- **VitePress**：1.6.4
- **Vue**：3.5.26

## 注意事项

1. **URL 结构**：启用了 `cleanUrls: true`，生成的链接无 `.html` 后缀
2. **中文搜索**：使用本地搜索（`search.provider: 'local'`），已配置中文翻译
3. **构建输出**：`docs/.vitepress/dist/` 目录已在 `.gitignore` 中忽略
4. **静态资源**：放在 `docs/public/` 下，访问时路径为 `/images/...`（不包含 public）
