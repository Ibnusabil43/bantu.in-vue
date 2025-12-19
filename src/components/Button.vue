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
    validator: (value) => ['primary', 'outline', 'primary-light', 'outline-light'].includes(value)
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
  const baseClasses = 'inline-block px-10 py-3.5 font-semibold text-[0.9375rem] rounded-lg transition-all duration-200 ease-out'
  
  const variantClasses = {
    primary: 'bg-black text-white shadow-md hover:bg-[#1a1a1a] hover:-translate-y-1 hover:shadow-xl',
    outline: 'border-2 border-black text-black bg-transparent hover:bg-black hover:text-white hover:-translate-y-1',
    'primary-light': 'bg-white text-black shadow-md hover:bg-gray-50 hover:-translate-y-1 hover:shadow-xl',
    'outline-light': 'border-2 border-white text-white bg-transparent hover:bg-white hover:text-black hover:-translate-y-1'
  }
  
  return `${baseClasses} ${variantClasses[props.variant]}`
})
</script>
