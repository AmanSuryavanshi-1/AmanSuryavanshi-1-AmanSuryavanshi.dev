"use client"

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { Project, projects } from './projectsData'
import { TransparentButton } from '../transparent-button'
import { SolidButton } from '../solid-button'

export default function ProjectsSection() {
  return (
    <section id='projects' className="py-20 min-h-screen max-w-6xl mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          id="projects-cards-heading"
           className="text-3xl md:text-5xl font-bold font-serif text-forest-900 mb-8 text-center">
          My <span className="text-lime-500">Projects</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <SolidButton
            href="/projects" 
            icon={ArrowRight}
            label="Explore More"
          />

          <TransparentButton
            href="#contact" 
            icon={MessageSquare}
            label="Let's Work Together"
          />
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
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
          <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight line-clamp-2">{project.title}</h3>
                <Link href={`/project/${project.slug}`}>
                  <Button 
                    size="sm" 
                    className="px-3 bg-lime-500 hover:bg-lime-400 text-forest-900 
                              font-semibold transition-all duration-300 rounded-full 
                              border border-white/20 hover:border-white/40 shadow-lg text-xs"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
              
              <p className={cn(
                "text-gray-100 text-sm sm:text-base",
                project.size === 'tall' ? '' : 'line-clamp-2'
              )}>
                {project.description}
              </p>
              
              <div className="flex gap-2 mt-1">
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