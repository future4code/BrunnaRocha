import React, { Component } from 'react'
import Style from 'styled-components';
import axios from 'axios';


 class Playlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
              <h1>Spot4</h1> 
              <input name="Music" type="text"/> 
              <input name="Artist" type="text"/>
              <button>Rock it!</button>
            </div>
        )
    }
}

export default Playlist;