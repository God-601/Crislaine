import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  text: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  variant = 'primary',
  showArrow = true,
  className = '',
  onClick,
  target = '_blank',
  rel = 'noopener noreferrer',
  children
}) => {
  const baseClasses =
    'inline-flex items-center px-6 py-3 font-medium rounded-2xl shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-olive text-cream hover:bg-accent focus:ring-olive',
    secondary: 'bg-transparent border-2 border-olive text-olive hover:bg-olive hover:text-cream focus:ring-olive'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
      >
        {children || text}
        {showArrow && <ArrowRight className="ml-2 h-5 w-5" />}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
    >
      {children || text}
      {showArrow && <ArrowRight className="ml-2 h-5 w-5" />}
    </button>
  );
};

export default Button;
