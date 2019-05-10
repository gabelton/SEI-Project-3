import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import VinylsShow from './components/vinyls/Show'

import Login from './components/auth/Login'
import Register from './components/auth/Register'

import VinylsIndex from './components/vinyls/Index'


import 'bulma'
import './style.scss'

class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/vinyls/:id" component={VinylsShow} />
            <Route path="/vinyls" component={VinylsIndex} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
