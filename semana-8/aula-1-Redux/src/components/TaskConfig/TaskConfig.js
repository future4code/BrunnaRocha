import React from 'react'

 class TaskConfig extends React.Component {
    render() {
        return (
            <div>
                <h1>4TASK</h1>
                <label htmlFor="textToDo">O que precisa ser feito?</label>
                <input type="text"/>
                <button>Marcar todas como completas</button>  
                <button>Todas</button>
                <button>Pendentes</button>
                <button>Completas</button>              
            </div>
        )
    }
}

export default TaskConfig;