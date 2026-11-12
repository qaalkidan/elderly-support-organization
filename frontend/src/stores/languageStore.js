import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

const STORAGE_KEY = 'language';

const readStoredLanguage = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const writeStoredLanguage = (lang) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Ignore storage errors in restricted browsing contexts
  }
};

const readQueryLanguage = () => {
  try {
    if (typeof window === 'undefined') return null;
    return new URLSearchParams(window.location.search).get('lang');
  } catch {
    return null;
  }
};

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref('am');
  const availableLanguages = ref(['am', 'en']);

  const isAmharic = computed(() => currentLanguage.value === 'am');

  const applyDocumentLang = (lang) => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.setAttribute('translate', 'no');
      document.documentElement.classList.add('notranslate');
    }
  };

  const normalizeLang = (lang) => {
    if (typeof lang !== 'string') return null;
    const normalized = lang.trim().toLowerCase();
    return availableLanguages.value.includes(normalized) ? normalized : null;
  };

  const setLanguage = (lang) => {
    const normalized = normalizeLang(lang);
    if (normalized) {
      currentLanguage.value = normalized;
      writeStoredLanguage(normalized);
      applyDocumentLang(normalized);
    }
  };

  const toggleLanguage = () => {
    setLanguage(currentLanguage.value === 'am' ? 'en' : 'am');
  };

  const initLanguage = () => {
    const queryLang = normalizeLang(readQueryLanguage());
    const storedLang = normalizeLang(readStoredLanguage());

    if (queryLang) {
      currentLanguage.value = queryLang;
      writeStoredLanguage(queryLang);
    } else if (storedLang) {
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
