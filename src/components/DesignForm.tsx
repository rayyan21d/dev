import React from 'react';
import { useFormContext } from '../context/FormContext';
import { BsDisplay, BsPhone } from 'react-icons/bs';
import clsx from 'clsx';

const DesignForm: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [deviceType, setDeviceType] = React.useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-sm text-[#6366F1] mb-2">Step 2</div>
        <h1 className="text-[28px] font-semibold mb-2">Design</h1>
        <p className="text-[15px] text-gray-600">
          Choose how your campaign will look like on different devices.
        </p>
      </div>

      {/* Device Type Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-[#F5F5F5] p-0.5 rounded-[4px]">
          <button
            onClick={() => setDeviceType('desktop')}
            className={clsx(
              'flex items-center gap-2 px-6 py-2 text-[14px] font-medium transition-colors rounded-[3px]',
              deviceType === 'desktop' ? 'bg-[#6366F1] text-white' : 'text-gray-600'
            )}
          >
            <BsDisplay className="text-lg" />
            Desktop
          </button>
          <button
            onClick={() => setDeviceType('mobile')}
            className={clsx(
              'flex items-center gap-2 px-6 py-2 text-[14px] font-medium transition-colors rounded-[3px]',
              deviceType === 'mobile' ? 'bg-[#6366F1] text-white' : 'text-gray-600'
            )}
          >
            <BsPhone className="text-lg" />
            Mobile
          </button>
        </div>
      </div>

      {/* Preview Container */}
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Browser Header */}
        <div className="bg-[#F9F9F9] border-b border-gray-200 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-gray-200" />
            <div className="w-3 h-3 rounded-full bg-gray-200" />
            <div className="w-3 h-3 rounded-full bg-gray-200" />
          </div>
          <div className="flex-1">
            <div className="bg-white rounded px-3 py-1 text-sm text-gray-600 border border-gray-200 max-w-max">
              www.matterapparel.com
            </div>
          </div>
        </div>

        {/* Preview Content */}
        <div className="p-6">
          {deviceType === 'desktop' ? (
            <div className="aspect-[16/9] bg-gray-50 rounded-lg relative">
              {/* Desktop preview content */}
              <div className={`absolute ${formData.position === 'right' ? 'right-4' : 'left-4'} bottom-4`}>
                <div className="bg-white rounded-lg shadow-lg p-4 w-[320px]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Lisa Thompson</div>
                      <div className="text-sm text-gray-600">Love the seamless pattern on this dhoti!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-[320px] mx-auto">
              <div className="aspect-[9/16] bg-gray-50 rounded-lg relative">
                {/* Mobile preview content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Lisa Thompson</div>
                        <div className="text-sm text-gray-600">Love the seamless pattern on this dhoti!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Settings */}
      <div className="mt-8 space-y-6">
        {/* Layout/Edit Tabs */}
        <div className="flex gap-2">
          <button
            className={clsx(
              'flex-1 py-2 text-[14px] font-medium rounded-lg transition-colors',
              'bg-[#6366F1] text-white'
            )}
          >
            Layout
          </button>
          <button
            className={clsx(
              'flex-1 py-2 text-[14px] font-medium rounded-lg transition-colors',
              'bg-gray-100 text-gray-600 hover:bg-gray-200'
            )}
          >
            Edit
          </button>
        </div>

        {/* Widget Settings */}
        <div className="space-y-6">
          <div>
            <h3 className="text-[15px] font-medium mb-2">Comment Widget</h3>
            <p className="text-[14px] text-gray-600 mb-4">
              Choose between light mode or dark mode for your widget
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[14px] text-gray-700">Light Mode</span>
              <button
                onClick={() => updateFormData({ darkMode: !formData.darkMode })}
                className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                  formData.darkMode ? 'bg-[#6366F1]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                    formData.darkMode ? 'left-6' : 'left-1'
                  }`}
                />
              </button>
              <span className="text-[14px] text-gray-400">Dark Mode</span>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-medium mb-2">Choose a position to show your campaign</h3>
            <div className="flex items-center gap-4">
              <span className="text-[14px] text-gray-700">Bottom Left</span>
              <button
                onClick={() => updateFormData({ position: formData.position === 'left' ? 'right' : 'left' })}
                className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                  formData.position === 'right' ? 'bg-[#6366F1]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                    formData.position === 'right' ? 'left-6' : 'left-1'
                  }`}
                />
              </button>
              <span className="text-[14px] text-gray-400">Bottom Right</span>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-medium mb-2">What is the Comment Widget?</h3>
            <div className="bg-[#F9F9F9] rounded-lg p-4">
              <p className="text-[14px] text-gray-600">
                The Comment Widget is what visitors see when you've collected feedback from your customers. 
                Here visitors can like, comment, ask questions, and get answers about your products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignForm; 