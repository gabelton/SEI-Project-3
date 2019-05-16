import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

class Show extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      user: {
        vinyls: [],
        vinylWish: []
      }
    }

  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .then(() => {
        if(this.props.location.state) {
          return this.handleWish()
        }
      })
      .catch(err => console.error(err))
  }

  handleWish() {
    const token = Auth.getToken()
    const currentUser = this.state.user._id


    const vinylWish = this.state.user.vinylWish.slice()
    vinylWish.push(this.props.location.state.vinyl)
    const user = {...this.state.user, vinylWish}
    console.log('TO BE PUSHED TO DB', vinylWish)
    axios.put(`/api/users/${currentUser}`, {vinylWish: vinylWish}, {headers: { 'Authorization': `Bearer ${token}` }})
      .then(() => this.setState({ user }))
      .catch(err => console.error(err))


    //axios.post(`/api/users/${Auth.getPayload().sub}/vinylWish`, this.state.vinyl._id ,{
    //  headers: { 'Authorization': `Bearer ${token}` }
    //  })
  }


  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.user._id
  }


  render() {

    console.log(this.props.location.state, 'new item')
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
                    {this.state.user.vinylWish.map(vinyl =>
                      <div key={vinyl._id} className="column is-one-fifth">
                        <Link to={`/vinyls/${vinyl._id}`}>
                          <img src={vinyl.image} alt={vinyl.title}/>
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
