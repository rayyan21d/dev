import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import AppLayout from './components/common/AppLayout';
import GeneralForm from './components/GeneralForm';
import DesignForm from './components/DesignForm';
import DisplaySettingsForm from './components/DisplaySettingsForm';
import TargetingForm from './components/TargetingForm';
import FinalSetupForm from './components/FinalSetupForm';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <FormProvider>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/signup/general" replace />} />
            <Route path="/signup/general" element={<GeneralForm />} />
            <Route path="/signup/design" element={<DesignForm />} />
            <Route path="/signup/display" element={<DisplaySettingsForm />} />
            <Route path="/signup/targeting" element={<TargetingForm />} />
            <Route path="/signup/final" element={<FinalSetupForm />} />
          </Routes>
        </AppLayout>
      </FormProvider>
    </BrowserRouter>
  );
};

export default App;
