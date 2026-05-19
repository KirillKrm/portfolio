// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Polyfill for IntersectionObserver used by framer-motion
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return []
  }
  unobserve() {}
} as any;

// Mock react-icons brand icons
jest.mock('react-icons/fa', () => {
  const React = require('react');
  const mockIcon = (props: any) => React.createElement('svg', props);
  return { FaGithub: mockIcon, FaLinkedin: mockIcon, FaFacebook: mockIcon };
});

// Mock lucide-react icons
jest.mock('lucide-react', () => {
  const React = require('react');
  const mockIcon = React.forwardRef((props: any) => React.createElement('svg', props));
  return {
    ExternalLink: mockIcon,
    Monitor: mockIcon,
    Smartphone: mockIcon,
    MousePointerClick: mockIcon,
    Globe: mockIcon,
    ChevronDown: mockIcon,
    Menu: mockIcon,
    X: mockIcon,
  };
});
