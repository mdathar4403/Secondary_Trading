import React from 'react'
import { useContext } from 'react'
import { StepperContext } from '../../contexts/StepperContext';

export default function Details() {
    const { panData, setPanData } = useContext(StepperContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPanData({ ...panData, [name]: value });
    }
  return (
    <div className='flex flex-col'>
            <div className="w-full mx-2 flex-1">
                <div className="flex left-0 font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    {" "}
                    Pan No.
                </div>
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                    onChange={handleChange}
                    value={panData["panno"] || ""}
                    name="panno"
                    placeholder='Enter your Pan No.'
                    className="w-full text-gray-800 p-1 px-2 appearance-none outline-none"
                />
            </div>

            <div className="w-full mx-2 flex-1">
                <div className="flex left-0 font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Confirm Pan No.
                </div>
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                    onChange={handleChange}
                    value={panData["confirm_pan"] || ""}
                    name="confirm_pan"
                    placeholder='confirm your pan no.'
                    type = "password"
                    className="w-full text-gray-800 p-1 px-2 appearance-none outline-none"
                />
            </div>
        </div>
  )
}

