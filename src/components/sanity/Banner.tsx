'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BiBookOpen } from 'react-icons/bi';
import { GoProject } from 'react-icons/go';
import { HiOutlineBookmarkAlt } from 'react-icons/hi';

const Banner = () => {
  const scrollToFeatured = () => {
    const featuredElement = document.getElementById('featured');
    if (featuredElement) {
      featuredElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden h-[100vh] bg-gradient-to-r from-forest-900 via-forest-800 to-forest-900 shadow-lg">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-500/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <motion.h1 
            className="font-heading text-5xl sm:text-7xl font-extrabold tracking-tight text-sage-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to My <span className="text-lime-500">Blog</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="mt-6 text-xl leading-8 text-sage-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Exploring the realms of web development, sharing insights, and documenting my journey through code.
            Join me as we dive into the fascinating world of modern web technologies.
          </motion.p>

          {/* Call to Action Button */}
          <motion.button
            className="mt-8 px-8 py-3 bg-lime-500 text-sage-900 font-semibold rounded-full hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={scrollToFeatured}
          >
            Explore Featured <ArrowRight className="inline-block ml-2" />
          </motion.button>

          {/* Stats */}
          <motion.div 
            className="mt-12 flex gap-12 justify-center text-sage-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center flex flex-col items-center">
              <div className="text-4xl font-bold text-lime-500">50+</div>
              <div className="text-sm text-sage-300 mt-1 flex items-center gap-1">
                <BiBookOpen className="w-4 h-4 text-lime-500" />
                Articles
              </div>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="text-4xl font-bold text-lime-500">15+</div>
              <div className="text-sm text-sage-300 mt-1 flex items-center gap-1">
                <GoProject className="w-4 h-4 text-lime-500" />
                Projects
              </div>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="text-4xl font-bold text-lime-500">5+</div>
              <div className="text-sm text-sage-300 mt-1 flex items-center gap-1">
                <HiOutlineBookmarkAlt className="w-4 h-4 text-lime-500" />
                Topics
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-900 via-lime-500 to-forest-900 animate-gradient-x"></div>
    </div>
  );
};

export default Banner;