<template>
  <section class="home-about">
    <div class="about-grid">
      <!-- Left Card: About Image + Content -->
      <div class="about-card">
        <div class="about-image">
          <img src="/images/home-about-elderly-woman.png" alt="About Elderly Support Organization" />
        </div>
        <div class="about-content">
          <div class="content-label">ስለ እኛ</div>
          <h2 class="content-title">አረጋውያን መርጃ ድርጅት</h2>
          <p class="content-description">
            እኛ የምንሰራው በማህበረሰቡ ውስጥ የሚገኙ አረጋውያንን በክብር፣ በፍቅርና በእንክብካቤ ሕይወታቸውን እንዲመሩ ለመርዳት ነው። በጋራ ሆነን የተሻለ ነገን እንገነባለን።
          </p>
          <router-link to="/about" class="btn-about">
            <span>ስለ እኛ ይወቁ</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </router-link>
        </div>
      </div>

      <!-- Middle-Right Card: Upcoming Events -->
      <div class="events-card">
        <div class="events-header">
          <div class="events-title-group">
            <svg class="events-header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <h3 class="events-title">የመጪው ክስተቶች</h3>
          </div>
          <router-link to="/news-events" class="view-all-link">
            <span>ሁሉንም ይመልከቱ</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </router-link>
        </div>

        <div class="event-item">
          <img src="/images/home-events-community.png" alt="Community Event" class="event-image" />
          <div class="event-details">
            <h4 class="event-title">የአረጋውያን ቀን አከባበር</h4>
            <div class="event-meta">
              <div class="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>መስከረም 20, 2018</span>
              </div>
              <div class="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>አዲስ አበባ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.home-about {
  height: 100%;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.72fr 1.15fr;
  gap: 1rem;
  height: 100%;
  align-items: stretch;
}

.about-card {
  background-color: var(--white);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(21, 61, 47, 0.06);
  border: 1px solid rgba(36, 75, 58, 0.06);
  display: grid;
  grid-template-columns: 0.92fr 1.15fr;
  align-items: stretch;
}

.about-image {
  position: relative;
  min-height: 185px;
  overflow: hidden;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  display: block;
}

.about-content {
  padding: 1.1rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-label {
  font-size: 0.72rem;
  color: #b88732;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.content-title {
  font-size: clamp(1.05rem, 1.4vw, 1.25rem);
  font-weight: 800;
  color: #1a2e22;
  margin-bottom: 0.45rem;
  line-height: 1.25;
}

.content-description {
  font-size: 0.76rem;
  color: #475569;
  line-height: 1.5;
  margin-bottom: 0.85rem;
}

.btn-about {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  align-self: flex-start;
  background-color: var(--primary-green);
  color: var(--white);
  padding: 0.45rem 1.05rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.75rem;
  box-shadow: 0 3px 10px rgba(36, 75, 58, 0.2);
}

.btn-about svg {
  width: 14px;
  height: 14px;
}

.btn-about:hover {
  background-color: var(--dark-green);
  transform: translateY(-1px);
}

.events-card {
  background-color: #e8f3ea;
  border: 1px solid #d5e8d9;
  border-radius: 14px;
  padding: 1.05rem;
  box-shadow: 0 4px 16px rgba(21, 61, 47, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.65rem;
}

.events-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.events-title-group {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.events-header-icon {
  width: 17px;
  height: 17px;
  color: var(--primary-green);
  flex-shrink: 0;
}

.events-title {
  font-size: 0.88rem;
  font-weight: 800;
  color: #1a2e22;
}

.view-all-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--primary-green);
  font-weight: 600;
  font-size: 0.7rem;
  white-space: nowrap;
}

.view-all-link svg {
  width: 12px;
  height: 12px;
}

.view-all-link:hover {
  color: var(--dark-green);
  text-decoration: underline;
}

.event-item {
  flex: 1;
  background-color: rgba(255, 255, 255, 0.78);
  border-radius: 10px;
  padding: 0.55rem 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.event-image {
  width: 108px;
  height: 104px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

.event-details {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.event-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: #1a2e22;
  margin-bottom: 0.45rem;
  line-height: 1.3;
}

.event-meta {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  color: #475569;
}

.meta-item svg {
  width: 13px;
  height: 13px;
  color: var(--primary-green);
  flex-shrink: 0;
}

@media (max-width: 991px) {
  .about-grid {
    grid-template-columns: 1fr;
    height: auto;
  }

  .about-card {
    grid-template-columns: 1fr;
  }

  .about-image {
    height: 220px;
  }
}
</style>
