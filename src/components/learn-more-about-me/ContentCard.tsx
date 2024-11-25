'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Lightbulb, 
  Heart, 
  Trophy, 
  Rocket,
  Code2
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const contentItems = [
  {
    icon: <Palette />,
    title: "Creative Developer",
    text: "Passionate about creating beautiful, functional, and user-centered digital experiences that leave a lasting impression."
  },
  {
    icon: <Lightbulb />,
    title: "Innovative Thinker",
    text: "Always exploring new and innovative ways to bring unique visions to life through modern web technologies."
  },
  {
    icon: <Heart />,
    title: "Design Philosophy",
    text: "Believe that design is about solving problems and creating intuitive, enjoyable experiences that resonate with users."
  },
  {
    icon: <Trophy />,
    title: "Commitment to Excellence",
    text: "Whether working on websites or applications, I bring unwavering dedication to design excellence and user-centered thinking."
  },
  {
    icon: <Rocket />,
    title: "Future-Ready",
    text: "Excited to bring my expertise, creativity, and passion for innovation to your next groundbreaking project."
  },
  {
    icon: <Code2 />,
    title: "Technical Expertise",
    text: "Proficient in modern web technologies and frameworks, ensuring robust and scalable solutions for every project."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ContentCard = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl py-16 mx-auto"
    >
      {contentItems.map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 }
          }}
          className="group h-full"
        >
          <Card className="group overflow-hidden max-md:mx-4 rounded-3xl border-4 border-sage-100 bg-gradient-to-br from-lime-500 to-lime-100 hover:from-forest-900 hover:to-forest-500 transition-all duration-300 shadow-lg shadow-forest-500 h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-start gap-4 h-full">
                <div className="p-3 rounded-full bg-forest-900 border-[3px] shadow-md shadow-forest-900 border-sage-100 text-lime-500 group-hover:bg-lime-500 group-hover:text-forest-900 transition-colors duration-300 shrink-0">
                  {React.cloneElement(item.icon, { 
                    className: "w-6 h-6" 
                  })}
                </div>
                <div className="flex-1 min-h-[120px]">
                  <h3 className="text-forest-900 font-semibold text-lg mb-3 group-hover:text-lime-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-forest-700 group-hover:text-sage-100 leading-relaxed transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ContentCard;