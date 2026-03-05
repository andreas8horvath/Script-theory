import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '@/components/Section';
import Button from '@/components/Button';
import TestimonialSlider from '@/components/TestimonialSlider';
import { DustParticles } from '@/components/DustParticles';
import { ArrowRight, Quote, Layout, Users, HelpCircle, MapPin, Feather, Mail, Compass, BookOpen } from 'lucide-react';

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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-directors-crimson text-textured-vellum px-6">
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
          <div className="absolute inset-0 bg-directors-crimson/50 mix-blend-multiply" />
          <DustParticles />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1 
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
            >
              <motion.span variants={fadeInUp} className="block md:whitespace-nowrap">Your Characters Are Waiting.</motion.span>
              <motion.span variants={fadeInUp} className="block italic text-antique-brass">Learn to Speak to Them.</motion.span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-textured-vellum/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Holistic screenwriting coaching for writers ready to go beyond formula and build living, emotionally powerful stories.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <Button to="/contact" variant="primary" className="bg-golden-ocher hover:bg-white hover:text-directors-crimson shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Your Journey
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mt-16 text-sm uppercase tracking-widest opacity-70 flex items-center justify-center gap-4"
            >
              <span>Mark Fyers</span>
              <span className="w-1 h-1 bg-current rounded-full" />
              <span>Screenwriter</span>
              <span className="w-1 h-1 bg-current rounded-full" />
              <span>Coach</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem / Recognition Section - "The Symptoms" Grid */}
      <Section className="bg-textured-vellum">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-directors-crimson">
              Something Isn’t Working
            </h2>
            <p className="text-xl italic font-serif text-espresso-black/60">And You Can Feel It</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Layout,
                title: "The Structure Trap",
                text: "You know the structure. You’ve studied the three-act framework, read the books, maybe even taken a course or two. You can write a scene that follows the rules. But when you read it back, something is missing. The page is correct, but it isn’t alive."
              },
              {
                icon: Users,
                title: "The Hollow Character",
                text: "Your characters do what they’re supposed to do. They hit their marks, serve the plot, arrive where the story needs them to be. But they don’t surprise you. They don’t feel like people you’d recognise in the world. They don’t breathe."
              },
              {
                icon: HelpCircle,
                title: "The Silent Gap",
                text: "And the hardest part? You can’t quite name what’s wrong. You just know that the gap between what you’re writing and what you’re trying to say is growing wider, and no amount of restructuring or reading another craft book seems to close it."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-espresso-black/5 group"
              >
                <div className="w-12 h-12 bg-terracotta-sand/20 rounded-full flex items-center justify-center mb-6 text-directors-crimson group-hover:bg-directors-crimson group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-serif text-directors-crimson mb-4">{item.title}</h3>
                <p className="text-espresso-black/70 leading-relaxed text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
             <p className="font-medium text-directors-crimson text-xl">
              That gap is real. And it’s not a problem of technique.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Transformation Section - Visual Split */}
      <Section dark className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <img 
              src="https://www.transparenttextures.com/patterns/cubes.png" 
              alt="Texture" 
              className="w-full h-full object-cover"
            />
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
             <div className="relative">
               <img 
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2670&auto=format&fit=crop" 
                alt="Atmospheric nature scene" 
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-golden-ocher/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-directors-crimson/20 rounded-full blur-2xl" />
             </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="order-1 md:order-2"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4 text-golden-ocher">
              <Compass size={20} />
              <span className="uppercase tracking-widest text-sm font-medium">The Shift</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl mb-8 leading-tight">
              The Missing Piece Isn’t in the Structure
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="space-y-6 text-textured-vellum/80 leading-relaxed">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                <h4 className="text-antique-brass font-serif text-xl mb-2 italic">It’s in the Relationship</h4>
                <p>
                  The screenplays that move audiences are the ones where the writer had a living, breathing relationship with their characters and their storyverse.
                </p>
              </div>

              <p>
                When a writer truly inhabits their characters — when they can step inside a character’s mind, feel their fears, hear how they speak — the writing shifts. It stops being words on paper and becomes an experience.
              </p>
              
              <div className="flex items-start gap-4">
                <Feather className="text-golden-ocher shrink-0 mt-1" size={20} />
                <p className="text-sm">
                  <strong className="text-white block mb-1">Holistic Screenwriting</strong>
                  Using your life experience, your emotional truth, and deep-dive tools to create the kind of intimate connection that makes the difference between competent and unforgettable.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* How I Help Section - "Travel Cards" */}
      <Section className="bg-terracotta-sand/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-directors-crimson">Choose Your Path</h2>
          <div className="w-24 h-px bg-golden-ocher mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Holistic Writing Courses",
              desc: "A structured journey from screenplay fundamentals to deep character and storyverse development.",
              details: "Over six or twelve months, you’ll learn to use your body, your emotions, and your life experience as creative instruments.",
              link: "/services#courses",
              image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2670&auto=format&fit=crop"
            },
            {
              title: "Script Consultations",
              desc: "Bring your screenplay — complete or in progress — and let’s work on it together.",
              details: "Not just structure and pacing, but the deeper questions: Is the storyverse alive? Do your characters live and breathe?",
              link: "/services#consultations",
              image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
            },
            {
              title: "Mentoring & Development",
              desc: "For writers who want an ongoing creative partnership.",
              details: "Regular sessions focused on your projects, your career, and your growth as an artist. This is the deep dive — the space where real transformation happens.",
              link: "/services#mentoring",
              image: "https://images.unsplash.com/photo-1470549638415-0a0755be0619?q=80&w=2670&auto=format&fit=crop"
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
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-espresso-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl mb-3 text-directors-crimson font-serif">{service.title}</h3>
                <p className="text-espresso-black/80 mb-4 font-medium">{service.desc}</p>
                <p className="text-espresso-black/60 text-sm mb-6 leading-relaxed flex-grow">
                  {service.details}
                </p>
                
                <Link to={service.link} className="mt-auto inline-flex items-center text-sm font-bold uppercase tracking-widest text-golden-ocher hover:text-directors-crimson transition-colors">
                  Explore <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Me Section - "Profile" Style */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
             <div className="absolute inset-0 border-2 border-golden-ocher/30 translate-x-4 translate-y-4 rounded-sm" />
             <img 
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2670&auto=format&fit=crop" 
              alt="Mark Fyvers working" 
              className="w-full h-auto object-cover rounded-sm relative z-10 shadow-lg"
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
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="text-golden-ocher uppercase tracking-widest text-sm font-semibold">The Guide</span>
              <h2 className="text-3xl md:text-5xl mt-2 mb-6 text-directors-crimson">
                A Coach Who Writes. <br/>
                <span className="italic text-espresso-black/80">A Writer Who Coaches.</span>
              </h2>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-espresso-black/80 leading-relaxed">
              <p>
                I’m not a theorist. I’m a working screenwriter who has spent over a decade in the trenches — writing features and TV pilots for clients, analysing scripts for production companies, mentoring emerging talent, and developing original content across genres.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-textured-vellum p-4 rounded-lg">
                  <MapPin className="text-golden-ocher mb-2" size={20} />
                  <h4 className="font-bold text-directors-crimson mb-1">Global Perspective</h4>
                  <p className="text-sm">Travelled to 60+ countries, bringing deep cultural understanding to story.</p>
                </div>
                <div className="bg-textured-vellum p-4 rounded-lg">
                  <BookOpen className="text-golden-ocher mb-2" size={20} />
                  <h4 className="font-bold text-directors-crimson mb-1">Deep Experience</h4>
                  <p className="text-sm">Analysing scripts and mentoring talent for over a decade.</p>
                </div>
              </div>

              <p>
                What I bring to coaching is the same thing I bring to my own writing: an analytical mind paired with an intuitive feel for character and story. I’ll give you honest, sometimes challenging feedback — because that’s what actually helps you grow.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-8">
              <Button to="/about" variant="outline" className="border-directors-crimson text-directors-crimson hover:bg-directors-crimson hover:text-white">
                Read My Full Story
              </Button>
            </motion.div>
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

      {/* Testimonial Slider Section */}
      <Section className="bg-directors-crimson text-textured-vellum">
        <TestimonialSlider />
      </Section>

      {/* Who This Is For Section - "Checklist" Style */}
      <Section className="bg-textured-vellum">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-directors-crimson">Is This Your Story?</h2>
            <p className="text-espresso-black/60">This approach is designed for a specific kind of writer.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center p-6 bg-white rounded-lg shadow-sm border-l-4 border-golden-ocher hover:shadow-md transition-shadow"
              >
                <div className="mr-4 text-golden-ocher">
                  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                    <div className="w-3 h-3 bg-current rounded-full" />
                  </div>
                </div>
                <p className="text-espresso-black/80 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className="text-center bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl mb-8 text-directors-crimson">
            Let’s Talk About Your Story
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-espresso-black/70 mb-12 leading-relaxed">
            If something here resonated, that’s a good sign. The writers I work with tend to find me when they’re ready — ready for depth, ready for honesty, ready to discover what their story is really about.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button to="/contact" variant="primary" className="shadow-xl hover:shadow-2xl hover:-translate-y-1">Book Your Discovery Call</Button>
            <span className="text-sm text-espresso-black/50 font-serif italic">or</span>
            <a href="mailto:mark@scripttheory.com" className="text-directors-crimson hover:text-golden-ocher transition-colors underline underline-offset-4 font-medium">
              Email me directly
            </a>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
};

export default Home;
