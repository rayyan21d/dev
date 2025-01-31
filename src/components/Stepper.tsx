import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const steps = [
  { name: 'General', path: '/signup/general' },
  { name: 'Design', path: '/signup/design' },
  { name: 'Display Settings', path: '/signup/display' },
  { name: 'Targeting', path: '/signup/targeting' },
  { name: 'Final Setup', path: '/signup/final' },
];

const Stepper: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex w-full border-b">
      {steps.map((step, index) => {
        const isActive = location.pathname === step.path;
        return (
          <Link
            key={step.path}
            to={step.path}
            className={`flex-1 text-center py-4 px-2 ${
              isActive ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500'
            }`}
          >
            <div className="text-sm mb-1">Step {index + 1}</div>
            <div className="text-sm font-medium">{step.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Stepper; 