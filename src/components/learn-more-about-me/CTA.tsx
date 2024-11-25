'use client'

import { motion } from 'framer-motion'
import { Briefcase, Code2, BookOpen} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import PreviewCard from './PreviewCard'

export default function CTA() {
  const [activePreview, setActivePreview] = useState<string | null>(null)

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  return (
    <section className="w-full py-16">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif text-forest-900"
          >
            Explore My <span className="text-lime-500">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-forest-900/80 max-w-2xl mx-auto"
          >
            Dive into my professional experience, discover my projects, and read my insights.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Experience Button */}
          <motion.div
            variants={buttonVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={0}
          >
            <Link href="/#experience" className="block h-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full h-full min-h-[70px] bg-forest-900 hover:bg-lime-500 text-sage-100 
                         border-[7px] rounded-r-full border-sage-100 shadow-lg shadow-forest-500
                         group transition-all duration-300 px-4 py-4"
              >
                <div className="flex flex-col items-center gap-3">
                  <Briefcase className="w-8 h-8 text-lime-500 group-hover:text-sage-100 transition-colors" />
                  <span className="text-xl font-medium group-hover:text-sage-100">Continue Journey</span>
                </div>
              </motion.button>
            </Link>
          </motion.div>

          {/* Projects Preview Button */}
          <motion.div
            variants={buttonVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
            className="relative"
            onMouseEnter={() => setActivePreview('projects')}
            onMouseLeave={() => setActivePreview(null)}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full h-full min-h-[70px] bg-forest-900 hover:bg-lime-500 text-sage-100 
                       border-[6px] border-sage-100 rounded-full shadow-lg shadow-forest-900
                       group transition-all duration-300 px-6 py-3"
            >
              <div className="flex flex-col items-center gap-3">
                <Code2 className="w-8 h-8 text-lime-500 group-hover:text-sage-100 transition-colors" />
                <span className="text-xl font-medium group-hover:text-sage-100">Projects</span>
              </div>
            </motion.button>
            {activePreview === 'projects' && (
              <PreviewCard 
                type="projects"
                onEnter={() => window.location.href = '/projects'}
              />
            )}
          </motion.div>

          {/* Blogs Preview Button */}
          <motion.div
            variants={buttonVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
            className="relative"
            onMouseEnter={() => setActivePreview('blogs')}
            onMouseLeave={() => setActivePreview(null)}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full h-full min-h-[70px] bg-forest-900 hover:bg-lime-500 text-sage-100 
                         border-[7px] border-sage-100 rounded-l-full shadow-lg shadow-forest-500
                         group transition-all duration-300 px-4 py-4"
              >
              <div className="flex flex-col items-center gap-3">
                <BookOpen className="w-8 h-8 text-lime-500 group-hover:text-sage-100 transition-colors" />
                <span className="text-xl font-medium group-hover:text-sage-100">Blogs</span>
              </div>
            </motion.button>
            {activePreview === 'blogs' && (
              <PreviewCard 
                type="blogs"
                onEnter={() => window.location.href = '/blogs'}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
