<template>
  <div class="service-detail-view">
    <section class="service-hero">
      <h1>{{ service.title }}</h1>
    </section>
    <section class="service-content">
      <img v-if="service.image" :src="service.image" :alt="service.title" />
      <div class="service-description">
        <h2>About This Service</h2>
        <p>{{ service.description }}</p>
        <h3>Features</h3>
        <ul>
          <li v-for="(feature, index) in service.features" :key="index">{{ feature }}</li>
        </ul>
        <BaseButton>Request This Service</BaseButton>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import BaseButton from '../../components/common/BaseButton.vue';

const route = useRoute();
const service = ref({
  id: route.params.id,
  title: 'Service Title',
  description: 'Detailed description of the service...',
  image: '',
  features: ['Feature 1', 'Feature 2', 'Feature 3']
});
</script>

<style scoped>
.service-hero {
  background-color: var(--primary-color);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.service-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.service-content img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.service-description ul {
  margin: 1rem 0 2rem 2rem;
}
</style>
