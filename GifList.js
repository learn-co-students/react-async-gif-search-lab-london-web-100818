import React from 'react'

const GifList = (props) => {
    return(
        <ul> 
            {props.gifs.map(gif => <li> <img src={gif.images.original.url} /> </li>)} 
        </ul>)
}

export default GifList