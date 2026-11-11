<template>
  <div class="top-info-bar">
    <div class="container">
      <div class="info-left">
        <div class="info-item">
          <svg class="info-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Addis Ababa, Ethiopia</span>
        </div>
        <span class="info-divider" aria-hidden="true"></span>
        <div class="info-item">
          <svg class="info-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>+251 11 123 4567</span>
        </div>
        <span class="info-divider" aria-hidden="true"></span>
        <div class="info-item">
          <svg class="info-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>info@elderlysupport.et</span>
        </div>
      </div>

      <div class="info-right">
        <div class="language-selector">
          <svg class="globe-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <div class="lang-pill" role="group" aria-label="Language selector">
            <button
              type="button"
              :class="['lang-btn', { active: currentLanguage === 'am' }]"
              @click="selectLanguage('am')"
            >
              አማርኛ
            </button>
            <button
              type="button"
              :class="['lang-btn', { active: currentLanguage === 'en' }]"
              @click="selectLanguage('en')"
            >
              English
            </button>
          </div>
        </div>

        <div class="font-controls">
          <button type="button" @click="changeFontSize('large')" :class="{ active: fontSize === 'large' }">A+</button>
          <button type="button" @click="changeFontSize('medium')" :class="{ active: fontSize === 'medium' }">A</button>
          <button type="button" @click="changeFontSize('small')" :class="{ active: fontSize === 'small' }">A-</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useLanguageStore } from '../../stores/languageStore';

const languageStore = useLanguageStore();
const currentLanguage = computed(() => languageStore.currentLanguage);
const fontSize = ref('medium');

const selectLanguage = (lang) => {
  languageStore.setLanguage(lang);
};

const changeFontSize = (size) => {
  fontSize.value = size;
  const root = document.documentElement;

  switch (size) {
    case 'large':
      root.style.fontSize = '17px';
      break;
    case 'small':
      root.style.fontSize = '14px';
      break;
    default:
      root.style.fontSize = '16px';
  }
};
</script>

<style scoped>
.top-info-bar {
  background-color: var(--dark-green);
  color: var(--white);
  padding: 0.35rem 0;
  font-size: 0.75rem;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-left,
.info-right {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.92);
}

.info-svg {
  width: 13px;
  height: 13px;
  color: var(--gold);
  flex-shrink: 0;
}

.info-divider {
  width: 1px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.22);
}

.language-selector {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.globe-svg {
  width: 14px;
  height: 14px;
  color: rgba(255, 255, 255, 0.85);
}

.lang-pill {
  display: inline-flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 2px;
  gap: 2px;
}

.lang-btn {
  background-color: transparent;
  color: rgba(255, 255, 255, 0.88);
  padding: 0.15rem 0.6rem;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1.25;
}

.lang-btn.active {
  background-color: var(--gold);
  color: #1a2e22;
  font-weight: 700;
}

.font-controls {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-left: 0.25rem;
}

.font-controls button {
  background-color: transparent;
  color: rgba(255, 255, 255, 0.8);
  padding: 0.12rem 0.32rem;
  border-radius: 3px;
  font-size: 0.72rem;
  font-weight: 600;
}

.font-controls button:hover,
.font-controls button.active {
  color: var(--gold);
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 0.5rem;
  }

  .info-left,
  .info-right {
    gap: 0.65rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .info-divider {
    display: none;
  }
}

@media (max-width: 480px) {
  .info-item span {
    display: none;
  }
}
</style>
