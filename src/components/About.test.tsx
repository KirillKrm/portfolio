import { render, screen } from '@testing-library/react'
import About from './About'

test('About renders heading', () => {
  render(<About />)
  expect(screen.getByText('About Me')).toBeInTheDocument()
})

test('About renders What I Do section', () => {
  render(<About />)
  expect(screen.getByText('What I Do')).toBeInTheDocument()
})

test('About renders all four service cards', () => {
  render(<About />)
  expect(screen.getByText('User Interface Design')).toBeInTheDocument()
  expect(screen.getByText('Responsive Development')).toBeInTheDocument()
  expect(screen.getByText('Interactive Experiences')).toBeInTheDocument()
  expect(screen.getByText('Full Stack Solutions')).toBeInTheDocument()
})
