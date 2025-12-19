<template>
  <div>
    <!-- Hero Section -->
    <section class="py-24 section-dark">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
          Layanan <span class="text-gray-300">Kami</span>
        </h1>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Solusi lengkap untuk berbagai kebutuhan akademik dan digital profesional Anda
        </p>
      </div>
    </section>

    <AcademicServicesSection />
    <DigitalServicesSection />
    
    <!-- Why Choose Us Section -->
    <section class="py-24 section-white">
      <div class="container-custom">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center text-black">Mengapa Memilih Layanan Kami?</h2>
          
          <div ref="whyRef" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card class="stagger-item group">
              <div class="flex items-start">
                <div class="text-3xl mr-4 transform group-hover:scale-110 transition-transform duration-300">⚡</div>
                <div>
                  <h4 class="text-xl font-bold mb-2 text-black">Proses Cepat dan Efisien</h4>
                  <p class="text-gray-700 leading-relaxed">
                    Kami memahami pentingnya waktu bagi Anda. Setiap proyek ditangani dengan sistem manajemen waktu yang baik untuk memastikan deadline terpenuhi.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card class="stagger-item group">
              <div class="flex items-start">
                <div class="text-3xl mr-4 transform group-hover:scale-110 transition-transform duration-300">👥</div>
                <div>
                  <h4 class="text-xl font-bold mb-2 text-black">Tim Ahli Berpengalaman</h4>
                  <p class="text-gray-700 leading-relaxed">
                    Didukung oleh tim profesional yang memiliki keahlian di berbagai bidang akademik dan digital marketing.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card class="stagger-item group">
              <div class="flex items-start">
                <div class="text-3xl mr-4 transform group-hover:scale-110 transition-transform duration-300">💬</div>
                <div>
                  <h4 class="text-xl font-bold mb-2 text-black">Komunikasi Transparan</h4>
                  <p class="text-gray-700 leading-relaxed">
                    Kami menjaga komunikasi yang terbuka dan responsif selama proses pengerjaan untuk memastikan hasil sesuai harapan.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card class="stagger-item group">
              <div class="flex items-start">
                <div class="text-3xl mr-4 transform group-hover:scale-110 transition-transform duration-300">🔄</div>
                <div>
                  <h4 class="text-xl font-bold mb-2 text-black">Revisi Hingga Puas</h4>
                  <p class="text-gray-700 leading-relaxed">
                    Kepuasan klien adalah prioritas kami. Kami menyediakan revisi untuk memastikan hasil akhir sesuai dengan ekspektasi Anda.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <CTASection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AcademicServicesSection from '../sections/AcademicServicesSection.vue'
import DigitalServicesSection from '../sections/DigitalServicesSection.vue'
import CTASection from '../sections/CTASection.vue'
import Card from '../components/Card.vue'
import { useStaggerReveal } from '../composables/useStaggerReveal'

const whyRef = ref(null)
useStaggerReveal(whyRef, { stagger: 0.15 })
</script>
