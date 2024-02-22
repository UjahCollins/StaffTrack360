import React from 'react'
import "./Sidebar.css"
import { CgProfile } from "react-icons/cg";
import { FcDepartment } from "react-icons/fc";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const nav = useNavigate()

  return (
    <div className='Sidebar'>
      <div className='sidebarMain'>
        <div className='freeSpaceTop'></div>
        <div className='menuItems'>
          <div className='item1' onClick={() => {
            nav('/performance')
          }}>
            <CgProfile color='#00756A' />
            <p>Performances</p>
          </div>
          <div className='item2' onClick={()=>{
            nav('/department')
          }}>
            <FcDepartment color='white' />
            <p> Department</p>
          </div>
          <div className='item3' onClick={()=>{
            nav('/employee')
          }}>
            <IoPersonAddOutline color='white' />
            <p> Add Employee</p>
          </div>
          <div className='item4' onClick={()=>{
            nav('profile')
          }}>
            <FaUser />
            <p> Profile</p>
          </div>
        </div>
        <div className='logout'>
          <button>LOGOUT</button>
        </div>
        {/* {
          user.data.department === admin ? <></> :  user.data.department === HOD ? <></> : user.data.department === Employee ? <></> 
        } */}
      </div>
    </div>
  )
}

export default Sidebar
