import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CampaignSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CampaignSuccessModal: React.FC<CampaignSuccessModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl mx-4 p-8 text-center">
        {/* Success Image */}
        <div className="mb-6">
          <img 
            src="/success-checkmark.png" 
            alt="Success" 
            className="w-32 h-32 mx-auto"
          />
        </div>

        {/* Content */}
        <h2 className="text-[24px] font-semibold mb-3">Campaign Saved!</h2>
        <h3 className="text-[20px] text-gray-800 mb-6">Do you want to activate now?</h3>

        <p className="text-[15px] text-gray-600 mb-3">
          Your campaign has been saved successfully and it's ready to go live on your site.
        </p>
        <p className="text-[15px] text-gray-600 mb-8">
          You can activate your campaign right away or do this later by visiting "My Campaigns".
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Go to Dashboard
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Activate Campaign
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignSuccessModal; 