'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ComponentIcon,
  CodeIcon,
  FileTextIcon,
  ServerIcon
} from 'lucide-react';

const Banner: React.FC = () => {
  const iconVariants = {
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  const techIcons = [
    { Icon: ComponentIcon, label: 'React', color: '#61DAFB' },
    { Icon: CodeIcon, label: 'JavaScript', color: '#F7DF1E' },
    { Icon: ServerIcon, label: 'Next.js', color: '#000000' },
    { Icon: FileTextIcon, label: 'CSS', color: '#1572B6' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-sage-100 to-lime-500 py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="z-10 text-forest-900 max-w-xl">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
           I've been programming for almost 4 years now. Throughout this year, I've worked with various technologies. I'm here to share just that. Use the search below to filter by title.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-forest-700 mb-8"
          >
            Explore tech, tips, and trends with Aman Suryavanshi.
          </motion.p>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex space-x-4 z-10">
          {techIcons.map(({ Icon, label, color }, index) => (
            <motion.div
              key={label}
              variants={iconVariants}
              whileHover="hover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { 
                  delay: 0.4 + index * 0.2,
                  duration: 0.6 
                }
              }}
              className="bg-white/30 backdrop-blur-sm p-3 rounded-xl shadow-lg"
            >
              <Icon 
                size={40} 
                color={color} 
                className="hover:scale-110 transition-transform"
              />
              <p className="text-xs text-center mt-2 text-forest-900">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div className="absolute top-10 right-20 bg-lime-500/20 w-64 h-64 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-20 bg-sage-300/20 w-48 h-48 rounded-full blur-2xl"></div>
      </motion.div>
    </div>
  );
}

export default Banner;