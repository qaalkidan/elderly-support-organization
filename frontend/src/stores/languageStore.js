import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref('am');
  const availableLanguages = ref(['am', 'en']);

  const isAmharic = computed(() => currentLanguage.value === 'am');

  const applyDocumentLang = (lang) => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  const setLanguage = (lang) => {
    if (availableLanguages.value.includes(lang)) {
      currentLanguage.value = lang;
      localStorage.setItem('language', lang);
      applyDocumentLang(lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(currentLanguage.value === 'am' ? 'en' : 'am');
  };

  const initLanguage = () => {
    const storedLang = localStorage.getItem('language');
    if (storedLang && availableLanguages.value.includes(storedLang)) {
      currentLanguage.value = storedLang;
    }
    applyDocumentLang(currentLanguage.value);
  };

  return {
    currentLanguage,
    availableLanguages,
    isAmharic,
    setLanguage,
    toggleLanguage,
    initLanguage
  };
});
