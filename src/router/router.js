import {createRouter, createWebHistory} from "vue-router";
import loginPage from "@/pages/LoginPage";
import mainPage from "@/pages/MainPage";

const routes = [
    {
        path: '/',
        component: loginPage
    },
    {
        path: '/admin',
        component: mainPage
    },
    {
        path: '/user',
        component: mainPage
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;