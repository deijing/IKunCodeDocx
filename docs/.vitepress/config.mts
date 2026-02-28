import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'IKunCode 使用文档',
  description: 'IKunCode AI 编程工具使用指南、环境安装、配置工具与部署说明',

  // 清理 URL，去掉 .html 后缀
  cleanUrls: true,

  // 最后更新时间
  lastUpdated: true,

  themeConfig: {
    // 文档大纲配置
    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide/registration' },
      { text: 'Node 安装', link: '/node/windows' },
      { text: '配置工具', link: '/tools/cc-switch' },
      {
        text: '部署指南',
        items: [
          { text: 'Claude Code', link: '/deploy/claude-code' },
          { text: 'CodeX', link: '/deploy/codex' },
          { text: 'Gemini CLI', link: '/deploy/gemini-cli' },
          { text: 'NanoBanana 图像生成', link: '/deploy/nano-banana' }
        ]
      },
      {
        text: '第三方应用',
        items: [
          { text: 'Hapi 远程控制', link: '/apps/hapi' },
          { text: 'Alma 客户端', link: '/apps/alma' },
          { text: 'CherryStudio 客户端', link: '/apps/cherry-studio' },
          { text: 'OpenCode', link: '/apps/opencode' },
          { text: 'OpenClaw', link: '/apps/openclaw' }
        ]
      },
      {
        text: 'ikun 官方项目',
        items: [
          { text: 'ikunimage AI 生图', link: '/skills/ikunimage' },
          { text: 'ikuncode-aimcp 统一 MCP', link: '/skills/ikuncode-aimcp' }
        ]
      },
      { text: '支持与 FAQ', link: '/support/faq' }
    ],

    // 侧边栏配置
    sidebar: [
      {
        text: '快速开始',
        collapsed: false,
        items: [
          { text: '欢迎使用', link: '/intro/welcome' },
          { text: '中转站是什么', link: '/intro/overview' },
          { text: '友情链接（官网镜像站）', link: '/intro/links' }
        ]
      },
      {
        text: '使用指南',
        collapsed: false,
        items: [
          { text: '注册账号', link: '/guide/registration' },
          { text: '创建专属 Key', link: '/guide/create-key' },
          { text: '修改令牌设置', link: '/guide/modify-token' },
          { text: '充值', link: '/guide/recharge' }
        ]
      },
      {
        text: 'AI 模型接口',
        collapsed: true,
        items: [
          { text: '接口详细设计 ↗', link: 'https://app.apifox.com/project/7865293' },
          { text: '模型', link: '/api/models' },
          { text: '聊天', link: '/api/chat' },
          { text: '补全', link: '/api/completions' },
          { text: '图像', link: '/api/images' },
          { text: '音频', link: '/api/audio' },
          { text: '嵌入', link: '/api/embeddings' },
          { text: '重排序', link: '/api/rerank' },
          { text: '审查', link: '/api/moderation' }
        ]
      },
      {
        text: 'Node.js 环境安装',
        collapsed: false,
        items: [
          { text: 'Windows 平台', link: '/node/windows' },
          { text: 'macOS 平台', link: '/node/macos' },
          { text: 'Linux 平台', link: '/node/linux' }
        ]
      },
      {
        text: '快速配置工具',
        collapsed: false,
        items: [
          { text: 'CC-Switch 配置工具', link: '/tools/cc-switch' },
          { text: 'Claude Code Hub', link: '/tools/claude-code-hub' },
          { text: 'IKun 状态栏', link: '/tools/ikun-statusbar' }
        ]
      },
      {
        text: 'AI 编程工具部署',
        collapsed: false,
        items: [
          { text: 'Claude Code 部署', link: '/deploy/claude-code' },
          { text: 'CodeX 部署', link: '/deploy/codex' },
          { text: 'Gemini CLI 部署', link: '/deploy/gemini-cli' },
          { text: 'NanoBanana 图像生成', link: '/deploy/nano-banana' }
        ]
      },
      {
        text: '第三方应用',
        collapsed: false,
        items: [
          { text: 'Hapi 远程控制', link: '/apps/hapi' },
          { text: 'Hapi 进阶：优选 IP 配置', link: '/apps/hapi-advanced' },
          { text: 'Alma 客户端', link: '/apps/alma' },
          { text: 'CherryStudio 客户端', link: '/apps/cherry-studio' },
          { text: 'OpenCode', link: '/apps/opencode' },
          { text: 'OpenClaw', link: '/apps/openclaw' }
        ]
      },
      {
        text: 'ikun 官方优质项目',
        collapsed: false,
        items: [
          { text: 'ikunimage AI 生图', link: '/skills/ikunimage' },
          { text: 'ikuncode-aimcp 统一 MCP', link: '/skills/ikuncode-aimcp' }
        ]
      },
      {
        text: '其他',
        collapsed: false,
        items: [
          { text: '进阶技巧', link: '/support/advanced' },
          { text: '疑难杂症', link: '/support/troubleshooting' },
          { text: '售前售后', link: '/support/after-sales' },
          { text: '常见问题', link: '/support/faq' }
        ]
      }
    ],

    // 本地搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    // 页脚配置
    footer: {
      message: '和谐、友善、互助、开心',
      copyright: 'Copyright © 2025 IKunCode'
    },

    // 编辑链接（如果有 GitHub 仓库）
    // editLink: {
    //   pattern: 'https://github.com/your/repo/edit/main/docs/:path',
    //   text: '在 GitHub 上编辑此页'
    // },

    // 文档页脚
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 最后更新时间文本
    lastUpdatedText: '最后更新',

    // 返回顶部文本
    returnToTopLabel: '返回顶部',

    // 外观切换文本
    darkModeSwitchLabel: '外观',

    // 侧边栏菜单标签
    sidebarMenuLabel: '菜单',

    // 社交链接（根据需要添加）
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/your/repo' }
    ]
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true, // 代码块显示行号
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
