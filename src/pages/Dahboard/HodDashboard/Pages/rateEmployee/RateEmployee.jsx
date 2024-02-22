import React from 'react'
import "./RateEmployee.css"
import { CiSearch } from "react-icons/ci";
const RateEmployee = () => {
  return (
    <div className='rateEmplyee'>
      <div className='searchBtn'>
        <CiSearch size={30}/>
        <input type="text" placeholder='Search by Name' />
      </div>
      <div className='employeeRatingLst'>
        <div className='EachRatingList'>
        <p> Elizabeth Toweh</p>
        <button>Rate</button>
        </div>
        <div className='EachRatingInput'>
            <div className='MainInput'>
              <input type="text" placeholder='TC'/>
              <input type="text" placeholder='TC'/>
              <input type="text" placeholder='TC'/>
              <input type="text" placeholder='TC'/>
              <input type="text" placeholder='TC'/>
              <input type="text" placeholder='TC'/>
            </div>
            <button>Add</button>
        </div>
        
      </div>
    </div>
  )
}

export default RateEmployee
