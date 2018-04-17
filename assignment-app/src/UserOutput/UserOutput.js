import React from 'react';
import './UserOutput.css'

 const userOutput = (props) => {

 		const style={
 			backgroundColor:'grey'
 		}
		return (
			<div className="UserOutput" style={style}>
			<p> My FirstName is {props.firstname}</p>
			<p> My Last Name is {props.lastname}</p>
			</div>
		)
};

export default userOutput;