import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import TopBar from '../components/TopBar/TopBar'

const DashPage = () => {
    return (
        <div class='flex'>
            <div className="flex-none w-60">
                <Dashboard />
            </div>
            <div className='flex-1 w-46'>
                <TopBar pageName="Home" />
            </div>
        </div>
    )
}

export default DashPage
