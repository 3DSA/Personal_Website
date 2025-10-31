import { Experience, Education } from '@/lib/types'

export const experiences: Experience[] = [
  {
    title: 'A.I./M.L. Engineer',
    company: 'Advantis @ Apple',
    location: 'Cupertino, CA',
    startDate: '2025-05',
    endDate: 'Present',
    description: [
      'Cut $8M in annual cloud costs by engineering an AWS optimization script that identified and reallocated underutilized EC2 GPU workloads across ML teams',
      'Reduced S3 storage expenses by $4M through detailed usage analysis and automated cross tier migration',
      'Accelerated root-cause analysis by 90% and improved debugging precision by enhancing Apple\'s Agentic AI system with adaptive iteration control, severity-aware scoring, and intelligent log retrieval',
      'Developed an internal ML Agent leveraging Apple\'s MCP framework, accelerating engineering workflows and reducing dev cycle time',
      'Achieved real time and historical visibility into GPU resource usage by developing a Lambda based data pipeline that ingested cross account metrics into a PostgreSQL time-series database',
      'Saved $3M annually by migrating observability stack to Apple native tools, eliminating vendor lock in and improving precision',
      'Replaced reliance on third party monitoring tools and improved telemetry accuracy by designing and deploying Go based collectors as node agents that streamed system and GPU metrics into Apple\'s internal observability platform',
    ],
    technologies: [
      'Python',
      'Go',
      'AWS',
      'Lambda',
      'PostgreSQL',
      'Agentic AI',
      'MCP',
      'GPU Optimization',
    ],
  },
  {
    title: 'A.I Researcher',
    company: 'HandshakeAI @ OpenAI',
    location: 'Remote',
    startDate: '2025-10',
    endDate: 'Present',
    description: [
      'Evaluated LLM outputs using rubric-driven frameworks to assess factuality, linguistic precision, & task alignment across web domains',
      'Accelerated model improvement by identifying recurring failure patterns & translating them into research insights & protocol updates',
    ],
    technologies: ['LLMs', 'Evaluation Frameworks', 'Research', 'NLP'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Calix',
    location: 'Hybrid',
    startDate: '2024-07',
    endDate: '2024-10',
    description: [
      'Streamlined debugging and accelerated development workflows by 30% through engineering a component versioning module that surfaced code regressions and mismatches early in the CI pipeline',
      'Reduced integration errors by 40% by building a command-line tool to validate schema compliance before deployment',
      'Improved CI pipeline responsiveness and cut dev turnaround time by 25% by automating Bamboo bug report routing',
    ],
    technologies: ['Python', 'CI/CD', 'Bamboo', 'Schema Validation', 'Automation'],
  },
  {
    title: 'A.I./M.L. Engineer Intern',
    company: 'FlowAI',
    location: 'Remote',
    startDate: '2024-03',
    endDate: '2024-07',
    description: [
      'Improved the decision making performance of adaptive systems by integrating Reinforcement Learning algorithms, enabling dynamic strategy adjustment based on real-time feedback',
      'Reduced lead data retrieval latency by 50% by developing a backend system optimized for concurrent processing',
      'Boosted user contact automation by 35% through designing and deploying a CRM backend that unified data from APIs',
    ],
    technologies: [
      'Python',
      'Reinforcement Learning',
      'Backend Development',
      'API Integration',
      'CRM',
    ],
  },
]

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of California, San Diego',
    location: 'San Diego, CA',
    startDate: '2022-10',
    endDate: '2025-07',
    description:
      'Focused on Machine Learning, Artificial Intelligence, and Software Engineering. Completed projects on deep learning, reinforcement learning, and full-stack development.',
  },
]

// Helper functions
export function getCurrentExperience(): Experience | undefined {
  return experiences.find((exp) => exp.endDate === 'Present')
}

export function getAllExperiences(): Experience[] {
  return experiences
}

export function getEducation(): Education[] {
  return education
}
