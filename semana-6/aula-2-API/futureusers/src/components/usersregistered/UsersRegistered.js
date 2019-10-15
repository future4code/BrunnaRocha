import React, { Component } from 'react'
import PropTypes from 'prop-types'


// O nome da função principal é o mesmo do componente (SEMPRE!!!).
export default function  UsersRegistered(props) {
    const listenedUsers = props.usersList.map((eachuser) => {
        return (
           <ul>
               <li>
                   <p>Nome: {eachuser.user1.name}</p>
                    <p>Email: {eachuser.user1.email}</p>
               </li>
               <li>
                   <p>Nome: {eachuser.user2.name}</p>
                   <p>Email: {eachuser.user2.email}</p>
               </li>
               <li>
                   <p>Nome: {eachuser.user3.name}</p>
                   <p>Email: {eachuser.user3.email}</p>
               </li>
           </ul> 
        )
    })
        return (
            <div>
                <header className="App-header">
                    <h3>Future4Users</h3>
                </header> 
                {listenedUsers}
            </div>
        ) 
}


