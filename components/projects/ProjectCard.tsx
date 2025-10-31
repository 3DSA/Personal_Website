'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Video } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { VideoPlayer } from './VideoPlayer'
import { Project } from '@/lib/types'
import { getVideoThumbnail } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const videoThumbnail = project.videoThumbnail || (project.videoUrl && project.videoType ? getVideoThumbnail(project.videoUrl, project.videoType) : undefined)

  return (
    <Card hover className="h-full flex flex-col">
      {/* Project Image or Video Thumbnail */}
      <div className="relative w-full aspect-video bg-secondary-100 dark:bg-secondary-800 rounded-t-lg overflow-hidden">
        {project.videoUrl && project.videoType ? (
          // Video thumbnail with play button
          <VideoPlayer
            url={project.videoUrl}
            type={project.videoType}
            thumbnail={videoThumbnail || project.image}
            title={project.title}
          />
        ) : project.image ? (
          // Static image
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          // Placeholder
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-secondary-400">No preview available</p>
          </div>
        )}

        {/* Video indicator badge */}
        {project.videoUrl && (
          <div className="absolute top-3 right-3">
            <Badge variant="primary" className="flex items-center gap-1">
              <Video className="w-3 h-3" />
              <span>Demo</span>
            </Badge>
          </div>
        )}

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <Badge variant="warning">Featured</Badge>
          </div>
        )}
      </div>

      {/* Project Details */}
      <CardContent className="flex-1 p-6">
        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="secondary">+{project.techStack.length - 4}</Badge>
          )}
        </div>
      </CardContent>

      {/* Project Links */}
      <CardFooter className="p-6 pt-0 flex gap-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="outline" size="sm" className="w-full">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="primary" size="sm" className="w-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </a>
        )}
        {!project.githubUrl && !project.liveUrl && project.videoUrl && (
          <Button variant="primary" size="sm" className="w-full">
            <Video className="w-4 h-4 mr-2" />
            Watch Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
