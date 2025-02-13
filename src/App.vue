<script setup>
 import Navbar from './components/Navbar.vue'
 import Navbar2 from './components/Navbar2.vue'
 import { useRoute } from 'vue-router';
 import { RouterView } from 'vue-router';
 import Footer from './components/Footer.vue'

 const route = useRoute();
</script>
<template>
  <div>
    <!-- Conditionally render the navbar -->
    <Navbar v-if="route.name === 'Home' || route.name === 'Register'" />
    <Navbar2 v-else />

    <!-- Page content -->
    <router-view />
    <Footer />
  </div>
  <!-- <RouterView />
  <Footer /> -->
</template>

