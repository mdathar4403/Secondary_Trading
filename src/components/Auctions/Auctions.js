import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import TopBar from '../TopBar/TopBar'

const Auctions = () => {
    return (
        <div class='flex'>
            <div className="flex-none w-60">
                <Dashboard />
            </div>
            <div className='flex-1 w-46'>
                <TopBar pageName = "Auctions" />
            </div>
        </div>

    )
}

export default Auctions
