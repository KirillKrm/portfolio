import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import { useMagneticEffect } from '../hooks/useMagneticEffect'

const EMAIL = 'kirillkarmazin2301@gmail.com'

const socials = [
  { Icon: FaGithub, label: 'GitHub', url: 'https://github.com/KirillKrm' },
  {
    Icon: FaLinkedin,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kyrylo-karmazin/',
  },
  {
    Icon: FaFacebook,
    label: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100007744062507',
  },
]

interface SocialButtonProps {
  Icon: IconType
  label: string
  url: string
}

function SocialButton({ Icon, label, url }: SocialButtonProps) {
  const { x, y, onMouseMove, onMouseLeave } = useMagneticEffect(0.25)
  const BrandIcon = Icon as React.FC<{ size?: number }>
  return (
    <motion.a
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-accent/50 hover:bg-accent/10 text-text-muted hover:text-text-primary transition-colors duration-200"
    >
      <BrandIcon size={18} />
      <span className="text-sm font-medium">{label}</span>
    </motion.a>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      className="relative py-40 px-4 sm:px-8 flex flex-col items-center text-center overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col items-center"
      >
        <h2 className="font-grotesk text-5xl sm:text-7xl font-bold text-text-primary mb-6 leading-tight">
          Let&apos;s build something{' '}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            together.
          </span>
        </h2>

        <button
          onClick={copyEmail}
          className="text-text-muted hover:text-accent transition-colors duration-200 mb-12 text-lg"
        >
          {copied ? '✓ Copied!' : EMAIL}
        </button>

        <div className="w-16 h-px bg-white/10 mb-10" />

        <div className="flex flex-wrap gap-3 justify-center">
          {socials.map((s) => (
            <SocialButton key={s.label} {...s} />
          ))}
        </div>
      </motion.div>

      <div className="mt-24 text-text-muted text-sm relative z-10">
        © {new Date().getFullYear()} Kyrylo Karmazin
      </div>
    </section>
  )
}
