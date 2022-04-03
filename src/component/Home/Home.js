import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTshirt from '../Hooks/UseTshirt';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tshirt, setTshirt] = useTshirt()
    const [cart, setCart] = useState([])

    const haldleAddTocart = (selectItem) => {
        const exist = cart.find(tshirt => tshirt.area === selectItem.area)
        if (!exist) {
            const newCart = [...cart, selectItem]
            setCart(newCart)
        }
        else {
            alert('this item already added.please add new item')
        }

    }
    const removeFromCart = (removeItem) => {
        const remove = cart.filter(tshirt => tshirt.area !== removeItem.area)
        setCart(remove)

    }
    return (
        <div className='home-cart'>
            <div className="t-shirt-container">
                <h3>Length Country {tshirt.length}</h3>
                <div className='t-shirt-map'>
                    {
                        tshirt.map(tshirt => <Tshirt tshirt={tshirt}
                            haldleAddTocart={haldleAddTocart}
                        ></Tshirt>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    removeFromCart={removeFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;