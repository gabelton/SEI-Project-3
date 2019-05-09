import React from 'react'
import { Link, withRouter} from 'react-router-dom'
import Auth from'../lib/Auth'

class Navbar extends React.Component{
  constructor(props){
    super(props)
    this.state ={ active: false}
    this.logout = this.logout.bind(this)
    this.toggleActive = this.toggleActive.bind(this)
  }


  logout(){
    Auth.removeToken()
    this.props.history.push('/')
  }
  toggleActive(){
    this.setState({ active: !this.state.active})
  }
  componentDidUpdate(prevProps){
    if(prevProps.location.pathname !== this.props.location.pathname){
      this.setState({ active: false})
    }
  }
  render(){
    return (
      <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            {/* branding and burger menu */}
            <Link to="/" >
              <img className="logo" src="https://i.imgur.com/2MdZJ7h.png"/>
            </Link>

            <a role="button" className={`navbar-burger${this.state.active ? ' is-active' : ''}`}
              onClick={this.toggleActive}>

              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="text" placeholder="Search" />
            </div>
            <div className="control">
              <a className="button is-info">
          Search
              </a>
            </div>
          </div>

          <div className={`navbar-menu${this.state.active ? ' is-active' : ''}`}>
            {/* everything else */}

            <div className="navbar-start">
              {/* left hand links */}
              <Link to="/vinyls" className="navbar-item">Vinyl collection</Link>
              {Auth.isAuthenticated() && <Link to="/vinyls/new" className="navbar-item">Add new vinyl</Link>}
            </div>

            <div className="navbar-end">
              {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
              {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
              {/* right hand links */}
              {Auth.isAuthenticated() && <a className= "navbar-item" onClick={this.logout}>Logout</a>}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default  withRouter(Navbar)
