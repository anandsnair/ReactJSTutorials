import React, { Component } from 'react';
import logo from '../logo.svg';
import cssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/withClass';


export const AuthContext = React.createContext(false);

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor',props);
    this.state = {
      person : [
        {id:"aaa",name : "Anand", age : 30},
        {id:"aasa",name : "Neetu", age : 30},
        {id:"aasaa",name : "Vipin", age : 30},
        {id:"awqaa",name : "Shilpa", age : 30}
        ],
        showPersons:false,
        toggleClicked : 0,
        autheniticated : false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] Inside shouldComponentUpdate()')
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[App.js] Inside componentWillUpdate()')
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[App.js] Inside componentDidUpdate()')
  }



  /* state = {
    person : [
    {id:"aaa",name : "Anand", age : 30},
    {id:"aasa",name : "Neetu", age : 30},
    {id:"aasaa",name : "Vipin", age : 30},
    {id:"awqaa",name : "Shilpa", age : 30}
    ],
    showPersons:false
  } */

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

    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked +1
      }
    });
  }

  loginHandler = () => {
    this.setState({
      autheniticated : !this.state.autheniticated
    })
  }

  render() {
    console.log('[App.js] Inside render()')
    let persons = null;
    if(this.state.showPersons) {
      persons =  <Persons 
          persons={this.state.person}
          clicked={this.deletePersonHandler}
          changed={this.nameChanged}/>             
        
    }
    return (
      <WithClass classes={cssClasses.App}>
        <Cockpit
        persons={this.state.person}
        showPersons={this.state.showPersons}
        clicked={this.togglePersonsHandler}
        login={this.loginHandler}/>
        <AuthContext.Provider value = {this.state.autheniticated}>
          {persons}
        </AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
