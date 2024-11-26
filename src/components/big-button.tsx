'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface MotionButtonProps {
  href: string
  icon: LucideIcon
  label: string
  external?: boolean
}

export function MotionButton({ 
  href, 
  icon: Icon, 
  label,
  external 
}: MotionButtonProps) {
  const ButtonContent = (
    <>
      <span className="font-medium">{label}</span>
      <Icon className="w-5 h-5" />
    </>
  )

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-forest-900 border-4 border-sage-100 hover:bg-lime-500 text-sage-100 hover:text-forest-900 font-bold transition-all duration-300 rounded-full shadow-md px-5 py-3 flex items-center gap-2"
        >
          {ButtonContent}
        </a>
      ) : (
        <Link
          href={href}
          className="bg-forest-900 border-4 border-sage-100 hover:bg-lime-500 text-sage-100 hover:text-forest-900 font-bold transition-all duration-300 rounded-full shadow-md px-5 py-3 flex items-center gap-2"
        >
          {ButtonContent}
        </Link>
      )}
    </motion.div>
  )
}
