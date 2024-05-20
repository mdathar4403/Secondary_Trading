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
                    Username
                </div>
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                    onChange={handleChange}
                    value={userData["username"] || ""}
                    name="username"
                    placeholder='Enter your username'
                    className="w-full text-gray-800 p-1 px-2 appearance-none outline-none"
                />
            </div>

            <div className="w-full mx-2 flex-1">
                <div className="flex left-0 font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Password
                </div>
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                    onChange={handleChange}
                    value={userData["password"] || ""}
                    name="password"
                    placeholder='Enter your password'
                    type = "password"
                    className="w-full text-gray-800 p-1 px-2 appearance-none outline-none"
                />
            </div>
        </div>
    )
}
