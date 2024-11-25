const skillsData = {
  categories: {
    "Technical Skills": {
      icon: "Code2",
      skills: [
        // Frontend Frameworks & Libraries
        { name: "React", icon: "FaReact", url: "https://react.dev" },
        { name: "C/C++", icon: "SiCplusplus", url: "https://www.cppreference.com" },
        { name: "Data Structures & Algorithms", icon: "Binary", url: "https://www.geeksforgeeks.org/data-structures/" },
        { name: "Object-Oriented Programming", icon: "Boxes", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming" },
        { name: "Computer Networks", icon: "Network", url: "https://www.computernetworkingnotes.com/" },
        { name: "JSON", icon: "Braces", url: "https://www.json.org/" },
        { name: "Axios", icon: "SiAxios", url: "https://axios-http.com/" },
        { name: "Web APIs", icon: "Globe", url: "https://developer.mozilla.org/en-US/docs/Web/API" },
        { name: "Next.js", icon: "SiNextdotjs", url: "https://nextjs.org" },
        { name: "Redux", icon: "SiRedux", url: "https://redux.js.org" },
        { name: "TypeScript", icon: "SiTypescript", url: "https://www.typescriptlang.org" },
        { name: "JavaScript", icon: "FaJs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "HTML", icon: "FaHtml5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", icon: "FaCss3Alt", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },

        { name: "Full Stack Development", icon: "FaLayerGroup", url: "https://roadmap.sh/full-stack" },
        { name: "Frontend Development", icon: "LayoutDashboard", url: "https://roadmap.sh/frontend" },
        

        // Build Tools
        { name: "Webpack", icon: "SiWebpack", url: "https://webpack.js.org" },
        { name: "Vite", icon: "SiVite", url: "https://vitejs.dev" },
        { name: "Parcel", icon: "SiParcel", url: "https://parceljs.org" },
        { name: "PostCSS", icon: "SiPostcss", url: "https://postcss.org" },
          // "UI Libraries & Frameworks": [
            { name: "Tailwind CSS", icon: "SiTailwindcss", url: "https://tailwindcss.com" },
            { name: "Material UI", icon: "SiMaterialui", url: "https://mui.com" },
            { name: "Shadcn UI", icon: "Component", url: "https://ui.shadcn.com" },
            { name: "DaisyUI", icon: "SiDaisyui", url: "https://daisyui.com" },
            { name: "Framer Motion", icon: "SiFramer", url: "https://www.framer.com/motion" },
            { name: "Bootstrap", icon: "FaBootstrap", url: "https://getbootstrap.com" },
          // ],

          { name: "REST APIs", icon: "FaCode", url: "https://restfulapi.net" },
        { name: "GitHub API", icon: "FaGithub", url: "https://docs.github.com/en/rest" },
        { name: "YouTube API", icon: "FaYoutube", url: "https://developers.google.com/youtube/v3" },
        { name: "Email Integration", icon: "Mail", url: "https://nodemailer.com" },
        ]
    },
    // "APIs & Integration": {
    //   icon: "Webhook",
    //   skills: [
    //     { name: "REST APIs", icon: "FaCode", url: "https://restfulapi.net" },
    //     { name: "GitHub API", icon: "FaGithub", url: "https://docs.github.com/en/rest" },
    //     { name: "YouTube API", icon: "FaYoutube", url: "https://developers.google.com/youtube/v3" },
    //     { name: "Email Integration", icon: "Mail", url: "https://nodemailer.com" },
    //     { name: "Responsive Design", icon: "Smartphone", url: "https://web.dev/responsive-web-design-basics" },
    //   ]
    // },
    "Creative Skills": {
      icon: "Palette",
      skills: [
        { name: "UI/UX Design", icon: "Palette", url: "https://careerfoundry.com/en/blog/ux-design/what-is-ui-ux-design/" },
        { name: "Content Writing", icon: "PenLine", url: "https://www.hubspot.com/content-marketing" },
        { name: "Figma", icon: "FaFigma", url: "https://help.figma.com" },
        { name: "Creative Technology", icon: "Sparkles" },
        { name: "Technical Writing", icon: "FileText", url: "https://developers.google.com/tech-writing" },
        { name: "AI Video Creation", icon: "Video", url: "https://pictory.ai" },
        { name: "AI Image Generation", icon: "ImagePlus", url: "https://openai.com/dall-e" },
        { name: "User-Centered Design", icon: "UserCog", url: "https://www.nngroup.com/articles/usability-101-introduction-to-usability/" }
      ]
    },
    "Optimization & Deployment": {
      icon: "Rocket",
      skills: [
        { name: "Web Performance", icon: "Gauge", url: "https://web.dev/performance-scoring" },
        { name: "SEO", icon: "Search", url: "https://developers.google.com/search/docs" },
        { name: "Performance Optimization", icon: "Timer" },
        { name: "Vercel", icon: "SiVercel", url: "https://vercel.com/docs" },
        { name: "Netlify", icon: "SiNetlify", url: "https://docs.netlify.com" },
        { name: "GitHub Pages", icon: "SiGithub", url: "https://docs.github.com/en/pages" },
        { name: "Web Analytics", icon: "BarChart", url: "https://analytics.google.com" },
        { name: "Vercel Analytics", icon: "SiVercel", url: "https://vercel.com/analytics" },
        { name: "Google Analytics", icon: "SiGoogleanalytics", url: "https://analytics.google.com" },
        { name: "Performance Monitoring", icon: "Activity", url: "https://web.dev/vitals" },
      ]
    },
    "Tools & Technologies": {
      icon: "Wrench",
      skills: [
        { name: "Git", icon: "GitBranch", url: "https://git-scm.com/doc" },
        // { name: "Docker", icon: "FaDocker", url: "https://docs.docker.com" },
        // { name: "AWS", icon: "FaAws", url: "https://aws.amazon.com/documentation" },
        { name: "Figma", icon: "FaFigma", url: "https://help.figma.com" },
        { name: "VS Code", icon: "SiVisualstudiocode", url: "https://code.visualstudio.com/docs" },
        { name: "Terminal", icon: "Terminal", url: "https://ubuntu.com/tutorials/command-line-for-beginners" },
        { name: "DevTools", icon: "FaTools", url: "https://developer.chrome.com/docs/devtools" },
        { name: "Cursor AI", icon: "Terminal", url: "https://cursor.sh" },
        { name: "Claude AI", icon: "Bot", url: "https://anthropic.com/claude" },
        { name: "ChatGPT", icon: "MessageSquare", url: "https://chat.openai.com" },
        { name: "Gemini", icon: "Bot", url: "https://gemini.google.com" },
        { name: "v0.dev", icon: "Code", url: "https://v0.dev" },
        { name: "Notion", icon: "SiNotion", url: "https://notion.so" },
        { name: "Leonardo AI", icon: "Palette", url: "https://leonardo.ai" },
      ]
    },
    "Soft Skills": {
      icon: "Users",
      skills: [
        { name: "Time Management", icon: "Clock", url: "https://www.mindtools.com/pages/article/newHTE_00.htm" },
        { name: "Problem Solving", icon: "PuzzlePiece", url: "https://www.indeed.com/career-advice/career-development/problem-solving-skills" },
        { name: "Teamwork", icon: "Users2", url: "https://www.indeed.com/career-advice/career-development/teamwork-skills" },
        { name: "Meeting Deadlines", icon: "Calendar", url: "https://www.mindtools.com/pages/article/deadline-management.htm" },
        { name: "Creativity", icon: "Lightbulb", url: "https://www.creativityatwork.com/what-is-creativity/" }
      ]
    }
  }
};

export default skillsData;