<template>
  <div class="news-events-view">
    <!-- Hero Banner -->
    <section class="news-hero">
      <div class="hero-background">
        <img src="/images/home-events-community.png" alt="Elderly Community Gathering" class="hero-image" />
        <div class="hero-overlay"></div>
      </div>

      <svg class="hero-leaf" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
        <path d="M12 12 C45 18, 75 45, 95 95 C45 80, 20 50, 12 12 Z" />
        <path d="M12 12 C45 45, 70 70, 95 95" />
      </svg>

      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <div class="hero-overline-row">
              <span class="overline-line"></span>
              <span class="overline-text">News &amp; Events</span>
              <span class="overline-line"></span>
            </div>

            <h1 class="hero-title-am">ዜናና ዝግጅቶች</h1>
            <div class="hero-title-en">News &amp; Events</div>
            <p class="hero-subtitle">Stay updated with our latest news, events, and activities.</p>

            <nav class="hero-breadcrumb" aria-label="Breadcrumb">
              <router-link to="/" class="breadcrumb-home">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 3 3 10.5h2.5V20h5v-5.5h3V20h5v-9.5H21L12 3Z" />
                </svg>
                <span>Home</span>
              </router-link>
              <span class="breadcrumb-sep" aria-hidden="true">&gt;</span>
              <span class="breadcrumb-current">News &amp; Events</span>
            </nav>
          </div>
        </div>
      </div>

      <svg class="hero-wave" viewBox="0 0 1440 44" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,12 Q360,44 720,22 T1440,12 L1440,44 L0,44 Z" fill="#F7F4EB" />
      </svg>
    </section>

    <!-- Main Body -->
    <div class="news-body">
      <section class="news-main-section">
        <div class="container">
          <div class="main-split-grid">
            <!-- Left: Latest News -->
            <div class="news-column">
              <div class="column-header">
                <div class="column-title-group">
                  <span class="title-accent-bar"></span>
                  <h2 class="column-title">Latest News</h2>
                </div>
                <button type="button" class="view-all-btn" @click="toggleShowAllNews">
                  <span>{{ showAllNews ? 'Show Less' : 'View All News' }}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>

              <div class="news-cards-grid">
                <article v-for="item in displayedNews" :key="item.id" class="news-card">
                  <div class="news-card-photo">
                    <img :src="item.image" :alt="item.title" />
                    <span class="date-pill">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{{ item.date }}</span>
                    </span>
                  </div>

                  <div class="news-card-body">
                    <div>
                      <h3 class="news-title">{{ item.title }}</h3>
                      <p class="news-excerpt">{{ item.excerpt }}</p>
                    </div>
                    <router-link :to="`/news/${item.id}`" class="read-more-link">
                      <span>Read More</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </router-link>
                  </div>
                </article>
              </div>
            </div>

            <!-- Right: Upcoming Events -->
            <aside class="events-column">
              <div class="events-panel">
                <div class="events-panel-header">
                  <div class="events-title-group">
                    <svg class="events-cal-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <h2 class="events-panel-title">Upcoming Events</h2>
                  </div>
                  <button type="button" class="view-all-btn" @click="toggleShowAllEvents">
                    <span>{{ showAllEvents ? 'Show Less' : 'View All Events' }}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>

                <div class="events-list">
                  <article v-for="event in displayedEvents" :key="event.id" class="event-row">
                    <div class="event-date-box">
                      <span class="event-month">{{ event.month }}</span>
                      <span class="event-day">{{ event.day }}</span>
                    </div>

                    <div class="event-info">
                      <h3 class="event-title">{{ event.title }}</h3>
                      <div class="event-meta-line">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{{ event.location }}</span>
                      </div>
                      <div class="event-meta-line">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{{ event.time }}</span>
                      </div>
                    </div>

                    <div class="event-thumb">
                      <img :src="event.image" :alt="event.title" />
                    </div>
                  </article>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <!-- Bottom Newsletter Banner -->
      <section class="newsletter-section">
        <div class="container">
          <div class="newsletter-banner">
            <div class="newsletter-photo">
              <img src="/images/hero-banner.png" alt="Elderly Support Community" />
              <div class="newsletter-photo-fade"></div>
            </div>

            <svg class="newsletter-leaf" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
              <path d="M108 12 C75 18, 45 45, 25 95 C75 80, 100 50, 108 12 Z" />
              <path d="M108 12 C75 45, 50 70, 25 95" />
            </svg>

            <div class="newsletter-content">
              <div class="newsletter-copy">
                <div class="megaphone-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m3 11 18-5v12L3 14v-3z" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                  </svg>
                </div>
                <div>
                  <h2 class="newsletter-title">Let's Build a Caring Community Together</h2>
                  <p class="newsletter-subtitle">Stay connected with our latest updates and events.</p>
                </div>
              </div>

              <form class="newsletter-form" @submit.prevent="handleSubscribe">
                <div class="email-input-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <input
                    v-model.trim="email"
                    type="email"
                    placeholder="Enter your email address"
                    aria-label="Email address"
                    required
                  />
                </div>
                <button type="submit" class="subscribe-btn">Subscribe</button>
              </form>
            </div>

            <p v-if="subscribeMessage" class="subscribe-feedback" role="status">
              {{ subscribeMessage }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const showAllNews = ref(false);
const showAllEvents = ref(false);
const email = ref('');
const subscribeMessage = ref('');

const newsItems = [
  {
    id: 1,
    date: 'Nov 5, 2026',
    title: 'Community Support Program Benefits Over 1,000 Elderly People',
    excerpt: 'Our organization has successfully provided support to more than 1,000 elderly people across Addis Ababa this year...',
    image: '/images/service-food.jpg'
  },
  {
    id: 2,
    date: 'Oct 28, 2026',
    title: 'Free Health Checkup for Senior Citizens',
    excerpt: 'In collaboration with local health partners, we organized a free health checkup program for elderly people...',
    image: '/images/service-healthcare.jpg'
  },
  {
    id: 3,
    date: 'Oct 20, 2026',
    title: 'Elderly Day Celebration A Success',
    excerpt: 'Our annual elderly day celebration was a great success, bringing joy and togetherness for our beloved seniors...',
    image: '/images/service-social.jpg'
  },
  {
    id: 4,
    date: 'Oct 10, 2026',
    title: 'Monthly Food & Essentials Distribution Completed',
    excerpt: 'Dedicated volunteers delivered nutritious food parcels and basic household supplies to over 350 senior households...',
    image: '/images/service-home-visits.jpg'
  }
];

const eventItems = [
  {
    id: 1,
    month: 'NOV',
    day: '15',
    title: 'Health Awareness Workshop',
    location: 'Addis Ababa Health Center',
    time: '9:00 AM - 12:00 PM',
    image: '/images/service-healthcare.jpg'
  },
  {
    id: 2,
    month: 'NOV',
    day: '20',
    title: 'Volunteer Training Session',
    location: 'Our Organization Office',
    time: '10:00 AM - 1:00 PM',
    image: '/images/about-caregiver.jpg'
  },
  {
    id: 3,
    month: 'NOV',
    day: '25',
    title: 'Charity Fundraising Event',
    location: 'Unity Park, Addis Ababa',
    time: '8:00 AM - 5:00 PM',
    image: '/images/service-financial.jpg'
  },
  {
    id: 4,
    month: 'DEC',
    day: '04',
    title: 'Community Elders Gathering',
    location: 'Bole Community Hall',
    time: '2:00 PM - 5:00 PM',
    image: '/images/home-events-community.png'
  }
];

const displayedNews = computed(() => (showAllNews.value ? newsItems : newsItems.slice(0, 3)));
const displayedEvents = computed(() => (showAllEvents.value ? eventItems : eventItems.slice(0, 3)));

const toggleShowAllNews = () => {
  showAllNews.value = !showAllNews.value;
};

const toggleShowAllEvents = () => {
  showAllEvents.value = !showAllEvents.value;
};

const handleSubscribe = () => {
  if (!email.value) return;
  subscribeMessage.value = `Thank you! Updates will be sent to ${email.value}.`;
  email.value = '';
};
</script>

<style scoped>
.news-events-view {
  width: 100%;
  background-color: #f7f4eb;
}

/* Hero Banner */
.news-hero {
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
  object-position: right 44%;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(21, 56, 40, 0.96) 0%,
    rgba(21, 56, 40, 0.9) 35%,
    rgba(21, 56, 40, 0.42) 55%,
    rgba(21, 56, 40, 0.05) 75%,
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

/* Main Body */
.news-body {
  background-color: #f7f4eb;
  background-image: radial-gradient(rgba(214, 168, 95, 0.08) 1px, transparent 1px);
  background-size: 28px 28px;
}

.news-main-section {
  padding: 1.5rem 0 1.75rem;
}

.main-split-grid {
  display: grid;
  grid-template-columns: 2.05fr 1fr;
  gap: 1.35rem;
  align-items: stretch;
}

/* Latest News Column */
.news-column {
  display: flex;
  flex-direction: column;
}

.column-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.95rem;
}

.column-title-group {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.title-accent-bar {
  width: 3px;
  height: 20px;
  border-radius: 2px;
  background-color: var(--primary-green);
}

.column-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #1a2e22;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: transparent;
  color: #1a2e22;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.2rem 0.25rem;
}

.view-all-btn svg {
  width: 14px;
  height: 14px;
}

.view-all-btn:hover {
  color: var(--primary-green);
  text-decoration: underline;
}

.news-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  flex: 1;
}

.news-card {
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(21, 61, 47, 0.06);
  border: 1px solid rgba(36, 75, 58, 0.06);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.news-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(21, 61, 47, 0.11);
}

.news-card-photo {
  position: relative;
  height: 152px;
  overflow: hidden;
}

.news-card-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.news-card:hover .news-card-photo img {
  transform: scale(1.04);
}

.date-pill {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(24, 62, 44, 0.92);
  color: var(--white);
  padding: 0.28rem 0.65rem;
  border-radius: 50px;
  font-size: 0.68rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.32rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.date-pill svg {
  width: 12px;
  height: 12px;
}

.news-card-body {
  padding: 0.95rem 1rem 1.05rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
}

.news-title {
  font-size: 0.9rem;
  font-weight: 800;
  color: #1a2e22;
  line-height: 1.32;
  margin-bottom: 0.45rem;
}

.news-excerpt {
  font-size: 0.74rem;
  color: #475569;
  line-height: 1.5;
}

.read-more-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  align-self: flex-start;
  color: #1a2e22;
  font-weight: 700;
  font-size: 0.76rem;
}

.read-more-link svg {
  width: 13px;
  height: 13px;
}

.read-more-link:hover {
  color: var(--primary-green);
  text-decoration: underline;
}

/* Upcoming Events Panel */
.events-column {
  display: flex;
  flex-direction: column;
}

.events-panel {
  background-color: var(--white);
  border-radius: 14px;
  padding: 1.05rem 1.15rem;
  box-shadow: 0 4px 18px rgba(21, 61, 47, 0.06);
  border: 1px solid rgba(36, 75, 58, 0.06);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.events-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid #edf2ee;
}

.events-title-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.events-cal-svg {
  width: 20px;
  height: 20px;
  color: var(--primary-green);
}

.events-panel-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #1a2e22;
}

.events-list {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}

.event-row {
  display: grid;
  grid-template-columns: 52px 1fr 78px;
  gap: 0.75rem;
  align-items: center;
  padding: 0.8rem 0;
}

.event-row:not(:last-child) {
  border-bottom: 1px solid #edf2ee;
}

.event-date-box {
  background-color: #eaf2e9;
  border-radius: 8px;
  padding: 0.45rem 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.event-month {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--primary-green);
  letter-spacing: 0.4px;
}

.event-day {
  font-size: 1.15rem;
  font-weight: 800;
  color: #1a2e22;
  line-height: 1.1;
}

.event-info {
  min-width: 0;
}

.event-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: #1a2e22;
  margin-bottom: 0.25rem;
  line-height: 1.25;
}

.event-meta-line {
  display: flex;
  align-items: center;
  gap: 0.32rem;
  font-size: 0.69rem;
  color: #475569;
  margin-top: 0.15rem;
}

.event-meta-line svg {
  width: 12px;
  height: 12px;
  color: var(--primary-green);
  flex-shrink: 0;
}

.event-thumb {
  width: 78px;
  height: 58px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.event-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Bottom Newsletter Banner */
.newsletter-section {
  padding: 0 0 2.5rem;
}

.newsletter-banner {
  position: relative;
  background-color: #163b2a;
  border-radius: 16px;
  overflow: hidden;
  min-height: 118px;
  box-shadow: 0 10px 28px rgba(20, 54, 39, 0.16);
}

.newsletter-photo {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 34%;
  overflow: hidden;
}

.newsletter-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 70% 20%;
}

.newsletter-photo-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(22, 59, 42, 0.08) 0%,
    rgba(22, 59, 42, 0.35) 55%,
    #163b2a 100%
  );
}

.newsletter-leaf {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 100px;
  height: 100px;
  color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.newsletter-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.75rem 2rem 1.75rem 27%;
}

.newsletter-copy {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.megaphone-icon {
  width: 38px;
  height: 38px;
  color: var(--gold);
  flex-shrink: 0;
}

.megaphone-icon svg {
  width: 100%;
  height: 100%;
}

.newsletter-title {
  font-size: clamp(1.05rem, 1.45vw, 1.25rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.25;
  margin-bottom: 0.2rem;
}

.newsletter-subtitle {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.88);
}

.newsletter-form {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-shrink: 0;
}

.email-input-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--white);
  border-radius: 50px;
  padding: 0.5rem 1rem;
  width: 245px;
}

.email-input-wrap svg {
  width: 15px;
  height: 15px;
  color: #64748b;
  flex-shrink: 0;
}

.email-input-wrap input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 0.78rem;
  color: #1e293b;
  background: transparent;
}

.subscribe-btn {
  background-color: var(--gold);
  color: #1a2e22;
  padding: 0.55rem 1.35rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.8rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.subscribe-btn:hover {
  background-color: #c89748;
  transform: translateY(-1px);
}

.subscribe-feedback {
  position: relative;
  z-index: 2;
  color: #f4d68c;
  font-size: 0.76rem;
  font-weight: 600;
  padding: 0 2rem 0.9rem 27%;
}

/* Responsive */
@media (max-width: 1120px) {
  .main-split-grid {
    grid-template-columns: 1fr;
  }

  .newsletter-content {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 1.75rem 1.5rem 30%;
  }
}

@media (max-width: 820px) {
  .news-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .newsletter-photo {
    display: none;
  }

  .newsletter-content,
  .subscribe-feedback {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (max-width: 600px) {
  .news-hero {
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

  .news-cards-grid {
    grid-template-columns: 1fr;
  }

  .newsletter-form {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }

  .email-input-wrap {
    width: 100%;
  }
}
</style>
