import { motion } from 'framer-motion';
import { Linkedin, Github, GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react';
import { developerInfo } from '@/data/developer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/**
 * About page with developer biography and professional information
 * Features split layout with portrait and comprehensive biography
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${developerInfo.name}, ${developerInfo.tagline}. ${developerInfo.biography.split('\n\n')[0]}`}
        image={developerInfo.portraitImage}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0.8, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
              About
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
              Full Stack Developer & Tech Enthusiast
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portrait and Biography - Split Layout */}
      <section className="py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Portrait Image */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0.8, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-muted">
                <img
                  src={developerInfo.portraitImage}
                  alt={developerInfo.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {developerInfo.socialLinks.github && (
                  <a
                    href={developerInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="size-5" />
                  </a>
                )}
                {developerInfo.socialLinks.linkedin && (
                  <a
                    href={developerInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5" />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Biography and Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0.8, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Name and Tagline */}
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                  {developerInfo.name}
                </h2>
                <p className="text-xl text-muted-foreground font-light tracking-wide">
                  {developerInfo.tagline}
                </p>
              </div>

              <Separator />

              {/* Biography */}
              <div className="space-y-4">
                {developerInfo.biography.split('\n\n').map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Contact Info */}
              <div className="pt-4 space-y-2">
                <div className="text-sm font-light tracking-wide">
                  <span className="text-muted-foreground">Email: </span>
                  <a
                    href={`mailto:${developerInfo.email}`}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {developerInfo.email}
                  </a>
                </div>
                <div className="text-sm font-light tracking-wide">
                  <span className="text-muted-foreground">Location: </span>
                  <span className="text-foreground">{developerInfo.location}</span>
                </div>
                <div className="text-sm font-light tracking-wide">
                  <span className="text-muted-foreground">Status: </span>
                  <span className="text-foreground">{developerInfo.availability}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Education Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="size-6" />
                <h2 className="text-3xl font-light tracking-wide">Education</h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-medium">{developerInfo.education.degree}</h3>
                <p className="text-lg text-muted-foreground">{developerInfo.education.institution}</p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                  <span>{developerInfo.education.location}</span>
                  <span>•</span>
                  <span>CGPA: {developerInfo.education.cgpa}</span>
                  <span>•</span>
                  <span>{developerInfo.education.period}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="size-6" />
                <h2 className="text-3xl font-light tracking-wide">Experience</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {developerInfo.experience.map((exp, index) => (
                <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                  <div className="p-6 rounded-lg border border-border bg-card">
                    <h3 className="text-xl font-medium">{exp.title}</h3>
                    <p className="text-lg text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground font-light flex items-start gap-2">
                          <span className="text-foreground mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <Award className="size-6" />
                <h2 className="text-3xl font-light tracking-wide">Certificates</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-4">
              {developerInfo.certificates.map((cert, index) => (
                <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                  <div className="p-6 rounded-lg border border-border bg-card">
                    <h3 className="text-lg font-medium">{cert.name}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Extracurricular Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="size-6" />
                <h2 className="text-3xl font-light tracking-wide">Extracurricular</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {developerInfo.extracurricular.map((activity, index) => (
                <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                  <div className="p-6 rounded-lg border border-border bg-card">
                    <h3 className="text-xl font-medium">{activity.role}</h3>
                    <p className="text-lg text-muted-foreground mb-2">{activity.organization}</p>
                    <p className="text-muted-foreground font-light">{activity.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
