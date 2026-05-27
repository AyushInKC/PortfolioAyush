'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Trophy, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Top 100 Hackathon',
      description: 'Ranked in Top 100 among 1000+ teams at Executive 4.0 Hackathon (DTU) by building a scalable backend solution',
      stat: '1/1000+',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Zap,
      title: '500+ DSA Problems',
      description:
        'Solved 500+ Data Structures & Algorithms problems on LeetCode and CodeChef',
      stat: '500+',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: Users,
      title: '45-Member Collaboration',
      description:
        'Worked in a large collaborative team to improve system performance by 45%+',
      stat: '45 People',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: '8.2 CGPA',
      description:
        'Bachelor of Technology in Computer Science with strong academic performance',
      stat: '8.2 CGPA',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-24 md:py-32 w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 space-y-4 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-widest">
              Achievements
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Milestones & Recognition
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  whileHover={{ translateY: -8 }}
                  transition={{ duration: 0.3 }}
                  className="glass-effect rounded-xl p-6 h-full flex flex-col hover:border-primary/50 transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Stat */}
                  <div className="text-3xl font-bold mb-2 gradient-text">
                    {achievement.stat}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {achievement.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
