<template>
  <!-- SERVICES SECTION - Editorial style, description-first -->
  <section class="section-spacing section-white">
    <div class="container-custom">
      
      <!-- Section header -->
      <div class="mb-16">
        <h2 class="mb-4">Layanan Kami</h2>
        <p class="text-secondary max-w-2xl">
          Solusi lengkap untuk berbagai kebutuhan akademik dan digital dengan pendekatan profesional
        </p>
      </div>

      <!-- Services list - editorial layout -->
      <div ref="servicesRef" class="space-y-16">
        
        <!-- Academic Services -->
        <div class="stagger-item grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-neutral-200">
          <div class="lg:col-span-4">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-white text-lg">📚</span>
              </div>
              <h3 class="text-black">Bantuan Akademik</h3>
            </div>
            <p class="text-secondary">
              Pendampingan profesional untuk berbagai kebutuhan akademik Anda
            </p>
          </div>
          
          <div class="lg:col-span-8">
            <dl class="space-y-6">
              <div>
                <dt class="font-semibold text-black mb-2">Pendampingan Skripsi & Tesis</dt>
                <dd class="text-secondary">Bantuan komprehensif dari perencanaan hingga finalisasi penelitian akademik Anda dengan metodologi yang tepat</dd>
              </div>
              <div>
                <dt class="font-semibold text-black mb-2">Penulisan Makalah</dt>
                <dd class="text-secondary">Penyusunan makalah akademik dengan struktur yang sistematis dan referensi yang kredibel</dd>
              </div>
              <div>
                <dt class="font-semibold text-black mb-2">Tugas Besar & Proyek</dt>
                <dd class="text-secondary">Pengerjaan tugas kuliah dan proyek dengan standar kualitas tinggi</dd>
              </div>
              <div>
                <dt class="font-semibold text-black mb-2">Literature Review</dt>
                <dd class="text-secondary">Tinjauan pustaka mendalam dengan analisis kritis terhadap sumber-sumber terkini</dd>
              </div>
            </dl>
          </div>
        </div>

        <!-- Digital Services -->
        <div class="stagger-item grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div class="lg:col-span-4">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="text-white text-lg">💻</span>
              </div>
              <h3 class="text-black">Layanan Digital</h3>
            </div>
            <p class="text-secondary">
              Solusi digital untuk meningkatkan kehadiran dan engagement online Anda
            </p>
          </div>
          
          <div class="lg:col-span-8">
            <dl class="space-y-6">
              <div>
                <dt class="font-semibold text-black mb-2">Review Google Maps</dt>
                <dd class="text-secondary">Peningkatan kredibilitas bisnis melalui review Google Maps yang autentik dan berkualitas</dd>
              </div>
              <div>
                <dt class="font-semibold text-black mb-2">Peningkatan Watch Time</dt>
                <dd class="text-secondary">Optimasi konten video untuk meningkatkan durasi tontonan dan engagement</dd>
              </div>
              <div>
                <dt class="font-semibold text-black mb-2">Engagement Media Sosial</dt>
                <dd class="text-secondary">Strategi peningkatan interaksi dan jangkauan di platform media sosial</dd>
              </div>
            </dl>
          </div>
        </div>

      </div>

      <!-- CTA - minimal -->
      <div class="mt-16 text-center">
        <router-link
          to="/services"
          class="inline-flex items-center px-6 py-3 border-2 border-neutral-300 text-black font-semibold text-sm rounded-lg hover:border-black transition-all duration-150"
        >
          Lihat Detail Lengkap
          <span class="ml-2">→</span>
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useStaggerReveal } from '../composables/useStaggerReveal'

const servicesRef = ref(null)
useStaggerReveal(servicesRef, { stagger: 0.1 })
</script>
