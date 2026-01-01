<script setup lang="ts">
export type Feature = {
  title: string
  description: string
  icon?: 'speed' | 'shield' | 'puzzle' | 'spark'
}

type Props = {
  features: Feature[]
}

const props = defineProps<Props>()

const icons: Record<NonNullable<Feature['icon']>, string> = {
  speed:
    'M12 3a9 9 0 1 0 9 9c0-4.97-4.03-9-9-9Zm0 2a7 7 0 0 1 6.9 6H18a1 1 0 0 0 0 2h.9A7 7 0 1 1 12 5Zm3.6 3.4-4.2 4.2a2 2 0 1 0 1.4 1.4l4.2-4.2a1 1 0 1 0-1.4-1.4Z',
  shield:
    'M12 2 20 6v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Zm0 4.2L6 8.8V12c0 4 2.6 7.4 6 8 3.4-.6 6-4 6-8V8.8l-6-2.6Z',
  puzzle:
    'M9 2a2 2 0 0 1 2 2v1h2V4a2 2 0 1 1 4 0v3h-3v2h3v6h-3v2h3v3H4v-3h3v-2H4V9h3V7H4V4a2 2 0 1 1 4 0v1h2V4a2 2 0 0 1 2-2Z',
  spark:
    'M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Zm7 10 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z',
}
</script>

<template>
  <div class="grid">
    <div v-for="(f, idx) in props.features" :key="idx" class="ds-card item">
      <div class="head">
        <div v-if="f.icon" class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" class="svg">
            <path :d="icons[f.icon]" />
          </svg>
        </div>
        <div class="title">{{ f.title }}</div>
      </div>
      <div class="desc">{{ f.description }}</div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 14px;
}

.item {
  grid-column: span 12;
  padding: 16px 16px;
}

.head {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1), transparent 90%);
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1), transparent 72%);
  flex: 0 0 auto;
}

.svg {
  width: 18px;
  height: 18px;
}

.title {
  font-weight: 800;
  letter-spacing: -0.01em;
}

.desc {
  margin-top: 10px;
  opacity: 0.78;
  font-size: 13px;
  line-height: 1.6;
}

@media (min-width: 640px) {
  .item {
    grid-column: span 6;
  }
}

@media (min-width: 960px) {
  .item {
    grid-column: span 4;
  }
}
</style>
