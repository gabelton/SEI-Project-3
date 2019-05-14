import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Promise from 'bluebird'
import Card from './Card'
import Auth from '../../lib/Auth'

import Loading from '../common/Loading'
import Comment from '../comments/Comment'

class Show extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vinyl: null,
      vinyls: null,
      tracks: null,
      errors: null,
      data: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  getData() {
    Promise.props({
      vinyl: axios.get(`/api/vinyls/${this.props.match.params.id}`).then(res => res.data),
      vinyls: axios.get('/api/vinyls').then(res => res.data)
    })
      .then(res => {
        axios.get('http://ws.audioscrobbler.com/2.0', {
          params: {
            method: 'album.getinfo',
            api_key: process.env.LASTFM_API_KEY,
            artist: res.vinyl.artist,
            album: res.vinyl.title,
            format: 'json'
          }
        })
          .then(trackRes => this.setState({
            vinyl: res.vinyl,
            vinyls: res.vinyls,
            tracks: trackRes.data.album.tracks.track,
            lastFmData: trackRes.data.album
          }))
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

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
    console.log(this.state.data)
  }

  handleClick(e) {
    e.preventDefault()

    const token = Auth.getToken()

    axios.post(`/api/vinyls/${this.props.match.params.id}/comments`, this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
  }

  render() {
    console.log(this.state, 'I am state')
    console.log(this.state.data, 'DATA')
    if(!this.state.vinyl) return null
    const { artist, title, image, releaseYear, notes, genre, condition, length, label, size, format, speed, catalogueNumber, barcode, createdBy } = this.state.vinyl
    console.log(this.state.vinyl, 'ONE VINYL')
    console.log(this.state.vinyls, 'ALL VINYLS')

    const similar = this.state.vinyls.filter(vinyl => vinyl.genre === this.state.vinyl.genre && vinyl.title !== this.state.vinyl.title)
    console.log(similar, 'SIMILAR')


    const tracksLastFm = this.state.tracks
    const lastFmData = this.state.lastFmData
    console.log(tracksLastFm, 'TRACKSLASTFM')
    console.log(lastFmData, 'LASTFMDATA')
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
              <h2 className="subtitle is-6 show"><span>Link to more info on Last FM: </span>{lastFmData.url}</h2>
              <hr />
              <h2 className="subtitle is-6 show"><span>Tracklisting:</span>
                <ul className="show-tracklisting">
                  {tracksLastFm.map(track =>
                    <li key={track.url}>
                      <h4 className="subtitle is-6">{track.name}</h4>
                    </li>)}
                </ul>
              </h2>
            </div>

            <div className="show-content-comments subheading-show">
              Comments
              <article className="media">
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                  </p>
                </figure>
                <div className="media-content">
                  <div className="field">
                    <p className="control">
                      <textarea className="textarea" name="content" placeholder="Add a comment..." onChange= {this.handleChange}></textarea>
                    </p>
                  </div>
                  <nav className="level">
                    <div className="level-left">
                      <div className="level-item">
                        <a className="button is-info" onClick={this.handleClick}>Submit</a>
                      </div>
                    </div>
                    <div className="level-right">
                      <div className="level-item">
                        <label className="checkbox">
                          <input type="checkbox"  /> Press enter to submit
                        </label>
                      </div>
                    </div>
                  </nav>
                </div>
              </article>

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
