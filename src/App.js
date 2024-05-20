import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
// import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './pages/HomePage';
import UserDetails from './components/UserDetails/UserDetails';
import CompanyDetails from './components/CompanyDetails/CompanyDetails';
import StartingPage from './components/StartingPage/StartingPage';
import Auctions from './components/Auctions/Auctions';
import Profile from './components/Profile/Profile';
import DashPage from './pages/DashPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/companyDetails" element={<CompanyDetails />} />
          <Route path="/" element={<StartingPage />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<DashPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
