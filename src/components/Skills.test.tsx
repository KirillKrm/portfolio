import { render, screen } from '@testing-library/react'
import Skills from './Skills'

test('Skills renders section heading', () => {
  render(<Skills />)
  expect(screen.getByText('Skills')).toBeInTheDocument()
})

test('Skills renders all categories', () => {
  render(<Skills />)
  expect(screen.getByText('Languages')).toBeInTheDocument()
  expect(screen.getByText('Frontend')).toBeInTheDocument()
  expect(screen.getByText('Backend')).toBeInTheDocument()
  expect(screen.getByText('Testing & QA')).toBeInTheDocument()
  expect(screen.getByText('Tools & DevOps')).toBeInTheDocument()
})

test('Skills renders key skill tags', () => {
  render(<Skills />)
  expect(screen.getByText('TypeScript')).toBeInTheDocument()
  expect(screen.getByText('NestJS')).toBeInTheDocument()
  expect(screen.getByText('Next.js')).toBeInTheDocument()
  expect(screen.getByText('MongoDB / Mongoose')).toBeInTheDocument()
})
