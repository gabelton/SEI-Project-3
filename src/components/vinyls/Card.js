import React from 'react'

const Card = ({ artist, image, title }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className="card-header">
        <h3 className="card-header-title">{title}</h3>
      </div>
      <div className="card-content">
        <div className="content">
          <p>{artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
