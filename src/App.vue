<template>
  <NavNav></NavNav>
  <router-view></router-view>
</template>

<script>

import NavNav from './components/nav.vue';
export default {
  name: "AppPage",
  components: {
    NavNav,
  },
};
</script>

<style></style>
