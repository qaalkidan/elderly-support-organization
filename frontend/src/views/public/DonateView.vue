<template>
  <div class="donate-view">
    <!-- Hero Banner -->
    <section class="donate-hero">
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
              <span class="overline-label">{{ t('donate.overline') }}</span>
              <span class="overline-line"></span>
            </div>
            <h1 class="hero-amharic">{{ t('donate.heroPrimary') }}</h1>
            <h2 class="hero-title">{{ t('donate.heroSecondary') }}</h2>
            <p class="hero-subtitle">
              {{ t('donate.subtitle') }}
            </p>
            <nav class="breadcrumb-pill" aria-label="Breadcrumb">
              <router-link to="/" class="breadcrumb-home">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span>{{ t('common.home') }}</span>
              </router-link>
              <span class="breadcrumb-sep" aria-hidden="true">&gt;</span>
              <span class="breadcrumb-current">{{ t('donate.breadcrumbCurrent') }}</span>
            </nav>
          </div>
        </div>
      </div>

      <svg class="hero-wave" viewBox="0 0 1440 54" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,18 Q360,56 720,28 T1440,16 L1440,54 L0,54 Z" fill="#f7f4eb" />
      </svg>
    </section>

    <!-- Main Donation Workspace -->
    <div class="donate-main">
      <section class="donate-workspace-section">
        <div class="container">
          <div class="donate-grid">
            <!-- Left Column: Hope Story + Ways to Donate -->
            <div class="left-column">
              <!-- Your Support Creates Hope Card -->
              <article class="hope-card">
                <div class="hope-copy">
                  <div class="hope-title-row">
                    <span class="hope-heart" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </span>
                    <h2>{{ t('donate.hopeHeading') }}</h2>
                  </div>

                  <p class="hope-desc">
                    {{ t('donate.hopeDesc') }}
                  </p>

                  <div class="hope-stats">
                    <div
                      v-for="(stat, idx) in messages.donate.hopeStats"
                      :key="stat.label"
                      class="hope-stat"
                    >
                      <span class="stat-mini-icon" aria-hidden="true">
                        <svg v-if="idx === 0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                        </svg>
                        <svg v-else-if="idx === 1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                          <path d="m21 3 1 11h-2" />
                          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                          <path d="M3 4h8" />
                        </svg>
                      </span>
                      <div>
                        <strong>{{ stat.value }}</strong>
                        <span>{{ stat.label }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="hope-media">
                  <img
                    src="/images/service-social.jpg"
                    alt="Warm caregiver holding an elder's hands in care"
                  />
                  <div class="hope-media-fade" aria-hidden="true"></div>
                  <div class="hope-gold-arc" aria-hidden="true"></div>
                </div>
              </article>

              <!-- Ways to Donate Section -->
              <div class="ways-block">
                <div class="ways-heading">
                  <span class="ways-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                  </span>
                  <h2>{{ t('donate.waysHeading') }}</h2>
                </div>

                <div class="ways-grid">
                  <article v-for="way in paymentWays" :key="way.key" class="way-card">
                    <div class="way-badge" :class="`way-badge-${way.key}`" aria-hidden="true">
                      <svg v-if="way.key === 'online'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <line x1="2" y1="10" x2="22" y2="10" />
                        <line x1="6" y1="15" x2="10" y2="15" />
                      </svg>
                      <svg v-else-if="way.key === 'bank'" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7v2h20V7L12 2zm-8 9v7H2v2h20v-2h-2v-7h-2v7h-3v-7h-2v7h-2v-7H9v7H6v-7H4z" />
                      </svg>
                      <svg v-else-if="way.key === 'telebirr'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="6" y="3" width="12" height="18" rx="2.5" />
                        <circle cx="12" cy="17.5" r="0.9" fill="currentColor" stroke="none" />
                        <path d="M9.5 8.5c1.5-1.2 3.5-1.2 5 0" />
                      </svg>
                      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="6" y="2" width="12" height="20" rx="2.5" />
                        <line x1="10" y1="18" x2="14" y2="18" />
                      </svg>
                    </div>

                    <h3 class="way-title">{{ way.title }}</h3>
                    <p class="way-desc">{{ way.description }}</p>

                    <button type="button" class="way-btn" @click="selectPaymentWay(way)">
                      <span>{{ way.actionLabel }}</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </article>
                </div>
              </div>
            </div>

            <!-- Right Column: Interactive Make a Donation Card -->
            <aside class="right-column">
              <div class="donation-card">
                <div class="donation-card-header">
                  <svg class="header-leaf" viewBox="0 0 110 110" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">
                    <path d="M98 12 C68 20, 42 44, 18 96 C62 78, 86 50, 98 12 Z" />
                    <path d="M98 12 C66 44, 42 68, 18 96" />
                  </svg>

                  <div class="header-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>

                  <div>
                    <h2>{{ t('donate.cardTitle') }}</h2>
                    <p>{{ t('donate.cardSubtitle') }}</p>
                  </div>

                  <svg class="header-curve" viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,10 Q200,26 400,6 L400,24 L0,24 Z" fill="#ffffff" />
                  </svg>
                </div>

                <form class="donation-card-body" @submit.prevent="openDonationModal">
                  <!-- Frequency Toggle -->
                  <div class="frequency-toggle" role="tablist" aria-label="Donation frequency">
                    <button
                      type="button"
                      role="tab"
                      :aria-selected="frequency === 'one-time'"
                      class="freq-pill"
                      :class="{ 'is-active': frequency === 'one-time' }"
                      @click="frequency = 'one-time'"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20 7h-2.18A3 3 0 0 0 12 4.28 3 3 0 0 0 6.18 7H4a2 2 0 0 0-2 2v2h9v-2h2v2h9V9a2 2 0 0 0-2-2zM9 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM3 13v7a2 2 0 0 0 2 2h6v-9H3zm10 0v9h6a2 2 0 0 0 2-2v-7h-8z" />
                      </svg>
                      <span>{{ t('donate.freqOneTime') }}</span>
                    </button>

                    <button
                      type="button"
                      role="tab"
                      :aria-selected="frequency === 'monthly'"
                      class="freq-pill"
                      :class="{ 'is-active': frequency === 'monthly' }"
                      @click="frequency = 'monthly'"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{{ t('donate.freqMonthly') }}</span>
                    </button>
                  </div>

                  <div class="field-heading">{{ t('donate.selectAmount') }}</div>

                  <!-- 3x2 Amount Presets -->
                  <div class="amount-grid">
                    <button
                      v-for="preset in amountPresets"
                      :key="preset.usd"
                      type="button"
                      class="amount-tile"
                      :class="{ 'is-selected': !isCustomMode && selectedUsd === preset.usd }"
                      @click="choosePreset(preset.usd)"
                    >
                      <span
                        v-if="!isCustomMode && selectedUsd === preset.usd"
                        class="selected-check"
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <strong>${{ preset.usd }}</strong>
                      <span>&approx; {{ preset.etb.toLocaleString() }} ETB</span>
                    </button>

                    <button
                      type="button"
                      class="amount-tile other-tile"
                      :class="{ 'is-selected': isCustomMode }"
                      @click="enableCustomAmount"
                    >
                      <span
                        v-if="isCustomMode"
                        class="selected-check"
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span class="other-label">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                        </svg>
                        <span>{{ t('donate.otherAmount') }}</span>
                      </span>
                    </button>
                  </div>

                  <div class="custom-group">
                    <label for="custom-etb-amount" class="field-heading">{{ t('donate.customAmountLabel') }}</label>
                    <input
                      id="custom-etb-amount"
                      ref="customInputRef"
                      v-model="customEtb"
                      type="number"
                      min="50"
                      step="10"
                      :placeholder="t('donate.customAmountPlaceholder')"
                      @input="onCustomInput"
                    />
                  </div>

                  <button type="submit" class="btn-donate-submit">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span>{{ t('donate.submitBtn') }}</span>
                  </button>

                  <p class="security-note">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18 8h-1V6a5 5 0 0 0-10 0v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-6 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-9H8.9V6a3.1 3.1 0 1 1 6.2 0v2z" />
                    </svg>
                    <span>{{ t('donate.securityNote') }}</span>
                  </p>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <!-- Bottom Mission CTA Banner -->
      <section class="donate-cta-section">
        <div class="container">
          <div class="cta-banner">
            <div class="cta-photo">
              <img src="/images/hero-banner.png" alt="Elderly community members smiling together" />
              <div class="cta-photo-fade"></div>
            </div>

            <svg class="cta-leaf-right" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
              <path d="M110 10 C85 45, 55 75, 10 95 C30 50, 65 25, 110 10 Z" />
              <path d="M110 10 C75 45, 45 70, 10 95" />
            </svg>

            <div class="cta-content">
              <div class="cta-copy-block">
                <div class="cta-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                    <path d="m18 15-2-2" />
                    <path d="m15 18-2-2" />
                  </svg>
                </div>

                <div>
                  <div class="cta-overline">
                    <span>{{ t('donate.ctaOverline') }}</span>
                    <span class="cta-overline-line"></span>
                  </div>
                  <h2 class="cta-title">{{ t('donate.ctaTitle') }}</h2>
                  <p class="cta-subtitle">{{ t('donate.ctaSubtitle') }}</p>
                </div>
              </div>

              <router-link to="/get-involved" class="btn-mission">
                <span>{{ t('donate.ctaBtn') }}</span>
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

    <!-- Payment Details / Confirmation Modal -->
    <div
      v-if="modalState"
      class="modal-backdrop"
      role="dialog"
      aria-modal="true"
      :aria-label="modalState.title"
      @click.self="closeModal"
    >
      <div class="modal-card">
        <button type="button" class="modal-close" :aria-label="t('common.close')" @click="closeModal">&times;</button>
        <span class="modal-tag">{{ modalState.eyebrow }}</span>
        <h3 class="modal-title">{{ modalState.title }}</h3>
        <p class="modal-subtitle">{{ modalState.summary }}</p>

        <div class="modal-details-list">
          <div v-for="detail in modalState.details" :key="detail.label" class="detail-row">
            <span>{{ detail.label }}</span>
            <strong>{{ detail.value }}</strong>
          </div>
        </div>

        <p v-if="pledgeConfirmed" class="pledge-status" role="status">
          {{ pledgeConfirmed }}
        </p>

        <div class="modal-actions">
          <button
            v-if="!pledgeConfirmed"
            type="button"
            class="modal-primary-btn"
            @click="confirmPledge"
          >
            {{ t('donate.modalConfirmBtn', { amount: displayAmountLabel }) }}
          </button>
          <button type="button" class="modal-secondary-btn" @click="closeModal">
            {{ t('common.close') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t, messages, isAmharic } = useLanguage();

const frequency = ref('one-time');
const selectedUsd = ref(25);
const isCustomMode = ref(false);
const customEtb = ref('');
const customInputRef = ref(null);
const modalMode = ref(null);
const selectedWayKey = ref('online');
const pledgeConfirmed = ref('');

const amountPresets = [
  { usd: 10, etb: 560 },
  { usd: 25, etb: 1400 },
  { usd: 50, etb: 2800 },
  { usd: 100, etb: 5600 },
  { usd: 200, etb: 11200 }
];

const paymentWays = computed(() => messages.value.donate.ways);

const selectedChannelLabel = computed(
  () => paymentWays.value.find((w) => w.key === selectedWayKey.value)?.title || paymentWays.value[0]?.title || ''
);

const frequencyLabel = computed(() =>
  frequency.value === 'monthly' ? t('donate.freqMonthly') : t('donate.freqOneTime')
);

const displayAmountLabel = computed(() => {
  if (isCustomMode.value && customEtb.value) {
    return `${Number(customEtb.value).toLocaleString()} ETB`;
  }
  const match = amountPresets.find((p) => p.usd === selectedUsd.value);
  return match ? `$${match.usd} (${match.etb.toLocaleString()} ETB)` : `$${selectedUsd.value}`;
});

const modalState = computed(() => {
  if (!modalMode.value) return null;
  if (modalMode.value === 'way') {
    const way = paymentWays.value.find((w) => w.key === selectedWayKey.value) || paymentWays.value[0];
    return {
      eyebrow: way.eyebrow,
      title: way.title,
      summary: `${way.description} (${frequencyLabel.value} — ${displayAmountLabel.value})`,
      details: way.details
    };
  }
  return {
    eyebrow: t('donate.modalEyebrow'),
    title: `${frequencyLabel.value} — ${displayAmountLabel.value}`,
    summary: isAmharic.value
      ? `የተመረጠው የክፍያ መንገድ፦ ${selectedChannelLabel.value}። ለማረጋገጥ ዝርዝሩን ይመልከቱ።`
      : `Selected payment method: ${selectedChannelLabel.value}. Review your gift details below to confirm.`,
    details: [
      { label: isAmharic.value ? 'ድግግሞሽ' : 'Frequency', value: frequencyLabel.value },
      { label: isAmharic.value ? 'መጠን' : 'Contribution', value: displayAmountLabel.value },
      { label: isAmharic.value ? 'መንገድ' : 'Channel', value: selectedChannelLabel.value },
      {
        label: isAmharic.value ? 'ተጠቃሚ' : 'Beneficiary',
        value: isAmharic.value ? t('common.orgNameAm') : t('common.orgNameEn')
      }
    ]
  };
});

const choosePreset = (usd) => {
  isCustomMode.value = false;
  selectedUsd.value = usd;
  customEtb.value = '';
};

const enableCustomAmount = async () => {
  isCustomMode.value = true;
  await nextTick();
  customInputRef.value?.focus();
};

const onCustomInput = () => {
  if (customEtb.value) {
    isCustomMode.value = true;
  }
};

const openDonationModal = () => {
  pledgeConfirmed.value = '';
  modalMode.value = 'gift';
};

const selectPaymentWay = (way) => {
  pledgeConfirmed.value = '';
  selectedWayKey.value = way.key;
  modalMode.value = 'way';
};

const confirmPledge = () => {
  pledgeConfirmed.value = t('donate.pledgeSuccess', {
    frequency: frequencyLabel.value,
    amount: displayAmountLabel.value,
    channel: selectedChannelLabel.value
  });
};

const closeModal = () => {
  modalMode.value = null;
  pledgeConfirmed.value = '';
};

const handleKeydown = (e) => {
  if (e.key === 'Escape' && modalMode.value) closeModal();
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown));
</script>

<style scoped>
.donate-view {
  width: 100%;
  background-color: #f7f4eb;
}

/* Hero Banner */
.donate-hero {
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

/* Main Workspace */
.donate-main {
  padding: 1.4rem 0 2.4rem;
}

.donate-workspace-section {
  margin-bottom: 1.45rem;
}

.donate-grid {
  display: grid;
  grid-template-columns: 1.48fr 1fr;
  gap: 1.4rem;
  align-items: start;
}

/* Hope Story Card */
.hope-card {
  position: relative;
  background-color: #fdfbf6;
  border: 1px solid #ede6d6;
  border-radius: 16px;
  box-shadow: 0 6px 22px rgba(21, 61, 47, 0.05);
  overflow: hidden;
  display: grid;
  grid-template-columns: 56% 44%;
  min-height: 222px;
  margin-bottom: 1.35rem;
}

.hope-copy {
  padding: 1.25rem 0.5rem 1.15rem 1.35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.hope-title-row {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.4rem;
}

.hope-heart {
  color: #164431;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.hope-heart svg {
  width: 22px;
  height: 22px;
}

.hope-title-row h2 {
  color: #164431;
  font-size: 1.26rem;
  font-weight: 800;
  line-height: 1.18;
}

.hope-desc {
  color: #3f4a45;
  font-size: 0.81rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  max-width: 390px;
}

.hope-stats {
  display: grid;
  grid-template-columns: 1.45fr 1fr 0.9fr;
  padding-top: 0.5rem;
}

.hope-stat {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding-right: 0.65rem;
  position: relative;
}

.hope-stat:not(:first-child) {
  padding-left: 0.75rem;
}

.hope-stat:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 12%;
  bottom: 12%;
  width: 1px;
  background-color: #dfd6c3;
}

.stat-mini-icon {
  color: #1a4b35;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-mini-icon svg {
  width: 24px;
  height: 24px;
}

.hope-stat strong {
  display: block;
  color: #153c2a;
  font-size: 1.05rem;
  font-weight: 800;
  line-height: 1.05;
}

.hope-stat span {
  display: block;
  color: #4b5563;
  font-size: 0.69rem;
  font-weight: 600;
  margin-top: 0.1rem;
}

.hope-media {
  position: relative;
  height: 100%;
  min-height: 222px;
  overflow: hidden;
}

.hope-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 36%;
  display: block;
}

.hope-media-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    #fdfbf6 0%,
    rgba(253, 251, 246, 0.78) 24%,
    rgba(253, 251, 246, 0.25) 48%,
    transparent 74%
  );
  pointer-events: none;
}

.hope-gold-arc {
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 1.5px solid rgba(215, 171, 89, 0.38);
  left: -35px;
  top: 6px;
  pointer-events: none;
}

/* Ways to Donate */
.ways-heading {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.85rem;
}

.ways-icon {
  color: #164431;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ways-icon svg {
  width: 20px;
  height: 20px;
}

.ways-heading h2 {
  color: #164431;
  font-size: 1.18rem;
  font-weight: 800;
}

.ways-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.85rem;
}

.way-card {
  background-color: #fdfbf6;
  border: 1px solid #ede6d6;
  border-radius: 14px;
  padding: 1.15rem 0.85rem 1.05rem;
  text-align: center;
  box-shadow: 0 4px 14px rgba(21, 61, 47, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.way-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(21, 61, 47, 0.08);
}

.way-badge {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #1b4b36;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.72rem;
}

.way-badge-telebirr {
  background: linear-gradient(135deg, #21573e 0%, #6ea838 100%);
  box-shadow: 0 3px 10px rgba(33, 87, 62, 0.25);
}

.way-badge svg {
  width: 22px;
  height: 22px;
}

.way-title {
  color: #164431;
  font-size: 0.94rem;
  font-weight: 800;
  margin-bottom: 0.35rem;
}

.way-desc {
  color: #4b5563;
  font-size: 0.74rem;
  line-height: 1.42;
  margin-bottom: 0.85rem;
  flex: 1;
}

.way-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.38rem;
  width: 100%;
  background-color: #194733;
  color: var(--white);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.5rem 0.8rem;
  border-radius: var(--radius-pill);
  transition: background-color 0.2s ease;
}

.way-btn:hover {
  background-color: #123626;
}

.way-btn svg {
  width: 13px;
  height: 13px;
}

/* Right Column: Make a Donation Card */
.donation-card {
  background-color: var(--white);
  border: 1px solid #e6decb;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 26px rgba(21, 61, 47, 0.08);
}

.donation-card-header {
  position: relative;
  background: linear-gradient(125deg, #1b4935 0%, #153c2a 100%);
  padding: 1.15rem 1.35rem 1.65rem;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  overflow: hidden;
}

.header-leaf {
  position: absolute;
  right: -10px;
  bottom: 4px;
  width: 96px;
  height: 96px;
  color: rgba(255, 255, 255, 0.08);
  pointer-events: none;
}

.header-badge {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background-color: #e6b756;
  color: #163b2b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.header-badge svg {
  width: 22px;
  height: 22px;
}

.donation-card-header h2 {
  color: var(--white);
  font-size: 1.24rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 0.15rem;
  position: relative;
  z-index: 1;
}

.donation-card-header p {
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.77rem;
  position: relative;
  z-index: 1;
}

.header-curve {
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 18px;
  pointer-events: none;
}

.donation-card-body {
  padding: 0.9rem 1.3rem 1.3rem;
}

/* Frequency Pills */
.frequency-toggle {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.freq-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.42rem;
  padding: 0.56rem 0.75rem;
  border-radius: var(--radius-pill);
  font-size: 0.78rem;
  font-weight: 700;
  background-color: #f8f6ef;
  border: 1px solid #e2dac8;
  color: #1f2937;
  transition: all 0.2s ease;
}

.freq-pill.is-active {
  background-color: #194733;
  border-color: #194733;
  color: var(--white);
  box-shadow: 0 3px 10px rgba(25, 71, 51, 0.18);
}

.freq-pill svg {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

.field-heading {
  display: block;
  color: #164431;
  font-size: 0.82rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

/* Preset Grid */
.amount-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
  margin-bottom: 0.95rem;
}

.amount-tile {
  position: relative;
  border: 1px solid #e6e0d2;
  border-radius: 10px;
  background-color: #fcfbf8;
  padding: 0.65rem 0.45rem;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.15rem;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.amount-tile:hover {
  border-color: #93b3a2;
}

.amount-tile.is-selected {
  background-color: #e6f0e9;
  border: 1.5px solid #1b4b36;
}

.amount-tile .selected-check {
  position: absolute;
  top: -7px;
  right: -7px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: #1b4b36;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.selected-check svg {
  width: 11px;
  height: 11px;
}

.amount-tile strong {
  color: #153c2a;
  font-size: 0.95rem;
  font-weight: 800;
}

.amount-tile > span:not(.selected-check) {
  color: #4b5563;
  font-size: 0.69rem;
  font-weight: 600;
}

.other-label {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #164431 !important;
  font-size: 0.76rem !important;
  font-weight: 700 !important;
}

.other-label svg {
  width: 13px;
  height: 13px;
}

.custom-group {
  margin-bottom: 0.95rem;
}

.custom-group input {
  width: 100%;
  height: 41px;
  border: 1px solid #dde3da;
  border-radius: 9px;
  padding: 0 0.85rem;
  font-size: 0.82rem;
  color: #1f2937;
  background-color: var(--white);
  outline: none;
}

.custom-group input:focus {
  border-color: #1b4b36;
}

.btn-donate-submit {
  width: 100%;
  height: 44px;
  background-color: #e8b85b;
  color: #163b2b;
  border-radius: var(--radius-pill);
  font-size: 0.88rem;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(232, 184, 91, 0.35);
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn-donate-submit:hover {
  background-color: #dca53d;
  transform: translateY(-1px);
}

.btn-donate-submit svg {
  width: 16px;
  height: 16px;
}

.security-note {
  margin-top: 0.72rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  color: #4b5563;
  font-size: 0.72rem;
  font-weight: 600;
}

.security-note svg {
  width: 13px;
  height: 13px;
  color: #1b4b36;
}

/* Bottom CTA Banner */
.cta-banner {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(95deg, #184231 0%, #153829 65%, #1d4e3a 100%);
  padding: 1.3rem 2rem;
  box-shadow: 0 8px 26px rgba(21, 56, 40, 0.14);
}

.cta-photo {
  position: absolute;
  top: 0;
  left: 0;
  width: 28%;
  height: 100%;
  pointer-events: none;
}

.cta-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  display: block;
}

.cta-photo-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(24, 66, 49, 0.45) 64%,
    #184231 100%
  );
}

.cta-leaf-right {
  position: absolute;
  right: -12px;
  bottom: -14px;
  width: 120px;
  height: 120px;
  color: rgba(255, 255, 255, 0.08);
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding-left: 25%;
}

.cta-copy-block {
  display: flex;
  align-items: center;
  gap: 1.1rem;
}

.cta-icon {
  width: 46px;
  height: 46px;
  color: #e4ba67;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cta-icon svg {
  width: 40px;
  height: 40px;
}

.cta-overline {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: #e4ba67;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.cta-overline-line {
  width: 48px;
  height: 1px;
  background-color: rgba(228, 186, 103, 0.6);
}

.cta-title {
  color: var(--white);
  font-size: 1.24rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.18rem;
}

.cta-subtitle {
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.8rem;
}

.btn-mission {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background-color: #e8b85b;
  color: #163b2b;
  font-size: 0.84rem;
  font-weight: 800;
  padding: 0.72rem 1.4rem;
  border-radius: var(--radius-pill);
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn-mission:hover {
  background-color: #dba53e;
  transform: translateY(-1px);
}

.btn-mission svg {
  width: 15px;
  height: 15px;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(15, 35, 26, 0.66);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-card {
  position: relative;
  width: 100%;
  max-width: 460px;
  background-color: #fdfbf6;
  border-radius: 16px;
  padding: 1.6rem 1.7rem;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
}

.modal-close {
  position: absolute;
  top: 0.85rem;
  right: 0.95rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #efe8d8;
  color: #153c2a;
  font-size: 1.3rem;
  line-height: 1;
}

.modal-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #b78529;
  margin-bottom: 0.25rem;
}

.modal-title {
  color: #153c2a;
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: 0.3rem;
}

.modal-subtitle {
  color: #4b5563;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  line-height: 1.45;
}

.modal-details-list {
  background-color: var(--white);
  border: 1px solid #e6decb;
  border-radius: 10px;
  padding: 0.6rem 0.9rem;
  margin-bottom: 1rem;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  gap: 0.85rem;
  padding: 0.45rem 0;
  font-size: 0.79rem;
}

.detail-row:not(:last-child) {
  border-bottom: 1px solid #f1ece0;
}

.detail-row span {
  color: #4b5563;
}

.detail-row strong {
  color: #153c2a;
  text-align: right;
}

.pledge-status {
  background-color: #e4f0e7;
  color: #153c2a;
  border-radius: 8px;
  padding: 0.7rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.modal-actions {
  display: flex;
  gap: 0.65rem;
  justify-content: flex-end;
}

.modal-primary-btn {
  background-color: #1b4b36;
  color: var(--white);
  padding: 0.62rem 1.2rem;
  border-radius: var(--radius-pill);
  font-size: 0.8rem;
  font-weight: 700;
}

.modal-secondary-btn {
  background-color: #eae3d2;
  color: #153c2a;
  padding: 0.62rem 1.15rem;
  border-radius: var(--radius-pill);
  font-size: 0.8rem;
  font-weight: 700;
}

/* Responsive */
@media (max-width: 1120px) {
  .donate-grid {
    grid-template-columns: 1fr;
  }

  .ways-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-content {
    padding-left: 22%;
  }
}

@media (max-width: 768px) {
  .donate-hero {
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

  .hope-card {
    grid-template-columns: 1fr;
  }

  .hope-copy {
    padding: 1.15rem;
  }

  .hope-stats {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .hope-stat:not(:first-child) {
    padding-left: 0;
  }

  .hope-stat:not(:last-child)::after {
    display: none;
  }

  .hope-media {
    min-height: 185px;
    height: 185px;
  }

  .hope-media-fade {
    background: linear-gradient(
      180deg,
      #fdfbf6 0%,
      rgba(253, 251, 246, 0.5) 35%,
      transparent 75%
    );
  }

  .ways-grid {
    grid-template-columns: 1fr;
  }

  .amount-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-banner {
    padding: 1.35rem 1.25rem;
  }

  .cta-photo {
    display: none;
  }

  .cta-content {
    padding-left: 0;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
