import React from 'react';

interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
  leftLabel?: string;
  rightLabel?: string;
}

const Toggle: React.FC<ToggleProps> = ({ value, onChange, leftLabel, rightLabel }) => {
  return (
    <div className="flex items-center gap-4">
      {leftLabel && <span className="text-[14px] text-gray-700">{leftLabel}</span>}
      <button
        className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
          value ? 'bg-primary' : 'bg-gray-300'
        }`}
        onClick={() => onChange(!value)}
      >
        <div
          className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
            value ? 'left-6' : 'left-1'
          }`}
        />
      </button>
      {rightLabel && <span className="text-[14px] text-gray-400">{rightLabel}</span>}
    </div>
  );
};

export default Toggle; 