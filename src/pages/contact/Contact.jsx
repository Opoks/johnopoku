import React from 'react'
import '../contact/Contact.css'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='my-contact'>
      <div className="contact">
        <div>
          <label htmlFor="name">My Name: </label>
          <input type="text" id='name' value="John Opoku" readOnly/>
        </div>
        <div>
           <label htmlFor="email">My Email: </label>
          <input type="text" id='email' value="opokuj883@gmail.com" readOnly/>
        </div>
        <div>
           <label htmlFor="number">My Number: </label>
          <input type="text" id='number' value="+233 594586689" readOnly/>
        </div>
        <div></div>
      </div>
      <div className="sociall">
                   <a href="https://wwww.facebook.com/johnopoku.dev?mibextid=rS40aB7S9Ucbxw6v" target="_blank" ><FaFacebook/></a>
                               <a href="https://www.instagram.com/johnopoku.dev?igsh=MTI2bHVqa3l1ODZqNg==" target="_blank" ><FaInstagram/></a>
                               <a href="https://www.linkedin.com/in/john-opoku-97352428b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" ><CiLinkedin/></a>
                               <a href="https://wa.me/233594586689" target="_blank" ><FaWhatsapp/></a>
      </div>
      <form action="https://formsubmit.co/184169dce2bee5e901d7876f6f762598" method='POST'>
        <div className='form-wrapper'>
          <div>
         <div className='input-div'>
          <label htmlFor="name">Your Name: </label>
          <input type="text" id='name1' name='name' className='inp' placeholder="Enter your name..." />
        </div>
        <div className='input-div'>
           <label htmlFor="email">Your Email: </label>
          <input type="email" id='email2' name='email' className='inp' placeholder="Enter your email..." />
        </div>  
        </div>
        <textarea name='message' placeholder='Type your message here...'/>  
        </div>
        <button type='submit' className='inpb' >Send</button>   
      </form>
    </div>
  )
}

export default Contact