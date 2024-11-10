'use client'

import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { FC } from 'react';

interface HeaderSocialProps {
  className?: string; // Add className as an optional prop
}
const HeaderSocial: FC = () => {
  const socialIcons = [
    { Icon: Linkedin, href: "https://www.linkedin.com/in/amansuryavanshi/", label: "LinkedIn" },
    { Icon: Github, href: "https://github.com/AmanSuryavanshi-1", label: "GitHub" },
    { Icon: Instagram, href: "https://www.instagram.com/__aman_suryavanshi__/", label: "Instagram" },
    { Icon: Twitter, href: "https://twitter.com/_AmanSurya", label: "Twitter" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <TooltipProvider>
      <motion.div 
        className="flex justify-center gap-6 mb-4 md:grid header_socials md:justify-start md:mb-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialIcons.map(({ Icon, href, label }) => (
          <Tooltip key={href}>
            <TooltipTrigger asChild>
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-2xl text-bgVariant transition-colors hover:text-primary"
                aria-label={`Visit Aman Suryavanshi's ${label} profile`}
                variants={itemVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
                <motion.div className="relative z-10">
                  <Icon className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </motion.div>
    </TooltipProvider>
  );
};

export default HeaderSocial;
