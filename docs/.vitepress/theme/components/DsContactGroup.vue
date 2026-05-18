<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const isZh = computed(() => lang.value?.toLowerCase().startsWith('zh'))

const title = computed(() => (isZh.value ? '获取帮助' : 'Need Help?'))
const subtitle = computed(() =>
  isZh.value
    ? '如需获取帮助，请发送邮件至 support@ikuncode.cc，我们会尽快与您联系。'
    : 'For help, email us at support@ikuncode.cc and we will get back to you shortly.'
)
const buttonText = computed(() =>
  isZh.value ? '发送邮件' : 'Send Email'
)
</script>

<template>
  <section class="ds-contact-section">
    <div class="ds-contact-container">
      <h2 class="ds-contact-title">{{ title }}</h2>
      <p class="ds-contact-subtitle">{{ subtitle }}</p>
      <a
        href="mailto:support@ikuncode.cc"
        class="ds-card ds-contact-card"
      >
        <div class="ds-contact-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" class="svg">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </div>
        <div class="ds-contact-body">
          <div class="ds-contact-name">support@ikuncode.cc</div>
          <div class="ds-contact-id">{{ buttonText }}</div>
        </div>
        <span class="ds-contact-arrow">→</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.ds-contact-section {
  padding: 48px 24px 64px;
  max-width: 720px;
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

.ds-contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.ds-contact-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  color: var(--ds-accent);
  background: color-mix(in srgb, var(--ds-accent), transparent 88%);
  border: 1px solid color-mix(in srgb, var(--ds-accent), transparent 70%);
}

.svg {
  width: 24px;
  height: 24px;
}

.ds-contact-body {
  min-width: 0;
  text-align: left;
  flex: 1;
}

.ds-contact-name {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.3;
  color: var(--ds-text);
}

.ds-contact-id {
  margin-top: 4px;
  font-size: 13px;
  color: var(--ds-text-2);
}

.ds-contact-arrow {
  margin-left: auto;
  flex: 0 0 auto;
  font-size: 18px;
  color: var(--ds-text-2);
  transition: transform 0.2s ease;
}

.ds-contact-card:hover .ds-contact-arrow {
  transform: translateX(4px);
}

@media (min-width: 960px) {
  .ds-contact-section {
    padding: 56px 24px 72px;
  }

  .ds-contact-title {
    font-size: 32px;
  }
}
</style>
