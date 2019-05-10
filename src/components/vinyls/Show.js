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
      <body>
        <section className="section">
          <div className="container">
            <h1 className="title is-1">{artist}: {title}</h1>
            <hr />
            <div className="columns">
              <div className="column is-one-third-desktop is-half-tablet is-full-mobile">
                <figure className="image">
                  <img src={image} alt={title} />
                </figure>
              </div>
              <div className="column is-two-thirds-desktop is-half-tablet is-full-mobile">
                <h2 className="subtitle is-5">Artist: {artist}</h2>
                <h2 className="subtitle is-5">Title: {title}</h2>
                <h2 className="subtitle is-5">Label: {label}</h2>
                <h2 className="subtitle is-5">Year released: {releaseYear}</h2>
                <h2 className="subtitle is-5">Genre: {genre}</h2>
                <h2 className="subtitle is-5">Length: {length}</h2>
                <h2 className="subtitle is-5">Notes: {notes}</h2>
                <h2 className="subtitle is-5">Created by: {createdBy}</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-one-third-desktop is-half-tablet is-full-mobile">
                <h2 className="subtitle is-5">Condition: {condition}</h2>
                <h2 className="subtitle is-5">Size: {size}</h2>
                <h2 className="subtitle is-5">Format: {format}</h2>
                <h2 className="subtitle is-5">Speed: {speed}</h2>
                <h2 className="subtitle is-5">Barcode: {barcode}</h2>
                <h2 className="subtitle is-5">Catalogue number: {catalogueNumber}</h2>
                <h2 className="subtitle is-5">Tracklisting:</h2>
              </div>

              <div className="column is-two-thirds-desktop is-half-tablet is-full-mobile">


              </div>
            </div>
          </div>
        </section>
      </body>
    )
  }
}

export default Show
