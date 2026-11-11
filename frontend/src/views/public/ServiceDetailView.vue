<template>
  <div class="service-detail-view">
    <!-- Service Hero Banner -->
    <section class="detail-hero">
      <div class="hero-background">
        <img :src="currentService.image" :alt="currentService.title" class="hero-bg-image" />
        <div class="hero-gradient"></div>
      </div>

      <svg class="hero-leaf" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">
        <path d="M12 108 C22 65, 45 35, 96 16 C78 64, 52 92, 12 108 Z" />
        <path d="M12 108 C42 74, 68 46, 96 16" />
        <path d="M40 78 C54 78, 66 72, 76 62" />
      </svg>

      <div class="hero-arc" aria-hidden="true"></div>

      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <div class="hero-overline-row">
              <span class="overline-line"></span>
              <span class="overline-text">{{ t('services.overline') }}</span>
              <span class="overline-line"></span>
            </div>

            <h1 class="hero-title">{{ currentService.title }}</h1>
            <div class="hero-secondary">{{ currentService.heroSecondary }}</div>
            <p class="hero-subtitle">{{ currentService.subtitle }}</p>

            <nav class="breadcrumb-pill" aria-label="Breadcrumb">
              <router-link to="/" class="breadcrumb-link">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 3 3 10.5h2.5V20h5v-5.5h3V20h5v-9.5H21L12 3Z" />
                </svg>
                <span>{{ t('common.home') }}</span>
              </router-link>
              <span class="breadcrumb-sep" aria-hidden="true">&gt;</span>
              <router-link to="/services" class="breadcrumb-link">
                <span>{{ ui.backToServices }}</span>
              </router-link>
              <span class="breadcrumb-sep" aria-hidden="true">&gt;</span>
              <span class="breadcrumb-current">{{ currentService.title }}</span>
            </nav>
          </div>
        </div>
      </div>

      <svg class="hero-wave" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,14 Q360,48 720,24 T1440,14 L1440,48 L0,48 Z" fill="#F7F4EB" />
      </svg>
    </section>

    <!-- Main Body -->
    <div class="detail-body">
      <!-- Key Program Impact Strip -->
      <section class="stats-strip-section">
        <div class="container">
          <div class="stats-strip-card">
            <div v-for="(stat, idx) in currentService.stats" :key="stat.label" class="stat-pill-item">
              <div class="stat-circle" aria-hidden="true">
                <svg v-if="idx === 0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                <svg v-else-if="idx === 1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div class="stat-copy">
                <strong>{{ stat.value }}</strong>
                <span>{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Two-Column Workspace -->
      <section class="workspace-section">
        <div class="container">
          <div class="workspace-grid">
            <!-- Left Main Column -->
            <div class="main-column">
              <!-- Program Overview Card -->
              <article class="content-card overview-card">
                <div class="overview-photo-wrap">
                  <img :src="currentService.image" :alt="currentService.title" />
                  <span class="photo-badge">{{ currentService.heroSecondary }}</span>
                </div>

                <div class="overview-text">
                  <div class="section-heading-line">
                    <span class="accent-bar"></span>
                    <h2>{{ ui.overviewTitle }}</h2>
                  </div>
                  <p v-for="(paragraph, i) in currentService.overview" :key="i" class="body-paragraph">
                    {{ paragraph }}
                  </p>
                </div>
              </article>

              <!-- What This Service Includes (2x2 Grid) -->
              <section class="content-card features-wrapper">
                <div class="section-heading-line">
                  <span class="accent-bar"></span>
                  <h2>{{ ui.offerTitle }}</h2>
                </div>

                <div class="features-grid">
                  <article v-for="(feature, idx) in currentService.features" :key="feature.title" class="feature-tile">
                    <div class="feature-icon-badge" aria-hidden="true">
                      <svg v-if="idx === 0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <svg v-else-if="idx === 1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <svg v-else-if="idx === 2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4l3 3" />
                      </svg>
                      <svg v-else viewBox="0 0 24 24" fill="currentColor">
                        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <h3>{{ feature.title }}</h3>
                    <p>{{ feature.description }}</p>
                  </article>
                </div>
              </section>

              <!-- How to Access + Eligibility Split -->
              <div class="guidance-split">
                <article class="content-card steps-card">
                  <div class="section-heading-line">
                    <span class="accent-bar"></span>
                    <h2>{{ ui.howTitle }}</h2>
                  </div>

                  <div class="steps-list">
                    <div v-for="item in currentService.steps" :key="item.step" class="step-row">
                      <span class="step-number">{{ item.step }}</span>
                      <div>
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.desc }}</p>
                      </div>
                    </div>
                  </div>
                </article>

                <article class="eligibility-card">
                  <div class="section-heading-line">
                    <span class="accent-bar"></span>
                    <h2>{{ ui.eligibilityTitle }}</h2>
                  </div>

                  <ul class="eligibility-list">
                    <li v-for="point in currentService.eligibility" :key="point">
                      <span class="elig-check" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>{{ point }}</span>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useLanguage } from '@/composables/useLanguage';
import { serviceDetailsData } from '@/locales/serviceDetails';

const route = useRoute();
const { currentLanguage, t } = useLanguage();

const serviceOrder = ['healthcare', 'food', 'financial', 'social', 'home-visits', 'other'];

const slugAliases = {
  healthcare: 'healthcare',
  food: 'food',
  'food-assistance': 'food',
  financial: 'financial',
  'financial-support': 'financial',
  social: 'social',
  'social-support': 'social',
  'home-visits': 'home-visits',
  other: 'other'
};

const localeBundle = computed(() => serviceDetailsData[currentLanguage.value] || serviceDetailsData.en);
const ui = computed(() => localeBundle.value.ui);

const normalizedSlug = computed(() => {
  const raw = String(route.params.id || 'healthcare').toLowerCase();
  return slugAliases[raw] || 'healthcare';
});

const currentService = computed(
  () => localeBundle.value.items[normalizedSlug.value] || localeBundle.value.items.healthcare
);

const allServiceLinks = computed(() =>
  serviceOrder.map((slug) => ({
    slug,
    title: localeBundle.value.items[slug].title
  }))
);

const form = reactive({
  name: '',
  phone: '',
  subcity: '',
  notes: ''
});

const requestSuccess = ref('');

watch(normalizedSlug, () => {
  requestSuccess.value = '';
});

const submitRequest = () => {
  const template = ui.value.submittedMsg;
  requestSuccess.value = template
    .replaceAll('{name}', form.name)
    .replaceAll('{service}', currentService.value.title);
  form.name = '';
  form.phone = '';
  form.subcity = '';
  form.notes = '';
};
</script>

<style scoped>
.service-detail-view {
  width: 100%;
  background-color: #f7f4eb;
}

/* Hero Banner */
.detail-hero {
  position: relative;
  min-height: 290px;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 75% 24%;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    98deg,
    rgba(16, 46, 28, 0.96) 0%,
    rgba(16, 46, 28, 0.9) 46%,
    rgba(16, 46, 28, 0.48) 76%,
    rgba(16, 46, 28, 0.2) 100%
  );
}

.hero-leaf {
  position: absolute;
  left: -14px;
  top: 42px;
  width: 132px;
  height: 132px;
  color: rgba(255, 255, 255, 0.08);
  pointer-events: none;
  z-index: 1;
}

.hero-arc {
  position: absolute;
  top: -120px;
  right: 12%;
  width: 460px;
  height: 460px;
  border-radius: 50%;
  border: 1px solid rgba(229, 193, 92, 0.42);
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 2.3rem 0 3.8rem;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-text {
  max-width: 650px;
}

.hero-overline-row {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.45rem;
}

.overline-line {
  width: 40px;
  height: 1.5px;
  background-color: rgba(214, 168, 95, 0.85);
}

.overline-text {
  color: #e6bf73;
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero-title {
  margin: 0 0 0.2rem;
  color: #ffffff;
  font-size: clamp(1.9rem, 3.3vw, 2.65rem);
  font-weight: 800;
  line-height: 1.12;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.28);
}

.hero-secondary {
  color: #e6bf73;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.55rem;
}

.hero-subtitle {
  margin: 0 0 1rem;
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.98rem;
  line-height: 1.55;
  max-width: 580px;
}

.breadcrumb-pill {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.45rem;
  background-color: rgba(244, 240, 229, 0.96);
  color: #1e3b2b;
  padding: 0.36rem 0.95rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
}

.breadcrumb-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #1e3b2b;
  text-decoration: none;
}

.breadcrumb-link:hover {
  color: #14532d;
  text-decoration: underline;
}

.breadcrumb-link svg {
  width: 13px;
  height: 13px;
}

.breadcrumb-sep {
  color: #6b7b6e;
}

.breadcrumb-current {
  color: #244b3a;
  font-weight: 700;
}

.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 36px;
  z-index: 3;
}

/* Body & Impact Strip */
.detail-body {
  padding-bottom: 3rem;
}

.stats-strip-section {
  position: relative;
  z-index: 4;
  margin-top: -1.1rem;
  margin-bottom: 1.8rem;
}

.stats-strip-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e7eadd;
  box-shadow: 0 10px 26px rgba(18, 43, 27, 0.08);
  padding: 1rem 1.25rem;
  gap: 1rem;
}

.stat-pill-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  padding: 0.3rem 0.6rem;
}

.stat-pill-item + .stat-pill-item {
  border-left: 1px solid #e7ebdf;
}

.stat-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #eaf3ea;
  color: #1e4d32;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-circle svg {
  width: 20px;
  height: 20px;
}

.stat-copy {
  display: flex;
  flex-direction: column;
}

.stat-copy strong {
  color: #163e28;
  font-size: 1.28rem;
  font-weight: 800;
  line-height: 1.1;
}

.stat-copy span {
  color: #5b695e;
  font-size: 0.84rem;
  font-weight: 600;
  margin-top: 0.15rem;
}

/* Main 2-Column Workspace */
.workspace-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.85fr) minmax(305px, 1fr);
  gap: 1.65rem;
  align-items: start;
}

.main-column {
  display: flex;
  flex-direction: column;
  gap: 1.45rem;
}

.content-card {
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #e6e9de;
  box-shadow: 0 8px 22px rgba(20, 46, 30, 0.05);
  padding: 1.45rem;
}

.overview-photo-wrap {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  height: 270px;
  margin-bottom: 1.3rem;
}

.overview-photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 24%;
}

.photo-badge {
  position: absolute;
  bottom: 0.9rem;
  left: 0.9rem;
  background: rgba(16, 46, 28, 0.88);
  color: #f3d589;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.35rem 0.9rem;
  border-radius: 9999px;
  backdrop-filter: blur(4px);
}

.section-heading-line {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.9rem;
}

.accent-bar {
  width: 4px;
  height: 22px;
  border-radius: 99px;
  background: linear-gradient(180deg, #1d5033, #d6a85f);
  flex-shrink: 0;
}

.section-heading-line h2 {
  margin: 0;
  color: #163c27;
  font-size: 1.24rem;
  font-weight: 800;
}

.body-paragraph {
  margin: 0 0 0.85rem;
  color: #415145;
  font-size: 0.97rem;
  line-height: 1.68;
}

.body-paragraph:last-child {
  margin-bottom: 0;
}

/* 2x2 Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.feature-tile {
  background: #f9faf6;
  border: 1px solid #e5eadb;
  border-radius: 14px;
  padding: 1.15rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-tile:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(22, 60, 39, 0.08);
}

.feature-icon-badge {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: #e8f1e6;
  color: #1b4d31;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.7rem;
}

.feature-icon-badge svg {
  width: 19px;
  height: 19px;
}

.feature-tile h3 {
  margin: 0 0 0.35rem;
  color: #183f29;
  font-size: 1rem;
  font-weight: 700;
}

.feature-tile p {
  margin: 0;
  color: #536357;
  font-size: 0.89rem;
  line-height: 1.55;
}

/* Steps + Eligibility */
.guidance-split {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 1.25rem;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
}

.step-row {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}

.step-number {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #1b4b30;
  color: #f4d381;
  font-size: 0.82rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-row h3 {
  margin: 0 0 0.2rem;
  color: #163d28;
  font-size: 0.96rem;
  font-weight: 700;
}

.step-row p {
  margin: 0;
  color: #556458;
  font-size: 0.86rem;
  line-height: 1.5;
}

.eligibility-card {
  background: #edf3e4;
  border: 1px solid #d7e4ca;
  border-radius: 18px;
  padding: 1.45rem;
}

.eligibility-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.eligibility-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  color: #264330;
  font-size: 0.9rem;
  line-height: 1.5;
  font-weight: 500;
}

.elig-check {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #1d5133;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.elig-check svg {
  width: 12px;
  height: 12px;
}

/* Sidebar Column */
.sidebar-column {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.sidebar-heading {
  margin: 0 0 0.85rem;
  color: #163e28;
  font-size: 1.08rem;
  font-weight: 800;
}

.service-links-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.service-nav-pill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.68rem 0.95rem;
  border-radius: 12px;
  background: #f8f7f2;
  border: 1px solid #e5e8dd;
  color: #21402f;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.service-nav-pill svg {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  opacity: 0.7;
}

.service-nav-pill:hover {
  background: #eef4e7;
  border-color: #c5d9ba;
}

.service-nav-pill.is-active {
  background: #17442b;
  border-color: #17442b;
  color: #ffffff;
  box-shadow: 0 6px 14px rgba(23, 68, 43, 0.2);
}

.service-nav-pill.is-active svg {
  color: #e6bf73;
  opacity: 1;
}

/* Request Service Card */
.request-card {
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #e3e7db;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(20, 46, 30, 0.08);
}

.request-header {
  position: relative;
  background: linear-gradient(135deg, #164028 0%, #225438 100%);
  color: #ffffff;
  padding: 1.25rem 1.35rem;
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  overflow: hidden;
}

.request-leaf {
  position: absolute;
  right: -12px;
  top: -12px;
  width: 90px;
  height: 90px;
  color: rgba(255, 255, 255, 0.09);
  pointer-events: none;
}

.request-badge {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(214, 168, 95, 0.22);
  color: #efc978;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.request-badge svg {
  width: 19px;
  height: 19px;
}

.request-header h2 {
  margin: 0 0 0.2rem;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 800;
}

.request-header p {
  margin: 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.82rem;
  line-height: 1.45;
}

.request-form {
  padding: 1.2rem 1.35rem 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.form-field label {
  color: #21402f;
  font-size: 0.82rem;
  font-weight: 700;
}

.form-field input,
.form-field textarea {
  width: 100%;
  border: 1px solid #d5dcd0;
  background: #fbfbf8;
  border-radius: 10px;
  padding: 0.62rem 0.8rem;
  font-size: 0.9rem;
  color: #1f2e24;
  font-family: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-color: #1f5335;
  box-shadow: 0 0 0 3px rgba(31, 83, 53, 0.12);
}

.btn-submit-request {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #d8ac55;
  color: #183622;
  border: none;
  border-radius: 9999px;
  padding: 0.78rem 1.25rem;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn-submit-request:hover {
  background: #cfa044;
  transform: translateY(-1px);
}

.btn-submit-request svg {
  width: 16px;
  height: 16px;
}

.request-status {
  margin: 0.25rem 0 0;
  padding: 0.75rem 0.9rem;
  border-radius: 10px;
  background: #eaf4ea;
  border: 1px solid #b8d8bd;
  color: #154229;
  font-size: 0.84rem;
  font-weight: 600;
  line-height: 1.45;
}

/* Direct Help Card */
.help-card {
  background: #eef4e5;
  border: 1px solid #d7e3c8;
  border-radius: 16px;
  padding: 1.25rem 1.35rem;
}

.help-card h3 {
  margin: 0 0 0.35rem;
  color: #163e28;
  font-size: 1.02rem;
  font-weight: 800;
}

.help-card p {
  margin: 0 0 0.95rem;
  color: #495d4e;
  font-size: 0.86rem;
  line-height: 1.5;
}

.help-actions {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.btn-call-desk {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  background: #ffffff;
  border: 1px solid #c9d9bd;
  color: #164028;
  border-radius: 9999px;
  padding: 0.62rem 1rem;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
}

.btn-call-desk svg {
  width: 15px;
  height: 15px;
}

.btn-donate-program {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  background: #17442b;
  color: #ffffff;
  border-radius: 9999px;
  padding: 0.68rem 1rem;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
}

.btn-donate-program svg {
  width: 15px;
  height: 15px;
}

/* Bottom CTA Banner */
.detail-cta-section {
  margin-top: 2rem;
}

.cta-banner {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  min-height: 158px;
  display: flex;
  align-items: center;
}

.cta-bg-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 70% 25%;
}

.cta-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(92deg, rgba(16, 46, 28, 0.96) 0%, rgba(16, 46, 28, 0.9) 55%, rgba(16, 46, 28, 0.72) 100%);
}

.cta-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 1.75rem 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.cta-overline-row {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: #e6bf73;
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
}

.cta-line {
  width: 32px;
  height: 1.5px;
  background: #e6bf73;
}

.cta-copy h2 {
  margin: 0 0 0.25rem;
  color: #ffffff;
  font-size: clamp(1.3rem, 2.2vw, 1.75rem);
  font-weight: 800;
}

.cta-copy p {
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.94rem;
}

.cta-actions {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex-shrink: 0;
}

.btn-cta-gold {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: #d8ac55;
  color: #163723;
  text-decoration: none;
  padding: 0.75rem 1.4rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.92rem;
}

.btn-cta-gold svg {
  width: 15px;
  height: 15px;
}

.btn-cta-outline {
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  border: 1.5px solid rgba(255, 255, 255, 0.65);
  text-decoration: none;
  padding: 0.72rem 1.35rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.92rem;
}

.btn-cta-outline:hover {
  background: rgba(255, 255, 255, 0.12);
}

/* Responsive */
@media (max-width: 1024px) {
  .workspace-grid {
    grid-template-columns: 1fr;
  }

  .guidance-split {
    grid-template-columns: 1fr;
  }

  .cta-content {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 720px) {
  .container {
    padding: 0 1.25rem;
  }

  .stats-strip-card {
    grid-template-columns: 1fr;
  }

  .stat-pill-item + .stat-pill-item {
    border-left: none;
    border-top: 1px solid #e7ebdf;
    padding-top: 0.75rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .overview-photo-wrap {
    height: 210px;
  }

  .cta-actions {
    flex-wrap: wrap;
  }
}
</style>
