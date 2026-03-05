import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Button from '@/components/Button';
import FAQ from '@/components/FAQ';
import { DustParticles } from '@/components/DustParticles';
import { Check, Mail, BookOpen, Users, Star, Film, PenTool, Coffee } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const Services = () => {
  return (
    <>
      {/* Hero Header */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-directors-crimson text-textured-vellum px-6 pt-20">
        <div className="absolute inset-0 z-0">
           <motion.img 
            src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2670&auto=format&fit=crop" 
            alt="Library atmosphere" 
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
            Work With Me
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl mb-8 font-serif">
            Depth & Craft
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-textured-vellum/80 font-light leading-relaxed max-w-3xl mx-auto">
            Whatever you need, the work is the same at its core: going deeper into your characters, your story, and yourself to create writing that is emotionally alive and undeniably yours.
          </motion.p>
        </motion.div>
      </section>

      {/* The Foundation - Courses */}
      <Section id="courses" className="bg-textured-vellum">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <span className="text-sm uppercase tracking-widest text-golden-ocher font-bold">The Foundation</span>
            <h2 className="text-4xl md:text-5xl text-directors-crimson mt-2 mb-4">Holistic Screenwriting Courses</h2>
            <p className="text-xl text-espresso-black/60 italic font-serif">For writers ready to build or rebuild their craft from the ground up</p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
               <img 
                src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2670&auto=format&fit=crop" 
                alt="Writing workshop" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-7 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-directors-crimson mb-4 flex items-center gap-2">
                  <Users className="text-golden-ocher" /> Who This Is For
                </h3>
                <p className="text-espresso-black/80 leading-relaxed text-lg">
                  Emerging writers who want more than formula. Writers with ideas but no framework for shaping them. Writers who have taken courses before and left feeling like something essential was missing. You might be starting from scratch, or you might be experienced but ready to go deeper into the nuances of character and storyverse building.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-espresso-black/10">
                <h3 className="text-xl font-bold text-directors-crimson mb-4 flex items-center gap-2">
                  <BookOpen className="text-golden-ocher" /> What’s Included
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Weekly two-hour group sessions",
                    "The 10 Commandments framework",
                    "Step-by-step development",
                    "Deep dives into story arc",
                    "Holistic exercises & meditation",
                    "Personal feedback weekly"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-espresso-black/80 text-sm">
                      <Check size={16} className="text-olive-umber mt-1 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl border border-espresso-black/10 shadow-sm flex flex-col"
            >
              <h4 className="text-2xl font-serif text-directors-crimson mb-2">6-Month Course</h4>
              <p className="text-3xl font-light mb-6 text-espresso-black">€1,799 <span className="text-sm text-espresso-black/50 block font-normal">or €200/month</span></p>
              <p className="text-espresso-black/70 mb-8 text-sm flex-grow">Develops innate skills from the ground up. Perfect for writers who want a rigorous, supported introduction to holistic screenwriting.</p>
              <Button to="/contact" variant="outline" className="w-full justify-center">Inquire Now</Button>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-directors-crimson text-textured-vellum p-8 rounded-xl shadow-xl relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 bg-golden-ocher text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-widest">Popular</div>
              <h4 className="text-2xl font-serif text-white mb-2">12-Month Course</h4>
              <p className="text-3xl font-light mb-6">€3,199 <span className="text-sm text-white/50 block font-normal">or €200/month</span></p>
              <p className="text-white/70 mb-8 text-sm flex-grow">Everything in the 6-month course, taken deeper. Focus on writing a full-length feature screenplay with regular feedback and career guidance.</p>
              <Button to="/contact" variant="primary" className="w-full bg-white text-directors-crimson hover:bg-golden-ocher hover:text-white justify-center">Inquire Now</Button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* The Deep Dive - Consultations */}
      <Section className="bg-white" id="consultations">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <span className="text-sm uppercase tracking-widest text-golden-ocher font-bold">The Deep Dive</span>
            <h2 className="text-4xl md:text-5xl text-directors-crimson mt-2 mb-4">Script Consultations</h2>
            <p className="text-xl text-espresso-black/60 italic font-serif">For writers with a screenplay that needs expert analysis</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Silver Package",
                duration: "4 weeks",
                price: "€399",
                desc: "Four weekly 60-minute sessions exploring your story’s characters and structure. Ideal for writers at an early stage.",
                icon: Star
              },
              {
                name: "Gold Package",
                duration: "3 months",
                price: "€1,199",
                desc: "Twelve weekly 60-minute sessions for deeper exploration. Extended character and storyverse development with ongoing notes.",
                icon: Film
              },
              {
                name: "Platinum Package",
                duration: "6 months",
                price: "€2,399",
                desc: "Twenty-four weekly sessions for comprehensive development. Includes full script read, detailed notes, and career pathway.",
                icon: PenTool
              }
            ].map((pkg, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-textured-vellum p-8 rounded-xl border border-espresso-black/5 hover:border-golden-ocher transition-colors group flex flex-col"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-directors-crimson group-hover:text-golden-ocher transition-colors shadow-sm">
                  <pkg.icon size={24} />
                </div>
                <h4 className="text-xl font-serif text-directors-crimson mb-1">{pkg.name}</h4>
                <span className="text-xs uppercase tracking-widest text-muted-sage mb-4 block">{pkg.duration}</span>
                <p className="text-3xl font-light mb-6 text-espresso-black">{pkg.price}</p>
                <p className="text-espresso-black/70 mb-8 text-sm leading-relaxed flex-grow">{pkg.desc}</p>
                <Button to="/contact" variant="secondary" className="w-full text-xs justify-center">Book Consultation</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Other Services - Split Layouts */}
      <Section className="bg-terracotta-sand/10">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Mentoring */}
          <div className="grid md:grid-cols-2 gap-16 items-center" id="mentoring">
            <div className="order-2 md:order-1">
               <img 
                src="https://images.unsplash.com/photo-1470549638415-0a0755be0619?q=80&w=2670&auto=format&fit=crop" 
                alt="Mentoring session" 
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-sm uppercase tracking-widest text-golden-ocher font-bold">The Partnership</span>
              <h3 className="text-3xl md:text-4xl font-serif text-directors-crimson mt-2 mb-6">Private Mentoring</h3>
              <p className="text-espresso-black/80 mb-6 leading-relaxed text-lg">
                For writers at any level who want dedicated, personalised guidance. This is for those who know that real growth happens over time and want a mentor who is invested in their development as both a writer and a creative professional.
              </p>
              <div className="flex items-center gap-4 mb-8 text-sm text-muted-sage bg-white/50 p-4 rounded-lg">
                <Coffee size={20} className="text-golden-ocher" />
                <span>Customised to your needs. May include regular sessions, script reads, career guidance.</span>
              </div>
              <Button to="/contact" variant="text" className="text-directors-crimson">Contact to Discuss</Button>
            </div>
          </div>

          {/* Hire */}
          <div className="grid md:grid-cols-2 gap-16 items-center" id="hire">
            <div>
              <span className="text-sm uppercase tracking-widest text-golden-ocher font-bold">The Collaboration</span>
              <h3 className="text-3xl md:text-4xl font-serif text-directors-crimson mt-2 mb-6">Screenwriter for Hire</h3>
              <p className="text-espresso-black/80 mb-6 leading-relaxed text-lg">
                For production companies and independent producers seeking a screenwriter for feature films, TV pilots, or other narrative projects. Mark brings a decade of experience and cultural versatility.
              </p>
              <div className="flex items-center gap-4 mb-8 text-sm text-muted-sage bg-white/50 p-4 rounded-lg">
                <PenTool size={20} className="text-golden-ocher" />
                <span>Pricing is project-based (minimum 2% of production budget).</span>
              </div>
              <Button to="/contact" variant="text" className="text-directors-crimson">Contact to Discuss</Button>
            </div>
            <div>
               <img 
                src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2656&auto=format&fit=crop" 
                alt="Film set" 
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white border-t border-espresso-black/5">
        <FAQ />
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

      {/* CTA */}
      <Section className="text-center bg-white">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl text-directors-crimson mb-8">Ready to Go Deeper?</h2>
          <p className="text-xl text-espresso-black/70 mb-12 max-w-2xl mx-auto">
            The writers I work with come because they sense there is more in their stories than they’ve been able to access on their own. If that sounds like you, let’s talk.
          </p>
          <Button to="/contact" variant="primary" className="shadow-xl hover:shadow-2xl hover:-translate-y-1">Book Your Discovery Call</Button>
        </motion.div>
      </Section>
    </>
  );
};

export default Services;
