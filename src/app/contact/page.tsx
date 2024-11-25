// components/contact/ContactForm.tsx
"use client";

import React, { useRef, useState } from 'react';
import { Mail, Send, MessageSquare, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import HeroSocial from '@/components/hero/HeroSocial';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    try {
      // Replace with your email service logic
      await fetch('/api/send-email', {
        method: 'POST',
        body: new FormData(form.current)
      });
      
      setIsMessageSent(true);
      form.current.reset();
      setTimeout(() => setIsMessageSent(false), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col py-16 sm:px-8 items-center justify-center"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        id="Contact-us-heading"
           className="text-3xl md:text-5xl font-bold font-serif text-forest-900 text-center">
          Contact<span className="text-lime-500">Us</span>
      </motion.h1>

      {/* Add mobile social icons */}
      <div className="md:hidden w-full max-w-[58rem] mt-8">
        <HeroSocial className="flex justify-center gap-6" />
      </div>

      <div className="w-full max-w-[58rem] relative flex gap-4">
        {/* Desktop social icons */}
        <div className="hidden md:flex flex-col justify-center">
          <HeroSocial className="grid gap-4" />
        </div>

        <Card className="w-full overflow-hidden bg-transparent border-0 shadow-none">
          <CardContent className="p-0 bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Info Section */}
              <div className="flex flex-col p-6 sm:p-8 lg:px-12 lg:py-10 text-lime-500">
                <div className="flex flex-col space-y-5">
                  <ContactCard
                    icon={<Mail className="w-6 h-6" />}
                    title="Email"
                    content="adude890@gmail.com"
                    link="mailto:adude890@gmail.com"
                    linkText="Send an email"
                  />
                  
                  <ContactCard
                    icon={<MessageSquare className="w-7 h-7" />}
                    title="WhatsApp"
                    content="+91 8745030106"
                    link="https://api.whatsapp.com/send?phone=+918745030106&text=Hello%20there!"
                    linkText="Chat on WhatsApp"
                  />

                  <ContactCard
                    icon={<MapPin className="w-6 h-6" />}
                    title="Location"
                    content="Bangalore, Karnataka, India"
                    link="https://maps.google.com/?q=Bangalore,Karnataka,India"
                    linkText="View on Maps"
                  />
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="flex flex-col p-6 sm:p-8 lg:p-12">
                <form 
                  ref={form} 
                  onSubmit={sendEmail}
                  className="flex flex-col space-y-5"
                >
                  <Input name="name" placeholder="Your Full Name" />
                  <Input name="email" type="email" placeholder="Your Email" />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    required
                    className="w-full h-52 px-4 py-4 text-sm rounded-2xl shadow-md shadow-forest-500 bg-transparent border-4 border-sage-100 text-forest-900 placeholder:text-forest-700 focus:from-forest-900 focus:to-forest-500 focus:text-sage-100 focus:placeholder:text-sage-300 transition-all duration-300 focus:outline-none resize-none"
                  />
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="flex rounded-3xl border-2 border-sage-100 items-center justify-center px-4 py-3 text-sm font-bold tracking-wide text-sage-100 bg-forest-900 hover:bg-forest-700 transition-colors duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-4 h-4" />
                  </motion.button>

                  {isMessageSent && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-center text-lime-500"
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

const ContactCard = ({ icon, title, content, link, linkText }: {
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
  linkText: string;
}) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="group flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-lime-500 to-lime-300/10 border-4 border-sage-100 hover:from-forest-900 hover:to-forest-500 hover:text-sage-100 transition-colors duration-300 shadow-lg shadow-forest-500"
  >
    <div className="p-4 rounded-full bg-forest-900 text-lime-500 group-hover:bg-lime-500 group-hover:text-forest-900">
      {icon}
    </div>
    <div>
      <h4 className="text-base font-semibold text-forest-900 group-hover:text-lime-500">{title}</h4>
      <p className="text-sm text-forest-500 mb-1 group-hover:text-lime-100">{content}</p>
      <Link 
        href={link}
        className="text-sm font-medium text-forest-500 group-hover:text-sage-100 transition-colors duration-300"
      >
        {linkText}
      </Link>
    </div>
  </motion.div>
);

const Input = ({ name, type = "text", placeholder }: {
  name: string;
  type?: string;
  placeholder: string;
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    required
    className="w-full px-4 py-3 text-sm rounded-xl shadow-md shadow-forest-500 bg-transparent border-4 border-sage-100 text-forest-900 placeholder:text-forest-700 focus:from-forest-900 focus:to-forest-500 focus:text-sage-100 focus:placeholder:text-sage-300 transition-all duration-300 focus:outline-none"
  />
);

export default ContactForm;