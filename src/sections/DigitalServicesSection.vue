<template>
  <section class="py-24 section-light">
    <div class="container-custom">
      <div class="mb-16 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-black">Layanan Digital</h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          Solusi digital profesional untuk meningkatkan presence dan engagement Anda
        </p>
      </div>

      <div ref="servicesRef" class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Digital Service 1 -->
        <Card class="stagger-item group">
          <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🗺️</div>
          <h3 class="text-2xl font-bold mb-4 text-black">Bantuan Review Google Maps</h3>
          <p class="text-gray-700 leading-relaxed mb-6">
            Tingkatkan reputasi bisnis Anda dengan review positif yang autentik dan berkualitas di Google Maps untuk meningkatkan kepercayaan pelanggan.
          </p>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Review positif berkualitas</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Peningkatan rating bisnis</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Strategi manajemen reputasi</span>
            </li>
          </ul>
        </Card>

        <!-- Digital Service 2 -->
        <Card class="stagger-item group">
          <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">⏱️</div>
          <h3 class="text-2xl font-bold mb-4 text-black">Peningkatan Watch Time</h3>
          <p class="text-gray-700 leading-relaxed mb-6">
            Optimalkan performa konten video Anda dengan strategi peningkatan watch time yang efektif untuk mencapai monetisasi dan pertumbuhan channel.
          </p>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Strategi konten engagement</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Optimasi retention rate</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Analisis performa video</span>
            </li>
          </ul>
        </Card>

        <!-- Digital Service 3 -->
        <Card class="stagger-item group">
          <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📱</div>
          <h3 class="text-2xl font-bold mb-4 text-black">Engagement Media Sosial</h3>
          <p class="text-gray-700 leading-relaxed mb-6">
            Tingkatkan interaksi dan jangkauan konten media sosial Anda dengan strategi engagement yang terukur dan organik.
          </p>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Strategi konten media sosial</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Pertumbuhan follower organik</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Analisis performa konten</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Card from '../components/Card.vue'
import { useStaggerReveal } from '../composables/useStaggerReveal'

const servicesRef = ref(null)
useStaggerReveal(servicesRef, { stagger: 0.2 })
</script>
