import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'

class Comment extends React.Component {

  constructor(props) {
    console.log(props, 'PROPS')
    super(props)

    this.state = {
      data: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }




  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
    console.log(this.state.data)
  }

  handleClick(e) {
    //e.preventDefault()

    const token = Auth.getToken()

    axios.post(`/api/vinyls/${this.props.match.params.id}/comments`, this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
  }

  render() {
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea className="textarea" name="content" placeholder="Add a comment..." onChange= {this.handleChange}></textarea>
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <a className="button is-info" onClick={this.handleClick}>Submit</a>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <label className="checkbox">
                  <input type="checkbox"  /> Press enter to submit
                </label>
              </div>
            </div>
          </nav>
        </div>
      </article>
    )
  }


}


export default Comment
