import React from 'react'
import { Link } from 'react-router-dom'

const Final = () => {
    return (
        <div className='container md:mt-10'>
            <div className='flex flex-col items-center'>
                <div className="text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div className="mt-3 text-xl font-semibold uppercase text-grren-500">
                    Congratulations!
                </div>
                <div className="text-lg font-semibold text-gray-500">
                    Your Account has been created successfully.
                </div>
                <Link to="/home">
                    <a href="#" className='mt-10'>
                        <button className='h-10 px-5 text-green-700 transition-colors
                    duration-250 border border-gray-300 rounded-lg
                    focus:shadow-outline hover:bg-green-500 hover:text-green-100'
                        >
                            Close
                        </button>
                    </a>
                </Link>
            </div>

        </div>
    )
}

export default Final
