import React from 'react'
import './Today.css'
import { FaCaretDown } from "react-icons/fa6";
import { BsRepeat, BsBell } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import Complete from '../../conponents/Complete/Complete';
import BoxToday from '../../conponents/BoxToday/BoxToday';
import BoxList from '../../conponents/BoxList/BoxList';


const Today = ({ isBoxTodayVisible }) => {



  return (
    <div className='today'>
      <div className='today-todo'>
        <p>To Do</p>
        <i><FaCaretDown/></i>
      </div>
      <hr />
      <div className='today-task'>
        <p>Add A Task</p>
        <div className='today-add-task'>
          <div className='today-icons'>
            <i><BsBell /></i>
            <i><BsRepeat /></i>
            <i><IoCalendarOutline /></i>
          </div>
          <div className='today-button'>
            <button>ADD TASK</button>
          </div>
        </div>
      </div>


      

      {/* Conditional Rendering based on state */}
      {isBoxTodayVisible ? (
        <div>
          <BoxToday />
        </div>
      ) : (
        <div>
          <BoxList/>
        </div>
      )}


      <div>
        <Complete/>
      </div>
    
    </div>
  )
}

export default Today
