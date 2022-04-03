import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, ornamnets }) => {
    return (
        <div>
            <h5>Me</h5>
            <p>house {house}</p>
            <Special ornamnets={ornamnets}></Special>
        </div>
    );
};

export default MySelf;