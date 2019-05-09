import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

import Card from './Card'

class Index extends React.Component {
  constructor() {
    super()
    this.state= {
      vinyls: []
    }
  }

  componentDidMount() {
    axios('api/vinyls')
  }
}
