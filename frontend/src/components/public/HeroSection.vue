<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
      <BaseButton @click="$emit('action')">{{ actionText }}</BaseButton>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../common/BaseButton.vue';

defineProps({
  title: String,
  subtitle: String,
  actionText: {
    type: String,
    default: 'Learn More'
  }
});

defineEmits(['action']);
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
</style>
