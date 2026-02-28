<script setup lang="ts">
type ContactItem = {
  name: string
  id: string
  link: string
  status: 'normal' | 'full'
  type: 'qq' | 'telegram'
}

const contacts: ContactItem[] = [
  {
    name: '官方QQ群1群',
    id: '120753006',
    link: 'https://qm.qq.com/q/Uib5UwurIs',
    status: 'full',
    type: 'qq',
  },
  {
    name: '官方QQ群2群',
    id: '30168337',
    link: 'https://qm.qq.com/q/9vJyIfYAYU',
    status: 'normal',
    type: 'qq',
  },
  {
    name: '售后QQ群',
    id: '132077881',
    link: 'https://qm.qq.com/q/mq9v47VMuk',
    status: 'normal',
    type: 'qq',
  },
  {
    name: 'Telegram',
    id: '@ikuncode',
    link: 'https://t.me/ikuncode',
    status: 'normal',
    type: 'telegram',
  },
]

const statusLabel: Record<ContactItem['status'], string> = {
  normal: '加入',
  full: '已满',
}
</script>

<template>
  <section class="ds-contact-section">
    <div class="ds-contact-container">
      <h2 class="ds-contact-title">加入社群</h2>
      <p class="ds-contact-subtitle">加入官方群聊，获取最新动态、交流使用经验、享受一对一技术支持</p>
      <div class="ds-contact-grid">
        <a
          v-for="item in contacts"
          :key="item.id"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="ds-card ds-contact-card"
          :class="{ 'is-full': item.status === 'full' }"
        >
          <div class="ds-contact-icon" :class="`is-${item.type}`">
            <!-- QQ icon -->
            <svg v-if="item.type === 'qq'" viewBox="0 0 24 24" fill="currentColor" class="svg">
              <path d="M12 2C8.14 2 5 5.14 5 9c0 1.62.56 3.11 1.49 4.31-.27.82-.74 1.89-1.33 2.69-.22.3-.06.72.3.78.96.16 2.42.02 3.55-.41.59.24 1.22.42 1.88.52A2.98 2.98 0 0 0 12 20a2.98 2.98 0 0 0 1.11-3.11c.66-.1 1.29-.28 1.88-.52 1.13.43 2.59.57 3.55.41.36-.06.52-.48.3-.78-.59-.8-1.06-1.87-1.33-2.69C18.44 12.11 19 10.62 19 9c0-3.86-3.14-7-7-7zm-3 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
            <!-- Telegram icon -->
            <svg v-else viewBox="0 0 24 24" fill="currentColor" class="svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
          </div>
          <div class="ds-contact-body">
            <div class="ds-contact-name">{{ item.name }}</div>
            <div class="ds-contact-id">{{ item.id }}</div>
          </div>
          <span class="ds-contact-badge" :class="item.status === 'full' ? 'badge-full' : 'badge-normal'">
            {{ statusLabel[item.status] }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ds-contact-section {
  padding: 48px 24px 64px;
  max-width: 1152px;
  margin: 0 auto;
}

.ds-contact-container {
  text-align: center;
}

.ds-contact-title {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--ds-text);
  margin: 0 0 8px;
}

.ds-contact-subtitle {
  font-size: 15px;
  color: var(--ds-text-2);
  margin: 0 0 32px;
  line-height: 1.6;
}

.ds-contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

.ds-contact-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.ds-contact-card.is-full {
  opacity: 0.65;
}

.ds-contact-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
}

.ds-contact-icon.is-qq {
  color: var(--ds-accent);
  background: color-mix(in srgb, var(--ds-accent), transparent 88%);
  border: 1px solid color-mix(in srgb, var(--ds-accent), transparent 70%);
}

.ds-contact-icon.is-telegram {
  color: var(--ds-accent-purple);
  background: color-mix(in srgb, var(--ds-accent-purple), transparent 88%);
  border: 1px solid color-mix(in srgb, var(--ds-accent-purple), transparent 70%);
}

.svg {
  width: 22px;
  height: 22px;
}

.ds-contact-body {
  min-width: 0;
  text-align: left;
}

.ds-contact-name {
  font-weight: 700;
  font-size: 15px;
  line-height: 1.3;
  color: var(--ds-text);
}

.ds-contact-id {
  margin-top: 2px;
  font-size: 13px;
  color: var(--ds-text-2);
  font-family: var(--ds-font-mono);
}

.ds-contact-badge {
  margin-left: auto;
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 999px;
}

.badge-normal {
  color: var(--ds-success);
  background: color-mix(in srgb, var(--ds-success), transparent 88%);
  border: 1px solid color-mix(in srgb, var(--ds-success), transparent 72%);
}

.badge-full {
  color: var(--ds-text-2);
  background: color-mix(in srgb, var(--ds-border), transparent 50%);
  border: 1px solid var(--ds-border);
}

@media (min-width: 640px) {
  .ds-contact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .ds-contact-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .ds-contact-section {
    padding: 56px 24px 72px;
  }

  .ds-contact-title {
    font-size: 32px;
  }
}
</style>
