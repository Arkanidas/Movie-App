import React from 'react'
import './style.css'
import { FaRegCopyright } from "react-icons/fa6";


const footer = () => {
  return (

    <div className='footer'>
      <p className='footer-text'>
        <FaRegCopyright style={{ marginRight: '3px' }}/>
        Copyright Leon Aysa 2023
      </p>
    </div>
  )
}

export default footer
