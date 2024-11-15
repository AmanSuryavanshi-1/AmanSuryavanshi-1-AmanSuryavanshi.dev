import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';   


interface SkillsProps {
    data?: {
        skills?: Record<string, string[]>;
    }
}

const Skills = ({ data }: SkillsProps) => {
    const skillCategories = data?.skills || {
      "Technical Skills": ["React", "Next.js", "TypeScript", "Node.js", "Python"],
      "Soft Skills": ["Project Management", "Team Leadership", "Communication"],
      "Tools": ["Git", "Docker", "AWS", "Figma"]
    };
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <h2 className="text-2xl font-bold mb-6">Professional Skills</h2>
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Brain className="text-red-400" />
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill: string, skillIndex: number) => (
                <motion.span
                  key={skillIndex}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

export default Skills;