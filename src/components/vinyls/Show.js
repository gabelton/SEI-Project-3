import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Promise from 'bluebird'
import Auth from '../../lib/Auth'

class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      vinyl: null
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
      <section className="section">
        <div className="columns" id="vinyl-show">
          <div className="column is-one-third-desktop is-half-tablet is-full-mobile">
            <figure className="image">
              <img src={image} alt={title} />
            </figure>
          </div>
          <div className="column is-two-thirds-desktop is-half-tablet is-full-mobile" id="vinyl-show-container">
            <h2 className="subtitle is-3" id="artist-show">{artist}</h2>
            <h2 className="subtitle is-4" id="title-show">{title}</h2>
            <h2 className="subtitle is-5"><span>Label: </span>{label}</h2>
            <h2 className="subtitle is-5"><span>Year released:</span> {releaseYear}</h2>
            <h2 className="subtitle is-5"><span>Genre: </span>{genre}</h2>
            <h2 className="subtitle is-5"><span>Length: </span>{length}</h2>
            <h2 className="subtitle is-5"><span>Notes: </span>{notes}</h2>
            <h2 className="subtitle is-5"><span>Created by:</span> {createdBy}</h2>
            <h2 className="subtitle is-5"><span>Condition: </span>{condition}</h2>
            <h2 className="subtitle is-5"><span>Size: </span>{size}</h2>
            <h2 className="subtitle is-5"><span>Format: </span>{format}</h2>
            <h2 className="subtitle is-5"><span>Speed: </span>{speed}</h2>
            <h2 className="subtitle is-5"><span>Barcode:</span> {barcode}</h2>
            <h2 className="subtitle is-5"><span>Catalogue number:</span>{catalogueNumber}</h2>
            <h2 className="subtitle is-5"><span>Tracklisting:</span></h2>
          </div>
        </div>
      </section>

    )
  }
}

export default Show
