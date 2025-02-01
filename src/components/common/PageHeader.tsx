import React from 'react';

interface PageHeaderProps {
  step: number;
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ step, title, description }) => {
  return (
    <div className="text-center mb-8">
      <div className="text-sm text-primary mb-2">Step {step}</div>
      <h1 className="text-[28px] font-semibold mb-2">{title}</h1>
      <p className="text-[15px] text-gray-600">{description}</p>
    </div>
  );
};

export default PageHeader; 