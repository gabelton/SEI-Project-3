import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

import Home from './components/Home'

import 'bulma'
import './style.scss'

class App extends React.Component {
  render(){
    return(
      <HashRouter>
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
