'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectFilter } from '@/components/projects/ProjectFilter'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { getProjectsByCategory } from '@/data/projects'
import { FADE_IN_UP } from '@/lib/constants'

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredProjects = getProjectsByCategory(activeCategory)

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_IN_UP}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing my skills in web development,
            software engineering, and problem-solving. Many projects include video demos!
          </p>
        </motion.div>

        {/* Project Filter */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_IN_UP}
          transition={{ delay: 0.2 }}
        >
          <ProjectFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Projects Grid */}
        <ProjectGrid projects={filteredProjects} />
      </div>
    </div>
  )
}
