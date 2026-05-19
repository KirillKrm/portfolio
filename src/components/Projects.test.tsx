import { render, screen } from '@testing-library/react'
import Projects from './Projects'

test('Projects renders section heading', () => {
  render(<Projects />)
  expect(screen.getByText('Projects')).toBeInTheDocument()
})

test('Projects renders all four projects', () => {
  render(<Projects />)
  expect(screen.getByText('Parcelgo')).toBeInTheDocument()
  expect(screen.getByText('Twitter Clone')).toBeInTheDocument()
  expect(screen.getByText('Video Conferencing')).toBeInTheDocument()
  expect(screen.getByText('Music Player')).toBeInTheDocument()
})

test('Projects renders GitHub links for open-source projects', () => {
  render(<Projects />)
  const links = screen.getAllByRole('link')
  const hrefs = links.map((l) => l.getAttribute('href'))
  expect(hrefs).toContain('https://github.com/KirillKrm/twitter-clone')
  expect(hrefs).toContain('https://github.com/KirillKrm/WebChat_frontend')
  expect(hrefs).toContain('https://github.com/KirillKrm/music-player')
})
