import React from 'react';
import axios from 'axios';
import Styled from 'styled-components';

class BoredAPI extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentActivityType: "",
            currentParticipantsNumber: 1,             
        }
    }

    handleOnChangeActivity = (event) => {
        this.setState({currentActivityType: event.target.value})
    }

    handleOnChangeParticipantsCount = (event) => {
        const newValue = Number(event.target.value);
        this.setState({currentParticipantsNumber: newValue})
    }

    render () {
        return(
            <div>
                <input 
                    onChange={this.handleOnChangeActivity}
                    placeholder="Activity"
                    name="activity"  
                    value={ this.state.currentActivityType }/>

                <input 
                    onChange={this.handleOnChangeParticipantsCount}
                    name="participantsCount" 
                    value={ this.state.currentParticipantsNumber }/>
            </div>
        )
    }
    
}

export default BoredAPI;