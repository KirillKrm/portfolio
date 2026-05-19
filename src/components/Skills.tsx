import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'HTML / CSS'],
  },
  {
    label: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'Redux / RTK',
      'React Query',
      'React Hook Form',
      'Framer Motion',
      'Angular',
      'Vue.js',
      'Tailwind CSS',
      'i18next',
    ],
  },
  {
    label: 'Backend',
    skills: [
      'NestJS',
      'Node.js',
      'MongoDB / Mongoose',
      'REST APIs',
      'JWT / Auth',
      'AWS S3',
      'Socket.IO',
      'SendGrid',
      'Google APIs',
    ],
  },
  {
    label: 'Testing & QA',
    skills: ['Jest', 'Playwright', 'React Testing Library'],
  },
  {
    label: 'Tools & DevOps',
    skills: ['Git', 'Sentry', 'ESLint / Prettier', 'WebRTC', 'QR / PDF generation'],
  },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 px-4 sm:px-8 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-grotesk text-4xl font-bold text-text-primary mb-4 text-center"
      >
        Skills
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-16 h-1 bg-accent rounded-full mx-auto mb-16"
      />

      <div ref={ref} className="flex flex-col gap-10">
        {skillCategories.map((category, catIndex) => (
          <div key={category.label}>
            <motion.h3
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: catIndex * 0.08, duration: 0.5 }}
              className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-4"
            >
              {category.label}
            </motion.h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: catIndex * 0.08 + skillIndex * 0.03,
                    duration: 0.4,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  className="px-4 py-1.5 rounded-full bg-surface border border-accent/20 text-text-primary text-sm hover:border-accent/60 hover:bg-accent/10 transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
