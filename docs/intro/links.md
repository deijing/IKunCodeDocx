# Friendly Links

::: warning 🤝 About These Recommendations
Recommended by site administrators with no financial interest. **No endorsement implied — please evaluate each site on your own.**
:::

## Claude Code Mirror Sites

<div class="friend-links">
  <a href="https://easychat.top/" target="_blank" rel="noopener noreferrer" class="friend-link-card">
    <div class="friend-link-icon">
      <img src="/images/Anthropic.png" alt="EasyChat" />
    </div>
    <div class="friend-link-info">
      <div class="friend-link-name">EasyChat</div>
      <div class="friend-link-desc">A free shared-account web mirror for Claude Code — chat with Claude in your browser, no registration required</div>
    </div>
    <span class="friend-link-arrow">→</span>
  </a>
</div>

### Overview

EasyChat is a mirror service built around Claude's web chat experience, mainly serving content creators, learners, and everyday office users. The site at [easychat.top](https://easychat.top/) has been running continuously since September 2024 and has remained reliably available throughout.

The entire system is built in-house and improved continuously, aiming to deliver an experience as close to the official site as possible.

### How to Use It

**1. Pick an account**

Open [EasyChat](https://easychat.top/) and you'll see a list of available free shared-account cards. Click any card marked as "Available" to start chatting.

![Account picker](/images/jxz.png)

**2. Start chatting**

You'll land on the standard Claude chat UI — Chinese conversation, multi-turn context, code generation, and all the other features work normally.

![Chat UI](/images/ltjm.png)

::: warning Note
- Shared accounts are a public resource — use them reasonably and don't abuse them
- Very long conversations consume more usage quota — plan accordingly
- If an account is unavailable, wait a moment and try again, or pick another one
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
