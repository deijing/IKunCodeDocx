<script setup lang="ts">
type CTA = {
  text: string
  href: string
  variant?: 'primary' | 'secondary'
}

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  ctas?: CTA[]
  image?: string
}

const props = defineProps<Props>()
</script>

<template>
  <section class="wrap ds-hero-bg">
    <div class="inner">
      <div class="container">
        <div class="leftCol">
          <div v-if="props.eyebrow" class="eyebrow">{{ props.eyebrow }}</div>
          <h1 class="title">
            <span class="titleText">{{ props.title }}</span>
          </h1>
          <p v-if="props.subtitle" class="subtitle">{{ props.subtitle }}</p>

          <div v-if="props.ctas?.length" class="ctaRow">
            <a
              v-for="(cta, idx) in props.ctas"
              :key="idx"
              class="ds-btn"
              :class="cta.variant === 'secondary' ? 'ds-btn-secondary' : 'ds-btn-primary'"
              :href="cta.href"
            >
              {{ cta.text }}
            </a>
          </div>
        </div>

        <div v-if="props.image" class="rightCol">
          <div class="imageWrap ds-hero-3d-img">
            <img :src="props.image" alt="" class="heroImage" />
          </div>
        </div>
      </div>
    </div>

    <div class="orbs" aria-hidden="true">
      <span class="orb o1" />
      <span class="orb o2" />
      <span class="orb o3" />
    </div>
  </section>
</template>

<style scoped>
.wrap {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 32px;
  background-color: var(--vp-c-bg);
  margin: 24px 0;
}

.inner {
  position: relative;
  padding: 64px 24px;
  z-index: 1;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 1152px;
  margin: 0 auto;
}

@media (min-width: 960px) {
  .container {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }
  .leftCol {
    flex: 1;
  }
  .rightCol {
    flex: 1;
    display: flex;
    justify-content: center;
  }
}

.imageWrap {
  position: relative;
  width: 100%;
  max-width: 480px;
}

.heroImage {
  width: 100%;
  height: auto;
  display: block;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 28px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: color-mix(in srgb, var(--vp-c-bg-soft), transparent 0%);
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  margin-bottom: 16px;
}

.title {
  margin: 0;
  font-size: 40px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 800;
}

.titleText {
  background: linear-gradient(
    135deg,
    var(--vp-c-brand-1),
    var(--ds-accent-purple)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  margin: 20px 0 0;
  font-size: 18px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  max-width: 540px;
}

.ctaRow {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
}

.ds-btn {
  padding: 0 24px;
  height: 48px;
  font-size: 16px;
}


.arrow {
  opacity: 0.8;
  transition: transform 160ms ease;
}
.ds-btn:hover .arrow {
  transform: translateX(2px);
}

.note {
  margin-top: 16px;
  font-size: 12px;
  opacity: 0.7;
}

.orbs {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.orb {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  opacity: 0.12;
  filter: blur(46px);
  transform: translate3d(0, 0, 0);
}

.o1 {
  left: -160px;
  top: -220px;
  animation: float1 10s ease-in-out infinite;
}
.o2 {
  right: -220px;
  top: -160px;
  background: #9f7ae8;
  animation: float2 12s ease-in-out infinite;
}
.o3 {
  left: 18%;
  bottom: -260px;
  background: color-mix(in srgb, var(--vp-c-brand-1), #9f7ae8 35%);
  animation: float3 14s ease-in-out infinite;
}

@keyframes float1 {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, 18px);
  }
}
@keyframes float2 {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-14px, 10px);
  }
}
@keyframes float3 {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(18px, -12px);
  }
}

@media (min-width: 640px) {
  .inner {
    padding: 56px 44px 44px;
  }
  .title {
    font-size: 44px;
  }
  .subtitle {
    font-size: 16px;
  }
}
</style>
