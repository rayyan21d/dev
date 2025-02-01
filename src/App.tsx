import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import AppLayout from './components/common/AppLayout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <FormProvider>
        <AppLayout />
      </FormProvider>
    </BrowserRouter>
  );
};

export default App;
