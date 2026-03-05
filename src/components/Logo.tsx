import React, { useState } from 'react';
import { PenTool } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  showText?: boolean;
  light?: boolean; // For dark backgrounds like footer
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  textClassName, 
  iconClassName,
  showText = true,
  light = false
}) => {
  const [imageError, setImageError] = useState(false);
  
  // Use public folder paths with BASE_URL handling
  const baseUrl = import.meta.env.BASE_URL;
  const logoLight = `${baseUrl}images/logo-light.png`;
  const logoDark = `${baseUrl}images/logo-dark.png`;
  
  const logoSrc = light ? logoLight : logoDark;

  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      <div className="relative flex items-center justify-center h-full w-auto">
        {!imageError ? (
          <img 
            src={logoSrc} 
            alt="Script Theory Logo" 
            className={cn("h-10 w-auto object-contain max-h-full max-w-full", iconClassName)}
            onError={() => setImageError(true)}
          />
        ) : (
          <PenTool 
            className={cn(
              "h-8 w-8 -rotate-45", 
              light ? "text-golden-ocher" : "text-golden-ocher",
              iconClassName
            )} 
          />
        )}
      </div>
      
      {showText && (
        <span className={cn(
          "font-serif tracking-tight leading-none", 
          light ? "text-textured-vellum" : "text-directors-crimson",
          textClassName
        )}>
          Script<span className="text-golden-ocher">theory</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
