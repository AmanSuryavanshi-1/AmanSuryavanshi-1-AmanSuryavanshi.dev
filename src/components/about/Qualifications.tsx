'use client';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface Qualification {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

interface QualificationsProps {
  data?: {
    qualifications?: Qualification[];
  };
}

const Qualifications = ({ data }: QualificationsProps) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold mb-6">Educational Background</h2>
        <div className="space-y-6">
          {(data?.qualifications || [
            {
              degree: "Master in Computer Science",
              institution: "Stanford University",
              year: "2018-2020",
              description: "Specialized in AI and Machine Learning"
            },
            {
              degree: "Bachelor in Software Engineering",
              institution: "MIT",
              year: "2014-2018",
              description: "Focus on Web Technologies"
            }
          ]).map((qual, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-4 rounded-lg bg-gray-50"
            >
              <Award className="text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">{qual.degree}</h3>
                <p className="text-gray-600">{qual.institution}</p>
                <p className="text-sm text-gray-500">{qual.year}</p>
                <p className="text-gray-600 mt-2">{qual.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };
  
export default Qualifications;