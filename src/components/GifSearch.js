import React, { Component } from 'react'

class GifSearch extends Component {
  state = {
    searchInput: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    
    const { getSearchTerm } = this.props
    const { searchInput } = this.state

    getSearchTerm(searchInput)
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    const { handleSubmit, handleChange } = this
    return(
      <form onSubmit={handleSubmit}>
        <label htmlFor='searchInput'>Search For a Gif:</label>
        <input
          type='text'
          id='searchInput'
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
    )
  }
}

export default GifSearch