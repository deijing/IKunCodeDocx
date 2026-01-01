<script setup lang="ts">
type Props = {
  image: string
  alt?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="logo3d-container">
    <div class="card3d">
      <div class="cardInner">
        <img :src="props.image" :alt="props.alt || 'Logo'" class="logoImg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo3d-container {
  position: relative;
  width: 100%;
  max-width: 420px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  perspective: 1200px;
}

.card3d {
  position: relative;
  width: 280px;
  height: 280px;
  transform-style: preserve-3d;
  transform: rotateX(8deg) rotateY(-12deg) rotateZ(2deg);
  transition: transform 480ms cubic-bezier(0.23, 1, 0.32, 1);
  animation: float3d 6s ease-in-out infinite;
}

.card3d:hover {
  transform: rotateX(4deg) rotateY(-8deg) rotateZ(1deg) scale(1.04);
}

.cardInner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 28px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.88)
  );
  backdrop-filter: blur(20px);
  box-shadow:
    0 0 0 1px rgba(94, 124, 226, 0.15),
    0 12px 32px rgba(94, 124, 226, 0.18),
    0 32px 64px rgba(159, 122, 232, 0.14),
    0 0 128px rgba(94, 124, 226, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.7);
  display: grid;
  place-items: center;
  padding: 24px;
  overflow: hidden;
}

.dark .cardInner {
  background: linear-gradient(
    135deg,
    rgba(15, 21, 34, 0.95),
    rgba(11, 15, 25, 0.92)
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 0 0 1px rgba(94, 124, 226, 0.2),
    0 12px 32px rgba(0, 0, 0, 0.4),
    0 32px 64px rgba(0, 0, 0, 0.3),
    0 0 128px rgba(94, 124, 226, 0.12);
}

/* 3D 背景层效果 */
.cardInner::before {
  content: '';
  position: absolute;
  inset: -100%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(94, 124, 226, 0.15),
    transparent 60%
  );
  transform: translateZ(-20px);
  border-radius: inherit;
}

.cardInner::after {
  content: '';
  position: absolute;
  inset: -50%;
  background: radial-gradient(
    circle at 70% 70%,
    rgba(159, 122, 232, 0.12),
    transparent 50%
  );
  transform: translateZ(-10px);
  border-radius: inherit;
}

.logoImg {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
  transition: transform 340ms ease;
}

.card3d:hover .logoImg {
  transform: scale(1.05);
}

@keyframes float3d {
  0%,
  100% {
    transform: rotateX(8deg) rotateY(-12deg) rotateZ(2deg) translateY(0);
  }
  50% {
    transform: rotateX(6deg) rotateY(-14deg) rotateZ(1deg) translateY(-8px);
  }
}

@media (max-width: 768px) {
  .logo3d-container {
    max-width: 300px;
    margin: 32px auto 0;
  }

  .card3d {
    width: 220px;
    height: 220px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card3d {
    animation: none;
  }
  .card3d,
  .logoImg {
    transition: none;
  }
}
</style>
