'use client'

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeaderSocial from './HeaderSocial';
import Data from './Data';

export default function Header() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section 
      id="header" 
      className="w-full min-h-screen p-4 overflow-hidden md:mb-4 md:p-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="container relative flex flex-col items-center justify-center h-full gap-8 mx-auto md:h-5/6"
        style={{ opacity, scale }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] gap-8 md:gap-28 pt-8 md:pt-22 items-center">
          <motion.div 
            className="relative order-1 w-64 h-64 mx-auto md:order-3 md:w-96 md:h-96 md:mx-0"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1.2 }}
          >
            <Image
              src='/Images/Profile-Large.png'
              alt="Profile"
              priority
              className="object-cover w-full h-full border-4 shadow-inner md:border-8 border-bg rounded-full"
              style={{ 
                animation: "profile__animate 8s ease-in-out infinite 1s",
                borderRadius: "50%",
                background: "linear-gradient(145deg, #436850, #FBFADA)",
                boxShadow: "25px 25px 32px #ADBC9F, -25px -25px 32px #FBFADA"
              }}
              fill
            />
          </motion.div>
          <HeaderSocial className="order-2 md:order-1" />
          <Data className="order-3 md:order-2" />
        </div>
      </motion.div>
    </motion.section>
  );
}