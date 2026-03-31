export const services = [
  {
    code: "WD",
    title: "Website Development",
    description:
      "High-converting business websites, landing pages and portals engineered for speed, trust and lead generation.",
    tags: ["Website", "Performance", "SEO"],
  },
  {
    code: "AI",
    title: "AI Integrated Websites",
    description:
      "Web experiences with AI chat, smart search, automation and personalized journeys that turn visitors into qualified prospects.",
    tags: ["OpenAI", "Automation", "Journeys"],
  },
  {
    code: "AP",
    title: "App Development",
    description:
      "Modern Android and iOS apps with scalable architecture, smooth UX and reliable integrations for real business workflows.",
    tags: ["Apps", "UX", "Scale"],
  },
  {
    code: "CRM",
    title: "CRM Management",
    description:
      "Custom CRM pipelines, lead-routing logic and follow-up automation that keep sales teams organized and responsive.",
    tags: ["CRM", "Automation", "Ops"],
  },
  {
    code: "SEO",
    title: "SEO Optimization",
    description:
      "Technical SEO, on-page content structure and performance improvements designed to grow rankings and inbound traffic.",
    tags: ["Analytics", "CWV", "Search"],
  },
  {
    code: "ML",
    title: "AI Solutions and ML",
    description:
      "AI assistants, predictive workflows and machine learning solutions that reduce manual effort and uncover better decisions.",
    tags: ["Models", "Assistants", "Data"],
  },
  {
    code: "SE",
    title: "Custom Software Engineering",
    description:
      "Tailored dashboards, internal tools and process-driven software that simplify operations and support long-term scale.",
    tags: ["MERN", "Python", "Enterprise"],
  },
  {
    code: "SM",
    title: "Social Media Handling",
    description:
      "Strategic content planning, creative publishing and audience engagement that build authority across the right channels.",
    tags: ["Content", "Growth", "Strategy"],
  },
];

export const projects = [
  {
    id: "01",
    group: "web",
    featured: true,
    icon: "crm",
    category: "Web Platform",
    title: "Enterprise CRM Platform",
    description:
      "A scalable CRM platform for managing leads, pipelines, team workflows, business reporting, and role-based operations from one central dashboard.",
    impact: "Lead and pipeline operations in one scalable command center",
    features: [
      "Lead and pipeline management",
      "Team activity tracking",
      "Analytics dashboard",
      "Role-based access",
      "Workflow automation",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/assets/projects/enterprise-crm-platform.svg",
    links: [
      { label: "View Reference", href: "https://www.zoho.com/crm/" },
      { label: "Build Similar System", href: "/contact", internal: true },
    ],
  },
  {
    id: "02",
    group: "web",
    featured: true,
    icon: "support",
    category: "Web Platform",
    title: "Customer Support & Ticketing Platform",
    description:
      "A customer support and ticketing platform with agent workflows, internal notes, status tracking, and reporting tools.",
    impact: "Support workflows streamlined for faster case handling",
    features: [
      "Ticket management",
      "Agent dashboard",
      "Status tracking",
      "Customer communication workflows",
      "Reports and analytics",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/assets/projects/customer-support-ticketing-platform.svg",
    links: [
      { label: "View Reference", href: "https://www.freshworks.com/freshdesk/" },
      { label: "Build Similar System", href: "/contact", internal: true },
    ],
  },
  {
    id: "03",
    group: "web",
    featured: true,
    icon: "testing",
    category: "Web Platform",
    title: "Real-Time Device Testing Platform",
    description:
      "A real-time testing system for validating app behavior across devices, browsers, and environments with team collaboration and monitoring.",
    impact: "Real-time testing workflows designed for engineering teams",
    features: [
      "Real-time session handling",
      "Cross-environment testing UI",
      "Performance-focused dashboard",
      "Team collaboration",
      "Usage monitoring",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets"],
    image: "/assets/projects/real-time-device-testing-platform.svg",
    links: [
      { label: "View Reference", href: "https://www.browserstack.com/" },
      { label: "Build Similar System", href: "/contact", internal: true },
    ],
  },
  {
    id: "04",
    group: "ai",
    featured: true,
    icon: "ai",
    category: "AI System",
    title: "AI Chat & Automation Platform",
    description:
      "An AI-powered communication platform with chatbot flows, automated replies, business workflow integration, and multi-channel messaging logic.",
    impact: "Automated multi-channel engagement with workflow integration",
    features: [
      "AI chatbot interface",
      "Automated replies",
      "Conversation management",
      "Messaging workflows",
      "CRM / automation integration",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Integrations"],
    image: "/assets/projects/ai-chat-automation-platform.svg",
    links: [
      { label: "View Reference", href: "https://www.gupshup.io/" },
      { label: "Build Similar System", href: "/contact", internal: true },
    ],
  },
  {
    id: "05",
    group: "mobile",
    featured: false,
    icon: "social",
    category: "Mobile App",
    title: "Checkin - Social App",
    description:
      "A social networking app with real-time features and location matching to help users connect nearby and discover social opportunities.",
    impact: "Social engagement flows built around proximity and real-time activity",
    features: [
      "Real-time interactions",
      "Location matching",
      "Push notifications",
      "Social discovery",
    ],
    tags: ["Flutter", "Firebase", "Real-time DB", "Location Services", "Push Notifications"],
    image: "/assets/projects/checkin-social-app.svg",
    links: [
      { label: "App Store", href: "https://apps.apple.com/au/app/checkin-meet-new-people/id6736611885" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.checkin.org" },
    ],
  },
  {
    id: "06",
    group: "mobile",
    featured: false,
    icon: "services",
    category: "Mobile App",
    title: "FixIt Hub - Services Platform",
    description:
      "A role-based services platform connecting service providers with customers through booking workflows, tracking, and multi-role management.",
    impact: "Marketplace operations organized through booking and service workflows",
    features: [
      "Role-based user system",
      "Service booking flow",
      "Real-time tracking",
      "Payment integration",
    ],
    tags: ["Flutter", "Node.js", "Role Management", "Booking System", "Payment Integration"],
    image: "/assets/projects/fixit-hub-services-platform.svg",
    links: [
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.fixit.org" },
      { label: "Book Similar App", href: "/contact", internal: true },
    ],
  },
  {
    id: "07",
    group: "mobile",
    featured: false,
    icon: "transport",
    category: "Mobile App",
    title: "Cas Cars - Ride Hailing",
    description:
      "A ride-hailing application with GPS tracking, fare logic, booking flows, and modern transport UX.",
    impact: "On-demand transport flows with route and fare intelligence",
    features: [
      "Ride booking",
      "GPS tracking",
      "Fare calculation",
      "Payment gateway",
    ],
    tags: ["Flutter", "Google Maps", "Real-time Tracking", "Payment Gateway", "GPS Navigation"],
    image: "/assets/projects/cas-cars-ride-hailing.svg",
    links: [
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.cascarstaxi" },
      { label: "Book Similar App", href: "/contact", internal: true },
    ],
  },
  {
    id: "08",
    group: "mobile",
    featured: false,
    icon: "taxi",
    category: "Mobile App",
    title: "Peter Pan Taxis",
    description:
      "A taxi booking application with ride scheduling, driver tracking, and integrated payment support.",
    impact: "Booking and rider operations simplified for everyday dispatch",
    features: [
      "Booking system",
      "Real-time tracking",
      "Payment integration",
      "Apple Pay / card support",
    ],
    tags: ["Flutter", "Real-time Tracking", "Booking System", "Payment Integration", "Apple Pay"],
    image: "/assets/projects/peter-pan-taxis.svg",
    links: [
      { label: "App Store", href: "https://apps.apple.com/gb/app/peter-pan-taxis/id1482382718" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.icabbi.peterpan.taxis" },
    ],
  },
];

export const portfolioFilters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Platforms" },
  { id: "ai", label: "AI Systems" },
  { id: "mobile", label: "Mobile Apps" },
];

export const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We align on business goals, audience, operational bottlenecks, and commercial priorities before defining the solution.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "We define workflows, system design, KPI targets, integration strategy, and the delivery roadmap.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Focused implementation cycles deliver websites, applications, integrations, and automation with executive visibility.",
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "We refine performance through analytics, testing, iteration, and operational improvements that compound over time.",
  },
];

export const technologies = [
  { label: "MERN Stack", icon: "mern" },
  { label: "React", icon: "react" },
  { label: "Next.js", icon: "next" },
  { label: "Flutter", icon: "flutter" },
  { label: "Python", icon: "python" },
  { label: "Django", icon: "django" },
  { label: "Node.js", icon: "node" },
  { label: "Express", icon: "express" },
  { label: "MongoDB", icon: "mongodb" },
  { label: "Firebase", icon: "firebase" },
  { label: "PostgreSQL", icon: "postgres" },
  { label: "Docker", icon: "docker" },
  { label: "AWS", icon: "aws" },
  { label: "Vercel", icon: "vercel" },
  { label: "Render", icon: "render" },
  { label: "GPT", icon: "gpt" },
  { label: "Claude AI", icon: "claude" },
  { label: "OpenAI", icon: "openai" },
  { label: "Antigravity", icon: "antigravity" },
  { label: "Automation", icon: "automation" },
  { label: "Tailwind CSS", icon: "tailwind" },
];

export const aboutPoints = [
  {
    code: "PF",
    title: "Performance-first systems",
    description:
      "Fast-loading interfaces, scalable architecture, and conversion-focused experience design.",
  },
  {
    code: "BS",
    title: "Business systems mindset",
    description:
      "We design the full operating chain: acquisition, CRM workflows, reporting, and growth operations.",
  },
  {
    code: "KP",
    title: "Measurable outcomes",
    description:
      "Everything is tied to commercial metrics like leads, conversions, retention, and efficiency.",
  },
  {
    code: "LT",
    title: "Long-term technology support",
    description:
      "We stay involved after launch so systems continue to improve as the business grows.",
  },
];

export const team = [
  {
    name: "Danish Nazeer",
    role: "Founder and CEO",
    image: "/assets/images/danish.jpeg",
    description:
      "Drives company vision, delivery quality, and long-range strategic growth.",
  },
  {
    name: "Abdullah Sultan",
    role: "CTO",
    image: "/assets/images/abdullah.jpeg",
    description:
      "Aligns technical direction with execution flow, internal systems, and client outcomes.",
  },
  {
    name: "Jamshaid Lakha",
    role: "CFO",
    image: "/assets/images/jamshaid.jpeg",
    description:
      "Ensures sustainable growth, disciplined planning, and strong financial control.",
  },
  {
    name: "Eshan Elahi",
    role: "Software Engineer",
    image: "/assets/images/eshan.jpeg",
    description:
      "Builds product systems, experiments quickly, and pushes future-ready development ideas.",
  },
];
