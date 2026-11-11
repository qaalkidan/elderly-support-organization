<template>
  <div class="contact-view">
    <!-- Hero Banner -->
    <section class="contact-hero">
      <div class="hero-background">
        <img
          src="/images/hero-banner.png"
          alt="Smiling Ethiopian elderly couple"
          class="hero-image"
        />
        <div class="hero-overlay"></div>
      </div>

      <svg class="hero-leaf" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">
        <path d="M12 108 C22 65, 45 35, 96 16 C78 64, 52 92, 12 108 Z" />
        <path d="M12 108 C42 74, 68 46, 96 16" />
        <path d="M40 78 C54 78, 66 72, 76 62" />
        <path d="M26 92 C36 90, 46 86, 54 79" />
      </svg>

      <div class="hero-arc" aria-hidden="true"></div>

      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <div class="hero-overline-row">
              <span class="overline-line"></span>
              <span class="overline-label">{{ t('contact.overline') }}</span>
              <span class="overline-line"></span>
            </div>
            <h1 class="hero-amharic">{{ t('contact.heroPrimary') }}</h1>
            <h2 class="hero-title">{{ t('contact.heroSecondary') }}</h2>
            <p class="hero-subtitle">
              {{ t('contact.subtitle') }}
            </p>
            <nav class="breadcrumb-pill" aria-label="Breadcrumb">
              <router-link to="/" class="breadcrumb-home">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span>{{ t('common.home') }}</span>
              </router-link>
              <span class="breadcrumb-sep" aria-hidden="true">&gt;</span>
              <span class="breadcrumb-current">{{ t('contact.breadcrumbCurrent') }}</span>
            </nav>
          </div>
        </div>
      </div>

      <svg class="hero-wave" viewBox="0 0 1440 54" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,18 Q360,56 720,28 T1440,16 L1440,54 L0,54 Z" fill="#f7f4eb" />
      </svg>
    </section>

    <!-- Main Contact Content -->
    <div class="contact-main">
      <section class="contact-body-section">
        <div class="container">
          <div class="contact-layout">
            <!-- Left Column: Get in Touch + Info Grid + Map -->
            <div class="left-column">
              <div class="section-heading-block">
                <div class="heading-row">
                  <span class="heading-line"></span>
                  <h2>{{ t('contact.heading') }}</h2>
                </div>
                <p class="heading-subtitle">
                  {{ t('contact.subheading') }}
                </p>
              </div>

              <div class="info-cards-grid">
                <article class="info-card">
                  <div class="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div class="info-body">
                    <h3>{{ t('contact.callTitle') }}</h3>
                    <a href="tel:+251111234567" class="info-primary">{{ t('common.phone') }}</a>
                    <p class="info-secondary">{{ t('contact.callSub') }}</p>
                  </div>
                </article>

                <article class="info-card">
                  <div class="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div class="info-body">
                    <h3>{{ t('contact.emailTitle') }}</h3>
                    <a href="mailto:info@elderlysupport.et" class="info-primary">{{ t('common.email') }}</a>
                    <p class="info-secondary">{{ t('contact.emailSub') }}</p>
                  </div>
                </article>

                <article class="info-card">
                  <div class="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </div>
                  <div class="info-body">
                    <h3>{{ t('contact.addressTitle') }}</h3>
                    <p class="info-primary">{{ t('contact.addressValue') }}</p>
                  </div>
                </article>

                <article class="info-card">
                  <div class="info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm.75 10.4-3.6 2.15-.75-1.26 2.85-1.7V6.5h1.5v5.9z" />
                    </svg>
                  </div>
                  <div class="info-body">
                    <h3>{{ t('contact.hoursTitle') }}</h3>
                    <p class="info-primary">{{ t('contact.hoursLine1') }}</p>
                    <p class="info-secondary">{{ t('contact.hoursLine2') }}</p>
                  </div>
                </article>
              </div>

              <!-- Addis Ababa Location Map Card -->
              <div class="map-card" :class="{ 'is-expanded': mapExpanded }">
                <div class="map-canvas" :style="{ transform: `scale(${mapZoom})` }">
                  <svg class="map-streets" viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <rect width="600" height="260" fill="#efe9da" />
                    <!-- Urban green pockets -->
                    <path d="M0 160 L85 135 L110 215 L25 260 L0 260 Z" fill="#dfe8d2" />
                    <path d="M475 20 L585 5 L600 95 L505 110 Z" fill="#dfe8d2" />
                    <path d="M310 185 L425 160 L455 245 L340 260 Z" fill="#e5ebd6" />
                    <!-- River / canal accent -->
                    <path d="M315 260 C355 220, 425 225, 495 170 C540 135, 575 110, 600 80" fill="none" stroke="#a6cee8" stroke-width="11" stroke-linecap="round" />
                    <!-- Primary arterial roads -->
                    <path d="M-10 45 L210 115 L400 75 L615 140" fill="none" stroke="#f6e095" stroke-width="8" stroke-linecap="round" />
                    <path d="M180 -10 L195 110 L215 265" fill="none" stroke="#ffffff" stroke-width="7" />
                    <path d="M350 -10 L310 130 L285 265" fill="none" stroke="#ffffff" stroke-width="5" />
                    <path d="M-10 190 L180 148 L415 142 L610 195" fill="none" stroke="#ffffff" stroke-width="5" />
                    <path d="M75 -10 L120 145 L95 265" fill="none" stroke="#ffffff" stroke-width="3.5" />
                    <path d="M465 -10 L435 165 L520 265" fill="none" stroke="#ffffff" stroke-width="3.5" />
                    <circle cx="195" cy="112" r="10" fill="#fff8de" stroke="#e4c668" stroke-width="3" />
                  </svg>

                  <div class="map-city-label">
                    <strong>Addis Ababa</strong>
                    <span>አዲስ አበባ</span>
                  </div>
                </div>

                <!-- Pinned Location Callout -->
                <div class="map-callout">
                  <div class="pin-circle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </div>
                  <div class="callout-copy">
                    <strong>{{ isAmharic ? t('common.orgNameAm') : t('common.orgNameEn') }}</strong>
                    <span>{{ t('common.location') }}</span>
                  </div>
                </div>

                <!-- Map Controls -->
                <button
                  type="button"
                  class="map-expand-btn"
                  aria-label="Toggle map view size"
                  @click="toggleExpandMap"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </button>

                <div class="map-zoom-controls">
                  <button type="button" aria-label="Zoom in map" @click="zoomMap(0.15)">+</button>
                  <button type="button" aria-label="Zoom out map" @click="zoomMap(-0.15)">&minus;</button>
                </div>
              </div>
            </div>

            <!-- Right Column: Send Us a Message Form Card -->
            <div class="right-column">
              <div class="message-card">
                <svg class="card-watermark-leaf" viewBox="0 0 140 140" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">
                  <path d="M125 15 C90 25, 55 55, 25 120 C75 95, 110 60, 125 15 Z" />
                  <path d="M125 15 C85 55, 55 85, 25 120" />
                  <path d="M72 68 C90 70, 102 64, 112 52" />
                  <path d="M52 90 C68 92, 82 86, 94 76" />
                </svg>

                <div class="message-header">
                  <div class="plane-circle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.4 2.6a1 1 0 0 0-1.05-.2L2.8 9.9a1 1 0 0 0 .06 1.86l6.75 2.4 2.4 6.75a1 1 0 0 0 1.86.06l7.5-17.55a1 1 0 0 0-.2-1.05zM10.7 13.3l6.1-6.1-4.2 10.15-1.9-4.05z" />
                    </svg>
                  </div>
                  <div>
                    <h2>{{ t('contact.formHeading') }}</h2>
                    <p>{{ t('contact.formSubheading') }}</p>
                  </div>
                </div>

                <form class="message-form" @submit.prevent="handleSubmit">
                  <div class="form-grid-two">
                    <div class="field-box">
                      <span class="field-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
                        </svg>
                      </span>
                      <input
                        v-model.trim="form.name"
                        type="text"
                        :placeholder="t('contact.namePlaceholder')"
                        :aria-label="t('contact.namePlaceholder')"
                        required
                      />
                    </div>

                    <div class="field-box">
                      <span class="field-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </span>
                      <input
                        v-model.trim="form.email"
                        type="email"
                        :placeholder="t('contact.emailPlaceholder')"
                        :aria-label="t('contact.emailPlaceholder')"
                        required
                      />
                    </div>
                  </div>

                  <div class="field-box select-box">
                    <span class="field-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9a2 2 0 0 0 2.83 0l7-7a2 2 0 0 0-.01-2.84zM6.5 8A1.5 1.5 0 1 1 8 6.5 1.5 1.5 0 0 1 6.5 8z" />
                      </svg>
                    </span>
                    <select v-model="form.subject" :aria-label="t('contact.subjectPlaceholder')" required :class="{ 'is-placeholder': !form.subject }">
                      <option value="" disabled>{{ t('contact.subjectPlaceholder') }}</option>
                      <option v-for="option in subjectOptions" :key="option" :value="option">
                        {{ option }}
                      </option>
                    </select>
                    <span class="select-chevron" aria-hidden="true">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                      </svg>
                    </span>
                  </div>

                  <div class="field-box textarea-box">
                    <span class="field-icon field-icon-top" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 9h10v2H7zm0 4h7v2H7z" />
                      </svg>
                    </span>
                    <textarea
                      v-model.trim="form.message"
                      rows="6"
                      :placeholder="t('contact.messagePlaceholder')"
                      :aria-label="t('contact.messagePlaceholder')"
                      required
                    ></textarea>
                  </div>

                  <div class="form-footer">
                    <button type="submit" class="btn-send">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                      <span>{{ t('contact.sendBtn') }}</span>
                    </button>

                    <p v-if="submitFeedback" class="submit-feedback" role="status">
                      {{ submitFeedback }}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom CTA Banner -->
      <section class="contact-cta-section">
        <div class="container">
          <div class="cta-banner">
            <svg class="cta-leaf cta-leaf-left" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
              <path d="M10 110 C25 70, 50 40, 100 20 C80 65, 55 95, 10 110 Z" />
              <path d="M10 110 C45 75, 70 50, 100 20" />
            </svg>
            <svg class="cta-leaf cta-leaf-right" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
              <path d="M110 10 C85 45, 55 75, 10 95 C30 50, 65 25, 110 10 Z" />
              <path d="M110 10 C75 45, 45 70, 10 95" />
            </svg>

            <div class="cta-content">
              <div class="cta-left">
                <div class="cta-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                    <path d="m18 15-2-2" />
                    <path d="m15 18-2-2" />
                  </svg>
                </div>
                <span class="cta-divider" aria-hidden="true"></span>
                <div>
                  <h2 class="cta-title">{{ t('contact.ctaTitle') }}</h2>
                  <p class="cta-subtitle">{{ t('contact.ctaSubtitle') }}</p>
                </div>
              </div>

              <router-link to="/donate" class="btn-donate">
                <span>{{ t('contact.ctaBtn') }}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t, messages, isAmharic } = useLanguage();

const mapZoom = ref(1);
const mapExpanded = ref(false);
const submitFeedback = ref('');

const subjectOptions = computed(() => messages.value.contact.subjects);

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const zoomMap = (delta) => {
  const next = Number((mapZoom.value + delta).toFixed(2));
  mapZoom.value = Math.min(1.6, Math.max(0.85, next));
};

const toggleExpandMap = () => {
  mapExpanded.value = !mapExpanded.value;
};

const handleSubmit = () => {
  const sender = form.name || 'Friend';
  submitFeedback.value = t('contact.submitSuccess', {
    name: sender,
    subject: form.subject
  });
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
};
</script>

<style scoped>
.contact-view {
  width: 100%;
  background-color: #f7f4eb;
}

/* Hero Banner */
.contact-hero {
  position: relative;
  height: 270px;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  background-color: #153828;
}

.hero-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 66%;
  height: 100%;
  object-fit: cover;
  object-position: center 14%;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(21, 56, 40, 1) 0%,
    rgba(21, 56, 40, 1) 33%,
    rgba(21, 56, 40, 0.84) 41%,
    rgba(21, 56, 40, 0.24) 53%,
    rgba(21, 56, 40, 0) 64%,
    transparent 100%
  );
}

.hero-leaf {
  position: absolute;
  top: -8px;
  left: -8px;
  width: 112px;
  height: 112px;
  color: rgba(255, 255, 255, 0.08);
  pointer-events: none;
  z-index: 1;
}

.hero-arc {
  position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  border: 1px solid rgba(214, 168, 95, 0.28);
  top: -28px;
  left: 38%;
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 18px;
}

.hero-content .container {
  width: 100%;
}

.hero-text {
  max-width: 540px;
}

.hero-overline-row {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.35rem;
}

.overline-line {
  width: 30px;
  height: 1px;
  background-color: #d7ab59;
}

.overline-label {
  color: #e4ba67;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.hero-amharic {
  color: var(--white);
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.08;
  margin-bottom: 0.1rem;
}

.hero-title {
  color: var(--white);
  font-size: 2.05rem;
  font-weight: 800;
  line-height: 1.08;
  margin-bottom: 0.45rem;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.88rem;
  line-height: 1.45;
  margin-bottom: 0.9rem;
}

.breadcrumb-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background-color: #f3ede0;
  color: var(--primary-green);
  padding: 0.32rem 0.95rem;
  border-radius: var(--radius-pill);
  font-size: 0.76rem;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.14);
}

.breadcrumb-home {
  display: inline-flex;
  align-items: center;
  gap: 0.32rem;
  color: var(--primary-green);
}

.breadcrumb-home svg {
  width: 13px;
  height: 13px;
}

.breadcrumb-sep {
  color: #8b948e;
  font-weight: 600;
}

.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 36px;
  z-index: 2;
  pointer-events: none;
}

/* Main Content */
.contact-main {
  padding: 1.45rem 0 2.5rem;
}

.contact-body-section {
  margin-bottom: 1.4rem;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 1.55rem;
  align-items: stretch;
}

/* Left Column */
.left-column {
  display: flex;
  flex-direction: column;
}

.section-heading-block {
  margin-bottom: 1rem;
}

.heading-row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.28rem;
}

.heading-line {
  width: 30px;
  height: 2px;
  background-color: #d7ab59;
  border-radius: 2px;
}

.heading-row h2 {
  color: #164431;
  font-size: 1.38rem;
  font-weight: 800;
  line-height: 1.15;
}

.heading-subtitle {
  color: #4b5563;
  font-size: 0.82rem;
  line-height: 1.45;
}

.info-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
  margin-bottom: 0.95rem;
}

.info-card {
  background-color: #fdfbf6;
  border: 1px solid #ede6d6;
  border-radius: 12px;
  padding: 0.95rem 1.05rem;
  box-shadow: 0 4px 14px rgba(21, 61, 47, 0.04);
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}

.info-icon {
  color: #1a4b35;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.info-icon svg {
  width: 24px;
  height: 24px;
}

.info-body h3 {
  color: #164431;
  font-size: 0.88rem;
  font-weight: 800;
  margin-bottom: 0.22rem;
}

.info-primary {
  display: block;
  color: #1f2937;
  font-size: 0.79rem;
  font-weight: 600;
  line-height: 1.38;
  word-break: break-word;
}

.info-secondary {
  color: #6b7280;
  font-size: 0.72rem;
  line-height: 1.38;
  margin-top: 0.15rem;
}

/* Map Card */
.map-card {
  position: relative;
  height: 190px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #e4decb;
  box-shadow: 0 4px 16px rgba(21, 61, 47, 0.06);
  background-color: #efe9da;
  transition: height 0.25s ease;
}

.map-card.is-expanded {
  height: 280px;
}

.map-canvas {
  position: relative;
  width: 100%;
  height: 100%;
  transform-origin: center center;
  transition: transform 0.25s ease;
}

.map-streets {
  width: 100%;
  height: 100%;
  display: block;
}

.map-city-label {
  position: absolute;
  left: 16%;
  bottom: 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2f352e;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.9);
  pointer-events: none;
}

.map-city-label strong {
  font-size: 0.98rem;
  font-weight: 800;
  line-height: 1.1;
}

.map-city-label span {
  font-size: 0.85rem;
  font-weight: 700;
}

.map-callout {
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%, -62%);
  background-color: var(--white);
  border-radius: 10px;
  padding: 0.5rem 0.85rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.14);
  display: flex;
  align-items: center;
  gap: 0.55rem;
  white-space: nowrap;
}

.map-callout::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background-color: var(--white);
}

.pin-circle {
  color: #dc2626;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pin-circle svg {
  width: 22px;
  height: 22px;
}

.callout-copy {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.callout-copy strong {
  color: #164431;
  font-size: 0.78rem;
  font-weight: 800;
  line-height: 1.2;
}

.callout-copy span {
  color: #4b5563;
  font-size: 0.7rem;
}

.map-expand-btn {
  position: absolute;
  top: 0.65rem;
  right: 0.65rem;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--white);
  color: #374151;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-expand-btn svg {
  width: 14px;
  height: 14px;
}

.map-zoom-controls {
  position: absolute;
  bottom: 0.65rem;
  right: 0.65rem;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
}

.map-zoom-controls button {
  width: 28px;
  height: 24px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #374151;
  background-color: var(--white);
  line-height: 1;
}

.map-zoom-controls button:first-child {
  border-bottom: 1px solid #e5e7eb;
}

.map-zoom-controls button:hover,
.map-expand-btn:hover {
  background-color: #f3f4f6;
}

/* Right Column: Message Card */
.message-card {
  position: relative;
  height: 100%;
  background: linear-gradient(155deg, #f0f5ea 0%, #e4ede0 100%);
  border: 1px solid #dce6d4;
  border-radius: 16px;
  padding: 1.45rem 1.55rem;
  box-shadow: 0 6px 22px rgba(21, 61, 47, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-watermark-leaf {
  position: absolute;
  right: -12px;
  bottom: -14px;
  width: 145px;
  height: 145px;
  color: rgba(21, 61, 47, 0.07);
  pointer-events: none;
}

.message-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.15rem;
  position: relative;
  z-index: 1;
}

.plane-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(29, 79, 56, 0.12);
  color: #1b4b36;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.plane-circle svg {
  width: 21px;
  height: 21px;
}

.message-header h2 {
  color: #164431;
  font-size: 1.32rem;
  font-weight: 800;
  line-height: 1.18;
  margin-bottom: 0.15rem;
}

.message-header p {
  color: #4b5563;
  font-size: 0.77rem;
  line-height: 1.35;
}

.message-form {
  display: flex;
  flex-direction: column;
  gap: 0.82rem;
  position: relative;
  z-index: 1;
  flex: 1;
}

.form-grid-two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.82rem;
}

.field-box {
  position: relative;
  background-color: var(--white);
  border: 1px solid #e3e8df;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 0.85rem;
  min-height: 43px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}

.field-box:focus-within {
  border-color: #1b4b36;
}

.field-icon {
  color: #6b7b72;
  width: 15px;
  height: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.55rem;
  flex-shrink: 0;
}

.field-icon svg {
  width: 15px;
  height: 15px;
}

.field-box input,
.field-box select,
.field-box textarea {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: #1f2937;
  font-size: 0.8rem;
  font-family: inherit;
}

.field-box input::placeholder,
.field-box textarea::placeholder,
.field-box select.is-placeholder {
  color: #64748b;
}

.select-box select {
  appearance: none;
  padding-right: 1.4rem;
  cursor: pointer;
}

.select-chevron {
  position: absolute;
  right: 0.75rem;
  width: 16px;
  height: 16px;
  color: #4b5563;
  pointer-events: none;
}

.textarea-box {
  align-items: flex-start;
  padding-top: 0.72rem;
  padding-bottom: 0.72rem;
  flex: 1;
}

.field-icon-top {
  margin-top: 0.15rem;
}

.textarea-box textarea {
  resize: vertical;
  min-height: 118px;
  line-height: 1.45;
}

.form-footer {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.25rem;
}

.btn-send {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background-color: #1b4b36;
  color: var(--white);
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.68rem 1.45rem;
  border-radius: var(--radius-pill);
  box-shadow: 0 4px 12px rgba(21, 56, 40, 0.16);
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn-send:hover {
  background-color: #143928;
  transform: translateY(-1px);
}

.btn-send svg {
  width: 14px;
  height: 14px;
}

.submit-feedback {
  color: #164431;
  font-size: 0.8rem;
  font-weight: 700;
}

/* Bottom CTA Banner */
.cta-banner {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(95deg, #1b4634 0%, #153829 65%, #1d4e3a 100%);
  padding: 1.4rem 2.2rem;
  box-shadow: 0 8px 26px rgba(21, 56, 40, 0.14);
}

.cta-leaf {
  position: absolute;
  width: 120px;
  height: 120px;
  color: rgba(255, 255, 255, 0.07);
  pointer-events: none;
}

.cta-leaf-left {
  left: -14px;
  top: -12px;
}

.cta-leaf-right {
  right: -12px;
  bottom: -14px;
}

.cta-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.cta-left {
  display: flex;
  align-items: center;
  gap: 1.05rem;
}

.cta-icon {
  width: 44px;
  height: 44px;
  color: #e4ba67;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cta-icon svg {
  width: 38px;
  height: 38px;
}

.cta-divider {
  width: 1px;
  height: 40px;
  background-color: rgba(215, 171, 89, 0.38);
  flex-shrink: 0;
}

.cta-title {
  color: var(--white);
  font-size: 1.3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.2rem;
}

.cta-subtitle {
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.82rem;
}

.btn-donate {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background-color: #e8b85b;
  color: #163b2b;
  font-size: 0.84rem;
  font-weight: 800;
  padding: 0.72rem 1.45rem;
  border-radius: var(--radius-pill);
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn-donate:hover {
  background-color: #dba53e;
  transform: translateY(-1px);
}

.btn-donate svg {
  width: 15px;
  height: 15px;
}

/* Responsive */
@media (max-width: 1024px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact-hero {
    height: auto;
    min-height: 245px;
    padding: 2rem 0 2.6rem;
  }

  .hero-image {
    width: 100%;
    left: 0;
  }

  .hero-overlay {
    background: linear-gradient(
      180deg,
      rgba(21, 56, 40, 0.9) 0%,
      rgba(21, 56, 40, 0.78) 100%
    );
  }

  .hero-amharic {
    font-size: 1.75rem;
  }

  .hero-title {
    font-size: 1.65rem;
  }

  .info-cards-grid,
  .form-grid-two {
    grid-template-columns: 1fr;
  }

  .cta-banner {
    padding: 1.35rem 1.25rem;
  }

  .cta-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .cta-divider {
    display: none;
  }
}
</style>
