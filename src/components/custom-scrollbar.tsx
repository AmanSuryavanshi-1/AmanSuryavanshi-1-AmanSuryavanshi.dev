'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const CustomScrollbar = () => {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [isDragging, setIsDragging] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const dragStartRef = useRef<{ startY: number; startScroll: number } | null>(null)

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768) // 768px is typical tablet breakpoint
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  // Don't render on mobile
  if (isMobile) return null

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    dragStartRef.current = {
      startY: e.clientY,
      startScroll: window.scrollY
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragStartRef.current) return

      const deltaY = e.clientY - dragStartRef.current.startY
      const deltaPercentage = deltaY / window.innerHeight
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight
      
      window.scrollTo({
        top: dragStartRef.current.startScroll + (deltaPercentage * totalScrollHeight),
        behavior: 'auto'
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      dragStartRef.current = null
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <motion.div
      className="fixed right-0 top-0 bottom-0 w-3 z-50 hidden md:block" // Hide on mobile using Tailwind
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, #9DCF6F 5%, #436850 92%, transparent)',
        maskImage: 'linear-gradient(to bottom, transparent, #436850 12%, #9DCF6F 92%, transparent)',
      }}
    >
      <div className="h-full w-full bg-transparent rounded-full" />
      <motion.div
        className={`absolute top-0 right-0 w-full bg-forest-700 rounded-full 
          hover:bg-lime-700 ${isDragging ? 'cursor-grabbing' : ''}`}
        style={{ 
          scaleY,
          transformOrigin: 'top',
          height: '100%',
        }}
        onMouseDown={handleMouseDown}
        whileHover={{ width: '8px' }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          width: { duration: 0.2 }
        }}
      />
    </motion.div>
  )
}

export default CustomScrollbar

