import React from 'react'

export default function TaskCard(props) {
    return (
        <div>
            <p>{props.task.name}</p>
            <button>Completar</button>
            <button>Deletar</button>
        </div>
    )
}
