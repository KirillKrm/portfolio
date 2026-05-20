import '@testing-library/jest-dom/vitest'

// Polyfill for window.matchMedia (not implemented in jsdom)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Polyfill for IntersectionObserver used by framer-motion
;(window as any).IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return []
  }
  unobserve() {}
}

// Mock react-icons brand icons
vi.mock('react-icons/fa', async () => {
  const React = await import('react')
  const mockIcon = (props: any) => React.createElement('svg', props)
  return { FaGithub: mockIcon, FaLinkedin: mockIcon, FaFacebook: mockIcon }
})

// Mock lucide-react icons
vi.mock('lucide-react', async () => {
  const React = await import('react')
  const mockIcon = React.forwardRef((props: any) => React.createElement('svg', props))
  return {
    ExternalLink: mockIcon,
    Monitor: mockIcon,
    Smartphone: mockIcon,
    MousePointerClick: mockIcon,
    Globe: mockIcon,
    ChevronDown: mockIcon,
    Menu: mockIcon,
    X: mockIcon,
  }
})
