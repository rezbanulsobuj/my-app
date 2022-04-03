import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h3>Special</h3>
            <button onClick={() => setHouse(house + 1)}>Buy Now</button>
        </div>
    );
};

export default Special;