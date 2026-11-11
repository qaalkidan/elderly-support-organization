<template>
  <div class="get-involved-view">
    <!-- Hero Banner -->
    <section class="involved-hero">
      <div class="hero-background">
        <img
          src="/images/about-caregiver.jpg"
          alt="Volunteer smiling warmly with an elderly woman"
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
              <span class="overline-label">Get Involved</span>
              <span class="overline-line"></span>
            </div>
            <h1 class="hero-amharic">ተሳትፎ ያድርጉ</h1>
            <h2 class="hero-title">Get Involved</h2>
            <p class="hero-subtitle">
              Together, we can make a difference in the lives of elderly people.
            </p>
            <nav class="breadcrumb-pill" aria-label="Breadcrumb">
              <router-link to="/" class="breadcrumb-home">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span>Home</span>
              </router-link>
              <span class="breadcrumb-sep" aria-hidden="true">&gt;</span>
              <span class="breadcrumb-current">Get Involved</span>
            </nav>
          </div>
        </div>
      </div>

      <svg class="hero-wave" viewBox="0 0 1440 54" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,18 Q360,56 720,28 T1440,16 L1440,54 L0,54 Z" fill="#f7f4eb" />
      </svg>
    </section>

    <!-- Main Content -->
    <div class="involved-main">
      <!-- Top 4 Action Cards -->
      <section class="options-section">
        <div class="container">
          <div class="options-grid">
            <article v-for="option in involvementOptions" :key="option.key" class="option-card">
              <div class="option-badge" :class="`badge-${option.tone}`" aria-hidden="true">
                <svg v-if="option.key === 'volunteer'" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                <svg v-else-if="option.key === 'donate'" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.5 11.2c1.65-1.5 3.5-2.85 3.5-4.7 0-1.65-1.35-3-3-3-1 0-1.92.5-2.5 1.25-.58-.75-1.5-1.25-2.5-1.25-1.65 0-3 1.35-3 3 0 1.85 1.85 3.2 3.5 4.7l2 1.8 2-1.8zM20 15h-5.2c-.4-.78-1.18-1.3-2.1-1.3H9l-4.5-1.5L3 13.7v5.8l7.3 2.1c.6.18 1.24.16 1.82-.06L21 18.2c.65-.25 1-1.02.75-1.67-.2-.56-.73-1.53-1.75-1.53z" />
                </svg>
                <svg v-else-if="option.key === 'partner'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.5 3.6c-.45-.22-.98-.17-1.38.14L11.5 8.5H6a3 3 0 0 0-3 3v1a3 3 0 0 0 2 2.82V19a1.5 1.5 0 0 0 3 0v-3.5h3.5l6.62 4.76c.4.29.93.34 1.38.14.45-.21.75-.66.75-1.16V4.76c0-.5-.3-.95-.75-1.16zM21.5 10.5a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1z" />
                </svg>
              </div>

              <div class="option-body">
                <h3 class="option-title">{{ option.title }}</h3>
                <p class="option-desc">{{ option.description }}</p>

                <router-link v-if="option.to" :to="option.to" class="option-link">
                  <span>{{ option.actionLabel }}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </router-link>
                <button v-else type="button" class="option-link" @click="openActionModal(option.modalType)">
                  <span>{{ option.actionLabel }}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Two Spotlight Feature Cards -->
      <section class="features-section">
        <div class="container">
          <div class="features-grid">
            <!-- Left Feature Card: Volunteer With Us -->
            <article class="feature-card feature-card-white">
              <div class="feature-media-inset">
                <img
                  src="/images/service-social.jpg"
                  alt="Caregiver talking warmly with an elderly community member"
                />
              </div>

              <div class="feature-content">
                <div class="feature-eyebrow">
                  <span class="eyebrow-line"></span>
                  <span>Volunteer With Us</span>
                </div>
                <h3 class="feature-heading">Make an Impact</h3>
                <p class="feature-desc">
                  Your time and skills can bring hope and happiness to the elderly in our community.
                </p>

                <ul class="feature-bullets">
                  <li v-for="point in volunteerBenefits" :key="point">
                    <span class="check-badge" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{{ point }}</span>
                  </li>
                </ul>

                <button type="button" class="btn-green-pill" @click="openActionModal('volunteer')">
                  <span>Become a Volunteer</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </article>

            <!-- Right Feature Card: Donate Today -->
            <article class="feature-card feature-card-sage">
              <div class="feature-media-blend">
                <img
                  src="/images/service-home-visits.jpg"
                  alt="Volunteer holding the hands of an elderly resident with care"
                />
                <div class="media-blend-mask" aria-hidden="true"></div>
              </div>

              <div class="feature-content">
                <div class="feature-eyebrow">
                  <span class="eyebrow-line"></span>
                  <span>Donate Today</span>
                </div>
                <h3 class="feature-heading">Give Hope</h3>
                <p class="feature-desc">
                  Your donation helps us provide essential support, healthcare, and care for the elderly.
                </p>

                <ul class="feature-bullets">
                  <li v-for="point in donationBenefits" :key="point">
                    <span class="check-badge" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{{ point }}</span>
                  </li>
                </ul>

                <router-link to="/donate" class="btn-gold-pill">
                  <span>Donate Now</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </router-link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Impact Stats Strip -->
      <section class="stats-section">
        <div class="container">
          <div class="stats-bar">
            <div v-for="(stat, idx) in impactStats" :key="stat.label" class="stat-item">
              <div class="stat-icon" aria-hidden="true">
                <svg v-if="idx === 0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                <svg v-else-if="idx === 1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <svg v-else-if="idx === 2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="m9 15 2 2 4-4" />
                </svg>
              </div>
              <div class="stat-text">
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom CTA Banner -->
      <section class="involved-cta-section">
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
                <div>
                  <h2 class="cta-title">Together for a Dignified Life</h2>
                  <p class="cta-subtitle">Let's build a caring and supportive community for our elderly.</p>
                </div>
              </div>

              <button type="button" class="btn-cta-gold" @click="openActionModal('volunteer')">
                <span>Get Involved Today</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Interactive Volunteer / Partner Modal -->
    <div
      v-if="activeModal"
      class="modal-backdrop"
      role="dialog"
      aria-modal="true"
      :aria-label="modalConfig.heading"
      @click.self="closeModal"
    >
      <div class="modal-card">
        <button type="button" class="modal-close" aria-label="Close modal" @click="closeModal">&times;</button>
        <span class="modal-tag">{{ modalConfig.eyebrow }}</span>
        <h3 class="modal-title">{{ modalConfig.heading }}</h3>
        <p class="modal-subtitle">{{ modalConfig.subtitle }}</p>

        <form v-if="!submittedMessage" class="modal-form" @submit.prevent="submitForm">
          <div class="form-row">
            <label for="involved-name">Full Name</label>
            <input id="involved-name" v-model.trim="form.name" type="text" required placeholder="Abebe Bikila" />
          </div>
          <div class="form-row">
            <label for="involved-email">Email Address</label>
            <input id="involved-email" v-model.trim="form.email" type="email" required placeholder="name@example.com" />
          </div>
          <div class="form-row">
            <label for="involved-phone">Phone Number</label>
            <input id="involved-phone" v-model.trim="form.phone" type="tel" required placeholder="+251 91 234 5678" />
          </div>
          <div class="form-row">
            <label for="involved-notes">How would you like to help?</label>
            <textarea
              id="involved-notes"
              v-model.trim="form.notes"
              rows="3"
              placeholder="Share your availability, area of interest, or partnership proposal..."
            ></textarea>
          </div>
          <button type="submit" class="modal-submit">{{ modalConfig.submitLabel }}</button>
        </form>

        <div v-else class="modal-success" role="status">
          <p>{{ submittedMessage }}</p>
          <button type="button" class="modal-submit" @click="closeModal">Done</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const activeModal = ref(null);
const submittedMessage = ref('');
const form = reactive({
  name: '',
  email: '',
  phone: '',
  notes: ''
});

const involvementOptions = [
  {
    key: 'volunteer',
    tone: 'green',
    title: 'Volunteer',
    description: 'Share your time and skills to help our elderly community.',
    actionLabel: 'Join as Volunteer',
    modalType: 'volunteer'
  },
  {
    key: 'donate',
    tone: 'gold',
    title: 'Donate',
    description: 'Support our mission through generous donations.',
    actionLabel: 'Donate Now',
    to: '/donate'
  },
  {
    key: 'partner',
    tone: 'green',
    title: 'Partner With Us',
    description: 'Collaborate with us to create greater impact.',
    actionLabel: 'Become a Partner',
    modalType: 'partner'
  },
  {
    key: 'cause',
    tone: 'gold',
    title: 'Support Our Cause',
    description: 'Spread awareness and help us reach more people.',
    actionLabel: 'Get Involved',
    modalType: 'cause'
  }
];

const volunteerBenefits = [
  'Flexible opportunities',
  'Meaningful work',
  'A supportive community'
];

const donationBenefits = [
  'Secure and easy donation',
  'Multiple payment options',
  'Transparent use of funds'
];

const impactStats = [
  { value: '2,500+', label: 'Elderly People Supported' },
  { value: '800+', label: 'Volunteers' },
  { value: '300+', label: 'Donors & Supporters' },
  { value: '5+', label: 'Years of Service' }
];

const modalConfig = computed(() => {
  if (activeModal.value === 'partner') {
    return {
      eyebrow: 'Partnership Inquiry',
      heading: 'Partner With Us',
      subtitle: 'Tell us about your organization and how we can collaborate for elderly care.',
      submitLabel: 'Submit Partnership Request'
    };
  }
  if (activeModal.value === 'cause') {
    return {
      eyebrow: 'Community Outreach',
      heading: 'Support Our Cause',
      subtitle: 'Join our awareness network to advocate for elders across Ethiopia.',
      submitLabel: 'Join Advocacy Network'
    };
  }
  return {
    eyebrow: 'Volunteer Registration',
    heading: 'Become a Volunteer',
    subtitle: 'Join our dedicated team of volunteers supporting elders in Addis Ababa.',
    submitLabel: 'Submit Volunteer Application'
  };
});

const openActionModal = (type) => {
  submittedMessage.value = '';
  activeModal.value = type;
};

const closeModal = () => {
  activeModal.value = null;
  submittedMessage.value = '';
};

const submitForm = () => {
  const roleLabel =
    activeModal.value === 'partner'
      ? 'partnership inquiry'
      : activeModal.value === 'cause'
      ? 'outreach interest'
      : 'volunteer application';
  submittedMessage.value = `Thank you, ${form.name}. Your ${roleLabel} has been recorded and our coordinator will contact you shortly.`;
  form.name = '';
  form.email = '';
  form.phone = '';
  form.notes = '';
};

const syncSectionParam = (section) => {
  if (section === 'volunteer') openActionModal('volunteer');
  else if (section === 'partner') openActionModal('partner');
  else closeModal();
};

const handleKeydown = (e) => {
  if (e.key === 'Escape' && activeModal.value) closeModal();
};

watch(() => route.params.section, syncSectionParam, { immediate: true });
onMounted(() => window.addEventListener('keydown', handleKeydown));
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown));
</script>

<style scoped>
.get-involved-view {
  width: 100%;
  background-color: #f7f4eb;
}

/* Hero Banner */
.involved-hero {
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
  width: 64%;
  height: 100%;
  object-fit: cover;
  object-position: center 22%;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(21, 56, 40, 1) 0%,
    rgba(21, 56, 40, 1) 35%,
    rgba(21, 56, 40, 0.85) 42%,
    rgba(21, 56, 40, 0.25) 54%,
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
  left: 41%;
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

.breadcrumb-home:hover {
  color: #153c2a;
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

/* Main Body */
.involved-main {
  padding: 1.55rem 0 2.5rem;
}

/* 4 Top Action Cards */
.options-section {
  margin-bottom: 1.35rem;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.05rem;
}

.option-card {
  background-color: #fdfbf6;
  border: 1px solid #ede6d6;
  border-radius: 14px;
  padding: 1.1rem 1.05rem;
  box-shadow: 0 4px 16px rgba(21, 61, 47, 0.05);
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.option-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(21, 61, 47, 0.09);
}

.option-badge {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  flex-shrink: 0;
  margin-top: 2px;
}

.option-badge::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 10px;
  height: 10px;
  border-radius: 1px;
  background-color: inherit;
  z-index: 0;
}

.option-badge svg {
  width: 22px;
  height: 22px;
  position: relative;
  z-index: 1;
}

.badge-green {
  background-color: #1f4f38;
}

.badge-gold {
  background-color: #e3af46;
}

.option-body {
  flex: 1;
  min-width: 0;
}

.option-title {
  color: #153c2a;
  font-size: 0.98rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
  line-height: 1.25;
}

.option-desc {
  color: #4b5563;
  font-size: 0.77rem;
  line-height: 1.45;
  margin-bottom: 0.65rem;
}

.option-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #164431;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0;
  background: transparent;
}

.option-link svg {
  width: 13px;
  height: 13px;
  transition: transform 0.2s ease;
}

.option-link:hover svg {
  transform: translateX(3px);
}

/* 2 Side-by-Side Feature Cards */
.features-section {
  margin-bottom: 1.35rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.35rem;
}

.feature-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 22px rgba(21, 61, 47, 0.06);
  display: grid;
  grid-template-columns: 45% 55%;
  min-height: 270px;
}

.feature-card-white {
  background-color: var(--white);
  border: 1px solid #ece5d5;
  padding: 1rem 1.25rem 1rem 1rem;
  gap: 1.25rem;
  align-items: center;
}

.feature-media-inset {
  width: 100%;
  height: 238px;
  border-radius: 12px;
  overflow: hidden;
}

.feature-media-inset img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 22%;
  display: block;
}

.feature-card-sage {
  background: linear-gradient(135deg, #f3f5ec 0%, #e7eee0 100%);
  border: 1px solid #e1e8d9;
  position: relative;
}

.feature-media-blend {
  position: relative;
  height: 100%;
  min-height: 270px;
  overflow: hidden;
}

.feature-media-blend img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 28% 30%;
  display: block;
}

.media-blend-mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 58%,
    rgba(237, 242, 231, 0.72) 84%,
    #ecf1e6 100%
  );
  pointer-events: none;
}

.feature-card-sage .feature-content {
  padding: 1.35rem 1.35rem 1.35rem 0.65rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #b78529;
  font-size: 0.74rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.eyebrow-line {
  width: 18px;
  height: 1.5px;
  background-color: #d7ab59;
}

.feature-heading {
  color: #164431;
  font-size: 1.48rem;
  font-weight: 800;
  line-height: 1.18;
  margin-bottom: 0.45rem;
}

.feature-desc {
  color: #3f4a45;
  font-size: 0.79rem;
  line-height: 1.48;
  margin-bottom: 0.75rem;
}

.feature-bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.42rem;
}

.feature-bullets li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1f2937;
  font-size: 0.79rem;
  font-weight: 600;
}

.check-badge {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #e4b553;
  color: var(--white);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.check-badge svg {
  width: 10px;
  height: 10px;
}

.btn-green-pill,
.btn-gold-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.56rem 1.25rem;
  border-radius: var(--radius-pill);
  font-size: 0.8rem;
  font-weight: 700;
  align-self: flex-start;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.btn-green-pill {
  background-color: #1b4b36;
  color: var(--white);
}

.btn-green-pill:hover {
  background-color: #143928;
  transform: translateY(-1px);
}

.btn-gold-pill {
  background-color: #e6b34d;
  color: #163b2b;
}

.btn-gold-pill:hover {
  background-color: #dba53d;
  transform: translateY(-1px);
}

.btn-green-pill svg,
.btn-gold-pill svg {
  width: 14px;
  height: 14px;
}

/* Impact Stats Strip */
.stats-section {
  margin-bottom: 1.35rem;
}

.stats-bar {
  background-color: #f4efe2;
  border: 1px solid #e7decb;
  border-radius: 14px;
  padding: 1.15rem 1.5rem;
  box-shadow: 0 4px 16px rgba(21, 61, 47, 0.04);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.stat-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  padding: 0.25rem 1rem;
  position: relative;
}

.stat-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 12%;
  bottom: 12%;
  width: 1px;
  background-color: #ded4be;
}

.stat-icon {
  color: #1a4b35;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-icon svg {
  width: 30px;
  height: 30px;
}

.stat-value {
  color: #153c2a;
  font-size: 1.48rem;
  font-weight: 800;
  line-height: 1.05;
}

.stat-label {
  color: #4b5563;
  font-size: 0.74rem;
  font-weight: 600;
  margin-top: 0.15rem;
}

/* Bottom CTA Banner */
.cta-banner {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(95deg, #1b4634 0%, #153829 65%, #1d4e3a 100%);
  padding: 1.45rem 2.2rem;
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

.cta-title {
  color: var(--white);
  font-size: 1.32rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.2rem;
}

.cta-subtitle {
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.82rem;
}

.btn-cta-gold {
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

.btn-cta-gold:hover {
  background-color: #dba53e;
  transform: translateY(-1px);
}

.btn-cta-gold svg {
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
  max-width: 480px;
  background-color: #fdfbf6;
  border-radius: 16px;
  padding: 1.65rem 1.75rem;
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
  font-size: 1.35rem;
  font-weight: 800;
  margin-bottom: 0.3rem;
}

.modal-subtitle {
  color: #4b5563;
  font-size: 0.82rem;
  margin-bottom: 1rem;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.form-row label {
  font-size: 0.76rem;
  font-weight: 700;
  color: #153c2a;
}

.form-row input,
.form-row textarea {
  border: 1px solid #d9d0be;
  border-radius: 8px;
  padding: 0.55rem 0.75rem;
  font-size: 0.82rem;
  background-color: var(--white);
  color: #1f2937;
  font-family: inherit;
}

.modal-submit {
  margin-top: 0.3rem;
  background-color: #1b4b36;
  color: var(--white);
  font-size: 0.84rem;
  font-weight: 700;
  padding: 0.68rem 1.2rem;
  border-radius: var(--radius-pill);
}

.modal-success {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #153c2a;
  font-size: 0.88rem;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 1120px) {
  .options-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .stats-bar {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .stat-item:not(:last-child)::after {
    display: none;
  }
}

@media (max-width: 768px) {
  .involved-hero {
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

  .options-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .feature-card-white {
    padding: 1rem;
  }

  .feature-media-inset {
    height: 210px;
  }

  .feature-media-blend {
    min-height: 210px;
    height: 210px;
  }

  .media-blend-mask {
    background: linear-gradient(
      180deg,
      transparent 45%,
      rgba(237, 242, 231, 0.85) 85%,
      #ecf1e6 100%
    );
  }

  .feature-card-sage .feature-content {
    padding: 1.15rem;
  }

  .stats-bar {
    grid-template-columns: 1fr;
  }

  .stat-item {
    justify-content: flex-start;
  }

  .cta-banner {
    padding: 1.35rem 1.25rem;
  }

  .cta-content {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
