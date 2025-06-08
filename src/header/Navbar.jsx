import { IoClose } from "react-icons/io5";
import {Outlet, NavLink } from 'react-router-dom'
const Navbar = ({menus,setMenu}) => {
 
  return (
    <div className={menus===true?"nav-bg":""} onClick={()=>setMenu(false)}>
    <ul className={menus?'nav2':'nav'}>
      <span className='close' onClick={()=>setMenu(false)}><IoClose/></span>
       <NavLink to='/'><li>Home</li></NavLink>
       <NavLink to='/about'><li>About</li></NavLink>
       <NavLink to='/project'><li>Project</li></NavLink>
       <NavLink to='/contact'><li>Contact</li></NavLink>
       
    </ul>
    <Outlet/>
    </div>
  )
}

export default Navbar