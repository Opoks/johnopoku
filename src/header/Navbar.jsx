import { useState } from "react";
import { IoClose } from "react-icons/io5";
import {Outlet, NavLink } from 'react-router-dom'
const Navbar = ({menus,setMenu}) => {
 const[active,setActive]=useState(0)
  return (
    <div className={menus===true?"nav-bg":""} onClick={()=>setMenu(false)}>
    <ul className={menus?'nav2':'nav'}>
      <span className='close' onClick={()=>setMenu(false)}><IoClose/></span>
       <li className={active===1?'activee':''} onClick={()=>setActive(1)}><NavLink to='/'>Home</NavLink></li>
       <li className={active===2?'activee':''} onClick={()=>setActive(2)}><NavLink to='/about'>About</NavLink></li>
       <li className={active===3?'activee':''} onClick={()=>setActive(3)}>{active?'':''}<NavLink to='/project'>Project</NavLink></li>
       <li className={active===4?'activee':''} onClick={()=>setActive(4)}><NavLink to='/contact'>Contact</NavLink></li>
       
    </ul>
    <Outlet/>
    </div>
  )
}

export default Navbar