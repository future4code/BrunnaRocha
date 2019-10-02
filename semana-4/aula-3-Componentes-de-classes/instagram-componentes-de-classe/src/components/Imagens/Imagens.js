import React from 'react';
import './Imagens.css'
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

export function Imagens() {
    return (
        <div className="imagens-container"> 
            <div>
                <img src={img1} className="img-1" alt="sunshine" />
            </div>
            <div>
                <img src={img2} className="img-1" alt="parking lot" />
            </div>
            <div>
                <img src={img3} className="img-1" alt="Arabic Paparazzi" />
            </div>
            
        </div>
    )
}