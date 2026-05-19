import { render, screen } from '@testing-library/react'
import Nav from './Nav'

test('Nav renders all section links', () => {
  render(<Nav />)
  expect(screen.getByText('About')).toBeInTheDocument()
  expect(screen.getByText('Skills')).toBeInTheDocument()
  expect(screen.getByText('Projects')).toBeInTheDocument()
  expect(screen.getByText('Contact')).toBeInTheDocument()
})

test('Nav renders logo image', () => {
  render(<Nav />)
  expect(screen.getByAltText('Kyrylo Karmazin logo')).toBeInTheDocument()
})
