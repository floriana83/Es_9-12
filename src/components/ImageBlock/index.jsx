import React from 'react';
import './style.css';

const ImageBlock = ({img}) => (
    <div className="img-block">
    <img src={img}></img>
    </div>
);


export default ImageBlock