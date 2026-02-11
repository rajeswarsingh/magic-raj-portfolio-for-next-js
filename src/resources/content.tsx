import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Column, Line, Row, Tag, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Rajeswar",
  lastName: "Singh",
  name: `Rajeswar Singh`,
  role: "Product & Project Manager",
  avatar: "/images/avatar.jpg",
  email: "rajeswar.kumar@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rajeswarsingh",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rajeswar-singh/",
    essential: true,
  },
  {
    name: "Credly",
    icon: "credly",
    link: "https://www.credly.com/users/rajeswar-singh",
    essential: true,
  },
  {
    name: "Portfolio",
    icon: "globe",
    link: "https://sites.google.com/view/iamrajeswar/home",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between Design and Delivery</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Rajeswar, a Product and Project Manager. I craft intuitive <br />
      products and deliver scalable projects.
    </>
  ),
};

// NEW: Consulting Services Section
const consulting = {
  display: true,
  title: "Product Consulting for High-Impact Digital Platforms",
  subtitle: "Build Scalable, Reliable & Customer-Centric Products — Faster",
  description: (
    <>
      I help startups and growing businesses design, launch, and scale digital products by combining
      product thinking, technical depth, and execution excellence. With 19+ years of experience across
      credit, billing, collections, e-commerce, and data-driven platforms, I partner with founders and
      teams to turn ideas into reliable, high-impact products.
    </>
  ),

  services: [
    {
      icon: "💡",
      title: "Product Strategy & Discovery",
      items: [
        "Product vision, roadmap, and MVP definition",
        "Requirements discovery & solution design",
        "Feature prioritization aligned with business goals",
        "Market, user, and workflow analysis",
      ],
    },
    {
      icon: "🚀",
      title: "Product Delivery & Execution",
      items: [
        "Agile/Scrum delivery and backlog management",
        "Cross-functional coordination (engineering, design, QA)",
        "UAT, release readiness, and production rollout",
        "Risk, dependency, and delivery management",
      ],
    },
    {
      icon: "⚙️",
      title: "Platform & Workflow Design",
      items: [
        "Credit, billing, payment, and collections workflows",
        "High-volume transaction systems",
        "Customer onboarding & dispute resolution flows",
        "Automation and operational efficiency improvements",
      ],
    },
    {
      icon: "🤖",
      title: "AI & Automation Enablement",
      items: [
        "AI-powered chatbots for customer support & onboarding",
        "Workflow automation to reduce manual effort",
        "Data dashboards for actionable insights",
      ],
    },
  ],

  domains: [
    { name: "EdTech Platforms", description: "Learning journeys, content access, user engagement" },
    { name: "E-commerce Platforms", description: "Payments, checkout, integrations, analytics" },
    { name: "Financial & Transaction Systems", description: "Credit, billing, revenue, collections" },
    { name: "Conversational AI", description: "Chatbots for support, FAQs, and onboarding" },
  ],

  whyWorkWithMe: [
    "19+ years of enterprise and startup experience",
    "Strong product + technical + operations mindset",
    "Proven ability to translate business needs into scalable solutions",
    "Hands-on execution — not just strategy slides",
    "Trusted by teams for clarity, ownership, and delivery",
  ],

  mentoring: {
    display: true,
    title: "Mentoring & Training",
    items: [
      "PMP exam training and structured learning sessions",
      "Mentor teams on Agile, execution, and stakeholder alignment",
    ],
  },

  cta: {
    title: "Let's Work Together",
    description: (
      <>
        If you're a startup founder building your first product, a growing business struggling
        with delivery or scale, or a team needing product clarity, structure, or execution support
        — I'd love to help.
      </>
    ),
    buttons: [
      { label: "Book a Consultation", link: "https://cal.com/rajeswar", primary: true },
      { label: "Email Me", link: `mailto:${person.email}`, primary: false },
    ],
  },
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/rajeswar",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <Column gap="32">
        <Text as="p" size="l" weight="strong" onBackground="neutral-strong">
          India-based Product & Project Manager with 19+ years of experience turning complex
          ideas into reliable, revenue-generating digital products.
        </Text>

        <Column gap="12">
          <Text as="p" size="m" onBackground="neutral-medium">
            I help startups and growing businesses design, launch, and scale
            high-impact digital products by combining:
          </Text>
          <Column gap="8" paddingLeft="16">
            {[
              "Product strategy & execution excellence",
              "Digital marketing intelligence",
              "Agentic AI automation",
              "D2C Web Solutions",
              "Custom software delivery",
              "Analytics Insights and Dashboard",
            ].map((item) => (
              <Row key={item} gap="12" vertical="center">
                <Line background="brand-alpha-strong" vert height="16" />
                <Text size="m" onBackground="neutral-medium">{item}</Text>
              </Row>
            ))}
          </Column>
        </Column>

        <Line background="neutral-alpha-weak" />

        <Column gap="12">
          <Text
            size="s"
            weight="strong"
            onBackground="neutral-weak"
            style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
          >
            Domain Expertise
          </Text>
          <Row wrap gap="8">
            {[
              "E-commerce",
              "EdTech",
              "Telecom",
              "Data-driven Platforms",
              "IT Operations",
              "Production Support",
            ].map((domain) => (
              <Tag key={domain} label={domain} size="s" variant="neutral" />
            ))}
          </Row>
        </Column>

        <Column gap="12">
          <Text
            size="s"
            weight="strong"
            onBackground="neutral-weak"
            style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
          >
            Credentials
          </Text>
          <Row wrap gap="8">
            {[
              "PMI-PMP® (Project Management Professional)",
              "PMI Certified Product & Project Collaboration",
              "Agile Product Management",
              "Scrum",
              "Product Management Certification – IIT Roorkee & HelloPM",
              "IIM Lucknow – Executive Business Management",
              "Google Certified Data Analyst",
              "NASSCOM – Data Science & ML",
            ].map((cert) => (
              <Tag key={cert} label={cert} size="s" variant="brand" />
            ))}
          </Row>
        </Column>
      </Column>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Independent IT Consultant",
        timeframe: "2022 - Present",
        role: "Product Manager/Project Manager",
        achievements: [
          <>
            Delivered 5+ D2C eCommerce platforms, managing end-to-end project execution to drive direct customer engagement
            while ensuring adherence to scope, timelines, and quality standards.
          </>,
          <>
            Owned end-to-end product strategy and delivery for digital platforms, defining product scope, success metrics,
            roadmaps and execution plans aligned with business growth, customer experience and platform scalability.
          </>,
          <>
            Led product discovery and requirements definition, translating business needs into prioritized backlogs, user stories
            and delivery roadmaps while balancing customer, operational and technical considerations.
          </>,
          <>
            Contributing to a 20% increase in customer engagement and measurable improvements in adoption and usage.
          </>,
          <>
            Drove Omni-Channel platform modernization and workflow optimization, improving operational efficiency and time-to-market
            by 30% through automation and process redesign.
          </>,
          <>
            Delivered scalable platforms using low-code/no-code architectures Shopify and WordPress, reducing development timelines by 60%
            while maintaining reliability, extensibility and production readiness.
          </>,
          <>
            Improved platform performance and availability, achieving 99.9% uptime and reducing page load times by 30%.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.
          </>,
        ],
        images: [],
      },
      {
        company: "Fabvery",
        timeframe: "Oct 2019 – Oct 2022",
        role: "Project Manager",
        achievements: [],
        images: [],
      },
      {
        company: "Atos",
        timeframe: "May 2016 – July 2019",
        role: "Product Owner / System Designer",
        achievements: [],
        images: [],
      },
      {
        company: "TCS",
        timeframe: "Apr 2011 – July 2016",
        role: "Assistant Consultant",
        achievements: [],
        images: [],
      },
      {
        company: "Arowana, Dubai",
        timeframe: "Sep 2008 – Mar 2011",
        role: "System Analyst",
        achievements: [],
        images: [],
      },
      {
        company: "Verizon",
        timeframe: "June 2005 – Sep 2008",
        role: "Software Engineer",
        achievements: [],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Indian Institute of Management, Lucknow",
        description: <>Executive Business Management</>,
      },
      {
        name: "CUSAT",
        description: <>Studied software engineering (MCA)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: <>Building next-gen apps with Next.js and React.js.</>,
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Supabase", icon: "supabase" },
        ],
        images: [],
      },
      {
        title: "Python",
        description: <>Building dashboards, generating analytics and data insights with Python</>,
        tags: [
          { name: "Pandas", icon: "python" },
          { name: "NumPy", icon: "python" },
          { name: "Matplotlib", icon: "python" },
          { name: "Seaborn", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Other Technical Skills",
        description: <>Building custom software using various technologies</>,
        tags: [
          { name: "SQL", icon: "document" },
          { name: "Shell", icon: "document" },
          { name: "Tableau", icon: "document" },
          { name: "CI/CD", icon: "rocket" },
          { name: "Microservices", icon: "grid" },
          { name: "AWS", icon: "globe" },
        ],
        images: [],
      },
      {
        title: "Figma",
        description: <>Prototype in Figma</>,
        tags: [{ name: "Figma", icon: "figma" }],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-3.jpg", alt: "image", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, consulting };
