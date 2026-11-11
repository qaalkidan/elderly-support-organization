<template>
  <header class="app-header">
    <TopInfoBar />
    <div class="main-header">
      <div class="container">
        <router-link to="/" class="logo-section">
          <img src="/logo.svg" alt="Elderly Support Organization Logo" class="logo-image" />
          <div class="logo-text">
            <div class="logo-amharic">አረጋውያን መርጃ ድርጅት</div>
            <div class="logo-english">Elderly Support Organization</div>
          </div>
        </router-link>
        <AppNavbar />
      </div>
    </div>
  </header>
</template>

<script setup>
import TopInfoBar from './TopInfoBar.vue';
import AppNavbar from './AppNavbar.vue';
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #fdfbf7;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.main-header {
  background-color: #fdfbf7;
  padding: 0.45rem 0;
  border-bottom: 1px solid rgba(36, 75, 58, 0.08);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.logo-image {
  width: 44px;
  height: 42px;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-amharic {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--primary-green);
  line-height: 1.15;
}

.logo-english {
  font-size: 0.72rem;
  color: #475569;
  font-weight: 500;
}

@media (max-width: 768px) {
  .logo-image {
    width: 38px;
    height: 38px;
  }

  .logo-amharic {
    font-size: 0.95rem;
  }

  .logo-english {
    font-size: 0.7rem;
  }
}
</style>
