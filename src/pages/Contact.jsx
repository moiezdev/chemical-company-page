import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import LocationList from '../components/LocationList'
import RevealOnScroll from '../components/RevealOnScroll'
import contact from '../data/contact.json'

const section = 'mx-auto w-[min(1120px,calc(100%-2.5rem))] py-[clamp(3.5rem,8vw,5.5rem)]'

export default function Contact() {
  return (
    <RevealOnScroll>
      <Hero
        title={contact.hero.title}
        subtitle={contact.hero.subtitle}
        image={contact.hero.image}
        compact
      />

      <section className={`${section} pb-4`}>
        <div data-reveal="up" className="max-w-xl">
          <ContactForm
            title={contact.form.title}
            fields={contact.form.fields}
            submitLabel={contact.form.submitLabel}
            successMessage={contact.form.successMessage}
          />
        </div>
      </section>

      <div className={section}>
        <LocationList title={contact.locations.title} items={contact.locations.items} />
      </div>
    </RevealOnScroll>
  )
}
