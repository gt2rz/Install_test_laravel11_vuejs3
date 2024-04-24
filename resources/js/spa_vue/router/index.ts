import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Analitics from "../views/Analitics.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/analitics",
        name: "Analitics",
        component: Analitics,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
