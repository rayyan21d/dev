import React from 'react';
import { useFormContext } from '../context/FormContext';
import { BsDisplay, BsPhone } from 'react-icons/bs';
import clsx from 'clsx';

const DesignForm: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [deviceType, setDeviceType] = React.useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = React.useState<'layout' | 'edit'>('layout');

  return (
    <div className="max-w-[1400px] mx-auto">
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
              deviceType === 'desktop' 
                ? 'bg-[#6366F1] text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            )}
          >
            <BsDisplay className="text-lg" />
            Desktop
          </button>
          <button
            onClick={() => setDeviceType('mobile')}
            className={clsx(
              'flex items-center gap-2 px-6 py-2 text-[14px] font-medium transition-colors rounded-[3px]',
              deviceType === 'mobile' 
                ? 'bg-[#6366F1] text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            )}
          >
            <BsPhone className="text-lg" />
            Mobile
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Main Preview Area */}
        <div className="flex-1 pr-8">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Browser Chrome */}
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
            <div className="relative">
              <img 
                src={deviceType === 'desktop' ? '/matter-desktop.png' : '/matter-mobile.png'}
                alt="Preview"
                className="w-full"
              />
              <div className={`absolute ${formData.position === 'right' ? 'right-4' : 'left-4'} bottom-4`}>
                {/* Widget Preview */}
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
          </div>
        </div>

        {/* Side Panel */}
        <div className="w-[320px] flex-shrink-0">
          {/* Tab Switcher */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab('layout')}
              className={clsx(
                'flex-1 py-2.5 text-[14px] font-medium rounded-lg transition-colors',
                activeTab === 'layout' 
                  ? 'bg-[#6366F1] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              Layout
            </button>
            <button
              onClick={() => setActiveTab('edit')}
              className={clsx(
                'flex-1 py-2.5 text-[14px] font-medium rounded-lg transition-colors',
                activeTab === 'edit' 
                  ? 'bg-[#6366F1] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              Edit
            </button>
          </div>

          {/* Settings Content */}
          {activeTab === 'layout' ? (
            <div className="space-y-8">
              {/* Comment Widget Section */}
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

              {/* Position Section */}
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

              {/* Info Section */}
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
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-[15px] font-medium mb-2">Feedback Widget</h3>
                <p className="text-[14px] text-gray-600 mb-4">
                  Your campaign currently contains these
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[14px] font-medium mb-2">Title</label>
                    <input
                      type="text"
                      value="Easy Money!"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-[14px]"
                    />
                    <div className="text-right text-xs text-[#6366F1] mt-1">30</div>
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium mb-2">Subtitle</label>
                    <input
                      type="text"
                      value="Get $10 off your next order by letting us know why you purchased this item!"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-[14px]"
                    />
                    <div className="text-right text-xs text-[#6366F1] mt-1">53</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[15px] font-medium mb-2">What is the Feedback Widget?</h3>
                <div className="bg-[#F9F9F9] rounded-lg p-4">
                  <p className="text-[14px] text-gray-600">
                    The feedback widget is what customers on your thank-you page see once they've purchased. 
                    Here you can ask customers for their reason for purchasing, offer a discount code in exchange for 
                    feedback, and gather testimonials.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignForm; 