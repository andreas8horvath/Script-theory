import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  className?: string;
}

const Button = ({ children, to, onClick, variant = 'primary', className }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 font-medium";
  
  const variants = {
    primary: "bg-golden-ocher text-white hover:bg-directors-crimson",
    secondary: "bg-directors-crimson text-textured-vellum hover:bg-olive-umber",
    outline: "border border-current hover:bg-current hover:text-textured-vellum",
    text: "p-0 hover:text-golden-ocher underline-offset-4 hover:underline"
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;
