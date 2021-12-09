import React from 'react';
import './style.css';

const TextBlock = ({title1, price, content}) => (
    <div className="text-block">
        <div className="text-title">
            <div><h3>{title1}</h3></div>
            <div><h3>{price}</h3></div>
        </div>
        <p>{content}</p>
    </div>
);


export default TextBlock