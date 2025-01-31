import React from 'react';
import { useFormContext } from '../context/FormContext';
import { BsDisplayport as BsDisplay, BsPhone as BsMobile } from 'react-icons/bs';

const DesignForm: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [activeView, setActiveView] = React.useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="max-w-3xl mx-auto px-8 py-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">Design</h1>
        <p className="text-gray-600 mt-2">Customize how your widget looks</p>
      </div>

      {/* Device Toggle */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveView('desktop')}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg ${
            activeView === 'desktop' ? 'border-2 border-primary text-primary' : 'border border-gray-200 text-gray-500'
          }`}
        >
          <BsDisplay className="text-xl" />
          <span>Desktop</span>
        </button>
        <button
          onClick={() => setActiveView('mobile')}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg ${
            activeView === 'mobile' ? 'border-2 border-primary text-primary' : 'border border-gray-200 text-gray-500'
          }`}
        >
          <BsMobile className="text-xl" />
          <span>Mobile</span>
        </button>
      </div>

      {/* Settings */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Widget Type</h3>
          <div className="flex gap-4">
            <button className="flex-1 py-3 bg-primary text-white rounded-lg">Comment Widget</button>
            <button className="flex-1 py-3 bg-gray-200 text-gray-600 rounded-lg">Feedback Widget</button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Theme</h3>
          <div className="flex items-center justify-between p-4 bg-white rounded-lg">
            <span className="text-gray-600">Light Mode</span>
            <button
              className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${
                formData.darkMode ? 'bg-gray-300' : 'bg-primary'
              }`}
              onClick={() => updateFormData({ darkMode: !formData.darkMode })}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                  formData.darkMode ? '' : 'translate-x-6'
                }`}
              />
            </button>
            <span className="text-gray-600">Dark Mode</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignForm; 