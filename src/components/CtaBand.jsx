import { Link } from 'react-router-dom'
import { btnPrimary } from '../lib/styles'
import PanoramaImage from './PanoramaImage'

export default function CtaBand({ title, text, button, image }) {
  return (
    <section className="relative grid min-h-[420px] items-center overflow-hidden text-snow">
      <div className="absolute inset-0" aria-hidden="true">
        <PanoramaImage src={image} intensity={0.22} />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(11,61,56,0.92)_15%,rgba(11,61,56,0.55)_70%,rgba(11,61,56,0.35))]" />
      </div>
      <div
        data-reveal="scale"
        className="relative z-[1] mx-auto w-[min(1120px,calc(100%-2.5rem))] max-w-lg py-16"
      >
        <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)]">{title}</h2>
        <p className="mb-6 text-snow/80">{text}</p>
        <Link className={btnPrimary} to={button.path}>
          {button.label}
        </Link>
      </div>
    </section>
  )
}
