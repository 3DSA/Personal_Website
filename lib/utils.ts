import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date string to a readable format
 */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}

/**
 * Calculate reading time based on word count
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200
  const wordCount = text.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Generate a slug from a string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Get video embed URL based on video type
 */
export function getVideoEmbedUrl(url: string, type: 'youtube' | 'vimeo' | 'local'): string {
  if (type === 'local') return url

  if (type === 'youtube') {
    let videoId = ''

    // Handle youtube.com/watch?v= format
    if (url.includes('v=')) {
      videoId = url.split('v=')[1]?.split('&')[0] || ''
    }
    // Handle youtu.be/ format
    else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0] || ''
    }
    // Handle youtube.com/embed/ format
    else if (url.includes('/embed/')) {
      videoId = url.split('/embed/')[1]?.split('?')[0] || ''
    }
    // Fallback to last part of URL
    else {
      videoId = url.split('/').pop()?.split('?')[0] || ''
    }

    return `https://www.youtube.com/embed/${videoId}`
  }

  if (type === 'vimeo') {
    const videoId = url.split('/').pop()
    return `https://player.vimeo.com/video/${videoId}`
  }

  return url
}

/**
 * Get video thumbnail URL
 */
export function getVideoThumbnail(url: string, type: 'youtube' | 'vimeo' | 'local'): string {
  if (type === 'local') return url

  if (type === 'youtube') {
    let videoId = ''

    // Handle youtube.com/watch?v= format
    if (url.includes('v=')) {
      videoId = url.split('v=')[1]?.split('&')[0] || ''
    }
    // Handle youtu.be/ format
    else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0] || ''
    }
    // Handle youtube.com/embed/ format
    else if (url.includes('/embed/')) {
      videoId = url.split('/embed/')[1]?.split('?')[0] || ''
    }
    // Fallback to last part of URL
    else {
      videoId = url.split('/').pop()?.split('?')[0] || ''
    }

    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }

  return url
}
