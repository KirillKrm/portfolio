import { render, screen } from '@testing-library/react'
import Hero from './Hero'

test('Hero renders role tag and subtitle', () => {
  render(<Hero />)
  expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
  expect(screen.getByText('Crafting immersive digital experiences')).toBeInTheDocument()
})

test('Hero renders CTA buttons', () => {
  render(<Hero />)
  expect(screen.getByText('View Work')).toBeInTheDocument()
  expect(screen.getByText('Get in Touch')).toBeInTheDocument()
})
