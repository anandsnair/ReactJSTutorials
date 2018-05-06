import React from "react";
import cssClasses from './Cockpit.css'

const cockpit = (props) => {
    let btnClass = '';
    if(props.showPersons) {
        btnClass = cssClasses.Red;
    }
    const assignedClasses =[];
    if(props.persons.length <= 2 ) {
        assignedClasses.push(cssClasses.red)
    }

    if(props.persons.length <= 1 ) {
        assignedClasses.push(cssClasses.bold)
    }
    return <div className={cssClasses.Cockpit}>
            <h1> I am React</h1>
            <p className={assignedClasses.join(' ')}>This is good</p>
            <button className={btnClass} onClick={props.clicked}> Toggle Persons</button>
            <button onClick={props.login}> Login </button>
           </div>

}

export default cockpit;