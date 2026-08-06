export default function Industries({ title, subtitle, items }) {
  return (
    <section
      id="industries"
      className="mx-auto w-[min(1120px,calc(100%-2.5rem))] bg-[linear-gradient(180deg,transparent,rgba(18,85,77,0.06))] py-[clamp(3.5rem,8vw,5.5rem)]"
    >
      <div className="mb-10 max-w-xl" data-reveal="up">
        <h2 className="mb-2 text-[clamp(1.8rem,3vw,2.4rem)]">{title}</h2>
        <p className="m-0 text-mute">{subtitle}</p>
      </div>
      <ul className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <li
            key={item.id}
            data-reveal="up"
            style={{ '--reveal-delay': `${(index % 4) * 70}ms` }}
            className="border-t border-deep/12 px-4 py-[1.1rem] font-display text-[1.05rem] font-semibold tracking-tight transition-[color,border-color,padding] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-mint hover:pl-5 hover:text-mid"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
