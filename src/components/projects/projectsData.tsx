import { 
    // React Icons - React/Framework
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaGithub,
    FaYoutube,
    FaNewspaper,
    FaLanguage,
    FaPencilRuler,
    FaGlobe,
    FaMobileAlt,
    FaChartLine,
    FaFileArchive,
    FaIcons
  } from 'react-icons/fa';
  
  import { 
    SiRedux, 
    SiTailwindcss, 
    SiPostcss, 
    SiNetlify,
    SiDaisyui,
    SiVite,
    SiMui,
    SiTypescript,
    SiNextdotjs,
    SiShadcnui,
    SiFramer,
    SiIcon
  } from 'react-icons/si';
  
  import { 
    // Lucide React - Fallback Icons
    Route, 
    FileJson, 
    Webhook, 
    Component,
    PenTool
  } from 'lucide-react';
  
  import { MdEmail, MdViewInAr } from 'react-icons/md';
  import { AiOutlineDeploymentUnit } from 'react-icons/ai';
  
  export type Project = {
    id: string | number;
    title: string;
    description: string;
    detailedDescription?: string;
    slug?: string;
    size?: 'default' | 'tall' | 'wide';
    image?: string;
    video?: string;
    technologies: Array<{
      name: string;
      icon: React.ElementType;
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
          { icon: FaReact, name: 'React' },
          { icon: FaJsSquare, name: 'JavaScript' },
          { icon: SiRedux, name: 'Redux' },
          { icon: SiTailwindcss, name: 'Tailwind CSS' },
          { icon: FaHtml5, name: 'HTML' },
          { icon: FaGlobe, name: 'Vercel' },
          { icon: SiPostcss, name: 'PostCSS' },
          { icon: FaFileArchive, name: 'Webpack' },
          { icon: AiOutlineDeploymentUnit, name: 'Parcel' },
          { icon: Route, name: 'React Router' },
          { icon: MdEmail, name: 'EmailJS' },
          { icon: FileJson, name: 'JSON API' },
          { icon: Component, name: 'React Icons' }
        ],
        links: {
          live: 'https://foodah.vercel.app/',
          github: 'https://github.com/AmanSuryavanshi-1/Foodah',
        },
      },
      {
        id: 2,
        title: 'Freelance Project for an Enterprise',
        description: 'A marketplace for flooring materials like tiles and marbles, designed as a freelancing project with a focus on modern UI and user-friendly functionality.',
        image: '/Project/Enterprise-mobile.webp',
        size: 'default',
        slug: 'a-freelance-project-for-an-enterprise',
        technologies: [
          { icon: FaReact, name: 'React' },
          { icon: FaJsSquare, name: 'JavaScript' },
          { icon: FaGlobe, name: 'Vercel' },
          { icon: SiTailwindcss, name: 'Tailwind CSS' },
          { icon: FaChartLine, name: 'Vercel Analytics' },
          { icon: FaMobileAlt, name: 'React LazyLoad' },
          { icon: MdViewInAr, name: 'PDF.js' },
          { icon: Component, name: 'React Icons' },
        ],
        links: {
          live: 'https://barkat-enterprise.vercel.app/',
          github: 'https://github.com/AmanSuryavanshi-1/BarkatEnterprise',
        },
      },
      {
        id: 3,
        title: 'AV-NewsStream',
        description:
          'A hands-free news reading & streaming platform with voice-assisted functionality, real-time API integration, and seamless user experience.',
        detailedDescription:
          'AV-NewsStream is an advanced voice-assisted news reading platform. By integrating multiple APIs such as News API, Gnews.io, YouTube API, and GitHub API, it ensures real-time and diverse updates. Features like lazy loading, shimmer UI, and error handling optimize performance, offering a smooth and effortless user experience.',
        video: '/Project/Videos/AVNewsStream.webm',
        size: 'tall',
        slug: 'av-news-stream',
        technologies: [
          { icon: FaReact, name: 'React' },
          { icon: FaJsSquare, name: 'JavaScript' },
          { icon: FaGithub, name: 'GitHub API' },
          { icon: FaYoutube, name: 'YouTube API' },
          { icon: Webhook, name: 'GNews API' },
          { icon: FaNewspaper, name: 'News API' },
          { icon: SiRedux, name: 'Redux Toolkit' },
          { icon: SiTailwindcss, name: 'Tailwind CSS' },
          { icon: SiVite, name: 'Vite' },
          { icon: FaGlobe, name: 'Vercel' },
          { icon: MdEmail, name: 'EmailJS' },
          { icon: SiDaisyui, name: 'DaisyUI' },
          { icon: Component, name: 'React Icons' },
          { icon: Route, name: 'React Router DOM' },
          { icon: FaLanguage, name: 'Text to Speech' },
          { icon: FileJson, name: 'CORS' }
        ],
        links: {
          live: 'https://avnews.vercel.app/',
          github: 'https://github.com/AmanSuryavanshi-1/AV-News-Stream',
        },
      },
      {
        id: 4,
        title: 'Spotify',
        description: 'A responsive and interactive Spotify clone, showcasing attention to detail in UI/UX design and modern CSS frameworks.',
        detailedDescription: '',
        image: '/Project/Spotify.webp',
        size: 'default',
        // slug: 'spotify-clone',
        technologies: [
          { icon: FaHtml5, name: 'HTML' },
          { icon: FaCss3Alt, name: 'CSS' },
          { icon: FaJsSquare, name: 'JavaScript' },
        ],
        links: {
          live: 'https://amansuryavanshi-1.github.io/Spotify-Clone/',
          github: 'https://github.com/AmanSuryavanshi-1/Spotify-Clone',
        },
      },
      {
        id: 5,
        title: 'E-Commerce',
        description:
          'A React-based E-commerce clone web app with multiple responsive pages with product listings details, Shopping Categories, shopping cart & providing a seamless shopping experience for users.',
        detailedDescription:
          'The E-Commerce app offers a user-friendly shopping experience through responsive design and efficient features. With product listings, categories, and a functional shopping cart, users can explore and purchase seamlessly. It demonstrates mastery in React and modern design principles.',
        image: '/Project/Ecommerce.webp',
        size: 'default',
        slug: 'e-commerce',
        technologies: [
          { icon: FaReact, name: 'React' },
          { icon: SiMui, name: 'MaterialUI' },
          { icon: FaJsSquare, name: 'JavaScript' },
          { icon: SiNetlify, name: 'Netlify' }
        ],
        links: {
          live: 'https://ase-commerce.netlify.app/',
          github: 'https://github.com/AmanSuryavanshi-1/E-commerce-App',
        },
      },
      {
        id: 6,
        title: 'Old Portfolio',
        description: 'My original portfolio website showcasing early projects, emphasizing foundational skills in web development and UI/UX design.',
        image: '/Project/Portfolio-old.webp',
        size: 'default',
        // slug: 'old-portfolio',
        technologies: [
          { icon: FaHtml5, name: 'HTML' },
          { icon: FaCss3Alt, name: 'CSS' },
          { icon: FaJsSquare, name: 'JavaScript' },
          { icon: FaReact, name: 'React' },
          { icon: SiNetlify, name: 'Netlify' }
        ],
        links: {
          live: 'https://aman-suryavanshi-portfolio.netlify.app/',
          github: 'https://github.com/AmanSuryavanshi-1/Portfolio_AS',
        },
      },
      {
        id: 7,
        title: 'Blogs & Portfolio',
        description: 'A platform integrating blogs and portfolio showcasing projects, experiences, and technical write-ups with a focus on storytelling.',
        image: '/Project/Portfolio.webp',
        size: 'tall',
        slug: 'blogs-x-portfolio',
        technologies: [
          { icon: FaHtml5, name: 'HTML' },
          { icon: FaCss3Alt, name: 'CSS' },
          { icon: FaJsSquare, name: 'JavaScript' },
          { icon: SiTypescript, name: 'TypeScript' },
          { icon: SiNextdotjs, name: 'Next.js' },
          { icon: SiTailwindcss, name: 'Tailwind CSS' },
          { icon: FaGlobe, name: 'Vercel' },
          { icon: SiShadcnui, name: 'ShadcnUI' },
          { icon: SiFramer, name: 'Framer Motion' },
          { icon: SiIcon, name: 'Lucide React' },
          { icon: FaIcons, name: 'React Icons' },
        ],
        links: {
          live: 'https://amansuryavanshi-dev.vercel.app/',
          github: 'https://github.com/AmanSuryavanshi-1/AmanSuryavanshi.dev',
        },
      },
      {
        id: 8,
        
        title: 'TextWise',
        description:
          'A simple yet powerful text utility app for formatting, editing, and analyzing text with an intuitive and clean UI.',
        detailedDescription:
          'TextWise is a robust text editing and utility application. It includes rich formatting options, case conversion, and advanced tools like speech-to-text and transliteration. It integrates features such as collaborative drawing and real-time interaction, making it an all-in-one toolkit for content creation.',
        image: '/Project/TextWise.webp',
        size: 'wide',
        slug: 'textwise',
        technologies: [
          { icon: FaReact, name: 'React' },
          { icon: FaJsSquare, name: 'JavaScript' },
          { icon: SiTailwindcss, name: 'Tailwind CSS' },
          { icon: FaGlobe, name: 'Vercel' },
          { icon: PenTool, name: 'QuillJS' },
          { icon: SiPostcss, name: 'PostCSS' },
          { icon: Route, name: 'React Router Dom' },
          { icon: MdEmail, name: 'EmailJS' },
          { icon: FaPencilRuler, name: 'Excalidraw' },
          { icon: FaLanguage, name: 'Web Speech API' }
        ],
        links: {
          live: 'https://text-wise.vercel.app/',
          github: 'https://github.com/AmanSuryavanshi-1/TextWise-TextUtilityAPP',
        },
      },
  ];