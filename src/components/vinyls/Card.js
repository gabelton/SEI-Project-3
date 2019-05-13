import React from 'react'

const Card = ({ artist, image, title }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-5">{title}</p>
        <p className="subtitle is-6">{artist}</p>
      </div>
    </div>
  )
}

export default Card
