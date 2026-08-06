import { useEffect } from 'react'

/**
 * Reveals [data-reveal] elements only when they enter the viewport while scrolling.
 */
export default function RevealOnScroll({ children }) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = Array.from(document.querySelectorAll('[data-reveal]:not(.is-inview)'))

    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach((el) => el.classList.add('is-inview'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          if (entry.intersectionRatio < 0.15) return
          entry.target.classList.add('is-inview')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: [0.15, 0.25, 0.4],
        rootMargin: '0px 0px -10% 0px',
      }
    )

    const id = requestAnimationFrame(() => {
      nodes.forEach((el) => observer.observe(el))
    })

    return () => {
      cancelAnimationFrame(id)
      observer.disconnect()
    }
  }, [])

  return children
}
