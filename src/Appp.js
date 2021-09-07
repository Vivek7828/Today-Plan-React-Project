import React, { Component } from 'react'

import Student1 from './Student'

class Appp extends Component {
    state = {
        users: [
            { id: 105, names: "Vivek", pass: "hello55" },
            { id: 106, names: "Suresh", pass: "hello63" },
            { id: 107, names: "Ramesh", pass: "hello45" }
        ], isloggedin: false
    };
    render() {
        const newArr = this.state.users.map((value) => {
            console.log(value)
            return <h1 key ={value.id} > id: {value.id} names: {value.names} pass: {value.pass} </h1>

        })
        return (
            <>
                     {newArr}
            
            </>
        )
    }
}

export default Appp;
