'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { PROJECT_CATEGORIES } from '@/lib/constants'

interface ProjectFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function ProjectFilter({ activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      {PROJECT_CATEGORIES.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
            activeCategory === category
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 dark:bg-secondary-800 dark:text-secondary-300 dark:hover:bg-secondary-700'
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  )
}
