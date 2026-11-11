<template>
  <div class="public-layout" :class="{ 'public-layout--home': isHome }">
    <AppHeader />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter v-if="!isHome" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AppHeader from '../components/layout/AppHeader.vue';
import AppFooter from '../components/layout/AppFooter.vue';

const route = useRoute();
const isHome = computed(() => route.name === 'home');
</script>

<style scoped>
.public-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
}

.main-content {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
