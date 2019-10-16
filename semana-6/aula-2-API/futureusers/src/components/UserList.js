import React, { Component } from 'react'
import styled from 'styled-components'


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
              
        }
    }
     
    render() {
        return (
            <UserListContainer>
                <h3> Usuários cadastrados </h3>
                {
                    userList.map((user, i) => {
                        return (
                            <UserListItemContainer>
                                <p>{user.name}</p>
                                <UserListDeleteButton> Deletar usuário </UserListDeleteButton>
                            </UserListItemContainer>
                        ) 
                    })
                }
            </UserListContainer>
        )
    }
}

export default UserList