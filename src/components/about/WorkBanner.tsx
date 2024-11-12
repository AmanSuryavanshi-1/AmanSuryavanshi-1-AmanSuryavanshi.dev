'use client';

import React from 'react';
import { Briefcase, GitBranch, Globe, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkBanner = () => {
  const works = [
    { icon: <Briefcase className="w-5 h-5" />, label: "Full Stack Developer" },
    { icon: <GitBranch className="w-5 h-5" />, label: "Open Source Contributor" },
    { icon: <Globe className="w-5 h-5" />, label: "UI/UX Designer" },
    { icon: <Clock className="w-5 h-5" />, label: "Agile Practitioner" }
  ];

  return (
    <section className="w-full py-8 bg-forest-900/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <motion.div
            animate={{
              x: ["-100%", "0%"],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              },
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...works, ...works].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-4 bg-forest-900/10 rounded-xl"
              >
                <span className="text-forest-900">{item.icon}</span>
                <span className="text-lg font-medium text-forest-900">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WorkBanner;
