import React from 'react'
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';



// import Button from './Components/Button/Button';
// import DashboardHeader from './Components/DashboardHeader/DashboardHeader';
// import Sidebar from './Components/Sidebar/Sidebar';
// import AddEmployee from './pages/Dahboard/AdminDashboard/pages/AddEmployee/AddEmployee';
import MainAdminDash from './pages/Dahboard/AdminDashboard/MainAdminDash/MainAdminDash'
// import HodDashboard from './pages/Dahboard/HodDashboard/HodDashboard';

function App() {
  return (
    <div className="App">
      {/* <Button/> */}
      {/* <DashboardHeader/> */}
      {/* <Sidebar/> */}
      {/* <MainAdminDash/> */}
      {/* <AddEmployee/> */}
      {/* <HodDashboard/> */}
      <HashRouter>
        <Routes>
          <Route path='/*' element={<MainAdminDash />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
