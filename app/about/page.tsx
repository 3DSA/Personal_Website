'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { experiences, education } from '@/data/experience'
import { skills } from '@/data/skills'
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/constants'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export default function AboutPage() {
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
            About Me
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Get to know more about my background, experience, and skills.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_IN_UP}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Profile Image Placeholder */}
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white text-6xl font-bold flex-shrink-0">
                  DS
                </div>

                {/* Bio Text */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    Hi, I'm Dhruv Susheelkar
                  </h2>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                    I'm a passionate software developer with a strong focus on building scalable
                    web applications and creating exceptional user experiences. With expertise in
                    modern web technologies, I specialize in full-stack development using React,
                    Next.js, TypeScript, and Node.js.
                  </p>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    I'm constantly learning and staying up-to-date with the latest technologies
                    and best practices in web development. I enjoy tackling complex problems and
                    turning ideas into reality through clean, maintainable code.
                  </p>
                  <a href="/resume.pdf" download>
                    <Button>
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={STAGGER_CONTAINER}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white">
              Work Experience
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={FADE_IN_UP}>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-sm text-secondary-600 dark:text-secondary-400">
                        <p>{exp.location}</p>
                        <p>
                          {formatDate(exp.startDate)} -{' '}
                          {exp.endDate === 'Present' ? 'Present' : formatDate(exp.endDate)}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-secondary-600 dark:text-secondary-400 text-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={STAGGER_CONTAINER}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white">
              Education
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div key={index} variants={FADE_IN_UP}>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="text-sm text-secondary-600 dark:text-secondary-400">
                        <p>{edu.location}</p>
                        <p>
                          {formatDate(edu.startDate)} -{' '}
                          {edu.endDate === 'Present' ? 'Present' : formatDate(edu.endDate)}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {edu.description && (
                      <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                        {edu.description}
                      </p>
                    )}
                    {edu.gpa && (
                      <p className="text-secondary-700 dark:text-secondary-300 font-medium mb-4">
                        GPA: {edu.gpa}
                      </p>
                    )}
                    {edu.honors && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                          <p className="font-medium text-secondary-900 dark:text-white">
                            Honors & Awards
                          </p>
                        </div>
                        <ul className="list-disc list-inside space-y-1">
                          {edu.honors.map((honor, i) => (
                            <li
                              key={i}
                              className="text-secondary-600 dark:text-secondary-400 text-sm"
                            >
                              {honor}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={FADE_IN_UP}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-8 text-center">
            All Skills
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="primary" className="text-sm">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
