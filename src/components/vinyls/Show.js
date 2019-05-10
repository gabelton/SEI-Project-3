import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Promise from 'bluebird'
import Auth from '../../lib/Auth'

class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      vinyl: []
    }
  }

  componentDidMount(){
    axios.get(`/api/vinyls/${this.props.match.params.id}`)
      .then(res => this.setState({ vinyl: res.data }))
  }

  render() {
    if(!this.state.vinyl) return null
    const { _id, artist, title, image, releaseYear, notes, genre, condition, length, label, size, format, speed, catalogueNumber, barcode, createdBy } = this.state.vinyl

    return (
      <section className="section" id="vinyl-show">
        <div className="columns">
          <div className="column is-two-fifths-desktop is-half-tablet is-full-mobile">
            <figure className="image">
              <img src={image} alt={title} />
            </figure>
          </div>
          <div className="column is-two-fifths-desktop is-half-tablet is-full-mobile">
            <h2 className="subtitle is-4 show" id="artist-show">{artist}</h2>
            <h2 className="subtitle is-5 show" id="title-show">{title}</h2>
            <div className="show-content">
              <h2 className="subtitle is-6 show"><span>Label: </span>{label}</h2>
              <h2 className="subtitle is-6 show"><span>Year released:</span> {releaseYear}</h2>
              <h2 className="subtitle is-6 show"><span>Genre: </span>{genre}</h2>
              <h2 className="subtitle is-6 show"><span>Length: </span>{length}</h2>
              <h2 className="subtitle is-6 show"><span>Created by:</span> {createdBy}</h2>
              <h2 className="subtitle is-6 show"><span>Condition: </span>{condition}</h2>
              <h2 className="subtitle is-6 show"><span>Size: </span>{size}</h2>
              <h2 className="subtitle is-6 show"><span>Format: </span>{format}</h2>
              <h2 className="subtitle is-6 show"><span>Speed: </span>{speed}</h2>
              <h2 className="subtitle is-6 show"><span>Barcode:</span> {barcode}</h2>
              <h2 className="subtitle is-6 show"><span>Catalogue number:</span>{catalogueNumber}</h2>
              <h2 className="subtitle is-6 show"><span>Notes: </span>{notes}</h2>
              <h2 className="subtitle is-6 show"><span>Tracklisting:</span>
              </h2>
            </div>
          </div>
          <div className="column is-one-fifth-desktop is-half-tablet is-full-mobile">
            <h2 className="subtitle is-5 similar-show">Similar artists</h2>
            <figure className="image similar-artist-image">
              <img src={image} alt={title} />
            </figure>
            <figure className="image similar-artist-image">
              <img src={image} alt={title} />
            </figure>
            <figure className="image similar-artist-image">
              <img src={image} alt={title} />
            </figure>
            <figure className="image similar-artist-image">
              <img src={image} alt={title} />
            </figure>
          </div>
        </div>
      </section>
    )
  }
}

export default Show
