import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const MotionLink = motion(Link);

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  className?: string;
}

const Button = ({ children, to, onClick, variant = 'primary', className }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest transition-colors duration-300 font-medium cursor-pointer";
  
  const variants = {
    primary: "bg-golden-ocher text-white hover:bg-directors-crimson border border-transparent",
    secondary: "bg-directors-crimson text-textured-vellum hover:bg-olive-umber border border-transparent",
    outline: "border border-current hover:bg-current hover:text-textured-vellum bg-transparent",
    text: "p-0 hover:text-golden-ocher underline-offset-4 hover:underline bg-transparent"
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  const animationProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  if (to) {
    return (
      <MotionLink 
        to={to} 
        className={combinedClassName}
        {...animationProps}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button 
      onClick={onClick} 
      className={combinedClassName}
      {...animationProps}
    >
      {children}
    </motion.button>
  );
};

export default Button;
