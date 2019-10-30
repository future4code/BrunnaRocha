import React from 'react'
import TaskConfig from './TaskConfig/TaskConfig'

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>
			<TaskConfig/>
		</div>
	}
}