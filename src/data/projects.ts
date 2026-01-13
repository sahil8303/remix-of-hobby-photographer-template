import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Airbnb Clone',
    category: 'fullstack',
    year: '2024',
    slug: 'airbnb-clone',
    coverImage: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'A full-stack web application that seamlessly integrates responsive front-end interfaces, server-side logic, and database connectivity, supporting active users with 30+ property listings.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'Git'],
    liveUrl: '#',
    githubUrl: '#',
    location: 'Personal Project',
    images: [
      {
        id: '1-1',
        src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Airbnb Clone Homepage',
        aspectRatio: 'landscape'
      },
      {
        id: '1-2',
        src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Property Listing Page',
        aspectRatio: 'landscape'
      },
      {
        id: '1-3',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Booking Interface',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '2',
    title: 'AssetFlow Inventory Management',
    category: 'fullstack',
    year: '2024',
    slug: 'assetflow-inventory',
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'A centralized inventory tracking system for 500+ club members, automating approval workflows via SMTP emails to reduce asset loss by 40%. Features rigorous feature engineering and hyperparameter tuning processes.',
    techStack: ['Node.js', 'Express.js', 'Vanilla JS', 'SQLite', 'SMTP'],
    liveUrl: '#',
    githubUrl: '#',
    location: 'VIT Vellore',
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Inventory Dashboard',
        aspectRatio: 'landscape'
      },
      {
        id: '2-2',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Asset Management Interface',
        aspectRatio: 'landscape'
      },
      {
        id: '2-3',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Analytics Dashboard',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '3',
    title: 'RESTful API Gateway',
    category: 'backend',
    year: '2024',
    slug: 'api-gateway',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'A scalable API gateway with rate limiting, JWT authentication, and request logging. Handles 10,000+ requests per minute with Redis caching and load balancing across multiple microservices.',
    techStack: ['Node.js', 'Express.js', 'Redis', 'JWT', 'PostgreSQL', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    location: 'Personal Project',
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'API Gateway Architecture',
        aspectRatio: 'landscape'
      },
      {
        id: '3-2',
        src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'API Documentation',
        aspectRatio: 'landscape'
      },
      {
        id: '3-3',
        src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Performance Metrics',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '4',
    title: 'Real-Time Chat Backend',
    category: 'backend',
    year: '2024',
    slug: 'realtime-chat',
    coverImage: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'A WebSocket-based real-time messaging backend supporting private chats, group conversations, and message persistence. Features online status tracking and typing indicators with MongoDB aggregation pipelines.',
    techStack: ['Node.js', 'Socket.io', 'MongoDB', 'Express.js', 'JWT'],
    liveUrl: '#',
    githubUrl: '#',
    location: 'Personal Project',
    images: [
      {
        id: '4-1',
        src: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Chat Interface',
        aspectRatio: 'landscape'
      },
      {
        id: '4-2',
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Real-time Messaging',
        aspectRatio: 'landscape'
      },
      {
        id: '4-3',
        src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'User Dashboard',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '5',
    title: 'E-Commerce Payment System',
    category: 'backend',
    year: '2024',
    slug: 'payment-system',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'A secure payment processing backend integrating Stripe and Razorpay APIs. Implements webhook handling, transaction logging, refund management, and PCI-compliant data handling with encryption.',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Stripe API', 'Redis', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    location: 'Personal Project',
    images: [
      {
        id: '5-1',
        src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Payment Dashboard',
        aspectRatio: 'landscape'
      },
      {
        id: '5-2',
        src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Transaction History',
        aspectRatio: 'landscape'
      },
      {
        id: '5-3',
        src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Analytics View',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '6',
    title: 'Task Queue Microservice',
    category: 'backend',
    year: '2024',
    slug: 'task-queue',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'A distributed task queue system using Bull and Redis for background job processing. Handles email notifications, image processing, and scheduled tasks with retry logic and dead-letter queues.',
    techStack: ['Node.js', 'Bull', 'Redis', 'MongoDB', 'Docker', 'PM2'],
    liveUrl: '#',
    githubUrl: '#',
    location: 'Personal Project',
    images: [
      {
        id: '6-1',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Queue Dashboard',
        aspectRatio: 'landscape'
      },
      {
        id: '6-2',
        src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'Job Monitoring',
        aspectRatio: 'landscape'
      },
      {
        id: '6-3',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        alt: 'System Metrics',
        aspectRatio: 'landscape'
      }
    ]
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
