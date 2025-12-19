import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

export function useStaggerReveal(containerRef, options = {}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  const defaultOptions = {
    threshold: 0.15,
    childSelector: '.stagger-item',
    stagger: 0.05,  // Faster stagger - 50ms
    duration: 0.3,  // 300ms duration
    y: 10,          // Smaller movement - 10px
    ...options
  }

  let observer = null

  onMounted(() => {
    if (prefersReducedMotion || !containerRef.value) return

    const container = containerRef.value
    const children = container.querySelectorAll(defaultOptions.childSelector)

    // Initially hide children
    gsap.set(children, { opacity: 0, y: defaultOptions.y })
    
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(defaultOptions.childSelector)
          
          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: defaultOptions.duration,
            stagger: defaultOptions.stagger,
            ease: 'power2.out'
          })
          
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: defaultOptions.threshold
    })

    observer.observe(container)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}
