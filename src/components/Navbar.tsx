import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-ivory/90 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl tracking-tight text-deep-teal z-50 relative">
            Script Theory<span className="text-burnt-amber">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors duration-300 hover:text-burnt-amber",
                  location.pathname === link.href ? "text-deep-teal font-semibold" : "text-charcoal/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-3 bg-deep-teal text-warm-ivory text-sm uppercase tracking-widest hover:bg-forest-green transition-colors duration-300"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 p-2 text-deep-teal focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-warm-ivory z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "font-serif text-3xl text-deep-teal hover:text-burnt-amber transition-colors",
                  location.pathname === link.href && "italic text-burnt-amber"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-8 px-8 py-4 bg-deep-teal text-warm-ivory text-lg uppercase tracking-widest hover:bg-forest-green transition-colors duration-300"
            >
              Book a Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
