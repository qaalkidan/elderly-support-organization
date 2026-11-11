<template>
  <section class="impact-statistics">
    <div class="stat-item" v-for="stat in stats" :key="stat.label">
      <div class="stat-number">{{ stat.value }}</div>
      <div class="stat-label">{{ stat.label }}</div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  stats: {
    type: Array,
    default: () => []
  }
});
</script>

<style scoped>
.impact-statistics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 3rem 2rem;
  background-color: #f5f5f5;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary-color);
}

.stat-label {
  font-size: 1.25rem;
  color: #666;
}
</style>
