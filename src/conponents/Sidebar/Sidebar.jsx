import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import { BiTask } from "react-icons/bi";
import { MdOutlineCalendarToday, MdOutlineAssignmentInd } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import { LuSquareChartGantt } from "react-icons/lu";
import { RiAddLargeFill } from "react-icons/ri";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { assets } from '../../assets/assets';

const Sidebar = ({ isSidebarVisible }) => {
  return (
    <div className={`sidebar ${isSidebarVisible ? '' : 'hidden'}`}>
        <div >
            <div className='dp'>
                <img src={assets.dp} alt="Hii" />
                <p>Hey, ABCD</p>
            </div>
            <div className='sidebar-options'>
                <NavLink to='/alltools' className="sidebar-option">
                    <i><BiTask /></i>
                    <p>All tools</p>
                </NavLink>
                <NavLink to='/today' className="sidebar-option">
                    <i><MdOutlineCalendarToday /></i>
                    <p>Today</p>
                </NavLink>
                <NavLink to='/important' className="sidebar-option">
                    <i><FiStar /></i>
                    <p>Important</p>
                </NavLink>
                <NavLink to='/planned' className="sidebar-option">
                    <i><LuSquareChartGantt/></i>
                    <p>Planned</p>
                </NavLink>
                <NavLink to='/assigned' className="sidebar-option">
                    <i><MdOutlineAssignmentInd /></i>
                    <p>Assigned to me</p>
                </NavLink>
            </div>
            <div className='sidebar-options'>
                <div className='sidebar-option'>
                    <i><RiAddLargeFill /></i>
                    <p>Add List</p>
                </div>
            </div>
            <div className='sidebar-task'>
                <div className='sidebar-tasks'>
                    <div className='task-sidebar'>
                        <p>Today task</p>
                        <i><AiTwotoneExclamationCircle/></i>
                    </div>
                    <h2>11</h2>
                    <hr />
                    <div>
                        <p>Circle</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar