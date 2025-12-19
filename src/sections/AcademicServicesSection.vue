<template>
  <section class="py-24 section-white">
    <div class="container-custom">
      <div class="mb-16 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-black">Bantuan Akademik</h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          Dukungan profesional untuk berbagai kebutuhan akademik Anda
        </p>
      </div>

      <div ref="servicesRef" class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <!-- Service 1: Skripsi & Tesis -->
        <Card class="stagger-item group">
          <div class="mb-6">
            <h3 class="text-2xl font-bold mb-3 text-black">Skripsi & Tesis</h3>
            <div class="w-16 h-1 bg-black"></div>
          </div>
          <p class="text-gray-700 leading-relaxed mb-6">
            Layanan pendampingan lengkap untuk penyusunan skripsi dan tesis, dari penentuan topik hingga sidang akhir. Kami membantu Anda merumuskan masalah penelitian, menyusun kerangka teoritis, melakukan analisis data, dan menyempurnakan naskah.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Konsultasi penentuan topik dan rumusan masalah</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Penyusunan kerangka penelitian</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Bantuan analisis data dan metodologi</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Review dan revisi naskah</span>
            </li>
          </ul>
        </Card>

        <!-- Service 2: Makalah -->
        <Card class="stagger-item group">
          <div class="mb-6">
            <h3 class="text-2xl font-bold mb-3 text-black">Makalah</h3>
            <div class="w-16 h-1 bg-black"></div>
          </div>
          <p class="text-gray-700 leading-relaxed mb-6">
            Bantuan penyusunan makalah akademik untuk berbagai mata kuliah. Kami memastikan makalah Anda memiliki struktur yang jelas, argumentasi yang kuat, dan referensi yang kredibel.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Riset topik dan pengumpulan referensi</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Penyusunan outline dan struktur makalah</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Penulisan sesuai format akademik</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Proofreading dan editing</span>
            </li>
          </ul>
        </Card>

        <!-- Service 3: Tugas Besar -->
        <Card class="stagger-item group">
          <div class="mb-6">
            <h3 class="text-2xl font-bold mb-3 text-black">Tugas Besar & Proyek</h3>
            <div class="w-16 h-1 bg-black"></div>
          </div>
          <p class="text-gray-700 leading-relaxed mb-6">
            Dukungan untuk menyelesaikan tugas besar kuliah, termasuk proyek analisis, studi kasus, dan presentasi. Kami membantu Anda memahami konsep, menganalisis data, dan menyajikan hasil dengan profesional.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Analisis kasus dan pemecahan masalah</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Pengolahan dan interpretasi data</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Penyusunan laporan dan dokumentasi</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Presentasi dan visualisasi hasil</span>
            </li>
          </ul>
        </Card>

        <!-- Service 4: Literature Review -->
        <Card class="stagger-item group">
          <div class="mb-6">
            <h3 class="text-2xl font-bold mb-3 text-black">Literature Review</h3>
            <div class="w-16 h-1 bg-black"></div>
          </div>
          <p class="text-gray-700 leading-relaxed mb-6">
            Layanan penyusunan tinjauan pustaka yang komprehensif dan sistematis. Kami membantu mengidentifikasi, menganalisis, dan mensintesis literatur yang relevan untuk memperkuat landasan teoritis karya ilmiah Anda.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Pencarian dan seleksi sumber literatur terkini</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Analisis dan sintesis teori</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Identifikasi research gap</span>
            </li>
            <li class="flex items-start">
              <span class="text-black mr-3 font-bold">✓</span>
              <span>Penyusunan kerangka teoritis</span>
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
useStaggerReveal(servicesRef, { stagger: 0.15 })
</script>
