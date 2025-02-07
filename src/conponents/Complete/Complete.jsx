import React from 'react'
import './Complete.css'
// import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { MdCheckBox } from "react-icons/md";

const Complete = () => {
  return (
    <div className='completed'>
        <p>Complete</p>
        <div className='todo-add-todo completed-todo'>
            <hr />
            <div className='add-todo '>
                <div className='add-todo-icons completed-icons'>
                  <i><MdCheckBox /></i>
                  <p>Debug the code</p>
                </div>
                <div className='add-todo-star'>
                  <i><BsStar /></i>
                </div>
            </div>
    
            <hr />
    
            <div className='add-todo'>
                <div className='add-todo-icons completed-icons'>
                  <i><MdCheckBox /></i>
                  <p>Debug the code</p>
                </div>
                <div className='add-todo-star'>
                  <i><BsStar /></i>
                </div>
            </div>
            
            <hr />
    
            <div className='add-todo'>
                <div className='add-todo-icons completed-icons'>
                  <i><MdCheckBox /></i>
                  <p>Debug the code</p>
                </div>
                <div className='add-todo-star'>
                  <i><BsStar /></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Complete
