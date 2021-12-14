import React from 'react';
import TextBlock from '../TextBlock';
import ColorBlock from '../ColorBlock';
import SizeBlock from '../SizeBlock';
import Button from '../Button';
import ImageBlock from '../ImageBlock';
import './style.css';




const ProductCard = () => (
<div className="card">
    <ImageBlock img="https://res.cloudinary.com/db46klhlo/image/upload/v1639056543/jakob-owens-O_bhy3TnSYU-unsplash.jpg"/>
    <div className="content-box">
        <TextBlock title1="Backpack" price="34$" content="With a concept designed to be easy to understand, RAINS bridge the gap between geography and lifestyle."/>
        <ColorBlock title2="Colors" color1="b" color2="v" color3="y" color4="g"/>
        <SizeBlock title3="Size" size1="S" size2="M" size3="L"/>
        <Button titleBtn="Add to cart"/>
        
    </div>
</div>
);


export default ProductCard