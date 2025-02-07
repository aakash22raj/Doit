import React from 'react'
import './BoxToday.css'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { BsStar } from "react-icons/bs";

const BoxToday = () => {
  return (
    <div className='boxtoday'>

        <div className='boxtoday-add-todo'>
            <div className='box-todo'>
                <div className='boc-todo-icons'>
                    <i><MdOutlineCheckBoxOutlineBlank /></i>
                    <p>Debug the code</p>
                </div>

                <div className='add-todo-star'>
                    <i><BsStar /></i>
                </div>
            </div>
        </div>

        <div className='boxtoday-add-todo'>
            <div className='box-todo'>
                <div className='boc-todo-icons'>
                    <i><MdOutlineCheckBoxOutlineBlank /></i>
                    <p>Debug the code</p>
                </div>
                <div className='add-todo-star'>
                    <i><BsStar /></i>
                </div>
            </div>
        </div>

        <div className='boxtoday-add-todo'>
            <div className='box-todo'>
                <div className='boc-todo-icons'>
                    <i><MdOutlineCheckBoxOutlineBlank /></i>
                    <p>Debug the code</p>
                </div>
                <div className='add-todo-star'>
                    <i><BsStar /></i>
                </div>
            </div>
        </div>
        <div className='boxtoday-add-todo'>
            <div className='box-todo'>
                <div className='boc-todo-icons'>
                    <i><MdOutlineCheckBoxOutlineBlank /></i>
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

export default BoxToday
