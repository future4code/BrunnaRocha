import React from 'react';
import './Post.css'


export function Post(props) {
    return (
        <div className="container">    
            <div className="post">
                <h3>
                    Brunna Rocha
                </h3>
                <img 
                    src={props.url} 
                    className="postImg" 
                />
                <input 
                    id="comentario-btn"
                    placeholder="Escreva seu comentário"
                    type="text"
                />
                <button type="button">
                   Comentar 
                </button>
            </div>  
        </div>
    )
}