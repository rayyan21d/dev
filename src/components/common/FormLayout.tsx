import React from 'react';
import AppLayout from './AppLayout';

interface FormLayoutProps {
  children: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <AppLayout>
      <div className="max-w-[1400px] mx-auto px-8 py-10">
        {children}
      </div>
    </AppLayout>
  );
};

export default FormLayout; 