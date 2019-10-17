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

    render () {
        return(
            <div>
                <input 
                    name="activity" 
                    type="text" 
                    value={ this.state.currentActivityType }/>

                <input 
                    name="participantsCount" 
                    type="number" 
                    value={ this.state.currentParticipantsNumber }/>
            </div>
        )
    }
    
}

export default BoredAPI;