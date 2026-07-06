import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a natus debitis in dignissimos, incidunt.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
