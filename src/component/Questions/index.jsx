import React, { useState } from "react";
import { Navbar, Button, Stepper } from '../../shared';
import { StepsList } from '../../utils/constant';
import { AreaOfExpertiseFields, EducationalBackgroundFields, MentorShipExperienceFields, PersonalInformationFields, ProfessionalBackgroundFields, MentorshipPreferenceFields,
  GoalsandExperienceFields, AvailabilityCommitmentFields, AdditionalInformationFields
 } from "../../utils/formFields";
import StepComponenRender from "./StepComponentRender";
import { useNavigate } from "react-router-dom";

export const Questions = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1)

  const allFields = [PersonalInformationFields, ProfessionalBackgroundFields, EducationalBackgroundFields, AreaOfExpertiseFields, MentorShipExperienceFields, MentorshipPreferenceFields,
    GoalsandExperienceFields, AvailabilityCommitmentFields, AdditionalInformationFields
  ]

  const handleNextStep = () => {
    if(allFields.length === currentStep) {
      console.log('Submit') 
      navigate("/dashboard");
    }
    else setCurrentStep(currentStep + 1)
  }

  return (
    <>
      <Navbar />
      <div className="px-9">
        <h2 className="text-xl text-left py-8">
          Fill the Question and Answer
        </h2>

        <div style={{ boxShadow: '4px 4px 25px 0px rgba(0, 0, 0, 0.15)' }}>
          <div className="steps pl-24 pr-28" style={{ boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.1)' }}>
            <Stepper steps={StepsList} currentStep={currentStep} />
          </div>
          <div className="form-container">
            <div className="grid grid-cols-2 gap-4">
              <StepComponenRender fields={allFields[currentStep - 1]} />
            </div>
            <div className="flex gap-6 justify-center align-middle">
              {currentStep === 1 && <Button btnName='Cancel' btnCategory="secondary" onClick={() => navigate('/login-type')} />}
              {currentStep > 1 && <Button btnName='Back' btnCategory="secondary" onClick={() => setCurrentStep(currentStep - 1)} />}
              <Button btnName='Next' btnCategory="primary" onClick={handleNextStep} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
