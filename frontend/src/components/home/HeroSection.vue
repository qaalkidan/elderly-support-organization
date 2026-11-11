<template>
  <section class="hero-section">
    <div class="hero-background">
      <img src="/images/hero-banner.png" alt="Elderly Support" class="hero-image" />
      <div class="hero-overlay"></div>
    </div>

    <div class="decorative-circle circle-1" aria-hidden="true"></div>
    <div class="decorative-circle circle-2" aria-hidden="true"></div>

    <div class="hero-content">
      <div class="container">
        <div class="hero-text">
          <div class="hero-badge">
            <svg class="badge-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="m11 17 2 2a1 1 0 1 0 3-3" />
              <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
              <path d="m21 3 1 11h-2" />
              <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
              <path d="M3 4h8" />
            </svg>
            <span>Together for a Dignified Life</span>
          </div>

          <h1 class="hero-title">
            አረጋውያን ሕይወትን<br />
            <span class="title-highlight">እናከብራለን</span>
          </h1>

          <p class="hero-description">
            የእኛ በጎ ፈቃደኛ አገልጋዮች በማህበረሰቡ ውስጥ<br />
            ለአረጋውያን ድጋፍ እና እንክብካቤ በመስጠት ተስፋን ይዘራሉ።
          </p>

          <div class="hero-buttons">
            <router-link to="/contact" class="btn btn-primary">
              <svg class="btn-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              ድጋፍ ይጠይቁ
            </router-link>
            <router-link to="/about" class="btn btn-secondary">
              <svg class="btn-svg" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.8" />
                <polygon points="10,8 16,12 10,16" />
              </svg>
              የእኛን ታሪክ ይወቁ
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <svg class="hero-wave" viewBox="0 0 1440 44" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0,10 Q720,44 1440,10 L1440,44 L0,44 Z" fill="#F7F4EB" />
    </svg>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero-section {
  position: relative;
  height: clamp(340px, 46vh, 420px);
  flex-shrink: 0;
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
    rgba(21, 56, 40, 0.9) 34%,
    rgba(21, 56, 40, 0.55) 54%,
    rgba(21, 56, 40, 0.08) 76%,
    transparent 100%
  );
}

.decorative-circle {
  position: absolute;
  border: 1px solid rgba(214, 168, 95, 0.25);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}

.circle-1 {
  width: 340px;
  height: 340px;
  top: -110px;
  left: -90px;
}

.circle-2 {
  width: 390px;
  height: 390px;
  top: -30px;
  left: 34%;
  opacity: 0.55;
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 34px;
}

.hero-content .container {
  width: 100%;
}

.hero-text {
  max-width: 500px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.95);
  padding: 0.32rem 0.9rem;
  border-radius: 50px;
  font-size: 0.74rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.28);
  margin-bottom: 0.85rem;
  backdrop-filter: blur(8px);
}

.badge-svg {
  width: 14px;
  height: 14px;
  color: var(--gold);
}

.hero-title {
  font-size: clamp(1.85rem, 2.8vw, 2.55rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.15;
  margin-bottom: 0.7rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
}

.title-highlight {
  color: #e0b35c;
}

.hero-description {
  font-size: clamp(0.8rem, 1.05vw, 0.9rem);
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.5;
  margin-bottom: 1.15rem;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
}

.hero-buttons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.25s ease;
}

.btn-svg {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

.btn-primary {
  background-color: var(--gold);
  color: #1a2e22;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  background-color: #c89748;
  transform: translateY(-1px);
}

.btn-secondary {
  background-color: rgba(21, 56, 40, 0.55);
  color: var(--white);
  border: 1.5px solid rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(4px);
}

.btn-secondary:hover {
  background-color: var(--white);
  color: var(--primary-green);
}

.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 28px;
  z-index: 3;
  pointer-events: none;
}

@media (max-width: 991px) {
  .hero-section {
    height: auto;
    min-height: 360px;
    padding: 2.5rem 0 4rem;
  }

  .hero-content {
    padding-bottom: 0;
  }

  .hero-overlay {
    background: linear-gradient(
      to bottom,
      rgba(21, 56, 40, 0.86) 0%,
      rgba(21, 56, 40, 0.75) 100%
    );
  }

  .decorative-circle {
    display: none;
  }
}

@media (max-width: 560px) {
  .hero-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
