/**
 * Project interface
 */
export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription?: string
  image?: string
  videoUrl?: string
  videoType?: 'youtube' | 'vimeo' | 'local'
  videoThumbnail?: string
  techStack: string[]
  category: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  date: string
  highlights?: string[]
}

/**
 * Skill interface
 */
export interface Skill {
  name: string
  category: 'Language' | 'Framework' | 'Tool' | 'Database' | 'Other'
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  icon?: string
}

/**
 * Experience interface
 */
export interface Experience {
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string[]
  technologies: string[]
}

/**
 * Education interface
 */
export interface Education {
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description?: string
  gpa?: string
  honors?: string[]
}

/**
 * Social media interface
 */
export interface Social {
  name: string
  url: string
  icon: string
}

/**
 * Contact form data interface
 */
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

/**
 * Navigation link interface
 */
export interface NavLink {
  name: string
  href: string
}

/**
 * Theme type
 */
export type Theme = 'light' | 'dark'
