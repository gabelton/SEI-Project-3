import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../vinyls/Card'
import axios from 'axios'

// const sortBy = (function () {
//   const toString = Object.prototype.toString,
//     // default parser function
//     parse = function (x) {
//       return x
//     }
//     // gets the item to be sorted
//   const  getItem = function (x) {
//     const isObject = x != null && typeof x === 'object'
//     const isProp = isObject && this.prop in x
//     return this.parser(isProp ? x[this.prop] : x)
//   }
//
//   return function sortby (array, cfg) {
//     if (!(array instanceof Array && array.length)) return []
//     if (toString.call(cfg) !== '[object Object]') cfg = {}
//     if (typeof cfg.parser !== 'function') cfg.parser = parse
//     cfg.desc = !!cfg.desc ? -1 : 1
//     return array.sort(function (a, b) {
//       a = getItem.call(cfg, a)
//       b = getItem.call(cfg, b)
//       return cfg.desc * (a < b ? -1 : +(a > b))
//     })
//   }
//
// }())
//const arr = this.state.vinyls
//const createdAt = this.state.vinyls.createdAt

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
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({genre: 'raggae'})
  }

  componentDidMount() {
    axios('/api/vinyls')
      .then(res => this.setState({ vinyls: res.data }))
  }

  render() {
    let recentFour = orderByDate(this.state.vinyls, this.state.vinyls.createdAt)
    recentFour = recentFour.slice(0,5)
    console.log(this.state.genre)
    console.log(this.state.vinyls)
    return (
      <section className="hero is-large">
        <div className="hero-body">
          <div className="container">
            <h1 className="title display">Project Black</h1>
            <h2 className="subtitle"></h2>
          </div>
        </div>
        <div className="container has-background-black">
          <div className="notification has-background-black">
            <strong>RECENTLY ADDED</strong>
            <div className="columns is-multiline has-background-black">
              {recentFour.map(vinyl =>
                <div key={vinyl._id} className="column is-one-fifth-desktop is-one-third-tablet">
                  <Link to={`/vinyl/${vinyl._id}`}>
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
            <div className="column  is-one-third-desktop  blues is-one-third-tablet has-text-centered folder">
              <Link to={'./vinyls/Blues'}>
                <img src="../images/Blues 2 .png" alt="blues" />
                <img src="../images/Blues 2clr.png" alt="blues" />
              </Link>
            </div>
            <div className="column is-one-third-desktop hip-hop is-one-third-tablet has-text-centered folder">
              <Link to={'./vinyls/Hip-Hop'}>
                <img src="../images/hip hop.png" alt="hip hop" />
                <img src="../images/hip hopclr.png" alt="hip hop" />
              </Link>
            </div>
            <div className="column is-one-third-desktop pop is-one-third-tablet has-text-centered folder">
              <Link to={'./vinyls/Pop'}>
                <img src="../images/pop.png" alt="pop" />
                <img src="../images/popclr.png" alt="pop" />
              </Link>
            </div>
            <div className="column is-one-third-desktop jazz is-one-third-tablet has-text-centered folder">
              <Link to={'./vinyls/Jazz'}>
                <img src="../images/jazz.png" alt="jazz" />
                <img src="../images/jazzclr.png" alt="jazz" />
              </Link>
            </div>
            <div className="column is-one-third-desktop electronic is-one-third-tablet has-text-centered folder">
              <Link to={'./vinyls/Electro'}>
                <img src="../images/electronic.png" alt="electronic" />
                <img src="../images/electronicclr.png" alt="electronic" />
              </Link>
            </div>
            <div className="column is-one-third-desktop metal is-one-third-tablet has-text-centered folder">
              <Link to={'./vinyls/Heavy Metal'}>
                <img src="../images/metal.png" alt="metal" />
                <img src="../images/metalclr.png" alt="metal" />
              </Link>
            </div>
            <div className="column is-one-third-desktop classical is-one-third-tablet has-text-centered folder">
              <Link to={'./vinyls/Classical'}>
                <img src="../images/classical.png" alt="classical" />
                <img src="../images/classicalclr.png" alt="classical" />
              </Link>
            </div>
            <div className="column is-one-third-desktop rock is-one-third-tablet has-text-centered folder">
              <Link to={'./vinyls/Rock & Roll'}>
                <img src="../images/rock.png" alt="rock"  />
                <img src="../images/rockclr.png" alt="rock"  />
              </Link>
            </div>
            <div className="column is-one-third-desktop genre is-one-third-tablet  has-text-centered folder">
              <Link to={'./vinyls/Reggae'}>
                <img src="../images/reggae.png" alt="reggae" />
                <img src="../images/reggaeclr.png" alt="reggae" />
              </Link>
            </div>
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
