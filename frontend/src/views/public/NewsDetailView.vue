<template>
  <div class="news-detail-view">
    <article class="news-article">
      <img v-if="news.image" :src="news.image" :alt="news.title" />
      <h1>{{ news.title }}</h1>
      <p class="news-meta">{{ formattedDate }}</p>
      <div class="news-body" v-html="news.content"></div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { formatDate } from '../../utils/formatDate';

const route = useRoute();
const news = ref({
  id: route.params.id,
  title: 'News Article Title',
  content: '<p>Article content goes here...</p>',
  date: new Date(),
  image: ''
});

const formattedDate = computed(() => formatDate(news.value.date));
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
