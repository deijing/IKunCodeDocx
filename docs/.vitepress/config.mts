import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'IKunCode Docs',
  description: 'Guides, environment setup, configuration tools, and deployment docs for IKunCode AI coding tools',

  // 清理 URL，去掉 .html 后缀
  cleanUrls: true,

  // 最后更新时间
  lastUpdated: true,

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  themeConfig: {
    // Shared local search across locales — translations are provided per-locale below
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
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
        }
      }
    },

    socialLinks: []
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'IKunCode Docs',
      description: 'Guides, environment setup, configuration tools, and deployment docs for IKunCode AI coding tools',
      themeConfig: {
        outline: {
          level: [2, 3],
          label: 'On this page'
        },

        nav: [
          { text: 'Home', link: '/' },
          { text: 'User Guide', link: '/guide/registration' },
          { text: 'Install Node', link: '/node/windows' },
          { text: 'Config Tools', link: '/tools/cc-switch' },
          {
            text: 'Deployment',
            items: [
              { text: 'Claude Code', link: '/deploy/claude-code' },
              { text: 'CodeX', link: '/deploy/codex' },
              { text: 'Gemini CLI', link: '/deploy/gemini-cli' },
              { text: 'NanoBanana Image Gen', link: '/deploy/nano-banana' }
            ]
          },
          {
            text: 'Third-Party Apps',
            items: [
              { text: 'Hapi Remote Control', link: '/apps/hapi' },
              { text: 'Alma Client', link: '/apps/alma' },
              { text: 'CherryStudio Client', link: '/apps/cherry-studio' },
              { text: 'OpenCode', link: '/apps/opencode' }
            ]
          },
          {
            text: 'ikun Projects',
            items: [
              { text: 'ikunimage AI Image Gen', link: '/skills/ikunimage' },
              { text: 'ikuncode-aimcp Unified MCP', link: '/skills/ikuncode-aimcp' }
            ]
          },
          { text: 'Support & FAQ', link: '/support/faq' }
        ],

        sidebar: [
          {
            text: 'Getting Started',
            collapsed: false,
            items: [
              { text: 'Welcome', link: '/intro/welcome' },
              { text: 'What Is an API Relay', link: '/intro/overview' },
              { text: 'Pricing', link: '/intro/pricing' }
            ]
          },
          {
            text: 'User Guide',
            collapsed: false,
            items: [
              { text: 'Register an Account', link: '/guide/registration' },
              { text: 'Create Your API Key', link: '/guide/create-key' },
              { text: 'Modify Token Settings', link: '/guide/modify-token' },
              { text: 'Model Selection', link: '/guide/model-selection' }
            ]
          },
          {
            text: 'Node.js Installation',
            collapsed: false,
            items: [
              { text: 'Windows', link: '/node/windows' },
              { text: 'macOS', link: '/node/macos' },
              { text: 'Linux', link: '/node/linux' }
            ]
          },
          {
            text: 'Configuration Tools',
            collapsed: false,
            items: [
              { text: 'CC-Switch', link: '/tools/cc-switch' },
              { text: 'Claude Code Hub', link: '/tools/claude-code-hub' }
            ]
          },
          {
            text: 'Third-Party Apps',
            collapsed: false,
            items: [
              { text: 'Hapi Remote Control', link: '/apps/hapi' },
              { text: 'Hapi Advanced: Optimized IP', link: '/apps/hapi-advanced' },
              { text: 'Alma Client', link: '/apps/alma' },
              { text: 'CherryStudio Client', link: '/apps/cherry-studio' },
              { text: 'OpenCode', link: '/apps/opencode' }
            ]
          },
          {
            text: 'ikun Official Projects',
            collapsed: false,
            items: [
              { text: 'ikunimage AI Image Gen', link: '/skills/ikunimage' },
              { text: 'ikuncode-aimcp Unified MCP', link: '/skills/ikuncode-aimcp' }
            ]
          },
          {
            text: 'Other',
            collapsed: false,
            items: [
              { text: 'Troubleshooting', link: '/support/troubleshooting' },
              { text: 'Pre-sales & After-sales', link: '/support/after-sales' },
              { text: 'FAQ', link: '/support/faq' },
              { text: 'Partners', link: '/intro/links' }
            ]
          }
        ],

        footer: {
          message: 'Friendly, helpful, and made with care',
          copyright: 'Copyright © 2026 IKunCode'
        },

        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },

        lastUpdatedText: 'Last updated',
        returnToTopLabel: 'Return to top',
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu'
      }
    },

    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'IKunCode 使用文档',
      description: 'IKunCode AI 编程工具使用指南、环境安装、配置工具与部署说明',
      themeConfig: {
        outline: {
          level: [2, 3],
          label: '本页目录'
        },

        nav: [
          { text: '首页', link: '/zh/' },
          { text: '使用指南', link: '/zh/guide/registration' },
          { text: 'Node 安装', link: '/zh/node/windows' },
          { text: '配置工具', link: '/zh/tools/cc-switch' },
          {
            text: '部署指南',
            items: [
              { text: 'Claude Code', link: '/zh/deploy/claude-code' },
              { text: 'CodeX', link: '/zh/deploy/codex' },
              { text: 'Gemini CLI', link: '/zh/deploy/gemini-cli' },
              { text: 'NanoBanana 图像生成', link: '/zh/deploy/nano-banana' }
            ]
          },
          {
            text: '第三方应用',
            items: [
              { text: 'Hapi 远程控制', link: '/zh/apps/hapi' },
              { text: 'Alma 客户端', link: '/zh/apps/alma' },
              { text: 'CherryStudio 客户端', link: '/zh/apps/cherry-studio' },
              { text: 'OpenCode', link: '/zh/apps/opencode' }
            ]
          },
          {
            text: 'ikun 官方项目',
            items: [
              { text: 'ikunimage AI 生图', link: '/zh/skills/ikunimage' },
              { text: 'ikuncode-aimcp 统一 MCP', link: '/zh/skills/ikuncode-aimcp' }
            ]
          },
          { text: '支持与 FAQ', link: '/zh/support/faq' }
        ],

        sidebar: {
          '/zh/': [
            {
              text: '快速开始',
              collapsed: false,
              items: [
                { text: '欢迎使用', link: '/zh/intro/welcome' },
                { text: '中转站是什么', link: '/zh/intro/overview' },
                { text: '价格说明', link: '/zh/intro/pricing' }
              ]
            },
            {
              text: '使用指南',
              collapsed: false,
              items: [
                { text: '注册账号', link: '/zh/guide/registration' },
                { text: '创建专属 Key', link: '/zh/guide/create-key' },
                { text: '修改令牌设置', link: '/zh/guide/modify-token' },
                { text: '模型选择', link: '/zh/guide/model-selection' }
              ]
            },
            {
              text: 'Node.js 环境安装',
              collapsed: false,
              items: [
                { text: 'Windows 平台', link: '/zh/node/windows' },
                { text: 'macOS 平台', link: '/zh/node/macos' },
                { text: 'Linux 平台', link: '/zh/node/linux' }
              ]
            },
            {
              text: '快速配置工具',
              collapsed: false,
              items: [
                { text: 'CC-Switch 配置工具', link: '/zh/tools/cc-switch' },
                { text: 'Claude Code Hub', link: '/zh/tools/claude-code-hub' }
              ]
            },
            {
              text: '第三方应用',
              collapsed: false,
              items: [
                { text: 'Hapi 远程控制', link: '/zh/apps/hapi' },
                { text: 'Hapi 进阶：优选 IP 配置', link: '/zh/apps/hapi-advanced' },
                { text: 'Alma 客户端', link: '/zh/apps/alma' },
                { text: 'CherryStudio 客户端', link: '/zh/apps/cherry-studio' },
                { text: 'OpenCode', link: '/zh/apps/opencode' }
              ]
            },
            {
              text: 'ikun 官方优质项目',
              collapsed: false,
              items: [
                { text: 'ikunimage AI 生图', link: '/zh/skills/ikunimage' },
                { text: 'ikuncode-aimcp 统一 MCP', link: '/zh/skills/ikuncode-aimcp' }
              ]
            },
            {
              text: '其他',
              collapsed: false,
              items: [
                { text: '疑难杂症', link: '/zh/support/troubleshooting' },
                { text: '售前售后', link: '/zh/support/after-sales' },
                { text: '常见问题', link: '/zh/support/faq' },
                { text: '友情链接', link: '/zh/intro/links' }
              ]
            }
          ]
        },

        footer: {
          message: '和谐、友善、互助、开心',
          copyright: 'Copyright © 2026 IKunCode'
        },

        docFooter: {
          prev: '上一页',
          next: '下一页'
        },

        lastUpdatedText: '最后更新',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单'
      }
    }
  }
})
