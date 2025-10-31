// Centralized strings configuration
export const strings = {
  // Navigation
  nav: {
    logo: "UpLive",
    links: [
      { id: "company", label: "Company", href: "#company" },
      { id: "publishing", label: "Publishing", href: "#publishing" },
      { id: "careers", label: "Careers", to: "/careers" },
      { id: "news", label: "News", href: "#news" },
    ],
  },

  // Hero Section
  hero: {
    title: "Entertain the world",
    subtitle: "with iconic apps and games",
  },

  // Products/Games
  products: {
    game1: {
      title: "Mob Control",
      description: "The always fresh, oddly satisfying strategy game where anyone can feel skilled and powerful.",
    },
    game2: {
      title: "Block Jam",
      description:
        "An endlessly engaging puzzle that's easy to pick up but hard to put down. Sharpen your mind with each block you place.",
    },
    game3: {
      title: "Paper.io",
      description:
        "A classic and timeless board game. Immerse yourself in a world of strategy where your mind is your strongest asset.",
    },
    app1: {
      title: "BeReal",
      description:
        "Your daily dose of real life. Create meaningful connections by sharing authentic moments with your close ones.",
    },
    app2: {
      title: "Wizz",
      description: "Connecting the new generation. Enter a safe space of self-expression and authentic interactions.",
    },
    app3: {
      title: "Blitz",
      description:
        "Level up your gaming skills. Track your performance and become the player you've always wanted to be.",
    },
  },

  // Social Media
  social: {
    linkedin: "LinkedIn",
    instagram: "Instagram",
    twitter: "Twitter/X",
  },

  // About Section
  about: {
    title: "About",
    kpi1: { value: "8B", label: "Downloads" },
    kpi2: { value: "150M", label: "Monthly Active Users" },
    kpi3: { value: "$670M", label: "Revenue" },
    kpi4: { value: "800", label: "Employees" },
  },

  // Careers Section
  careers: {
    title: "Join us today",
    description:
      "We work with creative minds, content creators and technical innovators willing to entertain and empower the world.",
    cta: "See jobs",
  },

  // Careers Page
  careersPage: {
    hero: {
      title: "Entertain the world with us",
      cta: "See jobs",
    },
    teams: {
      title: "Our teams",
      description: "We're committed to driving innovation and excellence throughout the mobile industry, setting new standards and pushing boundaries together.",
      Product: { title: "Product" },
      Creative: { title: "Creative" },
      Growth: { title: "Growth" },
      Hybrid: { title: "Hybrid" },
      Publishing: { title: "Publishing" },
      Tech: { title: "Tech" },
      Operations: { title: "Operations" },
    },
    working: {
      title: "Working at UpLive",
      description: "Fast-paced teams always win by learning quickly, adapting to changes, and reaching their goals ahead of the competition.",
    },
    hiring: {
      title: "Hiring process",
      description: "Our hiring process is fast, honest, and straightforward, with the goal of completing it within 30 days to ensure a swift experience.",
      step1: {
        title: "Get to know us",
        description: "Speak with recruiter or hiring manager to understand your potential role. We'll explore your skills and personal background.",
      },
      step2: {
        title: "Case study",
        description: "Case studies and skill tests are essential in all our processes. We'll evaluate them carefully, and give you constructive feedback.",
      },
      step3: {
        title: "Technical Interview",
        description: "Look forward to engaging discussions on your case study with the hiring team. We'll also explore your background and motivations.",
      },
      step4: {
        title: "Culture fit",
        description: "Meet our senior leadership for the ultimate approval. This is where we assess your alignment with our culture and expertise in depth.",
      },
    },
    jobs: {
      title: "Explore jobs",
      description: "We're looking for talented individuals from across the globe to come and entertain the world with us.",
    },
  },

  // Footer
  footer: {
    tagline: "Entertain the world",
    copyright: "© 2025 UpLive",
    services: {
      title: "Services",
      publishing: "Publishing",
      academy: "Academy",
      ads: "Ads",
    },
    aboutUs: {
      title: "About us",
      company: "Company",
      careers: "Careers",
      news: "News",
      press: "Press",
    },
    legal: {
      title: "Legal",
      terms: "Terms of service",
      privacy: "Privacy",
      legal: "Legal",
      cookiePolicy: "Cookie Policy",
      cookieSettings: "Cookie Settings",
    },
    social: {
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      twitter: "https://twitter.com",
    },
  },
} as const;
