<template>
  <div :class="['inline-flex items-center justify-center', sizeClasses]">
    <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="central"
        :class="['font-bold', textSizeClass]"
      >
        B
      </text>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  }
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }
  return sizes[props.size]
})

const textSizeClass = computed(() => {
  const sizes = {
    sm: 'text-xs',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-3xl'
  }
  return sizes[props.size]
})
</script>
