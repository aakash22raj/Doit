import React from 'react'
import './BoxList.css'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { BsStar } from "react-icons/bs";

const BoxList = () => {
  return (
    <div className='todo-add-todo'>
        <hr />

        <div className='add-todo'>
          <div className='add-todo-icons'>
            <i><MdOutlineCheckBoxOutlineBlank /></i>
            <p>Debug the code</p>
          </div>
          <div className='add-todo-star'>
            <i><BsStar /></i>
          </div>
        </div>

        <hr />

        <div className='add-todo'>
          <div className='add-todo-icons'>
            <i><MdOutlineCheckBoxOutlineBlank /></i>
            <p>Debug the code</p>
          </div>
          <div className='add-todo-star'>
            <i><BsStar /></i>
          </div>
        </div>
        
        <hr />

        <div className='add-todo'>
          <div className='add-todo-icons'>
            <i><MdOutlineCheckBoxOutlineBlank /></i>
            <p>Debug the code</p>
          </div>
          <div className='add-todo-star'>
            <i><BsStar /></i>
          </div>
        </div>
    </div>
  )
}

export default BoxList
