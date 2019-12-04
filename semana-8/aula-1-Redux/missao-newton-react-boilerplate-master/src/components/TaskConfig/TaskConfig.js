import React from 'react';
import TaskCard from './TaskCard.js';
import { connect } from "react-redux";

 class TaskConfig extends React.Component {
	 constructor(props) {
		 super(props)
		 this.state = {
			input: "", 
		}
	 }

	handleOnChange = (e) => {
		this.setState({input:e.target.value})	
	}
	 
    render() {
		console.log(this.props.allTasks)
		const allTasks = this.props.allTasks.map((element) => {
			return <TaskCard task={element}/>
		})
        return (
            <div>
                <h1>4TASK</h1>
                <label htmlFor="textToDo">O que precisa ser feito?</label>
                <input value={this.state.input} onChange={this.handleOnChange} type="text"/>
                <button>Marcar todas como completas</button>  
                <button>Todas</button>
                <button>Pendentes</button>
                <button>Completas</button> 
                <div>
                    {allTasks}
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