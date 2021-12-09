import React from 'react';
import './style.css';

const ColorBlock = ({title2, color1, color2, color3, color4})=> (
    <div className="color-block">
    <h3>{title2}</h3>
    <p className="b">{color1}</p>
    <p className="v">{color2}</p>
    <p className="y">{color3}</p>
    <p className="g">{color4}</p>
    </div>
);


export default ColorBlock