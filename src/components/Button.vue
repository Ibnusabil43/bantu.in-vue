<template>
  <component
    :is="tag"
    :type="type"
    :class="buttonClasses"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'outline', 'primary-light', 'outline-light', 'secondary'].includes(value)
  },
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'button'
  }
})

defineEmits(['click'])

const buttonClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-3.5 font-semibold text-base rounded-xl transition-all duration-200 ease-out relative overflow-hidden border-2'
  
  const variantClasses = {
    primary: 'bg-black border-black text-white shadow-[0_4px_14px_rgba(0,0,0,0.2)] hover:bg-[#171717] hover:border-[#171717] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] active:translate-y-0 active:shadow-[0_2px_6px_rgba(0,0,0,0.2)]',
    outline: 'border-black text-black bg-white hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-[0_4px_14px_rgba(0,0,0,0.15)] active:translate-y-0',
    'primary-light': 'bg-white border-white text-black shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:bg-neutral-50 hover:border-neutral-50 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] active:translate-y-0 active:shadow-[0_2px_6px_rgba(0,0,0,0.1)]',
    'outline-light': 'border-white text-white bg-transparent hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[0_4px_14px_rgba(255,255,255,0.2)] active:translate-y-0',
    secondary: 'border-neutral-300 text-black bg-white hover:border-black hover:bg-neutral-50 hover:-translate-y-1 hover:shadow-[0_4px_14px_rgba(0,0,0,0.1)] active:translate-y-0'
  }
  
  return `${baseClasses} ${variantClasses[props.variant]}`
})
</script>
