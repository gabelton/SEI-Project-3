import React from 'react'

const Card = ({ image, username, bio }) => {
  return(
    <section className="section">
      <div className="container">
        <div className="columns">

          <div className="column is-third">
            <div className="user-info">
              <div className="user-image">
                <figure className="image">
                  <img src={image} alt={username} />
                </figure>
              </div>
              <div className="username">
                <h3 className="username-title">{username}</h3>
              </div>
              <div className="user-bio">
                <p>{bio}</p>
              </div>
            </div>
          </div>

          <div className="column is-third">
            <div className="placeholder1">
              <h3 className="subtitle">Vinyl collection</h3>
            </div>
          </div>
          <div className="column is-third">
            <div className="placeholder2">
              <div className="wishlist">
                <h3 className="subtitle">wishlist</h3>
              </div>
              <div className="selllist">
                <h3 className="subtitle">selllist</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
