import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ParticleCanvas from './ParticleCanvas'
import { useMagneticEffect } from '../hooks/useMagneticEffect'

const NAME = 'Kyrylo Karmazin'

interface MagneticButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'outline'
}

function MagneticButton({
  children,
  onClick,
  variant = 'primary',
}: MagneticButtonProps) {
  const { x, y, onMouseMove, onMouseLeave } = useMagneticEffect(0.25)
  return (
    <motion.button
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={
        variant === 'primary'
          ? 'px-8 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-full transition-colors duration-200 text-sm'
          : 'px-8 py-3 border border-white/20 hover:border-accent text-text-primary font-medium rounded-full transition-colors duration-200 text-sm'
      }
    >
      {children}
    </motion.button>
  )
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const { scrollY } = useScroll()
  const chevronOpacity = useTransform(scrollY, [0, 150], [1, 0])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      <ParticleCanvas />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Role pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full border border-accent/30 bg-accent/10 text-accent-light text-sm font-medium"
        >
          Full Stack Developer
        </motion.div>

        {/* Animated name */}
        <div className="font-grotesk text-6xl sm:text-8xl font-bold text-text-primary leading-tight pb-3 mb-6 overflow-hidden">
          {NAME.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + i * 0.04,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="text-text-muted text-xl mb-10"
        >
          Crafting immersive digital experiences
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <MagneticButton onClick={() => scrollTo('projects')}>
            View Work
          </MagneticButton>
          <MagneticButton variant="outline" onClick={() => scrollTo('contact')}>
            Get in Touch
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted"
        style={{ opacity: chevronOpacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}
