<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useLanguageStore } from './stores/languageStore';

const languageStore = useLanguageStore();

onMounted(() => {
  languageStore.initLanguage();
});
</script>

<style>
@import './assets/styles/variables.css';
@import './assets/styles/main.css';
@import './assets/styles/responsive.css';
</style>
