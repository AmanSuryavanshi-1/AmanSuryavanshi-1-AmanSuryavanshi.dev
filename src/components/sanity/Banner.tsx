'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Banner = () => {
  const scrollToFeatured = () => {
    const featuredElement = document.getElementById('featured');
    if (featuredElement) {
      featuredElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-forest-900 via-forest-800 to-forest-900">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-500/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <motion.h1 
            className="font-heading text-4xl font-bold tracking-tight text-sage-100 sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to My <span className="text-lime-500">Blog</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="mt-6 text-lg leading-8 text-sage-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Exploring the realms of web development, sharing insights, and documenting my journey through code.
            Join me as we dive into the fascinating world of modern web technologies.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="mt-10 flex gap-8 justify-center text-sage-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-500">50+</div>
              <div className="text-sm text-sage-300 mt-1">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-500">10k+</div>
              <div className="text-sm text-sage-300 mt-1">Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-500">100+</div>
              <div className="text-sm text-sage-300 mt-1">Topics</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              onClick={scrollToFeatured}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-forest-900 bg-lime-500 rounded-full hover:bg-lime-400 transition-colors duration-300"
            >
              Start Reading
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Animated Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-900 via-lime-500 to-forest-900 animate-gradient-x"></div>
    </div>
  );
};

export default Banner;