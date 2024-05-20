import React from 'react'
import { Link } from 'react-router-dom';

const TopBar = (props) => {
    return (
        <>
            <nav class="top-0 left-0 w-full z-10 bg-white lg:flex-row lg:flex-nowrap lg:justify-start flex items-center py-1 px-4 lg:bg-transparent">
                <div class="w-full mx-aut0 items-center flex justify-between lg:flex-nowrap flex-wrap lg:px-6 px-4">
                    <a href="#" class="text-blueGray-800 lg:text-grey-500 text-sm uppercase inline-block font-semibold my-3">
                        {props.pageName}
                    </a>
                    <button class="ml-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-blueGray-400 rounded bg-transparent block outline-none focus:outline-none text-blueGray-300 lg:hidden" type="button">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="items-center w-full lg:flex lg:w-auto flex-grow duration-300 transition-all ease-in-out lg:h-auto-important hidden">
                        <form class="flex flex-row flex-wrap items-center ml-auto mr-3 mt-3">
                            <div class="mb-3 pt-0">
                                <input placeholder="Search here" type="text" class="border-transparent shadow px-3 py-2 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200 " />
                            </div>
                        </form>
                        <Link to="/profile" class="text-blueGray-500 block lg:ml-4 lg:mt-0 mt-2">
                            <a class="text-blueGray-500 block" href="javascript:;" >
                                <div class="items-center flex"><span class="w-12 h-12 text-sm text-white bg-blueGray-300 inline-flex items-center justify-center rounded-full">
                                    <img src="https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_640.jpg" alt="" className="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-blue-500" />
                                    {/* <img alt="..." class="w-full rounded-full align-middle border-none shadow-lg" src="https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg" /> */}
                                </span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                 
            </nav>
            <hr class="flex-grow border-t border-gray-500"/>
        </>
    )
}

export default TopBar
