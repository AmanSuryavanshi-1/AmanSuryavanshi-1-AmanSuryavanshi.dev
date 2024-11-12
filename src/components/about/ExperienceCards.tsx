'use client';

import React from 'react';
import { Award, Users, Folder, Code, Globe, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ExperienceCards = () => {
  const stats = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Experience",
      desc: "1.5+ Years",
      detail: "Web Design & Full-Stack Development"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborations",
      desc: "3+ Companies",
      detail: "Remote & On-site Engagements"
    },
    {
      icon: <Folder className="w-6 h-6" />,
      title: "Projects Delivered",
      desc: "35+ Completed",
      detail: "Responsive Web Applications"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Tech Proficiency",
      desc: "15+ Technologies",
      detail: "Diverse & Cutting-edge Stack"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "User Reach",
      desc: "High-impact Solutions",
      detail: "Serving Users Globally"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Development Approach",
      desc: "Agile & Iterative",
      detail: "Adaptable, User-Centric Process"
    }
  ];

  return (
    <section className="w-full py-16" aria-labelledby="experience-cards-heading">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="experience-cards-heading" className="text-3xl md:text-5xl font-bold font-serif text-forest-900 mb-8 text-center">
          My <span className="text-lime-500">Experience</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-3xl bg-gradient-to-br from-lime-500 to-lime-300/10 border-4 border-sage-100 hover:from-forest-900 hover:to-forest-500 hover:text-sage-100 transition-colors duration-300 group"
              whileHover={{ y: -20 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-2 text-forest-700 group-hover:text-lime-500">
                {stat.icon}
              </div>
              <h5 className="text-base font-semibold mb-1 text-center text-forest-900 group-hover:text-white">{stat.title}</h5>
              <p className="text-sm text-center my-1 mb-2 group-hover:text-lime-500">{stat.desc}</p>
              <p className="text-xs text-center opacity-75">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCards;