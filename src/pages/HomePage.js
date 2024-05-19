import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/Login/Login';

const HomePage = () => {
  return (
    <div class='flex'>
        <div className="flex-none w-60">
            <Dashboard />
        </div>
        <div className='flex-1 w-46'>
            {/* <Login /> */}
        </div>
    </div>
  )
}

export default HomePage
