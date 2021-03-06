
import React from 'react'
import cssClasses from './Button.css'
const button = (props) => {
    return (
        <div>
            <button
            className={[cssClasses.Button , cssClasses[props.btnType]].join(' ')} 
            onClick={props.clicked}>{props.children}</button>
        </div>
    );
};

export default button