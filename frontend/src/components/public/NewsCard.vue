<template>
  <article class="news-card">
    <img v-if="image" :src="image" :alt="title" />
    <div class="news-content">
      <span class="news-date">{{ formattedDate }}</span>
      <h3>{{ title }}</h3>
      <p>{{ excerpt }}</p>
      <router-link :to="`/news/${id}`">Read More</router-link>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';
import { formatDate } from '../../utils/formatDate';

const props = defineProps({
  id: [String, Number],
  title: String,
  excerpt: String,
  image: String,
  date: [String, Date]
});

const formattedDate = computed(() => formatDate(props.date));
</script>

<style scoped>
.news-card {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-content {
  padding: 1.5rem;
}

.news-date {
  color: #666;
  font-size: 0.875rem;
}

a {
  color: var(--primary-color);
  text-decoration: none;
}
</style>
