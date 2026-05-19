import { useCallback } from 'react'
import { useMotionValue, useTransform, useSpring, MotionValue } from 'framer-motion'

interface UseMouseTiltReturn {
  rotateX: MotionValue<number>
  rotateY: MotionValue<number>
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void
  onMouseLeave: () => void
}

export function useMouseTilt(maxDegrees = 15): UseMouseTiltReturn {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rawRotateX = useTransform(y, [-1, 1], [maxDegrees, -maxDegrees])
  const rawRotateY = useTransform(x, [-1, 1], [-maxDegrees, maxDegrees])
  const rotateX = useSpring(rawRotateX, { stiffness: 200, damping: 20 })
  const rotateY = useSpring(rawRotateY, { stiffness: 200, damping: 20 })

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      x.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2))
      y.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2))
    },
    [x, y]
  )

  const onMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return { rotateX, rotateY, onMouseMove, onMouseLeave }
}
