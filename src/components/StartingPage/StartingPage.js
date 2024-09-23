import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartingPage = () => {
    const [selectedOption, setSelectedOption] = useState(''); // State to track selected option
    const navigate = useNavigate(); // Hook from react-router to navigate between pages

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value); // Set selected option based on radio input
    };

    const handleNext = () => {
        if (selectedOption === 'individual') {
            navigate('/userDetails'); // Navigate to user page
        } else if (selectedOption === 'company') {
            navigate('/companyDetails'); // Navigate to company page
        } else {
            alert('Please select an option');
        }
    };
    return (
        <div class="h-screen md:flex">
            <div
                class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
                <div>
                    <h1 class="text-white font-bold text-4xl font-sans">GoFinance</h1>
                    <p class="text-white mt-1">The most popular peer to peer lending at SEA</p>
                    <button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
                </div>
                <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div class="flex md:w-1/2 justify-center py-10 bg-white">
                <form class="bg-white">
                    <h1 class="text-gray-800 font-bold text-2xl mb-24 mt-28">Welcome👋</h1>
                    <div class="mb-8 ">
                        <label class="text-left mb-8 block text-base font-medium text-[#07074D]">
                            Login/ Register as
                        </label>
                        <div class="flex flex-col">
                            <div class="flex items-center mb-3">
                                <input
                                    type="radio"
                                    name="radio1"
                                    id="radioButton1"
                                    value="individual"
                                    onChange={handleOptionChange}
                                    className="h-5 w-5"
                                />
                                <label
                                    for="radioButton1"
                                    class="pl-3 text-base font-medium text-[#07074D]"
                                >
                                    Individual
                                </label>
                            </div>
                            <div class="flex items-center">
                                <input
                                    type="radio"
                                    name="radio1"
                                    id="radioButton2"
                                    value="company"
                                    onChange={handleOptionChange}
                                    className="h-5 w-5"
                                />
                                <label
                                    for="radioButton2"
                                    class="pl-3 text-base font-medium text-[#07074D]"
                                >
                                    Company
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={handleNext}
                            className=" w-64 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StartingPage
