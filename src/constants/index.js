import aiBusinessImg from '../assets/images/ai-business-chat-assistant.png';
import travelAppImg from '../assets/images/travel-website.png';
import projectFairImg from '../assets/images/project-fair.png';
import lungarnoImg from '../assets/images/lungarno-collection.png';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#stack' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const PERSONAL_INFO = {
  name: "Abdul Basith.M",
  role: "Full Stack Developer",
  experience: "2+ Years",
  status: "Building digital experiences...",
  email: "abdulbasith.me24@gmail.com",
  location: "Remote / Worldwide",
  phone: "+91 7736276633",
};

export const STATS = [
  { 
    label: 'Years Experience', 
    value: '2+', 
    icon: 'workspace_premium', 
    color: 'secondary' 
  },
  { 
    label: 'Projects Delivered', 
    value: '15+', 
    icon: 'trending_up', 
    color: 'primary' 
  },
  { 
    label: 'Client Satisfaction', 
    value: '100%', 
    icon: 'person', 
    color: 'secondary' 
  },
];


export const TECH_STACK = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'GSAP', 
  'TypeScript', 'Next.js', 'Express', 'PostgreSQL', 'C#', 'Python', '.NET', 'Umbraco'
];

export const ABOUT_TEXT = {
  mainBio: "With over 2 years of professional experience, I specialize in building highly responsive and performant web applications. My approach combines technical excellence with a deep understanding of user psychology.",
  subBio: "I thrive in collaborative environments where architectural cleanliness and modern standards are prioritized. I don't just write code; I build experiences that scale.",
  detailedBioPrimary: "I'm a passionate software developer with 2+ years of professional experience, specializing in building scalable, enterprise-grade web applications.",
  detailedBioSecondary: "My expertise lies in transforming complex business requirements into elegant, performant solutions. I combine technical excellence with a deep understanding of user experience to deliver products that don't just work—they inspire."
};

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "27 Technologies PVT LTD",
    period: "July 2024 – Present",
    description: [
      "Develop and maintain modern web applications using React.js, .NET, C#, SQL, and Umbraco CMS.",
      "Build reusable CMS components, enhance production applications with performance improvements and bug fixes, implement interactive user interfaces using Swiper and GSAP, and support deployment, testing, and ongoing maintenance while delivering high quality solutions on schedule.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Umbraco", "React", "TypeScript", "Next.js", "Tailwind CSS", "GSAP", "Git", "C#", ".NET", "SQL"],
    color: "secondary", // For the timeline dot
  },
  {
    role: "MERN Stack Intern",
    company: "Luminar Technolab, Kochi",
    period: "June 2023 – January 2024",
    description: [
      "Built web interfaces using HTML, CSS, and JavaScript as part of hands-on web development training.",
      "Developed responsive single-page applications using React.js.",
      "Worked with Node.js and MongoDB to create dynamic web applications and strengthen full stack fundamentals.",
    ],
    technologies: ["HTML", "CSS", "JavaScript","React.js", "Node.js", "Express", "MongoDB", "Firebase", "Git", "JSON Web Tokens (JWT)", "RESTful APIs", "Postman", "JSON server", "Bootstrap", "Material UI"],
    color: "primary", // For the timeline dot
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "AI Business Assistant",
    category: "AI-Powered Full Stack Web Application | RAG-Based AI Assistant",
    description: "A production-ready AI chatbot that uses RAG and Google Gemini to deliver accurate, company-specific answers from a custom knowledge base.",
    image: aiBusinessImg,
    liveUrl: "https://ai-business-chat-assistant.vercel.app/",
    githubUrl: "https://github.com/abdulbasith24/AI-Business-Chat-Assistant.git",
    tech: [
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
      { name: "Google Gemini", icon: "https://cdn.simpleicons.org/googlegemini" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" }
    ]
  },
  {
    id: 2,
    title: "Travel.",
    category: "Travel Website",
    description: "A visually appealing travel landing page showcasing responsive design, modern layouts, and modern frontend development practices.",
    image: travelAppImg,
    liveUrl: "https://travel-app-xi-drab.vercel.app/",
    githubUrl: "https://github.com/Basith-m/Travel-App.git",
    tech: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "SCSS", icon: "https://skillicons.dev/icons?i=sass" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" }
    ]
  },
  {
    id: 3,
    title: "Project Fair",
    category: "Web Application",
    description: "Platform for showcasing and managing projects. allows users to upload, manage, and share projects.",
    image: projectFairImg,
    liveUrl: "https://project-fair-two.vercel.app/",
    githubUrl: "https://github.com/Basith-m/Project-Fair.git",
    tech: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "Express", icon: "https://skillicons.dev/icons?i=express" }
    ]
  },
  {
    id: 4,
    title: "Lungarno Collection",
    category: "CMS Application",
    description: "Umbraco CMS-based web application for a hospitality brand.",
    image: lungarnoImg,
    liveUrl: "#",
    githubUrl: "#",
    tech: [
      { name: "Umbraco", icon: "https://cdn.simpleicons.org/umbraco" },
      { name: "C#", icon: "https://skillicons.dev/icons?i=cs" },
      { name: "ASP.NET / Razor", icon: "https://skillicons.dev/icons?i=dotnet" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "LESS", icon: "https://cdn.simpleicons.org/less" },
      { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock" },
      { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" }
    ]
  }
];

export const SOCIAL_LINKS = [
  { 
    name: 'GitHub', 
    href: 'https://github.com/Basith-m'
  },
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/abdul-basith-m24'
  },
  { 
    name: 'Twitter', 
    href: 'https://x.com/abm6633'
  },
];