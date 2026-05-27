'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
        delay: 0.4,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32">
      {/* Premium dark background with subtle noise */}
      <div className="absolute inset-0 -z-20 bg-background" />
      
      {/* Radial glow behind portrait area */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl opacity-30 -z-10" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/8 blur-2xl opacity-20 -z-10" />

      {/* Subtle animated grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.1)_75%,rgba(59,130,246,0.1)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="container-custom max-w-7xl z-10 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Typography & CTAs */}
          <div className="space-y-8">
            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                <span className="block text-foreground">Engineering</span>
                <span className="block bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Systems That Scale
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md"
            >
              Backend systems architect focused on scalable infrastructure, distributed systems, and production-grade engineering. Building the foundation for tomorrow's applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <a
                href="#projects"
                className="group px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm md:text-base hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 inline-flex items-center justify-center gap-2"
              >
                View Projects
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://github.com/AyushInKC"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-border/50 text-foreground font-semibold text-sm md:text-base hover:bg-secondary/30 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
              >
                GitHub Profile
              </a>
              <a
                href="mailto:sirfayush1008@gmail.com"
                className="px-6 py-3 rounded-lg border border-border/50 text-foreground font-semibold text-sm md:text-base hover:bg-secondary/30 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right Column - Portrait */}
          <motion.div 
            variants={imageVariants} 
            className="relative h-96 lg:h-[500px] flex items-center justify-center group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated outer glow container */}
            <motion.div 
              className="absolute inset-0 rounded-3xl blur-3xl bg-gradient-to-br from-primary/50 via-primary/20 to-transparent opacity-60 -z-10"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
            
            {/* Secondary pulsing glow */}
            <motion.div 
              className="absolute inset-0 rounded-3xl blur-2xl bg-gradient-to-tl from-cyan-500/20 via-blue-500/10 to-transparent opacity-30 -z-10"
              animate={{ 
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 5,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 0.5,
              }}
            />

            {/* White gradient glow */}
            <motion.div 
              className="absolute inset-0 rounded-3xl blur-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-40 -z-10"
              animate={{ 
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 3.5,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 0.8,
              }}
            />
            
            {/* Portrait image with premium styling */}
            <motion.div 
              className="relative w-full h-full"
              animate={{ 
                y: [0, -12, 0]
              }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            >
              <motion.div 
                className="absolute inset-0 rounded-3xl border-2 border-primary/80 shadow-2xl shadow-primary/20 overflow-hidden backdrop-blur-sm"
                whileHover={{ 
                  borderColor: 'rgba(59, 130, 246, 1)',
                  boxShadow: '0 0 30px 8px rgba(59, 130, 246, 0.4)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/ayush.png"
                    alt="Ayush Singh - Backend Engineer"
                    fill
                    className="object-cover grayscale-[20%] contrast-110 brightness-95"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </motion.div>
                
                {/* Animated gradient overlay for premium feel */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5"
                  animate={{ 
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              {/* Animated light reflection effect */}
              <motion.div
                className="absolute -top-1 -left-1 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              {/* Floating animation indicator glow */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full blur-lg opacity-40 -z-10"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Social Links and Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col items-center gap-12 pt-20"
        >
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/AyushInKC"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-lg border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayushinkc/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-lg border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:sirfayush1008@gmail.com"
              className="group p-2 rounded-lg border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
