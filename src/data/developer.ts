import type { DeveloperInfo } from '@/types';
import sahilPhoto from '@/assets/sahil-profile.jpg';

export const developerInfo: DeveloperInfo = {
  name: 'Sahil Kawadse',
  tagline: 'Aspiring Software Engineer',
  heroIntroduction: 'Building robust web applications with modern technologies and clean, maintainable code.',
  biography: `I'm an Electronics and Communication Engineering student at VIT Vellore, passionate about building scalable web applications and solving complex problems. With hands-on experience in full-stack development, I specialize in creating efficient backend systems and intuitive user interfaces.

My journey in software development has led me to work on diverse projects—from building full-stack applications like an Airbnb clone to developing inventory management systems that serve hundreds of users. I believe in writing clean, maintainable code and continuously learning new technologies to stay at the cutting edge of web development.`,
  approach: `I approach every project with a focus on scalability, performance, and user experience. Whether it's architecting RESTful APIs, designing database schemas, or crafting responsive frontends, I ensure that every component is built to last and easy to maintain.

My experience in collaborative environments has taught me the importance of clear communication, code reviews, and agile development practices. I'm always eager to take on new challenges and contribute to impactful projects.`,
  skills: {
    languages: ['C++', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    frameworks: ['Node.js', 'Express.js', 'GraphQL'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
    tools: ['Git', 'GitHub'],
    softSkills: ['Rapport Building', 'Stakeholder Management', 'People Management', 'Communication']
  },
  experience: [
    {
      title: 'Web Development Intern',
      company: 'Moodale',
      period: 'May 2025 - Jul 2025',
      description: [
        'Assisted in designing and developing the backend using core JavaScript concepts',
        'Collaborated with a team of 4 developers to build and maintain backend APIs using JavaScript and Express.js',
        'Implemented 5+ RESTful routes enhancing backend performance and maintainability',
        'Managed pull requests, code reviews, and seamless collaboration using Git and GitHub'
      ]
    }
  ],
  education: {
    degree: 'Bachelor of Technology in Electronics and Communication',
    institution: 'Vellore Institute of Technology',
    location: 'Vellore, India',
    cgpa: '9.14',
    period: '2022 - 2026'
  },
  certificates: [
    {
      name: 'SQL Bootcamp',
      issuer: 'Online Certification'
    },
    {
      name: 'C++ Data Structures and Algorithms',
      issuer: 'Udemy'
    }
  ],
  extracurricular: [
    {
      role: 'Outreach Head',
      organization: 'The Electronics Club, VIT Vellore',
      description: 'Spearheaded outreach initiatives, organizing technical workshops and hackathons that fostered collaboration and skill development.'
    },
    {
      role: 'Research Author',
      organization: 'Springer Nature',
      description: 'Co-authored and published research on optimizing RIS-assisted 6G networks, achieving significant improvements in Bit Error Rate (BER) and network capacity.'
    }
  ],
  location: 'Nagpur, Maharashtra, India',
  email: 'kawadsesahil07@gmail.com',
  phone: '+91 8530290669',
  availability: 'Open to opportunities for 2026',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/sahil-kawadse-34829624a/',
    github: 'https://github.com/sahil8303'
  },
  portraitImage: sahilPhoto
};
