import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { useLanguageStore } from './stores/languageStore';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
useLanguageStore(pinia).initLanguage();
app.use(router);

app.mount('#app');
