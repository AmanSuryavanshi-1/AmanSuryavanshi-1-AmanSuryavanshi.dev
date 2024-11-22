"use client"

import React from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar } from 'lucide-react'

// Dynamically import GitHubCalendar with ssr: false
const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.default),
  { ssr: false }
)

export const GithubCalendarComponent: React.FC = () => {

  return (
    <section className="flex items-center justify-center w-full px-4 py-12 md:py-16">
      <div className="w-full max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif text-forest-900 mb-6 md:mb-8"
        >
          My <span className="text-lime-500">GitHub</span> Contributions
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-forest-700 max-w-3xl mx-auto mb-8 md:mb-12 text-base md:text-lg leading-relaxed"
        >
          Exploring the digital landscape, one commit at a time. My GitHub journey reflects a passion for continuous learning, innovative solutions, and collaborative development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Card className="overflow-hidden rounded-2xl shadow-xl border border-sage-200 bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-3 sm:p-5 flex flex-col items-center gap-4">
              <div className="flex items-center justify-center w-full gap-4">
                <div className="bg-lime-100 p-2 rounded-3xl">
                  <Calendar className="w-5 h-5 text-lime-600" />
                </div>
                <h3 className="text-xl font-bold text-forest-900">
                  Contribution Landscape
                </h3>
              </div>
              
              <div className="w-full overflow-x-auto flex justify-center items-center py-4">
                <div className="flex justify-center min-w-fit">
                  <GitHubCalendar
                    username="AmanSuryavanshi-1"
                    blockSize={14}
                    blockMargin={5}
                    fontSize={16}
                    theme={{
                      dark: [
                        '#ADBC9F',  // Light sage
                        '#749A48',  // Darker sage
                        '#436850',  // Darkest forest
                        '#2A5741',
                        '#12372A',
                      ]
                    }}
                  />
                </div>
              </div>
              <p className="text-sm text-forest-500 max-w-4xl text-center">
                This graph showcases my GitHub activity over the past year. Each square represents a day, with darker colors indicating more contributions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default GithubCalendarComponent