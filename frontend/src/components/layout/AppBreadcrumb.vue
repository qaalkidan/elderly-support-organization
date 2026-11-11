<template>
  <nav class="breadcrumb">
    <router-link to="/">Home</router-link>
    <span v-for="(crumb, index) in crumbs" :key="index">
      <span class="separator">/</span>
      <router-link v-if="crumb.to" :to="crumb.to">{{ crumb.label }}</router-link>
      <span v-else>{{ crumb.label }}</span>
    </span>
  </nav>
</template>

<script setup>
defineProps({
  crumbs: {
    type: Array,
    default: () => []
  }
});
</script>

<style scoped>
.breadcrumb {
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
}

.separator {
  margin: 0 0.5rem;
}

a {
  color: var(--primary-color);
  text-decoration: none;
}
</style>
