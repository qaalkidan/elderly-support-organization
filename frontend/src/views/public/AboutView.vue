<template>
  <div class="about-view">
    <!-- Hero Banner -->
    <section class="about-hero">
      <div class="hero-background">
        <img src="/images/hero-banner.png" alt="Elderly Support Organization" class="hero-image" />
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
              <span class="overline-text">About Us</span>
              <span class="overline-line"></span>
            </div>

            <h1 class="hero-title">አረጋውያን መርጃ ድርጅት</h1>
            <p class="hero-subtitle">Caring Today, Supporting Tomorrow</p>

            <nav class="hero-breadcrumb" aria-label="Breadcrumb">
              <router-link to="/" class="breadcrumb-home">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 3 3 10.5h2.5V20h5v-5.5h3V20h5v-9.5H21L12 3Z" />
                </svg>
                <span>Home</span>
              </router-link>
              <span class="breadcrumb-sep" aria-hidden="true">&gt;</span>
              <span class="breadcrumb-current">About Us</span>
            </nav>
          </div>
        </div>
      </div>

      <svg class="hero-wave" viewBox="0 0 1440 44" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,12 Q360,44 720,22 T1440,12 L1440,44 L0,44 Z" fill="#F7F4EB" />
      </svg>
    </section>

    <!-- Main Body on Cream Background -->
    <div class="about-body">
      <!-- Section 1: Our Story + Mission/Vision/Values + Caregiver Photo -->
      <section class="story-section">
        <div class="container">
          <div class="story-grid">
            <!-- Left: Our Story -->
            <div class="story-column">
              <div class="section-heading-row">
                <h2 class="section-heading">Our Story</h2>
                <span class="heading-line"></span>
              </div>

              <p class="story-paragraph">
                The <strong>አረጋውያን መርጃ ድርጅት</strong> (Elderly Support Organization) was established with a deep commitment to support and care for our beloved elderly citizens. We believe that every older person deserves dignity, respect, and a quality life. Our organization was founded in 2020 in Addis Ababa, Ethiopia, by a group of compassionate individuals who saw the need for better support and care for the elderly in our community.
              </p>

              <p class="story-paragraph">
                Since then, we have been working tirelessly to provide assistance, promote active aging, and build a supportive community for our elderly.
              </p>

              <router-link to="/services" class="btn-learn-more">
                <span>Learn More</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </router-link>
            </div>

            <!-- Middle: Mission, Vision, Values Card -->
            <div class="mvv-card">
              <div class="mvv-item">
                <div class="mvv-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    <path d="M16.5 7.5 21 3" />
                  </svg>
                </div>
                <div class="mvv-text">
                  <h3>Our Mission</h3>
                  <p>To provide comprehensive support and care for elderly people, ensuring their dignity and well-being.</p>
                </div>
              </div>

              <div class="mvv-item">
                <div class="mvv-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </div>
                <div class="mvv-text">
                  <h3>Our Vision</h3>
                  <p>An inclusive society where every elderly person lives with dignity, care, and happiness.</p>
                </div>
              </div>

              <div class="mvv-item">
                <div class="mvv-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 3h12l4 6-10 12L2 9Z" />
                    <path d="M2 9h20M12 21 8.5 9 12 3l3.5 6Z" />
                  </svg>
                </div>
                <div class="mvv-text">
                  <h3>Our Values</h3>
                  <p>Compassion, Respect, Integrity, Solidarity, and Service.</p>
                </div>
              </div>
            </div>

            <!-- Right: Caregiver & Elderly Woman Image -->
            <div class="story-photo-card">
              <img src="/images/about-caregiver.jpg" alt="Caregiver supporting an elderly community member" />
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Impact Statistics Bar -->
      <section class="stats-section">
        <div class="container">
          <div class="stats-bar">
            <svg class="stats-leaf stats-leaf-left" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
              <path d="M10 90 C22 55, 45 30, 88 14 C72 52, 48 76, 10 90 Z" />
              <path d="M10 90 C42 60, 62 40, 88 14" />
            </svg>
            <svg class="stats-leaf stats-leaf-right" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
              <path d="M90 90 C78 55, 55 30, 12 14 C28 52, 52 76, 90 90 Z" />
              <path d="M90 90 C58 60, 38 40, 12 14" />
            </svg>

            <div class="stat-item">
              <div class="stat-svg" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div class="stat-info">
                <div class="stat-number">2,500+</div>
                <div class="stat-label">Elderly People Supported</div>
              </div>
            </div>

            <div class="stat-item">
              <div class="stat-svg" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
              </div>
              <div class="stat-info">
                <div class="stat-number">800+</div>
                <div class="stat-label">Volunteers</div>
              </div>
            </div>

            <div class="stat-item">
              <div class="stat-svg" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div class="stat-info">
                <div class="stat-number">300+</div>
                <div class="stat-label">Donors &amp; Supporters</div>
              </div>
            </div>

            <div class="stat-item">
              <div class="stat-svg" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke-width="2.4" />
                </svg>
              </div>
              <div class="stat-info">
                <div class="stat-number">5+</div>
                <div class="stat-label">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Our Team -->
      <section id="our-team" class="team-section">
        <div class="container">
          <div class="team-layout">
            <div class="team-intro">
              <div class="team-heading-row">
                <span class="team-line"></span>
                <h2 class="section-heading">Our Team</h2>
              </div>
              <p class="team-description">
                A dedicated team of professionals and volunteers working together to support our elderly community.
              </p>
              <router-link to="/get-involved" class="btn-meet-team">
                <span>Meet Our Team</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </router-link>
            </div>

            <div class="team-grid">
              <article v-for="member in teamMembers" :key="member.name" class="team-card">
                <div class="team-photo">
                  <img :src="member.image" :alt="member.name" />
                </div>
                <div class="team-meta">
                  <h3 class="member-name">{{ member.name }}</h3>
                  <p class="member-role">{{ member.role }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>

        <svg class="bottom-wave" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,22 Q360,0 720,24 T1440,18 L1440,40 L0,40 Z" fill="#DDE9DB" opacity="0.6" />
        </svg>
      </section>
    </div>
  </div>
</template>

<script setup>
const teamMembers = [
  {
    name: 'Selam Tesfaye',
    role: 'Executive Director',
    image: '/images/team-selam.jpg'
  },
  {
    name: 'Daniel Mekonnen',
    role: 'Program Manager',
    image: '/images/team-daniel.jpg'
  },
  {
    name: 'Asterakeb Girma',
    role: 'Community Outreach',
    image: '/images/team-aster.jpg'
  },
  {
    name: 'Yonas Alemu',
    role: 'Volunteer Coordinator',
    image: '/images/team-yonas.jpg'
  }
];
</script>

<style scoped>
.about-view {
  width: 100%;
  background-color: #f7f4eb;
}

/* Hero Banner */
.about-hero {
  position: relative;
  height: 280px;
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
  object-position: right 22%;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(21, 56, 40, 0.96) 0%,
    rgba(21, 56, 40, 0.9) 38%,
    rgba(21, 56, 40, 0.5) 60%,
    rgba(21, 56, 40, 0.08) 82%,
    transparent 100%
  );
}

.hero-leaf {
  position: absolute;
  top: -10px;
  left: -10px;
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
  margin-bottom: 0.4rem;
}

.overline-line {
  width: 34px;
  height: 1.5px;
  background-color: var(--gold);
}

.overline-text {
  font-size: 0.88rem;
  font-weight: 600;
  color: #e4ba67;
  letter-spacing: 0.3px;
}

.hero-title {
  font-size: clamp(1.9rem, 3vw, 2.55rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.15;
  margin-bottom: 0.3rem;
}

.hero-subtitle {
  font-size: clamp(0.95rem, 1.4vw, 1.15rem);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.94);
  margin-bottom: 1rem;
}

.hero-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background-color: rgba(214, 198, 162, 0.88);
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

.breadcrumb-current {
  color: #1a2e22;
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
.about-body {
  background-color: #f7f4eb;
  background-image: radial-gradient(rgba(214, 168, 95, 0.08) 1px, transparent 1px);
  background-size: 28px 28px;
}

/* Story + MVV + Photo */
.story-section {
  padding: 2rem 0 1.5rem;
}

.story-grid {
  display: grid;
  grid-template-columns: 1.28fr 1.02fr 1.25fr;
  gap: 1.5rem;
  align-items: stretch;
}

.story-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section-heading-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.9rem;
}

.section-heading {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1a2e22;
  line-height: 1.2;
}

.heading-line {
  width: 54px;
  height: 2px;
  background-color: var(--gold);
  border-radius: 2px;
}

.story-paragraph {
  font-size: 0.82rem;
  color: #334155;
  line-height: 1.6;
  margin-bottom: 0.85rem;
}

.btn-learn-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  margin-top: 0.25rem;
  background-color: var(--primary-green);
  color: var(--white);
  padding: 0.55rem 1.35rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(36, 75, 58, 0.2);
}

.btn-learn-more svg {
  width: 14px;
  height: 14px;
}

.btn-learn-more:hover {
  background-color: var(--dark-green);
  transform: translateY(-1px);
}

/* Mission Vision Values Card */
.mvv-card {
  background-color: #eaf2e9;
  border: 1px solid #d7e7d5;
  border-radius: 14px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0 4px 14px rgba(21, 61, 47, 0.04);
}

.mvv-item {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}

.mvv-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(36, 75, 58, 0.14);
  color: var(--primary-green);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.mvv-icon svg {
  width: 22px;
  height: 22px;
}

.mvv-text h3 {
  font-size: 0.92rem;
  font-weight: 800;
  color: #1a2e22;
  margin-bottom: 0.2rem;
}

.mvv-text p {
  font-size: 0.76rem;
  color: #334155;
  line-height: 1.45;
}

/* Right Story Photo */
.story-photo-card {
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(21, 61, 47, 0.08);
  min-height: 260px;
}

.story-photo-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Impact Statistics Strip */
.stats-section {
  padding: 0.5rem 0 1.75rem;
}

.stats-bar {
  position: relative;
  background-color: #eaf2e9;
  border: 1px solid #d7e7d5;
  border-radius: 14px;
  padding: 1.15rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(21, 61, 47, 0.04);
}

.stats-leaf {
  position: absolute;
  bottom: -14px;
  width: 85px;
  height: 85px;
  color: rgba(36, 75, 58, 0.16);
  pointer-events: none;
}

.stats-leaf-left {
  left: -10px;
}

.stats-leaf-right {
  right: -10px;
}

.stat-item {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  padding: 0 0.5rem;
}

.stat-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: -0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 58%;
  background-color: rgba(36, 75, 58, 0.14);
}

.stat-svg {
  width: 36px;
  height: 36px;
  color: var(--primary-green);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-svg svg {
  width: 30px;
  height: 30px;
}

.stat-number {
  font-size: 1.4rem;
  font-weight: 800;
  color: #1a2e22;
  line-height: 1.1;
}

.stat-label {
  font-size: 0.74rem;
  color: #475569;
  font-weight: 500;
  margin-top: 0.1rem;
}

/* Our Team Section */
.team-section {
  position: relative;
  padding: 0.75rem 0 3.25rem;
  overflow: hidden;
}

.team-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 0.95fr 3fr;
  gap: 1.5rem;
  align-items: center;
}

.team-heading-row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.75rem;
}

.team-line {
  width: 34px;
  height: 2px;
  background-color: var(--gold);
  border-radius: 2px;
}

.team-description {
  font-size: 0.8rem;
  color: #334155;
  line-height: 1.55;
  margin-bottom: 1.1rem;
}

.btn-meet-team {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--white);
  color: var(--primary-green);
  border: 1.5px solid var(--primary-green);
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
}

.btn-meet-team svg {
  width: 14px;
  height: 14px;
}

.btn-meet-team:hover {
  background-color: var(--primary-green);
  color: var(--white);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.team-card {
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(21, 61, 47, 0.06);
  border: 1px solid rgba(36, 75, 58, 0.06);
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.team-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(21, 61, 47, 0.12);
}

.team-photo {
  aspect-ratio: 1 / 1.02;
  background-color: #eceff2;
  overflow: hidden;
}

.team-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.team-meta {
  padding: 0.7rem 0.5rem 0.8rem;
}

.member-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1a2e22;
  margin-bottom: 0.15rem;
}

.member-role {
  font-size: 0.72rem;
  color: #64748b;
  font-weight: 500;
}

.bottom-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 36px;
  pointer-events: none;
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .story-grid {
    grid-template-columns: 1fr 1fr;
  }

  .story-photo-card {
    grid-column: 1 / -1;
    max-height: 320px;
  }

  .team-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .about-hero {
    height: auto;
    min-height: 250px;
    padding: 2.5rem 0 3.25rem;
  }

  .hero-overlay {
    background: linear-gradient(
      to bottom,
      rgba(21, 56, 40, 0.88) 0%,
      rgba(21, 56, 40, 0.75) 100%
    );
  }

  .story-grid {
    grid-template-columns: 1fr;
  }

  .stats-bar {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    padding: 1.25rem;
  }

  .stat-item {
    justify-content: flex-start;
  }

  .stat-item:nth-child(2n)::after {
    display: none;
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .stats-bar {
    grid-template-columns: 1fr;
  }

  .stat-item::after {
    display: none;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
