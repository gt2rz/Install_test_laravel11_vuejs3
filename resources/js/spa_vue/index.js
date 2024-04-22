import { createApp } from 'vue';

import App from './app.vue';

const spa = createApp(App);

spa.config.errorHandler = (err) => {
    console.error(err);
};

export default spa;
