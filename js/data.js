const portfolioData = {
  name: "Isaac Soares",
  title: "Full Stack Developer",
  age: 19,
  location: "Brazil 🇧🇷",
  university: "CEUB (Comp. Science)",

  contact: [
    { label: "Email", icon: "📧", href: "mailto:isaacfariasoares@gmail.com" },
    { label: "LinkedIn", icon: "💼", href: "https://www.linkedin.com/in/isaac-faria-soares/?trk=public-profile-join-page" },
    { label: "GitHub", icon: "📂", href: "https://github.com/Isaac-Soares" },
    { label: "YouTube", icon: "🎥", href: "https://youtube.com/@s1fhs?si=G-rhwa64WC622evd" }
  ],

  bio: "Hello! I am a Computer Science student at CEUB, deeply passionate about software engineering and technology. My goal is to become a high-performance Full Stack Developer. I thrive on solving complex logical problems and building applications from the ground up, ensuring both efficient back-end architecture and intuitive front-end user experiences.",

  skills: {
    languages: ["HTML5", "CSS3", "JavaScript", "Python", "Java"],
    tools: ["Git", "GitHub", "VS Code", "Netlify"],
    soft: [
      "Advanced Video Editing & Content Creation (YouTube)",
      "Agile Learning & Strong Problem-Solving Logic",
      "Time Management & Project Organization",
      "Languages: Native Portuguese, Advanced English & Spanish"
    ]
  },

  certifications: [
    {
      name: "GIT AND GITHUB: SHARING AND COLLABORATING ON PROJECTS",
      issuer: "Alura",
      date: "19 May 2026",
      duration: "8h",
      link: "https://drive.google.com/file/d/1qnD877UOMZAoENQkpGMUIpXYHluP8IGw/view?usp=drive_link"
    },
    {
      name: "PROGRAMMING LOGIC: DIVE INTO PROGRAMMING WITH JAVASCRIPT",
      issuer: "Alura",
      date: "1 May 2026",
      duration: "6h",
      link: "https://drive.google.com/file/d/1Ux6YbhWGWN84B2i7JXomy5FRw7XLC-v-/view?usp=drive_link"
    },
    {
      name: "COMPUTATIONAL THINKING: FUNDAMENTALS OF COMPUTING AND PROGRAMMING LOGIC",
      issuer: "Alura",
      date: "17 May 2026",
      duration: "8h",
      link: "https://drive.google.com/file/d/1UsdBtLmRbAxWbrCDFE6jCk6bOvUw5IQJ/view?usp=drive_link"
    },
    {
      name: "PYTHON FOR DATA: GETTING STARTED",
      issuer: "Alura",
      date: "3 May 2026",
      duration: "10h",
      link: "https://drive.google.com/file/d/1XZ1efcQaYZ-9TYNNOgvIjee7A-rPamKX/view?usp=drive_link"
    },
    {
      name: "PYTHON: APPLYING OBJECT ORIENTATION",
      issuer: "Alura",
      date: "8 May 2026",
      duration: "6h",
      link: "https://drive.google.com/file/d/1LE8KF67YNXRUCKHYpjrCiKkD40TL9Boj/view?usp=drive_link"
    },
    {
      name: "PYTHON: ADVANCING OBJECT ORIENTATION AND CONSUMING API",
      issuer: "Alura",
      date: "16 May 2026",
      duration: "8h",
      link: "https://drive.google.com/file/d/1fEABwUEX0ft50iDnJq4VZ_B_JpaRTToi/view?usp=drive_link"
    },
    {
      name: "PYTHON: CREATING YOUR FIRST APPLICATION",
      issuer: "Alura",
      date: "8 May 2026",
      duration: "8h",
      link: "https://drive.google.com/file/d/1DO9xGlJf2ZlidAPUrwjoct6hu4zl9OBR/view?usp=drive_link"
    },
    {
      name: "Object-Oriented Java Training (In Progress)",
      issuer: "Alura",
      date: "Started: Jan 2024",
      duration: "—",
      link: null,
      inProgress: true
    }
  ],

  projects: [
    {
      id: "chateau-noir",
      name: "Château Noir",
      emoji: "🍽️",
      type: "Front-end",
      tagColor: "#4af626",
      subtitle: "High-Performance Front-end Web Application",
      stack: [
        { label: "HTML5", color: "#e34c26" },
        { label: "CSS3", color: "#264de4" },
        { label: "JavaScript", color: "#f0db4f" },
        { label: "Bootstrap 5", color: "#7952b3" }
      ],
      about: "An institutional website developed with a focus on responsiveness, Bootstrap components, and JavaScript interactions, representing a fictional French restaurant named Château Noir.",
      features: [
        "<strong>Dynamic Menu:</strong> Interactive system with a shopping cart integrated using JavaScript.",
        "<strong>Augmented Reality Modal:</strong> Interactive QR Code display for extra features and mobile engagement."
      ],
      challenge: "One of the main challenges in this project was managing the dynamic shopping cart state across different sections of the menu without a framework. I solved this by implementing a centralized JavaScript state logic and optimizing DOM manipulation, ensuring the UI updated instantly and smoothly for the user.",
      github: "https://github.com/Isaac-Soares/chateau-Noir",
      demo: "https://693303de9520bf00c3f5631f--golden-kitten-1d99c8.netlify.app"
    },
    {
      id: "automation-scripts",
      name: "Automation_Scripts",
      emoji: "🐍",
      type: "Python",
      tagColor: "#3776AB",
      subtitle: "Coming Soon",
      stack: [
        { label: "Python", color: "#3776AB" }
      ],
      about: "Coming soon.",
      features: [],
      challenge: "",
      github: null,
      demo: null
    }
  ]
};