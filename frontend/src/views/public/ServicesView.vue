<template>
  <div class="services-view">
    <!-- Hero Banner -->
    <section class="services-hero">
      <div class="hero-background">
        <img src="/images/about-caregiver.jpg" alt="Elderly Care Services" class="hero-image" />
        <div class="hero-overlay"></div>
      </div>

      <svg class="hero-leaf" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
        <path d="M12 12 C45 18, 75 45, 95 95 C45 80, 20 50, 12 12 Z" />
        <path d="M12 12 C45 45, 70 70, 95 95" />
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

            <h1 class="hero-title-am">{{ t('services.heroPrimary') }}</h1>
            <div class="hero-title-en">{{ t('services.heroSecondary') }}</div>
            <p class="hero-subtitle">{{ t('services.subtitle') }}</p>

            <nav class="hero-breadcrumb" aria-label="Breadcrumb">
              <router-link to="/" class="breadcrumb-home">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 3 3 10.5h2.5V20h5v-5.5h3V20h5v-9.5H21L12 3Z" />
                </svg>
                <span>{{ t('common.home') }}</span>
              </router-link>
              <span class="breadcrumb-sep" aria-hidden="true">&gt;</span>
              <span class="breadcrumb-current">{{ t('services.breadcrumbCurrent') }}</span>
            </nav>
          </div>
        </div>
      </div>

      <svg class="hero-wave" viewBox="0 0 1440 44" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,12 Q360,44 720,22 T1440,12 L1440,44 L0,44 Z" fill="#F7F4EB" />
      </svg>
    </section>

    <!-- Main Body -->
    <div class="services-body">
      <section class="services-catalog">
        <div class="container">
          <!-- Centered Section Header -->
          <div class="section-header">
            <div class="header-overline-row">
              <span class="header-line"></span>
              <span class="header-overline">{{ t('services.sectionOverline') }}</span>
              <span class="header-line"></span>
            </div>
            <h2 class="section-title">{{ t('services.sectionTitle') }}</h2>
            <p class="section-subtitle">
              {{ t('services.sectionSubtitle') }}
            </p>
          </div>

          <!-- 6 Horizontal Service Cards (3x2 Grid) -->
          <div class="services-grid">
            <article v-for="service in services" :key="service.key" class="service-card">
              <div class="card-photo">
                <img :src="service.image" :alt="service.title" />
              </div>

              <div class="card-body">
                <div class="card-top">
                  <div class="card-header-row">
                    <div class="card-icon" aria-hidden="true">
                      <!-- Healthcare: Stethoscope -->
                      <svg v-if="service.key === 'healthcare'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
                        <circle cx="20" cy="10" r="2" />
                      </svg>
                      <!-- Food: Fork & Spoon -->
                      <svg v-else-if="service.key === 'food'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                        <path d="M7 2v20" />
                        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                      </svg>
                      <!-- Financial: Hand Holding Heart -->
                      <svg v-else-if="service.key === 'financial'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 12.5c2.2-1.8 4-3.3 4-5a2.3 2.3 0 0 0-4-1.5 2.3 2.3 0 0 0-4 1.5c0 1.7 1.8 3.2 4 5Z" fill="currentColor" />
                        <path d="M3 16h7l3.2-1.8a1.4 1.4 0 0 1 1.6 2.2L10.8 19H3v-3Z" fill="currentColor" />
                      </svg>
                      <!-- Social: Group -->
                      <svg v-else-if="service.key === 'social'" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="7.5" r="2.8" />
                        <circle cx="6" cy="9.5" r="2.2" />
                        <circle cx="18" cy="9.5" r="2.2" />
                        <path d="M7.5 19v-2c0-2 2-3.6 4.5-3.6s4.5 1.6 4.5 3.6v2h-9Zm-5 0v-1.5c0-1.5 1.3-2.7 3-2.7.55 0 1.05.13 1.5.36-.55.75-.9 1.67-.9 2.64V19H2.5Zm16 0v-1.2c0-.97-.35-1.89-.9-2.64.45-.23.95-.36 1.5-.36 1.7 0 3 1.2 3 2.7V19h-3.6Z" />
                      </svg>
                      <!-- Home Visits: House with Heart -->
                      <svg v-else-if="service.key === 'home'" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3 3 10.5h2.5V20h13v-9.5H21L12 3Zm0 13.5c-1.5-1.1-3-2.3-3-3.7A1.8 1.8 0 0 1 12 11.5a1.8 1.8 0 0 1 3 1.3c0 1.4-1.5 2.6-3 3.7Z" />
                      </svg>
                      <!-- Community: Calendar -->
                      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke-width="2.4" />
                      </svg>
                    </div>
                    <h3 class="card-title">{{ service.title }}</h3>
                  </div>
                  <p class="card-description">{{ service.description }}</p>
                </div>

                <router-link :to="service.link" class="learn-more-link">
                  <span>{{ t('common.learnMore') }}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </router-link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Bottom CTA Banner -->
      <section class="services-cta-section">
        <div class="container">
          <div class="cta-banner">
            <img src="/images/hero-banner.png" :alt="t('services.ctaOverline')" class="cta-bg-image" />
            <div class="cta-overlay"></div>

            <svg class="cta-leaf" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
              <path d="M108 12 C75 18, 45 45, 25 95 C75 80, 100 50, 108 12 Z" />
              <path d="M108 12 C75 45, 50 70, 25 95" />
            </svg>

            <div class="cta-grid">
              <div class="cta-left">
                <div class="cta-overline-row">
                  <span class="cta-line"></span>
                  <span class="cta-overline">{{ t('services.ctaOverline') }}</span>
                </div>
                <h2 class="cta-title">
                  {{ t('services.ctaTitleLine1') }}<br />
                  {{ t('services.ctaTitleLine2') }}
                </h2>
                <p class="cta-subtitle">{{ t('services.ctaSubtitle') }}</p>

                <div class="cta-buttons">
                  <router-link to="/donate" class="btn-cta-gold">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span>{{ t('services.ctaDonate') }}</span>
                  </router-link>

                  <router-link to="/get-involved" class="btn-cta-outline">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="7.5" r="2.8" />
                      <circle cx="6" cy="9.5" r="2.2" />
                      <circle cx="18" cy="9.5" r="2.2" />
                      <path d="M7.5 19v-2c0-2 2-3.6 4.5-3.6s4.5 1.6 4.5 3.6v2h-9Zm-5 0v-1.5c0-1.5 1.3-2.7 3-2.7.55 0 1.05.13 1.5.36-.55.75-.9 1.67-.9 2.64V19H2.5Zm16 0v-1.2c0-.97-.35-1.89-.9-2.64.45-.23.95-.36 1.5-.36 1.7 0 3 1.2 3 2.7V19h-3.6Z" />
                    </svg>
                    <span>{{ t('services.ctaVolunteer') }}</span>
                  </router-link>
                </div>
              </div>

              <div class="cta-highlights">
                <div class="highlight-item">
                  <div class="highlight-circle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <span>{{ messages.services.highlights[0] }}</span>
                </div>

                <div class="highlight-item">
                  <div class="highlight-circle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                      <path d="m21 3 1 11h-2" />
                      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                      <path d="M3 4h8" />
                    </svg>
                  </div>
                  <span>{{ messages.services.highlights[1] }}</span>
                </div>

                <div class="highlight-item">
                  <div class="highlight-circle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <span>{{ messages.services.highlights[2] }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t, messages } = useLanguage();

const serviceImages = {
  healthcare: '/images/service-healthcare.jpg',
  food: '/images/service-food.jpg',
  financial: '/images/service-financial.jpg',
  social: '/images/service-social.jpg',
  home: '/images/service-home-visits.jpg',
  community: '/images/home-events-community.png'
};

const services = computed(() =>
  messages.value.services.cards.map((card) => ({
    ...card,
    image: serviceImages[card.key] || serviceImages.community
  }))
);
</script>

<style scoped>
.services-view {
  width: 100%;
  background-color: #f7f4eb;
}

/* Hero Banner */
.services-hero {
  position: relative;
  height: 270px;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right 38%;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(21, 56, 40, 0.96) 0%,
    rgba(21, 56, 40, 0.9) 32%,
    rgba(21, 56, 40, 0.35) 52%,
    rgba(21, 56, 40, 0.04) 72%,
    transparent 100%
  );
}

.hero-leaf {
  position: absolute;
  top: -8px;
  left: -8px;
  width: 110px;
  height: 110px;
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
  top: -30px;
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
  max-width: 560px;
}

.hero-overline-row {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.35rem;
}

.overline-line {
  width: 34px;
  height: 1.5px;
  background-color: var(--gold);
}

.overline-text {
  font-size: 0.85rem;
  font-weight: 600;
  color: #e4ba67;
}

.hero-title-am {
  font-size: clamp(1.75rem, 2.8vw, 2.35rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.15;
}

.hero-title-en {
  font-size: clamp(1.35rem, 2.1vw, 1.85rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.18;
  margin-bottom: 0.35rem;
}

.hero-subtitle {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.9rem;
}

.hero-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background-color: rgba(214, 198, 162, 0.9);
  color: #1a2e22;
  padding: 0.32rem 0.95rem;
  border-radius: 50px;
  font-size: 0.76rem;
  font-weight: 600;
}

.breadcrumb-home {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #1a2e22;
}

.breadcrumb-home:hover {
  text-decoration: underline;
}

.breadcrumb-home svg {
  width: 13px;
  height: 13px;
}

.breadcrumb-sep {
  opacity: 0.65;
}

.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 30px;
  z-index: 3;
  pointer-events: none;
}

/* Body Background */
.services-body {
  background-color: #f7f4eb;
  background-image: radial-gradient(rgba(214, 168, 95, 0.08) 1px, transparent 1px);
  background-size: 28px 28px;
}

.services-catalog {
  padding: 1.5rem 0 1.75rem;
}

.section-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.header-overline-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.2rem;
}

.header-line {
  width: 72px;
  height: 1.5px;
  background-color: var(--gold);
}

.header-overline {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1a2e22;
}

.section-title {
  font-size: clamp(1.35rem, 2vw, 1.7rem);
  font-weight: 800;
  color: #1a2e22;
  margin-bottom: 0.35rem;
}

.section-subtitle {
  font-size: 0.82rem;
  color: #475569;
}

/* 6 Service Cards (3x2 Grid) */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.service-card {
  background-color: var(--white);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(21, 61, 47, 0.06);
  border: 1px solid rgba(36, 75, 58, 0.07);
  display: grid;
  grid-template-columns: 0.92fr 1.28fr;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.service-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(21, 61, 47, 0.12);
  border-color: rgba(214, 168, 95, 0.65);
}

.card-photo {
  min-height: 148px;
  overflow: hidden;
}

.card-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.service-card:hover .card-photo img {
  transform: scale(1.04);
}

.card-body {
  padding: 0.95rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.6rem;
}

.card-header-row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.45rem;
}

.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eaf2e9;
  color: var(--primary-green);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-icon svg {
  width: 20px;
  height: 20px;
}

.card-title {
  font-size: 0.92rem;
  font-weight: 800;
  color: #1a2e22;
  line-height: 1.25;
}

.card-description {
  font-size: 0.75rem;
  color: #475569;
  line-height: 1.45;
}

.learn-more-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  align-self: flex-start;
  color: var(--primary-green);
  font-weight: 700;
  font-size: 0.76rem;
  padding-bottom: 1px;
  border-bottom: 1.5px solid var(--primary-green);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.learn-more-link svg {
  width: 13px;
  height: 13px;
}

.learn-more-link:hover {
  color: #b88732;
  border-bottom-color: #b88732;
}

/* Bottom CTA Banner */
.services-cta-section {
  padding: 0.25rem 0 2.5rem;
}

.cta-banner {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background-color: #163b2a;
  min-height: 215px;
  box-shadow: 0 10px 28px rgba(20, 54, 39, 0.16);
}

.cta-bg-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 22%;
}

.cta-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(21, 56, 40, 0.97) 0%,
    rgba(21, 56, 40, 0.92) 34%,
    rgba(21, 56, 40, 0.38) 58%,
    rgba(21, 56, 40, 0.78) 78%,
    rgba(21, 56, 40, 0.95) 100%
  );
}

.cta-leaf {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 110px;
  height: 110px;
  color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
  z-index: 1;
}

.cta-grid {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.75rem 2.25rem;
  min-height: 215px;
}

.cta-left {
  max-width: 500px;
}

.cta-overline-row {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.45rem;
}

.cta-line {
  width: 30px;
  height: 1.5px;
  background-color: var(--gold);
}

.cta-overline {
  font-size: 0.76rem;
  font-weight: 600;
  color: #e4ba67;
}

.cta-title {
  font-size: clamp(1.2rem, 1.65vw, 1.48rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.25;
  margin-bottom: 0.4rem;
}

.cta-subtitle {
  font-size: 0.84rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.1rem;
}

.cta-buttons {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex-wrap: wrap;
}

.btn-cta-gold {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background-color: var(--gold);
  color: #1a2e22;
  padding: 0.55rem 1.3rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.82rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.22);
}

.btn-cta-gold svg {
  width: 14px;
  height: 14px;
}

.btn-cta-gold:hover {
  background-color: #c89748;
  transform: translateY(-1px);
}

.btn-cta-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background-color: rgba(21, 56, 40, 0.55);
  color: var(--white);
  border: 1.5px solid rgba(255, 255, 255, 0.75);
  padding: 0.52rem 1.3rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.82rem;
}

.btn-cta-outline svg {
  width: 15px;
  height: 15px;
}

.btn-cta-outline:hover {
  background-color: var(--white);
  color: var(--primary-green);
}

.cta-highlights {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--white);
  font-size: 0.84rem;
  font-weight: 600;
}

.highlight-circle {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: var(--white);
  color: var(--primary-green);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.highlight-circle svg {
  width: 17px;
  height: 17px;
}

/* Responsive */
@media (max-width: 1120px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .cta-grid {
    flex-direction: column;
    align-items: flex-start;
  }

  .cta-overlay {
    background: linear-gradient(
      to bottom,
      rgba(21, 56, 40, 0.92) 0%,
      rgba(21, 56, 40, 0.84) 100%
    );
  }
}

@media (max-width: 720px) {
  .services-hero {
    height: auto;
    min-height: 250px;
    padding: 2.5rem 0 3.25rem;
  }

  .hero-overlay {
    background: linear-gradient(
      to bottom,
      rgba(21, 56, 40, 0.9) 0%,
      rgba(21, 56, 40, 0.76) 100%
    );
  }

  .hero-arc {
    display: none;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .service-card {
    grid-template-columns: 1fr;
  }

  .card-photo {
    height: 170px;
  }

  .cta-grid {
    padding: 1.5rem 1.25rem;
  }
}
</style>
