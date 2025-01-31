import React from 'react';
import { useNavigate } from 'react-router-dom';

const FinalSetupForm: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Final Setup</h2>
        <p className="text-gray-600">Complete your campaign setup</p>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Complete Setup
        </button>
      </div>
    </div>
  );
};

export default FinalSetupForm; 