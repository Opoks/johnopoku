import React, { useState } from 'react'
import Navbar from './Navbar'
import './Header.css'
import { IoMenu } from "react-icons/io5";



import { Link } from 'react-router-dom'


const Header = () => {
 const[menus,setMenu]=useState(false)
 
  return (
    <header>
    <h4 className='myLogo'><Link to='/'>John Opoku</Link></h4>
    <Navbar menus={menus} setMenu={setMenu}/>
    <span className='menu' onClick={()=>setMenu(true)}><IoMenu /></span>
    
    </header>
  )
}

export default Header

