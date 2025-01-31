import React from 'react';

interface ToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  size?: 'sm' | 'md';
}

const Toggle: React.FC<ToggleProps> = ({ enabled, onChange, size = 'md' }) => {
  const baseClasses = "relative inline-flex items-center rounded-full transition-colors duration-200";
  const sizeClasses = size === 'sm' ? 'w-9 h-5' : 'w-12 h-6';
  
  return (
    <button
      type="button"
      className={`${baseClasses} ${sizeClasses} ${
        enabled ? 'bg-primary' : 'bg-gray-200'
      }`}
      onClick={() => onChange(!enabled)}
    >
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } ${size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} 
        inline-block transform rounded-full bg-white transition-transform duration-200`}
      />
    </button>
  );
};

export default Toggle; 