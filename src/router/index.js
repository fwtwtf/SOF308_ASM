import { createRouter, createWebHistory } from 'vue-router';

import Lab3Bai1 from "../components/ASM/bai4.vue"

import chitiet from "../components/ASM/postdetil.vue"

import TrangChu from "../components/ASM/home.vue"








const routes = [

    { path: '/Post', component: Lab3Bai1 },
    { path: '/Post/PostDeteil', component: chitiet },
    { path: '/TrangChu', component: TrangChu }



];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;