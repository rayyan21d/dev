import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Stepper from './components/Stepper';
import GeneralForm from './components/GeneralForm';
import DesignForm from './components/DesignForm';
import DisplaySettingsForm from './components/DisplaySettingsForm';
import TargetingForm from './components/TargetingForm';
import FinalSetupForm from './components/FinalSetupForm';
import { FormProvider } from './context/FormContext';

const App: React.FC = () => {
  return (
    <Router>
      <FormProvider>
        <div className="min-h-screen flex flex-col bg-neutral fixed inset-0">
          <Header />
          <main className="flex-grow overflow-auto">
            <Routes>
              <Route path="/signup" element={<Navigate to="/signup/general" replace />} />
              <Route
                path="/signup/*"
                element={
                  <div className="max-w-4xl mx-auto my-8 bg-white rounded-lg shadow-sm">
                    <Routes>
                      <Route path="general" element={<GeneralForm />} />
                      <Route path="design" element={<DesignForm />} />
                      <Route path="display" element={<DisplaySettingsForm />} />
                      <Route path="targeting" element={<TargetingForm />} />
                      <Route path="final" element={<FinalSetupForm />} />
                    </Routes>
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </FormProvider>
    </Router>
  );
};

export default App;
