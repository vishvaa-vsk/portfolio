export const t = {
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    tech: "Tech Stack",
    projects: "Projects",
    beyond: "Beyond Engineering",
    recognition: "Recognition",
    contact: "Contact Me"
  },
  hero: {
    roles: [
      "Software Engineer",
      "Backend Engineer",
      "AI Systems Engineer",
      "Full Stack Developer"
    ],
    description: "Building intelligent software at the intersection of backend engineering and AI. From scalable APIs to LLM-powered applications, I enjoy transforming ideas into products that people can actually use.",
    resumeBtn: "View Resume"
  },
  about: {
    badge: "About me",
    title: "Who I am",
    subtitle: "Building Intelligent Software with Purpose",

    p1_1: "I'm Vishvaa, a pre-final year engineering student passionate about building systems that are not only functional but also scalable and reliable. I enjoy creating software designed with real users in mind through ",
    p1_hi1: "thoughtful architecture and clean code",
    p1_2: ", focusing on backend development, robust APIs, and maintainable solutions that stand the test of scale.",
    p1_hi2: "",
    p1_3: "",
    p1_hi3: "",
    p1_4: "",

    p2_1: "Over the years, I've worked on projects ranging from full-stack applications to solutions powered by ",
    p2_hi1: "AI systems and cloud technologies",
    p2_2: ", exploring domains like agriculture, education and productivity. From integrating LLM workflows to optimizing application performance, I enjoy transforming ideas into products that create meaningful impact.",

    p3_1: "As I continue exploring software engineering, I'm especially excited about ",
    p3_hi1: "backend systems, cloud infrastructure, and the intersection of AI with modern applications",
    p3_2: ", constantly learning and building software that is practical, impactful, and ready for real-world use."
  },
  experience: {
    badge: "Trajectory",
    title: "Experience & Education",
    profTitle: "Professional Experience",
    acadTitle: "Academic Education",
    jobs: [
      {
        role: "Software Development Intern (Backend & AI Focus)",
        company: "Hexaware Technologies",
        period: "Feb 2026 - Present",
        description: "Built AI-powered assessment workflows using FastAPI, LangChain, and Azure OpenAI. Developed a CEFR grading engine, automated speaking evaluation, and improved scalability through Redis-based task queuing for concurrent sessions.",
        tags: ["Python", "FastAPI", "LangChain", "Azure OpenAI", "Redis", "PostgreSQL"]
      },
      {
        role: "Backend Engineer",
        company: "GameChanger4U",
        period: "April 2026 - Present",
        description: "As part of the core engineering team, I build and maintain the backend systems powering a SaaS platform for sports academies and gyms. I own the development of scalable APIs, database design, cloud deployments, and infrastructure decisions, ensuring reliable and secure production environments.",
        tags: ["Python", "FastAPI", "PostgreSQL", "AWS", "Docker", "Cloud Infra", "CI/CD"]
      },

      {
        role: "Full Stack Developer Intern",
        company: "Infotak Solutions",
        period: "Dec 2025 - Jan 2026",
        description: "Developed a lift monitoring dashboard using React and Express.js, implementing backend APIs and PostgreSQL workflows to track operational data. Containerized services with Docker for consistent deployments.",
        tags: ["React", "Express.js", "PostgreSQL", "Docker"]
      },
      {
        role: "Software Development Intern",
        company: "J7 Technology Solutions Pvt. Ltd.",
        period: "Aug 2025 - Nov 2025",
        description: "Built backend APIs for academic and administrative modules, implemented secure authentication mechanisms, and collaborated in a multi-developer environment using pull requests and staged releases.",
        tags: ["Express.js", "TypeScript", "Next.js", "PostgreSQL", "AWS", "GitHub"]
      }
    ],
    education: [
      {
        course: "B.E. in Computer Science and Engineering",
        institution: "Velammal Engineering College, Chennai",
        period: "2023 - 2027",
        status: "Ongoing Degree",
        description: "Building a strong foundation in computer science while applying concepts through projects, hackathons, and internships focused on software engineering and emerging technologies."
      },
      {
        course: "Senior Secondary School (Computer Science)",
        institution: "SKNS PMC Vivekananda Vidyalaya Junior College",
        period: "2021 - 2023",
        status: "Completed",
        description: "Built my early interest in technology through computer science studies, strengthening my analytical thinking and understanding of programming fundamentals."
      }
    ]

  },
  tech: {
    badge: "Technologies",
    title: "My Tech Stack",
    levels: {
      advanced: "Advanced",
      intermediate: "Intermediate",
      basic: "Basic"
    },
    categories: ["Backend Engineering", "AI & GenAI", "Databases & Storage", "Cloud & DevOps", "Frontend"]
  },
  projects: {
    badge: "Portfolio",
    title: "What I've Built",
    codeBtn: "Code",
    viewBtn: "View Project",
    items: [
      {
        title: "HarvestHub",
        description: "An AI-powered agricultural assistant developed for the Google Solution Challenge, featuring multilingual support, weather-driven crop recommendations, pest detection, and Gemini-powered guidance to help smallholder farmers make informed decisions.",
        role: "Backend & AI Developer",
        duration: "Mar 2025 - Jun 2025",
        team: "4 Members",
        caseStudy: {
          overview:
            "HarvestHub is an AI-powered agricultural assistant built for the Google Solution Challenge to support smallholder farmers through accessible and multilingual technology.",

          challenge:
            "Farmers often lack timely access to localized guidance on weather conditions, crop selection, and pest management. The challenge was to deliver meaningful AI assistance while ensuring the experience remained simple and accessible.",

          contributions:
            [
              "Integrated Gemini AI to provide contextual agricultural guidance.",
              "Implemented multilingual experiences across five Indian languages.",
              "Built weather-driven crop recommendation workflows.",
              "Developed pest detection capabilities using custom-trained models.",
              "Optimized API interactions and application performance."
            ],

          highlights:
            [
              "Flutter",
              "Firebase",
              "Gemini AI",
              "TensorFlow",
              "Multilingual Support"
            ],

          impact:
            "The project was selected among the Top 105 prototypes in the Google Solution Challenge and demonstrated how AI can be applied to solve real-world agricultural problems.",

          lessons:
            "I learned the importance of balancing AI capabilities with usability, reliability, and accessibility for non-technical users."
        }

      },
      {
        title: "DBX — Cloud-Native Database Backup & Recovery Platform",
        description: "A cloud-native platform designed to automate database backup and recovery workflows. Built to explore scalable backend architectures, secure data restoration strategies, and production-inspired disaster recovery practices.",
        role: "Backend Engineer",
        duration: "Feb 2026 - Mar 2026",
        team: "Solo Project",
        caseStudy: {
          overview: "DBX is a cloud-native platform designed to automate database backup and recovery workflows, ensuring data integrity and fast recovery times.",
          challenge: "Manual database backups are prone to human error, lack consistency, and often lead to slow disaster recovery times, putting critical data at risk.",
          contributions: [
            "Developed automated backup scripts using Python and Typer.",
            "Configured secure and automated PostgreSQL database backup procedures.",
            "Implemented cron-based scheduling for regular backup operations.",
            "Integrated secure storage upload workflows for backup archives.",
            "Designed recovery workflows to verify database restoration integrity."
          ],
          highlights: [
            "Docker",
            "PostgreSQL",
            "Python",
            "FastAPI",
            "Backup Automation",
            "Cron Scheduling"
          ],
          impact: "Demonstrated practical understanding of fault tolerance and recovery.",
          lessons: "Infrastructure is valuable only when recovery is predictable and tested."
        }
      },
      {
        title: "Life Connect",
        description: "A social impact platform for managing blood donation requests, modernized with a scalable backend architecture to support future growth and reliability.",
        role: "Tech Head & Backend Engineer",
        duration: "2025 - Present",
        team: "YRC Dev Team",
        caseStudy: {
          overview: "Life Connect is a blood donation management platform developed under the Youth Red Cross initiative to connect donors with urgent requests.",
          challenge: "The legacy Flask system faced high response times and synchronization blockages, particularly during mass email notifications for blood donation alerts.",
          contributions: [
            "Led the backend migration from Flask to FastAPI.",
            "Introduced asynchronous task processing to prevent API blockages during alerts.",
            "Implemented security middlewares, CORS, and API rate limiting.",
            "Optimized PostgreSQL database query performance and index layout.",
            "Restructured API endpoints to follow RESTful API design standards."
          ],
          highlights: [
            "FastAPI",
            "PostgreSQL",
            "Async Tasks",
            "Rate Limiting",
            "REST APIs",
            "Backend Migration"
          ],
          impact: "Improved the reliability and structure of the platform while establishing a stronger technical foundation for future development.",
          lessons: "This experience taught me how to modernize existing systems while balancing technical improvements with team coordination."
        }
      },
      {
        title: "LSRW Skill Assessment Platform",
        description: "A full-stack web application for conducting English language assessments with automated scoring, analytics dashboards, and email-based report generation for learners and educators.",
        role: "Full Stack Developer",
        duration: "Nov 2023 - Jan 2024",
        team: "Solo Project",
        caseStudy: {
          overview: "LSRW is a full-stack assessment platform built to evaluate English language learners through automated grading and automated reporting.",
          challenge: "Grading English assessments is time-consuming and subjective, making it difficult for teachers to provide timely feedback and track analytics.",
          contributions: [
            "Developed automated scoring algorithms for English assessments.",
            "Built interactive student and teacher analytics dashboards.",
            "Implemented automated email systems for sending graded reports.",
            "Designed and optimized the MongoDB database schemas.",
            "Created RESTful APIs to connect the frontend and backend components."
          ],
          highlights: [
            "Flask",
            "MongoDB",
            "JavaScript",
            "Email Automation",
            "REST APIs",
            "Analytics"
          ],
          impact: "Automated assessment delivery and report generation, enabling instant grading and analytics for hundreds of students.",
          lessons: "This project taught me end-to-end product development and laid the foundation for my backend journey."
        }
      },
      {
        title: "Prism — Multi-Agent Code Review Platform",
        description: "A GitHub-integrated code review platform that runs a multi-agent pipeline across pull requests - assigning specialized agents for security, logic, style, and performance analysis. Built to explore production-grade agent orchestration, async webhook processing, and RAG-powered context retrieval over codebases.",
        role: "Backend Engineer",
        duration: "Jun 2026 - Present",
        team: "Solo Project",
        caseStudy: null
      },
      {
        title: "Kore — RAG-as-a-Service Platform",
        description: "A multi-tenant document intelligence API that allows teams to upload document collections and query them via a clean REST interface. Designed around production concerns - tenant isolation at the database level, API key auth, rate limiting, hybrid semantic and keyword search, and embedding caching. Built to move RAG from demo to deployable infrastructure.",
        role: "Backend Engineer",
        duration: "Jun 2026 - Present",
        team: "Solo Project",
        caseStudy: null
      },
    ]
  },

  beyond: {
    badge: "Beyond Engineering",
    title: "Community & Leadership",
    role: "Technical Head",
    organization: "Youth Red Cross, Velammal Engineering College",
    period: "Sep 2025 - Present",
    missionTitle: "Tech-for-Good Leadership",
    missionDesc: "Bridging the gap between software engineering and social empathy. Over the past 10 months, I have led the technical wing of YRC, focusing on building high-impact social projects, mentoring student developers, and encouraging a culture of tech-as-a-service.",
    pillars: [
      {
        title: "Social Impact Technology",
        description: "Led the technical development of tech-for-good projects, including Life Connect — a blood donation management platform and Cross Link - a platform to manage volunteers, social-impact events, and other club activities that needs to be streamlined."
      },
      {
        title: "Workshops & Mentorship",
        description: "Conducted technical training sessions and workshops for the entire YRC team, educating members on modern software practices, APIs, and collaborative coding."
      },
      {
        title: "The Service Mindset",
        description: "Seeded the core philosophy of using software engineering skills to solve real human problems, cultivating empathy and social responsibility among developers."
      }
    ],
    stats: [
      { label: "Tenure", value: "Sep 2025 - Present" },
      { label: "Role", value: "Technical Head" },
      { label: "Volunteers", value: "70+" }
    ]
  },

  recognition: {
    badge: "Recognition",
    title: "Achievements & Certifications",
    achievements: [
      {
        title: "Top 105 Prototype",
        issuer: "Google Solution Challenge 2025",
        description:
          "HarvestHub was recognized among the Top 105 prototypes globally for leveraging AI to address real-world agricultural challenges."
      },
      {
        title: "Rank 217 / 1349",
        issuer: "HackerRank Orchestrate 2026 (May Edition)",
        description:
          "Secured a top ranking in HackerRank's national-level programming competition among 1,300+ participants."
      },
      {
        title: "1st Place - Blockathon'24",
        issuer: "Velammal Engineering College",
        description:
          "Won first place by designing and presenting an innovative solution for the given problem statement."
      },
      {
        title: "1st Place - QR Debugging",
        issuer: "Namma VEC 2026, Velammal Engineering College",
        description:
          "Recognized for analytical thinking and debugging efficiency in a competitive technical event."
      },
      {
        title: "2nd Place - App Development",
        issuer: "Namma VEC 2025, Velammal Engineering College",
        description:
          "Built and presented an application that secured runner-up position among competing teams."
      }
    ],
    certifications: [
      {
        title: "Postman Student Expert",
        issuer: "Postman"
      },
      {
        title: "Python Certification",
        issuer: "HackerRank"
      },
      {
        title: "Deep Learning",
        issuer: "NPTEL"
      },
      {
        title: "Natural Language Processing",
        issuer: "NPTEL"
      },
      {
        title: "Programming & Data Structures Using Python",
        issuer: "NPTEL"
      }
    ]
  },

  footer: {
    role: "Software Engineer & AI Systems Developer",
    contactTitle: "Contact",
    socialTitle: "Social",
    navTitle: "Navigation",
    rights: "All rights reserved.",
    sourceCode: "View Source Code",
    description: "Specialized in backend architectures, scalable systems, and artificial intelligence workflows.",
    backToTop: "Back to top"
  },
  contact: {
    email: "kvishvaa6@gmail.com",
    github: "https://github.com/vishvaa-vsk",
    linkedin: "https://linkedin.com/in/vishvaa-k",
  }
};