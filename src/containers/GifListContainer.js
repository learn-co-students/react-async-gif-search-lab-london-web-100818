import React, { Component } from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
  state = {
    gifs: [],
    searchTerm: ''
  }

  getGifs = () => {
    const url = 'http://api.giphy.com/v1/gifs/search?q=' + this.state.searchTerm + '&api_key=dc6zaTOxFJmzC&rating=g'
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        const gifs = resp.data

        this.setState({ gifs })
      })
  }

  updateSearchTerm = searchTerm => {
    this.setState({ searchTerm })

    this.getGifs()
  }

  render() {
    const { updateSearchTerm } = this
    const { gifs } = this.state
    return(
      <div>
        <GifSearch getSearchTerm={updateSearchTerm}/>
        <GifList gifs={gifs} />
      </div>
    )
  }
}

export default GifListContainer