import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  const NavLinks = ({ className = '' }) => (
    <ul className={`flex items-center gap-6 ${className}`}>
      <li><button onClick={() => scrollTo('services')} className="text-sm text-gray-700 hover:text-gray-900 transition">Leistungen</button></li>
      <li><button onClick={() => scrollTo('about')} className="text-sm text-gray-700 hover:text-gray-900 transition">Über uns</button></li>
      <li><button onClick={() => scrollTo('projects')} className="text-sm text-gray-700 hover:text-gray-900 transition">Referenzen</button></li>
      <li><button onClick={() => scrollTo('contact')} className="text-sm text-gray-700 hover:text-gray-900 transition">Kontakt</button></li>
      <li>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }} className="inline-flex items-center rounded-full bg-blue-600 text-white text-sm px-4 py-2 shadow hover:bg-blue-700 transition">
          Angebot anfragen
        </a>
      </li>
    </ul>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400" />
            <span className="font-semibold tracking-tight">hmd services gmbh</span>
          </a>
          <nav className="hidden md:block">
            <NavLinks />
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Menü öffnen">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <nav className="md:hidden pb-4">
            <NavLinks className="flex-col items-start gap-4" />
          </nav>
        )}
      </div>
    </header>
  )
}
