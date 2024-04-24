import { createApp } from "vue";

import App from "./app.vue";
import router from "./router";
import { createPinia } from "pinia";

const pinia = createPinia();
const spa = createApp(App);

spa.use(pinia);
spa.use(router);

spa.config.errorHandler = (err) => {
    console.error("LOG ERROR>", err);
    // send to error tracking service
};

export default spa;
