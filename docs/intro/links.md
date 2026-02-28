# 友情链接

::: warning 🤝 推荐说明
社群里经常有用户询问好用的第三方站点，为减少大家踩坑，这里推荐几家本人也在长期使用的优质站点供参考。**仅为个人使用经验分享，不做任何背书，请自行判断。**
:::

## Claude Code 镜像站

<div class="friend-links">
  <a href="https://easychat.top/" target="_blank" rel="noopener noreferrer" class="friend-link-card">
    <div class="friend-link-icon">
      <img src="/images/Anthropic.png" alt="EasyChat" />
    </div>
    <div class="friend-link-info">
      <div class="friend-link-name">EasyChat</div>
      <div class="friend-link-desc">Claude Code 免费账号网页版镜像站，无需注册即可体验 Claude 对话</div>
    </div>
    <span class="friend-link-arrow">→</span>
  </a>
</div>

### 简介

EasyChat 是面向 Claude 网页 Chat 使用场景推出的镜像服务，主要服务于内容创作、学习、日常办公等用户群体。自 2024 年 9 月创建 [easychat.top](https://easychat.top/) 站点以来持续运行至今，一直保证稳定可用。

系统全部自主研发，并持续更新改善，力求给用户提供最接近官网的使用体验。

### 使用方式

**1. 选择账号**

打开 [EasyChat](https://easychat.top/) 后，页面会展示多个可用的免费共享账号卡片，点击任意一个状态为「可用」的账号即可开始对话。

![账号选择界面](/images/jxz.png)

**2. 开始聊天**

进入后即为标准的 Claude 聊天界面，支持中文对话、多轮上下文、代码生成等全部功能。

![聊天界面](/images/ltjm.png)

::: warning 注意
- 共享账号为公共资源，请合理使用，勿滥用
- 超长对话会消耗更多使用次数，请合理规划用量
- 如遇账号不可用，请稍后再试或选择其他账号
:::

<style>
.friend-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
}

.friend-link-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.25s ease;
}

.friend-link-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.friend-link-icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}

.friend-link-icon img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.friend-link-info {
  flex: 1;
  min-width: 0;
}

.friend-link-name {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
}

.friend-link-desc {
  margin-top: 4px;
  font-size: 13px;
  opacity: 0.7;
  line-height: 1.4;
}

.friend-link-arrow {
  font-size: 18px;
  opacity: 0.4;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.friend-link-card:hover .friend-link-arrow {
  opacity: 0.8;
  transform: translateX(3px);
}
</style>
