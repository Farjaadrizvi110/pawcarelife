import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { PawIcon, MenuIcon, XIcon } from './Icons'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/articles', label: 'Articles' },
  { to: '/tools', label: 'Free Tools' },
  { to: '/about', label: 'About & Mission' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-[#e8ddc9]">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="w-9 h-9 rounded-full bg-forest text-parch flex items-center justify-center group-hover:rotate-[-10deg] transition-transform">
            <PawIcon className="w-5 h-5" />
          </span>
          <span className="font-display font-semibold text-forest text-lg leading-none">
            Paws <span className="text-terracotta">&</span> Purpose
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link text-[15px] font-medium text-forest/80 hover:text-forest ${isActive ? 'active text-forest' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/about#help"
            className="bg-terracotta hover:bg-terracotta-dark text-cream text-sm font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors"
          >
            Help Animals
          </Link>
        </nav>

        <button
          className="md:hidden text-forest p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[#e8ddc9] bg-cream px-5 py-4 flex flex-col gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`py-2.5 font-medium ${
                location.pathname === item.to ? 'text-terracotta' : 'text-forest/80'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/about#help"
            onClick={() => setOpen(false)}
            className="mt-2 bg-terracotta text-cream text-sm font-semibold uppercase tracking-wider px-5 py-3 rounded-full text-center"
          >
            Help Animals
          </Link>
        </nav>
      )}
    </header>
  )
}
