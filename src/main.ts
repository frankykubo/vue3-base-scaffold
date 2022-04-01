import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import '@/assets/styles/tailwind.css';
import translations from './lang/all_translations';
import icons from '@/helpers/bootstrap/icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';

icons.addIconsToLibrary();

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: translations,
});

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(createPinia())
  .use(i18n)
  .provide('i18n_instance', i18n)
  .mount('#app');
