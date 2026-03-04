import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-deep-teal text-warm-ivory py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="font-serif text-3xl tracking-tight text-warm-ivory mb-6 block">
            Script Theory<span className="text-burnt-amber">.</span>
          </Link>
          <p className="text-slate/80 max-w-md font-light leading-relaxed">
            Holistic screenwriting coaching for writers ready to go beyond formula and build living, emotionally powerful stories.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-soft-gold">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-slate/80 hover:text-warm-ivory transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-slate/80 hover:text-warm-ivory transition-colors">About</Link></li>
            <li><Link to="/services" className="text-slate/80 hover:text-warm-ivory transition-colors">Services</Link></li>
            <li><Link to="/contact" className="text-slate/80 hover:text-warm-ivory transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 text-soft-gold">Connect</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-slate/80 hover:text-warm-ivory transition-colors">LinkedIn</a></li>
            <li><a href="mailto:mark@scripttheory.com" className="text-slate/80 hover:text-warm-ivory transition-colors">Email</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate/20 text-center md:text-left text-slate/60 text-sm">
        <p>&copy; {new Date().getFullYear()} Script Theory. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
