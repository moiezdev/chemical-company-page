import { Link } from 'react-router-dom'
import company from '../data/company.json'
import footer from '../data/footer.json'

export default function Footer() {
  return (
    <footer className="mt-auto bg-deep pt-14 pb-8 text-snow">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2.5rem))] grid-cols-1 gap-9 md:grid-cols-[1.6fr_1fr_1fr] md:gap-8">
        <div>
          <p className="mb-3 font-display text-[1.35rem] font-bold">{company.name}</p>
          <p className="m-0 max-w-md text-[0.98rem] text-snow/70">{footer.blurb}</p>
        </div>

        <div>
          <p className="mb-3.5 font-display font-semibold text-gold">Navigate</p>
          <ul className="grid gap-2.5">
            {footer.quickLinks.map((link) => (
              <li key={link.path}>
                <Link className="text-snow/78 transition-colors duration-300 hover:text-snow" to={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3.5 font-display font-semibold text-gold">Contact</p>
          <ul className="grid gap-2.5">
            <li>
              <a
                className="text-snow/78 transition-colors duration-300 hover:text-snow"
                href={`tel:${company.phone.replace(/\s/g, '')}`}
              >
                {company.phone}
              </a>
            </li>
            <li>
              <a className="text-snow/78 transition-colors duration-300 hover:text-snow" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 w-[min(1120px,calc(100%-2.5rem))] border-t border-snow/12 pt-6 text-[0.9rem] text-snow/55">
        {company.copyright}
      </p>
    </footer>
  )
}
