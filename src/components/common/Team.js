import React from 'react'

const Team = () => {
  return (
    <div className="container">
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
                  <strong>Emma Price</strong> <small>@johnsmith</small> <small>31m</small>
                  <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
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
                <strong>Gabe Naughton</strong> <small>@johnsmith</small> <small>31m</small>
                <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
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
  <img className="is-rounded" src="https://i.imgur.com/OgeplkZ.jpg" alt="Image"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Sean Gray</strong> <small>sean.myles.gray@gmail.com</small> <small>31m</small>
                <br />

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
    <img className="is-rounded" src="https://i.imgur.com/CRNpJil.jpg" alt="Image"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Dragan Ceran</strong> <small>dragandceran@gmail.com</small>
              <br />
              All of our technology is completely unnecessary to a happy life.
              <br />


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
