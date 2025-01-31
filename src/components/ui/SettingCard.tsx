import React from 'react';
import Toggle from './Toggle';

interface SettingCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  children?: React.ReactNode;
}

const SettingCard: React.FC<SettingCardProps> = ({
  icon,
  title,
  description,
  enabled,
  onToggle,
  children
}) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <div className="flex items-start gap-4 p-4 border-b border-gray-200">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-medium text-gray-900">{title}</h4>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <Toggle enabled={enabled} onChange={onToggle} />
      </div>
      {enabled && children && (
        <div className="p-4 bg-white">{children}</div>
      )}
    </div>
  );
};

export default SettingCard; 