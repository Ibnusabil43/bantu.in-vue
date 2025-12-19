<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <section class="py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center fade-in">
          <span class="inline-block px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-600 text-sm font-medium mb-6">
            Alur Kerja Kami
          </span>
          <h1 class="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Proses yang Terstruktur,<br/>Hasil yang Terpercaya
          </h1>
          <p class="text-lg text-neutral-600">
            Dari konsultasi hingga penyerahan akhir, setiap langkah dirancang untuk memberikan hasil terbaik dengan transparansi penuh.
          </p>
        </div>
      </div>
    </section>

    <!-- Visual Divider -->
    <div class="container mx-auto px-6 py-12">
      <div class="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
    </div>

    <!-- Main Timeline -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="max-w-5xl mx-auto">
          <!-- Step 1 -->
          <div class="relative mb-20 fade-in stagger-1">
            <div class="flex flex-col md:flex-row items-start gap-8">
              <!-- Icon & Number -->
              <div class="flex-shrink-0">
                <div class="relative">
                  <div class="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                  </div>
                  <span class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                    1
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-neutral-900 mb-3">
                  Konsultasi & Analisis Kebutuhan
                </h3>
                <p class="text-neutral-600 mb-6">
                  Kami memahami kebutuhan spesifik Anda melalui diskusi mendalam. Tidak ada template—setiap proyek disesuaikan dengan tujuan dan konteks unik Anda.
                </p>
                
                <!-- Value Highlights -->
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover-lift">
                    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-neutral-900 text-sm mb-1">Respons Cepat</h4>
                      <p class="text-sm text-neutral-600">Tanggapan awal dalam 2-4 jam kerja</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover-lift">
                    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-neutral-900 text-sm mb-1">Konsultasi Gratis</h4>
                      <p class="text-sm text-neutral-600">Tidak ada biaya untuk diskusi awal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Connector Line -->
            <div class="absolute left-10 top-24 w-0.5 h-16 bg-gradient-to-b from-neutral-200 to-transparent hidden md:block"></div>
          </div>

          <!-- Step 2 -->
          <div class="relative mb-20 fade-in stagger-2">
            <div class="flex flex-col md:flex-row items-start gap-8">
              <!-- Icon & Number -->
              <div class="flex-shrink-0">
                <div class="relative">
                  <div class="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center">
                    <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <span class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center">
                    2
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-neutral-900 mb-3">
                  Penawaran & Persetujuan
                </h3>
                <p class="text-neutral-600 mb-6">
                  Anda menerima proposal transparan dengan timeline jelas, harga tetap, dan deliverables yang terukur. Tidak ada biaya tersembunyi.
                </p>
                
                <!-- Value Highlights -->
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover-lift">
                    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-neutral-900 text-sm mb-1">Harga Transparan</h4>
                      <p class="text-sm text-neutral-600">Breakdown biaya yang jelas dan tetap</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover-lift">
                    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-neutral-900 text-sm mb-1">Timeline Realistis</h4>
                      <p class="text-sm text-neutral-600">Jadwal yang dapat dilacak dan dipertahankan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Connector Line -->
            <div class="absolute left-10 top-24 w-0.5 h-16 bg-gradient-to-b from-neutral-200 to-transparent hidden md:block"></div>
          </div>

          <!-- Step 3 -->
          <div class="relative mb-20 fade-in stagger-3">
            <div class="flex flex-col md:flex-row items-start gap-8">
              <!-- Icon & Number -->
              <div class="flex-shrink-0">
                <div class="relative">
                  <div class="w-20 h-20 rounded-2xl bg-purple-100 flex items-center justify-center">
                    <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                  </div>
                  <span class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">
                    3
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-neutral-900 mb-3">
                  Riset & Pengerjaan
                </h3>
                <p class="text-neutral-600 mb-6">
                  Tim kami bekerja dengan standar akademik/profesional tertinggi. Anda mendapat update progress berkala dan dapat memberikan feedback kapan saja.
                </p>
                
                <!-- Value Highlights -->
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover-lift">
                    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-neutral-900 text-sm mb-1">Update Berkala</h4>
                      <p class="text-sm text-neutral-600">Laporan progress setiap milestone</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover-lift">
                    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-neutral-900 text-sm mb-1">Revisi Fleksibel</h4>
                      <p class="text-sm text-neutral-600">Feedback diterima di setiap tahap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Connector Line -->
            <div class="absolute left-10 top-24 w-0.5 h-16 bg-gradient-to-b from-neutral-200 to-transparent hidden md:block"></div>
          </div>

          <!-- Step 4 -->
          <div class="relative mb-20 fade-in stagger-4">
            <div class="flex flex-col md:flex-row items-start gap-8">
              <!-- Icon & Number -->
              <div class="flex-shrink-0">
                <div class="relative">
                  <div class="w-20 h-20 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <svg class="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-600 text-white text-sm font-bold flex items-center justify-center">
                    4
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-neutral-900 mb-3">
                  Review & Quality Check
                </h3>
                <p class="text-neutral-600 mb-6">
                  Sebelum penyerahan, hasil kerja melewati quality control internal. Anda juga mendapat kesempatan untuk review dan request revisi final.
                </p>
                
                <!-- Value Highlights -->
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover-lift">
                    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-neutral-900 text-sm mb-1">Plagiarism Check</h4>
                      <p class="text-sm text-neutral-600">Verifikasi originalitas dengan tools profesional</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover-lift">
                    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-neutral-900 text-sm mb-1">Format Verification</h4>
                      <p class="text-sm text-neutral-600">Sesuai guideline institusi/publikasi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Connector Line -->
            <div class="absolute left-10 top-24 w-0.5 h-16 bg-gradient-to-b from-neutral-200 to-transparent hidden md:block"></div>
          </div>

          <!-- Step 5 -->
          <div class="relative fade-in stagger-5">
            <div class="flex flex-col md:flex-row items-start gap-8">
              <!-- Icon & Number -->
              <div class="flex-shrink-0">
                <div class="relative">
                  <div class="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                    5
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-neutral-900 mb-3">
                  Penyerahan & Support Berkelanjutan
                </h3>
                <p class="text-neutral-600 mb-6">
                  Hasil final diserahkan dengan dokumentasi lengkap. Kami tetap tersedia untuk support pasca-proyek tanpa biaya tambahan.
                </p>
                
                <!-- Value Highlights -->
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover-lift">
                    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-neutral-900 text-sm mb-1">File Lengkap</h4>
                      <p class="text-sm text-neutral-600">Semua dokumentasi & sumber tersimpan aman</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover-lift">
                    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <div>
                      <h4 class="font-semibold text-neutral-900 text-sm mb-1">30 Hari Support</h4>
                      <p class="text-sm text-neutral-600">Bantuan gratis untuk pertanyaan lanjutan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why This Matters -->
    <section class="py-20 bg-neutral-900 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16 fade-in">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
              Mengapa Proses Ini Penting?
            </h2>
            <p class="text-lg text-neutral-200">
              Struktur yang jelas menciptakan kepercayaan dan hasil yang dapat diandalkan
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center fade-in stagger-1">
              <div class="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3 text-white">Transparansi Penuh</h3>
              <p class="text-neutral-200">
                Tidak ada kejutan. Anda tahu persis apa yang sedang terjadi di setiap tahap.
              </p>
            </div>

            <div class="text-center fade-in stagger-2">
              <div class="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3 text-white">Efisiensi Waktu</h3>
              <p class="text-neutral-200">
                Proses terstruktur menghilangkan waktu yang terbuang dan revisi berlebihan.
              </p>
            </div>

            <div class="text-center fade-in stagger-3">
              <div class="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3 text-white">Kualitas Terjamin</h3>
              <p class="text-neutral-200">
                Setiap checkpoint memastikan hasil akhir memenuhi standar tertinggi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p class="text-lg text-neutral-600 mb-10">
            Konsultasi gratis untuk memahami kebutuhan Anda. Tidak ada komitmen sampai Anda siap.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <router-link 
              to="/contact" 
              class="px-8 py-4 bg-neutral-900 text-white rounded-xl font-semibold hover-lift inline-block"
            >
              Mulai Konsultasi
            </router-link>
            <router-link 
              to="/services" 
              class="px-8 py-4 bg-white text-neutral-900 border-2 border-neutral-200 rounded-xl font-semibold hover-border inline-block"
            >
              Lihat Layanan Lengkap
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No reactive state needed - static timeline display
</script>
