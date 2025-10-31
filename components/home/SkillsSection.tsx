'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { getSkillsByCategory } from '@/data/skills'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/constants'

export function SkillsSection() {
  const categories = ['Language', 'Framework', 'Tool', 'Database', 'Other']

  return (
    <section className="py-20 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={FADE_IN_UP}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to build
            exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => {
            const skills = getSkillsByCategory(category)
            if (skills.length === 0) return null

            return (
              <motion.div key={category} variants={FADE_IN_UP}>
                <Card hover>
                  <CardHeader>
                    <CardTitle>{category}s</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill.name} variant="primary">
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
