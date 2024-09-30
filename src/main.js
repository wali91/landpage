import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router'; // Adjusted path to router
import 'bootstrap';
import { createI18n } from 'vue-i18n';
import id from './language/id.json';
import en from './language/en.json';

// Create the i18n instance
const i18n = createI18n({
    Legacy: false,
    locale: 'id', // set locale
    fallbackLocale: 'id', // set fallback locale
    messages: {
        en,
        id
    }
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#app');
