import React, { Component } from 'react';

const GiftList = (props) => 
    <ul>
        {props.gifs.map(gif => <li key={gif.id}><img src={gif.images.original.url}/></li>)}
    </ul>



export default GiftList;