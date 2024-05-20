import React from 'react'
import { useContext } from 'react'
import { StepperContext } from '../../contexts/StepperContext'

export default function Account() {
    const { userData, setUserData } = useContext(StepperContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }
    return (
        <div className='flex flex-col'>
            <div className="w-full mx-2 flex-1">
                <div className="flex left-0 font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    {" "}
                    Account No.
                </div>
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                    onChange={handleChange}
                    value={userData["accountno"] || ""}
                    name="accountno"
                    placeholder='Enter your Account No.'
                    className="w-full text-gray-800 p-1 px-2 appearance-none outline-none"
                />
            </div>

            <div className="w-full mx-2 flex-1">
                <div className="flex left-0 font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Confirm Account No.
                </div>
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                    onChange={handleChange}
                    value={userData["confirm_account"] || ""}
                    name="confirm_account"
                    placeholder='Confirm your Account No.'
                    className="w-full text-gray-800 p-1 px-2 appearance-none outline-none"
                />
            </div>
            <div className="w-full mx-2 flex-1">
                <div className="flex left-0 font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    IFSC Code
                </div>
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                    onChange={handleChange}
                    value={userData["ifsc_code"] || ""}
                    name="ifsc_code"
                    placeholder='Enter your IFSC Code'
                    className="w-full text-gray-800 p-1 px-2 appearance-none outline-none"
                />
            </div>
            {/* <div className="w-full mx-2 flex-1">
                <div className="flex left-0 font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Confirm Account No.
                </div>
            </div>
            <div className="bg-white p-1 flex border border-gray-200 rounded">
                <input
                    onChange={handleChange}
                    value={userData["confirm_account"] || ""}
                    name="confirm_account"
                    placeholder='Confirm your Account No.'
                    type = "password"
                    className="w-full text-gray-800 p-1 px-2 appearance-none outline-none"
                />
            </div> */}
        </div>
    )
}
