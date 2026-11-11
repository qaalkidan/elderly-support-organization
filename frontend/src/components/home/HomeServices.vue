<template>
  <section class="home-services">
    <div class="container">
      <div class="section-header">
        <div class="header-overline-row">
          <span class="header-line"></span>
          <span class="header-overline">OUR SERVICES</span>
          <span class="header-line"></span>
        </div>
        <h2 class="section-title">የእኛ አገልግሎቶች</h2>
      </div>

      <div class="services-grid">
        <button
          v-for="service in services"
          :key="service.id"
          type="button"
          class="service-card"
          @click="navigateToService(service.link)"
        >
          <div class="service-icon" aria-hidden="true">
            <!-- Healthcare -->
            <svg v-if="service.key === 'healthcare'" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              <path d="M11 7h2v3h3v2h-3v3h-2v-3H8v-2h3V7z" fill="#FFFFFF" />
            </svg>
            <!-- Food -->
            <svg v-else-if="service.key === 'food'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 12h16a8 8 0 0 1-16 0Z" fill="currentColor" />
              <path d="M8 20h8" />
              <path d="M9 5c0 1.5-1 2-1 3.5M12 4c0 1.5-1 2-1 3.5M15 5c0 1.5-1 2-1 3.5" />
            </svg>
            <!-- Financial -->
            <svg v-else-if="service.key === 'financial'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="13.5" cy="7" r="4" fill="currentColor" />
              <text x="13.5" y="9" text-anchor="middle" font-size="6" font-weight="800" fill="#FFFFFF" stroke="none">$</text>
              <path d="M3 16h7l3.5-2a1.5 1.5 0 0 1 1.7 2.4L11 19.5H3V16Z" fill="currentColor" />
            </svg>
            <!-- Social -->
            <svg v-else-if="service.key === 'social'" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="7" r="3" />
              <circle cx="5.5" cy="9" r="2.3" />
              <circle cx="18.5" cy="9" r="2.3" />
              <path d="M7.5 19v-2.2c0-2.1 2-3.8 4.5-3.8s4.5 1.7 4.5 3.8V19h-9Zm-5.5 0v-1.7c0-1.6 1.4-2.9 3.2-2.9.6 0 1.2.15 1.7.4-.6.8-1 1.8-1 2.9V19H2Zm16.8 0v-1.3c0-1.1-.4-2.1-1-2.9.5-.25 1.1-.4 1.7-.4 1.8 0 3.2 1.3 3.2 2.9V19h-3.9Z" />
            </svg>
            <!-- Home Visits -->
            <svg v-else-if="service.key === 'home'" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3 3 10.5h2.5V20h5v-5.5h3V20h5v-9.5H21L12 3Z" />
            </svg>
            <!-- Other -->
            <svg v-else viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="9.5" />
              <path d="M8 12h7m-3-3 3 3-3 3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>
          </div>
          <h3 class="service-title">{{ service.titleAm }}</h3>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const services = ref([
  { id: 1, key: 'healthcare', titleAm: 'የጤና ድጋፍ', link: '/services/healthcare' },
  { id: 2, key: 'food', titleAm: 'ምግብ እና የዕለት እርዳታ', link: '/services/food' },
  { id: 3, key: 'financial', titleAm: 'የገንዘብ ድጋፍ', link: '/services/financial' },
  { id: 4, key: 'social', titleAm: 'ማህበራዊ ድጋፍ', link: '/services/social' },
  { id: 5, key: 'home', titleAm: 'የቤት ጉብኝት', link: '/services/home-visits' },
  { id: 6, key: 'other', titleAm: 'ሌሎች አገልግሎቶች', link: '/services/other' }
]);

const navigateToService = (link) => {
  router.push(link);
};
</script>

<style scoped>
.home-services {
  padding: 1.15rem 0 0.95rem;
  flex-shrink: 0;
}

.section-header {
  text-align: center;
  margin-bottom: 0.9rem;
}

.header-overline-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin-bottom: 0.15rem;
}

.header-line {
  width: 68px;
  height: 1.5px;
  background-color: rgba(214, 168, 95, 0.7);
}

.header-overline {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #b88732;
}

.section-title {
  font-size: clamp(1.15rem, 1.7vw, 1.45rem);
  font-weight: 800;
  color: #1a2e22;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.9rem;
}

.service-card {
  background-color: var(--white);
  border-radius: 12px;
  padding: 0.95rem 0.65rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 3px 12px rgba(21, 61, 47, 0.05);
  border: 1px solid rgba(36, 75, 58, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
}

.service-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(36, 75, 58, 0.12);
  border-color: var(--gold);
}

.service-icon {
  width: 30px;
  height: 30px;
  color: var(--primary-green);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease, color 0.25s ease;
}

.service-icon svg {
  width: 100%;
  height: 100%;
}

.service-card:hover .service-icon {
  color: #c28e38;
  transform: scale(1.08);
}

.service-title {
  font-size: 0.78rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.25;
}

@media (max-width: 991px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 560px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
