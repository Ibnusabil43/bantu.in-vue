import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

export function useHoverMotion(elementRef, options = {}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  const defaultOptions = {
    scale: 1.05,
    duration: 0.3,
    ease: 'power2.out',
    ...options
  }

  let element = null

  const handleMouseEnter = () => {
    if (prefersReducedMotion) return
    
    gsap.to(element, {
      scale: defaultOptions.scale,
      duration: defaultOptions.duration,
      ease: defaultOptions.ease
    })
  }

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return
    
    gsap.to(element, {
      scale: 1,
      duration: defaultOptions.duration,
      ease: defaultOptions.ease
    })
  }

  onMounted(() => {
    if (!elementRef.value) return
    
    element = elementRef.value
    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)
  })

  onUnmounted(() => {
    if (element) {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  })
}
