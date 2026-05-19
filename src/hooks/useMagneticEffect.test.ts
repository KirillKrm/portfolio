import { renderHook } from '@testing-library/react'
import { useMagneticEffect } from './useMagneticEffect'

describe('useMagneticEffect', () => {
  it('returns spring x and y motion values', () => {
    const { result } = renderHook(() => useMagneticEffect())
    expect(result.current.x).toBeDefined()
    expect(result.current.y).toBeDefined()
  })

  it('exposes onMouseMove and onMouseLeave handlers', () => {
    const { result } = renderHook(() => useMagneticEffect())
    expect(typeof result.current.onMouseMove).toBe('function')
    expect(typeof result.current.onMouseLeave).toBe('function')
  })
})
