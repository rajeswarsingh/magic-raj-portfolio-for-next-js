import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Column, Line, Row, Tag, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Rajeswar",
  lastName: "Singh",
  name: `Rajeswar Singh`,
  role: "Product & Project Manager",
  avatar: "/images/avatar.jpg",
  email: "rajeswar.kumar@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the 
  //array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
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
    icon: "Credly",
    link: "https://www.credly.com/users/rajeswar-singh",
    essential: true,
  },
  {
    name: "Portfolio",
    icon: "Portfolio",
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
    I'm Rajeswar, a Product and Project Manager <Text as="span" size="xl" weight="strong"></Text>,  I craft intuitive <br /> Products and deliver scalable projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
 /* intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Rajeswar is a India-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans Digital Solutions, D2C digital Solutions, Product Design, and custom software.
        
        PMP, Agile, Executive Business Management from IIM Lucknow, Google Certified Data Analyst, NASSCOM Certified Data Scientist & ML with over 19+ years of experience in IT Solutions Design, Development, IT Operations / Application / Production Support, Testing, Integration, Telecom and E-commerce Business Application/Processes.
        I help startups and growing businesses design, launch, and scale high-impact digital products by combining product strategy, execution excellence, digital marketing intelligence, and agentic AI automation.
        With 19+ years of experience across financial systems, e-commerce, EdTech, and data-driven platforms, I turn complex ideas into reliable, revenue-generating, customer-centric products.
      </>
    ),
  },*/
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <Column gap="32">

        {/* Opening statement */}
        <Text as="p" size="l" weight="strong" onBackground="neutral-strong">
          India-based Product & Project Manager with 19+ years of experience turning complex
          ideas into reliable, revenue-generating digital products.
        </Text>

        {/* What I do */}
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
              "custom software delivery",
              "Analytics Insights and Dashboard",
            ].map((item) => (
              <Row key={item} gap="12" vertical="center">
                <Line background="brand-alpha-strong" vert height="16" />
                <Text size="m" onBackground="neutral-medium">{item}</Text>
              </Row>
            ))}
          </Column>
        </Column>

        {/* Divider */}
        <Line background="neutral-alpha-weak" />

        {/* Domain expertise */}
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

        {/* Credentials */}
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
    display: true, // set to false to hide this section
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
          Delivered scalable platforms using low-code/no-code architectures Shopify, WordPress, reducing development timelines by 60% 
          while maintaining reliability, extensibility and production readiness.
          </>,  
          <>
          Improved platform performance and availability, achieving 99.9% uptime and reducing page load times by 30%.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          /*{
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },*/
        ],
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
        role: "Arowana, Dubai",
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
    display: true, // set to false to hide this section
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
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Rajeswar with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
         /* {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },*/
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js and React.js.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
         /* {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },*/
        ],
      },
      
      {
        title: "Python",
        description: (
          <>Building Dashboard, Generating Analytics and DATA nsight with Python</>
        ),
        tags: [
          {
            name: "Pandas",
            icon: "Pandas",
          },
          {
            name: "NumPy",
            icon: "NumPy",
          },
          {
            name: "Matplotlib",
            icon: "Matplotlib",
          },
          {
            name: "Seaborn",
            icon: "Seaborn",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },

            {
        title: "Other Technical Skills",
        description: (
          <>Building Custom Software Using Various Others Tech </>
        ),
        tags: [
          {
            name: "SQL",
            icon: "SQL",
          },
          {
            name: "Shell scripting",
            icon: "Shell scripting",
          },
          {
            name: "Tableau",
            icon: "Tableau",
          },
          {
            name: "CI/CD & DevOps",
            icon: "CI/CD & DevOps",
          },
          {
            name: "microservices",
            icon: "microservices",
          },
          {
            name: "AWS",
            icon: "AWS",
          },
        ],
        // optional: leave the array empty if you don't want to display images
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
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
