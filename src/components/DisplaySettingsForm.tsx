import React from 'react';
import { useFormContext } from '../context/FormContext';
import SettingCard from './ui/SettingCard';
import { BsClock, BsArrowDown, BsDoorOpen, BsCursor } from 'react-icons/bs';

const DisplaySettingsForm: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  return (
    <div className="form-page">
      <div className="form-section">
        <h1 className="form-title">Display Settings</h1>
        <p className="form-subtitle">
          Choose one of our triggers to determine when visitors should see your campaign.
        </p>
      </div>

      <div className="p-6 space-y-4">
        <SettingCard
          icon={<BsClock className="text-xl text-gray-600" />}
          title="Timed"
          description="Trigger your campaign after X number of seconds."
          enabled={formData.timedTrigger || false}
          onToggle={(enabled) => updateFormData({ timedTrigger: enabled })}
        >
          {/* Add timed settings here */}
        </SettingCard>

        <SettingCard
          icon={<BsArrowDown className="text-xl text-gray-600" />}
          title="Scroll"
          description="Trigger your campaign after a visitor scrolls X% of your page."
          enabled={formData.scrollTrigger || false}
          onToggle={(enabled) => updateFormData({ scrollTrigger: enabled })}
        >
          <div className="flex items-center gap-2">
            <span>Show campaign after visitor scrolls</span>
            <input
              type="number"
              className="w-20 px-3 py-1 border rounded-md"
              value={formData.scrollPercentage || 20}
              onChange={(e) => updateFormData({ scrollPercentage: parseInt(e.target.value) })}
            />
            <span>% on your page.</span>
          </div>
        </SettingCard>

        <SettingCard
          icon={<BsDoorOpen className="text-xl text-gray-600" />}
          title="Exit-Intent"
          description="Show the exact moment a visitor is about to leave your website."
          enabled={formData.exitIntent || false}
          onToggle={(enabled) => updateFormData({ exitIntent: enabled })}
        />

        <SettingCard
          icon={<BsCursor className="text-xl text-gray-600" />}
          title="Click"
          description="Trigger your campaign when a visitor clicks a class or ID on your pages."
          enabled={formData.clickTrigger || false}
          onToggle={(enabled) => updateFormData({ clickTrigger: enabled })}
        />
      </div>
    </div>
  );
};

export default DisplaySettingsForm; 