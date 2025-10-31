'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { ContactForm } from '@/components/forms/ContactForm'
import { Card, CardContent } from '@/components/ui/Card'
import { socialLinks } from '@/data/social'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/constants'

export default function ContactPage() {
  const iconMap: Record<string, React.ReactNode> = {
    github: <Github className="w-6 h-6" />,
    linkedin: <Linkedin className="w-6 h-6" />,
    twitter: <Twitter className="w-6 h-6" />,
    mail: <Mail className="w-6 h-6" />,
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_IN_UP}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out! I'll get back
            to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={STAGGER_CONTAINER}
            className="lg:col-span-1 space-y-6"
          >
            {/* Email Card */}
            <motion.div variants={FADE_IN_UP}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 dark:text-white mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:dsusheelkar@gmail.com"
                        className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        dsusheelkar@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Location Card */}
            <motion.div variants={FADE_IN_UP}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 dark:text-white mb-1">
                        Location
                      </h3>
                      <p className="text-secondary-600 dark:text-secondary-400">
                        San Francisco, CA
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links Card */}
            <motion.div variants={FADE_IN_UP}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-4">
                    Connect With Me
                  </h3>
                  <div className="flex flex-col gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary-50 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                      >
                        {iconMap[social.icon]}
                        <span className="font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_IN_UP}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
