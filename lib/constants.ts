import { NavLink } from './types'

/**
 * Site metadata
 */
export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Dhruv Susheelkar',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'A.I./M.L. Engineer & Software Developer',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/3DSA',
    linkedin: 'https://linkedin.com/in/dhruv-susheelkar',
    email: 'mailto:dsusheelkar@ucsd.edu',
  },
}

/**
 * Navigation links
 */
export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

/**
 * Skill categories
 */
export const SKILL_CATEGORIES = [
  'Language',
  'Framework',
  'Tool',
  'Database',
  'Other',
] as const

/**
 * Project categories for filtering
 */
export const PROJECT_CATEGORIES = [
  'All',
  'Web Development',
  'Machine Learning',
  'Data Science',
] as const

/**
 * Animation variants for Framer Motion
 */
export const FADE_IN_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

export const FADE_IN_DOWN = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

export const FADE_IN = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const SLIDE_IN_LEFT = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

export const SLIDE_IN_RIGHT = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}
