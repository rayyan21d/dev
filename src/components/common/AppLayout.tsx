import React from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { BsCheck, BsShare } from 'react-icons/bs';
import ConfirmationModal from '../modals/ConfirmationModal';
import GeneralForm from '../GeneralForm';
import DesignForm from '../DesignForm';
import DisplaySettingsForm from '../DisplaySettingsForm';
import TargetingForm from '../TargetingForm';
import FinalSetupForm from '../FinalSetupForm';

const STEPS = [
  { step: 1, name: 'General', path: '/signup/general' },
  { step: 2, name: 'Design', path: '/signup/design' },
  { step: 3, name: 'Display Settings', path: '/signup/display' },
  { step: 4, name: 'Targeting', path: '/signup/targeting' },
  { step: 5, name: 'Final Setup', path: '/signup/final' },
] as const;

const AppLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // State management
  const [currentStep, setCurrentStep] = React.useState(() => {
    const index = STEPS.findIndex(step => step.path === location.pathname);
    return index === -1 ? 0 : index;
  });
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);

  // Derived states
  const isLastStep = currentStep === STEPS.length - 1;
  const isFirstStep = currentStep === 0;
  const shouldShowFooter = !isFirstStep; // Hide footer on first step

  // Update current step when location changes
  React.useEffect(() => {
    const index = STEPS.findIndex(step => step.path === location.pathname);
    if (index !== -1) {
      setCurrentStep(index);
      setCompletedSteps(prev => 
        Array.from(new Set([...prev, ...Array(index).fill(0).map((_, i) => i)]))
      );
    }
  }, [location.pathname]);

  const handleStepClick = (index: number) => {
    if (index <= currentStep + 1 || completedSteps.includes(index - 1)) {
      navigate(STEPS[index].path);
    }
  };

  const handleNext = () => {
    if (isLastStep) {
      setShowConfirmation(true);
      return;
    }
    setCompletedSteps(prev => Array.from(new Set([...prev, currentStep])));
    navigate(STEPS[currentStep + 1].path);
  };

  const handleBack = () => {
    if (!isFirstStep) {
      navigate(STEPS[currentStep - 1].path);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="w-[72px] flex items-center justify-center border-r h-full">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          </div>

          {/* Steps */}
          <div className="flex-1 flex">
            {STEPS.map((step, index) => {
              const isActive = currentStep === index;
              const isCompleted = completedSteps.includes(index);
              const isClickable = index <= currentStep + 1 || completedSteps.includes(index - 1);
              
              return (
                <button
                  key={step.path}
                  onClick={() => handleStepClick(index)}
                  disabled={!isClickable}
                  className={`
                    flex-1 flex items-center justify-center py-4 px-2 border-r relative
                    ${isActive ? 'border-b-2 border-[#6366F1] -mb-[1px]' : ''}
                    ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}
                  `}
                >
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Step {step.step}</div>
                    <div className={`text-sm font-medium ${
                      isActive ? 'text-[#6366F1]' : 'text-gray-700'
                    }`}>
                      {step.name}
                    </div>
                  </div>
                  {isCompleted && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                      <BsCheck className="text-green-500 text-xl" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Share Preview */}
          <div className="w-[180px] flex items-center justify-center border-l h-full">
            <button className="flex items-center gap-2 text-[#344054] hover:text-gray-900">
              <BsShare className="text-lg" />
              <span>Share Preview</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 py-10">
          <Routes>
            <Route path="/" element={<Navigate to="/signup/general" replace />} />
            <Route path="/signup/general" element={<GeneralForm />} />
            <Route path="/signup/design" element={<DesignForm />} />
            <Route path="/signup/display" element={<DisplaySettingsForm />} />
            <Route path="/signup/targeting" element={<TargetingForm />} />
            <Route path="/signup/final" element={<FinalSetupForm />} />
          </Routes>
        </div>
      </main>

      {/* Footer - Conditionally rendered */}
      {shouldShowFooter && (
        <footer className="sticky bottom-0 z-50 bg-[#F3F4F6] border-t">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center h-[72px] px-6">
            <div className="flex items-center gap-6">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <span className="text-lg">←</span>
                <span>Back</span>
              </button>
              {!isFirstStep && (
                <button
                  onClick={handleBack}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Previous Step
                </button>
              )}
            </div>
            
            <button
              onClick={handleNext}
              className={`px-8 py-2.5 rounded-lg transition-colors ${
                isLastStep 
                  ? 'bg-[#10B981] hover:bg-[#059669] text-white'
                  : 'bg-[#6366F1] hover:bg-[#4F46E5] text-white'
              }`}
            >
              {isLastStep ? 'Complete' : 'Next Step'}
            </button>
          </div>
        </footer>
      )}

      <ConfirmationModal 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      />
    </div>
  );
};

export default AppLayout; 