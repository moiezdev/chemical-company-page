import { useEffect, useRef } from 'react'

/**
 * Overflow frame with scroll parallax (Y) and optional slow panorama pan (X).
 */
export default function PanoramaImage({
  src,
  alt = '',
  className = '',
  intensity = 0.28,
  pan = true,
}) {
  const frameRef = useRef(null)
  const layerRef = useRef(null)

  useEffect(() => {
    const frame = frameRef.current
    const layer = layerRef.current
    if (!frame || !layer) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return undefined

    let raf = 0

    const update = () => {
      const rect = frame.getBoundingClientRect()
      const viewH = window.innerHeight || 1
      const progress = (viewH / 2 - (rect.top + rect.height / 2)) / viewH
      const y = Math.max(-60, Math.min(60, progress * intensity * 120))
      layer.style.transform = `translate3d(0, ${y}px, 0)`
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [intensity])

  return (
    <div ref={frameRef} className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden={alt ? undefined : true}>
      <div ref={layerRef} className="absolute inset-[-12%] will-change-transform">
        <img
          src={src}
          alt={alt}
          className={`h-full w-full max-w-none object-cover ${pan ? 'panorama-drift' : 'scale-110'}`}
        />
      </div>
    </div>
  )
}
