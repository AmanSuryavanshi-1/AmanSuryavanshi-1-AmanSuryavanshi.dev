import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Brain, Palette, Briefcase, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsProps {
  data?: {
    skills?: Record<string, Skill[]>;
  }
}

const categoryIconMap = {
  "Technical Skills": Brain,
  "Creative Skills": Palette,
  "Professional Skills": Briefcase,
  "Tools & Technologies": Wrench
};

const SkillBanner = ({ skills }: { skills: Skill[] }) => {
  const getIconComponent = (iconName: string) => {
    const pascalCase = iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    return (LucideIcons as any)[pascalCase] || LucideIcons.Circle;
  };

  return (
    <motion.div
      className="flex gap-4 pr-3"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        duration: 80,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {skills.map((skill, index) => {
        const SkillIcon = getIconComponent(skill.icon);
        return (
          <span
            key={index}
            className="inline-flex items-center gap-2 px-3 py-1 text-sm border-[3px] border-sage-100 rounded-3xl bg-transparent hover:bg-forest-900 text-forest-900 hover:text-white whitespace-nowrap"
          >
            <SkillIcon className="w-3 h-3" />
            {skill.name}
          </span>
        );
      })}
    </motion.div>
  );
};

const Skills = ({ data }: SkillsProps) => {
  const skillCategories = data?.skills || {};

  return (
    <div className="w-full overflow-hidden">
      {Object.entries(skillCategories).map(([category, skills]) => {
        const CategoryIcon = categoryIconMap[category as keyof typeof categoryIconMap] || Brain;
        
        return (
          <div key={category} className="mb-3 last:mb-0">
            <div className="flex items-center gap-2 px-4 mb-2">
              <CategoryIcon className="w-4 h-4 text-forest-700" />
              <h3 className="text-md font-medium text-forest-900">
                {category}
                <span className="ml-2 text-forest-500 text-sm">
                  ({skills.length})
                </span>
              </h3>
            </div>

            <div className="relative flex overflow-hidden">
              <SkillBanner skills={skills} />
              <SkillBanner skills={skills} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;