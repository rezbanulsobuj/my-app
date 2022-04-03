import React from 'react';

import './Cart.css'

const Cart = (props) => {
    const { cart, removeFromCart } = props
    let command;
    if (cart.length === 0) {
        command = <p>please add new item</p>
    }
    else if (cart.length === 1) {
        command = <p>please add more items</p>
    }
    else {
        command = <p>Thanks for added</p>
    }
    return (
        <div className='main-cart'>
            <h1>selected item = {cart.length}</h1>

            {
                cart.map(Tshirt =>
                    <p>{Tshirt.name.common} <button onClick={() => removeFromCart(Tshirt)}>x</button></p>

                )
            }
            {command}
            {cart.length === 3 && <div className='orange'>
                <p>this is three position</p>
                <h3>added more country</h3>
            </div>}
            {cart.length === 0 || <p className='orange'>this is false</p>}
            {cart.length !== 4 ? <p>keep adding</p> : <button>Clear All</button>}

        </div>
    );
};

export default Cart;