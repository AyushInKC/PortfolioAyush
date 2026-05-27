'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sirfayush1008@gmail.com',
      href: 'mailto:sirfayush1008@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'AyushInKC',
      href: 'https://github.com/AyushInKC',
      color: 'from-gray-500 to-slate-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'ayushinkc',
      href: 'https://www.linkedin.com/in/ayushinkc/',
      color: 'from-blue-500 to-cyan-500',
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
      id="contact"
      className="relative py-24 md:py-32 w-full overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
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
              Get In Touch
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Something Great
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about backend engineering, systems architecture, or distributed systems, I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto"
        >
          {/* Contact Methods */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ translateX: 8 }}
                  transition={{ duration: 0.3 }}
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">
                      {method.label}
                    </p>
                    <p className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors opacity-0 group-hover:opacity-100" />
                </motion.a>
              );
            })}

            {/* Quick stats */}
            <div className="pt-8 border-t border-border/50 space-y-4">
              <h4 className="font-semibold">What I'm Looking For</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Backend engineering roles at top-tier companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Systems architecture and infrastructure challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Opportunities to work on distributed systems at scale</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-glow"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-500 text-center"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-border/50 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            "Building systems that scale. Let's engineer the future together."
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/sirfayush1008"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-border/50 text-foreground font-semibold hover:bg-secondary/50 transition-all duration-300"
            >
              View on GitHub
            </a>
            <a
              href="https://linkedin.com/in/ayush-singh-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
