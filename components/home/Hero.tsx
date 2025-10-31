'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FADE_IN_UP, FADE_IN_DOWN } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-950 dark:via-secondary-900 dark:to-primary-950" />

      {/* Animated circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary-200 dark:bg-secondary-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_IN_DOWN}
          >
            <p className="text-lg sm:text-xl text-primary-600 dark:text-primary-400 font-medium mb-4">
              Hi, I'm
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={FADE_IN_UP}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 dark:text-white mb-4"
          >
            Dhruv Susheelkar
          </motion.h1>

          {/* Role/Title with typing effect */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_IN_UP}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary-700 dark:text-secondary-300 mb-6">
              A.I./M.L. Engineer & Software Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={FADE_IN_UP}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-400 mb-8 max-w-2xl mx-auto"
          >
            Building intelligent systems and scalable AI solutions. Specializing in Machine
            Learning, Agentic AI, and Cloud Infrastructure with a focus on performance
            optimization and cost reduction.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_IN_UP}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/projects">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline" size="lg" className="group">
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                Download Resume
              </Button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="mt-16"
          >
            <div className="w-6 h-10 border-2 border-secondary-400 dark:border-secondary-600 rounded-full mx-auto relative">
              <div className="w-1.5 h-2 bg-secondary-400 dark:bg-secondary-600 rounded-full absolute left-1/2 -translate-x-1/2 top-2" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
