<template>
  <div class="event-card">
    <div class="event-date">
      <span class="day">{{ day }}</span>
      <span class="month">{{ month }}</span>
    </div>
    <div class="event-content">
      <h3>{{ title }}</h3>
      <p>{{ location }}</p>
      <p>{{ time }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  location: String,
  time: String,
  date: [String, Date]
});

const day = computed(() => new Date(props.date).getDate());
const month = computed(() => new Date(props.date).toLocaleString('default', { month: 'short' }));
</script>

<style scoped>
.event-card {
  display: flex;
  gap: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
}

.event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
  border-radius: 4px;
  min-width: 80px;
}

.day {
  font-size: 2rem;
  font-weight: bold;
}

.month {
  font-size: 1rem;
}
</style>
