import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext()

const Grandpa = () => {
    const [house, setHouse] = useState(1)
    const haldeHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    const ornamnets = 'diamond ring'

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h4>Grandpa</h4>

                <p>Grandpa House : {house}  <button onClick={haldeHouse}>Buy a House</button></p>
                <div style={{ display: 'flex' }}>
                    <Father house={house}
                        ornamnets={ornamnets}
                    ></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;