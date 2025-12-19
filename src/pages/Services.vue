<template>
  <div>
    
    <!-- Page Header -->
    <section class="py-20 md:py-28 bg-gradient-to-br from-white to-neutral-50">
      <div class="container-custom px-6">
        <div class="max-w-4xl mx-auto text-center fade-in-up">
          <div class="inline-block px-4 py-2 bg-black/5 rounded-full text-sm font-medium text-black mb-6">
            ✦ Layanan Profesional
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Solusi Lengkap untuk
            <span class="block text-neutral-600">Kebutuhan Anda</span>
          </h1>
          <p class="text-lg md:text-xl text-neutral-600 leading-relaxed">
            Layanan akademik dan digital dengan pendekatan profesional, etis, dan hasil berkualitas tinggi
          </p>
        </div>
      </div>
    </section>

    <!-- ACADEMIC SERVICES - Expandable Cards -->
    <section class="py-20 bg-white">
      <div class="container-custom px-6">
        <div class="max-w-6xl mx-auto">
          
          <div class="mb-12 fade-in-up">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Layanan Akademik</h2>
            <p class="text-lg text-neutral-600">
              Bantuan komprehensif untuk berbagai kebutuhan akademik Anda
            </p>
          </div>
          
          <div class="space-y-6">
            
            <!-- Service 1 -->
            <div class="border-2 border-neutral-200 rounded-2xl overflow-hidden hover:border-black transition-all duration-300 card-hover fade-in stagger-1">
              <button 
                @click="toggleService(1)" 
                class="w-full p-8 text-left flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors duration-200"
              >
                <div class="flex items-center gap-6">
                  <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold mb-2">Pendampingan Skripsi & Tesis</h3>
                    <p class="text-neutral-600">Bimbingan komprehensif untuk penelitian akademik Anda</p>
                  </div>
                </div>
                <svg 
                  class="w-6 h-6 text-neutral-400 transition-transform duration-200" 
                  :class="{ 'rotate-180': expandedService === 1 }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div v-if="expandedService === 1" class="px-8 pb-8 bg-neutral-50 border-t border-neutral-200">
                <div class="grid md:grid-cols-2 gap-8 pt-8">
                  <div>
                    <h4 class="font-bold text-lg mb-4">Masalah yang Diselesaikan</h4>
                    <ul class="space-y-3 text-neutral-600">
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                        <span>Kesulitan menentukan topik dan metodologi penelitian</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                        <span>Waktu terbatas untuk riset dan penulisan</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                        <span>Kesulitan analisis data dan pembahasan hasil</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-4">Yang Anda Dapatkan</h4>
                    <ul class="space-y-3 text-neutral-600">
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Proposal penelitian yang terstruktur dan approved</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Metodologi penelitian yang tepat dan valid</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Analisis data komprehensif dengan pembahasan mendalam</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Bimbingan hingga sidang dan lulus</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Service 2 -->
            <div class="border-2 border-neutral-200 rounded-2xl overflow-hidden hover:border-black transition-all duration-300 card-hover fade-in stagger-2">
              <button 
                @click="toggleService(2)" 
                class="w-full p-8 text-left flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors duration-200"
              >
                <div class="flex items-center gap-6">
                  <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold mb-2">Penulisan Makalah</h3>
                    <p class="text-neutral-600">Penyusunan makalah akademik dengan struktur sistematis</p>
                  </div>
                </div>
                <svg 
                  class="w-6 h-6 text-neutral-400 transition-transform duration-200" 
                  :class="{ 'rotate-180': expandedService === 2 }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div v-if="expandedService === 2" class="px-8 pb-8 bg-neutral-50 border-t border-neutral-200">
                <div class="grid md:grid-cols-2 gap-8 pt-8">
                  <div>
                    <h4 class="font-bold text-lg mb-4">Masalah yang Diselesaikan</h4>
                    <ul class="space-y-3 text-neutral-600">
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                        <span>Kesulitan menyusun struktur makalah yang baik</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                        <span>Referensi yang kurang kredibel dan relevan</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                        <span>Kesulitan analisis kritis dan argumentasi</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-4">Yang Anda Dapatkan</h4>
                    <ul class="space-y-3 text-neutral-600">
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Struktur makalah yang terorganisir dengan baik</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Referensi akademik yang kredibel dan terkini</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Analisis mendalam dengan argumentasi kuat</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Format citation yang benar (APA/IEEE/Harvard)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Service 3 -->
            <div class="border-2 border-neutral-200 rounded-2xl overflow-hidden hover:border-black transition-all duration-300 card-hover fade-in stagger-3">
              <button 
                @click="toggleService(3)" 
                class="w-full p-8 text-left flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors duration-200"
              >
                <div class="flex items-center gap-6">
                  <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold mb-2">Tugas Besar & Proyek Kuliah</h3>
                    <p class="text-neutral-600">Pengerjaan tugas dan proyek dengan standar kualitas tinggi</p>
                  </div>
                </div>
                <svg 
                  class="w-6 h-6 text-neutral-400 transition-transform duration-200" 
                  :class="{ 'rotate-180': expandedService === 3 }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div v-if="expandedService === 3" class="px-8 pb-8 bg-neutral-50 border-t border-neutral-200">
                <div class="grid md:grid-cols-2 gap-8 pt-8">
                  <div>
                    <h4 class="font-bold text-lg mb-4">Masalah yang Diselesaikan</h4>
                    <ul class="space-y-3 text-neutral-600">
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                        <span>Deadline yang ketat dengan banyak tugas</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                        <span>Kesulitan memahami requirement tugas</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                        <span>Kurang familiar dengan tools/software yang diminta</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-4">Yang Anda Dapatkan</h4>
                    <ul class="space-y-3 text-neutral-600">
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Pengerjaan sesuai requirement dengan detail</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Hasil tepat waktu bahkan untuk deadline ketat</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Dokumentasi lengkap dan presentasi siap pakai</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Service 4 -->
            <div class="border-2 border-neutral-200 rounded-2xl overflow-hidden hover:border-black transition-all duration-300 card-hover fade-in stagger-4">
              <button 
                @click="toggleService(4)" 
                class="w-full p-8 text-left flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors duration-200"
              >
                <div class="flex items-center gap-6">
                  <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold mb-2">Literature Review</h3>
                    <p class="text-neutral-600">Tinjauan pustaka mendalam dengan analisis kritis</p>
                  </div>
                </div>
                <svg 
                  class="w-6 h-6 text-neutral-400 transition-transform duration-200" 
                  :class="{ 'rotate-180': expandedService === 4 }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div v-if="expandedService === 4" class="px-8 pb-8 bg-neutral-50 border-t border-neutral-200">
                <div class="grid md:grid-cols-2 gap-8 pt-8">
                  <div>
                    <h4 class="font-bold text-lg mb-4">Masalah yang Diselesaikan</h4>
                    <ul class="space-y-3 text-neutral-600">
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                        <span>Kesulitan menemukan sumber yang relevan dan terkini</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                        <span>Waktu terbatas untuk membaca dan menganalisis jurnal</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                        <span>Kesulitan mensintesis berbagai sumber menjadi narasi koheren</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-4">Yang Anda Dapatkan</h4>
                    <ul class="space-y-3 text-neutral-600">
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Kompilasi sumber akademik yang kredibel dan terkini</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Sintesis komprehensif dengan tema yang koheren</span>
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Identifikasi research gap untuk penelitian Anda</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <!-- DIGITAL SERVICES -->
    <section class="py-20 bg-neutral-50">
      <div class="container-custom px-6">
        <div class="max-w-6xl mx-auto">
          
          <div class="mb-12 fade-in-up">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Layanan Digital</h2>
            <p class="text-lg text-neutral-600">
              Solusi digital marketing untuk meningkatkan kredibilitas dan engagement bisnis
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-6">
            
            <!-- Digital Service 1 -->
            <div class="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 card-hover fade-in stagger-1">
              <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Review Google Maps</h3>
              <p class="text-neutral-600 mb-6 leading-relaxed">
                Tingkatkan kredibilitas bisnis dengan review positif yang autentik dan berkualitas
              </p>
              <div class="text-sm text-neutral-500">
                ✓ Review natural & organik<br>
                ✓ Meningkatkan rating<br>
                ✓ Boost visibilitas lokal
              </div>
            </div>
            
            <!-- Digital Service 2 -->
            <div class="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 card-hover fade-in stagger-2">
              <div class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Peningkatan Watch Time</h3>
              <p class="text-neutral-600 mb-6 leading-relaxed">
                Optimasi konten video untuk meningkatkan durasi tontonan dan engagement penonton
              </p>
              <div class="text-sm text-neutral-500">
                ✓ Algoritma-friendly<br>
                ✓ Engagement tinggi<br>
                ✓ Monetisasi lebih cepat
              </div>
            </div>
            
            <!-- Digital Service 3 -->
            <div class="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 card-hover fade-in stagger-3">
              <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Engagement Media Sosial</h3>
              <p class="text-neutral-600 mb-6 leading-relaxed">
                Strategi peningkatan interaksi dan jangkauan di berbagai platform media sosial
              </p>
              <div class="text-sm text-neutral-500">
                ✓ Reach organik meningkat<br>
                ✓ Engagement autentik<br>
                ✓ Brand awareness lebih kuat
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-black text-white">
      <div class="container-custom px-6">
        <div class="max-w-4xl mx-auto text-center fade-in-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
            Butuh Konsultasi Layanan?
          </h2>
          <p class="text-lg text-neutral-200 mb-8 leading-relaxed">
            Tim kami siap membantu Anda memilih layanan yang tepat sesuai kebutuhan
          </p>
          <router-link
            to="/contact"
            class="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-neutral-100 transition-all duration-200 hover-lift"
          >
            Hubungi Kami Sekarang
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// Expandable service state
const expandedService = ref(null)

const toggleService = (serviceId) => {
  expandedService.value = expandedService.value === serviceId ? null : serviceId
}
</script>
