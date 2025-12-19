<template>
  <!-- HOW IT WORKS SECTION - Timeline layout -->
  <section class="section-spacing section-light">
    <div class="container-narrow">
      
      <!-- Section header -->
      <div class="mb-16">
        <h2 class="mb-4">Cara Kerja</h2>
        <p class="text-secondary max-w-2xl">
          Proses yang terstruktur dan transparan untuk memastikan hasil terbaik
        </p>
      </div>

      <!-- Steps - vertical timeline -->
      <div ref="stepsRef" class="space-y-12">
        
        <!-- Step 1 -->
        <div class="stagger-item flex gap-6">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold text-sm">
              01
            </div>
          </div>
          <div class="flex-1 pt-1">
            <h4 class="mb-2 text-black">Konsultasi Awal</h4>
            <p class="text-secondary leading-relaxed">
              Diskusikan kebutuhan Anda dengan tim kami untuk memahami scope dan requirements proyek secara detail
            </p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="stagger-item flex gap-6">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold text-sm">
              02
            </div>
          </div>
          <div class="flex-1 pt-1">
            <h4 class="mb-2 text-black">Perencanaan & Proposal</h4>
            <p class="text-secondary leading-relaxed">
              Kami menyusun rencana kerja lengkap beserta timeline dan estimasi biaya yang transparan
            </p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="stagger-item flex gap-6">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold text-sm">
              03
            </div>
          </div>
          <div class="flex-1 pt-1">
            <h4 class="mb-2 text-black">Pengerjaan</h4>
            <p class="text-secondary leading-relaxed">
              Tim profesional kami mengerjakan proyek dengan standar kualitas tinggi dan komunikasi berkala
            </p>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="stagger-item flex gap-6">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold text-sm">
              04
            </div>
          </div>
          <div class="flex-1 pt-1">
            <h4 class="mb-2 text-black">Review & Revisi</h4>
            <p class="text-secondary leading-relaxed">
              Hasil kerja di-review bersama dan dilakukan revisi sesuai feedback hingga memenuhi ekspektasi Anda
            </p>
          </div>
        </div>

        <!-- Step 5 -->
        <div class="stagger-item flex gap-6">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold text-sm">
              05
            </div>
          </div>
          <div class="flex-1 pt-1">
            <h4 class="mb-2 text-black">Penyerahan Final</h4>
            <p class="text-secondary leading-relaxed">
              Proyek diserahkan dalam format yang disepakati dengan dokumentasi lengkap dan support lanjutan
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useStaggerReveal } from '../composables/useStaggerReveal'

const stepsRef = ref(null)
useStaggerReveal(stepsRef, { stagger: 0.08 })
</script>
