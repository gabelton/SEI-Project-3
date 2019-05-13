import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

class Show extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    console.log('I am running')
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.error(err))
  }

  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.user._id
  }


  render() {
    if(!this.state.user) return null
    const { _id } = this.state.user
    console.log(this.state)
    return(
      <section className="section">
        <div className="container">
          {this.canModify() &&
              <div className="level-right">
                <Link to={`/users/${_id}/edit`} className="button is-black">Edit</Link>
              </div>
          }
          <div className="columns">

            <div className="column is-third">
              <div className="user-info">
                <div className="user-image">
                  <figure className="image">
                    <img src={this.state.user.image} alt={this.state.user.username} />
                  </figure>
                </div>
                <div className="username">
                  <h3 className="profile">{this.state.user.username}</h3>
                </div>
                <div className="user-bio">
                  <p className="profile">{this.state.user.bio}</p>
                </div>
              </div>
            </div>

            <div className="column is-third">
              <div className="placeholder1">
                <h3 className="subtitle profile">Vinyl collection</h3>
              </div>
            </div>
            <div className="column is-third">
              <div className="placeholder2">
                <div className="wishlist">
                  <h3 className="subtitle profile">wishlist</h3>
                </div>
                <div className="selllist">
                  <h3 className="subtitle profile">selllist</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default Show
