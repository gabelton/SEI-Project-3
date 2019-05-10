import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import Auth from '../../lib/Auth'

import Card from './Card'

class Show extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
  }

  render() {
    if(!this.state.user) return null
    return(
      <section className="section">
        <div className="container">
          {this.state.users.map(user =>
            <div key={user._id} className="">
              <Link to={`/users/${user._id}`}>
                <Card {...user} />
              </Link>
            </div>
          )}
        </div>
      </section>
    )
  }

}

export default Show
