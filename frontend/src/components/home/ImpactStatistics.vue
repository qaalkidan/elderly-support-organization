<template>
  <section class="impact-statistics">
    <div class="container">
      <div class="stats-card">
        <div class="stat-item">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-number">2,500+</div>
            <div class="stat-label">የተደገፉ አረጋውያን</div>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="currentColor" />
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-number">800+</div>
            <div class="stat-label">በሰላም የሚኖሩ</div>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <path d="m11 17 2 2a1 1 0 1 0 3-3" />
              <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
              <path d="m21 3 1 11h-2" />
              <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
              <path d="M3 4h8" />
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-number">300+</div>
            <div class="stat-label">አጋሮች</div>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke-width="2.4" />
            </svg>
          </div>
          <div class="stat-content">
            <div class="stat-number">50+</div>
            <div class="stat-label">የተካሄዱ ክንውኖች</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.impact-statistics {
  margin-top: -34px;
  position: relative;
  z-index: 10;
  flex-shrink: 0;
}

.stats-card {
  background-color: var(--white);
  border-radius: 14px;
  padding: clamp(0.55rem, 1.1vh, 1rem) 1.5rem;
  box-shadow: 0 8px 26px rgba(21, 61, 47, 0.08);
  border: 1px solid rgba(36, 75, 58, 0.06);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.stat-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  padding: 0 0.5rem;
  position: relative;
}

.stat-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: -0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 58%;
  background-color: #e5e7eb;
}

.stat-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #e6efe9;
  color: var(--primary-green);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-icon svg {
  width: 22px;
  height: 22px;
}

.stat-number {
  font-size: clamp(1.2rem, 1.8vw, 1.45rem);
  font-weight: 800;
  color: #1a2e22;
  line-height: 1.1;
}

.stat-label {
  font-size: 0.72rem;
  color: #475569;
  font-weight: 500;
  margin-top: 0.1rem;
}

@media (max-width: 991px) {
  .stats-card {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .stat-item {
    justify-content: flex-start;
  }

  .stat-item:nth-child(2n)::after {
    display: none;
  }
}

@media (max-width: 560px) {
  .stats-card {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.25rem;
  }

  .stat-item::after {
    display: none;
  }
}
</style>
