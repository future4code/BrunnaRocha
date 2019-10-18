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
                errorMessage: undefined,
                playlistNameValue: ""         
            }
        }


        componentDidMount() {
            this.createPlaylists();
          }
        
          createPlaylists = () => {
            // urlBase: "https://us-central1-spotif4.cloudfunctions.net/api"
            // token: "32382399c21f8450ed2efe9b44135bb5"
            const data = {
                name: this.state.playlistNameValue
            };

            const request = axios.post(
              "https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist",
              {
                headers: {
                  auth: "32382399c21f8450ed2efe9b44135bb5"
                }
              }
            );
        
            request
              .then(response => {
                console.log(response);
                this.setState({ playlists: response.data.result.list });
              })
              .catch(error => {
                console.log(error);
                this.setState({
                  errorMessage:
                    "Ocorreu um erro! Atualize a página para tentar novamente!"
                });
              });
          };

        addNewPlaylist = () => {
            // urlBase: "https://us-central1-spotif4.cloudfunctions.net/api"
            // token: "32382399c21f8450ed2efe9b44135bb5"
            const data = {
                name: this.state.playlistNameValue
            };
        
            const request = axios.post(
              "https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist",
              data,
              {
                headers: {
                  auth: "32382399c21f8450ed2efe9b44135bb5"
                }
              }
            );
        }

    
        render() {
            console.log("Playlists: ", this.state.playlists)
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
                        

                        <Button onClick={this.addNewPlaylist}>Rock it!</Button>

                        <ul>{ playlistsElementsList }</ul>
                    </BodyConfig>
                );
        }
}

export default Playlist;