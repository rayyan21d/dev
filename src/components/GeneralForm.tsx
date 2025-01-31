import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';

const GeneralForm: React.FC = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/signup/design');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 flex-grow flex flex-col">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">General</h2>
        <p className="text-gray-600">
          Enter your website URL and give your campaign a name
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 flex-grow flex flex-col">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-center mb-2">Enter Domain</h3>
            <p className="text-gray-600 text-center text-sm mb-4">
              Type the domain you want to show your campaign on
            </p>
            <input
              type="text"
              value={formData.domain || ''}
              onChange={(e) => updateFormData({ domain: e.target.value })}
              placeholder="Enter your domain (e.g. mysite.com)"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-center mb-2">Name Your Campaign</h3>
            <p className="text-gray-600 text-center text-sm mb-4">
              Give your campaign a descriptive name (so you can easily find it again)
            </p>
            <input
              type="text"
              value={formData.campaignName || ''}
              onChange={(e) => updateFormData({ campaignName: e.target.value })}
              placeholder="My-Campaign-2021-04"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
          </div>
        </div>

        <div className="flex justify-center mt-auto pt-8">
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralForm; 