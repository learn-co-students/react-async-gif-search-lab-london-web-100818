import React, { Component } from 'react';

import GiftList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const URL = 'http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g'

const base = 'http://api.giphy.com/v1/gifs/search?q='
const api = '&api_key=dc6zaTOxFJmzC&rating=g'


class GifListContainer extends Component {

    state = {
        gifs: []
    }

    handleSearch = (search) => {
        fetch(base.concat(search + api))
            .then(resp => resp.json())
            .then(data => this.setState({
                gifs: data.data.slice(0,3)
            }))
        }

    componentDidMount(){
        fetch(URL) 
            .then(resp => resp.json())
            .then(data => this.setState({
                gifs: data.data.slice(0,3)
            }))
    }

    render(){
        return <div>
            <GifSearch search={this.handleSearch}/>
            <GiftList gifs={this.state.gifs} />
        </div>
    }
}

export default GifListContainer;