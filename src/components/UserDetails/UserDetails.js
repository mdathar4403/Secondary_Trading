import React from 'react'

const UserDetails = () => {
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

            <div class="flex md:w-1/2 justify-center py-1 items-center bg-white ">
                <div class="flex flex-col items-center justify-center p-4">
                    <span class='mb-8'>User Details</span>
                    <div class="mx-auto w-full max-w-[550px]">
                        <form action="https://formbold.com/s/FORM_ID" method="POST">
                            <div class="-mx-3 flex flex-wrap">
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label
                                            for="fName"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fName"
                                            id="fName"
                                            placeholder="First Name"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label
                                            for="lName"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lName"
                                            id="lName"
                                            placeholder="Last Name"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="-mx-3 flex flex-wrap">
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label
                                            for="fName"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Address 1*
                                        </label>
                                        <input
                                            type="text"
                                            name="Addess1"
                                            id="fName"
                                            placeholder="Address 1*"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label
                                            for="lName"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Address 2
                                        </label>
                                        <input
                                            type="text"
                                            name="lName"
                                            id="lName"
                                            placeholder="Address 2"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="-mx-3 flex flex-wrap">
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label
                                            for="fName"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            name="City"
                                            id="fName"
                                            placeholder="City"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label
                                            for="lName"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            name="State"
                                            id="lName"
                                            placeholder="State"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="-mx-3 flex flex-wrap">
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label
                                            for="fName"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Pincode
                                        </label>
                                        <input
                                            type="text"
                                            name="Pincode"
                                            id="fName"
                                            placeholder="Pincode"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label
                                            for="lName"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Phone no.
                                        </label>
                                        <input
                                            type="text"
                                            name="Phoneno."
                                            id="lName"
                                            placeholder="Phone no."
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="-mx-3 flex flex-wrap">
                                <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label
                                        for="countries"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Select a Question
                                    </label>
                                    <select id="questions" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                                        <option selected>Choose a question</option>
                                        <option value="US">Your school name</option>
                                        <option value="CA">Your pet name</option>
                                        <option value="FR">What is your favorite book?</option>
                                        <option value="DE">What is your favorite movie?</option>
                                        <option value="UE">What is your favorite sports team?</option>
                                    </select>
                                </div>
                                </div>
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label
                                            for="lName"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Security Question Answer
                                        </label>
                                        <input
                                            type="text"
                                            name="securityQuestionAnswer"
                                            id="lName"
                                            placeholder="Security Question Answer"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                               
                                {/* <div class="mb-5">
                                <label
                                    for="guest"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    How many guest are you bringing?
                                </label>
                                <input
                                    type="number"
                                    name="guest"
                                    id="guest"
                                    placeholder="5"
                                    min="0"
                                    class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                            <div class="-mx-3 flex flex-wrap">
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label
                                            for="date"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label
                                            for="time"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Time
                                        </label>
                                        <input
                                            type="time"
                                            name="time"
                                            id="time"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div> */}

                                {/* <div class="mb-5">
                                    <label class="mb-3 block text-base font-medium text-[#07074D]">
                                        Are you coming to the event?
                                    </label>
                                    <div class="flex items-center space-x-6">
                                        <div class="flex items-center">
                                            <input
                                                type="radio"
                                                name="radio1"
                                                id="radioButton1"
                                                class="h-5 w-5"
                                            />
                                            <label
                                                for="radioButton1"
                                                class="pl-3 text-base font-medium text-[#07074D]"
                                            >
                                                Yes
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input
                                                type="radio"
                                                name="radio1"
                                                id="radioButton2"
                                                class="h-5 w-5"
                                            />
                                            <label
                                                for="radioButton2"
                                                class="pl-3 text-base font-medium text-[#07074D]"
                                            >
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div> */}

                                <div>
                                    <button
                                        class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                    >
                                        Submit
                                    </button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
