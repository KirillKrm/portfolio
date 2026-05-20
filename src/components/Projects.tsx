import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useMouseTilt } from '../hooks/useMouseTilt'
import { useMagneticEffect } from '../hooks/useMagneticEffect'

interface Project {
  number: string
  name: string
  description: string
  stack: string[]
  githubUrl?: string
  imageUrl: string
}

const projects: Project[] = [
  {
    number: '01',
    name: 'Parcelgo',
    description:
      'Full stack parcel logistics platform with real-time tracking, label printing, and multi-carrier integration.',
    stack: [
      'Next.js',
      'NestJS',
      'MongoDB',
      'AWS S3',
      'Socket.IO',
      'React Query',
      'Redux',
    ],
    imageUrl: `${process.env.PUBLIC_URL}/parcelgo.png`,
  },
  {
    number: '02',
    name: 'Twitter Clone',
    description:
      'A web app that allows you to create and read user posts with internationalization support.',
    stack: ['React.js', 'Redux', 'Tailwind CSS', 'Framer Motion', 'i18n'],
    githubUrl: 'https://github.com/KirillKrm/twitter-clone',
    imageUrl:
      'https://raw.githubusercontent.com/KirillKrm/portfolio/main/public/twitter_clone.jpg',
  },
  {
    number: '03',
    name: 'Video Conferencing',
    description:
      'A web app for creating or joining video meetings with peer-to-peer connections.',
    stack: ['React.js', 'Socket.IO', 'WebRTC'],
    githubUrl: 'https://github.com/KirillKrm/WebChat_frontend',
    imageUrl:
      'https://raw.githubusercontent.com/KirillKrm/portfolio/main/public/video_conferencing.png',
  },
  {
    number: '04',
    name: 'Music Player',
    description:
      'A web app for listening to music in the browser with audio visualization.',
    stack: ['Angular', 'Angular Material', 'Tailwind CSS'],
    githubUrl: 'https://github.com/KirillKrm/music-player',
    imageUrl:
      'https://raw.githubusercontent.com/KirillKrm/portfolio/main/public/music_player.png',
  },
]

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useMouseTilt(4)
  const {
    x: magX,
    y: magY,
    onMouseMove: magMove,
    onMouseLeave: magLeave,
  } = useMagneticEffect(0.2)
  const isInView = useInView(cardRef, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative grid grid-cols-1 sm:grid-cols-[55%_45%] rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-accent/30 transition-colors duration-300 group"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56 sm:h-72">
        <motion.img
          style={{ y: imageY }}
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-full object-cover scale-110"
          draggable={false}
        />
        <div className="absolute inset-0 bg-base/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="relative p-8 flex flex-col justify-center">
        <span className="absolute top-6 right-6 font-grotesk text-6xl font-bold text-white/[0.04] select-none pointer-events-none">
          {project.number}
        </span>
        <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
          {project.number}
        </span>
        <h3 className="font-grotesk text-2xl font-bold text-text-primary mb-3">
          {project.name}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-accent/10 border border-accent/20 text-accent-light"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.githubUrl && (
          <motion.a
            style={{ x: magX, y: magY }}
            onMouseMove={magMove}
            onMouseLeave={magLeave}
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-text-primary hover:text-accent transition-colors duration-200 text-sm font-medium w-fit"
          >
            GitHub <ExternalLink size={14} />
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 sm:px-8 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-grotesk text-4xl font-bold text-text-primary mb-4 text-center"
      >
        Projects
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-16 h-1 bg-accent rounded-full mx-auto mb-16"
      />
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  )
}
