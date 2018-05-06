import React, { Component } from 'react';
import logo from './logo.svg';
import cssClasses from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {

  state = {
    person : [
    {id:"aaa",name : "Anand", age : 30},
    {id:"aasa",name : "Neetu", age : 30},
    {id:"aasaa",name : "Vipin", age : 30},
    {id:"awqaa",name : "Shilpa", age : 30}
    ],
    showPersons:false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({person:persons});

  }

  nameChanged = (event, id) => {

    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    let personToChange = {
      ...this.state.person[personIndex]
    };
    personToChange.name = event.target.value;
    const persons = [...this.state.person];

    persons[personIndex] = personToChange;

    this.setState({
      person : persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    let persons = null;
    let btnClass = '';
    if(this.state.showPersons) {
      persons =  (
        <div> 
          {this.state.person.map((person, index) => {
                    return <ErrorBoundary key={person.id}><Person 
                          click={()=>this.deletePersonHandler(index)}
                          name={person.name} 
                          age={person.age}
                          changed={(event)=>this.nameChanged(event, person.id)}/></ErrorBoundary>
                  })}
             
        </div>)
        btnClass = cssClasses.Red;
    }
    return (
      <div className={cssClasses.App}>
        <h1> I am React</h1>
        <p>This is good</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}> Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
