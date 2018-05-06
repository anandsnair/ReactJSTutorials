import React from 'react';
import cssClasses from './Taskbox.css';

const taskbox = (props) => {
    console.log("in taskbox");
    return(
        <div className={cssClasses.container}>
            <label className={cssClasses.header}>{props.currentCardId}</label>
            <br/>
            <label>Due Date</label>
            <input className={cssClasses.inputArea} type="text" />
        </div>
    )
}

export default taskbox;