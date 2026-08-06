import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Industries from '../components/Industries'
import CtaBand from '../components/CtaBand'
import RevealOnScroll from '../components/RevealOnScroll'
import home from '../data/home.json'

export default function Home() {
  return (
    <RevealOnScroll>
      <Hero
        brand={home.hero.brand}
        headline={home.hero.headline}
        subheadline={home.hero.subheadline}
        cta={home.hero.cta}
        image={home.hero.image}
      />
      <FeaturedProducts
        title={home.featured.title}
        subtitle={home.featured.subtitle}
        items={home.featured.items}
      />
      <Industries
        title={home.industries.title}
        subtitle={home.industries.subtitle}
        items={home.industries.items}
      />
      <CtaBand
        title={home.ctaBand.title}
        text={home.ctaBand.text}
        button={home.ctaBand.button}
        image={home.ctaBand.image}
      />
    </RevealOnScroll>
  )
}
