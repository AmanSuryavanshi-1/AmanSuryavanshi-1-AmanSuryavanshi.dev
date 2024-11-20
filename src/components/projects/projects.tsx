"use client"

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SiReact, SiJavascript, SiRedux, SiTailwindcss, SiHtml5, SiCss3, SiBootstrap } from 'react-icons/si';

import { IconType } from 'react-icons'

type Project = {
  id: number
  title: string
  description: string
  image?: string
  video?: string
  size?: 'default' | 'wide' | 'tall'
  slug: string
  technologies: {
    icon: IconType
    name: string
  }[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Foodah',
    description: 'A robust restaurant discovery and food ordering platform built with React, leveraging live APIs, lazy loading, and custom hooks for optimal performance.',
    video: '/Project/Videos/Foodah.webm',
    size: 'wide',
    slug: 'foodah',
    technologies: [
      { icon: SiReact, name: 'React' },
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: SiRedux, name: 'Redux' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      // { icon: api, name: 'API' }
    ]
  },
  {
    id: 2,
    title: 'Old Portfolio',
    description: 'My original portfolio website showcasing early projects, emphasizing foundational skills in web development and UI/UX design.',
    image: '/Project/E-coomerce.jpg',
    size: 'default',
    slug: 'old-portfolio',
    technologies: [
      { icon: SiHtml5, name: 'HTML' },
      { icon: SiCss3, name: 'CSS' },
      { icon: SiJavascript, name: 'JavaScript' }
    ]
  },
  {
    id: 3,
    title: 'AV NewsStream',
    description: 'A hands-free news reading platform with voice-assisted functionality, real-time API integration, and seamless user experience.',
    video: '/Project/Videos/AVNewsStream.webm',
    size: 'tall',
    slug: 'av-newsstream',
    technologies: [
      { icon: SiReact, name: 'React' },
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: SiRedux, name: 'Redux Toolkit' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      // { icon: SiApi, name: 'API' }
    ]
  },
  {
    id: 4,
    title: 'Spotify UI Clone',
    description: 'A responsive and interactive Spotify clone, showcasing attention to detail in UI/UX design and modern CSS frameworks.',
    image: '/Project/Spotify.jpg',
    size: 'default',
    slug: 'spotify-ui-clone',
    technologies: [
      { icon: SiReact, name: 'React' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      { icon: SiJavascript, name: 'JavaScript' }
    ]
  },
  {
    id: 5,
    title: 'TextUtil',
    description: 'A simple yet powerful text utility app for formatting, editing, and analyzing text with an intuitive and clean UI.',
    image: '/Project/Textutil.jpg',
    size: 'default',
    slug: 'textutil',
    technologies: [
      { icon: SiReact, name: 'React' },
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: SiBootstrap, name: 'Bootstrap' }
    ]
  },
  {
    id: 6,
    title: 'Barakat Enterprise',
    description: 'A marketplace for flooring materials like tiles and marbles, designed as a freelancing project with a focus on modern UI and user-friendly functionality.',
    image: '/Project/Textutil.jpg',
    size: 'wide',
    slug: 'barakat-enterprise',
    technologies: [
      { icon: SiReact, name: 'React' },
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: SiCss3, name: 'CSS' }
    ]
  }
];


export default function ProjectsSection() {
  return (
    <section id='projects' className="py-16 min-h-screen max-w-6xl mx-auto">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          <span className="text-forest-900">My </span>
          <span className="text-lime-500">Projects</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Link href="/projects">
            <Button 
              className="px-8 py-6 bg-forest-900 hover:bg-forest-700 text-sage-100 font-medium transition-colors duration-300 rounded-3xl border-2 border-sage-100 text-lg flex items-center gap-2"
            >
              Explore More 
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
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
        <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/95 via-forest-900/90 to-transparent">
          <div className="space-y-5 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-3xl font-bold text-white tracking-tight">{project.title}</h3>
            <p className="text-gray-100 text-base font-medium leading-relaxed">{project.description}</p>
            <div className="flex items-center gap-4 pt-2">
              {project.technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <tech.icon className="w-7 h-7 text-lime-400 hover:text-lime-300 transition-colors" title={tech.name} />
                  <span className="text-xs text-gray-200 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
            <Link href={`/project/${project.slug}`} className="inline-block">
              <Button className="mt-2 px-6 py-2.5 bg-lime-500 hover:bg-lime-400 text-forest-900 font-semibold transition-all duration-300 rounded-full border-2 border-white/20 hover:border-white/40 shadow-lg">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}