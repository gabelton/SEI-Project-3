import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import SecureRoute from './components/common/SecureRoute'
import FlashMessages from './components/common/FlashMessages'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import VinylsShow from './components/vinyls/Show'
import VinylsNew from './components/vinyls/New'

import Login from './components/auth/Login'
import Register from './components/auth/Register'

import VinylsIndex from './components/vinyls/Index'


import UsersShow from './components/users/Show'
import UsersEdit from './components/users/Edit'


import 'bulma'
import './style.scss'

class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <FlashMessages />
          <Switch>
            <SecureRoute path="/users/:id/edit" component={UsersEdit} />
            <SecureRoute path="/users/:id" component={UsersShow} />
            <SecureRoute path="/vinyls/new" component={VinylsNew} />
            <Route path="/vinyls/:id" component={VinylsShow} />
            <Route path="/vinyls/genre" component={VinylsIndex} />
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
