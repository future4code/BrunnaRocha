import React from 'react';
import './Imagens.css'
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

export function Imagens() {
    return (
        <div className="container"> 
            <div className="imagens-container">
                
                <div className="post1">
                    <img src={img1} className="img-1" alt="sunshine" />
                    <input id="comentario-btn"
                        placeholder="Escreva um comentário"
                        type="text"
                    />
                </div>   
            

                <div className="post2">
                    <img src={img2} className="img-2" alt="parking lot" />
                    <input id="comentario-btn"
                        placeholder="Escreva um comentário"
                        type="text"
                    /> 
                </div> 
                      
                <div className="post3">
                    <img src={img3} className="img-3" alt="Arabic Paparazzi" />
                    <input id="comentario-btn"
                        placeholder="Escreva um comentário"
                        type="text"
                    />
                </div>

            </div>
            
            
            
        </div>
    )
}