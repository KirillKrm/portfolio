import { render } from '@testing-library/react'
import ParticleCanvas from './ParticleCanvas'

test('ParticleCanvas renders a canvas element', () => {
  const { container } = render(<ParticleCanvas />)
  expect(container.querySelector('canvas')).toBeInTheDocument()
})
