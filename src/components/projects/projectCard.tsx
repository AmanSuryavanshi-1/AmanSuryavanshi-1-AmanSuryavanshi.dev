import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Project } from './projectsData'

export function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play()
          } else {
            videoRef.current?.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  const cardClassName = cn(
    "relative overflow-hidden rounded-3xl shadow-lg shadow-forest-500 transition-transform duration-300 group border-4 border-sage-100 bg-gradient-to-br from-lime-500 to-lime-300/10 hover:from-forest-900 hover:to-forest-500",
    {
      'row-span-2': project.size === 'tall',
      'row-span-1': project.size === 'default',
      'sm:col-span-2 col-span-1': project.size === 'wide',
    }
  )

  return (
    <motion.div
      className={cardClassName}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {project.video ? (
        <video
          ref={videoRef}
          src={project.video}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      ) : null}
      
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/95 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end bg-gradient-to-t from-black/95 via-forest-900/90 to-transparent">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight line-clamp-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 shrink-0">
                  <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="p-1.5 text-lime-400 hover:text-lime-300 hover:bg-forest-800/50"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                  <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="p-1.5 text-lime-400 hover:text-lime-300 hover:bg-forest-800/50"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                  <Link href={`/blogs/${project.slug}`}>
                    <Button 
                      size="sm" 
                      className="px-2 py-1 bg-lime-500 hover:bg-lime-400 text-forest-900 
                                font-semibold transition-all duration-300 rounded-full 
                                border border-white/20 hover:border-white/40 shadow-lg text-[10px]"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
              
              <p className={cn(
                "text-gray-100 text-xs sm:text-sm",
                project.size === 'tall' ? '' : 'line-clamp-2'
              )}>
                {project.description}
              </p>

              <div className="flex gap-1.5 mt-1">
                {project.technologies.slice(0, 6).map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <IconComponent 
                      key={index} 
                      className="w-5 h-5 sm:w-6 sm:h-6 text-lime-400 hover:text-lime-300 transition-colors" 
                      title={tech.name}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}