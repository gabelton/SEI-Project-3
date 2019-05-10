import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../vinyls/Card'
import axios from 'axios'



class Home extends React.Component {
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
      <section className="hero is-large">
        <div className="hero-body">
          <div className="container">
            <h1 className="title display">Project Black</h1>
            <h2 className="subtitle"></h2>
          </div>
        </div>
        <div className="container">
          <div className="notification">
            <strong>RECENTLY ADDED</strong>
            <div className="columns is-multiline">
              {this.state.vinyls.map(vinyl =>
                <div key={vinyl._id} className="column is-one-fifth-desktop is-one-third-tablet">
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
            <div className="column  is-one-third-desktop  blues is-one-third-tablet has-text-centered">
              <img src="../images/Blues 2 .png" alt="blues" />
            </div>
            <div className="column is-one-third-desktop hip-hop is-one-third-tablet has-text-centered">
              <img src="../images/hip hop.png" alt="hip hop" />
            </div>
            <div className="column is-one-third-desktop pop is-one-third-tablet has-text-centered">
              <img src="../images/pop.png" alt="pop" />
            </div>
            <div className="column is-one-third-desktop jazz is-one-third-tablet has-text-centered">
              <img src="../images/jazz.png" alt="jazz" />
            </div>
            <div className="column is-one-third-desktop electronic is-one-third-tablet has-text-centered">
              <img src="../images/electronic.png" alt="electronic" />
            </div>
            <div className="column is-one-third-desktop metal is-one-third-tablet has-text-centered">
              <img src="../images/metal.png" alt="metal" />
            </div>
            <div className="column is-one-third-desktop classical is-one-third-tablet has-text-centered">
              <img src="../images/classical.png" alt="classical" />
            </div>
            <div className="column is-one-third-desktop rock is-one-third-tablet has-text-centered">
              <img src="../images/rock.png" alt="rock"  />
            </div>
            {/*<div className="column is-one-third-desktop genre is-one-third-tablet  has-text-centered">
              <Link to={`/vinyls/${this.state.vinyls.genre.reggae}`}><img src="../images/reggae.png" alt="reggae" />
                <img src="../images/reggaeclr.png" alt="reggae" />
              </Link>
            </div> */}
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
