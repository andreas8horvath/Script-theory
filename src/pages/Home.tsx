import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '@/components/Section';
import Button from '@/components/Button';
import TestimonialSlider from '@/components/TestimonialSlider';
import { DustParticles } from '@/components/DustParticles';
import { ArrowRight, Quote } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-deep-teal text-warm-ivory px-6">
        <div className="absolute inset-0 z-0">
          <motion.img 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop" 
            alt="Writer's desk with notebook" 
            className="w-full h-full object-cover opacity-40"
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.15 }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "linear" 
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-deep-teal/50 mix-blend-multiply" />
          <DustParticles />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1 
              variants={fadeInUp}
              className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
            >
              <span className="md:whitespace-nowrap">Your Characters Are Waiting.</span> <br/>
              <span className="italic text-soft-gold">Learn to Speak to Them.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-warm-ivory/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Holistic screenwriting coaching for writers ready to go beyond formula and build living, emotionally powerful stories.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <Button to="/contact" variant="primary" className="bg-burnt-amber hover:bg-white hover:text-deep-teal">
                Book a Discovery Call
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mt-16 text-sm uppercase tracking-widest opacity-70"
            >
              Mark Fyvers • Screenwriter • Holistic Writing Coach • Creator of the Question Method™
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem / Recognition Section */}
      <Section className="bg-warm-ivory">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl mb-8 text-deep-teal">
            Something Isn’t Working — <span className="italic font-serif">And You Can Feel It</span>
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="space-y-6 text-lg leading-relaxed text-charcoal/80">
            <p>
              You know the structure. You’ve studied the three-act framework, read the books, maybe even taken a course or two. You can write a scene that follows the rules. But when you read it back, something is missing. The page is correct, but it isn’t alive.
            </p>
            <p>
              Your characters do what they’re supposed to do. They hit their marks, serve the plot, arrive where the story needs them to be. But they don’t surprise you. They don’t feel like people you’d recognise in the world. They don’t breathe.
            </p>
            <p>
              And the hardest part? You can’t quite name what’s wrong. You just know that the gap between what you’re writing and what you’re trying to say is growing wider, and no amount of restructuring, rewriting, or reading another craft book seems to close it.
            </p>
            <p className="font-medium text-deep-teal text-xl pt-4">
              That gap is real. And it’s not a problem of technique.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Transformation Section */}
      <Section dark className="relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl mb-8 leading-tight">
              The Missing Piece Isn’t in the Structure — <span className="italic text-soft-gold">It’s in the Relationship</span>
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="space-y-6 text-warm-ivory/80 leading-relaxed">
              <p>
                The screenplays that move audiences — the ones that stay with you long after the credits roll — are not the ones with the most polished structure. They’re the ones where the writer had a living, breathing relationship with their characters and their storyverse.
              </p>
              <p>
                When a writer truly inhabits their characters — when they can step inside a character’s mind, feel their fears, hear how they speak, understand what they would never say — the writing shifts. It stops being words on paper and becomes an experience. The audience doesn’t just watch the story; they enter it.
              </p>
              <p>
                This is what holistic screenwriting is about. Not abandoning craft — but building on it. Using your life experience, your emotional truth, and a set of deep-dive tools to create the kind of intimate connection with your material that makes the difference between competent and unforgettable.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[600px] w-full"
          >
             <img 
              src="https://picsum.photos/seed/european-street/800/1200" 
              alt="Cinematic European street" 
              className="w-full h-full object-cover rounded-sm opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border border-warm-ivory/10 m-4 pointer-events-none" />
          </motion.div>
        </div>
      </Section>

      {/* How I Help Section */}
      <Section>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-deep-teal">Three Pathways Deeper</h2>
          <div className="w-24 h-px bg-burnt-amber mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Holistic Writing Courses",
              desc: "A structured journey from screenplay fundamentals to deep character and storyverse development. Over six or twelve months, you’ll learn to use your body, your emotions, and your life experience as creative instruments.",
              link: "/services#courses"
            },
            {
              title: "Script Consultations",
              desc: "Bring your screenplay — complete or in progress — and let’s work on it together. Not just structure and pacing, but the deeper questions: Is the storyverse alive? Do your characters live and breathe?",
              link: "/services#consultations"
            },
            {
              title: "Mentoring & Development",
              desc: "For writers who want an ongoing creative partnership. Regular sessions focused on your projects, your career, and your growth as an artist. This is the deep dive — the space where real transformation happens.",
              link: "/services#mentoring"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.6 } }
              }}
              className="group cursor-pointer"
            >
              <div className="h-full border border-charcoal/10 p-8 hover:bg-warm-ivory hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white/50">
                <h3 className="text-2xl mb-6 text-deep-teal group-hover:text-burnt-amber transition-colors">{service.title}</h3>
                <p className="text-charcoal/70 mb-8 leading-relaxed">{service.desc}</p>
                <Link to={service.link} className="inline-flex items-center text-sm uppercase tracking-widest font-medium text-deep-teal group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Me Section */}
      <Section className="bg-muted-clay/10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
             <img 
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2670&auto=format&fit=crop" 
              alt="Mark Fyvers working" 
              className="w-full h-auto object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            className="md:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl mb-8 text-deep-teal">
              A Coach Who Writes. <br/>
              <span className="italic text-burnt-amber">A Writer Who Coaches.</span>
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
              <p>
                I’m not a theorist. I’m a working screenwriter who has spent over a decade in the trenches — writing features and TV pilots for clients, analysing scripts for production companies, mentoring emerging talent, and developing original content across genres.
              </p>
              <p>
                I’ve also travelled to over sixty countries, lived in multiple cultures, and speak several languages. That matters because storytelling is, at its heart, an act of understanding human experience — and the wider your experience of being human, the deeper your stories can go.
              </p>
              <p>
                What I bring to coaching is the same thing I bring to my own writing: an analytical mind paired with an intuitive feel for character and story. I’ll give you honest, sometimes challenging feedback — because that’s what actually helps you grow.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-8">
              <Button to="/about" variant="text" className="text-deep-teal">Read My Story</Button>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Testimonial Slider Section */}
      <Section className="bg-deep-teal text-warm-ivory">
        <TestimonialSlider />
      </Section>

      {/* Who This Is For Section */}
      <Section className="bg-muted-clay/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl mb-12 text-center text-deep-teal"
          >
            This Is For You If...
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              "You’ve studied the craft but your scripts still feel flat or mechanical",
              "You’re a European filmmaker who wants to write in English without losing your cultural voice",
              "You’re stuck in writer’s block and suspect the issue goes deeper than technique",
              "You’re tired of screenwriting courses that teach the same formulaic approach",
              "You want honest, constructive feedback from someone who has actually worked in the industry",
              "You sense that your characters could be more alive but don’t know how to get there"
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start"
              >
                <span className="text-burnt-amber mr-4 text-xl">•</span>
                <p className="text-charcoal/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className="text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl mb-8 text-deep-teal">
            Let’s Talk About Your Story
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-charcoal/70 mb-12 leading-relaxed">
            If something here resonated, that’s a good sign. The writers I work with tend to find me when they’re ready — ready for depth, ready for honesty, ready to discover what their story is really about.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button to="/contact" variant="primary">Book Your Discovery Call</Button>
            <span className="text-sm text-charcoal/50">or</span>
            <a href="mailto:mark@scripttheory.com" className="text-deep-teal hover:text-burnt-amber transition-colors underline underline-offset-4">
              Email me directly
            </a>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
};

export default Home;
