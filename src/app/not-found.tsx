'use client'

import Link from 'next/link'
import { motion, useAnimationControls } from 'framer-motion'
import { FaHome } from 'react-icons/fa'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useEffect, useState } from 'react'

const Tree = ({ scale = 1, position = 0, delay = 0, zIndex = 0 }) => (
  <motion.div
    className="absolute bottom-0"
    style={{ 
      left: `${position}%`,
      transform: `scale(${scale})`,
      width: '120px',
      height: '240px',
      zIndex,
      opacity: 0.8 - (zIndex * 0.1)
    }}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 0.8 - (zIndex * 0.1) }}
    transition={{ duration: 0.5, delay }}
  >
    <svg viewBox="0 0 100 200" className="text-forest-900/30">
      <path d="M50 0 L10 80 H90 Z" fill="currentColor"/>
      <path d="M50 40 L0 120 H100 Z" fill="currentColor"/>
      <path d="M50 80 L5 160 H95 Z" fill="currentColor"/>
      <rect x="45" y="160" width="10" height="40" fill="currentColor"/>
    </svg>
  </motion.div>
)

const Firefly = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-2 h-2 bg-sage-100 rounded-full"
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [1, 0.5, 1],
      opacity: [0, 0.8, 0],
      y: [-20, -40, -20],
      x: [-10, 10, -10]
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
)

const EyesAnimation = () => {
  const leftEyeControls = useAnimationControls()
  const rightEyeControls = useAnimationControls()

  const blink = async () => {
    await Promise.all([
      leftEyeControls.start({ scaleY: 0.2 }, { duration: 0.1 }),
      rightEyeControls.start({ scaleY: 0.2 }, { duration: 0.1 })
    ])
    await Promise.all([
      leftEyeControls.start({ scaleY: 1 }, { duration: 0.1 }),
      rightEyeControls.start({ scaleY: 1 }, { duration: 0.1 })
    ])
  }

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() < 0.7) {
        blink()
      }
    }, 2000)

    const sequence = async () => {
      const readLine = async (startX: number, endX: number, y: number) => {
        for (let x = startX; x <= endX; x += 1) {
          await Promise.all([
            leftEyeControls.start({ x, y, transition: { duration: 0.2 } }),
            rightEyeControls.start({ x, y, transition: { duration: 0.2 } })
          ])
        }
        await new Promise(resolve => setTimeout(resolve, 300))
      }

      while (true) {
        await Promise.all([
          leftEyeControls.start({ x: 0, y: 2, scale: 1 }),
          rightEyeControls.start({ x: 0, y: 2, scale: 1 })
        ])
        await new Promise(resolve => setTimeout(resolve, 1000))

        await readLine(-3, 3, 4)
        await readLine(-4, 4, 6)
        await readLine(-4, 4, 7)
        
        for (let i = 0; i < 3; i++) {
          const x = Math.random() * 6 - 3
          const y = Math.random() * 4
          await Promise.all([
            leftEyeControls.start({ x, y, transition: { duration: 0.5 } }),
            rightEyeControls.start({ x, y, transition: { duration: 0.5 } })
          ])
          await new Promise(resolve => setTimeout(resolve, 500))
        }
      }
    }

    sequence()
    return () => clearInterval(blinkInterval)
  }, [leftEyeControls, rightEyeControls, blink])

  return (
    <motion.div 
      className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 relative"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.div 
        className="w-full h-full rounded-full bg-lime-500 flex items-center justify-center
                   shadow-[0_0_30px_rgba(157,207,111,0.3)] transition-shadow duration-300"
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {[...Array(5)].map((_, i) => (
          <Firefly key={i} delay={i * 0.8} />
        ))}
        
        <div className="flex gap-6 -mt-2">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-forest-700 flex items-center justify-center relative overflow-hidden">
            <motion.div 
              className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-sage-100 absolute"
              animate={leftEyeControls}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-forest-700 flex items-center justify-center relative overflow-hidden">
            <motion.div 
              className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-sage-100 absolute"
              animate={rightEyeControls}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center py-16 relative bg-gradient-to-br from-forest-900 via-forest-700 to-forest-900 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#436850_100%)]"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      {/* Large trees on the left side */}
      <div className="absolute left-[-5%] bottom-0 z-10">
        <Tree scale={5} position={-5} delay={0} zIndex={4} />
        <Tree scale={4} position={5} delay={0.1} zIndex={4} />
        <Tree scale={3.5} position={15} delay={0.2} zIndex={4} />
        <Tree scale={3} position={25} delay={0.3} zIndex={4} />
      </div>

      {/* Additional medium trees */}
      <div className="absolute left-[-2%] bottom-0 z-9">
        <Tree scale={2.8} position={25} delay={0.3} zIndex={3} />
        <Tree scale={2.5} position={35} delay={0.4} zIndex={3} />
        <Tree scale={2.2} position={45} delay={0.5} zIndex={3} />
        <Tree scale={2} position={55} delay={0.6} zIndex={3} />
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <Tree 
            key={`back-${i}`}
            scale={1.2 + Math.random() * 0.5}
            position={i * 8 - 20}
            delay={i * 0.1}
            zIndex={1}
          />
        ))}
        
        {[...Array(18)].map((_, i) => (
          <Tree 
            key={`mid-${i}`}
            scale={0.8 + Math.random() * 0.4}
            position={i * 7 - 15}
            delay={i * 0.1}
            zIndex={2}
          />
        ))}
        
        {[...Array(25)].map((_, i) => (
          <Tree 
            key={`front-${i}`}
            scale={0.4 + Math.random() * 0.3}
            position={i * 5 - 10}
            delay={i * 0.1}
            zIndex={3}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <EyesAnimation />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lime-500 font-medium text-2xl mb-6 tracking-wider"
          >
            404 Error
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-sage-100 leading-tight">
            Oops! You&apos;ve wandered off the trail.
          </h1>
          
          <p className="text-xl text-sage-300 max-w-lg mx-auto leading-relaxed">
            Don&apos;t worry, even the most experienced explorers get lost sometimes. Let&apos;s get you back on track!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Link
              href="/"
              className="group flex items-center gap-3 px-8 py-4 bg-lime-500 text-forest-900 rounded-xl
                       hover:bg-lime-700 transform hover:scale-105 transition-all duration-300 font-medium
                       shadow-[0_0_20px_rgba(157,207,111,0.3)] hover:shadow-[0_0_30px_rgba(157,207,111,0.5)]"
            >
              <FaHome className="w-5 h-5" />
              <span>Return to Base Camp</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="group flex items-center gap-3 px-8 py-4 text-sage-100 rounded-xl
                       border-2 border-sage-300/20 hover:border-sage-300/40 hover:bg-sage-300/5
                       transform hover:scale-105 transition-all duration-300"
            >
              <IoArrowBackOutline className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300" />
              <span>Retrace Your Steps</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(157,207,111,0.1) 0%, rgba(157,207,111,0) 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </main>
  )
}