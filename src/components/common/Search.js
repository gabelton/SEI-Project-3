import React from 'react'
import { Link, withRouter} from 'react-router-dom'




class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      users: []
    }
    this.handleChange = this.handleChange.bind(this)
  }
}




export default  withRouter(Search)
