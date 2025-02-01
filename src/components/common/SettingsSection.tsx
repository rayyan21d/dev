import React from 'react';

interface SettingsSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({ title, description, children }) => {
  return (
    <div>
      <h3 className="text-[15px] font-medium mb-2">{title}</h3>
      {description && (
        <p className="text-[14px] text-gray-600 mb-4">{description}</p>
      )}
      {children}
    </div>
  );
};

export default SettingsSection; 