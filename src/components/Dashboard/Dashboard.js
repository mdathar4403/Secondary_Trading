import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>

            <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                <div class="fixed flex flex-col top-0 left-0 w-64 bg-gray-900 h-full shadow-lg">
                    <div class="flex items-center pl-6 h-20 border-b border-gray-800">
                        <img src="https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_640.jpg" alt="" className="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-blue-500" />
                            <div class="ml-1">
                                <p class="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">Rahul Kumar</p>
                                <div class="badge">
                                    <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">Admin</span>
                                </div>
                            </div>
                    </div>
                    <hr/>
                    <div class="overflow-y-auto overflow-x-hidden flex-grow">
                        <ul class="flex flex-col py-6 space-y-1">
                            <li class="px-5">
                                <div class="flex flex-row items-center h-8">
                                    <div class="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Dashboard</div>
                                </div>
                            </li>
                            <li>
                                <Link to="/home" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-200 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                    {/* <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"> */}
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                    </span>
                                    <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Home</span>
                                    {/* </a> */}
                                </Link>
                            </li>
                            <li>
                                <Link to="/auctions" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-200 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                    {/* <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"> */}
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                    </span>
                                    <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Auctions</span>
                                    {/* </a> */}
                                </Link>
                            </li>
                            <li class="px-5">
                                <div class="flex flex-row items-center h-8">
                                    <div class="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Settings</div>
                                </div>
                            </li>
                            <li>
                                <Link to="/profile" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-200 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                    {/* <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"> */}
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    </span>
                                    <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Profile</span>
                                    {/* </a> */}
                                </Link>
                            </li>
                            <li>
                                <Link to="/settings" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-200 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                    {/* <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"> */}
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </span>
                                    <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Settings</span>
                                    {/* </a> */}
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" >
                                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6">
                                    <span class="inline-flex justify-center items-center ml-4 text-red-400">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                    </span>
                                    <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Logout</span>
                                </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard
