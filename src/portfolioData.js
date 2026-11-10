export const meta = {
  name: 'Upadhya Senanayaka',
  initials: 'US',
  headline: 'Building. Automating. Innovating.',
  subtitle: 'Aspiring DevOps & Cloud Engineer | Software Developer | AI/ML Enthusiast',
  badge: 'Available for Internships & Projects',
  bio: `I am an Information Technology student at the Institute of Technology, University of Moratuwa, passionate about DevOps, cloud infrastructure, and modern software development. 
  
I focus on bridging code and reliable operations—designing scalable backend services, orchestrating containerized environments, automating CI/CD delivery pipelines, and experimenting with AI/ML computer vision systems. I thrive on continuous learning, clean architecture, and practical engineering solutions.`,
  location: 'Colombo, Sri Lanka',
  status: 'Actively building, automating & learning',
  stats: [
    { value: '3rd Year', label: 'Academic Standing' },
    { value: 'DevOps & Cloud', label: 'Core Direction' },
    { value: '4+', label: 'Featured Projects' },
    { value: 'UoM (ITUM)', label: 'Institution' },
  ],
  email: 'upadhyasenanayaka@gmail.com',
  github: 'https://github.com/Upadhya82',
  githubUsername: 'Upadhya82',
  linkedin: 'https://linkedin.com/in/upadhya-senanayaka',
  resumeUrl: '#resume',
};

export const terminalCommands = {
  whoami: {
    command: 'whoami',
    output: [
      'Upadhya Senanayaka',
      'IT Undergraduate @ Institute of Technology, University of Moratuwa',
      'Location: Sri Lanka',
    ],
  },
  focus: {
    command: 'cat /etc/career-focus',
    output: [
      'DevOps & Infrastructure Automation',
      'Cloud Architecture & Continuous Integration (CI/CD)',
      'Full-Stack Software Engineering (Python / FastAPI / React)',
      'Practical AI / Machine Learning (Computer Vision & YOLO)',
    ],
  },
  status: {
    command: 'systemctl status engineer.service',
    output: [
      '● engineer.service - Active Career & Skills Engine',
      '   Status: "Building, automating, and learning continuously"',
      '   Uptime: Active & open to internship opportunities',
      '   Memory: High enthusiasm, rapid adaptation to new tools',
    ],
  },
  stack: {
    command: 'docker ps --format "{{.Names}}: {{.Status}}"',
    output: [
      'devops-core: Docker, Linux, Git, GitHub Actions, Bash [RUNNING]',
      'backend-api: Python, FastAPI, PostgreSQL, Redis, REST APIs [RUNNING]',
      'mobile-app: Flutter Cross-Platform Client [RUNNING]',
      'frontend-ui: React, JavaScript, TypeScript, Tailwind CSS [RUNNING]',
      'ai-simulation: Python, Simulation Modeling, OpenCV [RUNNING]',
    ],
  },
};

export const devopsRoadmap = [
  {
    step: '01',
    title: 'Linux & Shell Scripting',
    status: 'Proficient / Foundation',
    desc: 'System administration, process management, file permissions, shell scripting (Bash), and command-line automation.',
    tags: ['Linux', 'Bash', 'CLI Automation', 'SSH'],
  },
  {
    step: '02',
    title: 'Version Control & Git Workflows',
    status: 'Proficient / Foundation',
    desc: 'Branching strategies, collaborative workflows, conflict resolution, semantic versioning, and commit conventions.',
    tags: ['Git', 'GitHub', 'GitFlow', 'Code Review'],
  },
  {
    step: '03',
    title: 'Containerization with Docker',
    status: 'Practicing / Active',
    desc: 'Multi-stage Dockerfiles, image optimization, Docker Compose service orchestration, networking, and volumes.',
    tags: ['Docker', 'Containers', 'Docker Compose', 'Microservices'],
  },
  {
    step: '04',
    title: 'CI/CD Pipeline Automation',
    status: 'Practicing / Active',
    desc: 'Automating linting, unit testing, image builds, and automated artifact deployment via GitHub Actions.',
    tags: ['GitHub Actions', 'CI/CD', 'Automated Testing', 'Build Automation'],
  },
  {
    step: '05',
    title: 'Cloud Fundamentals & Infrastructure',
    status: 'Active Learning',
    desc: 'Cloud compute, storage primitives, serverless concepts, virtual networking, and infrastructure deployment.',
    tags: ['Cloud Fundamentals', 'AWS/GCP Basics', 'Networking', 'Security'],
  },
  {
    step: '06',
    title: 'Orchestration & Observability',
    status: 'Upcoming Milestone',
    desc: 'Deep diving into Kubernetes cluster management, container orchestration, metrics, logs, and monitoring.',
    tags: ['Kubernetes', 'Prometheus', 'Grafana', 'IaC (Terraform)'],
  },
];

export const skillCategories = [
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    icon: 'server',
    description: 'Automating environments, containerizing services, and building reliable CI/CD pipelines.',
    skills: [
      { name: 'Linux', level: 'Solid Working Knowledge', badge: 'Core' },
      { name: 'Docker', level: 'Containerization & Compose', badge: 'Core' },
      { name: 'Git & GitHub', level: 'Version Control & Collaboration', badge: 'Core' },
      { name: 'GitHub Actions', level: 'CI/CD Pipelines & Automation', badge: 'Active' },
      { name: 'CI/CD Concepts', level: 'Automated Build & Test', badge: 'Active' },
      { name: 'Bash Scripting', level: 'Task & Pipeline Automation', badge: 'Working' },
      { name: 'Cloud Fundamentals', level: 'Architectural Primitives', badge: 'Learning' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Application Development',
    icon: 'smartphone',
    description: 'Cross-platform mobile client development with reactive user interfaces and modern state architecture.',
    skills: [
      { name: 'Flutter', level: 'Cross-platform UI & State Management', badge: 'Active' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'code',
    description: 'Designing performant asynchronous APIs, business logic services, and API routing.',
    skills: [
      { name: 'Python', level: 'Core Scripting & Backend Logic', badge: 'Core' },
      { name: 'FastAPI', level: 'Asynchronous REST APIs & Swagger Specs', badge: 'Core' },
      { name: 'REST APIs', level: 'Design, Endpoints & Authentication', badge: 'Core' },
    ],
  },
  {
    id: 'database',
    title: 'Databases & Caching',
    icon: 'database',
    description: 'Relational data persistence, schema design, and low-latency in-memory data caching.',
    skills: [
      { name: 'PostgreSQL', level: 'Relational Schema Design & SQL Queries', badge: 'Working' },
      { name: 'Redis', level: 'In-Memory Caching & Session Storage', badge: 'Working' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'layers',
    description: 'Crafting responsive, clean, and interactive user interfaces.',
    skills: [
      { name: 'React', level: 'Components, Hooks & State Flow', badge: 'Core' },
      { name: 'JavaScript (ES6+)', level: 'Modern Frontend Engineering', badge: 'Core' },
      { name: 'TypeScript', level: 'Type Safety & Interfaces', badge: 'Learning' },
      { name: 'HTML5 & CSS3', level: 'Responsive Layouts & Semantic Web', badge: 'Core' },
      { name: 'Tailwind CSS', level: 'Utility-first Modern Styling', badge: 'Working' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: 'cpu',
    description: 'Exploring computer vision, queue simulation, and intelligent algorithmic systems.',
    skills: [
      { name: 'Computer Vision', level: 'Image Processing & Detection Concepts', badge: 'Project Focus' },
      { name: 'OpenCV', level: 'Video Stream Processing & Filters', badge: 'Working' },
      { name: 'YOLO', level: 'Object Detection & Tracking Models', badge: 'Applied' },
      { name: 'Python for AI', level: 'Data Preprocessing & Algorithmic Scripting', badge: 'Working' },
    ],
  },
  {
    id: 'management',
    title: 'Project Management & Collaboration',
    icon: 'layers',
    description: 'Professional engineering standards, agile methodologies, and clean documentation.',
    skills: [
      { name: 'Git-based Workflow', level: 'Branches, PRs, and Code Reviews', badge: 'Core' },
      { name: 'Project Planning', level: 'Milestones, Tasks & System Design', badge: 'Core' },
      { name: 'Team Collaboration', level: 'Cross-functional Coordination', badge: 'Core' },
      { name: 'Technical Documentation', level: 'System Architecture & API Specs', badge: 'Core' },
    ],
  },
];

export const projects = [
  {
    id: 'microlink',
    title: 'MicroLink',
    tagline: 'AI and GPS Smart Micro Business Discovery System',
    category: 'fullstack',
    categoryLabel: 'Mobile & Distributed System (In Progress)',
    status: 'In Progress',
    featured: true,
    description:
      'MicroLink is an AI-powered platform designed to help users discover nearby micro-businesses through GPS-based location services and intelligent recommendations. Built with a cross-platform Flutter mobile application communicating through a centralized API Gateway to decoupled Python and FastAPI microservices, backed by PostgreSQL persistence and Redis in-memory caching.',
    architecture: 'Cross-platform Flutter mobile client interfacing through a reverse-proxy API Gateway with containerized FastAPI microservices, orchestrated via Docker Compose, PostgreSQL, and Redis.',
    technologies: ['Flutter', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'API Gateway'],
    github: 'https://github.com/Upadhya82/microlink',
    demo: '',
    highlights: [
      'Cross-platform mobile application development with Flutter',
      'Decoupled microservice architecture built with Python, FastAPI, and Docker orchestration',
      'Relational schema design with PostgreSQL and high-speed in-memory Redis caching',
    ],
  },
  {
    id: 'sticker-shop',
    title: 'Sticker Shop',
    tagline: 'Service Appointment Scheduling & Customer Review Platform',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web Application',
    status: 'Completed',
    featured: true,
    description:
      'A full-stack booking and customer feedback web application engineered with Next.js (App Router), TypeScript, Tailwind CSS, and Supabase. Implements real-time slot availability checking to prevent double-booking, phone number and future-date input validation, and authenticated customer reviews with aggregated rating calculations.',
    architecture: 'Next.js App Router with Server Components, Supabase PostgreSQL persistence with Row-Level Security (RLS) policies, and validated client booking forms.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/Upadhya82/sticker-shop',
    demo: '',
    highlights: [
      'Real-time slot availability verification preventing duplicate appointment bookings',
      'Supabase PostgreSQL database integration secured by Row-Level Security (RLS) policies',
      'Customer rating aggregation with comprehensive form validation and user feedback',
    ],
  },
  {
    id: 'cost-manager',
    title: 'Cost Manager',
    tagline: 'Product Batch Costing & Selling Price Calculation System',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web Application',
    status: 'Completed',
    featured: true,
    description:
      'A specialized manufacturing and production costing web application developed with React, TypeScript, and Tailwind CSS. Enables small food processing and manufacturing businesses to accurately calculate unit batch costs and packet selling prices by factoring in raw material wastage, multi-stage processing expenses (grinding, steaming, drying, electricity, labor), overhead margins, and session history persistence.',
    architecture: 'TypeScript domain models with client-side financial state aggregation, localStorage session serialization, and print-optimized reporting stylesheets.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'LocalStorage API'],
    github: 'https://github.com/Upadhya82/cost-manager',
    demo: '',
    highlights: [
      'Wastage-aware raw material costing with multi-stage operational expense tracking',
      'Dynamic packet sizing, packaging overheads, and customizable profit margins',
      'Session history persistence with save/load management and printable cost reports',
    ],
  },
  {
    id: 'traffic-management',
    title: 'AI Smart Traffic Management',
    tagline: 'Adaptive Traffic Signal Simulation & Flow Analysis',
    category: 'ai-ml',
    categoryLabel: 'AI & Simulation (In Progress)',
    status: 'In Progress',
    featured: true,
    description:
      'An intelligent traffic signal control and simulation framework currently under active development using Python. The system models multi-lane intersection approaches, computes directional traffic demand, and simulates dynamic vehicle arrival queues and delay metrics. Architected modularly to integrate planned OpenCV video stream ingestion and deep-learning object detection models for real-time adaptive signal control.',
    architecture: 'Modular Python package architecture with discrete modules for traffic demand calculation, queue state simulation, and automated test coverage.',
    technologies: ['Python 3.10+', 'Simulation Modeling', 'OpenCV (Planned)', 'NumPy', 'Algorithms'],
    github: 'https://github.com/Upadhya82/ai-smart-traffic-management',
    demo: '',
    highlights: [
      'Mathematical modeling of intersection approaches and directional traffic demand',
      'Dynamic queue simulation measuring vehicle arrival delays and flow rates',
      'Extensible architecture prepared for computer vision and detection models',
    ],
  },
  {
    id: 'workora',
    title: 'WORKORA',
    tagline: 'Digital Work & Opportunity Matching Platform',
    category: 'fullstack',
    categoryLabel: 'Web Platform (In Progress)',
    status: 'In Progress',
    featured: false,
    description:
      'An upcoming modern platform engineered to connect digital freelance talent with localized project opportunities. Currently undergoing system architecture design, database modeling, and component prototyping.',
    architecture: 'Designed for containerized deployment, microservice API contracts, and an intuitive user onboarding workflow.',
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Upadhya82',
    demo: '',
    highlights: [
      'Currently in active development with modular domain modeling',
      'Role-based access control and opportunity matchmaking design',
      'Planned CI/CD deployment with containerized environments',
    ],
  },
];

export const education = [
  {
    degree: 'Higher National Diploma in Information Technology (HND IT)',
    institution: 'Institute of Technology, University of Moratuwa',
    period: '2025 – 2027 · Currently Enrolled',
    status: 'Active',
    description:
      'Rigorous academic coursework encompassing Software Engineering, Object-Oriented System Design, Database Systems, Computer Networks, and Operating Systems.',
    highlights: [
      'Institute of Technology, University of Moratuwa, Sri Lanka',
      'Focus: Software Development, Infrastructure & System Design',
    ],
  },
  {
    degree: 'G.C.E. Advanced Level — Physical Science',
    institution: 'H/Walasmulle National School',
    period: 'Completed 2020',
    status: 'Completed',
    description:
      'Completed secondary education with high-school focus on Combined Mathematics, Physics, and Chemistry.',
    highlights: ['Combined Mathematics', 'Physics', 'Chemistry'],
  },
];

export const journeyTimeline = [
  {
    year: '2020',
    title: 'Foundation in Physical Sciences',
    subtitle: 'H/Walasmulle National School',
    description: 'Completed G.C.E. A/L in Physical Science stream, establishing analytical thinking and problem-solving foundation.',
    badge: 'Academics',
  },
  {
    year: '2025',
    title: 'Higher National Diploma in Information Technology',
    subtitle: 'Institute of Technology, University of Moratuwa',
    description: 'Commenced formal IT engineering studies, mastering programming fundamentals, algorithms, system architecture, and team software projects.',
    badge: 'Undergraduate',
  },
  {
    year: '2025 – 2026',
    title: 'Full-Stack Engineering & AI Explorations',
    subtitle: 'MicroLink, AI Traffic Management & Cost Manager',
    description: 'Engineered real-world applications using React, Python, FastAPI, PostgreSQL, and YOLO computer vision models.',
    badge: 'Development',
  },
  {
    year: '2026 & Beyond',
    title: 'DevOps, Cloud & Infrastructure Engineering',
    subtitle: 'Specializing in Automation & Reliability',
    description: 'Directing career trajectory towards DevOps and Cloud Engineering: Linux administration, Docker containerization, CI/CD with GitHub Actions, and cloud architecture.',
    badge: 'Core Focus',
  },
];
