<template>
  <div id="app">
    <Navbar />
    <main class="min-h-screen">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './layout/Navbar.vue'
import Footer from './layout/Footer.vue'
</script>

<style>
/* Global styles are handled in CSS files */
</style>
