import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Brain, Palette, Briefcase, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsProps {
  data?: {
    skills?: Record<string, Skill[]>;
  }
}

// Category icons mapping
const categoryIconMap = {
  "Technical Skills": Brain,
  "Creative Skills": Palette,
  "Professional Skills": Briefcase,
  "Tools & Technologies": Wrench
};

const Skills = ({ data }: SkillsProps) => {
  const skillCategories = data?.skills || {};

  // Function to get Lucide icon component
  const getIconComponent = (iconName: string): React.ComponentType => {
    const pascalCase = iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    return (LucideIcons as any)[pascalCase] || LucideIcons.Circle;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(skillCategories).map(([category, skills]) => {
          const CategoryIcon = categoryIconMap[category as keyof typeof categoryIconMap] || Brain;
          
          return (
            <div 
              key={category}
              className="bg-forest-50/50 rounded-lg p-4 border border-forest-100"
            >
              <div className="flex items-center gap-2 mb-3">
                <CategoryIcon className="w-5 h-5 text-forest-700" />
                <h3 className="text-sm font-medium text-forest-900">
                  {category}
                  <span className="ml-2 text-forest-500 text-xs">
                    ({skills.length})
                  </span>
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => {
                  const SkillIcon = getIconComponent(skill.icon);
                  return (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-forest-100 text-forest-700 rounded-md flex items-center gap-1"
                    >
                      <SkillIcon className="w-3 h-3" />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;