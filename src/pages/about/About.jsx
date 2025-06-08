import React from 'react'
import './About.css'
const About = () => {

  
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
                <div className="education">
                    <h2 className='subhead'>Skills</h2>
                    <div className="schools2">
                      <div className='school2-in'>
                            <h3>HTML </h3>
                            <input type='range' value={80} id='htmlid' className='range'/>
                            <p id='html' >80%</p>
                            </div>
                            <div className='school2-in'>
                          <h3 >CSS</h3>
                          <input type='range' value={80} id='cssid' className='range'/>
                        <p id='css' >80%</p>
                        </div>
                        <div className='school2-in'>
                            <h3>JAVASCRIPT</h3>
                            <input type='range' value={68} id='jsid' className='range'/>
                             <p id='js' >68%</p>
                             </div>
                             <div className='school2-in'>
                            <h3>REACT JS</h3>
                            <input type='range' value={68} id='reactid' className='range'/>
                             <p id='react' >68%</p>
                       </div>
                    </div>
                </div>
               

           
        </main>
    </div>
  )
}

export default About