import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'


import 'bulma'
import './style.scss'

class App extends React.Component {
  render(){
    return(
      <HashRouter>
        <Navbar />
        <main>
          <Route path="/" component={Home} />
        </main>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
