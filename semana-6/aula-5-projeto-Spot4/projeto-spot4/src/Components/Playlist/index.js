import React, { Component } from 'react'
import Style from 'styled-components';
import axios from 'axios';


 class Playlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playlists: [],         
        }
    }
    
    render() {
        console.log("Playlists: ", this.state.playlists);
        const playlistsElementsList = this.state.playlists
            return (
                <div>
                    <h1>Spot4</h1>

                    <label>Artist:</label>
                    <input name="Artist" type="text"/>

                    <label>Song:</label> 
                    <input name="Song" type="text"/>

                    <label>URL</label>
                    <input name="URLmusic" type="text"/>

                    <button>Rock it!</button>

                    <ul>{ playlistsElementsList }</ul>
                </div>
            )
    }
}

export default Playlist;