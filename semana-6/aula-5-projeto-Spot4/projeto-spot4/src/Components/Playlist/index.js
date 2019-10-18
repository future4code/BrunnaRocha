import React, { Component } from 'react'
import styled from 'styled-components';
import axios from 'axios';

    const Title = styled.h1 `
        display: flex;
        justify-content: center;
    `
    const List = styled.label `
        display: grid;
        grid-template-columns: 1fr;
        margin-left: 200px;
        margin-right: 200px;
        margin-top: 50px;
    `
    const BodyConfig = styled.div `
        background: #F29066;  

    `
    const Button = styled.button `
        display: flex;
        flex-direction: row;
        justify-content: center;
    `




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
                <BodyConfig>
                    <Title>Spot4</Title>

                    <List>
                        <label>Artist:</label>
                        <input name="Artist" type="text"/>
                    </List>
                    
                    <List>
                        <label>Song:</label> 
                        <input name="Song" type="text"/>
                    </List>
                    
                    <List>
                        <label>URL</label>
                        <input name="URLmusic" type="text"/>
                    </List>
                    

                    <Button>Rock it!</Button>

                    <ul>{ playlistsElementsList }</ul>
                </BodyConfig>
            )
    }
}

export default Playlist;