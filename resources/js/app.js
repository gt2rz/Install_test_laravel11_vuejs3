import './bootstrap';
import { createApp } from 'vue';

import Welcome from './components/Welcome.vue';

const app = createApp({
    components: {
        Welcome,
    },
}).mount('#app');

app.config.errorHandler = (err) => {
    console.error(err);
};
