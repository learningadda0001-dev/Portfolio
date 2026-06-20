// All content below is sourced exactly from the original portfolio brief.
// Nothing here is invented — only presentation/animation is new.

export const profile = {
  name: "Chethan T V",
  role: "Software Developer",
  tagline:
    "4.3+ years building scalable web apps with PHP, CodeIgniter, Laravel, C# and ASP.NET Core",
  email: "chethantv325@gmail.com",
  phone: "+91 8431821075",
  phoneHref: "+918431821075",
  linkedin: "linkedin.com/in/chethan-t-v",
  linkedinHref: "https://linkedin.com/in/chethan-t-v",
  location: "Mysore, Karnataka, India",
  image: "/portfolio1.jpg",
};

export const about = `Results-driven Software Developer with 4.3 years of experience building scalable web applications using PHP, CodeIgniter, Laravel, C#, and ASP.NET Core. Skilled in RESTful APIs, third-party integrations (Payment Gateways, Trading APIs), database design & optimization (MySQL, PostgreSQL), and delivering clean, maintainable code.`;

export const stats = [
  { label: "Years Experience", value: 4.3, suffix: "+" },
  { label: "Production Projects", value: 5, suffix: "" },
  { label: "Core Technologies", value: 9, suffix: "+" },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "Code2",
    items: ["PHP", "C#", "SQL", "HTML", "CSS", "jQuery"],
  },
  {
    title: "Frameworks",
    icon: "Layers",
    items: ["CodeIgniter", "Laravel", "ASP.NET Core"],
  },
  {
    title: "Databases",
    icon: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & APIs",
    icon: "Wrench",
    items: ["Postman", "phpMyAdmin", "Visual Studio", "REST APIs"],
  },
];

export const experience = [
  {
    date: "March 2022 — Present",
    title: "Software Developer",
    company: "Infomaze Elite Private LTD",
    location: "Mysore, Karnataka",
    points: [
      "Developed and enhanced web application features including planning tools, quotation systems, and inventory modules.",
      "Wrote clean, maintainable code and participated in code reviews.",
      "Managed team workflow, testing, and ensured timely project delivery.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "B.G.S First Grade College, Mysore",
  detail: "Percentage: 68.28% • Graduated: September 2020",
};

export const projects = [
  {
    id: "implant-media",
    code: "01",
    label: "IMPLANT MEDIA",
    title: "Implant Media — E-commerce Print Platform",
    description:
      "Engineered a full-featured print-on-demand e-commerce platform with dynamic pricing, product customization, and multi-category management.",
    tech: ["PHP", "Laravel", "MySQL", "jQuery"],
  },
  {
    id: "drape-kings",
    code: "02",
    label: "DRAPE KINGS",
    title: "Drape Kings — Quotation & Payment System",
    description:
      "Built quotation workflow, secure payment integration, admin dashboard, and QuickBooks API automation for accounting.",
    tech: ["PHP", "CodeIgniter", "MySQL", "jQuery", "Payment Integration"],
  },
  {
    id: "looming",
    code: "03",
    label: "LOOMING",
    title: "Looming — Barcode Inventory System",
    description:
      "Barcode-driven inventory & order management with automated product lifecycle, CRM, and reporting dashboard.",
    tech: ["PHP", "CodeIgniter", "MySQL", "jQuery"],
  },
  {
    id: "trading-system",
    code: "04",
    label: "TRADING APP",
    title: "Semi-Automated Trading Management System",
    description:
      "Trade execution, client handling, real-time tracking, advanced search, filters, pagination & export tools.",
    tech: ["PHP", "CodeIgniter", "MySQL", "jQuery", "REST APIs"],
  },
  {
    id: "apex",
    code: "05",
    label: "APEX",
    title: "Apex — Real-Time Trading Integration",
    description:
      "Integrated live trading APIs with optimized PostgreSQL backend for high-performance order processing.",
    tech: ["ASP.NET Core", "PostgreSQL", "REST APIs"],
  },
];
