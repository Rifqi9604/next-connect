export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

export interface Developer {
  id: number;
  username: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  location: string;
  email: string;
  website: string;
  github: string;
  twitter: string;
  linkedin: string;
  projects: Project[];
}

// Mock data for developers
export const developers = [
  {
    id: 1,
    username: "janedoe",
    name: "Jane Doe",
    role: "Frontend Developer",
    bio: "Passionate about creating beautiful and accessible user interfaces with React and Next.js.",
    skills: [
      "React", // 0
      "Next.js", // 1
      "TypeScript", // 2 .. => di salin / copy sama slice
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
    ],
    location: "San Francisco, CA",
    email: "jane.doe@example.com",
    website: "https://janedoe.dev",
    github: "janedoe",
    twitter: "janedoe",
    linkedin: "janedoe",
    projects: [
      {
        id: 1,
        title: "E-commerce Dashboard",
        description:
          "A responsive dashboard for e-commerce stores with analytics and inventory management.",
        technologies: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
      },
      {
        id: 2,
        title: "Personal Portfolio",
        description:
          "A personal portfolio website showcasing my projects and skills.",
        technologies: ["React", "Framer Motion", "Tailwind CSS"],
      },
    ],
  },
  {
    id: 2,
    username: "johndoe",
    name: "John Doe",
    role: "Backend Developer",
    bio: "Experienced in building scalable APIs and server-side applications with Node.js and Python.",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    location: "New York, NY",
    email: "john.doe@example.com",
    website: "https://johndoe.dev",
    github: "johndoe",
    twitter: "johndoe",
    linkedin: "johndoe",
    projects: [
      {
        id: 1,
        title: "API Gateway",
        description:
          "A scalable API gateway with authentication and rate limiting.",
        technologies: ["Node.js", "Express", "Redis", "JWT"],
      },
      {
        id: 2,
        title: "Data Processing Pipeline",
        description: "A data processing pipeline for analyzing large datasets.",
        technologies: ["Python", "Pandas", "PostgreSQL", "Apache Airflow"],
      },
    ],
  },
  {
    id: 3,
    username: "alexsmith",
    name: "Alex Smith",
    role: "Full Stack Developer",
    bio: "Full stack developer with a passion for building end-to-end web applications and mentoring junior developers.",
    skills: ["React", "Node.js", "PostgreSQL", "Docker"],
    location: "Austin, TX",
    email: "alex.smith@example.com",
    website: "https://alexsmith.dev",
    github: "alexsmith",
    twitter: "alexsmith",
    linkedin: "alexsmith",
    projects: [
      {
        id: 1,
        title: "Task Management App",
        description: "A collaborative task management application for teams.",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      },
    ],
  },
  {
    id: 4,
    username: "sarahjones",
    name: "Sarah Jones",
    role: "DevOps Engineer",
    bio: "Specializing in CI/CD pipelines, cloud infrastructure, and automating deployment processes.",
    skills: ["AWS", "Kubernetes", "Terraform", "GitHub Actions"],
    location: "Seattle, WA",
    email: "sarah.jones@example.com",
    website: "https://sarahjones.dev",
    github: "sarahjones",
    twitter: "sarahjones",
    linkedin: "sarahjones",
    projects: [
      {
        id: 1,
        title: "Infrastructure as Code Templates",
        description:
          "A collection of reusable IaC templates for AWS and Azure.",
        technologies: ["Terraform", "AWS", "Azure", "GitHub Actions"],
      },
    ],
  },
  {
    id: 5,
    username: "mikebrown",
    name: "Mike Brown",
    role: "Mobile Developer",
    bio: "Creating cross-platform mobile applications with React Native and Flutter.",
    skills: ["React Native", "Flutter", "Firebase", "Swift"],
    location: "Chicago, IL",
    email: "mike.brown@example.com",
    website: "https://mikebrown.dev",
    github: "mikebrown",
    twitter: "mikebrown",
    linkedin: "mikebrown",
    projects: [
      {
        id: 1,
        title: "Fitness Tracker App",
        description: "A mobile app for tracking workouts and nutrition.",
        technologies: ["React Native", "Firebase", "Redux"],
      },
    ],
  },
  {
    id: 6,
    username: "emilywilson",
    name: "Emily Wilson",
    role: "UI/UX Designer",
    bio: "Designing intuitive and beautiful user experiences with a focus on accessibility and usability.",
    skills: ["Figma", "Adobe XD", "UI Design", "User Research"],
    location: "Portland, OR",
    email: "emily.wilson@example.com",
    website: "https://emilywilson.design",
    github: "emilywilson",
    twitter: "emilywilson",
    linkedin: "emilywilson",
    projects: [
      {
        id: 1,
        title: "Design System",
        description:
          "A comprehensive design system for web and mobile applications.",
        technologies: ["Figma", "Storybook", "Design Tokens"],
      },
    ],
  },
  {
    id: 7,
    username: "dev1",
    name: "Developer 1",
    role: "Full Stack Developer",
    bio: "Passionate about building web applications with Next.js and React.",
    skills: ["React", "Next.js", "Node.js", "MongoDB"],
    location: "Boston, MA",
    email: "dev1@example.com",
    website: "https://dev1.dev",
    github: "dev1",
    twitter: "dev1",
    linkedin: "dev1",
    projects: [
      {
        id: 1,
        title: "Social Media Dashboard",
        description:
          "A dashboard for managing social media accounts and analytics.",
        technologies: ["React", "Next.js", "Chart.js", "Tailwind CSS"],
      },
    ],
  },
  {
    id: 8,
    username: "dev2",
    name: "Developer 2",
    role: "Full Stack Developer",
    bio: "Passionate about building web applications with Next.js and React.",
    skills: ["React", "Next.js", "GraphQL", "PostgreSQL"],
    location: "Denver, CO",
    email: "dev2@example.com",
    website: "https://dev2.dev",
    github: "dev2",
    twitter: "dev2",
    linkedin: "dev2",
    projects: [
      {
        id: 1,
        title: "E-learning Platform",
        description:
          "An online learning platform with courses and interactive exercises.",
        technologies: ["React", "Next.js", "GraphQL", "PostgreSQL"],
      },
    ],
  },
  {
    id: 9,
    username: "dev3",
    name: "Developer 3",
    role: "Full Stack Developer",
    bio: "Passionate about building web applications with Next.js and React.",
    skills: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    location: "Miami, FL",
    email: "dev3@example.com",
    website: "https://dev3.dev",
    github: "dev3",
    twitter: "dev3",
    linkedin: "dev3",
    projects: [
      {
        id: 1,
        title: "Real-time Chat Application",
        description:
          "A chat application with real-time messaging and notifications.",
        technologies: ["React", "Next.js", "Firebase", "Socket.io"],
      },
    ],
  },
];
