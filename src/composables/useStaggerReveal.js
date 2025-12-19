import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

export function useStaggerReveal(containerRef, options = {}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  const defaultOptions = {
    threshold: 0.1,
    childSelector: '.stagger-item',
    stagger: 0.08,  // Faster stagger
    duration: 0.3,  // Shorter duration
    y: 20,          // Smaller movement
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
