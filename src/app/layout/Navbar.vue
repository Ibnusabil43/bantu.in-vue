<template>
  <nav class="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-lg border-b-2 border-neutral-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200">
    <div class="container-custom">
      <div class="flex justify-between items-center h-16 md:h-20">
        <!-- Logo -->
        <router-link
          to="/"
          class="flex items-center space-x-2 md:space-x-3 group"
        >
          <img 
            src="/bantu.in-logo-black.png" 
            alt="bantu.in Logo"
            class="w-10 h-10 md:w-12 md:h-12 rounded-2xl transform group-hover:scale-105 transition-transform duration-200 shadow-md border-2 border-black/5"
          />
          <span class="text-xl md:text-2xl font-bold tracking-tight text-black">bantu.in</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-2">
          <router-link
            to="/"
            class="px-5 py-2.5 text-[0.9375rem] font-semibold rounded-lg transition-all duration-200 relative"
            :class="{ 
              'text-black bg-neutral-100': $route.path === '/', 
              'text-neutral-600 hover:text-black hover:bg-neutral-50': $route.path !== '/' 
            }"
          >
            <span class="relative z-10">Beranda</span>
            <span 
              v-if="$route.path === '/'" 
              class="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-black rounded-full"
            ></span>
          </router-link>
          <router-link
            to="/tentang-kami"
            class="px-5 py-2.5 text-[0.9375rem] font-semibold rounded-lg transition-all duration-200 relative"
            :class="{ 
              'text-black bg-neutral-100': $route.path === '/tentang-kami', 
              'text-neutral-600 hover:text-black hover:bg-neutral-50': $route.path !== '/tentang-kami' 
            }"
          >
            <span class="relative z-10">Tentang Kami</span>
            <span 
              v-if="$route.path === '/tentang-kami'" 
              class="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-black rounded-full"
            ></span>
          </router-link>
          <router-link
            to="/services"
            class="px-5 py-2.5 text-[0.9375rem] font-semibold rounded-lg transition-all duration-200 relative"
            :class="{ 
              'text-black bg-neutral-100': $route.path === '/services', 
              'text-neutral-600 hover:text-black hover:bg-neutral-50': $route.path !== '/services' 
            }"
          >
            <span class="relative z-10">Layanan</span>
            <span 
              v-if="$route.path === '/services'" 
              class="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-black rounded-full"
            ></span>
          </router-link>
          <router-link
            to="/alur-kerja"
            class="px-5 py-2.5 text-[0.9375rem] font-semibold rounded-lg transition-all duration-200 relative"
            :class="{ 
              'text-black bg-neutral-100': $route.path === '/alur-kerja', 
              'text-neutral-600 hover:text-black hover:bg-neutral-50': $route.path !== '/alur-kerja' 
            }"
          >
            <span class="relative z-10">Alur Kerja</span>
            <span 
              v-if="$route.path === '/alur-kerja'" 
              class="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-black rounded-full"
            ></span>
          </router-link>
          <router-link
            to="/contact"
            class="ml-4 px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-150 shadow-sm hover-lift"
          >
            Hubungi Kami
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-black p-2.5 rounded-lg hover:bg-neutral-100 transition-colors duration-200 focus:outline-none border-2 border-transparent hover:border-neutral-200"
          aria-label="Toggle mobile menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden border-t-2 border-neutral-200 bg-white"
      >
        <div class="py-5 space-y-1.5">
          <router-link
            to="/"
            @click="mobileMenuOpen = false"
            class="block px-5 py-3 text-[0.9375rem] font-semibold rounded-lg transition-all duration-200"
            :class="{ 
              'text-black bg-neutral-100': $route.path === '/', 
              'text-neutral-600 hover:text-black hover:bg-neutral-50': $route.path !== '/' 
            }"
          >
            Beranda
          </router-link>
          <router-link
            to="/tentang-kami"
            @click="mobileMenuOpen = false"
            class="block px-5 py-3 text-[0.9375rem] font-semibold rounded-lg transition-all duration-200"
            :class="{ 
              'text-black bg-neutral-100': $route.path === '/tentang-kami', 
              'text-neutral-600 hover:text-black hover:bg-neutral-50': $route.path !== '/tentang-kami' 
            }"
          >
            Tentang Kami
          </router-link>
          <router-link
            to="/services"
            @click="mobileMenuOpen = false"
            class="block px-5 py-3 text-[0.9375rem] font-semibold rounded-lg transition-all duration-200"
            :class="{ 
              'text-black bg-neutral-100': $route.path === '/services', 
              'text-neutral-600 hover:text-black hover:bg-neutral-50': $route.path !== '/services' 
            }"
          >
            Layanan
          </router-link>
          <router-link
            to="/alur-kerja"
            @click="mobileMenuOpen = false"
            class="block px-5 py-3 text-[0.9375rem] font-semibold rounded-lg transition-all duration-200"
            :class="{ 
              'text-black bg-neutral-100': $route.path === '/alur-kerja', 
              'text-neutral-600 hover:text-black hover:bg-neutral-50': $route.path !== '/alur-kerja' 
            }"
          >
            Alur Kerja
          </router-link>
          <router-link
            to="/contact"
            @click="mobileMenuOpen = false"
            class="block px-5 py-3 text-[0.9375rem] font-semibold rounded-lg transition-all duration-200"
            :class="{ 
              'text-black bg-neutral-100': $route.path === '/contact', 
              'text-neutral-600 hover:text-black hover:bg-neutral-50': $route.path !== '/contact' 
            }"
          >
            Hubungi Kami
          </router-link>
        </div>
      </div>
    </div>
  </nav>

  <!-- Spacer for fixed navbar -->
  <div class="h-16 md:h-20"></div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const mobileMenuOpen = ref(false)
const route = useRoute()

// Close mobile menu on route change
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
