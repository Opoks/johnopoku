import React from 'react'
import Cards from '../../Cards'
import birth from '../../assets/birth.jpg'
import kalcuu from '../../assets/kalcuu1.jpg'
import todo2 from '../../assets/todo2.jpg'
import quiz from '../../assets/logo.jpeg'
import shopim from '../../assets/shop.jpg'
import './Project.css'
const Project = () => {
  return (
    <section>
    <h2 className='head'>PERSONAL PROJECTS</h2>
    <div className='cardcon'>

    <Cards src={shopim}
    title="Shopping Cart" 
    description="This is a shopping website and was built with React js,React redux and Tailwindcss "
    href="https://shoppractice.netlify.app/"
    />
        <Cards src={quiz}
    title="Quizron" 
    description="This is a quiz app and was built with React js and css "
    href="https://quizron.netlify.app/"
    />
        <Cards src={kalcuu}
    title="Kalcuu" 
    description="This is a calculator and was built with html,css and javascript "
    href="https://kalcuu.netlify.app/"
    />
        <Cards src={birth}
    title="Birthcalc" 
    description="This is a birthday calculator which helps users know their age,next birthday and displays a message to the user. Built with html, css and javascript"
    href="https://birthcalc.netlify.app/" 
    />


        <Cards src={todo2}
    title="Tins2do" 
    description="This is a todo app which helps users plan their daily activities and cross them out/delete when completed. Built with react js"
    href="https://tins2do.netlify.app/"
    />
      
    </div>
    </section>
  )
}

export default Project