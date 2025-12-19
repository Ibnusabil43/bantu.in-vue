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
  const baseClasses = 'rounded-2xl p-9 border-2 transition-all duration-250 ease-out relative overflow-hidden'
  
  const variantClasses = {
    light: 'bg-white border-neutral-200 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.05)] hover:border-neutral-300',
    dark: 'bg-neutral-900 border-neutral-800 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-neutral-700 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5),0_4px_12px_rgba(0,0,0,0.3)]'
  }
  
  return `${baseClasses} ${variantClasses[props.variant]}`
})
</script>
