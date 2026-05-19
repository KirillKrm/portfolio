import { render } from '@testing-library/react'
import CustomCursor from './CustomCursor'

test('CustomCursor renders without crashing', () => {
  const { container } = render(<CustomCursor />)
  expect(container).toBeInTheDocument()
})
