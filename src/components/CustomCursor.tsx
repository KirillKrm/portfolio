import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const springX = useSpring(mouseX, { stiffness: 250, damping: 28 })
  const springY = useSpring(mouseY, { stiffness: 250, damping: 28 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Instant dot */}
      <motion.div
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9998]"
        style={{ left: mouseX, top: mouseY, x: '-50%', y: '-50%' }}
      />
      {/* Spring-lag ring */}
      <motion.div
        className="fixed w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9997]"
        style={{ left: springX, top: springY, x: '-50%', y: '-50%' }}
      />
    </>
  )
}
