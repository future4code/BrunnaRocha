import React from 'react';
import axios from 'axios';
import Styled from 'styled-components';

class BoredAPI extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentActivityType: "",
            currentParticipantsNumber: 1,
            retrievedActivity: "",  

        }
    }

    handleOnChangeActivity = (event) => {
        this.setState({currentActivityType: event.target.value})
    }

    handleOnChangeParticipantsCount = (event) => {
        const newValue = Number(event.target.value);
        this.setState({currentParticipantsNumber: newValue})
    }

    fetchActivity = () => {
        axios.get('https://www.boredapi.com/api/activity', {
            params: {
                activity: this.state.currentActivityType,
                participants: this.state.currentParticipantsNumber,
            }
        }).then((response) => {
            this.setState({ retrievedActivity: response.data.activity})
        })
    }

    render () {
        return(
            <div>
                <input 
                    placeholder="Activity"
                    name="activity"
                    type="text"  
                    value={ this.state.currentActivityType }/>
                
                <select 
                    name="select" 
                    onChange={this.handleOnChangeActivity}>
                    <option value="social">Social</option>
                    <option value="diy">DIY</option>
                    <option value="relaxation">Relaxation</option>
                </select>

                <input 
                    onChange={this.handleOnChangeParticipantsCount}
                    name="participantsCount" 
                    type="number"
                    value={ this.state.currentParticipantsNumber }/>
                
                <button onClick={ this.fetchActivity }>
                    Search it!
                </button>

                {this.state.retrievedActivity && (
                    <h1>{this.state.retrievedActivity}</h1>
                )}
            </div>
        )
    }
    
}

export default BoredAPI;