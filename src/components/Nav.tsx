import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const sections = ['About', 'Skills', 'Projects', 'Contact']

function scrollTo(id: string) {
  document
    .getElementById(id.toLowerCase())
    ?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80], [0, 1])

  const handleNav = (section: string) => {
    scrollTo(section)
    setMenuOpen(false)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 py-4 flex justify-between items-center backdrop-blur-md bg-base/80 border-b border-white/5"
      style={{ opacity }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/logo.png`}
        alt="Kyrylo Karmazin logo"
        width={36}
        height={36}
        className="select-none rounded-full"
      />

      {/* Desktop links */}
      <div className="hidden sm:flex gap-8">
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => handleNav(s)}
            className="text-text-muted hover:text-text-primary transition-colors duration-200 text-sm font-medium"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        className="sm:hidden text-text-primary"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-surface border-b border-white/5 py-6 flex flex-col items-center gap-5 sm:hidden"
        >
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => handleNav(s)}
              className="text-text-muted hover:text-text-primary transition-colors duration-200 text-base"
            >
              {s}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
