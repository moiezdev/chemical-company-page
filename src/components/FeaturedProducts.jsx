export default function FeaturedProducts({ title, subtitle, items }) {
  return (
    <section className="mx-auto w-[min(1120px,calc(100%-2.5rem))] py-[clamp(3.5rem,8vw,5.5rem)]">
      <div className="mb-10 max-w-xl" data-reveal="up">
        <h2 className="mb-2 text-[clamp(1.8rem,3vw,2.4rem)]">{title}</h2>
        <p className="m-0 text-mute">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={item.id}
            data-reveal={index % 2 === 0 ? 'left' : 'right'}
            style={{ '--reveal-delay': `${(index % 2) * 120}ms` }}
            className="group grid grid-rows-[200px_auto] overflow-hidden md:grid-rows-[220px_auto] min-[900px]:grid-cols-[1.1fr_1fr] min-[900px]:grid-rows-none min-[900px]:items-center min-[900px]:gap-5"
          >
            <div className="relative overflow-hidden min-[900px]:h-[200px]">
              <img
                src={item.image}
                alt=""
                className="panorama-drift h-full min-h-full object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:brightness-110"
                style={{ animationDuration: `${26 + index * 3}s` }}
              />
            </div>
            <div className="pt-5 min-[900px]:pt-0">
              <h3 className="mb-1.5 text-[1.35rem]">{item.title}</h3>
              <p className="m-0 text-[0.98rem] text-mute">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
