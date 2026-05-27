'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'IMAGO',
      subtitle: 'AI-Powered Image Processing Backend',
      description:
        'Scalable Spring Boot REST API for image upload and transformation workflows with ML-based background removal. Designed for high performance with optimized MongoDB indexing and containerized Docker deployment.',
      longDescription:
        'IMAGO is a production-grade image processing system built on Spring Boot that demonstrates deep backend engineering skills. The system implements ML-based background removal pipeline, supports multiple image operations (compression, resizing, cropping, format conversion), and secures endpoints with JWT authentication. The architecture showcases knowledge of distributed systems, scalability patterns, and performance optimization.',
      achievements: [
        'Designed scalable REST API for image transformation workflows',
        'Implemented ML-based background removal pipeline',
        'Built optimized image operations (compression, resizing, cropping)',
        'Achieved 99.9% uptime with containerized deployment',
        'Implemented efficient MongoDB schema with indexing',
      ],
      technologies: [
        'Spring Boot',
        'MongoDB',
        'REST APIs',
        'JWT',
        'Docker',
        'ML Integration',
      ],
      metrics: {
        throughput: '10K+ requests/day',
        latency: '<200ms avg',
        uptime: '99.9%',
      },
      github: 'https://github.com/AyushInKC/ImageProcessor',
      liveLink: 'https://imago-frontend-one.vercel.app/',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Smart Airport Ride Pooling',
      subtitle: 'Distributed Backend System with Concurrency Control',
      description:
        'Concurrency-safe backend system for ride pooling using geo-based matching algorithms, Redis distributed locking, and optimistic locking for consistency. Built for handling high-concurrency scenarios with zero race conditions.',
      longDescription:
        'This project is engineering-heavy and showcases exceptional backend system design skills. It demonstrates mastery over distributed systems challenges, including handling concurrent requests safely, implementing geo-based algorithms, managing dynamic pricing, and ensuring transactional safety. The use of Redis for distributed locking and optimistic locking patterns shows production-level thinking.',
      achievements: [
        'Designed concurrency-safe ride pooling algorithm',
        'Implemented Redis-based distributed locking',
        'Built multi-stage matching engine with geo-filtering',
        'Handled 100K+ concurrent requests with zero race conditions',
        'Designed dynamic pricing engine using Strategy Pattern',
        'Achieved 45%+ performance improvement',
      ],
      technologies: [
        'Spring Boot',
        'PostgreSQL',
        'Redis',
        'Docker',
        'JPA',
        'Flyway',
        'Geo-algorithms',
      ],
      metrics: {
        concurrency: '100K+ concurrent',
        raceConditions: '0',
        timeReduction: '45%',
      },
      github: 'https://github.com/AyushInKC/smart-airport-ride-pooling-backend',
      liveLink: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'RepoScribe',
      subtitle: 'AI-Powered Documentation Generation with OAuth2',
      description:
        'Secure OAuth2-based GitHub integration for fetching repository metadata with automated NLP-powered documentation generation. Uses MongoDB aggregation pipelines for large-scale data processing.',
      longDescription:
        'RepoScribe demonstrates expertise in building intelligent backend systems that integrate with modern APIs. The project showcases OAuth2 implementation, asynchronous processing patterns, MongoDB aggregation pipeline optimization, and scalable architecture design. Built for processing and analyzing thousands of repositories efficiently.',
      achievements: [
        'Implemented secure OAuth2 GitHub authentication flow',
        'Built NLP-powered documentation generation pipeline',
        'Designed MongoDB aggregation pipelines for data processing',
        'Implemented asynchronous processing for scalability',
        'Analyzed 1000+ repositories with <5s processing',
      ],
      technologies: [
        'Spring Boot',
        'MongoDB',
        'OAuth2',
        'REST APIs',
        'Docker',
        'NLP Integration',
        'Async Processing',
      ],
      metrics: {
        repositories: '1000+',
        processTime: '<5s per repo',
        accuracy: '95%+',
      },
      github: 'https://github.com/AyushInKC/RepoScribe',
      liveLink: 'https://github.com/AyushInKC/RepoScribe',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 w-full overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-widest">
              Featured Projects
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Production-Grade Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Carefully crafted backend systems demonstrating expertise in scalability, performance optimization, and distributed systems architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-1 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                onClick={() =>
                  setExpandedProject(
                    expandedProject === index ? null : index
                  )
                }
                className="cursor-pointer glass-effect rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50"
                whileHover={{ translateY: -4 }}
              >
                {/* Header */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}
                        />
                        <h3 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-lg text-primary font-semibold mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 pb-6 border-b border-border/50">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-1">
                          {key}
                        </p>
                        <p className="text-sm md:text-base font-semibold text-foreground">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons and expand indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      {project.liveLink !== '#' && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 hover:bg-secondary/50 transition-colors duration-300 text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </a>
                      )}
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedProject === index ? 90 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {expandedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border/50 px-6 md:px-8 py-6 md:py-8 bg-secondary/20"
                    >
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3">
                            Project Details
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {project.longDescription}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
