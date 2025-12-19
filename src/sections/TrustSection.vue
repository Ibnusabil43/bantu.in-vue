<template>
  <!-- TRUST & CREDIBILITY SECTION -->
  <section class="section-spacing section-light">
    <div class="container-narrow">
      
      <!-- Section header - simple and clear -->
      <div class="mb-16">
        <h2 class="mb-4">Komitmen Kami</h2>
        <p class="text-secondary max-w-2xl">
          Setiap layanan yang kami berikan dijalankan dengan standar profesional tertinggi
        </p>
      </div>

      <!-- Trust statements grid -->
      <div ref="statementsRef" class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        
        <div class="stagger-item">
          <div class="mb-4">
            <div class="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
              <span class="text-white text-xl">🔒</span>
            </div>
          </div>
          <h4 class="mb-3 text-black">Kerahasiaan Terjaga</h4>
          <p class="text-secondary leading-relaxed">
            Informasi dan data klien dijamin kerahasiaannya dengan sistem keamanan yang ketat
          </p>
        </div>

        <div class="stagger-item">
          <div class="mb-4">
            <div class="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
              <span class="text-white text-xl">📚</span>
            </div>
          </div>
          <h4 class="mb-3 text-black">Etika Profesional</h4>
          <p class="text-secondary leading-relaxed">
            Mengikuti kode etik akademik dan profesional dalam setiap pengerjaan proyek
          </p>
        </div>

        <div class="stagger-item">
          <div class="mb-4">
            <div class="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
              <span class="text-white text-xl">⭐</span>
            </div>
          </div>
          <h4 class="mb-3 text-black">Kualitas Terpercaya</h4>
          <p class="text-secondary leading-relaxed">
            Hasil kerja berkualitas tinggi dengan proses review dan quality assurance menyeluruh
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useStaggerReveal } from '../composables/useStaggerReveal'

const statementsRef = ref(null)
useStaggerReveal(statementsRef, { stagger: 0.08 })
</script>
