import { Code, Palette, Bot, FileText, Search, GitBranch } from 'lucide-react';

// Add interface for Service type
interface Service {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
    image: string;
  }
  
    // Add type annotation to services array
    const services: Service[] = [
    {
      id: 1,
      title: "Frontend-Focused Web Development",
      subtitle: "Transform Ideas into Fast, Beautiful, and Engaging Websites",
      description: "Specializing in frontend development, we craft sleek, responsive interfaces that prioritize speed, accessibility, and user engagement.",
      features: [
        "Custom Frontend Development",
        "API Integration",
        "Responsive & Adaptive Design",
        "Performance Optimization"
      ],
      icon: <Code className="w-5 h-5" />,
      image: "/services/frontend.jpg"
    },
    {
      id: 2,
      title: "User Experience (UX) Design",
      subtitle: "Designing with Purpose to Elevate User Satisfaction",
      description: "Prioritizing UX design, we create intuitive, user-centered interfaces that enhance usability, accessibility, and overall engagement.",
      features: [
        "User Research & Persona Development",
        "Wireframing & Prototyping",
        "Usability Testing",
        "Accessibility-First Approach"
      ],
      icon: <Palette className="w-5 h-5" />,
      image: "/services/ux.jpg"
    },
    {
      id: 3,
      title: "AI-Enhanced Multimedia Creation",
      subtitle: "Bring Creativity to Life with AI-Driven Media",
      description: "Using advanced AI technology to produce cutting-edge image and video content, ideal for marketing, branding, and digital storytelling.",
      features: [
        "AI Video & Image Generation",
        "Content Personalization",
        "Automated Design Elements",
        "Creative Tech Solutions"
      ],
      icon: <Bot className="w-5 h-5" />,
      image: "/services/ai.jpg"
    },
    {
      id: 4,
      title: "Technical Writing & Content Creation",
      subtitle: "Clear, Compelling Content that Connects with Readers",
      description: "Professional technical writing services that transform complex ideas into clear, engaging content. Perfect for documentation, tutorials, blogs, and more.",
      features: [
        "Documentation & Guides",
        "Blog & Article Writing",
        "SEO-Optimized Content",
        "Tutorials & How-To Guides"
      ],
      icon: <FileText className="w-5 h-5" />,
      image: "/services/writing.jpg"
    },
    {
      id: 5,
      title: "SEO & Web Performance Optimization",
      subtitle: "Maximize Visibility and Speed for a Better User Experience",
      description: "Boost your site's search engine ranking and load speed to ensure a seamless experience for visitors.",
      features: [
        "On-Page SEO Optimization",
        "Page Speed & Load Time Optimization",
        "Mobile Responsiveness",
        "Analytics Setup & Monitoring"
      ],
      icon: <Search className="w-5 h-5" />,
      image: "/services/seo.jpg"
    },
    {
      id: 6,
      title: "Agile Development & Project Management",
      subtitle: "Flexible, Goal-Oriented Project Management That Delivers",
      description: "Efficient project management using agile methodologies ensures that projects are delivered on time, adapt to changes, and exceed client expectations.",
      features: [
        "Agile & Iterative Development",
        "Collaborative Workflows",
        "Regular Updates & Feedback Integration",
        "Goal-Oriented Project Planning"
      ],
      icon: <GitBranch className="w-5 h-5" />,
      image: "/services/agile.jpg"
    }
  ];
  
  export default services;