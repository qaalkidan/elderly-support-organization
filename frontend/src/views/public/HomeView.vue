<template>
  <div class="home-view">
    <HeroSection />
    <div class="home-body">
      <ImpactStatistics />
      <HomeServices />
      <section class="home-bottom">
        <div class="container">
          <div class="bottom-grid">
            <HomeAbout />
            <DonationCTA />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import HeroSection from '../../components/home/HeroSection.vue';
import ImpactStatistics from '../../components/home/ImpactStatistics.vue';
import HomeServices from '../../components/home/HomeServices.vue';
import HomeAbout from '../../components/home/HomeAbout.vue';
import DonationCTA from '../../components/home/DonationCTA.vue';
</script>

<style scoped>
.home-view {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f7f4eb;
}

.home-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f7f4eb;
  background-image: radial-gradient(rgba(214, 168, 95, 0.08) 1px, transparent 1px);
  background-size: 28px 28px;
}

.home-bottom {
  flex: 1;
  display: flex;
  align-items: stretch;
  padding: 0.5rem 0 1.75rem;
}

.home-bottom .container {
  width: 100%;
  display: flex;
}

.bottom-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 3.15fr 1fr;
  gap: 1rem;
  align-items: stretch;
}

@media (max-width: 991px) {
  .bottom-grid {
    grid-template-columns: 1fr;
  }
}
</style>
