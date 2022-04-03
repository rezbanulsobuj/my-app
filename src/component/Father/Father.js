import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({ house, ornamnets }) => {
    return (
        <div>
            <h3>Father</h3>
            <p>Grandpa House : {house}</p>
            <div style={{ display: 'flex' }}>
                <MySelf house={house}
                    ornamnets={ornamnets}
                ></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;