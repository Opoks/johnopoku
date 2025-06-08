import React from 'react'
import ReactDOM from 'react-dom'
import './Home.css'
import pic2 from '../../assets/myPic1.jpg';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";



const Home = () => {
  return (
   
    <main>
     
        <div className="image">
          <div className='im'>
          <img src={pic2} alt="My Picture"  />
          </div>
        </div>
       
        <div className="myTitle">
            <h4>Hi, I'm John Opoku</h4>
            <h3>Front-End Developer</h3>
          
     <div className="socials">
            <a href="https://wwww.facebook.com/johnopoku.dev?mibextid=rS40aB7S9Ucbxw6v" target="_blank" ><FaFacebook/></a>
            <a href="https://www.instagram.com/johnopoku.dev?igsh=MTI2bHVqa3l1ODZqNg==" target="_blank" ><FaInstagram/></a>
            <a href="https://www.linkedin.com/in/john-opoku-97352428b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" ><CiLinkedin/></a>
            <a href="https://wa.me/233594586689" target="_blank" ><FaWhatsapp/></a>
           </div>
        </div>
    </main>

         
  )
}

export default Home