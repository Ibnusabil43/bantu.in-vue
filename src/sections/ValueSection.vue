<template>
  <section class="py-24 section-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-black">Mengapa Memilih bantu.in?</h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          Kami memberikan lebih dari sekedar layanan - kami memberikan solusi terpercaya
        </p>
      </div>

      <div ref="cardsRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Value 1 -->
        <Card class="stagger-item group">
          <div class="text-5xl mb-6 transition-transform group-hover:scale-110 duration-300">💼</div>
          <h3 class="text-xl font-bold mb-3 text-black">Profesionalisme</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Pengerjaan berkualitas tinggi dengan standar profesional
          </p>
        </Card>

        <!-- Value 2 -->
        <Card class="stagger-item group">
          <div class="text-5xl mb-6 transition-transform group-hover:scale-110 duration-300">📚</div>
          <h3 class="text-xl font-bold mb-3 text-black">Etika Akademik</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Mengutamakan integritas dan standar akademik yang tinggi
          </p>
        </Card>

        <!-- Value 3 -->
        <Card class="stagger-item group">
          <div class="text-5xl mb-6 transition-transform group-hover:scale-110 duration-300">🔒</div>
          <h3 class="text-xl font-bold mb-3 text-black">Kerahasiaan Terjamin</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Data dan informasi klien dijaga dengan ketat dan aman
          </p>
        </Card>

        <!-- Value 4 -->
        <Card class="stagger-item group">
          <div class="text-5xl mb-6 transition-transform group-hover:scale-110 duration-300">⭐</div>
          <h3 class="text-xl font-bold mb-3 text-black">Kualitas Terpercaya</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Hasil kerja berkualitas tinggi sesuai standar profesional
          </p>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Card from '../components/Card.vue'
import { useStaggerReveal } from '../composables/useStaggerReveal'

const cardsRef = ref(null)
useStaggerReveal(cardsRef, { stagger: 0.15 })
</script>
