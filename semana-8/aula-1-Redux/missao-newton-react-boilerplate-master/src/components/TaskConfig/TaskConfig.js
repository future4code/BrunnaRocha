import React from 'react';
import TaskCard from './TaskCard.js';
import { connect } from "react-redux";

 class TaskConfig extends React.Component {
	 constructor(props) {
		 super(props)
	 
		 this.state = {
			  
		}
	 }
	 
    render() {
		console.log(this.props.allTasks)
        return (
            <div>
                <h1>4TASK</h1>
                <label htmlFor="textToDo">O que precisa ser feito?</label>
                <input type="text"/>
                <button>Marcar todas como completas</button>  
                <button>Todas</button>
                <button>Pendentes</button>
                <button>Completas</button> 
                <div>
                    {() => {this.props.allTasks.map((element) => {
						return <TaskCard task={element}/>
					})}}
                </div>             
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
	  allTasks: state.tasksReducer.tasks
	};
  };

export default connect(mapStateToProps)(TaskConfig);