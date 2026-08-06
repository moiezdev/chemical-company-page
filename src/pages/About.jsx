import Hero from '../components/Hero'
import RevealOnScroll from '../components/RevealOnScroll'
import about from '../data/about.json'

const section = 'mx-auto w-[min(1120px,calc(100%-2.5rem))] py-[clamp(3.5rem,8vw,5.5rem)]'

export default function About() {
  return (
    <RevealOnScroll>
      <Hero
        title={about.hero.title}
        subtitle={about.hero.subtitle}
        image={about.hero.image}
        compact
      />

      <section className={`${section} grid grid-cols-1 items-center gap-8 min-[900px]:grid-cols-[1.1fr_0.9fr] min-[900px]:gap-12`}>
        <div data-reveal="left">
          <h2 className="text-[clamp(1.7rem,3vw,2.35rem)]">{about.intro.headline}</h2>
          {about.intro.paragraphs.map((p) => (
            <p key={p} className="text-mute">
              {p}
            </p>
          ))}
        </div>
        <div data-reveal="right" className="relative min-h-[360px] overflow-hidden">
          <img
            src={about.intro.image}
            alt=""
            className="panorama-drift h-full min-h-[360px] object-cover"
          />
        </div>
      </section>

      <section className={`${section} pt-0`}>
        <div data-reveal="up" className="max-w-2xl border-t border-deep/12 pt-8">
          <h2>{about.story.title}</h2>
          {about.story.paragraphs.map((p) => (
            <p key={p} className="text-mute">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className={section}>
        <h2 data-reveal="up" className="mb-6 text-[clamp(1.6rem,3vw,2rem)]">
          {about.values.title}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 min-[900px]:grid-cols-3">
          {about.values.items.map((item, index) => (
            <article
              key={item.id}
              data-reveal="up"
              style={{ '--reveal-delay': `${index * 100}ms` }}
            >
              <h3 className="mb-1.5 text-[1.25rem]">{item.title}</h3>
              <p className="m-0 text-mute">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={section}>
        <h2 data-reveal="up" className="mb-6 text-[clamp(1.6rem,3vw,2rem)]">
          {about.partners.title}
        </h2>
        <ul className="flex flex-wrap gap-x-5 gap-y-3">
          {about.partners.items.map((name, index) => (
            <li
              key={name}
              data-reveal="up"
              style={{ '--reveal-delay': `${index * 60}ms` }}
              className="border-b border-mid/25 pb-0.5 font-display text-[1.05rem] font-semibold text-mid"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>
    </RevealOnScroll>
  )
}
