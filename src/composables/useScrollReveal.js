import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(elementRef, options = {}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  const defaultOptions = {
    threshold: 0.15,  // Slightly higher threshold for faster trigger
    rootMargin: '0px',
    animationClass: 'animate-fade-in-up',
    delay: 0,
    ...options
  }

  let observer = null

  onMounted(() => {
    if (prefersReducedMotion || !elementRef.value) return

    const element = elementRef.value

    // Initially hide element
    element.style.opacity = '0'
    
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1'
            entry.target.classList.add(defaultOptions.animationClass)
          }, defaultOptions.delay)
          
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: defaultOptions.threshold,
      rootMargin: defaultOptions.rootMargin
    })

    observer.observe(element)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}
