'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Languages',
      skills: ['Java', 'JavaScript', 'TypeScript', 'SQL'],
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Backend',
      skills: ['Spring Boot', 'REST APIs', 'Microservices', 'API Design'],
      icon: '⚙️',
      color: 'from-purple-500 to-blue-500',
    },
    {
      name: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Caching'],
      icon: '🗄️',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'DevOps & Cloud',
      skills: ['Docker', 'GitHub Actions', 'AWS (EC2, S3)', 'CI/CD'],
      icon: '☁️',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      name: 'Systems Design',
      skills: [
        'Distributed Systems',
        'Scalability',
        'Performance Optimization',
        'System Architecture',
      ],
      icon: '🧠',
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Core Concepts',
      skills: [
        'Authentication (JWT, OAuth2)',
        'Rate Limiting',
        'Concurrency',
        'Load Balancing',
      ],
      icon: '🔐',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 w-full overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
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
              Technical Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive expertise across backend systems, databases, DevOps, and distributed systems architecture.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ translateY: -8 }}
                transition={{ duration: 0.3 }}
                className="glass-effect rounded-xl p-6 h-full hover:border-primary/50 transition-all duration-300"
              >
                {/* Icon and title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`text-4xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold pt-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional skills statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-border/50 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Deep Expertise in
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'System Design',
              'Performance Optimization',
              'Distributed Systems',
              'Database Architecture',
              'Scalability Patterns',
              'Production Engineering',
              'Concurrency Control',
              'Infrastructure Design',
              'API Development',
              'Cloud Architecture',
            ].map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium text-foreground hover:bg-primary/20 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
