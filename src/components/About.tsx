import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Monitor, Smartphone, MousePointerClick, Globe } from 'lucide-react'
import { useMouseTilt } from '../hooks/useMouseTilt'

const services = [
  {
    Icon: Monitor,
    title: 'User Interface Design',
    desc: 'Crafting pixel-perfect designs that not only look stunning but also enhance user experience.',
  },
  {
    Icon: Smartphone,
    title: 'Responsive Development',
    desc: 'Ensuring seamless experiences across all devices, from desktops to smartphones.',
  },
  {
    Icon: MousePointerClick,
    title: 'Interactive Experiences',
    desc: 'Bringing websites to life with engaging animations, transitions, and user interactions.',
  },
  {
    Icon: Globe,
    title: 'Full Stack Solutions',
    desc: 'Building end-to-end applications from database design to polished user interfaces.',
  },
]

const bio = [
  'Welcome to the portfolio of <b>Kyrylo Karmazin</b>, a <b>passionate</b> full stack developer dedicated to crafting immersive digital experiences, residing in Kyiv, Ukraine.',
  'I graduated from <b>National Aviation University</b> in 2024 with a master\'s degree in Computer Engineering, and I\'ve been actively building full stack applications ever since.',
  'I firmly believe in <b>continuous growth</b> — technology is my passion, and I\'m driven by the urge to push the boundaries of what\'s achievable. I eagerly anticipate new opportunities. 🙂',
]

function PhotoCard() {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useMouseTilt(10)
  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden max-w-sm mx-auto"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute -inset-1 bg-accent/20 rounded-3xl blur-xl pointer-events-none" />
      <img
        src="https://raw.githubusercontent.com/KirillKrm/portfolio/main/public/portret.jpg"
        alt="Kyrylo Karmazin"
        className="relative rounded-3xl w-full object-cover select-none"
        draggable={false}
      />
    </motion.div>
  )
}

interface ServiceCardProps {
  service: (typeof services)[0]
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useMouseTilt(5)
  const { Icon } = service
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 transition-colors duration-300"
    >
      <Icon className="text-accent mb-3" size={28} />
      <h4 className="font-grotesk font-bold text-text-primary mb-2">{service.title}</h4>
      <p className="text-text-muted text-sm leading-relaxed">{service.desc}</p>
    </motion.div>
  )
}

export default function About() {
  const bioRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(bioRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Bio row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-center mb-24">
        <PhotoCard />

        <div ref={bioRef} className="flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-grotesk text-4xl font-bold text-text-primary"
          >
            About Me
          </motion.h2>
          {bio.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.15, duration: 0.6 }}
              className="text-text-muted leading-relaxed"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>
      </div>

      {/* What I Do */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-grotesk text-2xl font-bold text-text-primary mb-8 text-center"
      >
        What I Do
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}
