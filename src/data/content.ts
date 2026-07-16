export const profile = {
  name: "Deyken Pulido",
  fullName: "Deyken Adolfo Pulido Peters",
  roles: [
    "Full-Stack Web Developer",
    "Software Engineering Student",
    "React & Django Builder",
  ],
  location: "Managua, Nicaragua",
  languages: ["Spanish (native)", "English"],
  bio: "I'm a Software Engineering student building modern web applications that solve real business problems. I work across the stack — React and Next.js on the front end, Django and PostgreSQL on the back — and I'm expanding into AI-assisted development and business automation. My goal is software that creates measurable value for the people who use it.",
  email: "deykenpro@gmail.com",
  github: "https://github.com/DeykenP",
  linkedin: "https://www.linkedin.com/in/deyken-pulido-3ba214325",
  resumeUrl: "[PLACEHOLDER: Resume PDF link]",
};

export const quickFacts = [
  { label: "Location", value: "Managua, Nicaragua" },
  { label: "Focus", value: "Full-Stack Web Development" },
  { label: "Languages", value: "Spanish, English" },
  { label: "Studying", value: "Software Engineering, UNI" },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend",
    skills: ["Django", "Django REST Framework", "Python", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "Supabase"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Docker", "Trello", "Slack", "Google Workspace", "Microsoft Office"],
  },
  {
    category: "AI & Automation",
    skills: ["Claude", "ChatGPT", "AI-Assisted Development", "Prompt Engineering"],
  },
];

export type Project = {
  name: string;
  description: string;
  problem: string;
  solution: string;
  result: string[];
  tech: string[];
  /** A repo URL, "PRIVATE" for closed-source commercial code, or a "[PLACEHOLDER...]" string. */
  github: string;
  demo: string | null;
  featured: boolean;
};

export const projects: Project[] = [
  {
    name: "Atlas POS",
    description: "A multi-tenant point-of-sale SaaS built for small businesses across Latin America — cafés, auto parts shops, and retail.",
    problem: "Small LATAM businesses need a point-of-sale system that handles multi-ticket orders, per-location inventory, and daily cash reconciliation, but most affordable tools don't support local currencies or multi-branch operations without data leaking across locations.",
    solution: "Built a full-stack multi-tenant POS with NestJS, Prisma, and PostgreSQL on the backend and Next.js 16 with Server Components on the frontend, isolating tenants at the row level and scoping every ticket, order, and report to its location.",
    result: [
      "Multi-ticket checkout with live cart editing, split payments, and real-time USD equivalent display for local-currency sales",
      "Configurable support for 16+ LATAM currencies with live exchange-rate conversion per tenant",
      "Auditable stock-movement ledger — SKU/barcode tracking, supplier and cost data, reorder points, and a full trail of purchases, corrections, returns, and waste",
      "Dual-format printing (80mm thermal ticket or letter-size invoice) with reprint support from order history",
      "Daily cash reconciliation (\"Corte de Caja\") with payment-method breakdown per location",
      "Found and fixed a cross-branch data leakage bug where switching locations didn't properly scope open tickets",
      "Prioritized features like currency support and invoice formats from real conversations with prospective small-business clients",
    ],
    tech: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "Tailwind CSS", "JWT Auth"],
    github: "PRIVATE",
    demo: null,
    featured: true,
  },
  {
    name: "Atlas Auth",
    description: "A production-grade authentication and authorization microservice built as the identity layer for a SaaS product.",
    problem: "SaaS products need an identity layer that goes beyond tutorial-level auth — secure token handling, session control, and auditability are required before any other service can be trusted to sit behind it.",
    solution: "Built a standalone auth microservice with NestJS, Prisma, PostgreSQL, and Redis, implementing JWT access tokens with rotating, replay-detected refresh tokens, role- and permission-based authorization, and an event-driven audit trail — backed by a CI pipeline that builds and verifies the Docker image on every push.",
    result: [
      "Session and device management with instant revocation",
      "Email verification and password reset flows",
      "Argon2id password hashing and Redis-backed rate limiting",
      "53 automated tests (unit + integration) run against real infrastructure",
      "GitHub Actions CI pipeline builds and verifies the Docker image on every push",
    ],
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Docker"],
    github: "https://github.com/DeykenP/atlas-auth",
    demo: null,
    featured: false,
  },
  {
    name: "Momoto Café",
    description: "An editorial-grade marketing site for a three-location café brand in Managua, Nicaragua.",
    problem: "The client wanted a landing page with the editorial sophistication of a luxury resort brand while staying true to Momoto's own identity — a bar most café marketing sites don't clear.",
    solution: "Built a fully custom single-page site in Next.js 16 with React 19, Tailwind CSS v4, and Framer Motion 12, reverse-engineering the reference brand's color tokens, easing curves, and reveal timing, then reapplying them with Momoto's own palette extracted from its café photography via Python/Pillow color quantization.",
    result: [
      "Character-by-character blur-in text reveal with a 30ms stagger, driven by a single IntersectionObserver per title",
      "Section-level stagger (0/150/300/450ms) with a custom exponential ease, using mount-triggered hero animations and whileInView for scroll sections",
      "Full-bleed video backgrounds (two AI-generated MP4s) with static poster fallback for instant loading",
      "Typed site-data layer decoupling menu, location, and testimonial content from the UI",
      "Fully respects prefers-reduced-motion",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "PRIVATE",
    demo: "https://momoto-cafe.vercel.app",
    featured: false,
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Technical Support Representative",
    org: "Concentrix (McAfee Campaign)",
    period: "December 2025 – Present",
    points: [
      "Provide technical support via phone, chat, and email",
      "Troubleshoot software and subscription issues",
      "Maintain high CSAT, QA, and performance metrics",
      "Recognized for strong customer retention and chat performance",
    ],
  },
  {
    role: "Customer Service Representative",
    org: "IBEX Global",
    period: "2025",
    points: [
      "Supported U.S.-based customers",
      "Resolved technical and account-related issues",
      "Followed SOPs and security procedures",
      "Maintained excellent QA and customer satisfaction metrics",
    ],
  },
  {
    role: "Accounting Assistant",
    org: "Progressive Overseas Investments S.A.",
    period: "2023 – 2025",
    points: [
      "Managed invoices and financial records",
      "Worked extensively with Excel",
      "Supported administrative operations",
      "Improved internal workflows",
    ],
  },
  {
    role: "Online Store Manager",
    org: "Self-employed",
    period: "2022 – 2026",
    points: [
      "Managed an online jewelry business",
      "Handled customer support and logistics",
      "Created digital marketing campaigns",
      "Increased sales through e-commerce operations",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor's Degree in Software Engineering (In Progress)",
    school: "Universidad Nacional de Ingeniería (UNI)",
    period: "2024 – Present",
  },
  {
    degree: "Technical High School Diploma in Business Administration",
    school: "Centro Tecnológico Manuel Olivares Rodríguez",
    period: "2021 – 2023",
  },
];
