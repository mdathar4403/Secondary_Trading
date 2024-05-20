import React from 'react'
import { useState } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
// import Login from '../components/Login/Login';
import TopBar from '../components/TopBar/TopBar';
import Stepper from '../components/Stepper/Stepper';
import StepperControls from '../components/Stepper/StepperControls';
import Account from '../components/Steps/Account';
import Details from '../components/Steps/Details';
// import Payment from '../components/Steps/Payment';
import Final from '../components/Steps/Final';
import { StepperContext } from '../contexts/StepperContext';

const HomePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const [userData, setUserData] = useState('');
  const [panData, setPanData] = useState('');
  const [finalData, setFinalData] = useState([]);

  const steps = [
    "Account information",
    "Personal Details",
    "Compelete",
  ]
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (<Account />)
      case 2:
        return (<Details />)
      case 3:
        return (<Final />)
      default:
    }
  }
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }
  return (
    <div class='flex'>
      <div className="flex-none w-60">
        <Dashboard />
      </div>
      <div className='flex-1 w-46'>
        <TopBar pageName="Details" />
        <div className="w-full mx-auto shadow-xl rounded-2xl pb-2 bg-white">
          <div className="container horizontal mt-5">
            <Stepper
              steps={steps}
              currentStep={currentStep}
            />
            {/* Display Components */}
            <div className='my-10 p-10'>
              <StepperContext.Provider value={{
                userData,
                setUserData,
                panData,
                setPanData,
                finalData,
                setFinalData,
              }}
              >
                {displayStep(currentStep)}
              </StepperContext.Provider>
            </div>
          </div>
          {currentStep !== steps.length &&
            <StepperControls
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage
