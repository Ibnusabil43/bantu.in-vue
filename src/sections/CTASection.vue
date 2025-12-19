<template>
  <section class="py-24 section-dark">
    <div ref="ctaRef" class="container-custom text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
        Siap Memulai Proyek Anda?
      </h2>
      <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
        Konsultasikan kebutuhan Anda dengan tim profesional kami dan dapatkan solusi terbaik
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button variant="primary-light" tag="router-link" to="/contact">
          Hubungi Kami Sekarang
        </Button>
        <Button variant="outline-light" tag="router-link" to="/services">
          Pelajari Lebih Lanjut
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Button from '../components/Button.vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const ctaRef = ref(null)
useScrollReveal(ctaRef, { animationClass: 'animate-fade-in' })
</script>
