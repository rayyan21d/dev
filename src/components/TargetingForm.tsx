import React from 'react';
import { useFormContext } from '../context/FormContext';
import { BsFileText } from 'react-icons/bs';

const TargetingForm: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [widgetType, setWidgetType] = React.useState<'comment' | 'feedback'>('comment');
  const [showCondition, setShowCondition] = React.useState<'show' | 'hide'>('show');
  const [urlCondition, setUrlCondition] = React.useState<'matches' | 'contains' | 'starts' | 'ends'>('matches');

  return (
    <div className="max-w-3xl mx-auto px-8 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-sm text-primary mb-2">Step 4</div>
        <h1 className="text-[28px] font-semibold mb-2">Targeting</h1>
        <p className="text-[15px] text-gray-600">
          Your campaign will display on <span className="font-medium">{formData.domain}</span>
          <br />
          Now you'll be able to specify individual sub-pages.
        </p>
      </div>

      {/* Widget Type Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-[#F5F5F5] p-0.5 rounded-[4px]">
          <button
            onClick={() => setWidgetType('comment')}
            className={`px-6 py-2 text-[14px] font-medium transition-colors rounded-[3px] ${
              widgetType === 'comment' ? 'bg-primary text-white' : 'text-gray-500'
            }`}
          >
            Comment Widget
          </button>
          <button
            onClick={() => setWidgetType('feedback')}
            className={`px-6 py-2 text-[14px] font-medium transition-colors rounded-[3px] ${
              widgetType === 'feedback' ? 'bg-primary text-white' : 'text-gray-500'
            }`}
          >
            Feedback Widget
          </button>
        </div>
      </div>

      {/* Settings Cards */}
      <div className="space-y-4">
        {/* Target All Pages */}
        <div className="bg-[#F9F9F9] rounded-lg overflow-hidden">
          <div className="flex items-start">
            <div className="p-6 border-r border-[#EFEFEF] bg-[#FAFAFA] flex items-center">
              <button
                className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                  !formData.specificPages ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => updateFormData({ specificPages: false })}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                    !formData.specificPages ? 'left-6' : 'left-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex gap-4 p-6 flex-1">
              <div className="w-10 h-10 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                <BsFileText className="text-xl text-gray-600" />
              </div>
              <div>
                <h3 className="text-[15px] font-medium mb-1">Target <span className="text-primary">All</span> Pages</h3>
                <p className="text-[14px] text-gray-600">
                  Your campaign will be displayed on all pages of the domain
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Target Specific Pages */}
        <div className="bg-[#F9F9F9] rounded-lg overflow-hidden">
          <div className="flex items-start">
            <div className="p-6 border-r border-[#EFEFEF] bg-[#FAFAFA] flex items-center">
              <button
                className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                  formData.specificPages ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => updateFormData({ specificPages: true })}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                    formData.specificPages ? 'left-6' : 'left-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex-1">
              <div className="flex gap-4 p-6">
                <div className="w-10 h-10 bg-[#E5F8FF] rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00B1EA]">
                    <path d="M20 4H4v16h16V4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 8h16M8 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[15px] font-medium mb-1">Target <span className="text-[#00B1EA]">Specific</span> Sub-pages</h3>
                  <p className="text-[14px] text-gray-600">
                    Your campaign will be displayed on specific pages of the domain
                  </p>
                </div>
              </div>

              {formData.specificPages && (
                <div className="px-6 pb-6 space-y-4">
                  <div className="flex items-center gap-2 text-[14px]">
                    <span className="text-gray-600">Your campaign should</span>
                    <select 
                      value={showCondition}
                      onChange={(e) => setShowCondition(e.target.value as 'show' | 'hide')}
                      className="px-3 py-1.5 border rounded-md bg-white"
                    >
                      <option value="show">show</option>
                      <option value="hide">hide</option>
                    </select>
                    <span className="text-gray-600">if URL</span>
                    <select
                      value={urlCondition}
                      onChange={(e) => setUrlCondition(e.target.value as any)}
                      className="px-3 py-1.5 border rounded-md bg-white"
                    >
                      <option value="matches">matches</option>
                      <option value="contains">contains</option>
                      <option value="starts">starts with</option>
                      <option value="ends">ends with</option>
                    </select>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border rounded-lg bg-gray-100"
                      value={formData.domain}
                      disabled
                    />
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border rounded-lg"
                      placeholder="shop/subpage"
                    />
                    <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                      Submit
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 italic">
                    Hint: if you want to target all subpages of a given URL, you can add a "*" at the end of the URL.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetingForm; 