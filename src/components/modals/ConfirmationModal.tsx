import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-[500px] mx-4 p-10 text-center">
        {/* Success Checkmark */}
        <div className="mb-8">
          <img 
            src="/success-checkmark.png" 
            alt="Success" 
            className="w-40 h-40 mx-auto"
          />
        </div>

        {/* Content */}
        <h2 className="text-[28px] font-semibold text-gray-900 mb-2">Campaign Saved!</h2>
        <h3 className="text-[20px] text-gray-800 mb-4">Do you want to activate now?</h3>

        <div className="space-y-3 mb-8">
          <p className="text-[15px] text-gray-600">
            Your campaign has been saved successfully and it's ready to go live on your site.
          </p>
          <p className="text-[15px] text-gray-600">
            You can activate your campaign right away or do this later by visiting "My Campaigns".
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-2.5 bg-[#E5E7EB] text-gray-600 rounded-lg hover:bg-gray-300 transition-colors min-w-[160px]"
          >
            Go to Dashboard
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#10B981] text-white rounded-lg hover:bg-[#059669] transition-colors min-w-[160px]"
          >
            Activate Campaign
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal; 