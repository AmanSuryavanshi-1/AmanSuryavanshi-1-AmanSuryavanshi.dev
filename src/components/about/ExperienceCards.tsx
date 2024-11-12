'use client';

import React from 'react';
import { Award, Users, Folder, Code, Globe, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const ExperienceCards = () => {
  const stats = [
    { 
      icon: <Award className="w-6 h-6" />, 
      title: "Experience", 
      desc: "1+ Years Working",
      detail: "Full Stack Development" 
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: "Collaborated", 
      desc: "2+ Companies",
      detail: "Remote & On-site" 
    },
    { 
      icon: <Folder className="w-6 h-6" />, 
      title: "Projects", 
      desc: "35+ Completed",
      detail: "Web & Mobile Apps" 
    },
    { 
      icon: <Code className="w-6 h-6" />, 
      title: "Tech Stack", 
      desc: "15+ Technologies",
      detail: "Modern & Traditional" 
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      title: "Impact", 
      desc: "Global Reach",
      detail: "Cross-platform Solutions" 
    },
    { 
      icon: <Coffee className="w-6 h-6" />, 
      title: "Work Style", 
      desc: "Agile Methods",
      detail: "Iterative Development" 
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-xl bg-forest-900/5 hover:bg-forest-900 hover:text-sage-100 transition-colors duration-300 group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-2 text-forest-900 group-hover:text-sage-100">
                {stat.icon}
              </div>
              <h5 className="text-base font-semibold mb-1 text-center">{stat.title}</h5>
              <p className="text-sm text-center mb-1">{stat.desc}</p>
              <p className="text-xs text-center opacity-75">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceCards;