import React from 'react';
import cssClasses from './Task.css';

const task = (props) => {
    console.log("key="+props.key);
    return(
        <div id={props.id} className={cssClasses.container} onClick={props.containerClicked}>
            <input className={cssClasses.checkmark} type="checkbox" onClick={props.onRemove}/>
            <div className={cssClasses.taskItem} onClick={props.openTaskBox}>{props.task}</div>
        </div>
    );
}

export default task;