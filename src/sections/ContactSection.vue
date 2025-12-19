<template>
  <section class="section-spacing section-light">
    <div class="container-custom">
      <div ref="contentRef" class="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <!-- Contact Information -->
        <div>
          <h2 class="text-4xl font-black mb-10 text-black">Informasi Kontak</h2>

          <div class="space-y-7 mb-14">
            <!-- WhatsApp -->
            <Card class="group">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-14 h-14 bg-black rounded-xl flex items-center justify-center mr-5 group-hover:scale-105 transition-transform duration-200 border-2 border-black/5">
                  <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-black mb-3 text-black">WhatsApp</h3>
                  <p class="text-neutral-700 mb-4 font-medium">Hubungi kami melalui WhatsApp untuk respon cepat</p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-black hover:text-neutral-600 transition-colors inline-flex items-center font-bold"
                  >
                    <span>+62 812-3456-7890</span>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Card>

            <!-- Email -->
            <Card class="group">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-14 h-14 bg-black rounded-xl flex items-center justify-center mr-5 group-hover:scale-105 transition-transform duration-200 border-2 border-black/5">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-black mb-3 text-black">Email</h3>
                  <p class="text-neutral-700 mb-4 font-medium">Kirim email untuk pertanyaan lebih detail</p>
                  <a
                    href="mailto:info@bantu.in"
                    class="text-black hover:text-neutral-600 transition-colors inline-flex items-center font-bold"
                  >
                    <span>info@bantu.in</span>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div class="p-7 bg-neutral-50 border-2 border-neutral-200 rounded-2xl">
            <h4 class="font-black text-black mb-3 text-base">Jam Operasional</h4>
            <p class="text-neutral-700 text-[0.9375rem] font-medium">Senin - Jumat: 09:00 - 18:00 WIB</p>
            <p class="text-neutral-700 text-[0.9375rem] font-medium">Sabtu: 09:00 - 15:00 WIB</p>
            <p class="text-neutral-600 text-sm mt-3 italic font-medium">*Respon email dalam 1x24 jam</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <h2 class="text-4xl font-black mb-10 text-black">Kirim Pesan</h2>

          <form @submit.prevent="handleSubmit" class="space-y-7">
            <div>
              <label for="name" class="block text-[0.9375rem] font-bold text-black mb-3">Nama Lengkap</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="w-full px-5 py-3.5 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all font-medium"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label for="email" class="block text-[0.9375rem] font-bold text-black mb-3">Email</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="w-full px-5 py-3.5 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all font-medium"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label for="subject" class="block text-[0.9375rem] font-bold text-black mb-3">Subjek</label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                required
                class="w-full px-5 py-3.5 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all font-medium"
                placeholder="Topik pertanyaan Anda"
              />
            </div>

            <div>
              <label for="message" class="block text-[0.9375rem] font-bold text-black mb-3">Pesan</label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="5"
                class="w-full px-5 py-3.5 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all resize-none font-medium"
                placeholder="Ceritakan kebutuhan Anda..."
              ></textarea>
            </div>

            <Button type="submit" class="w-full">
              Kirim Pesan
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const contentRef = ref(null)
useScrollReveal(contentRef, { animationClass: 'animate-fade-in-up' })

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Form submission logic would go here
  alert('Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.')
  
  // Reset form
  formData.name = ''
  formData.email = ''
  formData.subject = ''
  formData.message = ''
}
</script>
