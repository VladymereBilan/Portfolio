export const myProjects = [
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
    href: "",
    logo: "",
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
        path: "/assets/logos/NodeJS.png",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/MongoDB.png",
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
    href: "",
    logo: "",
    image: "/assets/projects/Utilities Python Project.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/Python.jpg",
      },
      {
        id: 2,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 3,
        name: "GitHub",
        path: "/assets/logos/github.svg",
      },
      {
        id: 4,
        name: "Docker",
        path: "/assets/logos/visualstudiocode.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Movie Hub (React Native)",
    description:
      "A mobile application built with React Native and Expo that lets users discover movies, view details, and manage favorites using TMDB API.",
    subDescription: [
      "Built the UI with React Native and Expo for cross-platform iOS/Android support.",
      "Integrated The Movie Database (TMDB) API for movie listings, search, and detailed metadata.",
      "Added local favorites and watchlist using AsyncStorage and offline caching for improved UX.",
      "Implemented navigation with React Navigation and state management using Context/Redux; included trailer playback and sharing features.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/MovieHub.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "GitHub",
        path: "/assets/logos/github.svg",
      },
      {
        id: 4,
        name: "Git",
        path: "/assets/logos/git.svg",
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
    href: "",
    logo: "",
    image: "/assets/projects/Aswang.jpg",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/visualstudiocode.svg",
      },
      {
        id: 2,
        name: "Swing",
        path: "/assets/logos/visualstudiocode.svg",
      },
      {
        id: 3,
        name: "Aseprite",
        path: "/assets/logos/visualstudiocode.svg",
      },
      {
        id: 4,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Fitness Tracker API",
    description:
      "A RESTful Fitness Tracker API built with Node.js and Express and deployed to Vercel.",
    subDescription: [
      "Designed REST endpoints for workouts, exercises, and user profiles (CRUD operations).",
      "Implemented authentication with JWT, input validation, and structured error handling.",
      "Persisted data using a lightweight database and added request logging and rate limiting for reliability.",
      "Deployed serverless API routes to Vercel with automatic deployments from the Git repository.",
    ],
    href: "https://fitness-tracker-api-rosy.vercel.app/",
    logo: "",
    image: "/assets/projects/FitnessTrackerAPI.jpg",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/NodeJS.png",
      },
      {
        id: 2,
        name: "Express",
        path: "/assets/logos/express.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "Vercel",
        path: "/assets/logos/vercel.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
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
    href: "t.me/vladymere",
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
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
