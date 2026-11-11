<template>
  <div class="news-detail-view">
    <article class="news-article">
      <img v-if="news.image" :src="news.image" :alt="news.title" />
      <h1>{{ news.title }}</h1>
      <p class="news-meta">{{ news.date }}</p>
      <div class="news-body">
        <p>{{ news.excerpt }}</p>
      </div>
    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useLanguage } from '@/composables/useLanguage';

const route = useRoute();
const { messages } = useLanguage();

const newsImages = {
  1: '/images/service-food.jpg',
  2: '/images/service-healthcare.jpg',
  3: '/images/service-social.jpg',
  4: '/images/service-home-visits.jpg'
};

const news = computed(() => {
  const id = Number(route.params.id) || 1;
  const matched =
    messages.value.news.newsItems.find((item) => item.id === id) ||
    messages.value.news.newsItems[0];

  return {
    id,
    title: matched.title,
    excerpt: matched.excerpt,
    date: matched.date,
    image: newsImages[matched.id] || newsImages[1]
  };
});
</script>

<style scoped>
.news-detail-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.news-article img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.news-meta {
  color: #666;
  margin-bottom: 2rem;
}

.news-body {
  line-height: 1.8;
}
</style>
