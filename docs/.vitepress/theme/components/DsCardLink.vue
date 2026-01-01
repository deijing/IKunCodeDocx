<script setup lang="ts">
type Props = {
  title: string
  description?: string
  href: string
  icon?: 'book' | 'rocket' | 'wrench' | 'question'
}

const props = defineProps<Props>()

const icons: Record<NonNullable<Props['icon']>, string> = {
  book: 'M6 4.5C6 3.12 7.12 2 8.5 2H20v17.5a2.5 2.5 0 0 0-2.5-2.5H6V4.5Z M6 17H17.5A3.5 3.5 0 0 1 21 20.5V22H8.5A2.5 2.5 0 0 1 6 19.5V17Z',
  rocket:
    'M13 2c3.5 1 6 3.5 7 7l-3 3-4-4 3-3c-1-1-2-2-3-3Z M11 10l4 4-5 5c-1 .2-2.8.2-4.5-1.5S3.8 14 4 13l7-3Z M7.5 14.5l-2 2c-.6.6-.6 1.4 0 2s1.4.6 2 0l2-2',
  wrench:
    'M21 7a6 6 0 0 1-8.7 5.3L6.6 18a2 2 0 0 1-2.8 0l-.8-.8a2 2 0 0 1 0-2.8l5.7-5.7A6 6 0 0 1 17 3l-3 3 4 4 3-3Z',
  question:
    'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 15.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 6a3.5 3.5 0 0 1 3.5 3.5c0 1.3-.7 2.2-1.7 2.9-.7.5-1.1.8-1.1 1.6v.5h-1.4V14c0-1.5.8-2.1 1.6-2.6.8-.5 1.2-1 1.2-1.9A2.1 2.1 0 0 0 12 7.4 2.1 2.1 0 0 0 9.9 9.5H8.5A3.5 3.5 0 0 1 12 6Z',
}
</script>

<template>
  <a class="ds-card ds-card-link" :href="props.href">
    <div v-if="props.icon" class="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor" class="svg">
        <path :d="icons[props.icon]" />
      </svg>
    </div>
    <div class="body">
      <div class="title">{{ props.title }}</div>
      <div v-if="props.description" class="desc">{{ props.description }}</div>
    </div>
    <div class="chev" aria-hidden="true">→</div>
  </a>
</template>

<style scoped>
.ds-card-link {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 16px;
  text-decoration: none;
  color: inherit;
}

.icon {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1), transparent 88%);
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1), transparent 70%);
  flex: 0 0 auto;
}

.svg {
  width: 18px;
  height: 18px;
}

.body {
  min-width: 0;
}

.title {
  font-weight: 700;
  line-height: 1.2;
}

.desc {
  margin-top: 6px;
  font-size: 13px;
  opacity: 0.78;
  line-height: 1.55;
}

.chev {
  margin-left: auto;
  opacity: 0.55;
  transition: transform 160ms ease, opacity 160ms ease;
}

.ds-card-link:hover .chev {
  transform: translateX(2px);
  opacity: 0.85;
}
</style>
