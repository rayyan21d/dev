import React from 'react';
import { useFormContext } from '../context/FormContext';
import { BsCalendar3, BsEnvelope, BsX } from 'react-icons/bs';
import CampaignSuccessModal from './modals/CampaignSuccessModal';

const FinalSetupForm: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [emails, setEmails] = React.useState<string[]>(['justin@matterapparel.com']);
  const [newEmail, setNewEmail] = React.useState('');
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  const handleAddEmail = () => {
    if (newEmail && !emails.includes(newEmail)) {
      setEmails([...emails, newEmail]);
      setNewEmail('');
    }
  };

  const handleRemoveEmail = (emailToRemove: string) => {
    setEmails(emails.filter(email => email !== emailToRemove));
  };

  const handleComplete = () => {
    setShowSuccessModal(true);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto px-8 py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-sm text-primary mb-2">Step 5</div>
          <h1 className="text-[28px] font-semibold mb-2">Final Setup</h1>
          <p className="text-[15px] text-gray-600">
            You're almost there! Save your preferences before setting your campaign live.
          </p>
        </div>

        {/* Settings Cards */}
        <div className="space-y-4">
          {/* Schedule Card */}
          <div className="bg-[#F9F9F9] rounded-lg overflow-hidden">
            <div className="flex items-start">
              <div className="p-6 border-r border-[#EFEFEF] bg-[#FAFAFA] flex items-center">
                <button
                  className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                    formData.scheduleEnabled ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => updateFormData({ scheduleEnabled: !formData.scheduleEnabled })}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                      formData.scheduleEnabled ? 'left-6' : 'left-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex gap-4 p-6 flex-1">
                <div className="w-10 h-10 bg-[#E5F8FF] rounded-lg flex items-center justify-center">
                  <BsCalendar3 className="text-xl text-[#00B1EA]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-medium mb-1">Schedule</h3>
                  <p className="text-[14px] text-gray-600">
                    Schedule your campaign to show during a specific period.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Notifications Card */}
          <div className="bg-[#F9F9F9] rounded-lg overflow-hidden">
            <div className="flex items-start">
              <div className="p-6 border-r border-[#EFEFEF] bg-[#FAFAFA] flex items-center">
                <button
                  className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                    formData.emailNotifications ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => updateFormData({ emailNotifications: !formData.emailNotifications })}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                      formData.emailNotifications ? 'left-6' : 'left-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex-1">
                <div className="flex gap-4 p-6">
                  <div className="w-10 h-10 bg-[#E8FAF0] rounded-lg flex items-center justify-center">
                    <BsEnvelope className="text-xl text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium mb-1">Email Notifications</h3>
                    <p className="text-[14px] text-gray-600">
                      Get an email notification when a new lead signs up.
                    </p>
                  </div>
                </div>

                {formData.emailNotifications && (
                  <div className="px-6 pb-6 space-y-4">
                    {/* Email Tags */}
                    <div className="flex flex-wrap gap-2">
                      {emails.map(email => (
                        <div 
                          key={email}
                          className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md text-[14px] text-gray-700"
                        >
                          {email}
                          <button 
                            onClick={() => handleRemoveEmail(email)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <BsX className="text-lg" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Email Input */}
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder="name@email.com, name@email.com"
                        className="flex-1 px-3 py-2 border rounded-lg text-[14px]"
                      />
                      <button 
                        onClick={handleAddEmail}
                        className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-[14px]"
                      >
                        Add Email
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 italic">
                      Hint: Add multiple recipients by separating each of them with a comma
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CampaignSuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
};

export default FinalSetupForm; 