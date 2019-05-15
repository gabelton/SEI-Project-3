import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

class Show extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      user: {
        vinyls: []
      },
      vinylWish: []

    }

  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.error(err))

  }

  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.user._id
  }


  render() {

    if(!this.state.user) return null
    console.log(this.state.user)
    const { _id } = this.state.user
    return(
      <section className="section">
        {this.canModify() &&
          <div className="level-right">
            <Link to={`/users/${_id}/edit`} className="button is-black">Edit</Link>
          </div>
        }
        <div className="container">

          <div className="columns is-variable is-2">

            <div className="column is-third">
              <div className="user-info box">
                <div className="user-image">
                  <figure className="image">
                    <img src={this.state.user.image} alt={this.state.user.username} />
                  </figure>
                </div>
                <div className="username">
                  <h3 className="subheading-show">{this.state.user.username}</h3>
                </div>
                <div className="user-bio">
                  <p className="profile">{this.state.user.bio}</p>
                </div>
              </div>
            </div>

            <div className="column is-third">
              <div className="vinylCollection box">
                <h3 className="subtitle subheading-show">Vinyl collection</h3>
                <div className="columns is-multiline">
                  {this.state.user.vinyls.map(vinyl =>
                    <div key={vinyl._id} className="column is-one-third">
                      <Link to={`/vinyls/${vinyl._id}`}>
                        <img src={vinyl.image} alt={vinyl.title}/>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="column is-third">
              <div className="wishList box">
                <div className="wishList">
                  <h3 className="subtitle subheading-show">Wish List</h3>
                  <div className="columns is-multiline">
                    {this.state.vinylWish.map(wish =>
                      <div key={wish._id} className="column is-one-fifth">
                        <Link to={`/vinyls/${wish._id}`}>
                          <img src={wish.image} alt="meeeeee"/>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="sellList box">
                <h3 className="subtitle subheading-show">Sell List</h3>
                <div className="columns is-multiline">
                  {this.state.user.vinyls.map(vinyl =>
                    <div key={vinyl._id} className="column is-one-fifth">
                      <Link to={`/vinyls/${vinyl._id}`}>
                        <img src={vinyl.image} alt="meeeeee"/>
                      </Link>
                    </div>
                  )}
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
