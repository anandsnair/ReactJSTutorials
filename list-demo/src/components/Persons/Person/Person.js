import React from 'react';
import cssClasses from './Person.css';
import {AuthContext} from '../../../containers/App'
const person = (props) => {

	const style = {
		'@media (min-width : 500px' : {
					width : '450px'
		}
	}

	return (
			<div className={cssClasses.Person} style={style}>
				<AuthContext.Consumer>
					{auth => auth ? <p> I am Autheniticated </p> : null}
				</AuthContext.Consumer>
				<p onClick={props.click}> I am a {props.name} and I am {props.age} years old</p>
				<p>{props.children}</p>
				<input type="text" onChange={props.changed} value={props.name}/>
			</div>
			)
};

export default person;