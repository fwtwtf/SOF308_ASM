import { createRouter, createWebHistory } from 'vue-router';

import Lab3Bai1 from "../components/ASM/bai4.vue"

import chitiet from "../components/ASM/postdetil.vue"








const routes = [

    { path: '/Post', component: Lab3Bai1 },
    { path: '/TrangChu/PostDeteil', component: chitiet }



];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;