import React from 'react';
import './UserInput.css';
import 'bootstrap/dist/css/bootstrap.min.css';

 const userInput = (props) => {
		return (
			<div className='UserInput'>
			<div className="input-group">
  				<div className="input-group-prepend">
    				<span className="input-group-text" id="">First and last name</span>
  				</div>
  				<input className="text" class="form-control" onChange={props.firstNameChanged}/>
  				<input className="text" class="form-control" onChange={props.lastNameChanged}/>
			</div>

			</div>
		)
};

export default userInput;