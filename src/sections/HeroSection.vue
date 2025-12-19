<template>
  <section class="min-h-screen flex items-center justify-center section-dark">
    <div class="container-custom text-center py-20">
      <!-- Logo -->
      <div ref="logoRef" class="flex justify-center mb-8 opacity-0">
        <img 
          src="/bantu.in-logo-white.png" 
          alt="bantu.in Logo"
          class="w-24 h-24 rounded-2xl shadow-2xl"
        />
      </div>

      <!-- Headline -->
      <div ref="headlineRef" class="opacity-0">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
          Solusi Profesional untuk<br />
          <span class="text-gray-300">Kebutuhan Akademik Anda</span>
        </h1>
      </div>

      <!-- Subheadline -->
      <p ref="subheadlineRef" class="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed opacity-0">
        Layanan bantuan akademik dan digital yang mengutamakan kualitas, etika, dan kerahasiaan
      </p>

      <!-- Description -->
      <p ref="descriptionRef" class="text-base md:text-lg text-white/90 mb-12 max-w-2xl mx-auto opacity-0">
        bantu.in hadir sebagai mitra terpercaya untuk mendampingi Anda dalam menyelesaikan berbagai kebutuhan akademik dan digital dengan pendekatan profesional dan beretika.
      </p>

      <!-- CTA Buttons -->
      <div ref="ctaRef" class="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0">
        <router-link
          to="/contact"
          class="w-full sm:w-auto px-12 py-4 bg-white text-black font-semibold text-center rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
        >
          Konsultasi Sekarang
        </router-link>
        <router-link
          to="/services"
          class="w-full sm:w-auto px-12 py-4 bg-transparent border-2 border-white text-white font-semibold text-center rounded-lg hover:bg-white hover:text-black transition-all duration-300"
        >
          Lihat Layanan Kami
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const logoRef = ref(null)
const headlineRef = ref(null)
const subheadlineRef = ref(null)
const descriptionRef = ref(null)
const ctaRef = ref(null)

onMounted(() => {
  if (prefersReducedMotion) {
    // Show all elements immediately if reduced motion is preferred
    gsap.set([logoRef.value, headlineRef.value, subheadlineRef.value, descriptionRef.value, ctaRef.value], { opacity: 1 })
    return
  }

  // Faster, more subtle animations
  const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } })

  timeline
    .to(logoRef.value, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
    })
    .to(headlineRef.value, {
      opacity: 1,
      y: 0,
      duration: 0.4,
    }, '-=0.2')
    .to(subheadlineRef.value, {
      opacity: 1,
      y: 0,
      duration: 0.3,
    }, '-=0.2')
    .to(descriptionRef.value, {
      opacity: 1,
      y: 0,
      duration: 0.3,
    }, '-=0.15')
    .to(ctaRef.value, {
      opacity: 1,
      y: 0,
      duration: 0.3,
    }, '-=0.15')
})
</script>
