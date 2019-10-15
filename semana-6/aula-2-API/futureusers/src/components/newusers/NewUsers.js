import React, { Component } from 'react'

// O nome da função principal é o mesmo do componente (SEMPRE!!!).
export default function NewUsers() {
        return (
            <div>
                <input type="text" name="name" value="name" />
                <input type="text" name="email" value="email" />
                <button>Show me users</button>
                <button>Save data</button>
            </div>
        )
}
