import React from 'react';
import './style.css';

const SizeBlock = ({title3, size1, size2, size3}) => (
    <div className="size-block">
    <h3>{title3}</h3>
    <div className="size">
        <div className="S"><p>{size1}</p></div>
        <div className="M"><p>{size2}</p></div>
        <div className="L"><p>{size3}</p></div>
        </div>
    </div>
);


export default SizeBlock