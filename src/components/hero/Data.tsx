'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';
import { TransparentButton } from '@/components/transparent-button';
import { SolidButton } from '@/components/solid-button';

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

  const nameArray = "Aman Suryavanshi".split("");

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
        Hello, I&apos;m
      </motion.h3>
      
      <motion.h1 
        className="mb-1 font-serif text-3xl font-bold md:text-5xl text-lime-500"
        variants={itemVariants}
      >
        {nameArray.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: index * 0.1,
            }}
          >
            {char}
          </motion.span>
        ))}
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
        Driven by growth and excellence, I&apos;m here to build impactful digital solutions that bring satisfaction and self-development. Let&apos;s achieve remarkable goals together—creating innovative and user-centered experiences that benefit both individuals and organizations.
      </motion.p>
      
      <motion.div 
        className="flex flex-col justify-center gap-4 md:flex-row md:gap-5 md:justify-start"
        variants={itemVariants}
      >
        <TransparentButton
          href="https://drive.google.com/file/d/1cdRIpqASZSMGbtmBZVqvjpAM1jZTROrm/view?usp=drive_link"
          icon={Download}
          label="Download CV"
          external
        />

        <SolidButton
          href="/#contact"
          icon={MessageCircle}
          label="Say Hello"
        />
      </motion.div>

      <meta itemProp="name" content="Aman Suryavanshi" />
      <meta itemProp="description" content="Web developer and UI/UX designer dedicated to creating beautiful, functional, and user-centered digital experiences." />
    </motion.div>
  );
}

export default Data;