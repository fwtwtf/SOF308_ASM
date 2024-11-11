import { createRouter, createWebHistory } from 'vue-router';

import Lab3Bai1 from "../components/ASM/bai4.vue"




const routes = [

    { path: '/TrangChu', component: Lab3Bai1 },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;