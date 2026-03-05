import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { DustParticles } from '@/components/DustParticles';
import { Mail, Calendar, Linkedin, MessageSquare, Clock, Globe } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const Contact = () => {
  return (
    <>
      {/* Hero Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-directors-crimson text-textured-vellum px-6 pt-20">
        <div className="absolute inset-0 z-0">
           <motion.img 
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2671&auto=format&fit=crop" 
            alt="Contact atmosphere" 
            className="w-full h-full object-cover opacity-30"
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-directors-crimson/60 mix-blend-multiply" />
          <DustParticles />
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.span variants={fadeInUp} className="text-golden-ocher uppercase tracking-widest text-sm font-bold mb-4 block">
            Get In Touch
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl mb-8 font-serif">
            Start the Conversation
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-textured-vellum/80 font-light leading-relaxed max-w-2xl mx-auto">
            If you’re here, something about the way I work has resonated. Good. That’s how the best creative partnerships start.
          </motion.p>
        </motion.div>
      </section>

      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="bg-textured-vellum p-8 rounded-xl border border-espresso-black/5">
              <div className="flex items-center gap-3 mb-4 text-directors-crimson">
                <Calendar size={24} />
                <h3 className="text-2xl font-serif">Discovery Call</h3>
              </div>
              <p className="text-espresso-black/80 mb-6 leading-relaxed">
                A free 30-minute video conversation. We’ll talk about where you are with your writing, what you’re looking for, and whether we’re a good match. No pitch, no obligation — just an honest exchange.
              </p>
              <Button variant="primary" className="w-full md:w-auto shadow-md hover:shadow-lg">
                Book Your Call
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-4 text-directors-crimson">
                <Mail size={24} />
                <h3 className="text-2xl font-serif">Email</h3>
              </div>
              <p className="text-espresso-black/80 mb-6">
                I typically respond within 48 hours. When you write, it’s helpful to share a brief description of your project and where you are in the writing process.
              </p>
              <a href="mailto:mark@scripttheory.com" className="inline-flex items-center text-lg text-directors-crimson hover:text-golden-ocher transition-colors font-medium border-b border-directors-crimson/20 pb-1 hover:border-golden-ocher">
                mark@scripttheory.com
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-8 pt-8 border-t border-espresso-black/10">
              <div>
                <div className="flex items-center gap-2 mb-2 text-muted-sage text-sm uppercase tracking-widest font-bold">
                  <Globe size={16} /> Languages
                </div>
                <p className="text-espresso-black/80">
                  English, French, Spanish, Greek
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-muted-sage text-sm uppercase tracking-widest font-bold">
                  <Clock size={16} /> Response Time
                </div>
                <p className="text-espresso-black/80">
                  Within 48 hours
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 border border-espresso-black/10 shadow-xl rounded-xl relative"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-directors-crimson to-golden-ocher rounded-t-xl" />
            <h3 className="text-2xl font-serif text-directors-crimson mb-8 flex items-center gap-3">
              <MessageSquare className="text-golden-ocher" /> Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-muted-sage mb-2 font-bold">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-textured-vellum/30 border border-espresso-black/10 p-4 rounded-lg focus:outline-none focus:border-directors-crimson focus:bg-white transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-muted-sage mb-2 font-bold">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-textured-vellum/30 border border-espresso-black/10 p-4 rounded-lg focus:outline-none focus:border-directors-crimson focus:bg-white transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-muted-sage mb-2 font-bold">Subject</label>
                <div className="relative">
                  <select 
                    id="subject" 
                    className="w-full bg-textured-vellum/30 border border-espresso-black/10 p-4 rounded-lg focus:outline-none focus:border-directors-crimson focus:bg-white transition-all appearance-none"
                  >
                    <option>Course Inquiry</option>
                    <option>Consultation Inquiry</option>
                    <option>Mentoring</option>
                    <option>Writer for Hire</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-espresso-black/40">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-sage mb-2 font-bold">Message</label>
                <textarea 
                  id="message" 
                  rows={6}
                  className="w-full bg-textured-vellum/30 border border-espresso-black/10 p-4 rounded-lg focus:outline-none focus:border-directors-crimson focus:bg-white transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button variant="secondary" className="w-full justify-center hover:bg-directors-crimson hover:text-white transition-colors">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section className="bg-olive-umber text-textured-vellum relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-golden-ocher/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Mail className="w-12 h-12 mx-auto mb-6 text-golden-ocher" />
            <h2 className="text-3xl md:text-4xl mb-4 font-serif">Join the Inner Circle</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Get weekly insights on holistic screenwriting, character psychology, and the creative life. No fluff, just deep dives.
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-golden-ocher transition-colors"
            />
            <Button variant="primary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </motion.form>
          <p className="mt-4 text-xs opacity-50">Join 2,000+ writers. Unsubscribe anytime.</p>
        </div>
      </Section>
    </>
  );
};

export default Contact;
