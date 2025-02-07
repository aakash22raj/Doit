import React from 'react'
import './Navbar.css'
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import { assets } from '../../assets/assets';
import { AiOutlineAppstore } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { GiNightSleep } from "react-icons/gi";


const Navbar = ({ toggleSidebar, toggleView, isBoxTodayVisible }) => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <i onClick={toggleSidebar} className="menu-icon"><FiAlignJustify/></i>
        <img src={assets.logo} alt="" />
      </div>
      <div className='navbar-icons'>
        <i><FiSearch /></i>
        <i onClick={toggleView}>
          {isBoxTodayVisible ? <TbListDetails /> : <AiOutlineAppstore />}
        </i>
        <i><GiNightSleep /></i>
      </div>
    </div>
  )
}

export default Navbar