import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { DustParticles } from '@/components/DustParticles';
import { MapPin, BookOpen, Film, Coffee, Globe, Heart, Mail, Feather, Compass, Anchor } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const About = () => {
  return (
    <>
      {/* Hero Header */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-directors-crimson text-textured-vellum px-6 pt-20">
        <div className="absolute inset-0 z-0">
           <motion.img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop" 
            alt="Journey landscape" 
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
            The Backstory
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl mb-8 font-serif">
            The Story Behind the Story
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-textured-vellum/80 font-serif italic max-w-2xl mx-auto">
            "There is a moment in every screenplay where the character stops performing and starts being real."
          </motion.p>
        </motion.div>
      </section>

      {/* Opening Hook & Pivotal Moment - Split Layout */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6 text-lg leading-relaxed text-espresso-black/80"
          >
            <motion.p variants={fadeInUp} className="text-xl font-medium text-directors-crimson">
              It is the moment the audience leans forward. The moment the story stops being entertainment and becomes experience.
            </motion.p>
            <motion.p variants={fadeInUp}>
              I have spent my career trying to understand that moment. How it is created. What allows it. And — most importantly — how to help other writers find it in their own work.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="bg-textured-vellum p-8 rounded-lg border-l-4 border-golden-ocher mt-8">
              <h3 className="text-2xl text-directors-crimson font-serif mb-4 flex items-center gap-3">
                <Compass className="text-golden-ocher" /> The Pivotal Moment
              </h3>
              <p className="text-base">
                Screenwriting started as a hobby. It became something else entirely. I was at a point of profound change in my life — one of those intersections where everything you thought was solid shifts beneath your feet. In the middle of that upheaval, writing was the thing that made sense.
              </p>
            </motion.div>

            <motion.p variants={fadeInUp}>
              The calling gnawed at me until I made the decision most sensible people would advise against: I stopped treating writing as something I did on the side and jumped into the deep end.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px]"
          >
            <div className="absolute inset-0 bg-espresso-black/10 rounded-lg transform rotate-3 translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop" 
              alt="Writing desk" 
              className="w-full h-full object-cover rounded-lg shadow-xl relative z-10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </Section>

      {/* The Journey - Dark Section */}
      <Section dark className="bg-olive-umber relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <img 
              src="https://www.transparenttextures.com/patterns/stardust.png" 
              alt="Texture" 
              className="w-full h-full object-cover"
            />
        </div>
        
        <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-5 order-2 md:order-1">
             <div className="grid grid-cols-2 gap-4">
               <img 
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2574&auto=format&fit=crop" 
                alt="Travel 1" 
                className="w-full h-64 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
               <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop" 
                alt="Travel 2" 
                className="w-full h-64 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500 mt-8"
                referrerPolicy="no-referrer"
              />
             </div>
          </div>
          
          <motion.div 
            className="md:col-span-7 order-1 md:order-2 space-y-6 text-textured-vellum/90 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 text-golden-ocher mb-2">
              <Globe size={24} />
              <span className="uppercase tracking-widest text-sm font-bold">The Immersion</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl text-textured-vellum mb-6">
              A Decade of Discovery
            </motion.h2>
            
            <motion.p variants={fadeInUp}>
              What followed was a decade of immersion. I wrote screenplays for hire. I analysed scripts for production companies — hundreds of them — and began to see the patterns in what worked, what failed, and why. I mentored emerging writers and watched their struggles mirror my own early fumbling.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm my-6">
              <p className="italic text-lg text-white/90">
                "I also travelled. Sixty-plus countries, each one teaching me something about how humans experience conflict, love, loss, and transformation."
              </p>
            </motion.div>

            <motion.p variants={fadeInUp}>
              The breakthrough came when I started working with actors. Watching them prepare for roles — the way they would inhabit a character’s physical life, emotional history, and unconscious motivations — I saw a bridge that most writing education had completely missed. Writers build characters; actors bring them to life. What if the building process looked more like the bringing-to-life process?
            </motion.p>
          </motion.div>
        </div>
      </Section>

      {/* The Realisation & What I Bring - Grid Cards */}
      <Section className="bg-terracotta-sand/5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-directors-crimson">The Methodology</h2>
            <div className="w-24 h-px bg-golden-ocher mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-xl shadow-sm border-t-4 border-directors-crimson"
            >
              <div className="w-16 h-16 bg-directors-crimson/10 rounded-full flex items-center justify-center mb-6 text-directors-crimson">
                <Feather size={32} />
              </div>
              <h3 className="text-2xl font-serif text-directors-crimson mb-4">Method Writing</h3>
              <p className="text-espresso-black/80 leading-relaxed mb-6">
                I developed what I now call method writing — an approach that asks the writer to inhabit their characters with the same depth and intimacy that a method actor brings to a role.
              </p>
              <p className="text-espresso-black/80 leading-relaxed">
                Combined with the Question Method™, a series of deep-dive questions designed to excavate the storyverse, and holistic practices including meditation and therapeutic exploration, it became a complete methodology.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-xl shadow-sm border-t-4 border-golden-ocher"
            >
              <div className="w-16 h-16 bg-golden-ocher/10 rounded-full flex items-center justify-center mb-6 text-golden-ocher">
                <Anchor size={32} />
              </div>
              <h3 className="text-2xl font-serif text-directors-crimson mb-4">Analytical Intuition</h3>
              <p className="text-espresso-black/80 leading-relaxed mb-6">
                I am a screenwriter, a holistic writing coach, and a deeply analytical person who has learned to trust his intuition. My strength is seeing both the structural mechanics and the emotional undercurrents.
              </p>
              <p className="text-espresso-black/80 leading-relaxed">
                I work especially well with European filmmakers writing in English. Having lived and worked across cultures, I understand the challenges of telling culturally specific stories for a global market.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Personal Touches - "Off The Page" Grid */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-directors-crimson">Off The Page</h2>
            <p className="text-espresso-black/60">Because a writer needs a life to write about.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: "Explorer", text: "Exploring new cities" },
              { icon: Film, title: "Cinephile", text: "Watching films for the mood" },
              { icon: Globe, title: "Linguist", text: "Butchering new languages" },
              { icon: Coffee, title: "Debater", text: "Arguing about TV endings" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-textured-vellum p-6 rounded-lg text-center hover:bg-golden-ocher/10 transition-colors group"
              >
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 text-directors-crimson group-hover:text-golden-ocher transition-colors shadow-sm">
                  <item.icon size={20} />
                </div>
                <h4 className="font-bold text-directors-crimson mb-2">{item.title}</h4>
                <p className="text-sm text-espresso-black/70">{item.text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-12 text-lg text-espresso-black/80 italic font-serif max-w-2xl mx-auto"
          >
            "I am a dedicated outdoor and sports enthusiast, and someone who genuinely believes that every conversation with a stranger is potential material."
          </motion.p>
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

      {/* CTA */}
      <Section className="text-center bg-white">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl text-directors-crimson mb-8">Let’s See What Your Story Needs</h2>
          <p className="text-xl text-espresso-black/70 mb-12 max-w-2xl mx-auto">
            If my approach resonates, I’d love to hear about your project. Book a free discovery call and let’s talk about where you are and where your writing could go.
          </p>
          <Button to="/contact" variant="primary" className="shadow-xl hover:shadow-2xl hover:-translate-y-1">Book a Discovery Call</Button>
        </motion.div>
      </Section>
    </>
  );
};

export default About;
