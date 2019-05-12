import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Promise from 'bluebird'
import Card from './Card'

class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      vinyl: [],
      vinyls: [],
      tracks: [],
      errors: {}
    }
  }

  componentDidMount(){
    Promise.props({
      vinyl: axios.get(`/api/vinyls/${this.props.match.params.id}`).then(res => res.data),
      vinyls: axios.get('/api/vinyls').then(res => res.data),
      tracks: axios.get('https://cors-anywhere.herokuapp.com/api.deezer.com/album/10709540').then(res => res.data)
    })
      .then(res => {
        this.setState({ vinyl: res.vinyl, vinyls: res.vinyls, tracks: res.tracks.tracks.data })
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    if(!this.state.vinyl) return null
    const { _id, artist, title, image, releaseYear, notes, genre, condition, length, label, size, format, speed, catalogueNumber, barcode, createdBy } = this.state.vinyl
    console.log(this.state.vinyls.image, 'IMAGE')
    console.log(this.state.vinyl, 'ONE VINYL')
    console.log(this.state.vinyls, 'ALL VINYLS')
    const similar = this.state.vinyls.filter(vinyl => vinyl.genre === this.state.vinyl.genre && vinyl.title !== this.state.vinyl.title)
    const tracksTame = this.state.tracks
    console.log(tracksTame, 'TRACKSTAME')
    console.log(similar, 'SIMILAR')
    return (
      <section className="section" id="vinyl-show">
        <div className="columns">
          <div className="column is-two-fifths-desktop is-half-tablet is-full-mobile">
            <figure className="image">
              <img src={image} alt={title} />
            </figure>
            <div className="show-content-video subheading-show">
              YouTube videos
            </div>
          </div>
          <div className="column is-two-fifths-desktop is-half-tablet is-full-mobile">
            <div className="show-content">
              <h2 className="subtitle is-4 show" id="artist-show">{artist}</h2>
              <h2 className="subtitle is-5 show" id="title-show">{title}</h2>
              <hr />
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
              <hr />
              <h2 className="subtitle is-6 show"><span>Tracklisting:</span>
                <ul className="show-tracklisting">
                  {tracksTame.map(track =>
                    <li key={track.id}>
                      <h4 className="subtitle is-6">{track.title}</h4>
                      <audio src={track.preview} controls />
                    </li>)}
                </ul>
              </h2>
            </div>

            <div className="show-content-comments subheading-show">
              Comments
            </div>
          </div>
          <div className="column is-one-fifth-desktop is-half-tablet is-full-mobile">
            <div className="similar-show">

              <h2 className="subtitle is-6 subheading-show">You might also like</h2>

              <div>
                {similar.map(vinyl =>
                  <div className="similar-artist-image" key={vinyl._id}>
                    <Link to={`/vinyls/${vinyl._id}`}>
                      <Card {...vinyl} />
                    </Link>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Show
