'use client';

import React from 'react';
import { Briefcase, GitBranch, Globe, Clock, Database, Code, Server, Monitor, Zap, Feather, Settings, Figma, TrendingUp, Film, Edit3, ImageIcon, Brain, Book, PenTool, BookOpen, Layers, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WorkBanner = () => {
    const works = [
        { icon: <Briefcase className="w-5 h-5" />, label: "Full Stack Developer" },
        { icon: <Globe className="w-5 h-5" />, label: "UI/UX Designer" },
        { icon: <Clock className="w-5 h-5" />, label: "Agile Practitioner" },
        { icon: <Code className="w-5 h-5" />, label: "JavaScript Enthusiast" },
        { icon: <Layers className="w-5 h-5" />, label: "Next.js Developer" },
        { icon: <Server className="w-5 h-5" />, label: "API Integration" },
        { icon: <Monitor className="w-5 h-5" />, label: "Frontend Engineer" },
        { icon: <Zap className="w-5 h-5" />, label: "Creative Technologist" },
        { icon: <Feather className="w-5 h-5" />, label: "Content Writer" },
        { icon: <Settings className="w-5 h-5" />, label: "Performance Optimizer" },
        { icon: <Figma className="w-5 h-5" />, label: "Figma Designer" },
        { icon: <Database className="w-5 h-5" />, label: "Database Handling" },
        { icon: <TrendingUp className="w-5 h-5" />, label: "SEO Enthusiast" },
        { icon: <Film className="w-5 h-5" />, label: "AI Video Creator" },
        { icon: <ImageIcon className="w-5 h-5" />, label: "AI Image Generator" },
        { icon: <Edit3 className="w-5 h-5" />, label: "Technical Writer" },
        { icon: <PenTool className="w-5 h-5" />, label: "AI Multimedia Developer" },
        { icon: <Brain className="w-5 h-5" />, label: "AI Creative Technologist" },
        { icon: <Book className="w-5 h-5" />, label: "Lifelong Learner" },
        { icon: <PenTool className="w-5 h-5" />, label: "User-Centered Designer" },
        { icon: <Package className="w-5 h-5" />, label: "Web Performance Optimizer" },
        { icon: <BookOpen className="w-5 h-5" />, label: "Tech Blogger" },
    ];
    

  return (
    <section
      className="w-full bg-forest-900"
      aria-label="Work Experience and Skills"
      data-testid="work-banner"
    >
        <div className="overflow-hidden py-3">
            {/* For SEO */}
        <h2 className="sr-only">Work Experience and Skills</h2>
          <motion.div
            aria-label="Scrolling list of skills and experiences"
            animate={{
              x: ["-100%", "0%"],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              },
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...works, ...works].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-8 rounded-xl py-3 border-4 border-sage-100 bg-lime-500 sm:px-6 sm:py-2 xs:px-2 xs:py-2"
              >
                <span className="text-forest-500 sm:text-sm xs:text-xs">{item.icon}</span>
                <span className="text-lg font-medium text-forest-900 sm:text-base xs:text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
    </section>
  );
};

export default WorkBanner;