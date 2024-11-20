import { SiReact, SiJavascript, SiRedux, SiTailwindcss, SiHtml5, SiCss3, SiVite, SiPostcss, SiWebpack, SiVercel, SiNetlify, SiReactrouter, SiGithub, SiYoutube, SiJson, SiDaisyui } from 'react-icons/si';
import { LuAnalytics, LuNewspaper, LuLanguages, LuPencilRuler, LuFileJson, LuScrollText, LuFileType2, LuComponents } from 'lucide-react';
import { TbApi, TbBrandReactNative } from 'react-icons/tb';
import { BiLogoReact } from 'react-icons/bi';
import { FaFileContract } from 'react-icons/fa';

// data for projects & detailed project page 
export type Project = {
  id: string | number;
  title: string;
  description: string;
  detailedDescription?: string;
  slug: string;
  size?: 'default' | 'tall' | 'wide';
  image?: string;
  video?: string;
  technologies: Array<{
    name: string;
    icon: React.ComponentType;
  }>;
  links: {
    live: string;
    github: string;
  };
};



export const projects: Project[] = [
    {
      id: 1,
      title: 'Foodah',
      description:
        'A robust restaurant discovery and food ordering platform built with React, leveraging live APIs, lazy loading, and custom hooks for optimal performance.',
      detailedDescription:
        'Foodah is a comprehensive food ordering and restaurant discovery platform. Leveraging dynamic data fetching with Swiggy and GitHub APIs, it provides real-time updates to users. Custom hooks streamline the functionality, ensuring a clean UI and smooth navigation. Advanced techniques like lazy loading, suspense, and shimmer UI enhance performance and user experience, handling large datasets efficiently. The platform combines visually appealing design with technical excellence to cater to food enthusiasts.',
      video: '/Project/Videos/Foodah.webm',
      size: 'wide',
      slug: 'foodah',
      technologies: [
        { icon: SiReact, name: 'React' },
        { icon: SiJavascript, name: 'JavaScript' },
        { icon: SiRedux, name: 'Redux' },
        { icon: SiTailwindcss, name: 'Tailwind CSS' },
        { icon: SiPostcss, name: 'PostCSS' },
        { icon: SiWebpack, name: 'Webpack' },
        { icon: SiVercel, name: 'Vercel' },
        { icon: SiParcel, name: 'Parcel' },
        { icon: SiReactrouter, name: 'React Router' },
        { icon: SiEmailjs, name: 'EmailJS' },
        { icon: SiJson, name: 'JSON API' },
        { icon: SiHtml5, name: 'HTML' },
        { icon: BiLogoReact, name: 'React Icons' }
      ],
      links: {
        live: 'https://foodah.vercel.app/',
        github: 'https://github.com/AmanSuryavanshi-1/Foodah',
      },
    },
    {
      id: 2,
      title: 'E-Commerce',
      description:
        'A React-based E-commerce clone web app with multiple responsive pages with product listings details, Shopping Categories, shopping cart & providing a seamless shopping experience for users.',
      detailedDescription:
        'The E-Commerce app offers a user-friendly shopping experience through responsive design and efficient features. With product listings, categories, and a functional shopping cart, users can explore and purchase seamlessly. It demonstrates mastery in React and modern design principles.',
      image: '/Project/E-coomerce.jpg',
      size: 'default',
      slug: 'e-commerce',
      technologies: [
        { icon: SiReact, name: 'React' },
        { icon: SiMaterialui, name: 'MaterialUI' },
        { icon: SiJavascript, name: 'JavaScript' },
        { icon: SiNetlify, name: 'Netlify' }
      ],
      links: {
        live: 'https://ase-commerce.netlify.app/',
        github: 'https://github.com/AmanSuryavanshi-1/E-commerce-App',
      },
    },
    {
      id: 3,
      title: 'AV-NewsStream',
      description:
        'A hands-free news reading platform with voice-assisted functionality, real-time API integration, and seamless user experience.',
      detailedDescription:
        'AV-NewsStream is an advanced voice-assisted news reading platform. By integrating multiple APIs such as News API, Gnews.io, YouTube API, and GitHub API, it ensures real-time and diverse updates. Features like lazy loading, shimmer UI, and error handling optimize performance, offering a smooth and effortless user experience.',
      video: '/Project/Videos/AVNewsStream.webm',
      size: 'tall',
      slug: 'av-newsstream',
      technologies: [
        { icon: SiReact, name: 'React' },
        { icon: SiJavascript, name: 'JavaScript' },
        { icon: SiRedux, name: 'Redux Toolkit' },
        { icon: SiTailwindcss, name: 'Tailwind CSS' },
        { icon: SiVite, name: 'Vite' },
        { icon: SiVercel, name: 'Vercel' },
        { icon: SiGithub, name: 'GitHub API' },
        { icon: SiYoutube, name: 'YouTube API' },
        { icon: SiEmailjs, name: 'EmailJS' },
        { icon: SiDaisyui, name: 'DaisyUI' },
        { icon: TbApi, name: 'GNews API' },
        { icon: LuNewspaper, name: 'News API' },
        { icon: BiLogoReact, name: 'React Icons' },
        { icon: SiReactrouter, name: 'React Router DOM' },
        { icon: LuLanguages, name: 'Text to Speech' },
        { icon: FaFileContract, name: 'CORS' }
      ],
      links: {
        live: 'https://avnews.vercel.app/',
        github: 'https://github.com/AmanSuryavanshi-1/AV-News-Stream',
      },
    },
    {
      id: 4,
      title: 'TextWise',
      description:
        'A simple yet powerful text utility app for formatting, editing, and analyzing text with an intuitive and clean UI.',
      detailedDescription:
        'TextWise is a robust text editing and utility application. It includes rich formatting options, case conversion, and advanced tools like speech-to-text and transliteration. It integrates features such as collaborative drawing and real-time interaction, making it an all-in-one toolkit for content creation.',
      image: '/Project/Textutil.jpg',
      size: 'default',
      slug: 'textwise',
      technologies: [
        { icon: SiReact, name: 'React' },
        { icon: SiJavascript, name: 'JavaScript' },
        { icon: SiTailwindcss, name: 'Tailwind CSS' },
        { icon: SiVercel, name: 'Vercel' },
        { icon: SiQuill, name: 'QuillJS' },
        { icon: SiPostcss, name: 'PostCSS' },
        { icon: SiReactrouter, name: 'React Router Dom' },
        { icon: SiEmailjs, name: 'EmailJS' },
        { icon: LuPencilRuler, name: 'Excalidraw' },
        { icon: LuLanguages, name: 'Web Speech API' }
      ],
      links: {
        live: 'https://text-wise.vercel.app/',
        github: 'https://github.com/AmanSuryavanshi-1/TextWise-TextUtilityAPP',
      },
    },
    {
      id: 5,
      title: 'Spotify', // Placeholder Title
      description:'A responsive and interactive Spotify clone, showcasing attention to detail in UI/UX design and modern CSS frameworks.',
      detailedDescription: '', // Placeholder Detailed Description
      image: '/Project/Spotify.jpg', // Placeholder Image
      size: 'default',
      slug: 'spotify-clone',
      technologies: [
        { icon: SiHtml5, name: 'HTML' },
        { icon: SiCss3, name: 'CSS' },
        { icon: SiJavascript, name: 'JavaScript' }
      ], 
      links: {
        live: '',
        github: '',
      },
    },
    {
        id: 6,
        title: 'Barakat Enterprise',
        description: 'A marketplace for flooring materials like tiles and marbles, designed as a freelancing project with a focus on modern UI and user-friendly functionality.',
        image: '/Project/Textutil.jpg',
        size: 'wide',
        slug: 'barakat-enterprise',
        technologies: [
          { icon: SiReact, name: 'React' },
          { icon: SiJavascript, name: 'JavaScript' },
          { icon: SiVercel, name: 'Vercel' },
          { icon: SiTailwindcss, name: 'Tailwind CSS' },
          { icon: LuAnalytics, name: 'Vercel Analytics' },
          { icon: TbBrandReactNative, name: 'React LazyLoad' },
          { icon: LuFileType2, name: 'PDF.js' },
          { icon: LuComponents, name: 'React Icons' }
        ],
        links: {
          live: '', // Add live link here
          github: '', // Add GitHub link here
        },
      },
      {
        id: 7,
        title: 'Old Portfolio',
        description: 'My original portfolio website showcasing early projects, emphasizing foundational skills in web development and UI/UX design.',
        image: '/Project/E-coomerce.jpg',
        size: 'default',
        slug: 'old-portfolio',
        technologies: [
          { icon: SiHtml5, name: 'React' },
          { icon: SiCss3, name: 'CSS' },
          { icon: SiJavascript, name: 'JavaScript' },
          { icon: SiJavascript, name: 'Netlify' },
        //   reacticons

        ],
        links: {
          live: '', // Add live link here
          github: '', // Add GitHub link here
        },
      },
      {
        id: 8,
        title: 'BlogsXPortfolio',
        description: 'A platform integrating blogs and portfolio showcasing projects, experiences, and technical write-ups with a focus on storytelling.',
        image: '/Project/E-coomerce.jpg',
        size: 'default',
        slug: 'blogs-x-portfolio',
        technologies: [
          { icon: SiHtml5, name: 'HTML' },
          { icon: SiCss3, name: 'CSS' },
          { icon: SiJavascript, name: 'JavaScript' },
        ],
        links: {
          live: '', // Add live link here
          github: '', // Add GitHub link here
        },
      },      
  ];
  