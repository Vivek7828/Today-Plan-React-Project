import React, { Component } from 'react'

class Student1 extends Component {
    state = {
        name: "Kanpur Institute Of Technology",
        Roll: 105
    }
    handleclick = (name) => {
        document.write(name)
    }
    handleclickArg = () => {
        this.handleclick(this.state.name )
    }
    render() {
        return (
            <>
                <h1> Event Handling </h1>
                <h1> Hi {this.state.name } Your Clg Name {this.state.Roll }</h1>
                <button onClick={this.handleclickArg} > Click Me </button>

            </>
        )
    }
}

export default Student1;
