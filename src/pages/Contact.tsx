import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { Mail, Calendar, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl mb-8 text-deep-teal">Start the Conversation</h1>
          <p className="text-xl text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
            If you’re here, something about the way I work has resonated. Good. That’s how the best creative partnerships start — with a feeling that this might be the right fit.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif text-deep-teal mb-4">Discovery Call</h3>
              <p className="text-charcoal/80 mb-6 leading-relaxed">
                A free 30-minute video conversation. We’ll talk about where you are with your writing, what you’re looking for, and whether we’re a good match. No pitch, no obligation — just an honest exchange.
              </p>
              <Button variant="primary" className="w-full md:w-auto">
                <Calendar size={18} className="mr-2" /> Book Your Call
              </Button>
            </div>

            <div className="h-px bg-charcoal/10" />

            <div>
              <h3 className="text-2xl font-serif text-deep-teal mb-4">Email</h3>
              <p className="text-charcoal/80 mb-6">
                I typically respond within 48 hours. When you write, it’s helpful to share a brief description of your project and where you are in the writing process.
              </p>
              <a href="mailto:mark@scripttheory.com" className="inline-flex items-center text-lg text-deep-teal hover:text-burnt-amber transition-colors font-medium">
                <Mail size={20} className="mr-3" /> mark@scripttheory.com
              </a>
            </div>

            <div className="h-px bg-charcoal/10" />

            <div>
              <h3 className="text-2xl font-serif text-deep-teal mb-4">Languages</h3>
              <p className="text-charcoal/80">
                I work primarily in English, with the ability to consult in French and read screenplays in French, Spanish, and Greek.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-warm-ivory p-8 md:p-12 border border-charcoal/5 shadow-sm">
            <h3 className="text-2xl font-serif text-deep-teal mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-slate mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white border border-charcoal/20 p-4 focus:outline-none focus:border-deep-teal transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-slate mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white border border-charcoal/20 p-4 focus:outline-none focus:border-deep-teal transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-slate mb-2">Subject</label>
                <select 
                  id="subject" 
                  className="w-full bg-white border border-charcoal/20 p-4 focus:outline-none focus:border-deep-teal transition-colors appearance-none"
                >
                  <option>Course Inquiry</option>
                  <option>Consultation Inquiry</option>
                  <option>Mentoring</option>
                  <option>Writer for Hire</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-slate mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={6}
                  className="w-full bg-white border border-charcoal/20 p-4 focus:outline-none focus:border-deep-teal transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button variant="secondary" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
