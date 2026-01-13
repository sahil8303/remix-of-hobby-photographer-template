import { motion } from 'framer-motion';
import { developerInfo } from '@/data/developer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Code, Database, Server, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { FloatingCodeIcons } from '@/components/ui/FloatingCodeIcons';

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases developer's best work with stunning animations
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen">
        {/* Hero Section - Full viewport with floating code icons */}
        <section className="relative h-screen w-full overflow-hidden bg-background">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 dark:from-purple-500/20 dark:via-transparent dark:to-cyan-500/20" />
          
          {/* Floating Code Icons */}
          <FloatingCodeIcons />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }} 
            />
          </div>

          {/* Hero Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-6 z-20">
            <motion.div
              className="text-center space-y-8 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Animated Badge */}
              <motion.div
                className="flex justify-center gap-2 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge 
                    variant="outline" 
                    className="text-sm font-light px-5 py-2 border-purple-500/50 bg-purple-500/10 text-purple-600 dark:text-purple-300 backdrop-blur-sm"
                  >
                    <Terminal className="size-3 mr-2" />
                    Backend Developer
                  </Badge>
                </motion.div>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-widest"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 dark:from-purple-400 dark:via-cyan-400 dark:to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto]"
                  animate={{
                    backgroundPosition: ['0% center', '200% center'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {developerInfo.name.split(' ')[0].toUpperCase()}
                </motion.span>
              </motion.h1>
              
              {/* Tagline */}
              <motion.p
                className="text-xl md:text-3xl font-light tracking-wide text-foreground/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <span className="text-cyan-500">&lt;</span>
                {developerInfo.tagline}
                <span className="text-cyan-500"> /&gt;</span>
              </motion.p>

              {/* Introduction */}
              <motion.p
                className="text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {developerInfo.heroIntroduction}
              </motion.p>

              {/* Tech Stack with hover effects */}
              <motion.div
                className="flex flex-wrap justify-center gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                {[
                  { icon: Server, label: 'Node.js', color: 'from-green-400 to-green-600' },
                  { icon: Code, label: 'Express.js', color: 'from-cyan-400 to-cyan-600' },
                  { icon: Database, label: 'MongoDB', color: 'from-purple-400 to-purple-600' },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.label}
                    className="group relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                    <div className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-foreground/80 group-hover:text-foreground group-hover:border-primary/30 transition-all duration-300">
                      <tech.icon className="size-4" />
                      <span className="text-sm font-light">{tech.label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap justify-center gap-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/portfolio"
                    className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium overflow-hidden shadow-lg shadow-purple-500/25"
                  >
                    <span className="relative z-10">View Projects</span>
                    <ArrowRight className="size-4 relative z-10 transition-transform group-hover:translate-x-1" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-border text-foreground font-medium hover:bg-accent hover:border-primary/30 transition-all duration-300"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* Skills Section with Glass Cards */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background relative overflow-hidden">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5" />
          
          <div className="max-w-6xl mx-auto relative">
            <ScrollReveal>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  Skills & <span className="text-purple-500">Technologies</span>
                </h2>
                <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
                  Building robust applications with modern technologies
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Languages', skills: developerInfo.skills.languages, gradient: 'from-purple-500/20 to-purple-500/5' },
                { title: 'Frameworks', skills: developerInfo.skills.frameworks, gradient: 'from-cyan-500/20 to-cyan-500/5' },
                { title: 'Databases', skills: developerInfo.skills.databases, gradient: 'from-green-500/20 to-green-500/5' },
                { title: 'Tools', skills: developerInfo.skills.tools, gradient: 'from-orange-500/20 to-orange-500/5' },
              ].map((category, index) => (
                <ScrollReveal key={category.title} delay={0.1 * index}>
                  <motion.div
                    className={`group p-6 rounded-2xl border border-border/50 bg-gradient-to-br ${category.gradient} backdrop-blur-sm hover:border-primary/30 transition-all duration-300`}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <h3 className="text-lg font-medium mb-4 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.05 * skillIndex }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="secondary" className="hover:bg-primary/20 transition-colors cursor-default">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 border-t border-border relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6 relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                transition={{ duration: 0.8 }}
                className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
              />
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Featured <span className="text-cyan-500">Projects</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                A selection of recent development work
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <ProjectCard
                  project={project}
                  aspectRatio="landscape"
                  showCategory={true}
                  index={index}
                />
              </motion.div>
            ))}
          </div>

          {/* View All Link */}
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-3 text-lg font-light tracking-wide px-8 py-3 rounded-full border border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
