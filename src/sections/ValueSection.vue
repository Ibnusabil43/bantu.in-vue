<template>
  <!-- WHY CHOOSE US SECTION - Bullet-driven, value-focused -->
  <section class="section-spacing section-white">
    <div class="container-custom">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left: Header -->
        <div class="lg:col-span-5">
          <h2 class="mb-4">Mengapa Memilih bantu.in</h2>
          <p class="text-secondary">
            Keunggulan yang membedakan kami dari layanan lainnya
          </p>
        </div>

        <!-- Right: Value points -->
        <div class="lg:col-span-7">
          <div ref="valuesRef" class="space-y-8">
            
            <div class="stagger-item">
              <div class="flex items-start gap-4">
                <div class="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 class="mb-2 text-black">Tim Profesional Berpengalaman</h4>
                  <p class="text-secondary">
                    Dikerjakan oleh tim dengan latar belakang akademik dan profesional yang kredibel di bidangnya masing-masing
                  </p>
                </div>
              </div>
            </div>

            <div class="stagger-item">
              <div class="flex items-start gap-4">
                <div class="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 class="mb-2 text-black">Proses Transparan & Terstruktur</h4>
                  <p class="text-secondary">
                    Setiap tahap pengerjaan dikomunikasikan dengan jelas, timeline yang realistis, dan update berkala
                  </p>
                </div>
              </div>
            </div>

            <div class="stagger-item">
              <div class="flex items-start gap-4">
                <div class="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 class="mb-2 text-black">Garansi Kepuasan</h4>
                  <p class="text-secondary">
                    Revisi tanpa batas hingga hasil memenuhi standar dan ekspektasi Anda dengan quality assurance ketat
                  </p>
                </div>
              </div>
            </div>

            <div class="stagger-item">
              <div class="flex items-start gap-4">
                <div class="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 class="mb-2 text-black">Keamanan Data Terjamin</h4>
                  <p class="text-secondary">
                    Sistem keamanan berlapis untuk melindungi kerahasiaan informasi dan dokumen klien
                  </p>
                </div>
              </div>
            </div>

            <div class="stagger-item">
              <div class="flex items-start gap-4">
                <div class="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 class="mb-2 text-black">Harga Kompetitif & Fleksibel</h4>
                  <p class="text-secondary">
                    Pricing yang fair dengan berbagai paket yang dapat disesuaikan dengan budget dan kebutuhan Anda
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useStaggerReveal } from '../composables/useStaggerReveal'

const valuesRef = ref(null)
useStaggerReveal(valuesRef, { stagger: 0.08 })
</script>
