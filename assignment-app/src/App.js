import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {

  state = {
    firstname : "Anand",
    lastname : "Nair"
  }

  firstNameChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      firstname : event.target.value
    })
  } 

  lastNameChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      lastname : event.target.value
    })
  } 


  render() {
    return (
      <div className="App">
        <UserInput firstNameChanged={this.firstNameChangeHandler} lastNameChanged={this.lastNameChangeHandler}/>
        <UserOutput firstname={this.state.firstname} lastname={this.state.lastname}/>
      </div>
    );
  }
}

export default App;
