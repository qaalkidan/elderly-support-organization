<template>
  <section class="donation-cta">
    <div class="cta-background" aria-hidden="true">
      <svg class="leaf leaf-left" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M10 110 C25 70, 50 40, 100 20 C80 65, 55 95, 10 110 Z" />
        <path d="M10 110 C45 75, 70 50, 100 20" />
      </svg>
      <svg class="leaf leaf-right" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M110 10 C85 45, 55 75, 10 95 C30 50, 65 25, 110 10 Z" />
        <path d="M110 10 C75 45, 45 70, 10 95" />
      </svg>
    </div>

    <div class="cta-content">
      <div class="cta-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </div>

      <h2 class="cta-title">{{ t('home.ctaTitle') }}</h2>

      <p class="cta-description">
        {{ t('home.ctaDesc') }}
      </p>

      <router-link to="/donate" class="btn-donate">
        <span>{{ t('home.ctaBtn') }}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../../composables/useLanguage';

const { t } = useLanguage();
</script>

<style scoped>
.donation-cta {
  position: relative;
  background: linear-gradient(145deg, #1b4331 0%, #143627 100%);
  border-radius: 14px;
  padding: 1.25rem 1.15rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 6px 20px rgba(20, 54, 39, 0.16);
  height: 100%;
}

.cta-background {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.leaf {
  position: absolute;
  width: 110px;
  height: 110px;
  color: rgba(214, 168, 95, 0.14);
}

.leaf-left {
  bottom: -24px;
  left: -24px;
}

.leaf-right {
  top: -22px;
  right: -22px;
}

.cta-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
}

.cta-icon {
  color: var(--gold);
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-icon svg {
  width: 100%;
  height: 100%;
}

.cta-title {
  font-size: clamp(1.1rem, 1.5vw, 1.35rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.2;
}

.cta-description {
  font-size: 0.76rem;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.4;
  margin-bottom: 0.25rem;
}

.btn-donate {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background-color: var(--gold);
  color: #1a2e22;
  padding: 0.52rem 1.25rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.78rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease;
}

.btn-donate svg {
  width: 14px;
  height: 14px;
}

.btn-donate:hover {
  background-color: #c89748;
  transform: translateY(-2px);
}
</style>
