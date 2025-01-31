import React from 'react';
import { useFormContext } from '../context/FormContext';
import { BsDisplayport as BsDisplay, BsPhone as BsMobile } from 'react-icons/bs';

// Add image imports at the top
const PREVIEW_IMAGES = {
  desktop: '/matter-desktop.png',  // Assuming this is in public folder
  mobile: '/matter-mobile.png'     // Assuming this is in public folder
};

const DesignForm: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [activeView, setActiveView] = React.useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = React.useState<'layout' | 'edit'>('layout');
  const [widgetType, setWidgetType] = React.useState<'comment' | 'feedback'>('comment');
  const [position, setPosition] = React.useState<'bottom-left' | 'bottom-right'>('bottom-left');

  return (
    <div className="flex flex-col">
      {/* Device Toggle */}
      <div className="flex justify-center gap-4 p-6 border-b">
        <button
          onClick={() => setActiveView('desktop')}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg ${
            activeView === 'desktop' ? 'border-2 border-primary text-primary bg-primary/5' : 'border border-gray-200 text-gray-500'
          }`}
        >
          <BsDisplay className="text-lg" />
          <span>Desktop</span>
        </button>
        <button
          onClick={() => setActiveView('mobile')}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg ${
            activeView === 'mobile' ? 'border-2 border-primary text-primary bg-primary/5' : 'border border-gray-200 text-gray-500'
          }`}
        >
          <BsMobile className="text-lg" />
          <span>Mobile</span>
        </button>
      </div>

      <div className="flex flex-1">
        {/* Preview Section */}
        <div className="flex-1 border-r p-8">
          <div className="bg-gray-50 rounded-lg p-4 h-full">
            {activeView === 'desktop' ? (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="border-b px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded px-3 py-1 text-sm text-gray-600">
                      www.matterapparel.com
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={PREVIEW_IMAGES.desktop}
                    alt="Desktop Preview" 
                    className="w-full h-[600px] object-cover"
                  />
                  <div className={`absolute ${position === 'bottom-left' ? 'left-4' : 'right-4'} bottom-4`}>
                    {widgetType === 'comment' ? (
                      <div className="bg-white rounded-lg shadow-lg p-4 w-[320px]">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200" />
                          <div className="flex-1">
                            <div className="text-sm font-medium">Lisa Thompson</div>
                            <div className="text-sm text-gray-600">Love the seamless pattern on this dhoti!</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-primary text-white rounded-lg shadow-lg p-4 w-[320px]">
                        <h3 className="font-medium mb-2">Easy Money!</h3>
                        <p className="text-sm mb-3">Get $10 off your next order by letting us know why you purchased this item!</p>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Type here"
                            className="w-full px-3 py-2 pr-8 rounded-md bg-white/10 text-white placeholder-white/70"
                          />
                          <button className="absolute right-2 top-1/2 -translate-y-1/2">
                            →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-[320px] mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Mobile header */}
                <div className="p-4 border-b">
                  <img src="/matter-logo.png" alt="Matter" className="h-6" />
                </div>
                <div className="relative">
                  <img 
                    src={PREVIEW_IMAGES.mobile}
                    alt="Mobile Preview" 
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    {/* Same widget content as desktop but full width */}
                    {widgetType === 'comment' ? (
                      <div className="bg-white rounded-lg shadow-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200" />
                          <div className="flex-1">
                            <div className="text-sm font-medium">Lisa Thompson</div>
                            <div className="text-sm text-gray-600">Love the seamless pattern on this dhoti!</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-primary text-white rounded-lg shadow-lg p-4">
                        <h3 className="font-medium mb-2">Easy Money!</h3>
                        <p className="text-sm mb-3">Get $10 off your next order by letting us know why you purchased this item!</p>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Type here"
                            className="w-full px-3 py-2 pr-8 rounded-md bg-white/10 text-white placeholder-white/70"
                          />
                          <button className="absolute right-2 top-1/2 -translate-y-1/2">
                            →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Settings Panel */}
        <div className="w-[400px] p-8">
          {/* Tab Switcher */}
          <div className="flex mb-6">
            <button
              onClick={() => setActiveTab('layout')}
              className={`flex-1 py-2 ${activeTab === 'layout' ? 'bg-primary text-white' : 'bg-gray-100'} rounded-l-lg`}
            >
              Layout
            </button>
            <button
              onClick={() => setActiveTab('edit')}
              className={`flex-1 py-2 ${activeTab === 'edit' ? 'bg-primary text-white' : 'bg-gray-100'} rounded-r-lg`}
            >
              Edit
            </button>
          </div>

          {activeTab === 'layout' ? (
            <div className="space-y-8">
              {/* Comment Widget Section */}
              <div>
                <h3 className="text-[16px] font-medium mb-1">Comment Widget</h3>
                <p className="text-[14px] text-gray-600 mb-4">
                  Choose between light mode or dark mode for your widget
                </p>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-[14px] text-gray-600">Light Mode</span>
                  <div className="flex-1 flex justify-center">
                    <button
                      className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                        formData.darkMode ? 'bg-gray-300' : 'bg-primary'
                      }`}
                      onClick={() => updateFormData({ darkMode: !formData.darkMode })}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                          formData.darkMode ? 'left-1' : 'left-6'
                        }`}
                      />
                    </button>
                  </div>
                  <span className="text-[14px] text-gray-600">Dark Mode</span>
                </div>
              </div>

              {/* Position Section */}
              <div>
                <h3 className="text-[16px] font-medium mb-1">Choose a position to show your campaign</h3>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-[14px] text-gray-600">Bottom Left</span>
                  <div className="flex-1 flex justify-center">
                    <button
                      className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                        position === 'bottom-right' ? 'bg-gray-300' : 'bg-primary'
                      }`}
                      onClick={() => setPosition(position === 'bottom-left' ? 'bottom-right' : 'bottom-left')}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                          position === 'bottom-right' ? 'left-1' : 'left-6'
                        }`}
                      />
                    </button>
                  </div>
                  <span className="text-[14px] text-gray-600">Bottom Right</span>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-[16px] font-medium mb-2">What is the Comment Widget?</h3>
                <p className="text-[14px] leading-relaxed text-gray-600">
                  The Comment Widget is what visitors see when you've collected feedback from your customers. 
                  Here visitors can like, comment, ask questions, and get answers about your products.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Feedback Widget</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Your campaign currently contains these
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                      type="text"
                      value="Easy Money"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                    <div className="text-right text-xs text-primary mt-1">30</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Subtitle</label>
                    <input
                      type="text"
                      value="Get $10 off your next order by letting us know why you purchased this item!"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                    <div className="text-right text-xs text-primary mt-1">53</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">What is the Feedback Widget?</h3>
                <p className="text-sm text-gray-600">
                  The feedback widget is what customers on your thank-you page see once they've purchased. 
                  Here you can ask customers for their reason for purchasing, offer a discount code in exchange for 
                  feedback, and gather testimonials.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignForm; 