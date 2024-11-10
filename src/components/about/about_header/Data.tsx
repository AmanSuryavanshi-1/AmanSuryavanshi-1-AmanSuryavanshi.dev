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
        className="mb-2 font-serif text-xl font-semibold text-bgVariant"
        variants={itemVariants}
      >
        Hello, I'm
      </motion.h3>
      <motion.h1 
        className="mb-1 font-serif text-3xl font-bold md:text-5xl text-bg"
        variants={itemVariants}
      >
        Aman Suryavanshi
      </motion.h1>
      <motion.h3 
        className="relative pl-24 mb-4 font-serif text-lg font-light text-bg"
        variants={itemVariants}
      >
        <motion.span 
          className="absolute left-0 top-3 w-20 h-0.5 bg-bgVariant"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        ></motion.span>
        A Tech Geek
      </motion.h3>
      <motion.p 
        className="max-w-lg mx-auto mb-8 text-sm text-justify md:mb-12 text-textColor md:text-base"
        variants={itemVariants}
      >
        To succeed in an environment of growth and excellence and earn a job which provides me job satisfaction and self-development and help me achieve personal as well as organization goals.
      </motion.p>
      <motion.div 
        className="flex flex-col justify-center gap-4 md:flex-row md:gap-5 md:justify-start"
        variants={itemVariants}
      >
        <Button
          asChild
          variant="default"
          size="lg"
          className="group relative overflow-hidden bg-primary hover:bg-primaryVariant text-bg"
        >
          <motion.a
            href="https://drive.google.com/file/d/1Xfv_tYMc9UiyYy3QqmPFadyi0xY-p2TI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-primaryVariant"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ type: "tween", ease: "easeInOut" }}
            />
            <span className="relative z-10 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              <span>Download CV</span>
            </span>
          </motion.a>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="group relative overflow-hidden border-2 border-bg text-bg hover:text-primary"
        >
          <motion.a
            href="/contact"
            aria-label="Say Hello"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-bg"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ type: "tween", ease: "easeInOut" }}
            />
            <span className="relative z-10 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Say Hello</span>
            </span>
          </motion.a>
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default Data;