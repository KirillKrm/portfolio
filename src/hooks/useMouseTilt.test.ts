import { renderHook, act } from '@testing-library/react'
import { useMouseTilt } from './useMouseTilt'

describe('useMouseTilt', () => {
  it('returns rotateX and rotateY motion values', () => {
    const { result } = renderHook(() => useMouseTilt())
    expect(result.current.rotateX).toBeDefined()
    expect(result.current.rotateY).toBeDefined()
  })

  it('exposes onMouseMove and onMouseLeave handlers', () => {
    const { result } = renderHook(() => useMouseTilt())
    expect(typeof result.current.onMouseMove).toBe('function')
    expect(typeof result.current.onMouseLeave).toBe('function')
  })
})
