import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from './Card'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      vinyls: [],
      list: ''
    }
  }

  componentDidMount() {
    this.setState({list: this.props.location.search.substr(1)})
    axios('/api/vinyls')
      .then(res => {
        if(!this.state.list){
          return this.setState({ vinyls: res.data })
        }
        const vinylsList = res.data.filter(vinyl => vinyl.genre === this.state.list)
        return this.setState({ vinyls: vinylsList })
      }
      )
  }

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="columns is-multiline">
          {this.state.vinyls.map(vinyl =>
            <div key={vinyl._id} className="column is-one-fifth-desktop is-one-third-tablet">
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
