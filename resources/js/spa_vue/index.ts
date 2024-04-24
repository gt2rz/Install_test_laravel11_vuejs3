import { createApp } from "vue";

import App from "./app.vue";
import router from "./router";

const spa = createApp(App);

spa.use(router);

spa.config.errorHandler = (err) => {
    console.error("LOG ERROR>", err);
    // send to error tracking service
};

export default spa;
