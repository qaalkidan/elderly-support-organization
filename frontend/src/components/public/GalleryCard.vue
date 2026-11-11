<template>
  <div class="gallery-card" @click="$emit('view')">
    <img :src="image" :alt="title" />
    <div class="gallery-overlay">
      <h4>{{ title }}</h4>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String
});

defineEmits(['view']);
</script>

<style scoped>
.gallery-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
}

img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-card:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s;
}

.gallery-card:hover .gallery-overlay {
  transform: translateY(0);
}
</style>
