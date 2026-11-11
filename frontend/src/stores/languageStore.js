import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref('am');
  const availableLanguages = ref(['am', 'en']);

  const setLanguage = (lang) => {
    if (availableLanguages.value.includes(lang)) {
      currentLanguage.value = lang;
      localStorage.setItem('language', lang);
    }
  };

  const initLanguage = () => {
    const storedLang = localStorage.getItem('language');
    if (storedLang && availableLanguages.value.includes(storedLang)) {
      currentLanguage.value = storedLang;
    }
  };

  return {
    currentLanguage,
    availableLanguages,
    setLanguage,
    initLanguage
  };
});
