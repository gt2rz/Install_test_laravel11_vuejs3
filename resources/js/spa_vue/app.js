import { createApp } from 'vue';

import DefaultLayout from './layouts/DefaultLayout.vue';

// Create a new Vue instance and mount it to the #app element
// DefaultLayout is the root component of the Vue instance
const spa = createApp(DefaultLayout);

// Define the errorHandler method to log errors to the console
spa.config.errorHandler = (err) => {
    console.error(err);
};

export default spa;
