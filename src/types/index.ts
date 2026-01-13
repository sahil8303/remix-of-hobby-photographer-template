/**
 * Core TypeScript interfaces for Developer Portfolio
 */

export type ProjectCategory = 'fullstack' | 'backend' | 'frontend' | 'api';

export type TechStack = string[];

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  techStack: TechStack;
  liveUrl?: string;
  githubUrl?: string;
  location?: string;
  slug: string;
}

export interface DeveloperInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  skills: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    softSkills: string[];
  };
  experience: {
    title: string;
    company: string;
    period: string;
    description: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    location: string;
    cgpa: string;
    period: string;
  };
  certificates: {
    name: string;
    issuer: string;
    link?: string;
  }[];
  extracurricular: {
    role: string;
    organization: string;
    description: string;
  }[];
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
  };
  portraitImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'collaboration' | 'job' | 'freelance' | 'other';
  message: string;
  timestamp: Date;
}
