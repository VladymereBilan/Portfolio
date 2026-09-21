export const myProjects = [
  {
    id: 6,
    title: "NEU PASS (Capstone)",
    description:
      "A mobile-based visitor management system built with Expo and React Native for New Era University, replacing manual visitor logbooks with QR-code passes.",
    subDescription: [
      "Built cross-platform with Expo Router and React Native, backed by Supabase for auth, database, and realtime data.",
      "Generates QR-code visitor passes and scans them on-device using the camera and on-device text extraction for ID verification.",
      "Designed the visitor check-in/check-out flow end-to-end as our group's capstone project.",
    ],
    href: "https://github.com/VladymereBilan/NEU-PASS-2",
    liveLinks: [
      { label: "Admin Login", href: "https://neu-pass.com" },
      { label: "Visitor Registration", href: "https://neu-pass.com/visit" },
    ],
    image: "/assets/projects/neu-pass pic.jpg",
    tags: [
      {
        id: 1,
        name: "React Native",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Expo",
        path: "/assets/logos/expo.svg",
      },
      {
        id: 3,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
    ],
  },
  {
    id: 1,
    title: "Expense Tracker App",
    description:
      "A full-stack Expense Tracker built with the MERN stack to track income and expenses, categorize transactions, and visualize spending habits.",
    subDescription: [
      "Implemented a RESTful API using Node.js and Express for CRUD operations on transactions.",
      "Used MongoDB for persistent storage and aggregation of expenses by category and date.",
      "Built a responsive React frontend with interactive charts, filters, and transaction management.",
      "Added authentication with JWT and deployed the app for production use.",
    ],
    href: "https://github.com/VladymereBilan/Expense-Tracker-Project",
    liveLinks: [
      { label: "Live Demo", href: "https://expense-tracker-liard-pi.vercel.app" },
    ],
    image: "/assets/projects/Expense Tracker.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Utilities — Python Tools",
    description:
      "A collection of utility tools written in Python: a Fake Data Generator, a lightweight URL shortener service, and an SMS sender using Twilio.",
    subDescription: [
      "Built a Fake Data Generator using the Faker library to produce realistic test datasets for development and QA.",
      "Implemented a URL Shortener service with Flask (or FastAPI) that creates short aliases and redirects, with analytics for click counts.",
      "Integrated Twilio's REST API to send transactional SMS messages and OTPs from the application.",
      "Persisted data with SQLite for easy local deployment; included Dockerfile for containerized runs and example scripts for automation.",
    ],
    href: "https://github.com/VladymereBilan/Utilities-Project",
    image: "/assets/projects/Utilities Python Project.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 3,
        name: "GitHub",
        path: "/assets/socials/github.svg",
      },
      {
        id: 4,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Aswang Slayer (Java Swing)",
    description:
      "A collaborative group game project built with Java and Swing, featuring sprite animations created in Aseprite and classic 2D gameplay.",
    subDescription: [
      "Implemented core game logic, input handling, and rendering using Java Swing and custom game loops.",
      "Created character and environment sprite sheets with Aseprite and integrated them into the renderer for smooth animations.",
      "Added collision detection, enemy AI, level progression, and scoring mechanics for engaging gameplay.",
      "Packaged the game with build scripts and documented development steps for team collaboration and release.",
    ],
    href: "https://github.com/VladymereBilan/Aswang-Slayer",
    image: "/assets/projects/Aswang.jpg",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.svg",
      },
      {
        id: 2,
        name: "Swing",
        path: "/assets/logos/java.svg",
      },
      {
        id: 3,
        name: "Aseprite",
        path: "/assets/logos/aseprite.svg",
      },
      {
        id: 4,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/VladymereBilan",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/vladymere-bilan-3b7ab0325/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Telegram",
    href: "https://t.me/vladymere",
    icon: "/assets/socials/telegram.svg",
  },
];

export const experiences = [
  {
    title: "BPO Employee",
    job: "Alorica — Verizon Account",
    date: "2022-2023",
    contents: [
      "Served as a BPO representative for the Verizon account at Alorica for 1 year and 4 months.",
      "Provided phone-based customer support, troubleshooting, and issue resolution using CRM tools.",
      "Achieved Top 1 agent for 3 consecutive months by maintaining outstanding performance and customer satisfaction.",
      "Maintained 100% REPSAT consistency through adherence to quality guidelines and excellent service delivery.",
    ],
  },
  {
    title: "Freelancer",
    job: "Self-Employed",
    date: "2023-2024",
    contents: [
      "Provided freelance web development services, specializing in static websites for students' school projects.",
      "Built responsive, accessible static sites using semantic HTML, modern CSS (including Tailwind when requested), and vanilla JavaScript.",
      "Guided clients through hosting and deployment workflows (GitHub Pages, Netlify) and provided simple documentation for maintenance.",
      "Managed project timelines, communicated requirements, and delivered reusable templates and starter kits to help students complete assignments.",
    ],
  },
  {
    title: "Full-time Student",
    job: "Self-Study — Web Development & Cybersecurity",
    date: "2025-Present",
    contents: [
      "Pursuing full-time study in web development with a focus on React, JavaScript, HTML, CSS, and modern toolchains (Vite, Tailwind).",
      "Diversifying into cybersecurity by learning networking fundamentals, operating systems, web security, and the OWASP Top 10.",
      "Completing hands-on projects and labs including secure coding exercises, CTF challenges, and building portfolio applications to apply concepts.",
      "Following structured learning paths and preparing for entry-level security certifications while continuing to expand practical web development skills.",
    ],
  },
];
