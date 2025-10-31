import { Skill } from '@/lib/types'

export const skills: Skill[] = [
  // Languages
  {
    name: 'Python',
    category: 'Language',
    level: 'Expert',
  },
  {
    name: 'Go',
    category: 'Language',
    level: 'Advanced',
  },
  {
    name: 'Java',
    category: 'Language',
    level: 'Advanced',
  },
  {
    name: 'C++',
    category: 'Language',
    level: 'Advanced',
  },
  {
    name: 'C',
    category: 'Language',
    level: 'Intermediate',
  },
  {
    name: 'SQL',
    category: 'Language',
    level: 'Advanced',
  },
  {
    name: 'Bash',
    category: 'Language',
    level: 'Advanced',
  },
  {
    name: 'JavaScript',
    category: 'Language',
    level: 'Advanced',
  },
  {
    name: 'TypeScript',
    category: 'Language',
    level: 'Advanced',
  },
  {
    name: 'HTML/CSS',
    category: 'Language',
    level: 'Advanced',
  },

  // ML/AI
  {
    name: 'LangGraph',
    category: 'Framework',
    level: 'Expert',
  },
  {
    name: 'LangChain',
    category: 'Framework',
    level: 'Expert',
  },
  {
    name: 'TensorFlow',
    category: 'Framework',
    level: 'Advanced',
  },
  {
    name: 'PyTorch',
    category: 'Framework',
    level: 'Advanced',
  },
  {
    name: 'Scikit-learn',
    category: 'Framework',
    level: 'Advanced',
  },
  {
    name: 'Pandas',
    category: 'Framework',
    level: 'Expert',
  },
  {
    name: 'NumPy',
    category: 'Framework',
    level: 'Expert',
  },
  {
    name: 'Matplotlib',
    category: 'Framework',
    level: 'Advanced',
  },

  // Web Frameworks
  {
    name: 'Flask',
    category: 'Framework',
    level: 'Advanced',
  },
  {
    name: 'FastAPI',
    category: 'Framework',
    level: 'Advanced',
  },
  {
    name: 'Streamlit',
    category: 'Framework',
    level: 'Intermediate',
  },
  {
    name: 'React',
    category: 'Framework',
    level: 'Advanced',
  },

  // Cloud/DevOps Tools
  {
    name: 'AWS EC2',
    category: 'Tool',
    level: 'Advanced',
  },
  {
    name: 'AWS S3',
    category: 'Tool',
    level: 'Advanced',
  },
  {
    name: 'AWS Lambda',
    category: 'Tool',
    level: 'Advanced',
  },
  {
    name: 'AWS EKS',
    category: 'Tool',
    level: 'Intermediate',
  },
  {
    name: 'AWS ECS',
    category: 'Tool',
    level: 'Intermediate',
  },
  {
    name: 'Docker',
    category: 'Tool',
    level: 'Advanced',
  },
  {
    name: 'Kubernetes',
    category: 'Tool',
    level: 'Advanced',
  },
  {
    name: 'Terraform',
    category: 'Tool',
    level: 'Intermediate',
  },
  {
    name: 'Ansible',
    category: 'Tool',
    level: 'Intermediate',
  },
  {
    name: 'Jenkins',
    category: 'Tool',
    level: 'Intermediate',
  },
  {
    name: 'Git',
    category: 'Tool',
    level: 'Expert',
  },
  {
    name: 'Linux',
    category: 'Tool',
    level: 'Advanced',
  },

  // Big Data & Monitoring
  {
    name: 'Apache Spark',
    category: 'Tool',
    level: 'Intermediate',
  },
  {
    name: 'Hadoop',
    category: 'Tool',
    level: 'Beginner',
  },
  {
    name: 'Kafka',
    category: 'Tool',
    level: 'Intermediate',
  },
  {
    name: 'Airflow',
    category: 'Tool',
    level: 'Intermediate',
  },
  {
    name: 'Prometheus',
    category: 'Tool',
    level: 'Advanced',
  },
  {
    name: 'Grafana',
    category: 'Tool',
    level: 'Advanced',
  },
  {
    name: 'Tableau',
    category: 'Tool',
    level: 'Beginner',
  },
  {
    name: 'Power BI',
    category: 'Tool',
    level: 'Beginner',
  },

  // Databases
  {
    name: 'PostgreSQL',
    category: 'Database',
    level: 'Expert',
  },
  {
    name: 'MySQL',
    category: 'Database',
    level: 'Advanced',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    level: 'Advanced',
  },

  // APIs & Practices
  {
    name: 'REST APIs',
    category: 'Other',
    level: 'Expert',
  },
  {
    name: 'GraphQL',
    category: 'Other',
    level: 'Intermediate',
  },
  {
    name: 'Postman',
    category: 'Other',
    level: 'Advanced',
  },
  {
    name: 'Agile/Scrum',
    category: 'Other',
    level: 'Advanced',
  },
  {
    name: 'CI/CD',
    category: 'Other',
    level: 'Advanced',
  },
  {
    name: 'TDD',
    category: 'Other',
    level: 'Advanced',
  },
  {
    name: 'Agentic AI',
    category: 'Other',
    level: 'Expert',
  },
  {
    name: 'Multi-Agent Systems',
    category: 'Other',
    level: 'Advanced',
  },
  {
    name: 'Prompt Engineering',
    category: 'Other',
    level: 'Expert',
  },
  {
    name: 'Vector DBs',
    category: 'Other',
    level: 'Advanced',
  },
]

// Helper function to get skills by category
export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category)
}

// Helper function to get all skill categories
export function getSkillCategories(): string[] {
  return Array.from(new Set(skills.map((skill) => skill.category)))
}
