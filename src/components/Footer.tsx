'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Mail, MapPin, Download, CodeIcon, Home, User2, 
  Briefcase, FolderGit2, BookOpen, ArrowUpRight 
} from 'lucide-react'
import { motion } from 'framer-motion'
import { 
  SiNextdotjs, SiTypescript, 
  SiTailwindcss, SiVercel 
} from 'react-icons/si'
import HeaderSocial from './hero/HeroSocial'

const TechStack: React.FC = () => {
  const techIcons = [
    { Icon: FaReact, href: "https://reactjs.org/", label: "React", color: "text-lime-500" },
    { Icon: SiNextdotjs, href: "https://nextjs.org/", label: "Next.js", color: "text-lime-500" },
    { Icon: SiTypescript, href: "https://www.typescriptlang.org/", label: "TypeScript", color: "text-lime-500" },
    { Icon: SiTailwindcss, href: "https://tailwindcss.com/", label: "Tailwind", color: "text-lime-500" },
    { Icon: SiVercel, href: "https://vercel.com/", label: "Vercel", color: "text-lime-500" }
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {techIcons.map(({ Icon, href, label, color }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center space-x-2 ${color} hover:opacity-75 transition-all duration-300 ease-in-out group`}
          aria-label={`Visit ${label} website`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="w-5 h-5" />
          <span className="text-sm hidden sm:inline">{label}</span>
        </motion.a>
      ))}
    </div>
  )
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const quickLinks = [
    { name: 'Home', href: '/#home', icon: <Home className="w-4 h-4" /> },
    { name: 'About', href: '/#about', icon: <User2 className="w-4 h-4" /> },
    { name: 'Services', href: '/#services', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Projects', href: '/#projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { name: 'Blogs', href: '/blogs', icon: <BookOpen className="w-4 h-4" /> },
    { href: "/resume.pdf", name: "Resume", icon: <Download className="w-4 h-4" /> }
  ]

  return (
    <footer className="bg-forest-900 mt-20 text-sage-100">
      <div className="container mx-auto pt-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Personal Branding Section */}
          <motion.div 
            className="flex flex-col items-center md:items-start space-y-5 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center md:justify-start items-center space-x-4 ">
                <div className='rounded-full p-2 border-4 border-sage-100 bg-lime-500'>
                <Image 
                    src="/Profile/Logo.png" 
                    alt="AS Logo" 
                    width={37} 
                    height={37} 
                />
              </div>
              <Image 
                src="/Profile/PFP-Cricular.png" 
                alt="Aman Suryavanshi" 
                width={60} 
                height={60} 
                className="rounded-full border-4 border-sage-100"
              />
            </div>
            <h3 className="text-3xl font-bold text-lime-500">Aman Suryavanshi</h3>
            <p className="text-sage-300 text-lg">Web Developer & UI/UX Designer</p>
            <div className="flex mx-8 space-x-6 items-center justify-center md:justify-start">
                {/* Social Icons - Overridden styles */}
                <div className="[&>div]:flex [&>div]:flex-row [&>div]:justify-start [&>div]:gap-10 [&>div]:mb-0 [&_a]:text-lime-500 [&_a:hover]:text-lime-300">
                    <HeaderSocial />
                </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-col items-center md:items-start space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-2xl font-semibold text-lime-500 border-b border-forest-700 pb-2 w-full text-center md:text-left">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4 w-full">
              {quickLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-2 text-sage-300 hover:text-lime-500 transition-colors group justify-center md:justify-start"
                  target={link.name === "Resume" ? "_blank" : "_self"}
                >
                  {link.icon}
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact & CTA */}
          <motion.div
            className="flex flex-col items-center md:items-start space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-2xl font-semibold text-lime-500 border-b border-forest-700 pb-2 w-full text-center md:text-left">Let&apos;s Connect</h4>
            <div className="space-y-4 w-full flex flex-col">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Mail size={24} className="text-lime-500" />
                <a 
                  href="mailto:amansurya.work@gmail.com" 
                  className="hover:text-lime-500 transition-colors text-sage-300"
                >
                  amansurya.work@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <MapPin size={24} className="text-lime-500" />
                <span className="text-sage-300">Delhi, India</span>
              </div>
              
              <Link 
                href="/contact"
                className="my-auto w-auto mx-auto mt-12 bg-lime-300 text-forest-900 px-4 py-2 rounded-full font-semibold 
                hover:bg-lime-500 transition-all duration-300 group flex items-center justify-center space-x-1"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Tech Stack & Copyright */}
        <div className="border-t border-forest-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <CodeIcon size={24} className="text-sage-100 mr-4" />
                <TechStack />
              </div>
            </div>
            <p className="text-sm text-sage-300 text-center md:text-left">
              © {currentYear} Aman Suryavanshi. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Crafted By Section */}
        <div className="bg-forest-700 text-sage-100 py-4 mt-8 rounded-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lime-500">Crafted By:</span>
                <span>Aman Suryavanshi</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-bold text-lime-500">Crafted Using:</span>
                <div className="flex items-center space-x-3">
                  <FaReact className="w-5 h-5 text-sage-100 hover:scale-110 transition-transform" title="React" />
                  <SiNextdotjs className="w-5 h-5 text-sage-100 hover:scale-110 transition-transform" title="Next.js" />
                  <SiTypescript className="w-5 h-5 text-sage-100 hover:scale-110 transition-transform" title="TypeScript" />
                  <SiTailwindcss className="w-5 h-5 text-sage-100 hover:scale-110 transition-transform" title="Tailwind CSS" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lime-500">Hosted on:</span>
                <div className="flex items-center space-x-2">
                  <SiVercel className="w-5 h-5 text-lime-500 hover:scale-110 transition-transform" title="Vercel" />
                  <span>Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer