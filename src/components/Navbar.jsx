import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import company from '../data/company.json';
import navigation from '../data/navigation.json';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[4.5rem] max-w-screen transition-[background,box-shadow,backdrop-filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? 'bg-deep/92 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md' : ''
      }`}
    >
      <div className="mx-auto flex h-full w-[min(1120px,calc(100%-2.5rem))] items-center justify-between gap-4">
        <Link
          to="/"
          className="relative z-[60] inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-snow"
          onClick={() => setOpen(false)}
        >
          <span
            className="size-3.5 rounded-full bg-linear-to-br from-mint to-gold shadow-[0_0_0_3px_rgba(126,217,196,0.25)]"
            aria-hidden="true"
          />
          {company.name}
        </Link>

        <button
          type="button"
          className="relative z-[60] flex size-10 cursor-pointer flex-col items-center justify-center border-0 bg-transparent md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`my-[5px] block h-0.5 w-[1.35rem] bg-snow transition duration-300 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`my-[5px] block h-0.5 w-[1.35rem] bg-snow transition duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`my-[5px] block h-0.5 w-[1.35rem] bg-snow transition duration-300 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>

        <nav
          className={`items-center gap-7 md:flex ${
            open
              ? 'fixed inset-0 z-50 flex flex-col justify-center gap-8 bg-deep/97 opacity-100'
              : 'hidden md:flex'
          }`}
          aria-label="Main"
        >
          {navigation.links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `relative font-medium text-snow/80 transition-colors duration-300 hover:text-snow md:text-[0.95rem] ${
                  open ? 'font-display text-[1.35rem]' : ''
                } ${isActive ? 'text-snow after:scale-x-100' : 'after:scale-x-0'} after:absolute after:inset-x-0 after:-bottom-1.5 after:h-0.5 after:origin-left after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
