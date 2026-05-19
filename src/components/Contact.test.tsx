import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'

test('Contact renders heading text', () => {
  render(<Contact />)
  expect(screen.getByText(/Let's build something/)).toBeInTheDocument()
  expect(screen.getByText(/together\./)).toBeInTheDocument()
})

test('Contact renders email address', () => {
  render(<Contact />)
  expect(screen.getByText('kirillkarmazin2301@gmail.com')).toBeInTheDocument()
})

test('Contact shows "Copied!" after clicking email', async () => {
  Object.assign(navigator, {
    clipboard: { writeText: jest.fn().mockResolvedValue(undefined) },
  })
  render(<Contact />)
  await userEvent.click(screen.getByText('kirillkarmazin2301@gmail.com'))
  expect(await screen.findByText('✓ Copied!')).toBeInTheDocument()
})

test('Contact renders social links', () => {
  render(<Contact />)
  expect(screen.getByText('GitHub')).toBeInTheDocument()
  expect(screen.getByText('LinkedIn')).toBeInTheDocument()
  expect(screen.getByText('Facebook')).toBeInTheDocument()
})
