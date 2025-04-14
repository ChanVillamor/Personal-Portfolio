import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  label,
  href = '#',
  icon: Icon = null,
  isExternal = false,
  bgColor = 'bg-white',
  textColor = 'text-black',
  borderColor = 'border-white', // default to white border
  hoverColor = 'hover:bg-sky-700',
  fullWidth = false, // allow control over full width
}) => {
  const baseClasses = `
    flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium text-sm transition-all duration-300
    border-2 ${bgColor} ${textColor} ${borderColor} ${hoverColor}
    hover:scale-105 active:scale-95 ${fullWidth ? 'w-full' : 'w-fit'}
  `;

  const content = (
    <span className="flex items-center gap-2">
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </span>
  );

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
      {content}
    </a>
  ) : (
    <Link to={href} className={baseClasses}>
      {content}
    </Link>
  );
};

export default Button;
