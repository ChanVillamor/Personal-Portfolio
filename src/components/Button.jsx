import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  label,
  href = '#',
  icon: Icon = null,
  isExternal = false,
  download = false,
  bgColor = 'bg-white',
  textColor = 'text-black',
  borderColor = 'border-white',
  hoverColor = 'hover:bg-sky-700',
  hoverText = 'hover:text-black',
  fullWidth = false,
}) => {
  const baseClasses = `
    flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium text-sm transition-all duration-300
    border-2 ${bgColor} ${textColor} ${borderColor} ${hoverColor} ${hoverText}
    hover:scale-105 active:scale-95 ${fullWidth ? 'w-full' : 'w-fit'}
  `;

  const content = (
    <span className="flex items-center gap-2">
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </span>
  );

  // Download link (uses <a> with download attribute)
  if (download) {
    return (
      <a href={href} download className={baseClasses}>
        {content}
      </a>
    );
  }

  // External link
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>
    );
  }

  // Internal router link
  return (
    <Link to={href} className={baseClasses}>
      {content}
    </Link>
  );
};

export default Button;
