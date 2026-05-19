import { useCallback } from 'react'
import { useMotionValue, useSpring, MotionValue } from 'framer-motion'

interface UseMagneticEffectReturn {
  x: MotionValue<number>
  y: MotionValue<number>
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void
  onMouseLeave: () => void
}

export function useMagneticEffect(strength = 0.3): UseMagneticEffectReturn {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      x.set((e.clientX - centerX) * strength)
      y.set((e.clientY - centerY) * strength)
    },
    [x, y, strength]
  )

  const onMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return { x: springX, y: springY, onMouseMove, onMouseLeave }
}
