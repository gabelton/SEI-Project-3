import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

class Edit extends React.Component{

  constructor() {
    super()

    this.state ={
      data: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => res.data)
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    const token = Auth.getToken()

    axios.put(`/api/users/${this.state.data._id}`, this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/users'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }


  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">

              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                      className="input"
                      name="username"
                      placeholder="eg: vinylhead93"
                      onChange={this.handleChange}
                      value={this.state.data.username || ''}
                    />
                  </div>
                  {this.state.errors.name && <div className="help is-danger">{this.state.errors.name}</div>}
                </div>
                <div className="field">
                  <label className="label">Image</label>
                  <div className="control">
                    <input
                      className="input"
                      name="image"
                      placeholder="eg: some img"
                      onChange={this.handleChange}
                      value={this.state.data.image || ''}
                    />
                  </div>
                  {this.state.errors.image && <div className="help is-danger">{this.state.errors.image}</div>}
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      name="email"
                      placeholder="eg: vinylhead93@v-mail.com"
                      onChange={this.handleChange}
                      value={this.state.data.email || ''}
                    />
                  </div>
                  {this.state.errors.email && <div className="help is-danger">{this.state.errors.email}</div>}
                </div>
                <label className="label">Bio</label>
                <div className="control">
                  <input
                    className="textarea"
                    name="bio"
                    placeholder="eg: vinylhead93"
                    onChange={this.handleChange}
                    value={this.state.data.bio || ''}
                  />
                </div>
                {this.state.errors.bio && <div className="help is-danger">{this.state.errors.bio}</div>}

                <button className="button is-black">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Edit
