import React from 'react'
import axios from 'axios'
// import Auth from '../../lib/Auth'

import Card from './Card'

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


  render() {
    if(!this.state.user) return null
    console.log(this.state)
    return(
      <section className="section">
        <div className="container">
          <Card {...this.state.user} />
        </div>
      </section>
    )
  }

}

export default Show
