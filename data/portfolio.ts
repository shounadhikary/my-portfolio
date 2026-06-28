// ============================================================
// PORTFOLIO DATA - Edit this file to customize all content
// ============================================================

export const personalInfo = {
  name: "Shoun Adhikary",
  firstName: "Shoun",
  lastName: "Adhikary",
  title: "CSE Student & Aspiring AI/ML Engineer",
  taglines: [
    "Machine Learning Researcher",
    "AI/ML Engineer",
    "Software Developer",
    "Data Analyst",
    "Full Stack Developer",
    "Open Source Contributor",
    "Competitive Programmer",
  ],
  bio: "A Computer Science and Engineering graduate with interests in Software Engineering, Software Quality Assurance (SQA), and Artificial Intelligence. Passionate about building scalable, reliable, and intelligent systems for real-world applications.",
  longBio: `I'm a Computer Science and Engineering graduate with interests in Software Engineering, Software Quality Assurance (SQA), and Artificial Intelligence. I have a strong curiosity for how software systems are built, tested, and made intelligent to solve real-world problems.

My journey started with competitive programming, which helped me develop strong problem-solving and algorithmic thinking skills. Over time, I expanded into software development, testing, and machine learning, gaining hands-on experience in building and ensuring the quality of end-to-end systems.

I have worked on testing workflows, contributing to scalable applications and exploring AI-driven solutions. I am particularly interested in bridging Software Engineering, QA, and Machine Learning to build robust, reliable, and intelligent systems.

Outside of technical work, I continue to solve algorithmic problems, explore new technologies, and engage with the developer community to continuously grow my skills.`,
location: "Dhaka, Bangladesh",

  
email: "shounadhikary725@gmail.com",
  phone: "+880 1612925710",
  website: "https://shounadhikary.dev",
  resumeUrl: "/resume.pdf",
  availability: "Available for Internships & Research Opportunities",
  social: {
    github: "https://github.com/shounadhikary",
    linkedin: "https://www.linkedin.com/in/shoun-adhikary/",
     twitter: "https://twitter.com/shounadhikary ", 
    leetcode: "https://leetcode.com/u/shoun725/",
    kaggle: "https://kaggle.com/",
    scholar: "https://scholar.google.com/",
    medium: "https://medium.com/@",
    researchgate: "https://researchgate.net/profile/",
  },
};

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Green University of Bangladesh",
    location: "Dhaka, Bangladesh",
    period: "2021 - 2025 ",
    cgpa: " 0.00 / 4.00",
    courses: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Operating Systems",
      "Database Systems",
      "Software Engineering",
      "Computer Architecture",
      "Numerical Methods",
    ],
    achievements: [
      "Strong internship progress",
      "IDP-2 course best project",
    ],
    logo: "🎓",
  },
];

export const skills = {
  programming: [
    { name: "Python", level: 60, icon: "" },
    { name: "C++", level: 80, icon: "" },
    { name: "Java", level: 60, icon: "" },
    { name: "C", level: 80, icon: "" },
    { name: "JavaScript", level: 65, icon: "" },
    { name: "TypeScript", level: 65, icon: "" },
  ],
  webDev: [
     {name: "HTML/CSS", level: 85, icon: "" },
    { name: "React", level: 60, icon: "" },
    { name: "Next.js", level: 65, icon: "" },
    { name: "Node.js", level: 65, icon: "" },
    { name: "REST APIs", level: 50, icon: "" },
  ],
  aiml: [
    { name: "Machine Learning", level: 60, icon: "" },
    { name: "Deep Learning", level: 65, icon: "" },
    { name: "Reinforcement Learning", level: 60, icon: "" },
   // { name: "Computer Vision", level: 80, icon: "" },
    { name: "NLP", level: 50, icon: "" },
    { name: "Data Science", level: 60, icon: "" },
  ],
  frameworks: [
    { name: "TensorFlow", level: 50, icon: "" },
    { name: "PyTorch", level: 70, icon: "" },
    { name: "scikit-learn", level: 50, icon: "" },
    { name: "Keras", level: 60, icon: "" },
    { name: "OpenCV", level: 70, icon: "" },
   // { name: "Hugging Face", level: 75, icon: "" },
  ],
  tools: [
    { name: "Git & GitHub", level: 90, icon: "" },
    { name: "Docker", level: 60, icon: "" },
    { name: "Linux", level: 70, icon: "" },
    { name: "VS Code", level: 90, icon: "" },
    { name: "Andriod Studio", level: 70, icon: "" },
    { name: "Jupyter", level: 60, icon: "" },
    { name: "AWS", level: 65, icon: "" },
  ],
  databases: [
     { name: "MySQL", level: 80, icon: "" },
    { name: "PostgreSQL", level: 60, icon: "" },
    { name: "MongoDB", level: 60, icon: "" },
    { name: "Firebase", level: 80, icon: "" },
  ],
};

export const experience = [
  {
    title: "Software Quality Assurance Intern",
company: "QA Harbor Limited",
location: "Mohakhali-DOHS, Dhaka, Bangladesh",
period: "January 2025 - May 2025",
type: "Internship",
description:
  "Worked on software quality assurance processes, including manual testing, test case design, defect tracking, and quality validation of web applications. Collaborated with development teams to ensure product reliability and adherence to quality standards.",
responsibilities: [
  "Designed and executed test cases based on software requirements and user stories",
  "Performed functional, regression, and exploratory testing for web applications",
  "Identified, documented, and tracked software defects using bug tracking tools",
  "Collaborated with developers to reproduce, verify, and resolve reported issues",
  "Prepared test reports and maintained testing documentation",
  "Participated in Agile/Scrum meetings and software development lifecycle activities",



    ],
    technologies: ["Python", "Playwrite", "Postman"],
    icon: "💼",      //👨‍🏫🔬
    color: "#00D9FF",
  },
  
];

export const projects = [

{
  title: "StudyMind",
  description:
    "An AI-powered study companion that turns PDFs and notes into summaries, cited answers, quizzes, flashcards, and mind maps.",

  longDescription:
    "Built a full-stack AI study platform where students upload study materials and get AI-generated summaries, RAG-based cited answers, auto-graded quizzes, spaced-repetition flashcards, and interactive mind maps. Features a multi-provider AI architecture with automatic fallback between Gemini and Groq, and a from-scratch RAG pipeline (chunking, embeddings, pgvector retrieval with page-level citations) built without LangChain.",

  image: "/projects/studymind.jpg",
  gradient: "from-teal-500 to-cyan-600",

  technologies: [
    "Next.js 16",
    "TypeScript",
    "Clerk",
    "Supabase",
    "Prisma",
    "Google Gemini",
    "Groq",
  ],

  category: "Full-Stack / AI",

  github: "https://github.com/shounadhikary/StudyMind",
  demo: "https://study-mind-six.vercel.app",

  featured: true,

  stats: {
    stars: 1,
    forks: 0,
  },
},





{
  title: "ConverterHub",
  description:
    "A privacy-first file and text converter with 38 tools that run 100% in the browser - no uploads, no servers.",

  longDescription:
    "Developed a privacy-first conversion web app with 38 tools across 9 categories (image, PDF, data/text, encoders, generators, calculators, and Bangla utilities). All processing runs entirely in the browser using Canvas, Web Crypto, Web Audio, and WASM, so files never leave the user's device. Includes PWA offline support, dark/light theming, optional Clerk authentication, and SEO optimization. Conversion logic is decoupled from the UI, and heavy libraries are dynamically imported for performance.",

  image: "/projects/converterhub.jpg",
  gradient: "from-blue-500 to-indigo-600",

  technologies: [
    "Next.js 15",
    "TypeScript",
    "TailwindCSS",
    "Clerk",
  ],

  category: "Web",

  github: "https://github.com/shounadhikary/ConverterHub",
  demo: "https://converter-hub-roew.vercel.app",

  featured: true,

  stats: {
    stars: 1,
    forks: 0,
  },
},







{
  title: "Energy Consumption Forecasting Service",
  description:
    "An end-to-end ML system that forecasts short-term electricity demand using near real-time grid data.",

  longDescription:
    "Built an end-to-end machine learning system that forecasts short-term electricity demand. The pipeline fetches near real-time hourly demand from the U.S. EIA API, engineers time-series features (lag, rolling statistics, calendar features), and uses a trained XGBoost model that achieves ~1% mean absolute error - roughly 3x better than a Linear Regression baseline. Predictions are served through a FastAPI REST API and an interactive Streamlit dashboard, with pytest tests and a GitHub Actions CI pipeline covering the full ML lifecycle.",

  image: "/projects/energy-forecast.jpg",
  gradient: "from-amber-500 to-orange-600",

  technologies: [
    "Python",
    "XGBoost",
    "FastAPI",
    "Streamlit",
    "scikit-learn",
  ],

  category: "Machine Learning",

  github: "https://github.com/shounadhikary/energy-forecast-service",
   demo: "https://energy-forecast-service-htr6df338mxqybebldktky.streamlit.app/",

  featured: true,

  stats: {
    stars: 1,
    forks: 0,
  },
},









  {
  title: "FanVerse AI - Intelligent Fan Community Platform (Ongoing)",
  description:
    "AI-powered fan engagement platform that generates personalized content, predicts trending topics, and enables immersive character interactions using large language models. Achieved 3× engagement lift across 50K+ active users.",
  longDescription:
    "A full-stack AI platform built for fan communities that leverages large language models to power dynamic character interactions, auto-generate fandom content, and surface trending discussions in real time. The system uses a RAG pipeline to ground responses in fandom lore, ensuring accurate and immersive experiences at scale.",
  image: "/projects/fanverse-ai.jpg",
  gradient: "from-fuchsia-500 to-purple-600",
  technologies: ["Python", "React", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  category: "AI",
  github: "https://github.com//fanverse-ai",
  demo: "https://fanverse-ai-demo.vercel.app",
  featured: true,
  stats: { stars: 1, forks: 1 },
},
  
{
  title: "Mobile Banking App",
  description:
    "A mobile banking application that enables users to send money, pay bills, manage transactions, and securely access financial services through a user-friendly interface.",

  longDescription:
    "Developed a mobile banking application inspired by modern digital wallets such as bKash and Nagad. The app allows users to create accounts, transfer money, pay utility bills, view transaction history, and manage their profiles. The system focuses on security, usability, and seamless financial transactions through an intuitive mobile experience.",

  image: "/projects/mobile-banking.jpg",
  gradient: "from-green-500 to-emerald-600",

  technologies: [
    "Flutter",
    "Firebase",
    "Dart",
  ],

  category: "App",

  github: "https://github.com/yourusername/mobile-banking-app",
  demo: "",

  featured: true,

  stats: {
    stars: 1,
    forks: 1,
  },
}


];















export const research = [
  {
    title: "Deep Reinforcement Learning for Multi-Agent Systems",
    status: "Ongoing",
    area: "Reinforcement Learning",
    icon: "🎮",
    color: "#00D9FF",
    description:
      "Investigating emergent cooperative and competitive behaviors in multi-agent RL environments. Focusing on scalable communication protocols and credit assignment.",
    papers: 0,
    progress: 30,
  },
  
{
  title: "Privacy-First Client-Side Web Applications",
  status: "Completed",
  area: "Software Engineering",
  icon: "🔒",
  color: "#3B82F6",
  description:
    "Designed ConverterHub, a 38-tool converter platform running entirely in-browser to explore offline-capable, zero-server-cost architectures.",
  papers: 0,
  progress: 70,
},




{
  title: "Smart Edge Computing for Internet of Vehicles",
  status: "Ongoing",
  area: "Vehicular Networks",
  icon: "📡",
  color: "#F59E0B",
  description:
    "Implemented an intelligent edge computing architecture integrating UAV-assisted and parked vehicle-assisted computation offloading. Evaluated system performance under dynamic vehicular environments using deep reinforcement learning.",
  papers: 1,
  progress: 50,
},

{
  title: "Time-Series Forecasting for Energy Demand",
  status: "Completed",
  area: "Machine Learning",
  icon: "⚡",
  color: "#10B981",
  description:
    "Built an end-to-end XGBoost forecasting service on PJME historical data with FastAPI, Streamlit dashboard, and CI/CD on GitHub Actions.",
  papers: 0,
  progress: 60,
},













];

export const publications = [
  {
title: "Task Offloading in Vehicular Edge Computing Incorporating UAVs Using Machine Learning Techniques",
authors: "Shoun Adhikary, Supervisor Name: Mr. Jargis Ahmed, Lecturer, University of Dhaka",
venue: "Undergraduate Thesis, Green University of Bangladesh",
year: 2025,
type: "Bachelor's Thesis",
status: "Ongoing",
abstract:
"Vehicular Edge Computing (VEC) offers a promising paradigm for reducing the computational burden on vehicles by enabling task offloading to nearby edge servers. However, in dense urban environments, traditional Mobile Edge Computing (MEC) infrastructures often face congestion due to limited resources and increasing service demands. To improve offloading flexibility, scalability, and service availability, this research integrates Unmanned Aerial Vehicles (UAVs) and Parked Vehicles (PVs) as supplementary edge computing nodes. The task offloading problem is formulated as a delay-energy optimization problem under realistic constraints, including computational capacity, bandwidth availability, energy consumption, and task deadlines. To address the highly dynamic and stochastic nature of vehicular networks, a reinforcement learning-based framework using Proximal Policy Optimization (PPO) is developed, enabling vehicles to learn optimal offloading decisions autonomously. Experimental evaluations demonstrate improvements in task completion rate, latency reduction, energy efficiency, and overall resource utilization compared to conventional offloading strategies.",
doi: null,
link: null,
tags: [
"Task Offloading",
"Vehicular Edge Computing",
"Edge Computing",
"Internet of Vehicles (IoV)",
"Unmanned Aerial Vehicles (UAV)",
"Parked Vehicles",
"Proximal Policy Optimization (PPO)",
"Reinforcement Learning",
"Resource Allocation",
"Latency Optimization",
"Energy Efficiency",
"Mobile Edge Computing",
"Intelligent Transportation Systems",
"Wireless Networks",
"Machine Learning"
]
},

];

export const certifications = [

  {
    name: "Introduction to Data Analytics",
    issuer: "Coursera / IBM",
    instructor: "IBM",
    date: "May 2026",
    credentialId: "AJ1JYQ12YU15",
    link: "https://coursera.org/verify/AJ1JYQ12YU15",
    icon: "📊",
    color: "#3B82F6",
  },

  {
    name: "SQL Database Applications and Development",
    issuer: "Coursera / EDUCBA",
    instructor: "EDUCBA",
    date: "May 2026",
    credentialId: "UVV2M88A1K3C",
    link: "https://coursera.org/verify/UVV2M88A1K3C",
    icon: "🗄️",
    color: "#F97316",
  },

  {
    name: "Introduction to HTML, CSS, & JavaScript",
    issuer: "Coursera / IBM",
    instructor: "IBM",
    date: "May 2026",
    credentialId: "RXEUSRRM8G4Y",
    link: "https://coursera.org/verify/RXEUSRRM8G4Y",
    icon: "💻",
    color: "#06B6D4",
  },

  {
    name: "Programming Foundations with JavaScript, HTML and CSS",
    issuer: "Coursera / Duke University",
    instructor: "Duke University",
    date: "Jun 2026",
    credentialId: "EM3I5NSG7WCB",
    link: "https://coursera.org/verify/EM3I5NSG7WCB",
    icon: "🎓",
    color: "#1D4ED8",
  },

  {
    name: "Industrial Internship - Software Testing & Quality Assurance",
    issuer: "QA Harbor Limited",
    instructor: "QA Harbor Team",
    date: "May 2025",
    credentialId: "QA-HARBOR-2025",
    link: "#",
    icon: "🧪",
    color: "#10B981",
  },

  {
    name: "Software Engineer",
    issuer: "HackerRank",
    instructor: "HackerRank",
    date: "Jun 2026",
    credentialId: "671662C69ECA",
    link: "https://www.hackerrank.com/certificates/671662C69ECA",
    icon: "💻",
    color: "#22C55E",
  },

 {
  name: "Foundations of AI and Machine Learning",
  issuer: "Coursera / Microsoft",
  instructor: "Microsoft",
  date: "May 2026",
  credentialId: "FEBHNT2ZCGS",
  link: "https://coursera.org/verify/FEBHNT2ZCGS",
  icon: "🤖",
  color: "#2563EB",
}
];

export const achievements = [
  {
    title: "Best Project : IDP-2 Course",
    organization: "University",
    date: "2025",
    description:
      "Recognized for the best project in the Inter-Disciplinary Project (IDP-2) course, awarded for outstanding design, implementation, and presentation.",
    icon: "",
    color: "#F59E0B",
    type: "Award",
  },

{
    title: "Strong Internship Progress : SQA",
    organization: "QA Harbor Limited",
    date: "2025",
    description:
      "Making strong progress in a Software Quality Assurance internship - gaining hands-on experience in software testing, quality assurance processes, and identifying and reporting defects to ensure reliable software.",
    icon: "",
    color: "#3B82F6",
    type: "Internship",
  },
{
    title: "Built & Deployed 3 Full-Stack / ML Projects",
    organization: "",
    date: "2026",
    description:
      "Designed, built, and deployed three end-to-end projects: an AI study platform (StudyMind), a privacy-first browser converter (ConverterHub), and a machine-learning energy forecasting service - spanning full-stack web, AI, and MLOps.",
    icon: "",
    color: "#14B8A6",
    type: "Project",
  },















];

export const blogs =  [
  {
    title: "Understanding Proximal Policy Optimization (PPO) from Scratch",
    excerpt:
      "A deep dive into PPO - one of the most popular RL algorithms - with math intuition, code walkthrough, and practical tips.",
    date: "Nov 2024",
    readTime: "12 min read",
    tags: ["Reinforcement Learning", "PPO", "Deep Learning"],
    image: "/blog/ppo.jpg",
    gradient: "from-cyan-600 to-blue-700",
    link: "",
    views: "1.0",
  },

];

export const githubStats = {
  username: "shounadhikary",
  totalRepos: 1,
  totalStars: 1,
  totalForks: 1,
  totalCommits: 1,
  contributions2024: 1,
  languages: [
    { name: "Python", percentage: 1, color: "#3572A5" },
    { name: "TypeScript", percentage: 1, color: "#2b7489" },
    { name: "C++", percentage: 1, color: "#f34b7d" },
    { name: "JavaScript", percentage: 1, color: "#f1e05a" },
    { name: "Other", percentage: 1, color: "#6e40c9" },
  ],
};

export const leetcodeStats =
 {
  username: "shoun725",
  totalSolved: 64,
  easySolved: 1,
  mediumSolved: 1,
  hardSolved: 1,
  totalEasy: 2,
  totalMedium: 4,
  totalHard: 6,
  ranking: 500000,
  contestRating: 1,
  maxRating: 1,
  streak: 1,
  // Submission calendar fallback values (shown until/if the live LeetCode fetch resolves).
  submissionsLastYear: 99,
  activeDays: 15,
  maxStreak: 4,
  badges: ["50 Days Badge", "100 Days Badge", "Knight"],
};





export const timeline = [
  {
    year: "2019",
    title: "First Line of Code",
    description: "Discovered programming - wrote my first C program.",
    icon: "💻",
    color: "#6B7280",
  },
{
  year: "2020",
  title: "Programming Journey",
  description: "Developed a strong interest in problem solving and gradually improving algorithmic thinking.",
  icon: "⚡",
  color: "#10B981",
},
  {
    year: "2021",
    title: "University Started",
    description: "Joined GUB CSE.",
    icon: "🎓",
    color: "#00D9FF",
  },
{
  year: "2022",
  title: "ML Interest Sparked",
  description: "Became interested in Machine Learning and started exploring its fundamental concepts and applications.",
  icon: "🤖",
  color: "#7C3AED",
},
{
  year: "2024",
  title: "Research & Thesis Journey",
  description: "Began research activities and started working on thesis direction in Machine Learning.",
  icon: "🔬",
  color: "#F59E0B",
},
 {
  year: "2025",
  title: "Industry Experience",
  description: "Completed an SQA internship and gained practical experience in software testing, quality assurance, defect reporting, and Agile workflows.",
  icon: "🏆",
  color: "#EF4444",
},
  {
    year: "2025",
    title: "Graduation & Next Chapter",
    description: "Completing BSc thesis and developed a strong interest in pursuing an MSc degree abroad.",
    icon: "🚀",
    color: "#00D9FF",
  },
];
