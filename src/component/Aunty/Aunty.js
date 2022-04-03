import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext)
    const addMoreItem = () => {
        setHouse(house + 1)
    }
    return (
        <div>
            <h4>Aunty</h4>
            <button onClick={addMoreItem}>Aunty Magic</button>
        </div>
    );
};

export default Aunty;