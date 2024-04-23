import { createApp } from "vue";

import App from "./app.vue";

const spa = createApp(App);

spa.config.errorHandler = (err) => {
    console.error("LOG ERROR>", err);
    // send to error tracking service
};

export default spa;
