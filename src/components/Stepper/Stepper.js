import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { TiTick } from 'react-icons/ti'


const Stepper = ({ steps, currentStep }) => {
    const [newStep, setNewStep] = useState([]);
    const stepRef = useRef();
    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps];
        let count = 0;

        while (count < newSteps.length) {
            if (count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true,
                };
                count++;
            }
            else if (count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true,
                };
                count++;
            }
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                };
                count++;
            }
        }
        return newSteps;
    }
    useEffect(() => {
        //create object
        const stepsState = steps.map((step, index) => 
            Object.assign({}, 
            {
                description: step,
                completed: false,
                highlighted: index === 0 ? true : false,
                selected: index === 0 ? true : false,
            })
        );

        stepRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepRef.current);
        setNewStep(current);
    }, [steps, currentStep]);
    const displaySteps = newStep.map((step, index) => {
        return (
            <div key={index}
                className={index === newStep.length - 1 ? 'flex items-center mr-12' : "w-full flex items-center"}>
                <div className='relative flex flex-col items-center text-teal-600'>

                    <div className={`rounded-full transistion duration-500 easy-in-out
                    border-2 border-grey-300 h-12 w-12 flex items-center justify-center
                    py-3 ${step.selected ? "bg-green-600 text-white font-bold border border-green-600" : ""}`}>
                        {/* Display Number */}
                        {
                            step.completed ? (
                                <TiTick size={24} />
                                
                        ):(index+1)
                        }
                    </div>


                    <div className={`absolute top-0 text-center mt-16 w-full text-xs font-medium uppercase
                    ${step.highlighted ? "text-gray-900" : "text-gray-500"}`}>{step.description}{/* Display description */}</div>
                </div>
                <div className={`flex-auto border-t-2 transistion duration-500 ease-in-out 
                ${step.completed ? "border-green-600" : "border-gray-300"}`}>
                    {/* Display Line */}
                </div>
            </div>
        );
    });

    return (
        <div className='w-full mx-4 p-4 flex justify-between items-center'>
            {displaySteps}
        </div>
    )
    // const steps = ["Registration", "user profile", "Bank Account", "Pan No.", "Add Funds"];
    // const [currentStep, setCurrentStep] = useState(1);
    // const [complete, setComplete] = useState(false);
    // return (
    //     <>
    //         <div className="flex justify-between mt-4">
    //             {steps?.map((step, i) => (
    //                 <div
    //                     key={i}
    //                     className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
    //                         } `}
    //                 >
    //                     <div className="step">
    //                         {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
    //                     </div>
    //                     <p className="text-gray-500">{step}</p>
    //                 </div>
    //             ))}
    //         </div>
    //         {!complete && (
    //             <button
    //                 className="btn"
    //                 onClick={() => {
    //                     currentStep === steps.length
    //                         ? setComplete(true)
    //                         : setCurrentStep((prev) => prev + 1);
    //                 }}
    //             >
    //                 {currentStep === steps.length ? "Finish" : "Next"}
    //             </button>
    //         )}
    //     </>
    // );
}

export default Stepper
