import React from 'react'

const Team = () => {
  return (
    <div className="container teamContainer">
      <div className=" section columns  teambox">
        <div className="column">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img  className="is-rounded" src="https://i.imgur.com/fZXBxMO.jpg" alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Emma Price</strong> <small>ekprice01@gmail.com</small>
                    <br />
                        API ninja
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img className="is-rounded" src="https://i.imgur.com/Nj2rE9g.jpg" alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Gabe Naughton</strong> <small>gabriel.naughton135@gmail.com</small>
                    <br />
                      GIT master
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className=" section columns  teambox">
        <div className="column">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img  className="is-rounded" src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/13102893_10206649682616828_2040755755404317176_n.jpg?_nc_cat=111&_nc_ht=scontent-lhr3-1.xx&oh=72b59d3ee3a0f57035f99b72ed138fea&oe=5D6719B1" alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Dragan Ceran</strong> <small>dragandceran@gmail.com</small>
                    <br />
                    Style nerd
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img className="is-rounded" src="https://i.imgur.com/OgeplkZ.jpg" alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Sean Gray</strong> <small>sean.myles.gray@gmail.com</small>
                    <br />
                      .MAP sorcerer
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
