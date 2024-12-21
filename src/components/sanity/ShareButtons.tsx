'use client';

import React from 'react';
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaCopy,
} from 'react-icons/fa';
import { toast } from 'sonner';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      bgColor: 'bg-[#1DA1F2] hover:bg-[#1a8cd8]',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      bgColor: 'bg-[#0A66C2] hover:bg-[#094ea3]',
    },
    {
      name: 'Facebook',
      icon: FaFacebookF,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bgColor: 'bg-[#1877F2] hover:bg-[#1664d9]',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      bgColor: 'bg-[#25D366] hover:bg-[#20bd5a]',
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Link copied to clipboard!');
    } catch {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className="flex items-center gap-3">
      {shareLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.bgColor} text-white p-2 rounded-full transition-all duration-300 hover:scale-110`}
            title={`Share on ${link.name}`}
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
      <button
        onClick={copyToClipboard}
        className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
        title="Copy link"
      >
        <FaCopy className="w-4 h-4" />
      </button>
    </div>
  );
}
