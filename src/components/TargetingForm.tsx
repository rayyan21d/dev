import React from 'react';
import { useFormContext } from '../context/FormContext';
import Toggle from './ui/Toggle';

const TargetingForm: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  return (
    <div className="max-w-3xl mx-auto px-8 py-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">Targeting</h1>
        <p className="text-gray-600 mt-2">
          Your campaign will display on {formData.domain}
          <br />
          Now you'll be able to specify individual sub-pages.
        </p>
      </div>

      <div className="flex gap-4 mb-8">
        <button className="flex-1 py-3 bg-primary text-white rounded-lg">Comment Widget</button>
        <button className="flex-1 py-3 bg-gray-200 text-gray-600 rounded-lg">Feedback Widget</button>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-4">
          <Toggle enabled={!formData.specificPages} onChange={(enabled) => updateFormData({ specificPages: !enabled })} />
          <div>
            <h4 className="font-medium">Target All Pages</h4>
            <p className="text-sm text-gray-600">Your campaign will be displayed on all pages of the domain</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-4 mb-4">
            <Toggle enabled={formData.specificPages} onChange={(enabled) => updateFormData({ specificPages: enabled })} />
            <div>
              <h4 className="font-medium">Target Specific Sub-pages</h4>
              <p className="text-sm text-gray-600">Your campaign will be displayed on specific pages of the domain</p>
            </div>
          </div>

          {formData.specificPages && (
            <div className="mt-4 p-4 bg-white rounded-lg">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>Your campaign should</span>
                <select className="border rounded px-2 py-1">
                  <option>show</option>
                  <option>hide</option>
                </select>
                <span>if URL</span>
                <select className="border rounded px-2 py-1">
                  <option>matches</option>
                  <option>contains</option>
                  <option>starts with</option>
                  <option>ends with</option>
                </select>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 border rounded-lg px-3 py-2"
                  placeholder="www.matterapparel.com/"
                  value={formData.domain || ''}
                  readOnly
                />
                <input
                  type="text"
                  className="flex-1 border rounded-lg px-3 py-2"
                  placeholder="shop/subpage"
                />
                <button className="bg-primary text-white px-4 rounded-lg">Submit</button>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Hint: if you want to target all subpages of a given URL, you can add a "*" at the end of the URL.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TargetingForm; 