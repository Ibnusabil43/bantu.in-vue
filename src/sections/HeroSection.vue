<template>
  <!-- INTRO SECTION - Editorial split layout, NOT a hero -->
  <section class="section-spacing section-white relative">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Left: Content -->
        <div ref="contentRef" class="opacity-0">
          <!-- Logo - subtle presence -->
          <div class="mb-8">
            <img 
              src="/bantu.in-logo-white.png" 
              alt="bantu.in"
              class="w-16 h-16 rounded-2xl border border-neutral-200"
            />
          </div>

          <!-- Restrained heading - max 60% viewport width enforced -->
          <h1 class="mb-6">
            Solusi Profesional untuk Kebutuhan Akademik dan Digital Anda
          </h1>

          <!-- Lead text - comfortable reading -->
          <p class="lead-text mb-8">
            bantu.in adalah platform layanan akademik dan digital yang mengutamakan 
            kualitas, etika, dan kerahasiaan dalam setiap pengerjaan.
          </p>

          <!-- Inline CTAs - proportional, not dominant -->
          <div class="flex flex-col sm:flex-row gap-4 items-start">
            <router-link
              to="/contact"
              class="inline-flex items-center px-6 py-3 bg-black text-white font-semibold text-sm rounded-lg hover:bg-neutral-800 transition-all duration-150 hover-lift"
            >
              Konsultasi Gratis
            </router-link>
            <router-link
              to="/services"
              class="inline-flex items-center px-6 py-3 border-2 border-neutral-300 text-black font-semibold text-sm rounded-lg hover:border-black transition-all duration-150"
            >
              Lihat Layanan
              <span class="ml-2">→</span>
            </router-link>
          </div>
        </div>

        <!-- Right: Visual placeholder -->
        <div ref="visualRef" class="opacity-0 bg-neutral-100 rounded-2xl aspect-square lg:aspect-auto lg:h-96 flex items-center justify-center">
          <div class="text-center p-8">
            <div class="w-20 h-20 mx-auto mb-4 bg-neutral-200 rounded-full flex items-center justify-center">
              <span class="text-4xl">📚</span>
            </div>
            <p class="text-secondary text-sm max-w-xs mx-auto">
              Visual representation area for professional service illustration
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const contentRef = ref(null)
const visualRef = ref(null)

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

onMounted(() => {
  if (prefersReducedMotion) {
    gsap.set([contentRef.value, visualRef.value], { opacity: 1 })
    return
  }

  gsap.timeline()
    .to(contentRef.value, {
      opacity: 1,
      duration: 0.2,
      ease: 'power2.out'
    })
    .to(visualRef.value, {
      opacity: 1,
      duration: 0.18,
      ease: 'power2.out'
    }, '-=0.1')
})
</script>
