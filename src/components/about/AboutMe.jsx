'use client';
import React from 'react';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section className="w-full py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <span className="inline-block mb-2 text-forest-500 font-medium tracking-wider uppercase text-sm">
            Get To Know
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-forest-900 mb-4">
            About <span className="text-lime-500">Me</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mx-auto">
          {/* Left Column - Image */}
          <div className="lg:col-span-5">
            <div className="relative group w-full h-[280px] max-w-sm mx-auto">
              <div 
                className="absolute inset-0 rounded-2xl bg-lime-500 transform rotate-6 group-hover:rotate-[10deg] transition-transform duration-300"
                aria-hidden="true"
              />
              <div className="relative h-full overflow-hidden rounded-2xl">
                <Image
                  src="/Profile/Me Main.png"
                  alt="Profile picture of a web developer and UI/UX designer"
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 33vw"
                  priority
                  className="object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 my-4">
            <div className="prose prose-forest max-w-none">
              <p className="text-forest-700 leading-relaxed mb-4">
                Hi, I'm a passionate web developer and UI/UX designer dedicated to creating beautiful, functional, and user-centered digital experiences. With a keen eye for design and a strong technical foundation, I bridge the gap between aesthetics and functionality.
              </p>
              <p className="text-forest-700 leading-relaxed">
                I believe that design is about more than just making things look pretty - it's about solving problems and creating intuitive, enjoyable experiences for users. Whether I'm working on a website or a mobile app, I bring my commitment to design excellence and user-centered thinking to every project I work on.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex mt-8 max-lg:justify-center">
              <Button
                asChild
                className="group relative px-8 py-3 text-md border-4 rounded-2xl border-forest-900 overflow-hidden bg-forest-900 hover:bg-forest-700 hover:border-forest-700 text-sage-100 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Link href="/contact" aria-label="Contact me for discussion">
                  <span className="relative z-10 flex items-center gap-3">
                    <MessageCircle className="w-7 h-7" strokeWidth={2} aria-hidden="true" />
                    <span className="font-semibold tracking-wide">Let's Talk</span>
                    <span 
                      className="absolute inset-0 bg-forest-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;