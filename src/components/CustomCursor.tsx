import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const springX = useSpring(mouseX, { stiffness: 250, damping: 28 })
  const springY = useSpring(mouseY, { stiffness: 250, damping: 28 })

  useEffect(() => {
    if (isTouchDevice) return
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [isTouchDevice, mouseX, mouseY])

  if (isTouchDevice) return null

  return (
    <>
      {/* Instant dot */}
      <motion.div
        className="fixed size-2 bg-white rounded-full pointer-events-none z-9998"
        style={{ left: mouseX, top: mouseY, x: '-50%', y: '-50%' }}
      />
      {/* Spring-lag ring */}
      <motion.div
        className="fixed size-8 border border-white/30 rounded-full pointer-events-none z-9997"
        style={{ left: springX, top: springY, x: '-50%', y: '-50%' }}
      />
    </>
  )
}
