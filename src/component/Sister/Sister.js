import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Sister = ({ house }) => {
    const [ornamnets, gift] = useContext(RingContext)
    return (
        <div>
            <h3>Sister</h3>
            <p>sister house {house}</p>

        </div>
    );
};

export default Sister;