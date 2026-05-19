import { render, screen } from '@testing-library/react'
import App from './App'

test('App renders without crashing', () => {
  render(<App />)
  expect(document.body).toBeInTheDocument()
})

test('App renders the hero role tag', () => {
  render(<App />)
  expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
})
