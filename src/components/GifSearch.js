import React, { Component} from 'react';

class GifSearch extends Component {

    state = {
        search: ""
    }

    handleChange = (e) => 
        this.setState({
            search: e.target.value
        })
    

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.search(this.state.search)
    } 

    render(){
        return <form onSubmit={this.handleSubmit}>
            <label>Search:</label>
            <input type='text' onChange={this.handleChange}></input><br></br>
            <button type='submit' >Search</button>
        </form>
    }
}

export default GifSearch;