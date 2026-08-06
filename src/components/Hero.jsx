import { Link } from 'react-router-dom'
import { btnPrimary } from '../lib/styles'
import PanoramaImage from './PanoramaImage'

export default function Hero({ brand, title, headline, subtitle, subheadline, cta, image, compact = false }) {
  const displayTitle = brand || title
  const displayHeadline = headline
  const displaySub = subtitle || subheadline

  return (
    <section
      className={`relative grid overflow-hidden text-snow ${
        compact ? 'min-h-[58svh] items-center' : 'min-h-svh items-end'
      }`}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <PanoramaImage src={image} intensity={compact ? 0.18 : 0.32} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,61,56,0.55)_0%,rgba(11,61,56,0.35)_40%,rgba(11,61,56,0.88)_100%),linear-gradient(90deg,rgba(11,61,56,0.55),transparent_55%)]" />
      </div>

      <div
        className={`relative z-[1] mx-auto w-[min(1120px,calc(100%-2.5rem))] ${
          compact ? 'pb-12 pt-[calc(4.5rem+3rem)]' : 'pb-[4.5rem] pt-[calc(4.5rem+3rem)] max-sm:pb-12'
        }`}
      >
        <p
          data-reveal="up"
          style={{ '--reveal-delay': '80ms' }}
          className={`font-display font-bold tracking-tight leading-[0.95] ${
            compact
              ? 'mb-2 text-[clamp(2.2rem,5vw,3.6rem)]'
              : 'mb-3.5 max-w-[12ch] text-[clamp(2.6rem,7vw,5.2rem)] max-sm:max-w-none'
          }`}
        >
          {displayTitle}
        </p>
        {displayHeadline ? (
          <h1
            data-reveal="up"
            style={{ '--reveal-delay': '200ms' }}
            className="mb-4 max-w-[22ch] text-[clamp(1.35rem,2.6vw,1.85rem)] font-medium text-snow/92"
          >
            {displayHeadline}
          </h1>
        ) : null}
        {displaySub ? (
          <p
            data-reveal="up"
            style={{ '--reveal-delay': '320ms' }}
            className="mb-7 max-w-xl text-[1.05rem] text-snow/78"
          >
            {displaySub}
          </p>
        ) : null}
        {cta ? (
          <div data-reveal="up" style={{ '--reveal-delay': '440ms' }} className="flex gap-3">
            {cta.path.startsWith('/#') ? (
              <a className={btnPrimary} href={cta.path}>
                {cta.label}
              </a>
            ) : (
              <Link className={btnPrimary} to={cta.path}>
                {cta.label}
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </section>
  )
}
