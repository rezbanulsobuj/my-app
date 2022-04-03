import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {
    const { haldleAddTocart, tshirt } = props
    const { name, flags, area } = tshirt
    return (
        <div className='single-shirt'>
            <img src={flags.png} alt="" />
            <h1>{name.common}</h1>
            <h1>{area}</h1>
            <button onClick={() => haldleAddTocart(tshirt)}>add to cart</button>
        </div>
    );
};

export default Tshirt;