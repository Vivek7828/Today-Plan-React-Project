import Plan from './Plan';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    items: [],
    text: ""
  }
  handlChange = e => {
    this.setState({ text: e.target.value })
  }
  handleAdd = () => {
    if (this.state.items !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  }
  handleDelete = (id) => {
    console.log("deleted", id);
    const olditems = [...this.state.items]
    const items = olditems.filter((element, i) => {
      return i!==id
    })
    this.setState({items:items})
  }
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center "> Today's Plan </h2>
            <div className="row">
              <div className="col-9">
                <input type="text" className="form-control" placeholder="Write your plan Here" value={this.state.text} onChange={this.handlChange}></input>
              </div>
              <div className="col-2">
              <button type="button" className="btn btn-warning px-5 fw-bolder" onClick={this.handleAdd}>Add</button>     
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">{
                  this.state.items.map((value, i) => {
                    return <Plan key={i} id={i} senddata={this.handleDelete} value={value} />
                  })
                }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
 }
export default App;


