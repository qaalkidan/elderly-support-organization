import { computed } from 'vue';
import { useLanguageStore } from '../stores/languageStore';

export function useLanguage() {
  const languageStore = useLanguageStore();

  const currentLanguage = computed(() => languageStore.currentLanguage);
  const availableLanguages = computed(() => languageStore.availableLanguages);

  const setLanguage = (lang) => {
    languageStore.setLanguage(lang);
  };

  const t = (key) => {
    // Simple translation function placeholder
    // In production, integrate with i18n library
    return key;
  };

  return {
    currentLanguage,
    availableLanguages,
    setLanguage,
    t
  };
}
