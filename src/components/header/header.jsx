"use client"

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-forest-900 text-sage-100 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">LOGO</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Projects", "Blogs"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-lime-500">
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <motion.div
            whileTap={{ scale: 1.1 }}
            className="cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.div>

          {/* Contact Button */}
          <Link href="/contact">
            <Button className="bg-lime-500 hover:bg-lime-700 text-forest-900">
              Contact
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.div whileTap={{ scale: 1.1 }} onClick={() => setIsOpen(!isOpen)}>
              <Menu size={24} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-forest-700 text-sage-100 p-4 space-y-2"
        >
          {["Home", "About", "Services", "Projects", "Blogs", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
              <div className="p-2 hover:bg-forest-500 rounded">{item}</div>
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
