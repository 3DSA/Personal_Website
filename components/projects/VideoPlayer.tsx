'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Play, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const ReactPlayerComponent = dynamic(() => import('react-player'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center bg-black text-white">Loading player...</div>
})

const ReactPlayer = ReactPlayerComponent as any

interface VideoPlayerProps {
  url: string
  type: 'youtube' | 'vimeo' | 'local'
  thumbnail?: string
  title?: string
  autoplay?: boolean
  className?: string
}

export function VideoPlayer({
  url,
  type,
  thumbnail,
  title = 'Video',
  autoplay = false,
  className,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handlePlayClick = () => {
    setShowModal(true)
    setIsPlaying(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setIsPlaying(false)
  }

  return (
    <>
      {/* Video Thumbnail with Play Button */}
      <div className={cn('relative group cursor-pointer', className)} onClick={handlePlayClick}>
        {thumbnail && (
          <div className="relative w-full aspect-video bg-secondary-900 rounded-lg overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
                <Play className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-secondary-300 transition-colors"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              {type === 'youtube' ? (
                <iframe
                  src={`https://www.youtube.com/embed/${url.includes('youtu.be/') ? url.split('youtu.be/')[1]?.split('?')[0] : url.split('v=')[1]?.split('&')[0]}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <ReactPlayer
                  url={url}
                  playing={isPlaying}
                  controls
                  width="100%"
                  height="100%"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

/**
 * Inline Video Player Component (for embedding without modal)
 */
interface InlineVideoPlayerProps {
  url: string
  type: 'youtube' | 'vimeo' | 'local'
  className?: string
}

export function InlineVideoPlayer({ url, type, className }: InlineVideoPlayerProps) {
  return (
    <div className={cn('relative aspect-video bg-black rounded-lg overflow-hidden', className)}>
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          }
        }}
      />
    </div>
  )
}
