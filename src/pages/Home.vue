<template>
  <div>
    
    <!-- SECTION 1: BRAND INTRO - Split Layout -->
    <section class="py-20 md:py-28 bg-white overflow-hidden">
      <div class="container-custom px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          <!-- Text Content -->
          <div class="fade-in">
            <div class="inline-block px-4 py-2 bg-black/5 rounded-full text-sm font-medium text-black mb-6">
              ✦ Layanan Profesional
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Wujudkan Kesuksesan
              <span class="block text-neutral-600">Akademik & Digital Anda</span>
            </h1>
            
            <p class="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
              Kami menyediakan layanan bantuan akademik dan digital yang profesional, etis, dan terpercaya. 
              Didukung oleh tim ahli berpengalaman untuk memastikan hasil berkualitas tinggi.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link
                to="/contact"
                class="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-neutral-800 transition-all duration-200 hover-lift"
              >
                Mulai Konsultasi
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </router-link>
              
              <router-link
                to="/services"
                class="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-200 text-black font-semibold rounded-xl hover:border-black transition-all duration-200"
              >
                Lihat Layanan
              </router-link>
            </div>
          </div>
          
          <!-- Visual Element -->
          <div class="relative fade-in-right">
            <div class="aspect-square rounded-3xl overflow-hidden">
              <img 
                src="/bantuin-logo-with-text-black.png" 
                alt="bantu.in Logo" 
                class="w-full h-full object-cover"
              />
            </div>
            
            <!-- Floating Cards -->
            <div class="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg fade-in stagger-1">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span class="text-2xl">✓</span>
                </div>
                <div>
                  <div class="font-semibold text-sm">Kualitas Terjamin</div>
                  <div class="text-xs text-neutral-500">100% Profesional</div>
                </div>
              </div>
            </div>
            
            <div class="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg fade-in stagger-2">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span class="text-2xl">🔒</span>
                </div>
                <div>
                  <div class="font-semibold text-sm">Kerahasiaan</div>
                  <div class="text-xs text-neutral-500">Data Aman</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <!-- SECTION 2: WHY bantu.in -->
    <section class="py-20 bg-neutral-50">
      <div class="container-custom px-6">
        <div class="max-w-7xl mx-auto">
          
          <div class="text-center mb-16 fade-in-up">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih bantu.in?</h2>
            <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik dengan standar profesional tertinggi
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <!-- Value 1 -->
            <div class="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 card-hover fade-in stagger-1">
              <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Tim Profesional</h3>
              <p class="text-neutral-600 leading-relaxed">
                Didukung oleh ahli berpengalaman di berbagai bidang akademik dan digital
              </p>
            </div>
            
            <!-- Value 2 -->
            <div class="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 card-hover fade-in stagger-2">
              <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Kerahasiaan Terjamin</h3>
              <p class="text-neutral-600 leading-relaxed">
                Data dan privasi Anda dilindungi dengan standar keamanan tertinggi
              </p>
            </div>
            
            <!-- Value 3 -->
            <div class="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 card-hover fade-in stagger-3">
              <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Proses Cepat</h3>
              <p class="text-neutral-600 leading-relaxed">
                Sistem kerja efisien dengan timeline yang jelas dan tepat waktu
              </p>
            </div>
            
            <!-- Value 4 -->
            <div class="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 card-hover fade-in stagger-4">
              <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Kualitas Premium</h3>
              <p class="text-neutral-600 leading-relaxed">
                Hasil kerja berkualitas tinggi dengan quality control menyeluruh
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: SERVICES PREVIEW -->
    <section class="py-20 bg-white">
      <div class="container-custom px-6">
        <div class="max-w-7xl mx-auto">
          
          <div class="text-center mb-16 fade-in-up">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
            <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
              Solusi lengkap untuk kebutuhan akademik dan digital Anda
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            
            <!-- Academic Services -->
            <div class="border-2 border-neutral-200 rounded-2xl p-8 hover:border-black transition-all duration-300 fade-in stagger-1">
              <div class="text-4xl mb-4">📝</div>
              <h3 class="text-2xl font-bold mb-4">Layanan Akademik</h3>
              <p class="text-neutral-600 mb-6 leading-relaxed">
                Bantuan komprehensif untuk berbagai kebutuhan akademik dari skripsi hingga literature review
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center text-neutral-700">
                  <svg class="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Skripsi & Tesis
                </li>
                <li class="flex items-center text-neutral-700">
                  <svg class="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Penulisan Makalah
                </li>
                <li class="flex items-center text-neutral-700">
                  <svg class="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Tugas Besar & Proyek
                </li>
              </ul>
              <router-link
                to="/services"
                class="inline-flex items-center text-black font-semibold hover:gap-3 transition-all duration-200"
              >
                Lihat Detail
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </router-link>
            </div>
            
            <!-- Digital Services -->
            <div class="border-2 border-neutral-200 rounded-2xl p-8 hover:border-black transition-all duration-300 fade-in stagger-2">
              <div class="text-4xl mb-4">💻</div>
              <h3 class="text-2xl font-bold mb-4">Layanan Digital</h3>
              <p class="text-neutral-600 mb-6 leading-relaxed">
                Solusi digital marketing untuk meningkatkan kredibilitas dan engagement bisnis Anda
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center text-neutral-700">
                  <svg class="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Review Google Maps
                </li>
                <li class="flex items-center text-neutral-700">
                  <svg class="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Peningkatan Watch Time
                </li>
                <li class="flex items-center text-neutral-700">
                  <svg class="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Engagement Media Sosial
                </li>
              </ul>
              <router-link
                to="/services"
                class="inline-flex items-center text-black font-semibold hover:gap-3 transition-all duration-200"
              >
                Lihat Detail
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </router-link>
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: HOW IT WORKS -->
    <section class="py-20 bg-neutral-900 text-white">
      <div class="container-custom px-6">
        <div class="max-w-6xl mx-auto">
          
          <div class="text-center mb-16 fade-in-up">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Cara Kerja Kami</h2>
            <p class="text-lg text-neutral-200 max-w-2xl mx-auto">
              Proses yang terstruktur dan transparan untuk hasil maksimal
            </p>
          </div>
          
          <div class="grid md:grid-cols-4 gap-8">
            
            <!-- Step 1 -->
            <div class="text-center fade-in stagger-1">
              <div class="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 class="text-xl font-bold mb-3 text-white">Konsultasi</h3>
              <p class="text-neutral-200 text-sm leading-relaxed">
                Diskusi kebutuhan dan ekspektasi proyek Anda
              </p>
            </div>
            
            <!-- Step 2 -->
            <div class="text-center fade-in stagger-2">
              <div class="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 class="text-xl font-bold mb-3 text-white">Perencanaan</h3>
              <p class="text-neutral-200 text-sm leading-relaxed">
                Penyusunan rencana kerja dan timeline detail
              </p>
            </div>
            
            <!-- Step 3 -->
            <div class="text-center fade-in stagger-3">
              <div class="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 class="text-xl font-bold mb-3 text-white">Pengerjaan</h3>
              <p class="text-neutral-200 text-sm leading-relaxed">
                Eksekusi proyek dengan quality control ketat
              </p>
            </div>
            
            <!-- Step 4 -->
            <div class="text-center fade-in stagger-4">
              <div class="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 class="text-xl font-bold mb-3 text-white">Penyerahan</h3>
              <p class="text-neutral-200 text-sm leading-relaxed">
                Delivery hasil final dengan dokumentasi lengkap
              </p>
            </div>
            
          </div>
          
          <div class="text-center mt-12">
            <router-link
              to="/alur-kerja"
              class="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-neutral-100 transition-all duration-200"
            >
              Lihat Alur Kerja Detail
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
          
        </div>
      </div>
    </section>

    <!-- SECTION 5: TRUST & CTA -->
    <section class="py-20 bg-neutral-50">
      <div class="container-custom px-6">
        <div class="max-w-4xl mx-auto text-center">
          
          <div class="fade-in-up">
            <div class="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Pendekatan Profesional & Transparan
            </div>
            
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Siap Memulai Proyek Anda?
            </h2>
            
            <p class="text-lg text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Konsultasi gratis untuk memahami kebutuhan Anda. Tim kami siap membantu mewujudkan 
              kesuksesan akademik dan digital Anda dengan profesionalisme tinggi.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <router-link
                to="/contact"
                class="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-neutral-800 transition-all duration-200 hover-lift"
              >
                Hubungi Kami Sekarang
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </router-link>
              
              <router-link
                to="/tentang-kami"
                class="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-200 text-black font-semibold rounded-xl hover:border-black transition-all duration-200"
              >
                Pelajari Lebih Lanjut
              </router-link>
            </div>
            
            <!-- Value Commitments -->
            <div class="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
              <div>
                <div class="text-2xl font-bold text-black mb-1">Kualitas</div>
                <div class="text-sm text-neutral-600">Standar Tinggi</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-black mb-1">Etika</div>
                <div class="text-sm text-neutral-600">Tanggung Jawab</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-black mb-1">Transparan</div>
                <div class="text-sm text-neutral-600">Proses Jelas</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// Home: Rich 5-section layout with brand story, values, services preview, process, and CTA
</script>
