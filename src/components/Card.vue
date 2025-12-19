<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  }
})

const cardClasses = computed(() => {
  const baseClasses = 'rounded-xl p-8 border transition-all duration-200 ease-out'
  
  const variantClasses = {
    light: 'bg-white border-gray-200 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] hover:border-gray-300',
    dark: 'bg-[#0a0a0a] border-[#262626] hover:-translate-y-2 hover:border-[#404040] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)]'
  }
  
  return `${baseClasses} ${variantClasses[props.variant]}`
})
</script>
