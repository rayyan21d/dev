import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsCheck } from 'react-icons/bs';

const steps = [
  { step: 1, name: 'General', path: '/signup/general' },
  { step: 2, name: 'Design', path: '/signup/design' },
  { step: 3, name: 'Display Settings', path: '/signup/display' },
  { step: 4, name: 'Targeting', path: '/signup/targeting' },
  { step: 5, name: 'Final Setup', path: '/signup/final' },
];

const Header: React.FC = () => {
  const location = useLocation();
  
  // Optimize this
  const isCompleted = (path: string) => {
    const currentIndex = steps.findIndex(step => step.path === location.pathname);
    const stepIndex = steps.findIndex(step => step.path === path);
    return stepIndex < currentIndex;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      {/* Add in flex grow */}
      <div className="flex items-center h-16">
        <div className="flex items-center px-4 border-r h-full">
          <span className="text-xl font-semibold text-gray-900">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          </span>
        </div>
        <div className="flex-1 flex">
          {steps.map((step, index) => {
            const isActive = location.pathname === step.path;
            const completed = isCompleted(step.path);
            return (
              <Link
                key={step.path}
                to={step.path}
                className={`flex-1 flex items-center justify-center py-4 px-2 border-r relative ${
                  isActive ? 'border-b-2 border-primary -mb-[1px]' : ''
                }`}
              >
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-1">Step {step.step}</div>
                  <div className={`text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700'}`}>
                    {step.name}
                  </div>
                </div>
                {completed && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <BsCheck className="text-green-500 text-xl" />
                  </div>
                )}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center px-4 border-l h-full">
          <button 
            className="text-gray-700 hover:text-gray-900"
          >
            Share Preview
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
