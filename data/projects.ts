import { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Agentic Platform',
    slug: 'agentic-platform',
    description:
      'A platform enabling non-technical users to launch AI agents via natural language, automating prompt, schema, and workflow generation.',
    longDescription: `Enabled non-technical users to launch AI agents via natural language, cutting setup time from hours to minutes through automated prompt, schema, and workflow generation. Drove enterprise adoption by automating agent provisioning, secure context retrieval, and multi-surface publishing (chat, APIs, embeds, share links). Built a scalable multi-agent architecture with LangGraph, LangChain, adaptive memory, and resilient integration patterns.`,
    image: '/images/projects/agentic-platform-thumbnail.jpg',
    techStack: [
      'LangGraph',
      'LangChain',
      'MCP',
      'React',
      'TypeScript',
      'RDS Database',
      'Python',
    ],
    category: ['Machine Learning', 'Web Development'],
    liveUrl: 'https://youtu.be/RolvV46x11A',
    featured: true,
    date: '2024-12',
    highlights: [
      'Enabled non-technical users to launch AI agents via natural language',
      'Cut setup time from hours to minutes through automated generation',
      'Built scalable multi-agent architecture with LangGraph and LangChain',
      'Increased deployment success by 30% with robust monitoring',
      'Automated agent provisioning, secure context retrieval, and multi-surface publishing',
    ],
  },
  {
    id: '2',
    title: 'Fracture Detection in X-ray Imaging',
    slug: 'fracture-detection',
    description:
      'Deep learning model combining CNNs and Vision Transformers for automated fracture detection in X-ray images.',
    longDescription: `Enabled automated fracture detection by building a deep learning model combining CNNs and Vision Transformers. Increased fracture classification accuracy from 85% to 92% by optimizing model architecture, directly improving diagnostic reliability. Improved spatial feature extraction by integrating EfficientNet B0, boosting model performance on the FracAtlas dataset.`,
    image: '/images/projects/fracture-detection-thumbnail.jpg',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Vision Transformers', 'EfficientNet'],
    category: ['Machine Learning'],
    githubUrl: 'https://github.com/zijin-qin/fracture-detection',
    featured: true,
    date: '2024-06',
    highlights: [
      'Enabled automated fracture detection using deep learning',
      'Increased classification accuracy from 85% to 92%',
      'Integrated EfficientNet B0 for improved spatial feature extraction',
      'Optimized model architecture for better diagnostic reliability',
    ],
  },
  {
    id: '3',
    title: 'Fake News Detection using Transformers',
    slug: 'fake-news-detection',
    description:
      'Transformer-based model trained on article content and social context from real-world datasets for fake news detection.',
    longDescription: `Explored fake news detection using a Transformer-based model trained on article content and social context from real-world datasets. Assessed model accuracy using F1, AUC-ROC, and adversarial benchmarks across LIAR, BuzzFeed-Webis, and FakeNewsNet. Improved model reliability by identifying key failure modes and proposing ensemble-based enhancements.`,
    image: '/images/projects/fake-news-thumbnail.jpg',
    techStack: ['Python', 'PyTorch', 'BERT', 'NLP', 'Transformers'],
    category: ['Machine Learning'],
    featured: false,
    date: '2024-03',
    highlights: [
      'Built Transformer-based fake news detection model',
      'Trained on LIAR, BuzzFeed-Webis, and FakeNewsNet datasets',
      'Assessed accuracy using F1, AUC-ROC, and adversarial benchmarks',
      'Identified failure modes and proposed ensemble-based enhancements',
    ],
  },
  {
    id: '4',
    title: 'S&P 500 Movement Prediction',
    slug: 'sp500-prediction',
    description:
      'Machine learning model analyzing historical stock data to predict S&P 500 directional movement.',
    longDescription: `Engineered a machine learning model analyzing historical stock data to predict S&P 500 directional movement. Improved forecasting accuracy by 18%, providing better insights for investment decision-making. Utilized advanced ML algorithms, enhancing prediction reliability compared to traditional models.`,
    image: '/images/projects/sp500-thumbnail.jpg',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    category: ['Machine Learning', 'Data Science'],
    featured: false,
    date: '2023-11',
    highlights: [
      'Engineered ML model for S&P 500 movement prediction',
      'Improved forecasting accuracy by 18%',
      'Analyzed historical stock data for pattern recognition',
      'Enhanced prediction reliability vs traditional models',
    ],
  },
  {
    id: '5',
    title: 'DEV Journal - Developer Work Journal App',
    slug: 'dev-journal',
    description:
      'Cross-platform work journal app for tracking developer tasks, notes, and goals.',
    longDescription: `Led the development of a cross-platform work journal app for tracking developer tasks, notes, and goals. Designed a backend system in Node.js, ensuring efficient data handling and user experience. Implemented markdown support and a labeling system to enhance note organization.`,
    image: '/images/projects/dev-journal-thumbnail.jpg',
    techStack: ['JavaScript', 'Electron', 'React', 'Node.js'],
    category: ['Web Development'],
    featured: false,
    date: '2023-08',
    highlights: [
      'Led development of cross-platform work journal app',
      'Designed efficient backend system with Node.js',
      'Implemented markdown support for rich text notes',
      'Built labeling system for enhanced note organization',
    ],
  },
]

// Helper function to get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

// Helper function to get projects by category
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects
  return projects.filter((project) => project.category.includes(category))
}
