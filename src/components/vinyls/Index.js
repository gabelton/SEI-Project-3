import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

import Card from './Card'

class Index extends React.Component {
  constructor() {
    super()
    this.state= {
      vinyls: []
    }
  }

  componentDidMount() {
    axios('/api/vinyls')
      .then(res => this.setState({ vinyls: res.data }))
  }

  render() {
    console.log(this.state.vinyls)
    return (
      <section className="section" id="index-page">
        <div className="columns is-multiline">
          {this.state.vinyls.map(vinyl =>
            <div key={vinyl._id} className="column is-one-quarter-desktop is-one-third-tablet">
              <Link to={`/vinyls/${vinyl._id}`}>
                <Card {...vinyl} />
              </Link>
            </div>
          )}

        </div>
      </section>
    )
  }
}
export default Index
