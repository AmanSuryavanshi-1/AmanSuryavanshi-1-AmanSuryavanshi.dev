'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Circle } from 'lucide-react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

interface Skill {
  name: string;
  icon: string;
}

interface MySkillsProps {
  data?: {
    skills?: Record<string, Skill[]>;
  }
}

const getIconComponent = (iconName: string): React.ElementType => {
  if (iconName.startsWith('Fa')) return FaIcons[iconName as keyof typeof FaIcons] || Circle;
  if (iconName.startsWith('Si')) return SiIcons[iconName as keyof typeof SiIcons] || Circle;
  return LucideIcons[iconName as keyof typeof LucideIcons] || Circle;
};

interface SkillOrbitProps {
  category: string;
  skills: Skill[];
  orbitIndex: number;
}

const SkillOrbit: React.FC<SkillOrbitProps> = ({ category, skills, orbitIndex }) => {
  const orbitRadius = 120 + (orbitIndex * 100);
  const itemCount = skills.length;
  
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: orbitIndex * 0.2 }}
        className="absolute z-10 bg-forest-900 text-sage-100 px-6 py-3 rounded-full text-xl font-bold"
      >
        {category}
      </motion.div>

      {skills.map((skill, index) => {
        const angle = (index * (360 / itemCount));
        const SkillIcon = getIconComponent(skill.icon);
        
        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotate: [angle, angle + 360],
            }}
            transition={{
              rotate: {
                duration: 20 + orbitIndex * 5,
                repeat: Infinity,
                ease: "linear"
              },
              opacity: { duration: 0.5, delay: index * 0.1 }
            }}
            style={{
              position: 'absolute',
              width: `${orbitRadius * 2}px`,
              height: `${orbitRadius * 2}px`,
            }}
            className="flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="absolute left-1/2 bg-gradient-to-br from-forest-900/90 to-forest-700/90 
                         p-4 rounded-lg border border-sage-100/30 backdrop-blur-sm
                         hover:from-lime-500 hover:to-forest-900 group cursor-pointer
                         shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <SkillIcon className="w-8 h-8 text-lime-500 group-hover:text-sage-100" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                             text-sm font-medium text-forest-900 opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300 bg-sage-100/90 px-2 py-1 rounded-full">
                {skill.name}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

const MySkills: React.FC<MySkillsProps> = ({ data }) => {
  const skillCategories = data?.skills || {};

  return (
    <main id="skills" className="w-full py-32 bg-gradient-to-br from-sage-100 to-lime-500/10 overflow-hidden">
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-forest-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-forest-700 text-lg">
            Explore my technical universe
          </p>
        </motion.div>

        <div className="relative h-[800px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            {Object.entries(skillCategories).map(([category, skills], index) => (
              <SkillOrbit 
                key={category}
                category={category}
                skills={skills}
                orbitIndex={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MySkills;