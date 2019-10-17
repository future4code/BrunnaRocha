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
        console.log("1")
        this.setState({currentActivityType: event.target.value})
        console.log(event.target.value)
    }

    handleOnChangeParticipantsCount = (event) => {
        console.log("2")
        const newValue = Number(event.target.value);
        this.setState({currentParticipantsNumber: newValue})
    }

    fetchActivity = () => {
        console.log("3")
        axios.get('https://www.boredapi.com/api/activity', {
            params: {
                type: this.state.currentActivityType,
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