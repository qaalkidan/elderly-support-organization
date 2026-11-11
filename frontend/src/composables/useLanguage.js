import { computed } from 'vue';
import { useLanguageStore } from '../stores/languageStore';
import { translations } from '../locales/translations';

const resolvePath = (obj, path) =>
  path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);

export function useLanguage() {
  const languageStore = useLanguageStore();

  const currentLanguage = computed(() => languageStore.currentLanguage);
  const availableLanguages = computed(() => languageStore.availableLanguages);
  const isAmharic = computed(() => languageStore.isAmharic);
  const messages = computed(() => translations[languageStore.currentLanguage] || translations.en);

  const setLanguage = (lang) => {
    languageStore.setLanguage(lang);
  };

  const t = (key, params = null) => {
    const activeSet = translations[languageStore.currentLanguage] || translations.en;
    let value = resolvePath(activeSet, key);
    if (value === undefined) {
      value = resolvePath(translations.en, key);
    }
    if (value === undefined) return key;

    if (typeof value === 'string' && params) {
      return Object.entries(params).reduce(
        (str, [paramKey, paramVal]) => str.replaceAll(`{${paramKey}}`, String(paramVal)),
        value
      );
    }
    return value;
  };

  return {
    currentLanguage,
    availableLanguages,
    isAmharic,
    messages,
    setLanguage,
    t
  };
}
