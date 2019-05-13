import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Promise from 'bluebird'
import Card from './Card'

class Show extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vinyl: null,
      vinyls: null,
      tracks: null,
      errors: null
    }
  }

  getData() {
    Promise.props({
      vinyl: axios.get(`/api/vinyls/${this.props.match.params.id}`).then(res => res.data),
      vinyls: axios.get('/api/vinyls').then(res => res.data)
    })
      .then(res => {
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.LASTFM_API_KEY}&artist=${res.vinyl.artist}&album=${res.vinyl.title}&format=json`)
          .then(trackRes => this.setState({ vinyl: res.vinyl, vinyls: res.vinyls, tracks: trackRes.data.album.tracks.track }))
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  componentDidMount(){
    this.getData()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.getData()
    }
  }

  render() {
    console.log(this.state, 'I am state')
    if(!this.state.vinyl) return null
    const { _id, artist, title, image, releaseYear, notes, genre, condition, length, label, size, format, speed, catalogueNumber, barcode, createdBy } = this.state.vinyl
    console.log(this.state.vinyl, 'ONE VINYL')
    console.log(this.state.vinyls, 'ALL VINYLS')

    const similar = this.state.vinyls.filter(vinyl => vinyl.genre === this.state.vinyl.genre && vinyl.title !== this.state.vinyl.title)
    console.log(similar, 'SIMILAR')

    const tracksLastFm = this.state.tracks
    console.log(tracksLastFm, 'TRACKSLASTFM')
    console.log(createdBy, 'Created By')

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
                  {tracksLastFm.map(track =>
                    <li key={track.url}>
                      <h4 className="subtitle is-6">{track.name}</h4>
                      {/* }<audio src={track.preview} controls /> */}
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
