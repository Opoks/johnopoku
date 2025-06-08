import React from 'react'

const Cards = ({src,title,description,href}) => {
  return (
    <>
    <div className="card">
        <div className="img">
        <img src={src}   />
        </div>
        <h3>{title}</h3>
        <div className="p">
        <p >{description}</p>
        </div>
       <a href={href} target='blank'> <h4>visit site</h4></a>
    </div>
    </>
  )
}

export default Cards