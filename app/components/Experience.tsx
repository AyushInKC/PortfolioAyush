'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Trophy } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'ITax Easy Pvt Ltd',
      period: 'March 2025 – May 2025',
      type: 'Internship',
      achievements: [
        'Optimized REST APIs reducing average response time by 30%+ through efficient query handling and request processing',
        'Implemented secure authentication workflows using JWT, improving session management and system security',
        'Integrated CI/CD pipelines using GitHub Actions, enhancing deployment reliability and reducing release inconsistencies by 15%+',
        'Diagnosed and resolved production-level issues, improving application stability and frontend-backend interaction performance',
      ],
      tags: [
        'REST APIs',
        'JWT',
        'GitHub Actions',
        'Performance',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend Developer',
      company: 'Cloud Computing Cell',
      period: 'Oct 2024 – Present',
      type: 'Position',
      achievements: [
        'Developed and optimized RESTful APIs in a collaborative 45-member team, improving system performance by 45%+ through efficient database queries',
        'Designed and refined database workflows using optimized schema design and query tuning to reduce latency',
        'Improved system reliability by debugging production-level issues and implementing structured error handling',
        'Collaborated on modular backend architecture, enabling scalable feature development and maintainable codebase design',
      ],
      tags: [
        'Microservices',
        'Database Design',
        'Performance',
        'Architecture',
      ],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 w-full overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
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
              Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Timeline dot and line */}
              <div className="absolute left-0 top-8 md:left-1/2 md:-translate-x-1/2">
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className={`w-4 h-4 rounded-full border-2 border-primary bg-background ring-4 ring-primary/20`}
                  />
                </div>
              </div>

              {/* Content card */}
              <div className={`md:${index % 2 === 0 ? 'text-right md:pr-1/2 md:w-1/2' : 'md:pl-1/2 md:w-1/2 ml-auto'} pl-12 md:pl-0`}>
                <motion.div
                  whileHover={{ translateY: -4 }}
                  transition={{ duration: 0.3 }}
                  className="glass-effect rounded-xl p-6 md:p-8"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}>
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="tech-badge"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
