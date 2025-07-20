import React, { useState } from 'react'
import './About.css'
const About = () => {

  const[html,setHtml]=useState(80)
  const[css,setCss]=useState(80)
  const[js,setJs]=useState(70)
  const[react,setReact]=useState(70)

  return (
    <div className='about'>
    <h2 className='head'>ABOUT ME</h2>
        <main className='main'>
           
           
               
                <div className="education">
                    <h2 className='subhead'>Education</h2>
                    <div className="schools">
                            <h3>Ghana Communication Technology University <i>(BSc. Information Technology 2019-2023)</i></h3>
                          <h3>Mpraeso Senior High School <i>(W.A.S.S.C.E -June 2019)</i></h3>
                       
                            <h3>Green Valley Complex School <i>(B.E.C.E -June 2016)</i></h3>
                       
                    </div>
                </div>
                <div  className="education">
                    <h2 className='subhead'>Skills</h2>
                    <div className="schools2">
                      <div className='school2-in'>
                            <h3>HTML </h3>
                            <div className='range'>
                            
                            <label   style={{borderRadius:'5px',width:`${html}%`,height:'100%',backgroundColor:'rgb(75, 167, 75)'}}></label>
                            </div>
                            <p id='html' >{html}%</p>
                            </div>
                            <div className='school2-in'>
                          <h3 >CSS</h3>
                         <div className='range'>
                            <label style={{borderRadius:'5px',width:`${css}%`,height:'100%',backgroundColor:'rgb(75, 167, 75)'}}></label>
                            
                            </div>
                        <p id='css' >{css}%</p>
                        </div>
                        <div className='school2-in'>
                            <h3>JAVASCRIPT</h3>
                              <div className='range'>
                            <label style={{width:`${js}%`,borderRadius:'5px',height:'100%',backgroundColor:'rgb(75, 167, 75)'}}></label>
                            
                            </div>
                             <p id='js' >{js}%</p>
                             </div>
                             <div className='school2-in'>
                            <h3>REACT JS</h3>
                             <div className='range'>
                            <label style={{borderRadius:'5px',width:`${react}%`,height:'100%',backgroundColor:'rgb(75, 167, 75)'}}></label>
                            
                            </div>
                             <p id='react' >{react}%</p>
                       </div>
                    </div>
                </div>
               

           
        </main>
    </div>
  )
}

export default About