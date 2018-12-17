import React from 'react'

class GifSearch extends React.Component {

    state = {
        inputText: ''
    }

    handleSearchChange = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    handleSearchSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGifs(this.state.inputText)
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={this.handleSearchChange} type='text' name='search' placeholder='search gifs...'/>
                    <button type='submit' onClick={this.handleSearchSubmit} >Submit</button>
                </form>
            </div>
        )
    }
}

export default GifSearch