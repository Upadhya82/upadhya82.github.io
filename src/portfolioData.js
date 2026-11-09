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
      'frontend-ui: React, JavaScript, TypeScript, Tailwind CSS [RUNNING]',
      'ai-vision: OpenCV, YOLO, Computer Vision [RUNNING]',
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
    id: 'backend',
    title: 'Backend Development',
    icon: 'database',
    description: 'Designing performant APIs, data persistence, caching, and business logic.',
    skills: [
      { name: 'Python', level: 'Core Scripting & Backend Logic', badge: 'Core' },
      { name: 'FastAPI', level: 'Asynchronous REST APIs & Swagger', badge: 'Core' },
      { name: 'PostgreSQL', level: 'Relational Schema Design & SQL', badge: 'Working' },
      { name: 'Redis', level: 'Caching & Session Store', badge: 'Working' },
      { name: 'REST APIs', level: 'Design, Endpoints & Authentication', badge: 'Core' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'code',
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
    description: 'Exploring computer vision and intelligent algorithmic systems.',
    skills: [
      { name: 'Computer Vision', level: 'Image Processing & Detection', badge: 'Project Focus' },
      { name: 'OpenCV', level: 'Video Stream Processing & Filters', badge: 'Working' },
      { name: 'YOLO', level: 'Object Detection & Tracking Models', badge: 'Applied' },
      { name: 'Python for AI', level: 'Data Preprocessing & Scripting', badge: 'Working' },
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
    tagline: 'AI & GPS Smart Micro Business Discovery System',
    category: 'fullstack',
    categoryLabel: 'Full-Stack / Distributed System',
    status: 'Featured Project',
    featured: true,
    description:
      'A comprehensive discovery and delivery platform engineered to connect local micro-businesses with nearby customers using GPS geo-fencing and smart recommendations. Built with a decoupled service architecture prioritizing speed and scalability.',
    architecture: 'React frontend interfacing with asynchronous FastAPI microservices, backed by PostgreSQL persistence and Redis in-memory caching.',
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'GPS / Maps API'],
    github: 'https://github.com/Upadhya82',
    demo: '',
    highlights: [
      'High-throughput asynchronous REST APIs built with FastAPI',
      'Geo-distance query optimization in PostgreSQL',
      'In-memory caching with Redis for rapid merchant discovery',
    ],
  },
  {
    id: 'traffic-management',
    title: 'AI Smart Traffic Management',
    tagline: 'Computer Vision Traffic Density & Flow Optimization',
    category: 'ai-ml',
    categoryLabel: 'AI & Computer Vision',
    status: 'Completed / Active',
    featured: true,
    description:
      'An intelligent traffic monitoring system using computer vision to detect, classify, and track vehicular density in real-time from traffic video feeds. Provides real-time metrics to calculate optimal signal switching intervals.',
    architecture: 'Python pipeline utilizing OpenCV stream ingestion and fine-tuned YOLO object detection weights with tracking logic.',
    technologies: ['Python', 'OpenCV', 'YOLO', 'Computer Vision', 'NumPy'],
    github: 'https://github.com/Upadhya82/ai-smart-traffic-management',
    demo: '',
    highlights: [
      'Real-time vehicle detection and lane-wise counting',
      'YOLO model inference pipeline for high accuracy',
      'Algorithmic density calculation to minimize congestion',
    ],
  },
  {
    id: 'cost-manager',
    title: 'Cost Manager',
    tagline: 'Personal Expense & Financial Tracking Application',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web Application',
    status: 'Completed',
    featured: true,
    description:
      'A clean, responsive personal expense management application designed for intuitive budget tracking, categorization of expenditures, and analytical financial insights with seamless user interactions.',
    architecture: 'Modular React UI with stateful financial aggregation, REST API communication, and dynamic category breakdown visualizers.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST API', 'Data Visualization'],
    github: 'https://github.com/Upadhya82/cost-manager',
    demo: '',
    highlights: [
      'Interactive monthly expenditure breakdowns and graphs',
      'Fast responsive client-side state management',
      'Clean utility-first responsive styling',
    ],
  },
  {
    id: 'workora',
    title: 'WORKORA',
    tagline: 'Digital Work & Opportunity Matching Platform',
    category: 'fullstack',
    categoryLabel: 'Web Platform (In Development)',
    status: 'In Development',
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
