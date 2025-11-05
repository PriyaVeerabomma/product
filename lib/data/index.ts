// Portfolio Content
export interface Social {
  name: string
  url: string
  icon: string
}

export interface Skill {
  name: string
  proficiency: number
  category: string
  icon?: string
}

export interface Education {
  institution: string
  degree: string
  startDate: string
  endDate: string
  location: string
  description: string
  courses?: string[]
}

export interface Experience {
  company: string
  position: string
  startDate: string
  endDate: string
  location: string
  description: string
  achievements: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  thumbnail: string
  technologies: string[]
  category: string[]
  demoUrl?: string
  codeUrl?: string
  featured: boolean
  hidden?: boolean // Added hidden property
  details?: string
  objectives?: string[]
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
}

export const personal = {
  name: "Sai Priya Veerabomma",
  role: "Machine Learning Engineer & Software Developer",
  description:
    "Specialized in building AI-powered applications and data-driven solutions with expertise in LangChain, TensorFlow, and cloud architecture.",
  photo: "/images/profile-photo.jpg",
  location: "Seattle, WA",
  email: "veerabomma.s@northeastern.edu",
  phone: "(425)-472-9225",
}

// Update the socials array with the correct URLs
export const socials: Social[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/priya-veerabomma/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/PriyaVeerabomma",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:veerabomma.s@northeastern.edu",
    icon: "mail",
  },
]

export const skills: Skill[] = [
  // ML/AI Category
  { name: "LangChain", proficiency: 90, category: "ML/AI" },
  { name: "TensorFlow", proficiency: 85, category: "ML/AI" },
  { name: "OpenAI", proficiency: 90, category: "ML/AI" },
  { name: "NLTK", proficiency: 80, category: "ML/AI" },
  { name: "ElasticSearch", proficiency: 85, category: "ML/AI" },
  { name: "Pinecone", proficiency: 80, category: "ML/AI" },

  // Data Engineering Category
  // { name: "Python", proficiency: 95, category: "Data Engineering" },
  // { name: "Apache Airflow", proficiency: 85, category: "Data Engineering" },
  // { name: "Snowflake", proficiency: 88, category: "Data Engineering" },
  // { name: "DBT", proficiency: 82, category: "Data Engineering" },
  // { name: "PostgreSQL", proficiency: 90, category: "Data Engineering" },
  // { name: "MongoDB", proficiency: 85, category: "Data Engineering" },
  // { name: "MySQL", proficiency: 88, category: "Data Engineering" },
  // { name: "Redis", proficiency: 85, category: "Data Engineering" },
  // { name: "Vector Databases", proficiency: 80, category: "Data Engineering" },
  // { name: "Pandas", proficiency: 92, category: "Data Engineering" },
  // { name: "NumPy", proficiency: 90, category: "Data Engineering" },
  // { name: "Matplotlib", proficiency: 85, category: "Data Engineering" },
  // { name: "Seaborn", proficiency: 83, category: "Data Engineering" },
  // { name: "Advanced Excel", proficiency: 88, category: "Data Engineering" },

  // Backend Category
  { name: "FastAPI", proficiency: 90, category: "Backend" },
  { name: "Node.js", proficiency: 85, category: "Backend" },
  { name: "Express.js", proficiency: 85, category: "Backend" },
  { name: "Spring Boot", proficiency: 75, category: "Backend" },
  { name: "Hibernate", proficiency: 70, category: "Backend" },
  { name: "dotnet", proficiency: 90, category: "Backend" },
  { name: "Object Oriented Design", proficiency: 90, category: "Backend" },
  { name: "Microservices", proficiency: 90, category: "Backend" },
  { name: "RESTful APIs", proficiency: 90, category: "Backend" },
  { name: "GraphQL", proficiency: 80, category: "Backend" },
  { name: "Asynchronous Programming", proficiency: 85, category: "Backend" },
  { name: "Message Queues", proficiency: 80, category: "Backend" },
  { name: "Postman", proficiency: 80, category: "Backend" },


  // Frontend Category
  { name: "React.js", proficiency: 85, category: "Frontend" },
  { name: "TypeScript", proficiency: 90, category: "Frontend" },
  { name: "JavaScript", proficiency: 90, category: "Frontend" },
  { name: "HTML", proficiency: 95, category: "Frontend" },
  { name: "CSS", proficiency: 85, category: "Frontend" },

  // Cloud Category
  { name: "AWS", proficiency: 85, category: "Cloud" },
  { name: "Azure", proficiency: 80, category: "Cloud" },
  { name: "GCP", proficiency: 75, category: "Cloud" },

  // DevOps Category
  { name: "Docker", proficiency: 90, category: "DevOps" },
  { name: "Kubernetes", proficiency: 85, category: "DevOps" },
  { name: "Terraform", proficiency: 80, category: "DevOps" },
  { name: "CI/CD", proficiency: 85, category: "DevOps" },
  { name: "Github Actions", proficiency: 90, category: "DevOps" },

  // Database Category (keeping some here for backward compatibility)
  { name: "Tableau", proficiency: 80, category: "Database" },
  { name: "DynamoDB", proficiency: 80, category: "Database" },
]

export const education: Education[] = [
  {
    institution: "Northeastern University",
    degree: "Master of Science in Computer Software Engineering",
    startDate: "September 2023",
    endDate: "August 2025",
    location: "Boston, MA",
    description: "Focused on advanced software engineering methodologies and AI/ML applications.",
    courses: [
      "Generative AI & Applications",
      "Data Management & Design",
      "Network Structure & Cloud Computing",
      "Big Data Systems & Intelligence Analytics",
      "Prompt Engineering",
    ],
  },
]

export const experiences: Experience[] = [
  {
    company: "Northeastern Business Services",
    position: "Software Engineer",
    startDate: "January 2025",
    endDate: "August 2025",
    location: "Boston, MA",
    description:
      "Responsible for data analysis and visualization of financial transactions to drive business decisions.",
    achievements: [
      "Conducted data analysis on 100K+ financial transactions using Excel, Tableau, and Python, delivering actionable insights that optimized budget allocations.",
      "Implemented sentiment analysis on student feedback data using Python and NLTK, analyzing 5000+ responses to identify key areas for service improvement, achieving 80% correlation with manual review results.",
      "Aided in budgeting and forecasting by implementing financial modeling techniques in Python and Excel, improving accuracy of financial projections by 20%.",
    ],
  },
  {
    company: "Astir IT",
    position: "Software Development Engineer Intern",
    startDate: "September 2024",
    endDate: "January 2025",
    location: "New Jersey, USA",
    description: "Developed AI-powered document intelligence systems for financial data analysis.",
    achievements: [
      "Designed a pilot RAG platform (LangChain) that combined semantic search with vector databases, reducing document retrieval latency by 60% in internal testing.",
      "Built 4 REST APIs and written data ingestion scripts, applying SQL indexing strategies to ensure low-latency queries and streamlining manual extraction processes for operations teams.",
      "Implemented structured logging, monitoring pipelines, and A/B testing workflows, improving response relevance by 15% and enabling faster issue detection.",
    ],
  },
  {
    company: "Cognizant Technology Solutions Pvt Ltd – Verizon Network Analytics (Client) ",
    position: "Software Development Engineer",
    startDate: "October 2021",
    endDate: "July 2023",
    location: "Hyderabad, India",
    description:
      "Responsible for developing and maintaining data pipelines and machine learning models for system optimization.",
    achievements: [
      "Collaborated with senior architects on a microservices-based network analytics platform, onboarding new network devices into the infrastructure which resulted in increment of 2000+ customers in 2 weeks of product release.",
      "Managed the QA deployment process with cybersecurity approval, ensured 95% code coverage in SonarQube, and leading ElasticSearch-based log analysis to track the bugs and improve latency between API calls by 35%.",
      "Reduced manual workload by 70% by implementing a server-side script for automated bug tracking during builds.",
      "Developed a serverless webhook service integrated with RabbitMQ to trigger background processes and enable scalable, asynchronous event handling.",
      "Optimized and enhanced code performance through parallel execution, achieving 30% improvement in execution speed, deployed the project within the project deadline, focusing on scalability, low latency and monitoring.",
    ],
  },
]

export const projects: Project[] = [
  {
    id: "fraud-detection",
    title: "Real-Time Fraud Detection",
    description: "A comprehensive real time fraud detection project",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["Java", "Akka Actor Model", "Qdrant", "AgenticAI"],
    category: ["AI/ML", "Web", "Backend"],
    codeUrl: "https://github.com/PriyaVeerabomma/akka-rag-cluster",
    featured: true,
    details:
      "This repository contains the Big Data Hackathon project for the DAMG7245 course. The project focuses on implementing big data analytics techniques to solve real-world problems.",
    objectives: [
      "Engineered a fault-tolerant, distributed backend using ",
      "the Akka Actor Model, applying message-driven design",
      "for scalability and resilience across a 3-node cluster",
      "with 20+ concurrent actors, and integrated Qdrant vector search to",
      "enable real-time anomaly detection with sub-second response times.",
    ],
  },
  {
    id: "multi-agent-ai-platform",
    title: "Multi-Agent AI Platform - TravelBuddy",
    description: "A comprehensive Agentic AI project for real-time travel assistance.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["AI Agents", "Twilio", "LangGraph", "FastAPI", "React", "AWS S3", "Snowflake", "DBT"],
    category: ["AI/ML", "Data Science"],
    codeUrl: "https://github.com/PriyaVeerabomma/MultiAgent-RAG",
    featured: true,
    details:
      "This repository contains the Agentic AI project for the DAMG7245 course. The project focuses on implementing Agentic AI techniques to solve real-world problems.",
    objectives: [
      "Built a multi-agent AI platform using LangGraph",
      "with 4 autonomous agents and 11 APIs, enabling real-time travel",
      "assistance through orchestration of search, itineary, and ",
      "recommendation workflows",
    ],
  },
  // DAMG7245 Course Projects
  {
    id: "bigdata-hackathon",
    title: "Big Data Hackathon",
    description: "A comprehensive big data analytics project for the DAMG7245 course.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Big Data", "Data Analytics", "MIT License"],
    category: ["Academic", "Data Science"],
    codeUrl: "https://github.com/DAMG7245/BigData-Hackathon",
    featured: false,
    details:
      "This repository contains the Big Data Hackathon project for the DAMG7245 course. The project focuses on implementing big data analytics techniques to solve real-world problems.",
    objectives: [
      "Implement big data processing pipelines",
      "Apply data analytics techniques to extract insights",
      "Develop scalable solutions for large datasets",
      "Create visualizations to communicate findings effectively",
    ],
  },
  {
    id: "multi-agent-raag",
    title: "Multi-Agent RAAG Application",
    description: "A multi-agent system implementing Retrieval Augmented Generation for advanced AI applications.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "LangChain", "RAG", "Vector Databases", "LLMs"],
    category: ["AI/ML", "Academic"],
    codeUrl: "https://github.com/DAMG7245/Assignment5A",
    featured: false,
    details:
      "Developed a Multi-Agent RAAG (Retrieval Augmented Generation) Application that leverages multiple AI agents to enhance information retrieval and generation capabilities. The system uses vector databases for efficient knowledge retrieval and LLMs for generating contextually relevant responses.",
    objectives: [
      "Design and implement a multi-agent system architecture",
      "Integrate retrieval augmented generation techniques",
      "Optimize information retrieval from vector databases",
      "Enhance response quality through agent collaboration",
    ],
  },
  {
    id: "assignment4b",
    title: "Advanced Data Processing Pipeline",
    description: "A comprehensive data processing pipeline for the DAMG7245 course.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Data Processing", "ETL", "MIT License"],
    category: ["Academic", "Data Science", /*"Data Engineering"*/],
    codeUrl: "https://github.com/DAMG7245/Assignment4B",
    featured: false,
    details:
      "This repository contains Assignment 4B for the DAMG7245 course, focusing on building advanced data processing pipelines. The project implements ETL processes and data transformation techniques.",
  },
  {
    id: "assignment4a",
    title: "Data Streaming Application",
    description: "A real-time data streaming application with analytics capabilities.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Kafka", "Spark Streaming", "Real-time Analytics"],
    category: ["Academic", /*"Data Engineering", */"Data Science"],
    codeUrl: "https://github.com/DAMG7245/ASSIGNMENT4A",
    featured: false,
    details:
      "Developed a data streaming application that processes and analyzes data in real-time. The system uses Kafka for message queuing and Spark Streaming for processing continuous data streams.",
  },
  {
    id: "assignment3b",
    title: "Interactive Data Analysis",
    description: "Interactive Jupyter notebooks for advanced data analysis and visualization.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["Jupyter Notebook", "Data Analysis", "Visualization", "MIT License"],
    category: ["Academic", "Data Science"],
    codeUrl: "https://github.com/DAMG7245/Assignment3B",
    featured: false,
    details:
      "This project contains interactive Jupyter notebooks for performing advanced data analysis and creating insightful visualizations. The notebooks demonstrate various techniques for exploring and understanding complex datasets.",
  },
  {
    id: "spring-course-assignment03",
    title: "Spring 2025 - Assignment 03",
    description: "Advanced data processing and analysis techniques for the DAMG7245 Spring 2025 course.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["Jupyter Notebook", "Data Processing", "Analysis", "MIT License"],
    category: ["Academic", "Data Science"],
    codeUrl: "https://github.com/DAMG7245/Assignment03",
    featured: false,
    details:
      "This repository is for Assignment 03 for the DAMG7245-Spring 2025 course. It focuses on implementing advanced data processing techniques and performing in-depth analysis of complex datasets.",
  },
  {
    id: "spring-course-assignment02",
    title: "Spring 2025 - Assignment 02",
    description: "Data modeling and database design project for the DAMG7245 Spring 2025 course.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["Jupyter Notebook", "Database Design", "Data Modeling", "MIT License"],
    category: ["Academic", "Database"],
    codeUrl: "https://github.com/DAMG7245/Assignment02",
    featured: false,
    details:
      "Assignment 02 for the DAMG7245-Spring 2025 course, focusing on data modeling and database design principles. The project demonstrates best practices for designing efficient and scalable database structures.",
  },
  {
    id: "assignment01",
    title: "Data Fundamentals",
    description: "Foundational data processing and analysis techniques.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Data Processing", "Analysis"],
    category: ["Academic", "Data Science"],
    codeUrl: "https://github.com/DAMG7245/Assignment01",
    featured: false,
    details:
      "This repository contains Assignment 01, focusing on fundamental data processing and analysis techniques. The project establishes the groundwork for more advanced data engineering and analysis concepts.",
  },
  // Original projects
  {
    id: "crisisconnect",
    title: "CrisisConnect",
    description: "Emergency response platform providing real-time coordination during crisis events.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Socket.io", "Mapbox API"],
    category: ["Web", "Full Stack"],
    demoUrl: "https://crisisconnect.demo",
    codeUrl: "https://github.com/PriyaVeerabomma/crisisconnect",
    featured: true,
    details:
      "Built scalable backend using Node.js and MongoDB with efficient geospatial indexing, handling 1000+ requests/second with sub-100ms response time. Implemented custom caching layer and integrated machine learning models for emergency prediction, reducing database load by 70% with 92% prediction accuracy.",
    objectives: [
      "Create a real-time emergency response coordination platform",
      "Implement geospatial tracking and resource allocation",
      "Develop predictive models for emergency response optimization",
      "Build a responsive interface for both mobile and desktop users",
    ],
  },
  {
    id: "deepdocai",
    title: "DeepDocAI",
    description: "AI-powered document analysis platform with advanced semantic search capabilities.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Docker", "ElasticSearch", "OpenAI API", "LangChain", "Pinecone", "FastAPI", "React"],
    category: ["AI/ML", "Backend"],
    demoUrl: "https://deepdocai.demo",
    codeUrl: "https://github.com/PriyaVeerabomma/deepdocai",
    featured: false,
    details:
      "Implemented Retrieval-Augmented Generation (RAG), improving query accuracy by 35% and reducing response time by 50%. Enhanced data indexing with ElasticSearch and streamlined deployment using Docker for scalable performance. Improved semantic search with LangChain, Pinecone, and OpenAI, supporting multi-format document retrieval.",
    objectives: [
      "Build an intelligent document processing system with semantic understanding",
      "Implement efficient document indexing and retrieval mechanisms",
      "Create a user-friendly interface for document querying and analysis",
      "Ensure secure and scalable deployment architecture",
    ],
  },
  {
    id: "smartbudget",
    title: "SmartBudget",
    description: "AI-powered personal finance management application with predictive analytics.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "TensorFlow.js", "Firebase", "Node.js", "Express", "Plaid API"],
    category: ["AI/ML", "Web", "Full Stack"],
    demoUrl: "https://smartbudget.demo",
    codeUrl: "https://github.com/PriyaVeerabomma/smartbudget",
    featured: false,
    details:
      "Developed a cross-platform application using React with TensorFlow.js for on-device spending pattern analysis. Integrated with Plaid API for secure bank connections and implemented Firebase for real-time data synchronization. Created personalized budget recommendations based on historical spending patterns.",
    objectives: [
      "Create an intuitive finance management application",
      "Implement secure banking integrations with privacy protection",
      "Develop predictive models for spending pattern analysis",
      "Design an engaging UI/UX for financial data visualization",
    ],
  },
  {
    id: "healthtracker",
    title: "HealthTracker",
    description: "Comprehensive health monitoring system with wearable device integration.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Python", "TensorFlow", "AWS", "GraphQL", "MongoDB"],
    category: ["Web", "AI/ML", "Full Stack"],
    demoUrl: "https://healthtracker.demo",
    codeUrl: "https://github.com/PriyaVeerabomma/healthtracker",
    featured: false,
    hidden: false, // Example of using the hidden property
    details:
      "Built a health monitoring application using React with real-time data processing from wearable devices. Implemented machine learning models for health trend analysis and early warning detection. Designed a scalable backend architecture using AWS services for data processing and storage.",
    objectives: [
      "Create a comprehensive health monitoring ecosystem",
      "Implement secure data collection from various wearable devices",
      "Develop predictive health analytics using machine learning",
      "Design an accessible interface for users of all ages",
    ],
  },
]
