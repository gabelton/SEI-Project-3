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
      previews: null,
      data: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleComment = this.handleComment.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleDeleteComments = this.handleDeleteComments.bind(this)
  }

  getData() {
    Promise.props({
      vinyl: axios.get(`/api/vinyls/${this.props.match.params.id}`).then(res => res.data),
      vinyls: axios.get('/api/vinyls').then(res => res.data)
    })
      .then(res => {
        return Promise.props({

          albumInfo: axios.get('http://ws.audioscrobbler.com/2.0', {
            params: {
              method: 'album.getinfo',
              api_key: process.env.LASTFM_API_KEY,
              artist: res.vinyl.artist,
              album: res.vinyl.title,
              format: 'json'
            }
          }).then(res2 => res2.data),
          previews: axios.get(`https://cors-anywhere.herokuapp.com/api.deezer.com/search/track?q=${res.vinyl.artist}`).then(res2 => res2.data)
        })
          .then(trackRes => this.setState({
            vinyl: res.vinyl,
            vinyls: res.vinyls,
            tracks: trackRes.albumInfo.album.tracks.track,
            lastFmData: trackRes.albumInfo.album,
            previews: trackRes.previews.data
          }))
      })
      .catch(err => this.setState({ errors: err.response }))
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

  handleComment(e) {
    e.preventDefault()

    const token = Auth.getToken()

    axios.post(`/api/vinyls/${this.props.match.params.id}/comments`, this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })

    window.location.reload()
  }

  handleDeleteComments(e) {

    console.log(e.target.value)
    console.log(this.props.match.params.id)

    const token = Auth.getToken()

    if (e.target.value === Auth.getPayload().sub) {
      console.log('yooooooo')
      console.log(`${this.props.match.params.id}`)
      axios.delete(`/api/vinyls/${this.props.match.params.id}/comments/${e.target.id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      } )
    }
    window.location.reload()
  }

  handleDelete() {
    const token = Auth.getToken()
    axios.delete(`/api/vinyls/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/vinyls'))
  }

  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.vinyl.createdBy._id

  }

  render() {
    console.log(this.state, 'I am state')
    console.log(this.state.data, 'DATA')
    if(!this.state.vinyl) return null
    const { artist, title, image, releaseYear, notes, genre, condition, length, label, size, format, speed, catalogueNumber, barcode, createdBy, comments } = this.state.vinyl
    console.log(this.state.vinyl, 'ONE VINYL')
    // console.log(this.state.vinyls, 'ALL VINYLS')

    const similar = this.state.vinyls.filter(vinyl => vinyl.genre === this.state.vinyl.genre && vinyl.title !== this.state.vinyl.title)
    // console.log(similar, 'SIMILAR')


    const tracksLastFm = this.state.tracks
    const lastFmData = this.state.lastFmData
    // console.log(tracksLastFm, 'TRACKSLASTFM')
    // console.log(lastFmData, 'LASTFMDATA')
    console.log(createdBy, 'Created By')

    const trackPreviews = this.state.previews.slice(0,10)
    console.log(trackPreviews, 'DEEZER PREVIEW')

    return (
      <section className="section" id="vinyl-show">
        <div className="columns">
          <div className="column is-two-fifths-desktop is-half-tablet is-full-mobile">
            <figure className="image">
              <img src={image} alt={title} />
            </figure>
            <div className="container edit">
              <div className="buttons is-gapless">
                {Auth.isAuthenticated() &&
                  <Link to={{
                    pathname: `/users/${Auth.getPayload().sub}`,
                    state: {vinyl: this.state.vinyl}
                  }}>
                    <button className="button is-light a1">Add to Wish List</button>
                  </Link>
                }
                {this.canModify() &&
                      <div className="level-right is-gapless edit2">
                        <Link to={`/vinyls/${this.state.vinyl._id}/edit`} className="button is-light e1">Edit</Link>
                        <button className="button is-light d2" onClick={this.handleDelete}>Delete</button>
                      </div>
                }
              </div>
            </div>
            {/* COMMENTS ==============================================*/}
            <div className="show-content-video subheading-show">
              <h2 className="title is-5 subheading-show">{artist} Top Tracks</h2>
              <ul>
                {trackPreviews.map(track =>
                  <li key={track.id}>
                    <h4 className="subtitle is-6">{track.title}</h4>
                    <audio src={track.preview} controls />
                  </li>)}
              </ul>
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
            {/* TOP TRACKS =======================================================*/}

            <div className="show-content-comments subheading-show">
              Comments
              <article className="media">
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img src="https://candobristol.co.uk/img/profile-pic.svg" />
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
                        <a className="button is-info" onClick={this.handleComment}>Submit</a>
                      </div>
                    </div>

                  </nav>
                </div>
              </article>
              {this.state.vinyl.comments.map(comment =>
                <article key={comment._id} className="media">
                  <figure className="media-left">

                    <p className="image is-64x64">
                      <Link to={`/users/${comment.user.id}`}>


                        <img src={comment.user.image} />
                      </Link>
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p className="commentText">
                        <strong>{comment.user.username}</strong>  <small>{comment.createdAt.substring(0, comment.createdAt.length - 5).replace(/T/g, ' ')}</small>
                        <br />
                        {comment.content}
                      </p>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left">
                        <a className="level-item">
                          <span className="icon is-small"><i className="fas fa-reply"></i></span>
                        </a>
                        <a className="level-item">
                          <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                        </a>
                        <a className="level-item">
                          <span className="icon is-small"><i className="fas fa-heart"></i></span>
                        </a>
                      </div>
                    </nav>
                  </div>
                  <div className="media-right">
                    <button id={comment._id} value={comment.user._id} className="delete" onClick={this.handleDeleteComments}></button>
                  </div>
                </article>
              )}
            </div>
          </div>

          {/* SIMILAR ARITSTS ====================================================== */}
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
