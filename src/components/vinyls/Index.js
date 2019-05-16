import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from './Card'
import qs from 'query-string'
import genres from '../../lib/genres'


class Index extends React.Component {
  constructor(props) {
    super(props)

    this.props.match.query = qs.parse(this.props.location.search)
    this.handleChange = this.handleChange.bind(this)
    console.log(this.props.location.search ,'SHOW ME')
    this.state= {
      vinyls: [],
      list: '',
      searchText: '',
      genre: this.props.match.query.genre || ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    // this.setState({list: this.props.location.search.substr(1)})
    axios('/api/vinyls')
      .then(res => this.setState({ vinyls: res.data }))
  }

  searchVinyl() {

    const search = new RegExp(this.state.searchText, 'i')
    const genre = new RegExp(this.state.genre, 'i')
    return this.state.vinyls.filter(vinyl => {
      return (search.test(vinyl.artist) || search.test(vinyl.title)) && genre.test(vinyl.genre)
    })
  }

  render() {

    if(!this.state.vinyls) return null
    return (
      <section className="section">
        <div className="container">
          <div className="container columns ">
            <div className="control column index-control">
              <input
                className="input"
                type="text"
                placeholder="Search term"
                name="searchText"
                onChange={this.handleChange}
              />
            </div>
            <div className="control column index-control">
              <div className="select">
                <select
                  name="genre"
                  onChange={this.handleChange}
                  value={this.state.genre || 'All'}
                >
                  <option value=''>All</option>
                  {genres.map(genre =>
                    <option key={genre} value={genre}>{genre.charAt(0).toUpperCase() + genre.substr(1)}</option>
                  )}

                </select>
              </div>
            </div>
          </div>
          <div className="columns is-multiline">
            {this.searchVinyl().map(vinyl =>
              <div key={vinyl._id} className="column is-one-fifth-desktop is-one-third-tablet">
                <Link to={`/vinyls/${vinyl._id}`}>
                  <Card {...vinyl} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}
export default Index
