import React from 'react';
import { useFormContext } from '../context/FormContext';
import { BsClock, BsArrowDown, BsDoorOpen, BsCursor } from 'react-icons/bs';

const DisplaySettingsForm: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  return (
    <div className="max-w-3xl mx-auto px-8 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-sm text-primary mb-2">Step 3</div>
        <h1 className="text-[28px] font-semibold mb-2">Display Settings</h1>
        <p className="text-[15px] text-gray-600">
          Choose one of our triggers to determine when visitors should see your campaign.
        </p>
      </div>

      {/* Settings Cards */}
      <div className="space-y-4">
        {/* Timed Card */}
        <div className="bg-[#F9F9F9] rounded-lg overflow-hidden">
          <div className="flex items-start">
            <div className="p-6 border-r border-[#EFEFEF] bg-[#FAFAFA] flex items-center">
              <button
                className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                  formData.timedTrigger ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => updateFormData({ timedTrigger: !formData.timedTrigger })}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                    formData.timedTrigger ? 'left-6' : 'left-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex gap-4 p-6 flex-1">
              <div className="w-10 h-10 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                <BsClock className="text-xl text-gray-600" />
              </div>
              <div>
                <h3 className="text-[15px] font-medium mb-1">Timed</h3>
                <p className="text-[14px] text-gray-600">
                  Trigger your campaign after X number of seconds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Card */}
        <div className="bg-[#F9F9F9] rounded-lg overflow-hidden">
          <div className="flex items-start">
            <div className="p-6 border-r border-[#EFEFEF] bg-[#FAFAFA] flex items-center">
              <button
                className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                  formData.scrollTrigger ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => updateFormData({ scrollTrigger: !formData.scrollTrigger })}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                    formData.scrollTrigger ? 'left-6' : 'left-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex-1">
              <div className="flex gap-4 p-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <BsArrowDown className="text-xl text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-[15px] font-medium mb-1">Scroll</h3>
                  <p className="text-[14px] text-gray-600">
                    Trigger your campaign after a visitor scrolls X% of your page.
                  </p>
                </div>
              </div>
              
              {/* Create components for reuse for scroll and exit intent */}
              {formData.scrollTrigger && (
                <div className="px-6 pb-6 flex items-center gap-2 text-[14px]">
                  <span className="text-gray-600">Show campaign after visitor scrolls</span>
                  <input
                    type="number"
                    className="w-20 px-3 py-1.5 border rounded-md text-center"
                    value={formData.scrollPercentage || 20}
                    onChange={(e) => updateFormData({ scrollPercentage: parseInt(e.target.value) })}
                  />
                  <span className="text-gray-600">on your page.</span>
                </div>
              )}
            </div>
          </div>
        </div>





        {/* Exit-Intent Card */}
        <div className="bg-[#F9F9F9] rounded-lg overflow-hidden">
          <div className="flex items-start">
            <div className="p-6 border-r border-[#EFEFEF] bg-[#FAFAFA] flex items-center">
              <button
                className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                  formData.exitIntent ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => updateFormData({ exitIntent: !formData.exitIntent })}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                    formData.exitIntent ? 'left-6' : 'left-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex gap-4 p-6 flex-1">
              <div className="w-10 h-10 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                <BsDoorOpen className="text-xl text-gray-600" />
              </div>
              <div>
                <h3 className="text-[15px] font-medium mb-1">Exit-Intent</h3>
                <p className="text-[14px] text-gray-600">
                  Show the exact moment a visitor is about to leave your website.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Click Card */}
        <div className="bg-[#F9F9F9] rounded-lg overflow-hidden">
          <div className="flex items-start">
            <div className="p-6 border-r border-[#EFEFEF] bg-[#FAFAFA] flex items-center">
              <button
                className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                  formData.clickTrigger ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => updateFormData({ clickTrigger: !formData.clickTrigger })}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                    formData.clickTrigger ? 'left-6' : 'left-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex gap-4 p-6 flex-1">
              <div className="w-10 h-10 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                <BsCursor className="text-xl text-gray-600" />
              </div>
              <div>
                <h3 className="text-[15px] font-medium mb-1">Click</h3>
                <p className="text-[14px] text-gray-600">
                  Trigger your campaign when a visitor clicks a class or ID on your pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplaySettingsForm; 