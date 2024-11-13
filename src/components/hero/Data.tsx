'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button"

const Data: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="max-w-full px-4 text-center md:text-left md:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3 
        className="mb-2 font-serif text-xl font-semibold text-forest-500"
        variants={itemVariants}
      >
        Hello, I&apos;m   {/* production fixes */}
      </motion.h3>
      <motion.h1 
        className="mb-1 font-serif text-3xl font-bold md:text-5xl text-lime-500"
        variants={itemVariants}
      >
        Aman Suryavanshi
      </motion.h1>
      <motion.h3 
        className="relative pl-24 mb-4 font-serif text-lg font-light text-forest-500"
        variants={itemVariants}
      >
        <motion.span 
          className="absolute left-0 top-[0.8rem] w-20 h-0.5 bg-forest-700"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        ></motion.span>
        A Tech Geek
      </motion.h3>
      <motion.p 
        className="max-w-lg mx-auto mb-8 text-sm text-justify md:mb-12 text-forest-700 md:text-base"
        variants={itemVariants}
      >
        Driven by growth and excellence, I’m here to build impactful digital solutions that bring satisfaction and self-development. Let’s achieve remarkable goals together—creating innovative and user-centered experiences that benefit both individuals and organizations.
      </motion.p>
      <motion.div 
        className="flex flex-col justify-center gap-4 md:flex-row md:gap-5 md:justify-start"
        variants={itemVariants}
      >
        <Button
          asChild
          variant="default"
          size="lg"
          className="group relative border-4 rounded-3xl border-lime-500 overflow-hidden bg-transparent hover:bg-lime-500 text-forest-900"
        >
          <motion.a
            href="https://drive.google.com/file/d/1Xfv_tYMc9UiyYy3QqmPFadyi0xY-p2TI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="absolute inset-0 bg-sage-300"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ type: "tween", ease: "easeInOut" }}
            />
            <span className="relative z-10 flex items-center">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Download className="w-5 h-5 mr-2" />
              </motion.div>
              <span>Download CV</span>
            </span>
          </motion.a>
        </Button>

        <Button
          asChild
          size="lg"
          className="group relative border-4 rounded-3xl border-forest-900 overflow-hidden bg-forest-900 hover:bg-forest-700 hover:border-forest-700 text-sage-100"
        >
          <motion.a
            href="/contact"
            aria-label="Say Hello"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="absolute inset-0 bg-forest-900"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ type: "tween", ease: "easeInOut" }}
            />
            <span className="relative z-10 flex items-center">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
              </motion.div>
              <span>Say Hello</span>
            </span>
          </motion.a>
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default Data;