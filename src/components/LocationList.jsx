export default function LocationList({ title, items }) {
  return (
    <section>
      <h2 data-reveal="up" className="mb-7 text-[clamp(1.6rem,3vw,2rem)]">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-x-8">
        {items.map((loc, index) => (
          <article
            key={loc.id}
            data-reveal="up"
            style={{ '--reveal-delay': `${(index % 2) * 100}ms` }}
          >
            <h3 className="mb-1 text-[1.2rem]">{loc.name}</h3>
            <p className="mb-2.5 font-semibold">{loc.company}</p>
            {loc.address.map((line) => (
              <p key={line} className="m-0 text-[0.95rem] text-mute">
                {line}
              </p>
            ))}
            <p className="m-0 text-[0.95rem] text-mute">T: {loc.phone}</p>
            <p className="m-0 text-[0.95rem] text-mute">F: {loc.fax}</p>
            <a
              className="mt-2.5 inline-block border-b border-transparent font-semibold text-mid transition-[border-color] duration-300 hover:border-mid"
              href={`mailto:${loc.email}`}
            >
              {loc.email}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
