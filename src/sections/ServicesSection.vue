<template>
  <section class="py-24 section-light">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-black">Layanan Kami</h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          Solusi lengkap untuk berbagai kebutuhan akademik dan digital Anda
        </p>
      </div>

      <div ref="servicesRef" class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Academic Services -->
        <Card class="stagger-item group">
          <h3 class="text-2xl font-bold mb-6 text-black">Bantuan Akademik</h3>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start">
              <span class="text-black mr-3 text-lg font-bold">•</span>
              <span>Pendampingan Skripsi & Tesis</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 text-lg font-bold">•</span>
              <span>Bantuan Penulisan Makalah</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 text-lg font-bold">•</span>
              <span>Tugas Besar & Proyek Kuliah</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 text-lg font-bold">•</span>
              <span>Literature Review</span>
            </li>
          </ul>
          <router-link
            to="/services"
            class="inline-block mt-8 text-black font-semibold hover:text-gray-600 transition-colors"
          >
            Selengkapnya →
          </router-link>
        </Card>

        <!-- Digital Services -->
        <Card class="stagger-item group">
          <h3 class="text-2xl font-bold mb-6 text-black">Layanan Digital</h3>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start">
              <span class="text-black mr-3 text-lg font-bold">•</span>
              <span>Bantuan Review Google Maps</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 text-lg font-bold">•</span>
              <span>Peningkatan Watch Time</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 text-lg font-bold">•</span>
              <span>Engagement Media Sosial</span>
            </li>
          </ul>
          <router-link
            to="/services"
            class="inline-block mt-8 text-black font-semibold hover:text-gray-600 transition-colors"
          >
            Selengkapnya →
          </router-link>
        </Card>
      </div>

      <div class="text-center mt-12">
        <Button tag="router-link" to="/services">
          Lihat Semua Layanan
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import { useStaggerReveal } from '../composables/useStaggerReveal'

const servicesRef = ref(null)
useStaggerReveal(servicesRef, { stagger: 0.2 })
</script>
