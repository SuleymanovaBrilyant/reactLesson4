import React from 'react';
import './CInsStyle/Usaqlar.css';
import Images from './image/referee.jpeg'

function Usaqlar() {
    return (
        <div>
            <div className='Flex'>
                <div>
                    <h2>Information</h2>
                    <h4>23/24 XXXV round "Karabakh" 4-3 "Turan Tovuz"</h4>
                    <p></p>
                </div>
                <img className='ImagesMen' src={Images} alt="" />
            </div>
        </div>
    );
}

export default Usaqlar;
