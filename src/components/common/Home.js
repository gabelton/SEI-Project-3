import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../vinyls/Card'
import axios from 'axios'
import genres from '../lib/genres'

function orderByDate(arr) {
  return arr.slice().sort(function (a, b) {
    const aDate = new Date(a.createdAt)
    const bDate = new Date(b.createdAt)
    return bDate - aDate
  })
}

class Home extends React.Component {
  constructor() {
    super()
    this.state= {
      vinyls: [],
      genre: {}
    }
  }

  componentDidMount() {
    axios('/api/vinyls')
      .then(res => this.setState({ vinyls: res.data }))
  }

  render() {
    let recentFour = orderByDate(this.state.vinyls, this.state.vinyls.createdAt)
    recentFour = recentFour.slice(0,4)
    console.log(this.state.genre)
    console.log(this.state.vinyls)
    return (
      <section className="hero is-large">
        <div className="hero-body">
          <div className="container">
            <h1 className="title display title-home">Project Black</h1>
            <h2 className="subtitle"></h2>
          </div>
        </div>
        <div className="container">
          <div className="notification ">
            <strong>RECENTLY ADDED</strong>
            <div className="columns is-multiline">
              {recentFour.map(vinyl =>
                <div key={vinyl._id} className="column is-one-quarter-desktop is-one-third-tablet">
                  <Link to={`/vinyls/${vinyl._id}`}>
                    <Card {...vinyl} />
                  </Link>
                </div>
              )}

            </div>
          </div>
        </div>
        <div className="container">
          <strong>GENRE</strong>
          <div className="columns is-multiline is-centered">
            {genres.map(genre =>
              <div key={genre} className="column  is-one-third-desktop  blues is-one-third-tablet has-text-centered folder">
                <Link to={`/vinyls/${genre}`}>
                  <img src={`/images/${genre}.png`} alt={genre} />
                  <img src={`/images/${genre}-clr.png`} alt={genre} />
                </Link>
              </div>
            )}
          </div>
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Project black </strong> by <a>Team Black</a>.
            </p>
          </div>
        </footer>
      </section>
    )
  }
}

export default Home
