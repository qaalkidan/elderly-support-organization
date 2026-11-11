<template>
  <div class="service-detail-view">
    <section class="service-hero">
      <h1>{{ service.title }}</h1>
    </section>
    <section class="service-content">
      <img v-if="service.image" :src="service.image" :alt="service.title" />
      <div class="service-description">
        <h2>{{ t('services.detailAboutHeading') }}</h2>
        <p>{{ service.description }}</p>
        <h3>{{ t('services.detailFeaturesHeading') }}</h3>
        <ul>
          <li v-for="(feature, index) in service.features" :key="index">{{ feature }}</li>
        </ul>
        <BaseButton @click="requested = true">{{ t('services.detailRequestBtn') }}</BaseButton>
        <p v-if="requested" class="request-feedback">{{ t('services.detailRequestedMsg') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import BaseButton from '../../components/common/BaseButton.vue';
import { useLanguage } from '@/composables/useLanguage';

const route = useRoute();
const { t, messages } = useLanguage();
const requested = ref(false);

const serviceImages = {
  healthcare: '/images/service-healthcare.jpg',
  food: '/images/service-food.jpg',
  financial: '/images/service-financial.jpg',
  social: '/images/service-social.jpg',
  'home-visits': '/images/service-home-visits.jpg',
  other: '/images/home-events-community.png'
};

const routeKeyMap = {
  healthcare: 'healthcare',
  food: 'food',
  'food-assistance': 'food',
  financial: 'financial',
  'financial-support': 'financial',
  social: 'social',
  'social-support': 'social',
  'home-visits': 'home',
  other: 'community'
};

const service = computed(() => {
  const id = String(route.params.id || 'healthcare');
  const cardKey = routeKeyMap[id] || id;
  const matched =
    messages.value.services.cards.find((item) => item.key === cardKey) ||
    messages.value.services.cards[0];

  return {
    id,
    title: matched?.title || t('services.heroPrimary'),
    description: matched?.description || t('services.subtitle'),
    image: serviceImages[id] || serviceImages.healthcare,
    features: messages.value.services.highlights || []
  };
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
