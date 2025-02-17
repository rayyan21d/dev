import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';
import ConfirmationModal from './modals/ConfirmationModal';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  // Add to context
  const steps = [
    '/signup/general',
    '/signup/design',
    '/signup/display',
    '/signup/targeting',
    '/signup/final'
  ];

  const currentIndex = steps.findIndex(step => step === location.pathname);
  const isLastStep = currentIndex === steps.length - 1;

  // This is for going back to the previous page
  const handleBack = () => {
    if (currentIndex > 0) {
      navigate(steps[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (isLastStep) {
      setShowConfirmation(true);
    } else if (currentIndex < steps.length - 1) {
      navigate(steps[currentIndex + 1]);
    }
  };

  return (
    <>
      <footer className="sticky bottom-0 z-50 bg-gray-100 border-t">
        <div className="flex justify-between items-center h-16 px-6">
          <button
            onClick={handleBack}
            className="text-gray-600 hover:text-gray-900 flex items-center space-x-2"
          >
            <span>← Back</span>
          </button>
          <div className="flex space-x-4">
            {!isLastStep ? (
              <button
                onClick={handleNext}
                className="bg-primary text-white px-8 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-emerald-500 text-white px-8 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Complete
              </button>
            )}
          </div>
        </div>
      </footer>

      <ConfirmationModal 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      />
    </>
  );
};

export default Footer;
