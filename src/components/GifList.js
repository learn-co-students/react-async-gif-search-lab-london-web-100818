import React from 'react'

const GifList = ({ gifs }) => {
  const gifListEls = gifs.map( gif => {
    const url = gif.images.original.url
    console.log(url)    
    return(
      <li>
        <img src={url} alt='A Gif' />
      </li>
    )
  })
  
  return(
    <ul>
      {gifListEls}
    </ul>
  )
}

export default GifList