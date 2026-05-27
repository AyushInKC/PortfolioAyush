'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      title: 'Scalable Architecture',
      description: 'Building systems designed to grow. Every design decision considers scale, performance, and maintainability.',
      icon: '📐',
    },
    {
      title: 'Production Mindset',
      description: 'Code that ships to production needs to be bulletproof. Focus on reliability, monitoring, and operational excellence.',
      icon: '🔧',
    },
    {
      title: 'Systems Thinking',
      description: 'Understanding the entire system, not just individual components. Distributed systems, databases, and infrastructure matter.',
      icon: '🧠',
    },
    {
      title: 'Performance First',
      description: 'Optimizing for speed and efficiency. Every millisecond counts. Database queries, caching strategies, and algorithmic efficiency.',
      icon: '⚡',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 w-full overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
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
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Engineering Philosophy
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Left column - Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a backend engineer and systems architect passionate about building scalable, reliable systems that power modern applications. With a strong foundation in distributed systems, database optimization, and cloud infrastructure, I approach every project with a production-first mindset.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across backend architecture, API design, database optimization, and DevOps infrastructure. I thrive in environments where technical excellence meets real-world constraints.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Deep Systems Understanding</h4>
                  <p className="text-sm text-muted-foreground">Distributed systems, concurrency, microservices architecture</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Performance Optimization</h4>
                  <p className="text-sm text-muted-foreground">Query optimization, caching strategies, load testing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Production Excellence</h4>
                  <p className="text-sm text-muted-foreground">Monitoring, CI/CD, zero-downtime deployments</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Values grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect rounded-xl p-6 hover:bg-card/80 transition-all duration-300 group"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
