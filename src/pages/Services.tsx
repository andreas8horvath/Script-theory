import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Button from '@/components/Button';
import FAQ from '@/components/FAQ';
import { Check } from 'lucide-react';

const Services = () => {
  return (
    <>
      {/* Header */}
      <Section className="pt-32 pb-16 bg-directors-crimson text-textured-vellum">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl mb-8">Depth & Craft</h1>
          <p className="text-xl md:text-2xl text-textured-vellum/80 font-light leading-relaxed">
            Whatever you need, the work is the same at its core: going deeper into your characters, your story, and yourself to create writing that is emotionally alive and undeniably yours.
          </p>
        </div>
      </Section>

      {/* The Foundation */}
      <Section id="courses">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-sm uppercase tracking-widest text-golden-ocher font-bold">The Foundation</span>
            <h2 className="text-4xl md:text-5xl text-directors-crimson mt-2 mb-4">Holistic Screenwriting Courses</h2>
            <p className="text-xl text-espresso-black/60 italic font-serif">For writers ready to build or rebuild their craft from the ground up</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold text-directors-crimson mb-4">Who This Is For</h3>
              <p className="text-espresso-black/80 leading-relaxed">
                Emerging writers who want more than formula. Writers with ideas but no framework for shaping them. Writers who have taken courses before and left feeling like something essential was missing. You might be starting from scratch, or you might be experienced but ready to go deeper into the nuances of character and storyverse building.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-directors-crimson mb-4">What’s Included</h3>
              <ul className="space-y-2">
                {[
                  "Weekly two-hour group sessions (six writers per class)",
                  "The 10 Commandments of Writing foundational framework",
                  "Step-by-step screenplay development",
                  "Deep dives into story arc, characterisation, and storyverse",
                  "Holistic exercises including meditation and Question Method™",
                  "Personal feedback on weekly assignments"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-espresso-black/80">
                    <Check size={16} className="text-olive-umber mt-1 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-espresso-black/10 shadow-sm">
              <h4 className="text-2xl font-serif text-directors-crimson mb-2">6-Month Course</h4>
              <p className="text-3xl font-light mb-6">€1,799 <span className="text-sm text-espresso-black/50 block">or €200/month</span></p>
              <p className="text-espresso-black/70 mb-8 text-sm">Develops innate skills from the ground up. Perfect for writers who want a rigorous, supported introduction to holistic screenwriting.</p>
              <Button to="/contact" variant="outline" className="w-full">Inquire Now</Button>
            </div>
            <div className="bg-directors-crimson text-textured-vellum p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-golden-ocher text-xs font-bold px-3 py-1 uppercase tracking-widest">Popular</div>
              <h4 className="text-2xl font-serif text-white mb-2">12-Month Course</h4>
              <p className="text-3xl font-light mb-6">€3,199 <span className="text-sm text-white/50 block">or €200/month</span></p>
              <p className="text-white/70 mb-8 text-sm">Everything in the 6-month course, taken deeper. Focus on writing a full-length feature screenplay with regular feedback and career guidance.</p>
              <Button to="/contact" variant="primary" className="w-full bg-white text-directors-crimson hover:bg-golden-ocher hover:text-white">Inquire Now</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* The Deep Dive */}
      <Section className="bg-terracotta-sand/10" id="consultations">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-sm uppercase tracking-widest text-golden-ocher font-bold">The Deep Dive</span>
            <h2 className="text-4xl md:text-5xl text-directors-crimson mt-2 mb-4">Script Consultations</h2>
            <p className="text-xl text-espresso-black/60 italic font-serif">For writers with a screenplay that needs expert analysis and a clear path forward</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Silver Package",
                duration: "4 weeks",
                price: "€399",
                desc: "Four weekly 60-minute sessions exploring your story’s characters and structure. Ideal for writers at an early stage."
              },
              {
                name: "Gold Package",
                duration: "3 months",
                price: "€1,199",
                desc: "Twelve weekly 60-minute sessions for deeper exploration. Extended character and storyverse development with ongoing notes."
              },
              {
                name: "Platinum Package",
                duration: "6 months",
                price: "€2,399",
                desc: "Twenty-four weekly sessions for comprehensive development. Includes full script read, detailed notes, and career pathway."
              }
            ].map((pkg, i) => (
              <div key={i} className="bg-white p-8 border-t-4 border-directors-crimson shadow-sm hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-serif text-directors-crimson mb-1">{pkg.name}</h4>
                <span className="text-xs uppercase tracking-widest text-muted-sage mb-4 block">{pkg.duration}</span>
                <p className="text-3xl font-light mb-6">{pkg.price}</p>
                <p className="text-espresso-black/70 mb-8 text-sm leading-relaxed">{pkg.desc}</p>
                <Button to="/contact" variant="secondary" className="w-full text-xs">Book Consultation</Button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Other Services */}
      <Section>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div id="mentoring">
            <span className="text-sm uppercase tracking-widest text-golden-ocher font-bold">The Partnership</span>
            <h3 className="text-3xl font-serif text-directors-crimson mt-2 mb-4">Private Mentoring</h3>
            <p className="text-espresso-black/80 mb-6 leading-relaxed">
              For writers at any level who want dedicated, personalised guidance. This is for those who know that real growth happens over time and want a mentor who is invested in their development as both a writer and a creative professional.
            </p>
            <p className="text-sm text-muted-sage mb-6">Customised to your needs. May include regular sessions, script reads, career guidance.</p>
            <Button to="/contact" variant="text" className="text-directors-crimson">Contact to Discuss</Button>
          </div>
          <div id="hire">
            <span className="text-sm uppercase tracking-widest text-golden-ocher font-bold">The Collaboration</span>
            <h3 className="text-3xl font-serif text-directors-crimson mt-2 mb-4">Screenwriter for Hire</h3>
            <p className="text-espresso-black/80 mb-6 leading-relaxed">
              For production companies and independent producers seeking a screenwriter for feature films, TV pilots, or other narrative projects. Mark brings a decade of experience and cultural versatility.
            </p>
            <p className="text-sm text-muted-sage mb-6">Pricing is project-based (minimum 2% of production budget).</p>
            <Button to="/contact" variant="text" className="text-directors-crimson">Contact to Discuss</Button>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-textured-vellum border-t border-espresso-black/5">
        <FAQ />
      </Section>

      {/* CTA */}
      <Section className="text-center bg-directors-crimson text-textured-vellum">
        <h2 className="text-4xl md:text-5xl mb-8">Ready to Go Deeper?</h2>
        <p className="text-xl text-textured-vellum/80 mb-12 max-w-2xl mx-auto">
          The writers I work with come because they sense there is more in their stories than they’ve been able to access on their own. If that sounds like you, let’s talk.
        </p>
        <Button to="/contact" variant="primary" className="bg-golden-ocher hover:bg-white hover:text-directors-crimson">Book Your Discovery Call</Button>
      </Section>
    </>
  );
};

export default Services;
