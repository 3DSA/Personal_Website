import { Social } from '@/lib/types'

export const socialLinks: Social[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/3DSA',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/dhruv-susheelkar',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:dsusheelkar@gmail.com',
    icon: 'mail',
  },
]

export function getSocialLinks(): Social[] {
  return socialLinks
}
