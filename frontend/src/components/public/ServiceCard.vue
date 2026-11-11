<template>
  <div class="service-card">
    <img v-if="image" :src="image" :alt="title" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <router-link :to="`/services/${id}`">Learn More</router-link>
  </div>
</template>

<script setup>
defineProps({
  id: [String, Number],
  title: String,
  description: String,
  image: String
});
</script>

<style scoped>
.service-card {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
}

a {
  color: var(--primary-color);
  text-decoration: none;
}
</style>
