<template>
  <nav class="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-shadow duration-200">
    <div class="container-custom">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <router-link
          to="/"
          class="flex items-center space-x-3 group"
        >
          <img 
            src="/bantu.in-logo-black.png" 
            alt="bantu.in Logo"
            class="w-12 h-12 rounded-2xl transform group-hover:scale-105 transition-transform duration-200 shadow-sm"
          />
          <span class="text-2xl font-bold tracking-tight text-black">bantu.in</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            to="/"
            class="text-sm font-medium hover:text-gray-600 transition-colors"
            :class="{ 'text-black': $route.path === '/', 'text-gray-500': $route.path !== '/' }"
          >
            Beranda
          </router-link>
          <router-link
            to="/tentang-kami"
            class="text-sm font-medium hover:text-gray-600 transition-colors"
            :class="{ 'text-black': $route.path === '/tentang-kami', 'text-gray-500': $route.path !== '/tentang-kami' }"
          >
            Tentang Kami
          </router-link>
          <router-link
            to="/services"
            class="text-sm font-medium hover:text-gray-600 transition-colors"
            :class="{ 'text-black': $route.path === '/services', 'text-gray-500': $route.path !== '/services' }"
          >
            Layanan
          </router-link>
          <router-link
            to="/alur-kerja"
            class="text-sm font-medium hover:text-gray-600 transition-colors"
            :class="{ 'text-black': $route.path === '/alur-kerja', 'text-gray-500': $route.path !== '/alur-kerja' }"
          >
            Alur Kerja
          </router-link>
          <router-link
            to="/contact"
            class="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Hubungi Kami
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-black p-2 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden border-t border-gray-200 bg-white"
      >
        <div class="container-custom py-4 space-y-4">
          <router-link
            to="/"
            @click="mobileMenuOpen = false"
            class="block text-sm font-medium hover:text-gray-600 transition-colors"
            :class="{ 'text-black': $route.path === '/', 'text-gray-500': $route.path !== '/' }"
          >
            Beranda
          </router-link>
          <router-link
            to="/tentang-kami"
            @click="mobileMenuOpen = false"
            class="block text-sm font-medium hover:text-gray-600 transition-colors"
            :class="{ 'text-black': $route.path === '/tentang-kami', 'text-gray-500': $route.path !== '/tentang-kami' }"
          >
            Tentang Kami
          </router-link>
          <router-link
            to="/services"
            @click="mobileMenuOpen = false"
            class="block text-sm font-medium hover:text-gray-600 transition-colors"
            :class="{ 'text-black': $route.path === '/services', 'text-gray-500': $route.path !== '/services' }"
          >
            Layanan
          </router-link>
          <router-link
            to="/alur-kerja"
            @click="mobileMenuOpen = false"
            class="block text-sm font-medium hover:text-gray-600 transition-colors"
            :class="{ 'text-black': $route.path === '/alur-kerja', 'text-gray-500': $route.path !== '/alur-kerja' }"
          >
            Alur Kerja
          </router-link>
          <router-link
            to="/contact"
            @click="mobileMenuOpen = false"
            class="block text-sm font-medium hover:text-gray-600 transition-colors"
            :class="{ 'text-black': $route.path === '/contact', 'text-gray-500': $route.path !== '/contact' }"
          >
            Hubungi Kami
          </router-link>
        </div>
      </div>
    </div>
  </nav>

  <!-- Spacer for fixed navbar -->
  <div class="h-20"></div>
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
