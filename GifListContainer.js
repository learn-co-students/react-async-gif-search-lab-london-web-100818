import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch';

const URL = 'http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g'

class GifListContainer extends React.Component {


    state = {
        gifs: [],
    }

    componentDidMount() {
        fetch(URL)
            .then(resp => resp.json())
            .then(resp => this.setState({
                gifs: resp.data.slice(0, 3)
            }))
    }

    fetchGifs = (search) => {
        return fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(resp => this.setState({
                gifs: resp.data.slice(0, 3)
            }))
    }

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer