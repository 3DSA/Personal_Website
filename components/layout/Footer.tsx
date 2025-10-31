import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import { socialLinks } from '@/data/social'

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Map icon names to icon components
  const iconMap: Record<string, React.ReactNode> = {
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    mail: <Mail className="h-5 w-5" />,
  }

  return (
    <footer className="border-t border-secondary-200 bg-white dark:border-secondary-800 dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-secondary-900 dark:text-white"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-2 text-sm text-secondary-600 dark:text-secondary-400">
              {SITE_CONFIG.description}
            </p>
            <p className="mt-4 text-xs text-secondary-500 dark:text-secondary-500">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-secondary-900 dark:text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-secondary-900 dark:text-white uppercase tracking-wider">
              Connect
            </h3>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-secondary-200 dark:border-secondary-800">
          <p className="text-center text-sm text-secondary-600 dark:text-secondary-400">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
