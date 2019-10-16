import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const UserListContainer = styled.div ``

const UserListItemContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const UserListDeleteButton = styled.p `
  color: red;

`

const userList = [
    {
      id: "id1",
      name: "Emmanuel"
    }
  ]  

class UserList extends React.Component {
    constructor(props) {
        super(props)
     
        this.state = {
            list: []              
        }
    }

    performGetAllUsersRequest = () => {
        axios
        .get("https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers",
            {
                headers:{
                    "api-token": "32382399c21f8450ed2efe9b44135bb5"
                }
            }
        )
        .then((res) => {
            this.setState({
                list: res.data.result
            })
            console.log(res.data)
        })
    }

    componentDidMount () {
        this.performGetAllUsersRequest()
    }

    onDeleteClick = (id) => {
        axios
        .delete(`https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?${id}`,
        {
            headers:{
                "api-token": "32382399c21f8450ed2efe9b44135bb5"
            }
        }
        )
        .then(() => {
            this.performGetAllUsersRequest()
        })
    })

     
    render() {
        return (
            <UserListContainer>
                <h3> Usuários cadastrados </h3>
                {
                    this.state.list.map((user, i) => {
                        return (
                            <UserListItemContainer key={ i }>
                                <p>{user.name}</p>
                                <UserListDeleteButton onClick= { () => {this.onDeleteClick(user.id)} }> Deletar usuário </UserListDeleteButton>
                            </UserListItemContainer>
                        ) 
                    })
                }
            </UserListContainer>
        )
    }
}

export default UserList