import React from 'react';
import './Post.css'


export function Post(props) {
    return (
        <div className="container">    
            <div className="post">
                <img 
                    src={props.url} 
                    className="postImg" 
                />
                <input 
                    id="comentario-btn"
                    placeholder="Escreva um comentário"
                    type="text"
                />
            </div>  
        </div>
    )
}